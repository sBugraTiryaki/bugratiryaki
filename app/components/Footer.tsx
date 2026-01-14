"use client";

import { Linkedin, Github, Twitter } from "lucide-react";

const socialLinks = [
  {
    href: "https://x.com/sbugratiryaki",
    icon: Twitter,
    label: "X",
  },
  {
    href: "https://www.linkedin.com/in/bugratiryaki/",
    icon: Linkedin,
    label: "LinkedIn",
  },
  {
    href: "https://github.com/sBugraTiryaki",
    icon: Github,
    label: "GitHub",
  },
];

export default function Footer() {
  return (
    <footer
      className="py-12 border-t"
      style={{
        backgroundColor: "var(--luxury-black)",
        borderColor: "var(--border-subtle)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center gap-6">
          {/* Logo */}
          <a
            href="#"
            className="font-[family-name:var(--font-cormorant)] text-lg tracking-[0.15em] uppercase font-light"
            style={{ color: "var(--text-primary)" }}
          >
            Bugra Tiryaki
          </a>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-300"
                style={{ color: "var(--text-muted)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color =
                    "var(--accent-gold)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color =
                    "var(--text-muted)";
                }}
                aria-label={link.label}
              >
                <link.icon size={20} strokeWidth={1.5} />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p
            className="text-xs tracking-wide"
            style={{ color: "var(--text-muted)" }}
          >
            &copy; {new Date().getFullYear()} Bugra Tiryaki. Crafted with vibe
            coding.
          </p>
        </div>
      </div>
    </footer>
  );
}
