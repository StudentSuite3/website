import type { ReactNode } from "react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface StepCardProps {
  step: number;
  title: string;
  description?: string;
  children: ReactNode;
  isLast?: boolean;
}

/** Use only for real ordered steps; unrelated content belongs in CalloutCard. */
export function StepCard({ step, title, description, children, isLast }: StepCardProps) {
  return (
    <div className="relative flex gap-4">
      <div className="flex flex-col items-center">
        <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary font-mono text-sm font-semibold text-primary-foreground">
          {step}
        </span>
        {!isLast && <span className="mt-2 w-px flex-1 bg-border" aria-hidden="true" />}
      </div>
      <Card className="mb-4 flex-1">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          {description && <CardDescription>{description}</CardDescription>}
        </CardHeader>
        <CardContent className="space-y-3 text-sm text-foreground/80">{children}</CardContent>
      </Card>
    </div>
  );
}
