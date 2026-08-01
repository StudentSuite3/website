'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';
import { products } from '@/data/products';

/** Dashed route with map pins: StudyMap's visual, drawn in brand ink. */
function MapMotif() {
  return (
    <svg
      viewBox="0 0 320 140"
      fill="none"
      className="h-auto w-full max-w-[320px]"
      aria-hidden="true"
    >
      <path
        d="M18 110 C 70 30, 130 130, 190 60 S 290 40, 306 24"
        stroke="var(--primary)"
        strokeWidth="2"
        strokeDasharray="6 8"
        strokeLinecap="round"
        opacity="0.55"
      />
      <circle cx="18" cy="110" r="6" fill="var(--accent)" />
      <circle cx="18" cy="110" r="11" stroke="var(--accent)" strokeWidth="1.5" opacity="0.35" />
      <circle cx="190" cy="60" r="5" fill="var(--primary)" opacity="0.85" />
      <circle cx="306" cy="24" r="6" fill="var(--primary)" />
      <circle cx="306" cy="24" r="11" stroke="var(--primary)" strokeWidth="1.5" opacity="0.35" />
    </svg>
  );
}

export function Products() {
  const reduceMotion = useReducedMotion();
  const [studymap, ...rest] = products;

  const reveal = (delay: number) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-80px' },
    transition: { duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] as const },
  });

  return (
    <section id="tools" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
        <motion.div {...reveal(0)}>
          <h2 className="font-heading text-3xl font-semibold text-[var(--heading)] sm:text-4xl">
            The suite so far
          </h2>
          <p className="mt-3 max-w-xl text-[var(--secondary)]">
            Each tool exists because a student needed it. Everything ships free and stays free.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-5">
          {/* StudyMap: the live product, given the room it earned */}
          <motion.article
            {...reveal(0.1)}
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] p-8 transition-[border-color,box-shadow] hover:border-[var(--card-hover-border)] hover:shadow-[var(--card-hover-shadow)] lg:col-span-3 lg:row-span-2"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--pill-bg)] px-3 py-1 font-mono text-xs font-medium text-[var(--pill-fg)]">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-current opacity-60 motion-reduce:animate-none" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-current" />
                  </span>
                  {studymap.status}
                </span>
                <span className="text-2xl" aria-hidden="true">
                  {studymap.emoji}
                </span>
              </div>
              <h3 className="mt-6 font-heading text-2xl font-semibold text-[var(--heading)]">
                {studymap.name}
              </h3>
              <p className="mt-1 font-medium text-[var(--primary)]">{studymap.pitch}</p>
              <p className="mt-4 max-w-md leading-relaxed text-[var(--body)]">
                {studymap.description}
              </p>
            </div>

            <div className="mt-8">
              <MapMotif />
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <a
                  href={studymap.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/cta inline-flex items-center gap-2 rounded-lg bg-[var(--primary)] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[var(--primary-strong)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)] dark:text-[#0e0e1a]"
                >
                  {studymap.cta}
                  <ArrowUpRight
                    className="h-4 w-4 transition-transform group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </a>
                <a
                  href={studymap.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[var(--secondary)] transition-colors hover:text-[var(--heading)]"
                >
                  <Github className="h-4 w-4" aria-hidden="true" />
                  Source
                </a>
              </div>
            </div>
          </motion.article>

          {/* the curated collections, compact, stacked in their own sub-grid beside StudyMap */}
          <div className="contents lg:col-span-2 lg:row-span-2 lg:grid lg:auto-rows-fr lg:grid-cols-1 lg:gap-6">
            {rest.map((product, i) => (
              <motion.article
                key={product.id}
                {...reveal(0.2 + i * 0.1)}
                className="group flex flex-col rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] p-7 transition-[border-color,box-shadow] hover:border-[var(--card-hover-border)] hover:shadow-[var(--card-hover-shadow)]"
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-[var(--primary-soft)] px-3 py-1 font-mono text-xs font-medium text-[var(--primary)]">
                    {product.status}
                  </span>
                  <span className="text-xl" aria-hidden="true">
                    {product.emoji}
                  </span>
                </div>
                <h3 className="mt-5 font-heading text-lg font-semibold text-[var(--heading)]">
                  {product.name}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--body)]">
                  {product.description}
                </p>
                <div className="mt-5 flex items-center gap-4">
                  <a
                    href={product.liveUrl ?? product.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-center gap-1.5 text-sm font-medium text-[var(--primary)] transition-colors hover:text-[var(--primary-strong)]"
                  >
                    {product.cta}
                    <ArrowUpRight
                      className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </a>
                  {product.liveUrl && (
                    <a
                      href={product.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--secondary)] transition-colors hover:text-[var(--heading)]"
                    >
                      <Github className="h-4 w-4" aria-hidden="true" />
                      Source
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
