import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Contribute } from '@/components/Contribute';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Contribute · StudentSuite',
  description:
    'The suite gets better when students build it together. How to star, add, and open issues on StudentSuite repos.',
};

export default function ContributePage() {
  return (
    <>
      <Header />
      <main>
        <Contribute />
      </main>
      <Footer />
    </>
  );
}
