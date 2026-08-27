'use client';

import { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import type { MotionProps } from 'framer-motion';
import { ArrowUpRight, Github, Code, Terminal, Puzzle, Brush, Zap, BookOpen, Map, FlaskConical, GraduationCap, Sparkles } from 'lucide-react';
import { products } from '@/data/products';
import { Dock, DockIcon } from '@/components/ui/Dock';

const [studyMap, pepiros, skillsPlugins, awesomeStudent, awesomeStudy, awesomePrompts] = products;

const productIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  studymap: Map,
  pepiros: FlaskConical,
  'skills-plugins': Puzzle,
  'awesome-resources': BookOpen,
  'awesome-study-resources': GraduationCap,
  'awesome-ai-prompts': Sparkles,
};

/* ── Per-project SVG motifs ──────────────────────────────────────────── */

function GraphKnowledge({ reduceMotion }: { reduceMotion: boolean }) {
  const nodes = [
    { cx: 52, cy: 22, r: 7 },
    { cx: 148, cy: 16, r: 5 },
    { cx: 100, cy: 58, r: 9 },
    { cx: 36, cy: 68, r: 5 },
    { cx: 164, cy: 64, r: 6 },
    { cx: 72, cy: 98, r: 4 },
    { cx: 130, cy: 102, r: 5 },
  ];
  const edges = [
    'M52 22 L100 58',
    'M148 16 L100 58',
    'M100 58 L36 68',
    'M100 58 L164 64',
    'M36 68 L72 98',
    'M164 64 L130 102',
    'M72 98 L130 102',
  ];
  return (
    <svg viewBox="0 0 200 120" fill="none" className="h-auto w-full max-w-[200px]" aria-hidden="true">
      {edges.map((d, i) => (
        <motion.path
          key={i}
          d={d}
          stroke="var(--primary)"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          strokeLinecap="round"
          initial={reduceMotion ? { pathLength: 1, opacity: 0.45 } : { pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.45 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, delay: 0.4 + i * 0.08, ease: 'easeOut' }}
        />
      ))}
      {nodes.map((n, i) => (
        <motion.circle
          key={i}
          cx={n.cx}
          cy={n.cy}
          r={n.r}
          fill={i % 3 === 0 ? 'var(--accent)' : 'var(--primary)'}
          initial={reduceMotion ? { opacity: 0.85 } : { opacity: 0, scale: 0 }}
          whileInView={{ opacity: 0.85, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.4, delay: 0.15 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
        />
      ))}
      {nodes.filter((_, i) => i % 3 === 0).map((n, i) => (
        <motion.circle
          key={`ring-${i}`}
          cx={n.cx}
          cy={n.cy}
          r={n.r + 5}
          fill="none"
          stroke={i === 0 ? 'var(--accent)' : 'var(--primary)'}
          strokeWidth="1"
          className="animate-node-pulse"
          style={{ animationDelay: `${i * 0.8}s` }}
          initial={reduceMotion ? { opacity: 0.3 } : { opacity: 0 }}
          whileInView={{ opacity: 0.3 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 + i * 0.15 }}
        />
      ))}
    </svg>
  );
}

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
  const doubled = [...tags, ...tags];
  return (
    <div className="w-full overflow-hidden" aria-hidden="true">
      <div
        className={`flex w-max gap-2 ${reduceMotion ? '' : 'animate-[marquee-scroll_25s_linear_infinite]'}`}
      >
        {doubled.map((tag, i) => (
          <span
            key={`${tag}-${i}`}
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
  const items = [...studyTopics, ...studyTopics];
  const row = (
    <div className="flex flex-col gap-2">
      {studyTopics.map((topic) => (
        <div
          key={topic.label}
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
      ))}
    </div>
  );

  if (reduceMotion) return <div aria-hidden="true">{row}</div>;

  return (
    <div className="h-[130px] overflow-hidden" aria-hidden="true">
      <div
        className="flex flex-col gap-2"
        style={{ animation: 'vertical-marquee-scroll 8s linear infinite' }}
      >
        {items.map((topic, i) => (
          <div
            key={`${topic.label}-${i}`}
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
        ))}
      </div>
    </div>
  );
}

const promptExamples = [
  'feature-implementation',
  'debugging-workflow',
  'pr-review-checklist',
  'system-design-spec',
  'test-driven-dev',
  'codebase-onboarding',
];

function PromptTerminal({ reduceMotion }: { reduceMotion: boolean }) {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;
    const id = setInterval(() => setIdx((i) => (i + 1) % promptExamples.length), 2200);
    return () => clearInterval(id);
  }, [reduceMotion]);

  return (
    <div
      className="w-full rounded-lg border border-[var(--border)] bg-[var(--background)] px-3 py-2 font-mono text-[11px] leading-relaxed text-[var(--body)]"
      aria-hidden="true"
    >
      <span className="text-[var(--muted)]">$</span>{' '}
      <span className="text-[var(--primary)]">cat</span>{' '}
      <span>{promptExamples[idx]}-prompt.md</span>
      {!reduceMotion && (
        <span
          className="ml-0.5 inline-block w-[2px] align-middle bg-[var(--primary)]"
          style={{ height: '1em', animation: 'typing-cursor 1s step-end infinite' }}
        />
      )}
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
  product: (typeof products)[number];
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

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Row 1: Pepiros (wide) + StudyMap */}
          <ProductCard
            product={pepiros}
            reveal={reveal(0.1)}
            className="lg:col-span-2"
          >
            <div className="mt-4 flex justify-center">
              <GraphKnowledge reduceMotion={reduceMotion} />
            </div>
          </ProductCard>
          <ProductCard product={studyMap} reveal={reveal(0.15)} className="lg:col-span-2">
            <div className="mt-4">
              <MapMotif />
            </div>
          </ProductCard>

          {/* Row 2: 3 equal cards */}
          <ProductCard product={awesomeStudent} reveal={reveal(0.2)}>
            <div className="mt-4">
              <ResourceMarquee reduceMotion={reduceMotion} />
            </div>
          </ProductCard>
          <ProductCard product={awesomeStudy} reveal={reveal(0.25)}>
            <div className="mt-4 flex justify-center">
              <StudyTopicList reduceMotion={reduceMotion} />
            </div>
          </ProductCard>
          <ProductCard product={awesomePrompts} reveal={reveal(0.3)}>
            <div className="mt-4">
              <PromptTerminal reduceMotion={reduceMotion} />
            </div>
          </ProductCard>

          {/* Row 3: Skills & Plugins */}
          <ProductCard
            product={skillsPlugins}
            reveal={reveal(0.35)}
          >
            <div className="mt-4 flex justify-center">
              <PluginDock reduceMotion={reduceMotion} />
            </div>
          </ProductCard>
        </div>
      </div>
    </section>
  );
}
