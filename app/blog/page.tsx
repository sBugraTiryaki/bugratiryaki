import { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog | Buğra Tiryaki - Software Developer",
  description:
    "Yazılım geliştirme, Laravel, Next.js, React ve AI hakkında yazılar. Buğra Tiryaki'nin teknik blog'u.",
  keywords: [
    "blog",
    "yazılım",
    "software development",
    "Laravel",
    "Next.js",
    "React",
    "AI",
    "web development",
  ],
  openGraph: {
    title: "Blog | Buğra Tiryaki",
    description:
      "Yazılım geliştirme, Laravel, Next.js, React ve AI hakkında yazılar.",
    url: "https://bugratiryaki.com/blog",
    type: "website",
  },
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-100">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-neutral-600 hover:text-neutral-900 transition-colors"
          >
            <ArrowLeft size={18} />
            <span className="text-sm">Back to Home</span>
          </Link>
          <Link
            href="/"
            className="text-lg font-semibold tracking-tight text-neutral-900"
          >
            BT
          </Link>
        </div>
      </header>

      {/* Content */}
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Page Title */}
          <div className="mb-16">
            <h1 className="text-4xl font-bold text-neutral-900 mb-4">Blog</h1>
            <p className="text-lg text-neutral-600">
              Yazılım geliştirme, teknoloji ve deneyimlerim hakkında yazılar.
            </p>
          </div>

          {/* Posts */}
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-neutral-500">
                Henüz blog yazısı yok. Yakında yeni içerikler eklenecek!
              </p>
            </div>
          ) : (
            <div className="space-y-8">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="group border border-neutral-200 rounded-xl p-6 hover:border-neutral-300 transition-colors"
                >
                  <Link href={`/blog/${post.slug}`}>
                    <h2 className="text-xl font-semibold text-neutral-900 group-hover:text-neutral-700 transition-colors mb-3">
                      {post.title}
                    </h2>
                    <p className="text-neutral-600 mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-500">
                      <div className="flex items-center gap-1.5">
                        <Calendar size={14} />
                        <time dateTime={post.date}>
                          {new Date(post.date).toLocaleDateString("tr-TR", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </time>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock size={14} />
                        <span>{post.readingTime}</span>
                      </div>
                      {post.tags.length > 0 && (
                        <div className="flex items-center gap-1.5">
                          <Tag size={14} />
                          <span>{post.tags.slice(0, 3).join(", ")}</span>
                        </div>
                      )}
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
