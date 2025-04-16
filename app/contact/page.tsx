import { fetchCategories } from '@/utils/api';
import { ContactForm } from '@/components/ContactForm';
import { ContactInfo } from '@/components/ContactInfo';
import { Map } from '@/components/Map';

export default async function ContactPage() {
  const categories = await fetchCategories();

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Contact Us</h1>
            <p className="text-xl text-gray-600">
              We'd love to hear from you! Get in touch with our team.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <ContactForm />
            <ContactInfo />
          </div>
          
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Find Us on the Map
            </h2>
            <Map />
          </div>
        </div>
      </main>
    </div>
  );
}