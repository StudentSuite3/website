import { orgUrl } from '@/data/products';
import { buttonVariants } from '@/components/ui/button';

const sections = [
  { href: '#tools', number: '01', label: 'Tools', detail: 'Five open projects' },
  { href: '#mission', number: '02', label: 'Mission', detail: 'Why we build them' },
  { href: '#contribute', number: '03', label: 'Contribute', detail: 'Three ways to help' },
];

export function Hero() {
  return (
    <section id="top" className="border-b border-[var(--border)]">
      <div className="mx-auto max-w-6xl px-4 pb-20 pt-32 sm:px-6 sm:pb-24 sm:pt-40 lg:px-8">
        <h1 className="max-w-4xl font-heading text-5xl font-semibold leading-[1.05] tracking-[-0.03em] text-[var(--heading)] sm:text-6xl md:text-7xl">
          Plan less. Learn more.
        </h1>

        <p className="mt-7 max-w-2xl text-lg leading-relaxed text-[var(--body)]">
          StudyMap, a skills-and-plugins collection, and three curated resource lists — built in
          public, free to use, and MIT licensed.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a
            href="#tools"
            className={buttonVariants({ className: 'h-11 gap-2 px-6 dark:text-[#0e0e1a]' })}
          >
            Explore the tools
          </a>
          <a
            href={orgUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ variant: 'outline', className: 'h-11 gap-2 px-6' })}
          >
            GitHub
          </a>
        </div>

        <nav
          aria-label="On this page"
          className="mt-14 grid max-w-2xl gap-px overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--border)] sm:grid-cols-3"
        >
          {sections.map((section) => (
            <a
              key={section.href}
              href={section.href}
              className="bg-[var(--background)] px-5 py-4 transition-colors hover:bg-[var(--muted-surface)] active:bg-[var(--primary-soft)] focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[var(--primary)]"
            >
              <span className="font-mono text-[11px] text-[var(--muted)]">{section.number}</span>
              <span className="mt-1.5 block font-medium text-[var(--heading)]">{section.label}</span>
              <span className="mt-0.5 block text-xs text-[var(--secondary)]">{section.detail}</span>
            </a>
          ))}
        </nav>
      </div>
    </section>
  );
}
