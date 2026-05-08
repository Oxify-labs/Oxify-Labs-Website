import React from "react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy — Oxify Labs",
  description: "How Oxify Labs collects, uses, and protects your information.",
}

export default function PrivacyPage() {
  return (
    <div className="bg-[#F5F4F0] text-[#111] min-h-screen font-sans antialiased">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-black/6 bg-[#F5F4F0]/90 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
          <Link href="/" className="font-pixel text-xs tracking-[0.25em] text-black/60 hover:text-black/90 transition-colors">
            OXIFY LABS
          </Link>
          <Link href="/" className="text-xs text-black/40 hover:text-black/70 transition-colors tracking-widest">
            ← Back
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 md:px-12 py-24">
        {/* Header */}
        <div className="mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] tracking-widest font-sans text-black/40 bg-black/4">
            LEGAL
          </span>
          <h1
            className="mt-5 text-4xl md:text-5xl font-light tracking-tight leading-[1.05]"
            style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
          >
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-black/40">Last updated: May 2025</p>
        </div>

        {/* Content */}
        <div className="space-y-12 text-sm text-black/60 leading-relaxed">

          <Section title="1. Who We Are">
            Oxify Labs is a technology studio that designs and builds software systems, SaaS products,
            and digital infrastructure. We are the data controller for information collected through
            our website at oxify.labs and any engagement with our studio.
          </Section>

          <Section title="2. Information We Collect">
            <p>We collect only what we need to operate and improve our services:</p>
            <ul className="mt-4 space-y-2 list-none pl-0">
              {[
                "Contact details you provide (name, email, company) when you reach out via our contact form, email, or WhatsApp.",
                "Usage data such as pages visited, referral source, and browser type — collected via privacy-respecting analytics.",
                "Communication records when you correspond with us regarding an engagement.",
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-2 w-1 h-1 rounded-full bg-black/25 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </Section>

          <Section title="3. How We Use Your Information">
            <p>We use your information to:</p>
            <ul className="mt-4 space-y-2 list-none pl-0">
              {[
                "Respond to inquiries and scope potential engagements.",
                "Deliver and manage our services to clients.",
                "Improve our website and understand how visitors interact with it.",
                "Send occasional updates relevant to active projects (no marketing without consent).",
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-2 w-1 h-1 rounded-full bg-black/25 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </Section>

          <Section title="4. Data Sharing">
            We do not sell, rent, or trade your personal information. We may share data with trusted
            service providers (e.g., email platforms, analytics tools) solely to operate our business,
            and only under strict confidentiality agreements. We may disclose information if required
            by law or to protect our legal rights.
          </Section>

          <Section title="5. Data Retention">
            We retain your data for as long as necessary to fulfill the purposes described in this
            policy, or as required by law. Client project records are retained for a minimum of
            five years for legal and accounting purposes. You may request deletion at any time.
          </Section>

          <Section title="6. Your Rights">
            <p>Depending on your jurisdiction, you may have the right to:</p>
            <ul className="mt-4 space-y-2 list-none pl-0">
              {[
                "Access the personal data we hold about you.",
                "Request correction of inaccurate data.",
                "Request deletion of your data.",
                "Object to or restrict how we process your data.",
                "Withdraw consent where processing is based on consent.",
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-2 w-1 h-1 rounded-full bg-black/25 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4">
              To exercise any of these rights, email us at{" "}
              <a href="mailto:oxifyhq@gmail.com" className="text-black/80 hover:text-black underline underline-offset-2">
                oxifyhq@gmail.com
              </a>.
            </p>
          </Section>

          <Section title="7. Cookies & Tracking">
            Our website uses minimal, privacy-respecting analytics. We do not use advertising
            cookies or third-party tracking pixels. You can disable cookies in your browser
            settings at any time without affecting your ability to use the site.
          </Section>

          <Section title="8. Security">
            We apply industry-standard measures to protect your data, including encrypted
            connections (TLS), access controls, and regular security reviews. No transmission
            over the internet is 100% secure, but we take all reasonable precautions.
          </Section>

          <Section title="9. Changes to This Policy">
            We may update this Privacy Policy from time to time. The date at the top of this
            page reflects the most recent revision. Continued use of our site after changes
            constitutes acceptance of the updated policy.
          </Section>

          <Section title="10. Contact">
            <p>
              Questions about this policy? Reach us at{" "}
              <a href="mailto:oxifyhq@gmail.com" className="text-black/80 hover:text-black underline underline-offset-2">
                oxifyhq@gmail.com
              </a>{" "}
              or via{" "}
              <a href="https://wa.me/919332193076" target="_blank" rel="noopener noreferrer" className="text-black/80 hover:text-black underline underline-offset-2">
                WhatsApp
              </a>.
            </p>
          </Section>
        </div>
      </main>

      <Footer />
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border-t border-black/6 pt-10">
      <h2
        className="text-lg font-light text-black/80 mb-4"
        style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
      >
        {title}
      </h2>
      <div className="text-sm text-black/55 leading-relaxed">{children}</div>
    </div>
  )
}

function Footer() {
  return (
    <footer className="mt-24 py-10 px-6 md:px-12 border-t border-black/6">
      <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <span className="text-xs text-black/20">© 2025 Oxify Labs. All rights reserved.</span>
        <div className="flex items-center gap-6">
          {[
            { label: "Privacy", href: "/privacy" },
            { label: "Terms",   href: "/terms" },
            { label: "Docs",    href: "/docs" },
          ].map(l => (
            <a key={l.label} href={l.href} className="text-xs text-black/25 hover:text-black/55 transition-colors tracking-widest">
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
