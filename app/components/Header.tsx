"use client";

import { useState } from "react";
import { Linkedin, Github, Twitter, Mail, Menu, X } from "lucide-react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

const socialLinks = [
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
  {
    href: "https://x.com/sbugratiryaki",
    icon: Twitter,
    label: "X",
  },
  {
    href: "mailto:sbugratiryaki@gmail.com",
    icon: Mail,
    label: "Email",
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="text-lg font-semibold tracking-tight text-neutral-900"
        >
          BT
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Social Links */}
        <div className="hidden md:flex items-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel={
                link.href.startsWith("mailto")
                  ? undefined
                  : "noopener noreferrer"
              }
              className="text-neutral-500 hover:text-neutral-900 transition-colors"
              aria-label={link.label}
            >
              <link.icon size={18} strokeWidth={1.5} />
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-neutral-600"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-neutral-100">
          <nav className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center gap-4 pt-4 border-t border-neutral-100">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={
                    link.href.startsWith("mailto")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  className="text-neutral-500 hover:text-neutral-900 transition-colors"
                  aria-label={link.label}
                >
                  <link.icon size={18} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
