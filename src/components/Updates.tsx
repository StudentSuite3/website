import { ArrowUpRight } from 'lucide-react';
import { updates } from '@/data/updates';

export function Updates() {
  const sorted = [...updates].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <section className="mx-auto max-w-4xl px-4 py-24 sm:px-6 lg:px-8">
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--primary)]">
        Updates
      </p>
      <h1 className="mt-6 font-heading text-4xl font-semibold leading-[1.1] text-[var(--heading)] sm:text-5xl">
        What shipped across the suite
      </h1>
      <p className="mt-4 max-w-xl text-lg leading-relaxed text-[var(--secondary)]">
        Recent activity across every StudentSuite repo, sourced from each project&apos;s own
        changelog.
      </p>

      <div className="mt-14 flex flex-col gap-4">
        {sorted.map((entry) => (
          <article
            key={entry.id}
            className="rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] p-6 transition-[border-color,box-shadow] hover:border-[var(--card-hover-border)] hover:shadow-[var(--card-hover-shadow)]"
          >
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-[var(--pill-bg)] px-3 py-1 font-mono text-xs font-medium text-[var(--pill-fg)]">
                {entry.repo}
              </span>
              <time className="font-mono text-xs text-[var(--muted)]">{entry.date}</time>
            </div>
            <h2 className="mt-4 font-heading text-lg font-semibold text-[var(--heading)]">
              {entry.title}
            </h2>
            <p className="mt-2 max-w-2xl leading-relaxed text-[var(--body)]">
              {entry.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-4">
              <a
                href={entry.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link inline-flex items-center gap-1.5 text-sm font-medium text-[var(--primary)] transition-colors hover:text-[var(--primary-strong)]"
              >
                View repo
                <ArrowUpRight
                  className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                  aria-hidden="true"
                />
              </a>
              <a
                href={entry.changelogUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--secondary)] transition-colors hover:text-[var(--heading)]"
              >
                Changelog
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
