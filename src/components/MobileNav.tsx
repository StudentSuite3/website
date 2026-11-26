'use client';

import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from 'react';
import Link from 'next/link';
import { createPortal } from 'react-dom';
import { usePathname } from 'next/navigation';
import { Github, Menu, X } from 'lucide-react';
import { orgUrl } from '@/data/products';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import { cn } from '@/lib/utils';
import { isCurrent } from '@/lib/nav';

interface NavLink {
  href: string;
  label: string;
}

/** Portalled to body so the fixed header cannot clip the full-screen panel. */
export function MobileNav({ links }: { links: NavLink[] }) {
  // Open state is tied to the path, so a route change closes the panel.
  const pathname = usePathname();
  const [openOn, setOpenOn] = useState<string | null>(null);
  const open = openOn === pathname;
  const setOpen = useCallback(
    (next: boolean | ((v: boolean) => boolean)) =>
      setOpenOn((current) => {
        const value = typeof next === 'function' ? next(current === pathname) : next;
        return value ? pathname : null;
      }),
    [pathname],
  );
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
  const reduced = usePrefersReducedMotion();

  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    firstLinkRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        return;
      }
      if (e.key !== 'Tab' || !panelRef.current) return;

      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])',
      );
      if (focusable.length === 0) return;
      const first = focusable[0]!;
      const last = focusable[focusable.length - 1]!;

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open, setOpen]);

  function close() {
    setOpen(false);
    triggerRef.current?.focus();
  }

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="mobile-menu-panel"
        aria-label={open ? 'Close menu' : 'Open menu'}
        className="rounded-md p-2 text-[var(--secondary)] hover:text-[var(--heading)]"
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {mounted &&
        createPortal(
          <div
            id="mobile-menu-panel"
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            aria-hidden={!open}
            inert={!open}
            style={{
              transitionDuration: reduced ? '0ms' : 'var(--duration-med)',
              transitionTimingFunction: 'var(--ease-out)',
            }}
            className={cn(
              'fixed inset-0 z-[60] flex flex-col overflow-y-auto bg-[var(--mobile-bg)] transition-transform md:hidden',
              open ? 'translate-x-0' : 'translate-x-full',
            )}
          >
            <div className="flex h-16 items-center justify-between px-4">
              <Link
                href="/"
                onClick={close}
                aria-label="StudentSuite home"
                className="flex items-center gap-3"
              >
                <img src="/logo.svg" alt="" aria-hidden="true" className="h-9 w-9" />
                <span className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold tracking-tight text-[var(--heading)]">
                  Student<span className="text-[var(--primary)]">Suite</span>
                </span>
              </Link>
              <button
                type="button"
                onClick={close}
                aria-label="Close menu"
                className="rounded-md p-2 text-[var(--secondary)] hover:text-[var(--heading)]"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="flex flex-1 flex-col justify-center gap-2 px-6" aria-label="Mobile">
              {links.map((link, i) => {
                const active = isCurrent(pathname, link.href);
                return (
                  <a
                    key={link.href}
                    ref={i === 0 ? firstLinkRef : undefined}
                    href={link.href}
                    onClick={close}
                    aria-current={active ? 'page' : undefined}
                    className={cn(
                      'py-2 font-heading text-3xl font-semibold leading-tight transition-colors',
                      active ? 'text-[var(--primary)]' : 'text-[var(--heading)] hover:text-[var(--primary)]',
                    )}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            <div className="border-t border-[var(--border)] px-6 py-6">
              <a
                href={orgUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={close}
                className="flex items-center gap-2 rounded-md border border-[var(--border-strong)] px-4 py-2.5 text-sm font-medium text-[var(--heading)] hover:border-[var(--primary)] hover:text-[var(--primary)]"
              >
                <Github className="h-4 w-4" aria-hidden="true" />
                GitHub
              </a>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
