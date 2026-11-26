"use client";

import { useViewMode, ViewToggle } from "@/components/competitions/view-toggle";
import { DocsIndexGrid } from "@/components/docs/docs-index-grid";
import { DocsIndexList } from "@/components/docs/docs-index-list";

const STORAGE_KEY = "studymap:docs-view";

export function DocsIndex() {
  const [mode, setMode] = useViewMode(STORAGE_KEY);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-end">
        <ViewToggle value={mode} onChange={setMode} />
      </div>
      {mode === "grid" ? <DocsIndexGrid /> : <DocsIndexList />}
    </div>
  );
}
