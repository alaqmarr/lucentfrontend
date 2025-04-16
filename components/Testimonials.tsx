'use client'
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Happy Customer',
    content:
      'I absolutely love shopping at ACME Store! The quality of their products is exceptional and their customer service is top-notch. Highly recommended!',
    avatar: '/avatar1.jpg',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Frequent Shopper',
    content:
      'The variety of products available is impressive. I always find what I need, and the prices are very competitive. Fast shipping too!',
    avatar: '/avatar2.jpg',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'First-time Buyer',
    content:
      'My first purchase exceeded my expectations. The product arrived quickly and was exactly as described. Will definitely shop here again!',
    avatar: '/avatar3.jpg',
  },
];

export default function Testimonials() {
  return (
    <section className="py-12 bg-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className="text-3xl font-bold text-gray-900 mb-4"
          >
            What Our Customers Say
          </h2>
          <p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full overflow-hidden bg-gray-200">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}