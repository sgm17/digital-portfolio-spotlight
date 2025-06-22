import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "@/components/Footer";

const Blog = () => {
  const blogPosts = [
    {
      id: "1",
      title: "Building Scalable Flutter Applications",
      excerpt:
        "Learn the best practices for creating Flutter apps that can handle millions of users.",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "Development",
    },
    {
      id: "2",
      title: "The Future of Social Networking",
      excerpt:
        "Exploring emerging trends and technologies shaping the next generation of social platforms.",
      date: "2024-01-10",
      readTime: "12 min read",
      category: "Technology",
    },
    {
      id: "3",
      title: "Monetization Strategies for Mobile Apps",
      excerpt:
        "A comprehensive guide to different revenue models and how to implement them effectively.",
      date: "2024-01-05",
      readTime: "10 min read",
      category: "Business",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      <main className="pt-20 px-6">
        <div className="max-w-7xl mx-auto py-16">
          <div className="mb-16">
            <h1 className="text-4xl font-bold mb-4">Blog</h1>
            <p className="text-gray-400 text-lg">
              Insights, tutorials, and thoughts on software development and
              technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link key={post.id} to={`/blog/${post.id}`}>
                <article className="bg-gray-900 rounded-lg overflow-hidden hover:bg-gray-800 transition-colors duration-300 cursor-pointer">
                  <div className="aspect-video bg-gray-800"></div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-blue-400 text-sm font-medium">
                        {post.category}
                      </span>
                      <span className="text-gray-400 text-sm">
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-gray-400 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 text-sm">{post.date}</span>
                      <span className="text-blue-400 hover:text-blue-300 transition-colors">
                        Read more →
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
