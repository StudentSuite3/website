'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useReducedMotion, useMotionValue, useAnimationFrame } from 'framer-motion';
import type { MotionProps } from 'framer-motion';
import { ArrowUpRight, Github, Code, Terminal, Puzzle, Brush, Zap, BookOpen, Map, GraduationCap } from 'lucide-react';
import { products, type Product } from '@/data/products';
import { Dock, DockIcon } from '@/components/ui/Dock';

/**
 * Look products up by id, never by array position. The previous version
 * destructured `products` positionally, so reordering or removing a single
 * entry in the data file silently shifted every card onto the wrong product
 * with no type error and no visible failure until someone read the page.
 * An unknown id now throws instead.
 */
// Not `new Map()`: lucide-react's `Map` icon is imported above and shadows the
// global, so the constructor here would resolve to a React component.
const productsById: Record<string, Product> = Object.fromEntries(
  products.map((p) => [p.id, p]),
);

function product(id: string): Product {
  const found = productsById[id];
  if (!found) throw new Error(`Products.tsx references an unknown product id: ${id}`);
  return found;
}

const productIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  studymap: Map,
  'skills-plugins': Puzzle,
  'awesome-resources': BookOpen,
  'awesome-study-resources': GraduationCap,
};

/* ── Per-project SVG motifs ──────────────────────────────────────────── */

function MapMotif() {
  return (
    <svg viewBox="0 0 320 140" fill="none" className="h-auto w-full max-w-[320px]" aria-hidden="true">
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

function PluginDock({ reduceMotion }: { reduceMotion: boolean }) {
  const icons = [Code, Terminal, Puzzle, Brush, Zap, BookOpen];
  return (
    <Dock
      iconSize={28}
      iconMagnification={38}
      iconDistance={100}
      className={reduceMotion ? 'motion-reduce:animate-none' : ''}
    >
      {icons.map((Icon, i) => (
        <DockIcon key={i}>
          <Icon className="h-4 w-4" />
        </DockIcon>
      ))}
    </Dock>
  );
}

function ResourceMarquee({ reduceMotion }: { reduceMotion: boolean }) {
  const tags = [
    'Textbooks', 'Software', 'Channels', 'Free', 'Freemium',
    'Paid', 'Open Source', 'YouTube', 'Practice', 'Guides',
  ];
  return (
    <div className="w-full lg:overflow-hidden" aria-hidden="true">
      <div
        className={`flex flex-wrap items-center gap-2 lg:w-max lg:flex-nowrap ${reduceMotion ? '' : 'lg:animate-[marquee-scroll_25s_linear_infinite]'}`}
      >
        {tags.map((tag, i) => (
          <span
            key={i}
            className="whitespace-nowrap rounded-full border border-[var(--border)] bg-[var(--primary-soft)] px-3 py-1 font-mono text-[10px] font-medium text-[var(--primary)]"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

const studyTopics = [
  { label: 'Exam Prep', color: 'var(--primary)' },
  { label: 'Subject Study', color: 'var(--accent)' },
  { label: 'Past Papers', color: 'var(--primary)' },
  { label: 'Flashcards', color: 'var(--accent)' },
  { label: 'Group Study', color: 'var(--primary)' },
];

function StudyTopicList({ reduceMotion }: { reduceMotion: boolean }) {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const y = useMotionValue(0);

  useAnimationFrame(() => {
    if (reduceMotion || !innerRef.current || !outerRef.current) return;
    const total = innerRef.current.scrollHeight;
    const half = total / 2;
    const current = y.get();
    y.set(current <= -half ? current + half : current - 0.5);
  });

  const items = (offset: number) =>
    studyTopics.map((topic, i) => (
      <div
        key={`${offset}-${topic.label}`}
        className="flex items-center gap-2 rounded-md border border-[var(--border)] bg-[var(--bg-elevated)] px-3 py-1.5"
      >
        <span
          className="inline-block size-2 rounded-full"
          style={{ backgroundColor: topic.color }}
        />
        <span className="font-mono text-[10px] font-medium text-[var(--text)]">
          {topic.label}
        </span>
      </div>
    ));

  if (reduceMotion) {
    return (
      <div className="flex flex-col gap-2" aria-hidden="true">
        {items(0)}
      </div>
    );
  }

  return (
    <div ref={outerRef} className="h-[130px] overflow-hidden" aria-hidden="true">
      <motion.div ref={innerRef} className="flex flex-col gap-2" style={{ y }}>
        {items(0)}
        {items(1)}
      </motion.div>
    </div>
  );
}

/* ── Card wrapper ────────────────────────────────────────────────────── */

function ProductCard({
  product,
  children,
  className = '',
  reveal,
}: {
  product: Product;
  children: React.ReactNode;
  className?: string;
  reveal: Pick<MotionProps, 'initial' | 'whileInView' | 'viewport' | 'transition'>;
}) {
  return (
    <motion.article
      {...reveal}
      className={`group flex flex-col rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] p-7 transition-[border-color,box-shadow] hover:border-[var(--card-hover-border)] hover:shadow-[var(--card-hover-shadow)] ${className}`}
    >
      <div className="flex items-center justify-between">
        <span
          className={`rounded-full px-3 py-1 font-mono text-xs font-medium ${
            product.status === 'Live'
              ? 'relative bg-[var(--pill-bg)] text-[var(--pill-fg)]'
              : 'bg-[var(--primary-soft)] text-[var(--primary)]'
          }`}
        >
          {product.status === 'Live' && (
            <span className="relative mr-1.5 inline-flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-current opacity-60 motion-reduce:animate-none" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-current" />
            </span>
          )}
          {product.status}
        </span>
        {(() => {
          const Icon = productIcons[product.id];
          return Icon ? <Icon className="h-5 w-5 text-[var(--primary)]" /> : null;
        })()}
      </div>
      <h3 className="mt-5 font-heading text-lg font-semibold text-[var(--heading)]">
        {product.name}
      </h3>
      <p className="mt-1 font-medium text-sm text-[var(--primary)]">{product.pitch}</p>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--body)]">
        {product.description}
      </p>
      {children}
      <div className="mt-5 flex items-center gap-4">
        <a
          href={product.liveUrl ?? product.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group/link inline-flex items-center gap-1.5 text-sm font-medium text-[var(--primary)] transition-colors hover:text-[var(--primary-strong)]"
        >
          {product.cta}
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" aria-hidden="true" />
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
  );
}

/* ── Section ─────────────────────────────────────────────────────────── */

export function Products() {
  const reduceMotion = useReducedMotion() ?? false;

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

        {/*
          Four products, so a plain 2-up grid rather than the old four-column
          bento with hand-placed spans. That layout was sized for six cards and
          left a hole at this count; two even rows read as deliberate instead.
        */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {/* Row 1: the two live tools */}
          <ProductCard product={product('studymap')} reveal={reveal(0.1)}>
            <div className="mt-4">
              <MapMotif />
            </div>
          </ProductCard>
          <ProductCard product={product('skills-plugins')} reveal={reveal(0.15)}>
            <div className="mt-4 flex justify-center">
              <PluginDock reduceMotion={reduceMotion} />
            </div>
          </ProductCard>

          {/* Row 2: the two curated lists */}
          <ProductCard product={product('awesome-resources')} reveal={reveal(0.2)}>
            <div className="mt-4">
              <ResourceMarquee reduceMotion={reduceMotion} />
            </div>
          </ProductCard>
          <ProductCard product={product('awesome-study-resources')} reveal={reveal(0.25)}>
            <div className="mt-4 flex justify-center">
              <StudyTopicList reduceMotion={reduceMotion} />
            </div>
          </ProductCard>
        </div>
      </div>
    </section>
  );
}
