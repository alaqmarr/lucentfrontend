
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';

export default function AboutSection() {
  return (
    <section className="py-12 bg-gradient-to-r from-orange-500 to-yellow-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            className="relative h-fit bg-primary-foreground rounded-xl overflow-hidden flex shadow-lg items-center justify-center"
          >
            <Image
              src="/logo.png"
              alt="About ACME"
              width={400}
              height={100}
              className="object-cover p-4"
            />
          </div>
          
          <div
          >
            <h2 className="text-3xl font-bold text-black mb-6">About US</h2>
            <p className="text-black mb-4">
              
            We are a dynamic instrumentation and control automation company, established in 2024 in the Emirate of Dubai, United Arab Emirates. We specialise in providing cutting-edge solutions in measuring and controlling systems, catering to a wide range of industries.
                                    
            </p>
            <p className="text-black mb-6">
            Our company is proud to be a sister company to Oasis Group, a renowned business based in Hyderabad, India, known for its expertise and excellence in the field
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