'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Github, Moon, Sun } from 'lucide-react';
import { orgUrl } from '@/data/products';
import { MobileNav } from '@/components/MobileNav';

const navLinks = [
  { href: '/#tools', label: 'Tools' },
  { href: '/#mission', label: 'Mission' },
  { href: '/#contribute', label: 'Contribute' },
  { href: '/updates', label: 'Updates' },
];

export function Header() {
  const [isDark, setIsDark] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'));
  }, []);

  const toggleTheme = () => {
    const next = !document.documentElement.classList.contains('dark');
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
    setIsDark(next);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--border)] bg-[var(--nav-bg)]">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="/" aria-label="StudentSuite home" className="flex items-center gap-3">
          <img src="/logo.svg" alt="" aria-hidden="true" className="h-10 w-10 sm:h-12 sm:w-12" />
          <span className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-semibold tracking-tight text-[var(--heading)]">
            Student<span className="text-[var(--primary)]">Suite</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={pathname === link.href ? 'page' : undefined}
              className="rounded-md px-3 py-2 text-sm text-[var(--secondary)] transition-colors hover:text-[var(--heading)] aria-[current=page]:text-[var(--primary)] focus-visible:outline-2 focus-visible:outline-[var(--primary)]"
            >
              {link.label}
            </a>
          ))}
          <a
            href={orgUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 inline-flex items-center gap-2 rounded-md border border-[var(--border-strong)] px-3 py-1.5 text-sm font-medium text-[var(--heading)] transition-colors hover:border-[var(--primary)] hover:text-[var(--primary)] focus-visible:outline-2 focus-visible:outline-[var(--primary)]"
          >
            <Github className="h-4 w-4" aria-hidden="true" />
            GitHub
          </a>
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="ml-1 rounded-md p-2 text-[var(--secondary)] transition-colors hover:text-[var(--heading)] focus-visible:outline-2 focus-visible:outline-[var(--primary)]"
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
        </nav>

        <div className="flex items-center gap-1 md:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="rounded-md p-2 text-[var(--secondary)] hover:text-[var(--heading)]"
          >
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <MobileNav links={navLinks} />
        </div>
      </div>
    </header>
  );
}
