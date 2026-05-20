import type { Metadata } from "next";
import Link from "next/link";
import { Rss } from "lucide-react";
import { getAllPosts } from "@/lib/blog";
import { siteConfig } from "@/lib/site";
import { blogSchema } from "@/lib/schema";
import Breadcrumbs from "../components/layout/Breadcrumbs";
import BlogCard from "../components/cards/BlogCard";
import JsonLd from "../components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Yazılım, MVP geliştirme, SaaS ve girişimcilik üzerine notlar. Buğra Tiryaki'nin yazıları.",
  alternates: { canonical: `${siteConfig.url}/blog` },
  openGraph: {
    title: "Blog | Buğra Tiryaki",
    description: "Yazılım, MVP, SaaS ve girişimcilik üzerine notlar.",
    url: `${siteConfig.url}/blog`,
  },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <>
      <JsonLd data={blogSchema()} />

      <section
        className="py-16 md:py-24"
        style={{ backgroundColor: "var(--luxury-black)" }}
      >
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-10">
            <Breadcrumbs items={[{ label: "Blog", href: "/blog" }]} />
          </div>
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <h1
                className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl lg:text-6xl font-light mb-6 leading-tight"
                style={{ color: "var(--text-primary)" }}
              >
                Yazılar
              </h1>
              <p
                className="text-lg leading-relaxed max-w-2xl"
                style={{ color: "var(--text-secondary)" }}
              >
                Yazılım, MVP geliştirme, SaaS ve girişimcilik üzerine notlar.
              </p>
            </div>
            <Link
              href="/feed.xml"
              className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase transition-colors hover:text-[var(--accent-gold)]"
              style={{ color: "var(--text-muted)" }}
            >
              <Rss size={14} aria-hidden="true" />
              RSS
            </Link>
          </div>
        </div>
      </section>

      <section
        className="py-16 md:py-20"
        style={{ backgroundColor: "var(--luxury-dark)" }}
      >
        <div className="max-w-4xl mx-auto px-6">
          {posts.length === 0 ? (
            <p
              className="text-center text-base"
              style={{ color: "var(--text-muted)" }}
            >
              Henüz yayında yazı yok.
            </p>
          ) : (
            <div className="grid gap-6">
              {posts.map((post) => (
                <BlogCard
                  key={post.slug}
                  slug={post.slug}
                  title={post.title}
                  description={post.description}
                  date={post.date}
                  readingTime={post.readingTime}
                  tags={post.tags}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
