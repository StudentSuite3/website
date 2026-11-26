import { BookOpen, ClipboardList, GraduationCap, MapPin, Puzzle, type LucideIcon } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { products, type Product } from '@/data/products';

function ToolDetail({
  icon: Icon,
  label,
  items,
}: {
  icon: LucideIcon;
  label: string;
  items: string[];
}) {
  return (
    <div className="mt-5 border-t border-[var(--border)] pt-4">
      <div className="flex items-center gap-2 text-[var(--muted)]">
        <Icon className="size-3.5" aria-hidden="true" />
        <span className="font-mono text-[11px]">{label}</span>
      </div>
      <div className="mt-2 flex flex-wrap gap-1.5">
        {items.map((item) => (
          <Badge
            key={item}
            variant="outline"
            className="h-auto px-2 py-1 font-mono text-[11px] font-normal text-[var(--secondary)]"
          >
            {item}
          </Badge>
        ))}
      </div>
    </div>
  );
}

const details: Record<string, { icon: LucideIcon; label: string; items: string[] }> = {
  studymap: {
    icon: MapPin,
    label: 'On the map',
    items: ['Libraries', 'Study spots', 'Exam centres'],
  },
  'skills-plugins': {
    icon: Puzzle,
    label: 'In the repo',
    items: ['skills/', 'plugins/', 'configs/'],
  },
  'awesome-resources': {
    icon: BookOpen,
    label: 'Every entry labelled',
    items: ['Free', 'Freemium', 'Paid', 'Open source'],
  },
  'awesome-study-resources': {
    icon: GraduationCap,
    label: 'Organised by',
    items: ['Exam prep', 'Subjects', 'Learning tools'],
  },
  'awesome-sat-resources': {
    icon: ClipboardList,
    label: 'In the list',
    items: ['Practice tests', 'Formula sheets', 'Video lessons', 'Vocab'],
  },
};

function ToolCard({ product }: { product: Product }) {
  const detail = details[product.id];

  return (
    <article className="flex flex-col bg-[var(--background)] p-6 transition-colors hover:bg-[var(--muted-surface)] sm:p-7">
      <span className="font-mono text-[11px] text-[var(--muted)]">
        {product.status}
      </span>
      <h3 className="mt-3 font-heading text-xl font-semibold text-[var(--heading)]">
        {product.name}
      </h3>
      <p className="mt-1 text-sm font-medium text-[var(--primary)]">{product.pitch}</p>
      <p className="mt-3 text-sm leading-relaxed text-[var(--body)]">{product.description}</p>
      {detail && <ToolDetail {...detail} />}
      <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium">
        <a
          href={product.liveUrl ?? product.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--primary)] underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-[var(--primary)]"
        >
          {product.cta}
        </a>
        {product.liveUrl && (
          <a
            href={product.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--secondary)] underline-offset-4 hover:text-[var(--heading)] hover:underline focus-visible:outline-2 focus-visible:outline-[var(--primary)]"
          >
            Source
          </a>
        )}
      </div>
    </article>
  );
}

export function Products() {
  return (
    <section id="tools" className="scroll-mt-20 border-b border-[var(--border)]">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-3">
          <h2 className="font-heading text-3xl font-semibold tracking-[-0.02em] text-[var(--heading)] sm:text-4xl">
            Tools
          </h2>
          <p className="max-w-lg text-sm text-[var(--secondary)]">
            Five open projects: a map, a skills-and-plugins collection, and three resource lists.
          </p>
        </div>

        <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--border)] sm:grid-cols-2">
          {products.map((product) => (
            <ToolCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
