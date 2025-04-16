
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';

export default function AboutSection() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            className="relative h-96 rounded-xl overflow-hidden shadow-lg"
          >
            <Image
              src="/about-image.jpg"
              alt="About ACME"
              fill
              className="object-cover"
            />
          </div>
          
          <div
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About ACME</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2010, ACME Store has been providing high-quality products to customers 
              worldwide. Our mission is to deliver exceptional value while maintaining the 
              highest standards of quality and customer service.
            </p>
            <p className="text-gray-600 mb-6">
              With a team of dedicated professionals and a carefully curated selection of products, 
              we strive to be your one-stop shop for all your needs. Our commitment to excellence 
              has earned us recognition as one of the fastest-growing e-commerce platforms.
            </p>
            <Button asChild>
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}