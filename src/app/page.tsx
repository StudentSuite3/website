import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Products } from '@/components/Products';
import { Mission } from '@/components/Mission';
import { Contribute } from '@/components/Contribute';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Products />
        <Mission />
        <Contribute />
      </main>
      <Footer />
    </>
  );
}
