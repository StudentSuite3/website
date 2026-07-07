'use client';

import { motion, useReducedMotion } from 'framer-motion';

export function Mission() {
  const reduceMotion = useReducedMotion();

  const reveal = (delay: number) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-80px' },
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as const },
  });

  return (
    <section id="mission" className="scroll-mt-20 bg-[var(--mission-bg)]">
      <div className="mx-auto max-w-6xl px-4 py-28 sm:px-6 lg:px-8">
        <motion.p
          {...reveal(0)}
          className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--mission-accent)]"
        >
          Why StudentSuite
        </motion.p>

        <motion.h2
          {...reveal(0.1)}
          className="mt-6 max-w-3xl font-heading text-4xl font-semibold leading-[1.1] text-[var(--mission-fg)] sm:text-5xl"
        >
          Students deserve better software.
        </motion.h2>

        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <motion.p {...reveal(0.2)} className="text-lg leading-relaxed text-[var(--mission-muted)]">
            Good student tools are scattered, locked behind paywalls, or never built at all. So we
            build them in the open, keep them free, and let the people who actually use them shape
            what comes next.
          </motion.p>
          <motion.p {...reveal(0.3)} className="text-lg leading-relaxed text-[var(--mission-muted)]">
            The suite is shaped by rigorous programs like IGCSE and IB, because that is where we
            live. But every tool is built to work for any student, on any path, anywhere.
          </motion.p>
        </div>

        <motion.p
          {...reveal(0.4)}
          className="mt-14 font-mono text-sm text-[var(--mission-fg)]"
        >
          Everything here is{' '}
          <span className="border-b-2 border-[var(--mission-accent)] pb-0.5 font-semibold">
            MIT-licensed and free, forever.
          </span>
        </motion.p>
      </div>
    </section>
  );
}
