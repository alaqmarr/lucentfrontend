import { fetchProductBySlug } from '@/utils/api';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { NotFound } from '@/components/not-found';

export default async function ProductPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {

    const resolvedParams = await params;
    const { slug } = resolvedParams;
    const product = await fetchProductBySlug(slug);
    if (!product) return (
        <NotFound title='Product not found' message='The product you are looking for does not exist.' />
    )

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Product Images */}
                <div className="space-y-4">
                    <div className="relative aspect-square w-full rounded-lg overflow-hidden bg-gray-100">
                        <Image
                            src={product.images[0]?.url || '/placeholder-product.jpg'}
                            alt={product.name}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                    {product.images.length > 1 && (
                        <div className="grid grid-cols-4 gap-2">
                            {product.images.slice(1).map((image) => (
                                <div key={image.id} className="relative aspect-square rounded-md overflow-hidden bg-gray-100">
                                    <Image
                                        src={image.url}
                                        alt={product.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Product Info */}
                <div className="space-y-4">
                    <h1 className="text-3xl font-bold">{product.name}</h1>

                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <span>Category:</span>
                        <span className="text-indigo-600">
                            {product.category.name}
                        </span>
                        {product.subcategory && (
                            <>
                                <span>/</span>
                                <span className="text-indigo-600">
                                    {product.subcategory.name}
                                </span>
                            </>
                        )}
                    </div>

                    {/* <div className="text-2xl font-bold">${product.price.toFixed(2)}</div> */}

                    <div className={product.quantity > 0 ? "text-green-600" : "text-red-600"}>
                        {product.quantity > 0 ? `In Stock (${product.quantity} available)` : 'Out of Stock'}
                    </div>

                    <div className="prose max-w-none">
                        <p
                        className='tiptap-rendered'
                            dangerouslySetInnerHTML={{ __html: product.description }}
                        ></p>
                    </div>

                    {/* <button 
            disabled={product.quantity <= 0}
            className={`px-6 py-3 rounded-md ${product.quantity > 0 ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
          >
            {product.quantity > 0 ? 'Add to Cart' : 'Out of Stock'}
          </button> */}
                    <Link
                        href={`https://wa.me/+919849661522?text=${encodeURIComponent("I want to enquire about " + product.name)}`}
                    >
                        <Button
                        >
                            Enquire about this product
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}