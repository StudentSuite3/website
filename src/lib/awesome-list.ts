export interface AwesomeEntry {
  name: string;
  url: string;
  description: string;
  /** The `###` heading the entry sits under, when its section has them. */
  subsection?: string;
}

export interface AwesomeSection {
  title: string;
  entries: AwesomeEntry[];
}

const HEADING_PATTERN = /^## (.+)/;
const SUBHEADING_PATTERN = /^### (.+)/;
const ENTRY_PATTERN = /^- \*\*\[(.+?)\]\((.+?)\)\*\*\s*-\s*(.+)$/;

/** Badges become their alt text and inline code loses its backticks for plain-text rendering. */
export function cleanDescription(text: string): string {
  return text
    .replace(/\s*!\[([^\]]*)\]\([^)]*\)/g, " ($1)")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/\s+([.,;:])/g, "$1")
    .replace(/\s{2,}/g, " ")
    .trim();
}

/**
 * Groups `- **[Name](url)** - description` bullets under their nearest `##`
 * heading, recording the nearest `###` under it as the entry's subsection.
 * Matches the entry format every StudentSuite awesome-list repo already
 * enforce via their own check-list-format.mjs / update-counts.mjs. Sections
 * with no matching bullets (Table of Contents, Contributing, License, ...)
 * end up empty and are dropped, so no heading skip-list is needed here.
 */
export function parseAwesomeList(readme: string): AwesomeSection[] {
  const sections: AwesomeSection[] = [];
  let current: AwesomeSection | null = null;
  let subsection: string | undefined;

  for (const line of readme.split("\n")) {
    const heading = line.match(HEADING_PATTERN);
    if (heading) {
      current = { title: heading[1].trim(), entries: [] };
      sections.push(current);
      subsection = undefined;
      continue;
    }
    const subheading = line.match(SUBHEADING_PATTERN);
    if (subheading) {
      subsection = subheading[1].trim();
      continue;
    }
    const entry = line.match(ENTRY_PATTERN);
    if (entry && current) {
      current.entries.push({
        name: entry[1],
        url: entry[2],
        description: cleanDescription(entry[3]),
        ...(subsection ? { subsection } : {}),
      });
    }
  }

  return sections.filter((section) => section.entries.length > 0);
}

const TIMEOUT_MS = 15_000;
const RETRIES = 3;

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Fetch and parse a list README at build time. Transient failures are retried
 * so one bad response cannot blank the published list; 4xx errors fail at once.
 */
export async function fetchAwesomeList(
  repo: string,
  { fetchImpl = fetch, backoffMs = 1000 }: { fetchImpl?: typeof fetch; backoffMs?: number } = {},
): Promise<AwesomeSection[]> {
  const url = `https://raw.githubusercontent.com/StudentSuite/${repo}/main/README.md`;
  let lastError = "";
  let attempts = 0;
  for (let attempt = 0; attempt <= RETRIES; attempt++) {
    attempts++;
    if (attempt > 0) await sleep(backoffMs * 2 ** (attempt - 1));
    let res: Response;
    try {
      res = await fetchImpl(url, { signal: AbortSignal.timeout(TIMEOUT_MS) });
    } catch (err) {
      lastError = err instanceof Error ? err.message : String(err);
      continue;
    }
    if (res.ok) return parseAwesomeList(await res.text());
    lastError = `HTTP ${res.status}`;
    if (res.status < 500 && res.status !== 429) break;
  }
  throw new Error(`Failed to fetch ${repo} README after ${attempts} attempt(s): ${lastError}`);
}
