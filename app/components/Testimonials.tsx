"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

// Placeholder testimonials - replace with real ones when available
const testimonials = [
  {
    quote:
      "The mentorship exceeded every expectation. I went from zero coding knowledge to deploying premium client sites in weeks.",
    author: "Sarah M.",
    role: "Founder",
  },
  {
    quote:
      "Bugra's approach to vibe coding is unlike anything else. You're not just learning to code—you're learning to think.",
    author: "Alex K.",
    role: "Designer turned Developer",
  },
  {
    quote:
      "Worth every penny. The ROI was immediate. My first client project covered the entire mentorship cost.",
    author: "Maria L.",
    role: "Freelancer",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section
      id="testimonials"
      className="py-24 md:py-32"
      style={{ backgroundColor: "var(--luxury-charcoal)" }}
    >
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Label */}
        <div className="text-center mb-16">
          <span
            className="text-xs tracking-[0.2em] uppercase font-medium"
            style={{ color: "var(--accent-gold)" }}
          >
            Success Stories
          </span>
          <h2
            className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl lg:text-5xl font-light mt-4"
            style={{ color: "var(--text-primary)" }}
          >
            What They Say
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="relative">
          {/* Decorative Quote */}
          <Quote
            className="absolute -top-4 left-0 md:-left-4 w-12 h-12 md:w-16 md:h-16 opacity-10"
            style={{ color: "var(--accent-gold)" }}
            aria-hidden="true"
          />

          <div className="text-center py-8 md:py-12 px-2 md:px-0">
            <p
              className="font-[family-name:var(--font-cormorant)] text-lg sm:text-xl md:text-2xl lg:text-3xl font-light italic leading-relaxed mb-6 md:mb-8"
              style={{ color: "var(--text-primary)" }}
            >
              &ldquo;{testimonials[currentIndex].quote}&rdquo;
            </p>

            <div>
              <p
                className="font-medium"
                style={{ color: "var(--text-primary)" }}
              >
                {testimonials[currentIndex].author}
              </p>
              <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                {testimonials[currentIndex].role}
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-8 mt-8">
            <button
              onClick={goToPrevious}
              className="p-2 rounded-full border-luxury transition-all duration-300 hover:border-hover"
              style={{ color: "var(--text-secondary)" }}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" aria-hidden="true" />
            </button>

            {/* Dots */}
            <div className="flex gap-1">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className="p-2 flex items-center justify-center"
                  aria-label={`Go to testimonial ${index + 1}`}
                >
                  <span
                    className={`block h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex ? "w-6" : "w-2"
                    }`}
                    style={{
                      backgroundColor:
                        index === currentIndex
                          ? "var(--accent-gold)"
                          : "var(--text-muted)",
                    }}
                  />
                </button>
              ))}
            </div>

            <button
              onClick={goToNext}
              className="p-2 rounded-full border-luxury transition-all duration-300 hover:border-hover"
              style={{ color: "var(--text-secondary)" }}
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
