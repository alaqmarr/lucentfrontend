import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header Skeleton */}
        <div className="mb-12 text-center space-y-2">
          <Skeleton className="h-8 w-48 mx-auto" />
          <Skeleton className="h-5 w-64 mx-auto" />
        </div>

        {/* Content Sections */}
        <div className="space-y-16">
          {/* Story Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Skeleton className="h-96 rounded-xl" />
            <div className="space-y-4">
              <Skeleton className="h-8 w-48" />
              <Skeleton className="h-5 w-full" />
              <Skeleton className="h-5 w-full" />
              <Skeleton className="h-5 w-3/4" />
            </div>
          </div>

          {/* Mission Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4 order-2 md:order-1">
              <Skeleton className="h-8 w-48" />
              <Skeleton className="h-5 w-full" />
              <Skeleton className="h-5 w-full" />
              <Skeleton className="h-5 w-3/4" />
            </div>
            <Skeleton className="h-96 rounded-xl order-1 md:order-2" />
          </div>

          {/* Values Section */}
          <div className="bg-indigo-50 rounded-xl p-8 md:p-12">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <Skeleton className="h-8 w-48 mx-auto" />
              <div className="grid sm:grid-cols-3 gap-8">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="space-y-2">
                    <Skeleton className="h-6 w-32 mx-auto" />
                    <Skeleton className="h-4 w-40 mx-auto" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}