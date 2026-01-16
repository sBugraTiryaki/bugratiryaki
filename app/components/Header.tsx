"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#exclusivity", label: "About" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-md" : ""
      }`}
      style={{
        backgroundColor: scrolled
          ? "rgba(10, 10, 10, 0.8)"
          : "transparent",
        borderBottom: scrolled
          ? "1px solid var(--border-subtle)"
          : "1px solid transparent",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="font-serif text-xl tracking-[0.15em] uppercase font-light"
          style={{ color: "var(--text-primary)" }}
          aria-label="Bugra Tiryaki - Go to top"
        >
          Bugra Tiryaki
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm tracking-wide transition-colors duration-300"
              style={{ color: "var(--text-secondary)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--accent-gold)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--text-secondary)";
              }}
            >
              {link.label}
            </a>
          ))}

          {/* CTA Button */}
          <a
            href="#contact"
            className="px-5 py-2 text-sm tracking-wide border transition-all duration-300"
            style={{
              borderColor: "var(--accent-gold)",
              color: "var(--accent-gold)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "var(--accent-gold)";
              e.currentTarget.style.color = "var(--luxury-black)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "var(--accent-gold)";
            }}
          >
            Book a Call
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 transition-colors duration-300"
          style={{ color: "var(--text-secondary)" }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className="md:hidden border-t"
          style={{
            backgroundColor: "var(--luxury-black)",
            borderColor: "var(--border-subtle)",
          }}
        >
          <nav className="flex flex-col px-6 py-6 gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm tracking-wide"
                style={{ color: "var(--text-secondary)" }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-5 py-3 text-sm tracking-wide border transition-all duration-300"
              style={{
                borderColor: "var(--accent-gold)",
                color: "var(--accent-gold)",
              }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Book a Call
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
