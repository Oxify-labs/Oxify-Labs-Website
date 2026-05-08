import React from "react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service — Oxify Labs",
  description: "Terms governing your use of Oxify Labs services.",
}

export default function TermsPage() {
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
            Terms of Service
          </h1>
          <p className="mt-4 text-sm text-black/40">Last updated: May 2025</p>
        </div>

        {/* Content */}
        <div className="space-y-12 text-sm text-black/60 leading-relaxed">

          <Section title="1. Acceptance of Terms">
            By accessing the Oxify Labs website or engaging our services, you agree to these Terms
            of Service. If you do not agree, please do not use our services. These terms may be
            updated from time to time; continued use constitutes acceptance.
          </Section>

          <Section title="2. Services">
            Oxify Labs provides product engineering, systems design, and technology consulting
            services. The specific scope, deliverables, timeline, and pricing for any engagement
            are governed by a separate Statement of Work (SOW) or engagement agreement signed
            by both parties.
          </Section>

          <Section title="3. Client Responsibilities">
            <p>As a client, you agree to:</p>
            <ul className="mt-4 space-y-2 list-none pl-0">
              {[
                "Provide accurate and complete information required to perform the services.",
                "Designate a point of contact authorized to make decisions on your behalf.",
                "Respond to requests for feedback or approvals within agreed timelines.",
                "Ensure you have the rights to any assets, data, or materials you provide to us.",
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-2 w-1 h-1 rounded-full bg-black/25 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </Section>

          <Section title="4. Intellectual Property">
            Upon full payment of all fees, you receive full ownership of all custom deliverables
            created for your engagement. Oxify Labs retains ownership of any pre-existing
            frameworks, libraries, or tools used in the delivery, for which you receive a
            perpetual, royalty-free license. We may reference the engagement in our portfolio
            unless you request confidentiality in writing.
          </Section>

          <Section title="5. Payment Terms">
            Payment schedules are defined in each engagement agreement. Oxify Labs reserves the
            right to pause or terminate services if invoices remain unpaid beyond the agreed
            grace period. All fees are non-refundable unless otherwise stated in the SOW.
          </Section>

          <Section title="6. Confidentiality">
            Both parties agree to keep confidential any non-public business information shared
            during the engagement. This obligation survives termination of the engagement for
            a period of three years. We take client confidentiality seriously and do not
            disclose project details without explicit consent.
          </Section>

          <Section title="7. Limitation of Liability">
            To the maximum extent permitted by law, Oxify Labs shall not be liable for any
            indirect, incidental, or consequential damages arising from use of our services
            or deliverables. Our total liability shall not exceed the total fees paid for
            the relevant engagement in the twelve months preceding the claim.
          </Section>

          <Section title="8. Warranties">
            We warrant that our services will be performed with reasonable care and skill.
            We do not warrant that deliverables will be error-free or that their operation
            will be uninterrupted. Any specific performance guarantees must be agreed in
            writing in the engagement SOW.
          </Section>

          <Section title="9. Termination">
            Either party may terminate an engagement with 30 days written notice. Upon
            termination, the client pays for all work completed to date. Oxify Labs will
            deliver all completed work product and transfer access credentials within 14
            days of final payment.
          </Section>

          <Section title="10. Governing Law">
            These Terms are governed by the laws of India. Any disputes shall first be
            attempted to be resolved through good-faith negotiation. If unresolved,
            disputes shall be subject to the jurisdiction of courts in Kolkata, West Bengal.
          </Section>

          <Section title="11. Contact">
            <p>
              Questions about these Terms? Reach us at{" "}
              <a href="mailto:oxifyhq@gmail.com" className="text-black/80 hover:text-black underline underline-offset-2">
                oxifyhq@gmail.com
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
