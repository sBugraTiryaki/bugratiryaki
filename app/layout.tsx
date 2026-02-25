import type { Metadata } from "next";
import { Geist, Geist_Mono, Cormorant_Garamond } from "next/font/google";
import Script from "next/script";
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
  weight: ["300"],
  display: "swap",
  preload: true,
  adjustFontFallback: true,
  fallback: ["Georgia", "Times New Roman", "serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bugratiryaki.com"),
  title: {
    default: "Bugra Tiryaki | Vibe Coding Mentor",
    template: "%s | Bugra Tiryaki",
  },
  icons: {
    // Google prefers PNG format, 48x48 minimum - list PNG first for priority
    icon: [
      { url: "/icon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/icon-96.png", sizes: "96x96", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
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
    "Bugra Tiryaki - Vibe Coding Mentor. I teach ambitious people to build premium websites with AI. Book a 1-on-1 mentorship call today.",
  keywords: [
    "Bugra Tiryaki",
    "entrepreneur",
    "vibe coding",
    "vibe coding mentor",
  ],
  authors: [{ name: "Bugra Tiryaki", url: "https://bugratiryaki.com" }],
  creator: "Bugra Tiryaki",
  openGraph: {
    title: "Bugra Tiryaki | Vibe Coding Mentor",
    description:
      "Bugra Tiryaki - Vibe Coding Mentor. I teach ambitious people to build premium websites with AI. Book a 1-on-1 mentorship call today.",
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
    "https://www.tiktok.com/@sbugratiryaki",
    "https://www.instagram.com/sbugratiryaki",
    "https://t.me/sbugratiryaki",
    "https://www.youtube.com/@sbugratiryaki",
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
        {/* KolayOnay Verification */}
        <Script
          id="kolayonay-verify"
          src="https://verify.kolayonay.com.tr/s/qcSqqS5V6TpZLcqtdPVOtR7qMz4chkgO"
          strategy="afterInteractive"
        />
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PF6734H9');`,
          }}
        />
        {/* Leadsy AI */}
        <Script
          id="vtag-ai-js"
          src="https://r2.leadsy.ai/tag.js"
          data-pid="Md4foOpKHKWjShpm"
          data-version="062024"
          strategy="afterInteractive"
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
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PF6734H9"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
