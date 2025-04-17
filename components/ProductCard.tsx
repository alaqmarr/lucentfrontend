import { Product } from '@/utils/api';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';

export function ProductCard({ product }: { product: Product }) {
  return (
    <div
      className=" bg-secondary rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
    >
      <div className="relative h-48 w-full">
        <Image
          src={product.images[0].url || '/placeholder-product.jpg'}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-xl font-mono mb-2">{product.name}</h3>
        <p className="text-sm mb-4 line-clamp-2"
          dangerouslySetInnerHTML={{ __html: product.description.slice(0, 100) }} // Use dangerouslySetInnerHTML to render HTML content
        ></p>
        <div className="flex justify-between items-center">
          {/* <span className="font-bold text-indigo-600">${product.price.toFixed(2)}</span> */}
          <Button asChild size="sm">
            <Link href={`/products/${product.id}`}>View Details</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}