import Link from "next/link";

import { docsPages, DOCS_GROUPS } from "@/lib/docs-nav";
import { getDocMeta } from "@/lib/docs-meta";

/** Grid tracks stretch same-row cards to equal height without an explicit height. */
export function DocsIndexGrid() {
  return (
    <div className="flex flex-col gap-10">
      {DOCS_GROUPS.map((group) => {
        const entries = docsPages.filter((entry) => entry.group === group);
        if (entries.length === 0) return null;
        return (
          <div key={group}>
            <p className="mb-3 font-mono text-xs text-muted-foreground">{group}</p>
            <div className="grid gap-4 sm:grid-cols-3">
              {entries.map((entry) => {
                const { date, readTime } = getDocMeta(entry.href);
                const Icon = entry.icon;
                return (
                  <Link
                    key={entry.href}
                    href={entry.href}
                    className="group flex flex-col gap-3 rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/50"
                  >
                    <Icon
                      className={`size-5 ${entry.iconClassName ?? "text-primary"}`}
                      aria-hidden="true"
                    />
                    <h2 className="font-heading font-semibold text-foreground leading-snug">
                      {entry.title}
                    </h2>
                    <p className="flex-1 text-sm text-muted-foreground">{entry.description}</p>
                    <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                      {date && <time>{date}</time>}
                      <span>{readTime}</span>
                    </div>
                    <span className="text-sm font-medium text-primary group-hover:underline">
                      Read guide
                    </span>
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
