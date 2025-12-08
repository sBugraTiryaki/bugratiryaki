import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bugratiryaki.com"),
  title: "Bugra Tiryaki | Software Developer & AI Builder",
  description:
    "Bugra Tiryaki - Software developer focused on Laravel, Next.js and AI-powered tools. Building web applications, internal systems, and automation workflows.",
  keywords: [
    "Bugra Tiryaki",
    "Buğra Tiryaki",
    "software developer",
    "web developer",
    "Laravel",
    "Next.js",
    "React",
    "AI",
    "full-stack developer",
    "Turkey",
  ],
  authors: [{ name: "Bugra Tiryaki" }],
  creator: "Bugra Tiryaki",
  openGraph: {
    title: "Bugra Tiryaki | Software Developer & AI Builder",
    description:
      "Software developer focused on Laravel, Next.js and AI-powered tools.",
    url: "https://bugratiryaki.com",
    siteName: "Bugra Tiryaki",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bugra Tiryaki | Software Developer & AI Builder",
    description:
      "Software developer focused on Laravel, Next.js and AI-powered tools.",
    creator: "@sbugratiryaki",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://bugratiryaki.com",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Bugra Tiryaki",
  alternateName: "Buğra Tiryaki",
  url: "https://bugratiryaki.com",
  image: "https://bugratiryaki.com/profile.jpg",
  jobTitle: "Software Developer",
  worksFor: {
    "@type": "Organization",
    name: "Self-employed",
  },
  sameAs: [
    "https://x.com/sbugratiryaki",
    "https://github.com/sBugraTiryaki",
    "https://www.linkedin.com/in/bugratiryaki",
  ],
  knowsAbout: [
    "Laravel",
    "Next.js",
    "React",
    "TypeScript",
    "AI",
    "Web Development",
    "Full-Stack Development",
  ],
  nationality: {
    "@type": "Country",
    name: "Turkey",
  },
  description:
    "Software developer focused on Laravel, Next.js and AI-powered tools. Building web applications, internal systems, and automation workflows.",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Bugra Tiryaki",
  url: "https://bugratiryaki.com",
  author: {
    "@type": "Person",
    name: "Bugra Tiryaki",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
