
import { Button } from './ui/button';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-red-800 to-gray-600 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to ACME Flow Control
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Discover high-quality products for every need at unbeatable prices.
          </p>
          <div className="flex justify-center space-x-4">
            <Button asChild variant="secondary" size="lg">
              <Link href="/products">Explore our products</Link>
            </Button>
          </div>
        </div>
      </div>
      
      <div
        className="absolute inset-0 bg-[url('/pattern.svg')] bg-repeat opacity-10"
      />
    </section>
  );
}