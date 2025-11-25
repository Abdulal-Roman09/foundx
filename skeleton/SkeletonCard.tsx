import { Skeleton } from "@/components/ui/skeleton";

export const SkeletonCard = () => {
  return (
    <div className="rounded-xl overflow-hidden shadow-md animate-pulse border border-gray-200 dark:border-gray-700">
      <Skeleton className="h-6 w-3/4 mx-4 mt-4 rounded" /> {/* title */}
      <Skeleton className="h-40 w-full mt-2 rounded" />{" "}
      {/* image or placeholder */}
      <div className="p-4 space-y-2">
        <Skeleton className="h-4 w-full rounded" /> {/* description line 1 */}
        <Skeleton className="h-4 w-5/6 rounded" /> {/* description line 2 */}
        <Skeleton className="h-4 w-3/4 rounded" /> {/* city/location */}
      </div>
    </div>
  );
};
