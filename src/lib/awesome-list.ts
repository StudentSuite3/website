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

/**
 * The page prints descriptions as plain text, so Markdown that renders on
 * GitHub has to become text here (#11): a shields.io badge becomes its alt
 * text in parentheses ("... Word files ![free](...)." -> "... Word files
 * (free)."), which reads the same as the lists' older "(free)." style, and
 * inline code loses its backticks.
 */
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
 * Matches the entry format all 3 StudentSuite awesome-list repos already
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
 * Fetches a StudentSuite awesome-list README and parses it into sections.
 *
 * Each attempt times out after 15s, and a network error or 5xx/429 is retried
 * up to three times with backoff (#10). After the last retry it still throws,
 * so the build fails and the previous deploy stays live: better than
 * publishing an empty list. A 4xx other than 429 fails at once, since
 * retrying a missing repo cannot help.
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
