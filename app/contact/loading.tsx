import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-12 text-center space-y-2">
          <Skeleton className="h-8 w-48 mx-auto" />
          <Skeleton className="h-5 w-64 mx-auto" />
        </div>

        {/* Contact Form and Info */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Contact Form Skeleton */}
          <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
            <Skeleton className="h-8 w-48" />
            <div className="space-y-4">
              <div className="space-y-2">
                <Skeleton className="h-5 w-16" />
                <Skeleton className="h-9 w-full" />
              </div>
              <div className="space-y-2">
                <Skeleton className="h-5 w-16" />
                <Skeleton className="h-9 w-full" />
              </div>
              <div className="space-y-2">
                <Skeleton className="h-5 w-16" />
                <Skeleton className="h-32 w-full" />
              </div>
              <Skeleton className="h-10 w-full" />
            </div>
          </div>

          {/* Contact Info Skeleton */}
          <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
            <Skeleton className="h-8 w-48" />
            <div className="space-y-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="flex items-start">
                  <Skeleton className="h-5 w-5 mt-1 mr-3" />
                  <div className="space-y-2">
                    <Skeleton className="h-5 w-24" />
                    <Skeleton className="h-4 w-40" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Map Skeleton */}
        <div className="mb-12">
          <Skeleton className="h-8 w-48 mx-auto mb-6" />
          <Skeleton className="h-96 w-full rounded-lg" />
        </div>
      </div>
    </div>
  );
}