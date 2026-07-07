import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Mission } from '@/components/Mission';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Mission · StudentSuite',
  description: 'Students deserve better software. Why StudentSuite exists and who it is for.',
};

export default function MissionPage() {
  return (
    <>
      <Header />
      <main>
        <Mission />
      </main>
      <Footer />
    </>
  );
}
