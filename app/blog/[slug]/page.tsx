import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { getPostBySlug, getAllSlugs } from "@/lib/blog";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found | Buğra Tiryaki",
    };
  }

  return {
    title: `${post.title} | Buğra Tiryaki Blog`,
    description: post.excerpt,
    keywords: post.tags,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://bugratiryaki.com/blog/${slug}`,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    author: {
      "@type": "Person",
      name: post.author,
      url: "https://bugratiryaki.com",
    },
    datePublished: post.date,
    dateModified: post.date,
    publisher: {
      "@type": "Person",
      name: "Buğra Tiryaki",
      url: "https://bugratiryaki.com",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://bugratiryaki.com/blog/${slug}`,
    },
    keywords: post.tags.join(", "),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />
      <main className="min-h-screen bg-white">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-100">
          <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
            <Link
              href="/blog"
              className="flex items-center gap-2 text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              <ArrowLeft size={18} />
              <span className="text-sm">Back to Blog</span>
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
        <article className="pt-32 pb-20 px-6">
          <div className="max-w-3xl mx-auto">
            {/* Post Header */}
            <header className="mb-12">
              <h1 className="text-4xl font-bold text-neutral-900 mb-6">
                {post.title}
              </h1>
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
              </div>
              {post.tags.length > 0 && (
                <div className="flex flex-wrap items-center gap-2 mt-4">
                  <Tag size={14} className="text-neutral-400" />
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-neutral-100 text-neutral-600 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </header>

            {/* Post Content */}
            <div className="prose prose-neutral prose-lg max-w-none prose-headings:font-semibold prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl prose-pre:bg-neutral-900">
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>

            {/* Post Footer */}
            <footer className="mt-16 pt-8 border-t border-neutral-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-neutral-500">Written by</p>
                  <p className="font-medium text-neutral-900">{post.author}</p>
                </div>
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-100 text-neutral-700 rounded-lg hover:bg-neutral-200 transition-colors"
                >
                  <ArrowLeft size={16} />
                  All Posts
                </Link>
              </div>
            </footer>
          </div>
        </article>
      </main>
    </>
  );
}
