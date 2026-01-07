import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-16 bg-white"
    >
      <div className="max-w-6xl mx-auto px-6 py-20 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900">
              Buğra Tiryaki
            </h1>
            <p className="text-xl text-neutral-600 font-medium">
              Software Developer & AI Builder
            </p>
            <p className="text-neutral-500 text-lg leading-relaxed">
              I build web applications, internal systems, and AI-driven tools.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-neutral-900 text-white text-sm font-medium rounded-lg hover:bg-neutral-800 transition-colors"
            >
              Get in Touch
            </a>
          </div>

          {/* Right Visual - Profile Photo */}
          <div className="flex justify-center md:justify-end">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/profile-large.jpg"
                alt="Buğra Tiryaki - Software Developer"
                width={320}
                height={320}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
