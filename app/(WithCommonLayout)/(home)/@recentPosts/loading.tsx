import { SkeletonCard } from "@/skeleton/SkeletonCard";

const RecentPostSkeleton = async () => {
  const posts = [];

  return (
    <div className="container mx-auto">
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-6">Recent Found Items</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {/* Show skeletons while posts are loading */}
          {!posts?.length &&
            [...Array(9)].map((_, i) => <SkeletonCard key={i} />)}

          {/* Map actual posts here when fetched */}
          {posts?.map((post) => (
            <div key={post._id}> {/* replace with PostCard component */}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentPostSkeleton;
