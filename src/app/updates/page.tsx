import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Updates } from '@/components/Updates';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Updates',
  description: 'A hand-picked log of changes across the StudentSuite repositories.',
};

export default function UpdatesPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="scroll-mt-20">
        <Updates />
      </main>
      <Footer />
    </>
  );
}
