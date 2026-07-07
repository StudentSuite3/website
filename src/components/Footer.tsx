import { products, orgUrl } from '@/data/products';

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)]">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          <div>
            <img src="/logo-stacked.svg" alt="StudentSuite" className="h-20 w-auto dark:hidden" />
            <img
              src="/logo-stacked-dark.svg"
              alt=""
              aria-hidden="true"
              className="hidden h-20 w-auto dark:block"
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[var(--secondary)]">
              Open-source tools that help students plan less and learn more.
            </p>
          </div>

          <div className="flex gap-16">
            <nav aria-label="Tools">
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                Tools
              </h3>
              <ul className="mt-4 space-y-2.5">
                {products.map((product) => (
                  <li key={product.id}>
                    <a
                      href={product.liveUrl ?? product.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[var(--body)] transition-colors hover:text-[var(--primary)]"
                    >
                      {product.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="Organization">
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                Org
              </h3>
              <ul className="mt-4 space-y-2.5">
                <li>
                  <a
                    href={orgUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[var(--body)] transition-colors hover:text-[var(--primary)]"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="#contribute"
                    className="text-sm text-[var(--body)] transition-colors hover:text-[var(--primary)]"
                  >
                    Contribute
                  </a>
                </li>
                <li>
                  <a
                    href="#mission"
                    className="text-sm text-[var(--body)] transition-colors hover:text-[var(--primary)]"
                  >
                    Mission
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-[var(--border)] pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-xs text-[var(--muted)]">
            MIT licensed · built by students, for students
          </p>
          <p className="text-xs text-[var(--muted)]">
            Built by{' '}
            <a
              href="https://anaydhawan.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[var(--secondary)] transition-colors hover:text-[var(--primary)]"
            >
              Anay Dhawan
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
