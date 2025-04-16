import Link from 'next/link';
import { Button } from './ui/button';
import { AlertTriangle } from 'lucide-react';

export function NotFound({title, message}: {title?: string, message?: string}) {
  return (
    <div
    className='flex flex-col w-full items-center justify-center bg-gray-50 mt-16'
    >
        <div className="w-[300px] bg-white rounded-lg shadow-md overflow-hidden border border-dashed border-gray-300">
      <div className="flex flex-col items-center justify-center p-8 text-center">
        <AlertTriangle className="h-12 w-12 text-yellow-500 mb-4" />
        <h3 className="font-semibold text-lg mb-2">
            {title || 'Product Not Found'}
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          {message || 'The product you are looking for does not exist or has been removed.'}
        </p>
        <Button asChild variant="outline">
          <Link href="/products">
            Browse All Products
          </Link>
        </Button>
      </div>
    </div>
    </div>
  );
}