import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export function ContactInfo() {
  return (
    <div
      className="bg-white p-6 rounded-lg shadow-md"
    >
      <h3 className="text-2xl font-bold mb-6 text-gray-800">Contact Information</h3>
      <div className="space-y-4">
        <div className="flex items-start">
          <MapPin className="h-5 w-5 mt-1 text-indigo-600 mr-3" />
          <div>
            <h4 className="font-medium text-gray-900">Address</h4>
            <p className="text-gray-600">123 Business Ave, Suite 456<br />San Francisco, CA 94107</p>
          </div>
        </div>
        <div className="flex items-start">
          <Phone className="h-5 w-5 mt-1 text-indigo-600 mr-3" />
          <div>
            <h4 className="font-medium text-gray-900">Phone</h4>
            <p className="text-gray-600">+1 (555) 123-4567</p>
          </div>
        </div>
        <div className="flex items-start">
          <Mail className="h-5 w-5 mt-1 text-indigo-600 mr-3" />
          <div>
            <h4 className="font-medium text-gray-900">Email</h4>
            <p className="text-gray-600">info@acmestore.com</p>
          </div>
        </div>
        <div className="flex items-start">
          <Clock className="h-5 w-5 mt-1 text-indigo-600 mr-3" />
          <div>
            <h4 className="font-medium text-gray-900">Business Hours</h4>
            <p className="text-gray-600">Monday - Friday: 9am - 6pm<br />Saturday: 10am - 4pm<br />Sunday: Closed</p>
          </div>
        </div>
      </div>
    </div>
  );
}