import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { cleanDescription, fetchAwesomeList, parseAwesomeList } from "./awesome-list.ts";

const README = `# Awesome list

## Table of Contents

- [Not an entry](#x)

## University & Career Prep

- **[ResumeTool](https://resume.example)** - Build resumes; export PDF or Word files ![free](https://img.shields.io/badge/free-2489CA?style=flat-square).
- **[Paid Thing](https://paid.example)** - A paid course ![paid](https://img.shields.io/badge/paid-D33833?style=flat-square) ![FOSS](https://img.shields.io/badge/FOSS-3DA639?style=flat-square).

## By Subject

### Latin

- **[Latin Site](https://latin.example)** - Grammar drills for \`amo, amas, amat\` (free).

### Music

- **[Music Site](https://music.example)** - Theory lessons (freemium).

## Writing

- **[Plain](https://plain.example)** - A plain entry (free).
`;

describe("parseAwesomeList", () => {
  const sections = parseAwesomeList(README);

  it("keeps only sections with entries", () => {
    assert.deepEqual(
      sections.map((s) => s.title),
      ["University & Career Prep", "By Subject", "Writing"],
    );
  });

  it("turns badges into their alt text and leaves no badge markdown", () => {
    const [resume, paid] = sections[0].entries;
    assert.equal(resume.description, "Build resumes; export PDF or Word files (free).");
    assert.equal(paid.description, "A paid course (paid) (FOSS).");
    for (const e of sections.flatMap((s) => s.entries)) {
      assert.ok(!e.description.includes("!["), e.description);
      assert.ok(!e.description.includes("img.shields.io"), e.description);
    }
  });

  it("records the ### subsection and strips inline code", () => {
    const [latin, music] = sections[1].entries;
    assert.equal(latin.subsection, "Latin");
    assert.equal(latin.description, "Grammar drills for amo, amas, amat (free).");
    assert.equal(music.subsection, "Music");
  });

  it("resets the subsection at the next ## heading", () => {
    assert.equal(sections[2].entries[0].subsection, undefined);
  });
});

describe("cleanDescription", () => {
  it("leaves plain text alone", () => {
    assert.equal(cleanDescription("A plain entry (free)."), "A plain entry (free).");
  });
});

describe("fetchAwesomeList", () => {
  const respond = (status: number, body = "") => new Response(body, { status });

  it("retries a 503 three times, then fails naming the repo and status", async () => {
    let calls = 0;
    const fetchImpl = (async () => {
      calls++;
      return respond(503);
    }) as typeof fetch;
    await assert.rejects(
      fetchAwesomeList("awesome-study-resources", { fetchImpl, backoffMs: 0 }),
      /awesome-study-resources README after 4 attempt\(s\): HTTP 503/,
    );
    assert.equal(calls, 4);
  });

  it("recovers when a retry succeeds", async () => {
    let calls = 0;
    const fetchImpl = (async () => (++calls < 3 ? respond(502) : respond(200, README))) as typeof fetch;
    const sections = await fetchAwesomeList("x", { fetchImpl, backoffMs: 0 });
    assert.equal(calls, 3);
    assert.equal(sections.length, 3);
  });

  it("does not retry a 404", async () => {
    let calls = 0;
    const fetchImpl = (async () => {
      calls++;
      return respond(404);
    }) as typeof fetch;
    await assert.rejects(fetchAwesomeList("missing", { fetchImpl, backoffMs: 0 }), /HTTP 404/);
    assert.equal(calls, 1);
  });

  it("retries a network error", async () => {
    let calls = 0;
    const fetchImpl = (async () => {
      if (++calls === 1) throw new TypeError("fetch failed");
      return respond(200, README);
    }) as typeof fetch;
    await fetchAwesomeList("x", { fetchImpl, backoffMs: 0 });
    assert.equal(calls, 2);
  });
});
