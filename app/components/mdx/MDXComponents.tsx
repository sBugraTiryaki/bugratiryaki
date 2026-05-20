import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import type {
  AnchorHTMLAttributes,
  HTMLAttributes,
  OlHTMLAttributes,
} from "react";

export const mdxComponents: MDXComponents = {
  h1: (props: HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-light mt-12 mb-6"
      style={{ color: "var(--text-primary)" }}
      {...props}
    />
  ),
  h2: (props: HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl font-light mt-12 mb-4"
      style={{ color: "var(--text-primary)" }}
      {...props}
    />
  ),
  h3: (props: HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className="font-[family-name:var(--font-cormorant)] text-2xl font-light mt-10 mb-3"
      style={{ color: "var(--text-primary)" }}
      {...props}
    />
  ),
  p: (props: HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className="text-base md:text-lg leading-relaxed my-5"
      style={{ color: "var(--text-secondary)" }}
      {...props}
    />
  ),
  ul: (props: HTMLAttributes<HTMLUListElement>) => (
    <ul
      className="list-disc pl-6 my-5 space-y-2 text-base md:text-lg leading-relaxed"
      style={{ color: "var(--text-secondary)" }}
      {...props}
    />
  ),
  ol: (props: OlHTMLAttributes<HTMLOListElement>) => (
    <ol
      className="list-decimal pl-6 my-5 space-y-2 text-base md:text-lg leading-relaxed"
      style={{ color: "var(--text-secondary)" }}
      {...props}
    />
  ),
  li: (props: HTMLAttributes<HTMLLIElement>) => (
    <li className="leading-relaxed" {...props} />
  ),
  blockquote: (props: HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className="border-l-2 pl-6 my-8 italic"
      style={{
        borderColor: "var(--accent-gold)",
        color: "var(--text-secondary)",
      }}
      {...props}
    />
  ),
  code: (props: HTMLAttributes<HTMLElement>) => (
    <code
      className="px-1.5 py-0.5 rounded text-sm font-[family-name:var(--font-geist-mono)]"
      style={{
        backgroundColor: "var(--luxury-charcoal)",
        color: "var(--accent-gold)",
      }}
      {...props}
    />
  ),
  pre: (props: HTMLAttributes<HTMLPreElement>) => (
    <pre
      className="p-6 my-8 rounded-lg overflow-x-auto text-sm font-[family-name:var(--font-geist-mono)] border"
      style={{
        backgroundColor: "var(--luxury-charcoal)",
        borderColor: "var(--border-subtle)",
        color: "var(--text-primary)",
      }}
      {...props}
    />
  ),
  a: ({ href, children, ...rest }: AnchorHTMLAttributes<HTMLAnchorElement>) => {
    const isInternal = href?.startsWith("/");
    if (isInternal) {
      return (
        <Link
          href={href!}
          className="underline underline-offset-4 transition-colors"
          style={{ color: "var(--accent-gold)" }}
        >
          {children}
        </Link>
      );
    }
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="underline underline-offset-4 transition-colors"
        style={{ color: "var(--accent-gold)" }}
        {...rest}
      >
        {children}
      </a>
    );
  },
  hr: () => (
    <hr
      className="my-12 border-0 h-px"
      style={{ backgroundColor: "var(--border-subtle)" }}
    />
  ),
  strong: (props: HTMLAttributes<HTMLElement>) => (
    <strong
      className="font-medium"
      style={{ color: "var(--text-primary)" }}
      {...props}
    />
  ),
};
