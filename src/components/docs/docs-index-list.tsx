import Link from "next/link";

import { docsPages, DOCS_GROUPS } from "@/lib/docs-nav";
import { getDocMeta } from "@/lib/docs-meta";

export function DocsIndexList() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-10">
      {DOCS_GROUPS.map((group) => {
        const entries = docsPages.filter((entry) => entry.group === group);
        if (entries.length === 0) return null;
        return (
          <div key={group}>
            <p className="mb-3 font-mono text-xs text-muted-foreground">{group}</p>
            <div className="flex flex-col divide-y divide-border">
              {entries.map((entry) => {
                const { date, readTime } = getDocMeta(entry.href);
                return (
                  <Link
                    key={entry.href}
                    href={entry.href}
                    className="group flex flex-col gap-2 py-6 first:pt-0"
                  >
                    <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                      {date && <time>{date}</time>}
                      <span>{readTime}</span>
                    </div>
                    <h2 className="font-heading text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                      {entry.title}
                    </h2>
                    <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
                      {entry.description}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
