import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function DocCtaBlock() {
  return (
    <div className="mt-10 flex flex-col gap-3 rounded-xl border border-border bg-card p-6 sm:flex-row sm:items-center sm:justify-between">
      <p className="text-sm text-muted-foreground">
        Use StudyMap now: find a place on the map, check an exam date, or browse
        competitions.
      </p>
      <div className="flex flex-wrap gap-2">
        <a href="https://studyymap.com/map" className={cn(buttonVariants({ variant: "default", size: "sm" }))}>
          Open the map
        </a>
        <a href="https://studyymap.com/calendar" className={cn(buttonVariants({ variant: "outline", size: "sm" }))}>
          Check the calendar
        </a>
        <a
          href="https://studyymap.com/competitions"
          className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
        >
          Browse competitions
        </a>
      </div>
    </div>
  );
}
