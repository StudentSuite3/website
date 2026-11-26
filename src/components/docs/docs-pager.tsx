"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { docsPages } from "@/lib/docs-nav";

export function DocsPager() {
  const pathname = usePathname();
  const index = docsPages.findIndex((entry) => entry.href === pathname);
  if (index === -1) return null;

  const prev = docsPages[index - 1];
  const next = docsPages[index + 1];
  if (!prev && !next) return null;

  return (
    <nav className="mt-10 flex items-stretch gap-4 border-t border-border pt-6" aria-label="Doc navigation">
      {prev ? (
        <Link
          href={prev.href}
          className="group flex flex-1 flex-col gap-1 rounded-lg border border-border p-4 text-right transition-colors hover:border-primary/50 sm:text-left"
        >
          <span className="text-xs text-muted-foreground transition-colors group-hover:text-foreground">
            Previous guide
          </span>
          <span className="font-medium text-foreground group-hover:underline">{prev.title}</span>
        </Link>
      ) : (
        <div className="flex-1" />
      )}
      {next ? (
        <Link
          href={next.href}
          className="group flex flex-1 flex-col items-end gap-1 rounded-lg border border-border p-4 text-right transition-colors hover:border-primary/50"
        >
          <span className="text-xs text-muted-foreground transition-colors group-hover:text-foreground">
            Next guide
          </span>
          <span className="font-medium text-foreground group-hover:underline">{next.title}</span>
        </Link>
      ) : (
        <div className="flex-1" />
      )}
    </nav>
  );
}
