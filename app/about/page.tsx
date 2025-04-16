import { fetchCategories } from '@/utils/api';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default async function AboutPage() {
  const categories = await fetchCategories();

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="mb-12 text-center"
          >
            <h1 className="text-3xl font-bold text-gray-900 mb-4">About ACME Store</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our story, mission, and values that drive everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div
              className="relative h-96 rounded-xl overflow-hidden shadow-lg"
            >
              <Image
                src="/about-team.jpg"
                alt="ACME Store Team"
                fill
                className="object-cover"
              />
            </div>
            
            <div
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2010 by a group of passionate entrepreneurs, ACME Store started as a 
                small local shop with a big vision. We wanted to create a shopping experience that 
                combined quality products with exceptional customer service.
              </p>
              <p className="text-gray-600 mb-4">
                Over the years, we've grown from a single storefront to a thriving e-commerce 
                platform serving customers across the country. Despite our growth, we've stayed 
                true to our roots, maintaining the personal touch that made us successful in the 
                first place.
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div
              className="order-2 md:order-1"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600 mb-4">
                At ACME Store, our mission is simple: to provide our customers with the best 
                products at the best prices, delivered with outstanding service.
              </p>
              <p className="text-gray-600 mb-4">
                We carefully curate our product selection to ensure quality and value. Every item 
                in our store meets our high standards before we offer it to you.
              </p>
              <p className="text-gray-600">
                We believe that shopping should be easy, enjoyable, and rewarding. That's why 
                we're constantly improving our website, expanding our product lines, and 
                enhancing our customer service.
              </p>
            </div>
            
            <div
              className="relative h-96 rounded-xl overflow-hidden shadow-lg order-1 md:order-2"
            >
              <Image
                src="/about-mission.jpg"
                alt="ACME Store Mission"
                fill
                className="object-cover"
              />
            </div>
          </div>
          
          <div className="bg-indigo-50 rounded-xl p-8 md:p-12">
            <div
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Values</h2>
              <div className="grid sm:grid-cols-3 gap-8">
                <div>
                  <h3 className="font-semibold text-lg text-indigo-600 mb-2">Quality</h3>
                  <p className="text-gray-600">
                    We stand behind every product we sell with a satisfaction guarantee.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-indigo-600 mb-2">Integrity</h3>
                  <p className="text-gray-600">
                    We conduct our business with honesty, fairness, and respect for all.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-indigo-600 mb-2">Innovation</h3>
                  <p className="text-gray-600">
                    We're always looking for ways to improve and enhance your experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}