import type { Metadata } from "next";
import { Geist, Geist_Mono, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bugratiryaki.com"),
  title: "Bugra Tiryaki | Vibe Coding Mentor",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "48x48", type: "image/png" },
      { url: "/icon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    other: [
      {
        rel: "mask-icon",
        url: "/icon.svg",
        color: "#c9a962",
      },
    ],
  },
  manifest: "/site.webmanifest",
  description:
    "Learn to build premium websites with AI-powered vibe coding. Limited 1-on-1 mentorship for ambitious builders ready to start earning.",
  keywords: [
    "Bugra Tiryaki",
    "Bugra Tiryaki",
    "vibe coding",
    "vibe coding mentor",
    "AI website builder",
    "coding mentor",
    "premium web development",
    "learn to code with AI",
    "website mentorship",
    "build websites with AI",
    "Cursor AI",
    "Claude AI coding",
  ],
  authors: [{ name: "Bugra Tiryaki", url: "https://bugratiryaki.com" }],
  creator: "Bugra Tiryaki",
  openGraph: {
    title: "Bugra Tiryaki | Vibe Coding Mentor",
    description:
      "Learn to build premium websites with AI-powered vibe coding. Limited 1-on-1 mentorship for ambitious builders.",
    url: "https://bugratiryaki.com",
    siteName: "Bugra Tiryaki",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bugra Tiryaki | Vibe Coding Mentor",
    description:
      "Learn to build premium websites with AI-powered vibe coding. Limited 1-on-1 mentorship.",
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
  alternateName: ["Bugra Tiryaki", "Bugra", "Bugra"],
  givenName: "Bugra",
  familyName: "Tiryaki",
  url: "https://bugratiryaki.com",
  image: "https://bugratiryaki.com/profile-large.jpg",
  jobTitle: "Vibe Coding Mentor",
  description:
    "Teaching ambitious people to build premium websites using AI-powered vibe coding. Limited 1-on-1 mentorship.",
  sameAs: [
    "https://x.com/sbugratiryaki",
    "https://github.com/sBugraTiryaki",
    "https://www.linkedin.com/in/bugratiryaki",
  ],
  knowsAbout: [
    "Vibe Coding",
    "AI-Powered Development",
    "Next.js",
    "React",
    "Premium Web Design",
    "Cursor AI",
    "Claude AI",
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
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Bugra Tiryaki - Vibe Coding Mentor",
  alternateName: "Bugra Tiryaki",
  url: "https://bugratiryaki.com",
  inLanguage: "en",
  author: {
    "@type": "Person",
    name: "Bugra Tiryaki",
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
        {/* Google Analytics 4 */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-1HPSZY96YC"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-1HPSZY96YC');
            `,
          }}
        />

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
        className={`${geistSans.variable} ${geistMono.variable} ${cormorant.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
