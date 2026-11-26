"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { docsPages } from "@/lib/docs-nav";

export function RelatedDocs() {
  const pathname = usePathname();
  const current = docsPages.find((entry) => entry.href === pathname);
  if (!current) return null;

  const related = docsPages
    .filter((entry) => entry.group === current.group && entry.href !== current.href)
    .slice(0, 3);

  if (related.length === 0) return null;

  return (
    <nav aria-label="Related docs" className="mt-10 border-t border-border pt-8">
      <p className="mb-4 font-mono text-xs text-muted-foreground">Related</p>
      <div className="grid gap-4 sm:grid-cols-3">
        {related.map((entry) => (
          <Link
            key={entry.href}
            href={entry.href}
            className="group flex flex-col gap-1.5 rounded-lg border border-border p-4 transition-colors hover:border-primary/50"
          >
            <span className="font-medium text-foreground group-hover:underline">{entry.title}</span>
            <span className="text-sm text-muted-foreground">{entry.description}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
