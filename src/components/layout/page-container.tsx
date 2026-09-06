import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type PageWidth = "content" | "narrow";

const widths: Record<PageWidth, string> = {
  content: "max-w-4xl",
  narrow: "max-w-3xl",
};

interface PageContainerProps {
  children: ReactNode;
  width?: PageWidth;
  className?: string;
}

export function PageContainer({
  children,
  width = "content",
  className,
}: PageContainerProps) {
  return (
    <div className={cn("mx-auto w-full px-4 py-10", widths[width], className)}>
      {children}
    </div>
  );
}
