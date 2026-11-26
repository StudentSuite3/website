import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Contribute } from '@/components/Contribute';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Contribute',
  description:
    'Three ways to help: add an entry, report a problem, or star a StudentSuite repository.',
};

export default function ContributePage() {
  return (
    <>
      <Header />
      <main id="main-content" className="scroll-mt-20">
        <Contribute />
      </main>
      <Footer />
    </>
  );
}
