import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Privacy',
  description: 'What the StudentSuite website records about visits, and what it does not.',
};

const CONTACT = 'studentsuite3@gmail.com';

// Wording follows Vercel's own description of Web Analytics
// (https://vercel.com/docs/analytics/privacy-policy, last updated 2026-06-26).
// Re-check it there if the plan or the analytics setup changes.
export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="scroll-mt-20">
        <article className="mx-auto max-w-3xl px-4 pb-24 pt-32 sm:px-6 lg:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--muted)]">Privacy</p>
          <h1 className="mt-4 font-heading text-4xl font-semibold leading-tight text-[var(--heading)]">
            What this site records
          </h1>
          <p className="mt-2 text-sm text-[var(--muted)]">Last updated 6 November 2026</p>

          <div className="mt-10 space-y-8 text-[var(--body)] leading-relaxed">
            <section>
              <h2 className="font-heading text-xl font-semibold text-[var(--heading)]">The short version</h2>
              <p className="mt-3">
                You can read every page here without an account. The site counts page views with Vercel Web
                Analytics, sets no third-party cookies, runs no ads, and does not sell or share anything it
                records.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-[var(--heading)]">Page view analytics</h2>
              <p className="mt-3">For each page view, Vercel Web Analytics records:</p>
              <ul className="mt-3 list-disc space-y-1.5 pl-6">
                <li>the page address and the time of the visit</li>
                <li>the page that linked you here, if there was one</li>
                <li>an approximate location (country, region, and city)</li>
                <li>your browser, operating system, and their versions</li>
                <li>the kind of device: mobile, tablet, or desktop</li>
              </ul>
              <p className="mt-3">
                Vercel says this is recorded without being tied to any individual or IP address. Visitors are
                counted using a hash made from the incoming request, and that session data is discarded after 24
                hours. We use the totals to see which pages people read and which links bring them here.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-[var(--heading)]">On your device</h2>
              <p className="mt-3">
                If you switch between the light and dark theme, your choice is saved in your browser&apos;s local
                storage so the next page uses it. It never leaves your device, and clearing your site data removes
                it.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-[var(--heading)]">Other StudentSuite tools</h2>
              <p className="mt-3">
                Each tool explains its own data. StudyMap, for example, has accounts for saving places, and its{' '}
                <a
                  href="https://studyymap.com/legal/privacy"
                  className="font-medium text-[var(--primary)] hover:underline"
                >
                  privacy page
                </a>{' '}
                covers what those store. Links to other sites lead to their own policies.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-[var(--heading)]">Questions</h2>
              <p className="mt-3">
                Email{' '}
                <a href={`mailto:${CONTACT}`} className="font-medium text-[var(--primary)] hover:underline">
                  {CONTACT}
                </a>
                .
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
