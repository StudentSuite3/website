"use client";

import { usePathname } from "next/navigation";

import { getDocsNavEntry } from "@/lib/docs-nav";
import { getDocMeta } from "@/lib/docs-meta";
import { DocsPageHeader } from "@/components/docs/docs-page-header";
import { ShareButtons } from "@/components/docs/share-buttons";

export function DocArticleHeader() {
  const pathname = usePathname();
  const entry = getDocsNavEntry(pathname);
  if (!entry) return null;

  const { date, readTime } = getDocMeta(entry.href);

  return (
    <>
      <DocsPageHeader
        title={entry.title}
        description={entry.description}
        breadcrumbLabel={entry.title}
      />
      <div className="mx-auto flex w-full max-w-4xl flex-wrap items-center justify-between gap-3 px-4 py-4 text-sm text-muted-foreground">
        <span>
          StudentSuite Team{date && <> · <time>{date}</time></>} · {readTime}
        </span>
        <ShareButtons title={entry.title} />
      </div>
    </>
  );
}
