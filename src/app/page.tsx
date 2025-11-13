import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import OverlayShowcase from '@/components/OverlayShowcase';
import FeaturesApple from '@/components/FeaturesApple';
import SupportedGames from '@/components/SupportedGames';
import Pricing from '@/components/Pricing';
import ProvenModel from '@/components/ProvenModel';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="w-full snap-y snap-mandatory h-screen overflow-y-scroll">
        <Hero />
        <OverlayShowcase />
        <FeaturesApple />
        <SupportedGames />
        <Pricing />
        <ProvenModel />
        <Footer />
      </main>
    </>
  );
}
