
import { Product } from '@/utils/api';
import Link from 'next/link';
import { ProductCard } from './ProductCard';
import { Button } from './ui/button';

export default function FeaturedProducts({ products }: { products: Product[] }) {
  const featuredProducts = products.slice(0, 4);
  
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className="text-3xl font-bold text-gray-900 mb-4"
          >
            Featured Products
          </h2>
          <p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Check out our most popular items
          </p>
        </div>
        
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div
          className="text-center mt-12"
        >
          <Button asChild variant="outline" size="lg">
            <Link href="/products">View All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}