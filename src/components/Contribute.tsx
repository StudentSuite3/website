import { orgUrl } from '@/data/products';

const actions = [
  {
    title: 'Add a place or a resource',
    description: 'Copy the template, fill in one entry, open a pull request.',
    href: 'https://github.com/StudentSuite/StudyMap',
    linkLabel: 'StudyMap on GitHub',
  },
  {
    title: 'Report something wrong',
    description: 'A wrong date, a dead link, or an unclear page: open an issue and name the page.',
    href: orgUrl,
    linkLabel: 'Browse the repositories',
  },
  {
    title: 'Star a repository',
    description: 'Stars are how other students find these tools.',
    href: orgUrl,
    linkLabel: 'github.com/StudentSuite',
  },
];

export function Contribute() {
  return (
    <section id="contribute" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <h2 className="font-heading text-3xl font-semibold tracking-[-0.02em] text-[var(--heading)] sm:text-4xl">
              Contribute
            </h2>
            <p className="mt-4 leading-relaxed text-[var(--secondary)]">
              A missing place, a broken link, or a resource you rely on — those are the contributions
              that matter.
            </p>
          </div>

          <ol className="lg:col-span-3">
            {actions.map((action, i) => (
              <li
                key={action.title}
                className="flex gap-5 border-t border-[var(--border)] py-6 first:border-t-0 first:pt-0"
              >
                <span className="mt-1 font-mono text-xs text-[var(--muted)]">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-[var(--heading)]">
                    {action.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-[var(--body)]">
                    {action.description}
                  </p>
                  <a
                    href={action.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block font-mono text-xs font-medium text-[var(--primary)] underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-[var(--primary)]"
                  >
                    {action.linkLabel}
                  </a>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
