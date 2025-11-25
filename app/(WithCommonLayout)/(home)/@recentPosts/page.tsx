import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getRecentPost } from "@/services/RecentsPost";
import { IPost } from "@/types";

const RecentPost = async () => {
  // Fetch API data
  const response = await getRecentPost();

  console.log("API Response:", response);

  // Safely extract data array
  const posts: IPost[] = Array.isArray(response?.data) ? response.data : [];

  return (
    <div className="container mx-auto">
      {" "}
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-6">Recent Found Items</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {posts.map((post: IPost) => (
            <Card
              key={post._id}
              className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
            >
              {/* Image */}
              {/* Optional: uncomment if needed */}
              {/* <div className="h-48 w-full overflow-hidden bg-gray-200">
              <Image
                src={post?.images?.[0] || "/placeholder.png"}
                alt={post.title}
                width={600}
                height={400}
                className="object-cover h-full w-full"
              />
            </div> */}

              <CardHeader>
                <CardTitle className="text-lg font-semibold flex justify-between">
                  {post.title}
                  <Badge>{post.status}</Badge>
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-3">
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-6">
                  {post.description}
                </p>

                <p className="text-sm text-gray-600">
                  <span className="font-medium">City:</span> {post.city}
                </p>

                <p className="text-sm text-gray-600">
                  <span className="font-medium">Location:</span> {post.location}
                </p>

                <p className="text-xs text-gray-500">
                  Found on:{" "}
                  {post.dateFound
                    ? new Date(post.dateFound).toLocaleDateString()
                    : "N/A"}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentPost;
