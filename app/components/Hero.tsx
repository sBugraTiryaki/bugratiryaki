"use client";

import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center relative"
      style={{ backgroundColor: "var(--luxury-black)" }}
    >
      {/* Main Content */}
      <div className="text-center px-6 max-w-4xl">
        <h1
          className="font-[family-name:var(--font-cormorant)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light leading-tight animate-fade-in-up"
          style={{ color: "var(--text-primary)" }}
        >
          I teach ambitious people
          <br />
          to build businesses
          <br />
          <span style={{ color: "var(--accent-gold)" }}>with vibe coding</span>
        </h1>

        <p
          className="mt-8 text-lg md:text-xl font-light tracking-wide animate-fade-in-up animation-delay-300"
          style={{ color: "var(--text-secondary)" }}
        >
          One premium mentorship at a time.
        </p>

        <a
          href="#contact"
          className="inline-flex items-center gap-2 mt-8 md:mt-12 px-6 py-3 md:px-8 md:py-4 text-sm md:text-base font-medium tracking-wide animate-fade-in-up animation-delay-600"
          style={{
            backgroundColor: "var(--accent-gold)",
            color: "var(--luxury-black)",
          }}
        >
          Book a Call
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in animation-delay-800">
        <span
          className="text-xs tracking-widest uppercase"
          style={{ color: "var(--text-muted)" }}
        >
          Scroll
        </span>
        <ChevronDown
          className="w-5 h-5 animate-float"
          style={{ color: "var(--text-muted)" }}
        />
      </div>
    </section>
  );
}
