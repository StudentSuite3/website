'use client';

import { useSyncExternalStore } from 'react';
import { MeshGradient } from '@paper-design/shaders-react';

function supportsWebGL(): boolean {
  try {
    const c = document.createElement('canvas');
    return !!(c.getContext('webgl2') || c.getContext('webgl'));
  } catch {
    return false;
  }
}

function subscribeReducedMotion(cb: () => void) {
  const mql = window.matchMedia('(prefers-reduced-motion: reduce)');
  mql.addEventListener('change', cb);
  return () => mql.removeEventListener('change', cb);
}

function getCanAnimate() {
  return !window.matchMedia('(prefers-reduced-motion: reduce)').matches && supportsWebGL();
}

/**
 * Animated mesh-gradient hero backdrop (Paper shaders). Scoped to its own
 * absolutely-positioned layer; a scrim over it keeps hero text legible. Renders a
 * static CSS gradient instead of the WebGL canvas when reduced motion is requested
 * or WebGL is unavailable. Never touches text (no gradient-clip).
 */
export function HeroGradient({
  colors,
  fallbackClass,
  scrimClass = 'bg-[color-mix(in_oklab,var(--bg-primary)_45%,transparent)]',
  distortion = 0.85,
  swirl = 0.35,
  speed = 0.22,
}: {
  colors: string[];
  fallbackClass: string;
  scrimClass?: string;
  distortion?: number;
  swirl?: number;
  speed?: number;
}) {
  const canAnimate = useSyncExternalStore(subscribeReducedMotion, getCanAnimate, () => false);

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden>
      {canAnimate ? (
        <MeshGradient
          colors={colors}
          distortion={distortion}
          swirl={swirl}
          speed={speed}
          style={{ width: '100%', height: '100%' }}
        />
      ) : (
        <div className={`h-full w-full ${fallbackClass}`} />
      )}
      <div className={`absolute inset-0 ${scrimClass}`} />
    </div>
  );
}

export default HeroGradient;
