import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Products } from '@/components/Products';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Tools',
  description:
    'The suite so far: every free, open-source tool StudentSuite ships for students.',
};

export default function ToolsPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="scroll-mt-20">
        <Products />
      </main>
      <Footer />
    </>
  );
}
