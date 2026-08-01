'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Github } from 'lucide-react';
import { Spotlight } from '@/components/ui/Spotlight';
import { DotPattern } from '@/components/ui/DotPattern';
import { ShimmerButton } from '@/components/ui/ShimmerButton';
import { orgUrl } from '@/data/products';

const headline = ['Plan', 'less.', 'Learn', 'more.'];

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="top" className="relative overflow-hidden">
      {/* ambient color wash: pure CSS, slow drift, no canvas (replaces the old WebGL mesh gradient) */}
      <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <div className="animate-hero-glow absolute -top-24 left-[8%] h-[28rem] w-[28rem] rounded-full bg-[var(--primary)]/25 blur-3xl motion-reduce:animate-none" />
        <div className="animate-hero-glow absolute -top-10 right-[6%] h-[24rem] w-[24rem] rounded-full bg-[var(--accent)]/20 blur-3xl [animation-delay:-7s] motion-reduce:animate-none" />
      </div>

      {/* dot-grid field, faded out toward the bottom edge */}
      <div
        className="absolute inset-0"
        style={{
          maskImage: 'radial-gradient(ellipse 120% 90% at 50% 0%, black 55%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 120% 90% at 50% 0%, black 55%, transparent 100%)',
        }}
        aria-hidden="true"
      >
        <DotPattern glow={!reduceMotion} className="text-[var(--grid-line-bold)]" />
      </div>
      <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" />

      <div className="relative mx-auto max-w-6xl px-4 pb-24 pt-36 sm:px-6 sm:pb-32 sm:pt-44 lg:px-8">
        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--accent-strong)]"
        >
          Open-source tools for students
        </motion.p>

        <h1 className="mt-6 max-w-3xl font-heading text-5xl font-semibold leading-[1.05] text-[var(--heading)] sm:text-6xl md:text-7xl">
          {headline.map((word, i) => (
            <motion.span
              key={word + i}
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.15 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className={`inline-block ${i >= 2 ? 'text-[var(--primary)]' : ''}`}
            >
              {word}
              {i < headline.length - 1 ? ' ' : ''}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.7 }}
          className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--body)]"
        >
          Free, open tools built around one idea: students deserve better software. Shaped by
          rigorous programs like IGCSE and IB, but open to any student, anywhere.
        </motion.p>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.85 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <ShimmerButton href="#tools" className="group">
            Explore the tools
            <ArrowRight
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </ShimmerButton>
          <a
            href={orgUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-[var(--border-strong)] px-6 py-3 font-medium text-[var(--heading)] transition-colors hover:border-[var(--primary)] hover:text-[var(--primary)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
          >
            <Github className="h-4 w-4" aria-hidden="true" />
            Follow on GitHub
          </a>
        </motion.div>

        <motion.p
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.05 }}
          className="mt-12 font-mono text-xs text-[var(--muted)]"
        >
          MIT licensed · built by students, for students
        </motion.p>
      </div>
    </section>
  );
}
