export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 mb-8">
          Contact
        </h2>
        <div className="max-w-xl">
          <p className="text-neutral-600 mb-8">
            Have a project in mind or want to collaborate? Feel free to reach
            out.
          </p>
          <form
            action="https://formsubmit.co/sbugratiryaki@gmail.com"
            method="POST"
            className="space-y-6"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_subject"
              value="New message from portfolio website"
            />
            <div>
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-lg text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-lg text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all"
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Your message..."
                required
                rows={5}
                className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-lg text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all resize-none"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center px-6 py-3 bg-neutral-900 text-white text-sm font-medium rounded-lg hover:bg-neutral-800 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
