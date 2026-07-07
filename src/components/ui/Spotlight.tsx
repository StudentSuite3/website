'use client';

import { cn } from '@/lib/utils';

type SpotlightProps = {
  className?: string;
  /** SVG fill. Defaults to the brand primary token so it tints with theme. */
  fill?: string;
  /** Glow strength. Accepts a number or a CSS var (theme-aware token). */
  opacity?: number | string;
};

/**
 * Aceternity "Spotlight" (sourced via the `components` skill, adapted to brand).
 * Animation honors prefers-reduced-motion (stays visible, no sweep).
 */
export function Spotlight({
  className,
  fill = 'var(--spotlight-fill)',
  opacity = 'var(--spotlight-opacity)',
}: SpotlightProps) {
  return (
    <svg
      className={cn(
        'animate-spotlight pointer-events-none absolute z-[1] h-[169%] w-[138%] opacity-0 lg:w-[84%]',
        'motion-reduce:animate-none motion-reduce:opacity-100',
        className,
      )}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 3787 2842"
      fill="none"
      aria-hidden="true"
    >
      <g filter="url(#spotlight-blur)">
        <ellipse
          cx="1924.71"
          cy="273.501"
          rx="1924.71"
          ry="273.501"
          transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)"
          fill={fill}
          style={{ fillOpacity: opacity as string }}
        />
      </g>
      <defs>
        <filter
          id="spotlight-blur"
          x="0.860352"
          y="0.838989"
          width="3785.16"
          height="2840.26"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="220" result="effect1_foregroundBlur" />
        </filter>
      </defs>
    </svg>
  );
}
