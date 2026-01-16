"use client";

import { MessageCircle, Mail } from "lucide-react";

// WhatsApp configuration
const WHATSAPP_NUMBER = "905511793712";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hi Bugra, I'm interested in learning more about your vibe coding mentorship."
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 md:py-32"
      style={{ backgroundColor: "var(--luxury-black)" }}
    >
      <div className="max-w-3xl mx-auto px-6 text-center">
        {/* Section Label */}
        <span
          className="text-xs tracking-[0.2em] uppercase font-medium"
          style={{ color: "var(--accent-gold)" }}
        >
          Get Started
        </span>

        {/* Main Headline */}
        <h2
          className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl lg:text-5xl font-light mt-4 mb-6"
          style={{ color: "var(--text-primary)" }}
        >
          Let&apos;s talk.
        </h2>

        {/* Description */}
        <div
          className="space-y-4 text-lg mb-12"
          style={{ color: "var(--text-secondary)" }}
        >
          <p>Book a free 15-minute call.</p>
          <p>
            We&apos;ll discuss your goals, your timeline, and whether this
            mentorship is the right fit for you.
          </p>
          <p
            className="text-sm"
            style={{ color: "var(--text-muted)" }}
          >
            No sales pitch. Just a conversation.
          </p>
        </div>

        {/* CTA Button */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 md:gap-3 w-full sm:w-auto px-6 py-4 md:px-10 md:py-5 text-base md:text-lg font-medium tracking-wide transition-all duration-300 gold-glow"
          style={{
            backgroundColor: "var(--accent-gold)",
            color: "var(--luxury-black)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "var(--accent-gold-light)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "var(--accent-gold)";
          }}
        >
          <MessageCircle className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
          <span>Book a Call on WhatsApp</span>
        </a>

        {/* Divider */}
        <div className="flex items-center gap-4 my-12">
          <div
            className="flex-1 h-px"
            style={{ backgroundColor: "var(--border-subtle)" }}
          />
          <span
            className="text-sm"
            style={{ color: "var(--text-muted)" }}
          >
            or
          </span>
          <div
            className="flex-1 h-px"
            style={{ backgroundColor: "var(--border-subtle)" }}
          />
        </div>

        {/* Email Alternative */}
        <a
          href="mailto:sbugratiryaki@gmail.com"
          className="inline-flex items-center gap-2 text-sm transition-colors duration-300"
          style={{ color: "var(--text-muted)" }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "var(--accent-gold)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "var(--text-muted)";
          }}
        >
          <Mail className="w-4 h-4" aria-hidden="true" />
          sbugratiryaki@gmail.com
        </a>
      </div>
    </section>
  );
}
