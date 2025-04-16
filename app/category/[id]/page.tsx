import { fetchProducts, fetchCategories, Product, Category, Subcategory } from '@/utils/api';
import { ProductCard } from '@/components/ProductCard';
import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { NotFound } from '@/components/not-found';

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const [products, categories] = await Promise.all([
    fetchProducts(),
    fetchCategories(),
  ]);

  const resolvedParams = await params;
  const { id } = resolvedParams;
  const category = categories.find((cat) => cat.id.toString() === id);
  if (!category) return (
    <NotFound title='No Results' message='There are no products in this category' />
  )

  const categoryProducts = products.filter(
    (product) => product.categoryId.toString() === id
  );

  const subcategories = category.subcategories.filter(
    (subcategory) => subcategory.categoryId.toString() === id
  );
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div

            className="mb-12"
          >
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {category.name}
            </h1>
            <p className="text-gray-600">
              Browse our selection of {category.name.toLowerCase()} products
            </p>
          </div>

          {subcategories.length > 0 && (
            <div

              className="mb-12"
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Subcategories
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {subcategories.map((subcategory) => (
                  <div

                    key={subcategory.id}
                    className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
                  >
                    <a
                      href={`/category/${subcategory.id}`}
                      className="text-indigo-600 hover:text-indigo-800 font-medium"
                    >
                      {subcategory.name}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}

          {categoryProducts.length > 0 ? (
            <div

              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            >
              {categoryProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div

              className="text-center py-12"
            >
              <p className="text-gray-600">
                No products found in this category. Check back soon!
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}