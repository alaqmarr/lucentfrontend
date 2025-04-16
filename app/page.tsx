import HeroSection from '@/components/HeroSection';  // Changed to default import
import { fetchProducts } from '@/utils/api';
import FeaturedProducts from '@/components/FeaturedProducts';
import AboutSection from '@/components/AboutSection';
import Testimonials from '@/components/Testimonials';
import Newsletter from '@/components/Newsletter';

export default async function Home() {
  const products = await fetchProducts();

  return (
    <>
      <HeroSection />
      <FeaturedProducts products={products} />
      <AboutSection />
      <Testimonials />
      <Newsletter />
    </>
  );
}