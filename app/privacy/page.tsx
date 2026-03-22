import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="relative z-10 min-h-screen pt-32 pb-20 px-6 md:px-10 lg:px-16">
      <section className="mx-auto max-w-4xl liquid-glass rounded-2xl p-8 md:p-10">
        <p className="text-xs uppercase tracking-[0.2em] text-white/50 mb-4">Policy</p>
        <h1 className="font-heading italic text-4xl md:text-6xl leading-[0.95] text-white mb-6">
          Privacy Policy
        </h1>
        <p className="font-body text-white/70 leading-relaxed mb-6">
          Oxify Labs values privacy and collects only information required to deliver engineering
          services, respond to inquiries, and maintain project communication.
        </p>
        <p className="font-body text-white/70 leading-relaxed mb-6">
          We do not sell personal data. Project information remains confidential and is shared only
          with authorized team members and trusted infrastructure providers.
        </p>
        <p className="font-body text-white/70 leading-relaxed mb-8">
          For privacy requests, contact us via email and we will respond promptly.
        </p>

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
