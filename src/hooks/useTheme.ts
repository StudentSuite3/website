'use client';

import { useSyncExternalStore } from 'react';

// Observe the <html> class the inline script and toggleTheme both write.
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
  // Storage can be blocked; the theme still switches for this page view.
  try {
    localStorage.setItem('theme', next ? 'dark' : 'light');
  } catch {
    /* preference not persisted */
  }
}
