export function Mission() {
  return (
    <section id="mission" className="scroll-mt-20 bg-[var(--mission-bg)]">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
        <h2 className="max-w-3xl font-heading text-4xl font-semibold leading-[1.1] tracking-[-0.02em] text-[var(--mission-fg)] sm:text-5xl">
          The tools we needed did not exist, so we built them.
        </h2>

        <div className="mt-10 grid gap-8 text-lg leading-relaxed text-[var(--mission-muted)] lg:grid-cols-2">
          <p>
            Study spots, exam dates, and decent resources are scattered across paywalls and dead
            links. We build the missing pieces in public, keep them free, and let the people who use
            them decide what comes next.
          </p>
          <p>
            The work started around IGCSE and IB. The tools are for anyone studying, anywhere.
          </p>
        </div>

        <p className="mt-12 font-mono text-sm text-[var(--mission-fg)]">
          <span className="border-b-2 border-[var(--mission-accent)] pb-0.5 font-semibold">
            MIT licensed.
          </span>{' '}
          Every change is in public.
        </p>
      </div>
    </section>
  );
}
