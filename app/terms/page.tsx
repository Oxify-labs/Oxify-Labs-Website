import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="relative z-10 min-h-screen pt-32 pb-20 px-6 md:px-10 lg:px-16">
      <section className="mx-auto max-w-4xl liquid-glass rounded-2xl p-8 md:p-10">
        <p className="text-xs uppercase tracking-[0.2em] text-white/50 mb-4">Legal</p>
        <h1 className="font-heading italic text-4xl md:text-6xl leading-[0.95] text-white mb-6">
          Terms of Service
        </h1>
        <p className="font-body text-white/70 leading-relaxed mb-6">
          By engaging Oxify Labs, you agree that all timelines, deliverables, and payment terms are
          defined in the signed proposal or statement of work.
        </p>
        <p className="font-body text-white/70 leading-relaxed mb-6">
          All intellectual property ownership and usage rights are governed by your contract. Unless
          otherwise agreed, Oxify Labs retains rights to internal tooling and reusable frameworks.
        </p>
        <p className="font-body text-white/70 leading-relaxed mb-8">
          For clarifications, please contact our team before project initiation.
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <Link href="/" className="liquid-glass-strong rounded-full px-5 py-2.5 text-sm font-medium text-white">
            Back to Home
          </Link>
          <Link href="/contact" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}
