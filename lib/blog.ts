import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { calculateReadingTime } from "./reading-time";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export type PostFAQ = { soru: string; cevap: string };

export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  updatedDate?: string;
  tags: string[];
  author: string;
  ogImage?: string;
  draft?: boolean;
  readingTime: number;
  summary?: string;
  faq?: PostFAQ[];
};

export type Post = PostMeta & {
  content: string;
};

function readAllPostFiles(): { slug: string; raw: string }[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf8");
      return { slug, raw };
    });
}

function parsePost(slug: string, raw: string): Post {
  const { data, content } = matter(raw);
  return {
    slug,
    title: data.title ?? slug,
    description: data.description ?? "",
    date: data.date ?? new Date().toISOString().slice(0, 10),
    updatedDate: data.updatedDate,
    tags: data.tags ?? [],
    author: data.author ?? "Buğra Tiryaki",
    ogImage: data.ogImage,
    draft: data.draft ?? false,
    readingTime: calculateReadingTime(content),
    summary: data.summary,
    faq: data.faq,
    content,
  };
}

export function getAllPostSlugs(): string[] {
  return readAllPostFiles().map(({ slug }) => slug);
}

export function getAllPosts(): PostMeta[] {
  const isProd = process.env.NODE_ENV === "production";
  return readAllPostFiles()
    .map(({ slug, raw }) => parsePost(slug, raw))
    .filter((p) => !(isProd && p.draft))
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .map(({ content: _content, ...meta }) => meta);
}

export function getPostBySlug(slug: string): Post | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf8");
  return parsePost(slug, raw);
}

export function getRelatedPosts(slug: string, limit = 3): PostMeta[] {
  const target = getPostBySlug(slug);
  if (!target) return [];
  const targetTags = new Set(target.tags);
  return getAllPosts()
    .filter((p) => p.slug !== slug)
    .map((p) => ({
      post: p,
      score: p.tags.filter((t) => targetTags.has(t)).length,
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ post }) => post);
}
