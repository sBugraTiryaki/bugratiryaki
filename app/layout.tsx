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
        <script src="https://verify.bugratiryaki.com/b/uyLiCaWvsN7v6efwVlfOTSWbAnTG1f8p" async />
        {/* Test cookies for KolayOnay cookie blocking */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Simulated cookies for testing KolayOnay cookie blocking
              (function() {
                // Helper function to set cookie
                function setCookie(name, value, days, category) {
                  var expires = "";
                  if (days) {
                    var date = new Date();
                    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                    expires = "; expires=" + date.toUTCString();
                  }
                  document.cookie = name + "=" + (value || "") + expires + "; path=/; SameSite=Lax";
                  console.log("[KolayOnay Test] Set " + category + " cookie: " + name);
                }

                // ANALYTICS COOKIES (should be blocked if analytics consent not given)
                // Google Analytics style cookies
                setCookie("_ga", "GA1.1." + Math.floor(Math.random() * 1000000000) + "." + Math.floor(Date.now() / 1000), 730, "analytics");
                setCookie("_ga_TEST123", "GS1.1." + Math.floor(Date.now() / 1000) + ".1.1." + Math.floor(Date.now() / 1000) + ".0.0.0", 730, "analytics");
                setCookie("_gid", "GA1.1." + Math.floor(Math.random() * 1000000000), 1, "analytics");
                setCookie("_gat_gtag_TEST", "1", 1, "analytics");

                // Hotjar style cookie
                setCookie("_hjSessionUser_123456", JSON.stringify({id: Math.random().toString(36).substr(2, 9)}), 365, "analytics");
                setCookie("_hjSession_123456", JSON.stringify({id: Math.random().toString(36).substr(2, 9)}), 1, "analytics");

                // Microsoft Clarity style cookie
                setCookie("_clck", Math.random().toString(36).substr(2, 9), 365, "analytics");
                setCookie("_clsk", Math.random().toString(36).substr(2, 9), 1, "analytics");

                // MARKETING COOKIES (should be blocked if marketing consent not given)
                // Facebook Pixel style cookies
                setCookie("_fbp", "fb.1." + Date.now() + "." + Math.floor(Math.random() * 1000000000), 90, "marketing");
                setCookie("_fbc", "fb.1." + Date.now() + ".test_click_id", 90, "marketing");

                // Google Ads style cookies
                setCookie("_gcl_au", "1.1." + Math.floor(Math.random() * 1000000000), 90, "marketing");
                setCookie("_gcl_aw", "GCL." + Date.now() + ".test_gclid", 90, "marketing");

                // LinkedIn style cookie
                setCookie("li_sugr", Math.random().toString(36).substr(2, 9), 90, "marketing");
                setCookie("bcookie", "v=2&" + Math.random().toString(36).substr(2, 9), 730, "marketing");

                // TikTok style cookie
                setCookie("_ttp", Math.random().toString(36).substr(2, 16), 390, "marketing");

                // Twitter/X style cookie
                setCookie("muc_ads", "v=2&" + Math.random().toString(36).substr(2, 9), 730, "marketing");

                console.log("[KolayOnay Test] All test cookies have been set. Check Application > Cookies in DevTools.");
              })();
            `,
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
