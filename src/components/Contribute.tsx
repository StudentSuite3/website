'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { orgUrl } from '@/data/products';

const actions = [
  {
    title: 'Star the repos',
    description: 'The simplest contribution: stars help other students find the tools.',
    href: orgUrl,
    linkLabel: 'github.com/StudentSuite',
  },
  {
    title: 'Add a place or a skill',
    description: 'Copy the template, fill it in, open a pull request. Ten minutes, real impact.',
    href: 'https://github.com/StudentSuite/StudyMap',
    linkLabel: 'Start with StudyMap',
  },
  {
    title: 'Open an issue',
    description: 'An idea, a fix, something we are missing. Every tool started as one of these.',
    href: orgUrl,
    linkLabel: 'Pick a repo',
  },
];

/** Checkbox that ticks itself as the row scrolls into view. Student to-do energy. */
function Checkbox({ delay, reduceMotion }: { delay: number; reduceMotion: boolean }) {
  return (
    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-md border-2 border-[var(--primary)]">
      <motion.svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-4 w-4"
        aria-hidden="true"
        initial={reduceMotion ? { pathLength: 1 } : { pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.4, delay: delay + 0.3, ease: 'easeOut' }}
      >
        <motion.path
          d="M5 13l4 4L19 7"
          stroke="var(--accent-strong)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={reduceMotion ? { pathLength: 1 } : { pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.4, delay: delay + 0.3, ease: 'easeOut' }}
        />
      </motion.svg>
    </span>
  );
}

export function Contribute() {
  const reduceMotion = useReducedMotion() ?? false;

  const reveal = (delay: number) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-80px' },
    transition: { duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] as const },
  });

  return (
    <section id="contribute" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5">
          <motion.div {...reveal(0)} className="lg:col-span-2">
            <h2 className="font-heading text-3xl font-semibold text-[var(--heading)] sm:text-4xl">
              The suite gets better when students build it together.
            </h2>
            <p className="mt-4 leading-relaxed text-[var(--secondary)]">
              You do not need to be an expert. If you solved a problem worth sharing, it belongs
              here.
            </p>
          </motion.div>

          <ul className="space-y-2 lg:col-span-3">
            {actions.map((action, i) => (
              <motion.li key={action.title} {...reveal(0.1 + i * 0.12)}>
                <div className="flex gap-4 rounded-xl p-5 transition-colors hover:bg-[var(--primary-soft)]">
                  <Checkbox delay={0.1 + i * 0.12} reduceMotion={reduceMotion} />
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
                      className="group mt-2 inline-flex items-center gap-1 font-mono text-xs font-medium text-[var(--primary)] transition-colors hover:text-[var(--primary-strong)]"
                    >
                      {action.linkLabel}
                      <ArrowUpRight
                        className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        aria-hidden="true"
                      />
                    </a>
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
