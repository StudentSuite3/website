import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Products } from '@/components/Products';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Tools',
  description:
    'Five open projects: a map of study places, a skills-and-plugins collection, and three curated resource lists.',
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
