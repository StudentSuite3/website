import { forwardRef, type ComponentPropsWithoutRef, type CSSProperties } from 'react';
import { cn } from '@/lib/utils';

export interface ShimmerButtonProps extends ComponentPropsWithoutRef<'a'> {
  shimmerColor?: string;
  shimmerSize?: string;
  borderRadius?: string;
  shimmerDuration?: string;
  background?: string;
  className?: string;
  children?: React.ReactNode;
}

/**
 * Magic UI "ShimmerButton" (sourced via the `components` skill, adapted to brand).
 * Rendered as an `<a>` (this repo's only use is a same-page anchor CTA), colors
 * default to the primary/accent tokens, and the shimmer sweep is `motion-safe`-gated.
 */
export const ShimmerButton = forwardRef<HTMLAnchorElement, ShimmerButtonProps>(
  (
    {
      shimmerColor = 'var(--accent)',
      shimmerSize = '0.05em',
      shimmerDuration = '3s',
      borderRadius = '0.5rem',
      background = 'var(--primary)',
      className,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <a
        style={
          {
            '--spread': '90deg',
            '--shimmer-color': shimmerColor,
            '--radius': borderRadius,
            '--speed': shimmerDuration,
            '--cut': shimmerSize,
            '--bg': background,
          } as CSSProperties
        }
        className={cn(
          'group relative z-0 inline-flex cursor-pointer items-center justify-center gap-2 overflow-hidden [border-radius:var(--radius)] px-6 py-3 font-medium text-white whitespace-nowrap [background:var(--bg)]',
          'transform-gpu transition-transform duration-300 ease-in-out active:translate-y-px',
          'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]',
          'dark:text-[#0e0e1a]',
          className,
        )}
        ref={ref}
        {...props}
      >
        {/* spark container */}
        <div className="@container-[size] absolute inset-0 -z-30 overflow-visible blur-[2px]">
          {/* spark */}
          <div className="motion-safe:animate-shimmer-slide absolute inset-0 aspect-square h-[100cqh] rounded-none [mask:none]">
            {/* spark before */}
            <div className="motion-safe:animate-spin-around absolute -inset-full w-auto rotate-0 [translate:0_0] [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))]" />
          </div>
        </div>

        {children}

        {/* highlight */}
        <div className="absolute inset-0 size-full rounded-2xl px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#ffffff1f] transition-all duration-300 ease-in-out group-hover:shadow-[inset_0_-6px_10px_#ffffff3f] group-active:shadow-[inset_0_-10px_10px_#ffffff3f]" />

        {/* backdrop */}
        <div className="absolute inset-(--cut) -z-20 [background:var(--bg)] [border-radius:var(--radius)]" />
      </a>
    );
  },
);

ShimmerButton.displayName = 'ShimmerButton';
