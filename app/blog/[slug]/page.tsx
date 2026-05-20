import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import {
  getAllPostSlugs,
  getPostBySlug,
  getRelatedPosts,
} from "@/lib/blog";
import { siteConfig } from "@/lib/site";
import { blogPostingSchema } from "@/lib/schema";
import Breadcrumbs from "@/app/components/layout/Breadcrumbs";
import BlogCard from "@/app/components/cards/BlogCard";
import CTASection from "@/app/components/cta/CTASection";
import JsonLd from "@/app/components/seo/JsonLd";
import { mdxComponents } from "@/app/components/mdx/MDXComponents";

type Params = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
    alternates: { canonical: `${siteConfig.url}/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${siteConfig.url}/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.updatedDate ?? post.date,
      tags: post.tags,
      authors: [post.author],
    },
  };
}

function formatDate(iso: string): string {
  try {
    return new Intl.DateTimeFormat("tr-TR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(new Date(iso));
  } catch {
    return iso;
  }
}

export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const { content } = await compileMDX({
    source: post.content,
    components: mdxComponents,
    options: { parseFrontmatter: false },
  });

  const related = getRelatedPosts(slug, 3);

  return (
    <>
      <JsonLd data={blogPostingSchema(post)} />

      {/* Hero */}
      <section
        className="py-16 md:py-24"
        style={{ backgroundColor: "var(--luxury-black)" }}
      >
        <div className="max-w-3xl mx-auto px-6">
          <div className="mb-10">
            <Breadcrumbs
              items={[
                { label: "Blog", href: "/blog" },
                { label: post.title, href: `/blog/${post.slug}` },
              ]}
            />
          </div>
          {post.tags && post.tags.length > 0 && (
            <div className="flex gap-2 flex-wrap mb-6">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 rounded-full"
                  style={{
                    backgroundColor: "rgba(201, 169, 98, 0.1)",
                    color: "var(--accent-gold)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          <h1
            className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-6"
            style={{ color: "var(--text-primary)" }}
          >
            {post.title}
          </h1>
          <div
            className="flex items-center gap-3 text-sm"
            style={{ color: "var(--text-muted)" }}
          >
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span aria-hidden="true">·</span>
            <span>{post.readingTime} dk okuma</span>
          </div>
        </div>
      </section>

      {/* MDX content */}
      <article
        className="py-16 md:py-20"
        style={{ backgroundColor: "var(--luxury-dark)" }}
      >
        <div className="max-w-3xl mx-auto px-6">{content}</div>
      </article>

      {/* Yazar bio */}
      <section
        className="py-16"
        style={{ backgroundColor: "var(--luxury-black)" }}
      >
        <div className="max-w-3xl mx-auto px-6">
          <div
            className="p-8 border-luxury rounded-lg"
            style={{ backgroundColor: "var(--luxury-charcoal)" }}
          >
            <p
              className="text-xs tracking-[0.2em] uppercase mb-3"
              style={{ color: "var(--accent-gold)" }}
            >
              Yazar
            </p>
            <h2
              className="font-[family-name:var(--font-cormorant)] text-2xl font-light mb-3"
              style={{ color: "var(--text-primary)" }}
            >
              {post.author}
            </h2>
            <p
              className="text-base leading-relaxed mb-4"
              style={{ color: "var(--text-secondary)" }}
            >
              KolayOnay ve AgencyLambda kurucu ortağı. İşletmeler ve
              girişimciler için bağımsız yazılım geliştiriyor.
            </p>
            <Link
              href="/hakkimda"
              className="text-sm underline underline-offset-4 transition-colors"
              style={{ color: "var(--accent-gold)" }}
            >
              Daha fazlası →
            </Link>
          </div>
        </div>
      </section>

      {/* İlgili yazılar */}
      {related.length > 0 && (
        <section
          className="py-16 md:py-20"
          style={{ backgroundColor: "var(--luxury-dark)" }}
        >
          <div className="max-w-4xl mx-auto px-6">
            <h2
              className="font-[family-name:var(--font-cormorant)] text-2xl md:text-3xl font-light mb-8"
              style={{ color: "var(--text-primary)" }}
            >
              İlgili yazılar
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {related.map((p) => (
                <BlogCard
                  key={p.slug}
                  slug={p.slug}
                  title={p.title}
                  description={p.description}
                  date={p.date}
                  readingTime={p.readingTime}
                  tags={p.tags}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection
        title="Projeniz hakkında konuşalım"
        description="Aklınızdaki yazılım fikrini ya da işletmenize özel çözümü birlikte değerlendirelim."
        actions={[
          { label: "İletişime geç", href: "/iletisim", variant: "primary" },
          { label: "Hizmetler", href: "/hizmetler", variant: "secondary" },
        ]}
      />
    </>
  );
}
