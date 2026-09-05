import { products, orgUrl } from '@/data/products';

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--card-bg)]">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          <div className="flex items-center gap-2.5">
            <img src="/logo.svg" alt="" aria-hidden="true" className="h-9 w-9" />
            <div>
              <span className="font-[family-name:var(--font-space-grotesk)] text-lg font-semibold tracking-tight text-[var(--heading)]">
                Student<span className="text-[var(--primary)]">Suite</span>
              </span>
              <p className="mt-1 max-w-xs text-sm leading-relaxed text-[var(--secondary)]">
                Open-source tools that help students plan less and learn more.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-x-16 gap-y-10 sm:gap-x-24">
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
                    href="/tools"
                    className="text-sm text-[var(--body)] transition-colors hover:text-[var(--primary)]"
                  >
                    Repos
                  </a>
                </li>
                <li>
                  <a
                    href="/updates"
                    className="text-sm text-[var(--body)] transition-colors hover:text-[var(--primary)]"
                  >
                    Updates
                  </a>
                </li>
                <li>
                  <a
                    href="/contribute"
                    className="text-sm text-[var(--body)] transition-colors hover:text-[var(--primary)]"
                  >
                    Contribute
                  </a>
                </li>
                <li>
                  <a
                    href="/mission"
                    className="text-sm text-[var(--body)] transition-colors hover:text-[var(--primary)]"
                  >
                    Mission
                  </a>
                </li>
              </ul>
            </nav>

            <nav aria-label="Contact">
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                Contact
              </h3>
              <ul className="mt-4 space-y-2.5">
                <li>
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=studentsuite3@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[var(--body)] transition-colors hover:text-[var(--primary)]"
                  >
                    Email
                  </a>
                </li>
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
                    href="https://instagram.com/student.suite"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[var(--body)] transition-colors hover:text-[var(--primary)]"
                  >
                    Instagram
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
        </div>
      </div>
    </footer>
  );
}
