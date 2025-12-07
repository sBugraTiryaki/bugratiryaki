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
  title: "Bugra Tiryaki | Software Developer & AI Builder",
  description:
    "I build web applications, internal systems, and AI-driven tools. Focused on Laravel, Next.js, and modern development practices.",
  keywords: [
    "software developer",
    "web developer",
    "Laravel",
    "Next.js",
    "React",
    "AI",
    "full-stack",
  ],
  authors: [{ name: "Bugra Tiryaki" }],
  openGraph: {
    title: "Bugra Tiryaki | Software Developer & AI Builder",
    description:
      "I build web applications, internal systems, and AI-driven tools.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
