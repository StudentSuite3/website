import { ArrowUpRight } from 'lucide-react';
import { updates } from '@/data/updates';

export function Updates() {
  const sorted = [...updates].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
      <p className="font-mono text-xs text-[var(--muted)]">Changelog</p>
      <h1 className="mt-4 font-heading text-4xl font-semibold leading-[1.1] tracking-[-0.02em] text-[var(--heading)] sm:text-5xl">
        What shipped across the suite
      </h1>
      <p className="mt-4 max-w-xl text-lg leading-relaxed text-[var(--secondary)]">
        A hand-picked log of changes, taken from each project&apos;s own changelog.
      </p>

      <div className="mt-12">
        {sorted.map((entry) => (
          <article key={entry.id} className="border-t border-[var(--border)] py-6 first:border-t-0">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-[var(--pill-bg)] px-3 py-1 font-mono text-xs text-[var(--pill-fg)]">
                {entry.repo}
              </span>
              <time className="font-mono text-xs text-[var(--muted)]">{entry.date}</time>
            </div>
            <h2 className="mt-4 font-heading text-lg font-semibold text-[var(--heading)]">
              {entry.title}
            </h2>
            <p className="mt-2 max-w-2xl leading-relaxed text-[var(--body)]">{entry.description}</p>
            {(entry.repoUrl || entry.changelogUrl) && (
              <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium">
                {entry.repoUrl && (
                  <a
                    href={entry.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[var(--primary)] underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-[var(--primary)]"
                  >
                    View repo
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                )}
                {entry.changelogUrl && (
                  <a
                    href={entry.changelogUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--secondary)] underline-offset-4 hover:text-[var(--heading)] hover:underline focus-visible:outline-2 focus-visible:outline-[var(--primary)]"
                  >
                    Changelog
                  </a>
                )}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
