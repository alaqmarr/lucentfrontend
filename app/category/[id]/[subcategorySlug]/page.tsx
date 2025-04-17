import { fetchCategories, fetchCategoryBySlug, fetchProductsBySubcategory } from '@/utils/api';
import { notFound } from 'next/navigation';
import { ProductCard } from '@/components/ProductCard';
import { NotFound } from '@/components/not-found';

export default async function SubcategoryPage({
    params,
}: {
    params: Promise<{ id: string; subcategorySlug: string }>;
}) {

    const resolvedParams = await params;
    const { id, subcategorySlug } = resolvedParams;
    const allCategory = await fetchCategoryBySlug(
        id
    );

    const products = allCategory.products.filter(
        (product) => product.subcategoryId?.toString() === subcategorySlug
    );
    if (!products.length) return (
        <NotFound title='No Products Found' message='There are no products in this subcategory.' />
    )

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-3xl font-bold mb-8">
                {products[0]?.subcategory?.name || 'Subcategory'} Products
            </h1>

            {products.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            ) : (
                <p className="">No products found in this subcategory.</p>
            )}
        </div>
    );
}