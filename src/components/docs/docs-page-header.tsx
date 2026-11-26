import type { ReactNode } from "react";
import Link from "next/link";

interface DocsPageHeaderProps {
  title: string;
  description: ReactNode;
  /** Omitted on the docs index. */
  breadcrumbLabel?: string;
}

export function DocsPageHeader({ title, description, breadcrumbLabel }: DocsPageHeaderProps) {
  return (
    <div className="border-b border-border">
      <div className="mx-auto w-full max-w-4xl px-4 py-10">
        <p className="font-mono text-xs text-muted-foreground">
          {breadcrumbLabel ? (
            <>
              <Link href="/docs" className="transition-colors hover:text-foreground">
                Docs
              </Link>
              <span className="mx-1.5 text-muted-foreground/50">/</span>
              {breadcrumbLabel}
            </>
          ) : (
            "Docs"
          )}
        </p>
        <h1 className="mt-3 font-heading text-3xl font-bold tracking-tight">{title}</h1>
        <p className="mt-2 max-w-2xl text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
