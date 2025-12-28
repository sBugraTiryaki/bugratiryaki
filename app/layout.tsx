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
  title: "Buğra Tiryaki | Bugra Tiryaki - Software Developer & AI Builder",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-48.png", sizes: "48x48", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    other: [
      {
        rel: "mask-icon",
        url: "/icon.svg",
        color: "#18181B",
      },
    ],
  },
  manifest: "/site.webmanifest",
  description:
    "Buğra Tiryaki (Bugra Tiryaki) - Software developer focused on Laravel, Next.js and AI-powered tools. Building web applications, internal systems, and automation workflows.",
  keywords: [
    "Buğra Tiryaki",
    "Bugra Tiryaki",
    "Buğra",
    "Bugra",
    "Tiryaki",
    "software developer",
    "yazılım geliştirici",
    "web developer",
    "Laravel",
    "Next.js",
    "React",
    "AI",
    "full-stack developer",
    "Turkey",
    "Türkiye",
  ],
  authors: [{ name: "Buğra Tiryaki", url: "https://bugratiryaki.com" }],
  creator: "Buğra Tiryaki",
  openGraph: {
    title: "Buğra Tiryaki | Bugra Tiryaki - Software Developer & AI Builder",
    description:
      "Buğra Tiryaki (Bugra Tiryaki) - Software developer focused on Laravel, Next.js and AI-powered tools.",
    url: "https://bugratiryaki.com",
    siteName: "Buğra Tiryaki",
    locale: "en_US",
    alternateLocale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buğra Tiryaki | Bugra Tiryaki - Software Developer & AI Builder",
    description:
      "Buğra Tiryaki (Bugra Tiryaki) - Software developer focused on Laravel, Next.js and AI-powered tools.",
    creator: "@sbugratiryaki",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://bugratiryaki.com",
    languages: {
      "tr-TR": "https://bugratiryaki.com",
      "en-US": "https://bugratiryaki.com",
    },
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Buğra Tiryaki",
  alternateName: ["Bugra Tiryaki", "Buğra", "Bugra"],
  givenName: "Buğra",
  familyName: "Tiryaki",
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
  knowsLanguage: [
    {
      "@type": "Language",
      name: "Turkish",
      alternateName: "tr",
    },
    {
      "@type": "Language",
      name: "English",
      alternateName: "en",
    },
  ],
  description:
    "Buğra Tiryaki (Bugra Tiryaki) - Software developer focused on Laravel, Next.js and AI-powered tools. Building web applications, internal systems, and automation workflows.",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Buğra Tiryaki",
  alternateName: "Bugra Tiryaki",
  url: "https://bugratiryaki.com",
  inLanguage: ["tr", "en"],
  author: {
    "@type": "Person",
    name: "Buğra Tiryaki",
    alternateName: "Bugra Tiryaki",
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
