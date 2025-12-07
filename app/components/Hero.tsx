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
              Bugra Tiryaki
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

          {/* Right Visual */}
          <div className="flex justify-center md:justify-end">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl bg-gradient-to-br from-neutral-100 via-neutral-200 to-neutral-300 flex items-center justify-center">
              <svg
                viewBox="0 0 200 200"
                className="w-40 h-40 md:w-48 md:h-48 text-neutral-400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="100"
                  cy="100"
                  r="80"
                  stroke="currentColor"
                  strokeWidth="1"
                  opacity="0.5"
                />
                <circle
                  cx="100"
                  cy="100"
                  r="60"
                  stroke="currentColor"
                  strokeWidth="1"
                  opacity="0.4"
                />
                <circle
                  cx="100"
                  cy="100"
                  r="40"
                  stroke="currentColor"
                  strokeWidth="1"
                  opacity="0.3"
                />
                <circle
                  cx="100"
                  cy="100"
                  r="20"
                  fill="currentColor"
                  opacity="0.2"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
