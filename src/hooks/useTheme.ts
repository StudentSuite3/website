'use client';

import { useSyncExternalStore } from 'react';

// The `dark` class on <html> is the single source of truth: the inline script
// in layout.tsx sets it before paint, and toggleTheme flips it. Reading it
// through a MutationObserver keeps every toggle (desktop and mobile) in sync
// without setState in an effect.
function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
  return () => observer.disconnect();
}

export function useIsDark() {
  return useSyncExternalStore(
    subscribe,
    () => document.documentElement.classList.contains('dark'),
    () => false,
  );
}

export function toggleTheme() {
  const next = !document.documentElement.classList.contains('dark');
  document.documentElement.classList.toggle('dark', next);
  // Storage can be blocked (site data disabled, some in-app browsers). The
  // theme still switches for this page view; it just won't be remembered.
  try {
    localStorage.setItem('theme', next ? 'dark' : 'light');
  } catch {
    /* preference not persisted */
  }
}
