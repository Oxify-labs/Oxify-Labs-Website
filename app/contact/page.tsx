import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="relative z-10 min-h-screen pt-32 pb-20 px-6 md:px-10 lg:px-16">
      <section className="mx-auto max-w-4xl liquid-glass rounded-2xl p-8 md:p-10">
        <p className="text-xs uppercase tracking-[0.2em] text-white/50 mb-4">Contact</p>
        <h1 className="font-heading italic text-4xl md:text-6xl leading-[0.95] text-white mb-6">
          Start Your Project
        </h1>
        <p className="font-body text-white/70 leading-relaxed mb-8">
          Tell us what you are building. We will reply with architecture direction, delivery
          roadmap, and a practical execution plan.
        </p>

        <div className="grid gap-4 mb-8">
          <a
            href="mailto:sohomchatterjee07@gmail.com?subject=Project%20Inquiry"
            className="liquid-glass-strong rounded-xl px-5 py-4 text-white font-medium"
          >
            sohomchatterjee07@gmail.com
          </a>
          <a
            href="mailto:kundurohit53@gmail.com?subject=Project%20Inquiry"
            className="liquid-glass rounded-xl px-5 py-4 text-white/80 font-medium"
          >
            kundurohit53@gmail.com
          </a>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <Link href="/" className="liquid-glass-strong rounded-full px-5 py-2.5 text-sm font-medium text-white">
            Back to Home
          </Link>
          <Link href="/teams" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
            Meet the Team
          </Link>
        </div>
      </section>
    </main>
  );
}
