import React from "react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Documentation — Oxify Labs",
  description: "How to work with Oxify Labs — from first contact to handoff.",
}

const sections = [
  {
    id: "getting-started",
    label: "Getting Started",
    items: [
      { id: "overview",       title: "Studio Overview" },
      { id: "how-we-work",    title: "How We Work" },
      { id: "first-contact",  title: "First Contact" },
    ],
  },
  {
    id: "engagements",
    label: "Engagements",
    items: [
      { id: "sprint",         title: "Sprint Engagements" },
      { id: "studio-partner", title: "Studio Partner" },
      { id: "foundation",     title: "Foundation Builds" },
    ],
  },
  {
    id: "process",
    label: "Our Process",
    items: [
      { id: "scope",          title: "01 — Scope" },
      { id: "design",         title: "02 — Design" },
      { id: "build",          title: "03 — Build" },
      { id: "ship",           title: "04 — Ship" },
    ],
  },
  {
    id: "handoff",
    label: "Handoff",
    items: [
      { id: "deliverables",   title: "What You Receive" },
      { id: "ownership",      title: "Source Ownership" },
      { id: "documentation",  title: "Living Docs" },
    ],
  },
]

export default function DocsPage() {
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

      <div className="max-w-6xl mx-auto px-6 md:px-12 py-24 flex flex-col lg:flex-row gap-16">
        {/* Sidebar */}
        <aside className="lg:w-56 shrink-0">
          <div className="lg:sticky lg:top-28 space-y-8">
            {sections.map(sec => (
              <div key={sec.id}>
                <p className="text-[10px] tracking-widest text-black/30 uppercase mb-3">{sec.label}</p>
                <ul className="space-y-1">
                  {sec.items.map(item => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className="block text-sm text-black/45 hover:text-black/80 transition-colors py-1"
                      >
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 min-w-0">
          <div className="mb-16">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] tracking-widest font-sans text-black/40 bg-black/4">
              DOCS
            </span>
            <h1
              className="mt-5 text-4xl md:text-5xl font-light tracking-tight leading-[1.05]"
              style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
            >
              Documentation
            </h1>
            <p className="mt-4 text-sm text-black/40 max-w-lg leading-relaxed">
              Everything you need to know about working with Oxify Labs — from scoping your first
              engagement to owning the final codebase.
            </p>
          </div>

          <div className="space-y-20">

            {/* Getting Started */}
            <DocSection id="overview" title="Studio Overview">
              <p>
                Oxify Labs is a technology studio that partners with founders and product teams to
                build production-grade software. We are not an agency that hands off mockups —
                we build the systems behind the product.
              </p>
              <p className="mt-4">
                Every engagement involves the full stack: product thinking, system architecture,
                engineering execution, and documentation. We are an embedded partner, not a vendor.
              </p>
              <CalloutBox>
                We keep a deliberately small client roster so every team gets genuine attention,
                not ticket-queue support.
              </CalloutBox>
            </DocSection>

            <DocSection id="how-we-work" title="How We Work">
              <p>
                We work in tight feedback loops. Weekly check-ins, async updates, and shared
                project tooling keep you informed without slowing us down. Every decision is
                documented; every system is tested before it ships.
              </p>
              <PropList items={[
                { key: "Communication", value: "Async-first via Notion + WhatsApp/Slack. Weekly video calls for direction." },
                { key: "Delivery cadence", value: "2-week sprint cycles with demos at each milestone." },
                { key: "Documentation", value: "Living docs updated continuously, not as an afterthought." },
                { key: "Transparency", value: "You see the same project board we do, always." },
              ]} />
            </DocSection>

            <DocSection id="first-contact" title="First Contact">
              <p>Getting started is simple. No lengthy intake forms.</p>
              <ol className="mt-6 space-y-4 list-none pl-0 counter-reset-[step]">
                {[
                  { n: "01", step: "Reach out", desc: "Email or WhatsApp with a brief description of what you're building and your timeline." },
                  { n: "02", step: "Discovery call", desc: "A 30-minute call to understand the problem, constraints, and goals. No pitch — just conversation." },
                  { n: "03", step: "Scoping", desc: "We return within 48 hours with a clear scope, timeline, and investment." },
                  { n: "04", step: "Kickoff", desc: "SOW signed, access shared, and we start building." },
                ].map(item => (
                  <li key={item.n} className="flex gap-4">
                    <span className="font-pixel text-[11px] text-black/20 tracking-widest mt-0.5 shrink-0">{item.n}</span>
                    <div>
                      <span className="text-sm font-light text-black/70">{item.step} — </span>
                      <span className="text-sm text-black/45">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ol>
            </DocSection>

            <Divider />

            {/* Engagements */}
            <DocSection id="sprint" title="Sprint Engagements">
              <p>
                A focused, project-based engagement with a fixed scope and timeline. Best for
                founders who know what they need and want it done right, fast.
              </p>
              <PropList items={[
                { key: "Duration", value: "4–8 weeks" },
                { key: "Pricing", value: "Project-based, agreed upfront" },
                { key: "Scope", value: "Single product or feature surface" },
                { key: "Deliverables", value: "Full source, deployed system, living docs" },
              ]} />
            </DocSection>

            <DocSection id="studio-partner" title="Studio Partner">
              <p>
                An ongoing retainer for teams that need a real engineering partner. We become an
                extension of your team — attending planning sessions, making architectural
                decisions, and building continuously.
              </p>
              <PropList items={[
                { key: "Commitment", value: "Monthly retainer with dedicated capacity" },
                { key: "Cadence", value: "Continuous builds, monthly roadmap sessions" },
                { key: "Response time", value: "Priority — same or next business day" },
                { key: "Best for", value: "Growing products that need consistent engineering velocity" },
              ]} />
              <CalloutBox>
                Studio Partner slots are limited. Reach out to check current availability.
              </CalloutBox>
            </DocSection>

            <DocSection id="foundation" title="Foundation Builds">
              <p>
                For complex, infrastructure-heavy systems that need to be designed and built
                from the ground up. Think multi-service architectures, compliance-critical systems,
                or platforms expected to serve millions.
              </p>
              <PropList items={[
                { key: "Pricing", value: "Custom — scoped per project" },
                { key: "Timeline", value: "3–12+ months depending on scope" },
                { key: "Team model", value: "Embedded partnership with dedicated leads" },
                { key: "Includes", value: "Architecture review, compliance readiness, SLA-backed delivery" },
              ]} />
            </DocSection>

            <Divider />

            {/* Process */}
            {[
              {
                id: "scope",
                title: "01 — Scope",
                body: "Before a single line of code is written, we align on objectives, constraints, and edge cases. A clear scope prevents scope creep and ensures every decision serves the product goal. This phase typically takes 48 hours.",
                items: ["Problem definition", "Success criteria", "Technical constraints", "Risk identification", "Timeline and milestones"],
              },
              {
                id: "design",
                title: "02 — Design",
                body: "System architecture before system code. We design every data flow, interface boundary, and integration point upfront. This is where we prevent the expensive surprises that show up at scale.",
                items: ["System architecture diagram", "Data model design", "API contract definition", "Technology selection rationale", "Infrastructure planning"],
              },
              {
                id: "build",
                title: "03 — Build",
                body: "Iterative, observable, tested. Real code with real feedback loops. No throwaway work at any stage. We build in 2-week cycles with demos at each milestone.",
                items: ["TypeScript / Python — always typed", "Test coverage from day one", "CI/CD pipeline configured", "Observability built in", "Weekly progress demos"],
              },
              {
                id: "ship",
                title: "04 — Ship",
                body: "Production deployment, fully monitored and documented. We hand over completely — you own it, run it, and extend it. No lock-in.",
                items: ["Production deployment", "Monitoring and alerting configured", "Full documentation", "Access credentials transferred", "30-day post-launch support window"],
              },
            ].map(s => (
              <DocSection key={s.id} id={s.id} title={s.title}>
                <p>{s.body}</p>
                <ul className="mt-6 space-y-2 list-none pl-0">
                  {s.items.map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm text-black/50">
                      <span className="mt-2 w-1 h-1 rounded-full bg-black/25 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </DocSection>
            ))}

            <Divider />

            {/* Handoff */}
            <DocSection id="deliverables" title="What You Receive">
              <p>Every engagement ends with a complete handoff package:</p>
              <ul className="mt-6 space-y-2 list-none pl-0">
                {[
                  "Full source code in a repository you own",
                  "Deployed, running production environment",
                  "Architecture documentation with diagrams",
                  "API documentation (where applicable)",
                  "Environment setup guide",
                  "Runbook for common operational tasks",
                  "Test suite with coverage reports",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-black/50">
                    <span className="mt-2 w-1 h-1 rounded-full bg-black/25 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </DocSection>

            <DocSection id="ownership" title="Source Ownership">
              <p>
                You own everything we build for you. No licensing fees, no lock-in, no clauses
                that prevent you from modifying or redistributing your own product. Upon final
                payment, all intellectual property transfers to you completely.
              </p>
              <CalloutBox>
                We retain ownership of pre-existing tools and frameworks — but you get a
                perpetual, royalty-free license to use them within your product.
              </CalloutBox>
            </DocSection>

            <DocSection id="documentation" title="Living Docs">
              <p>
                Documentation at Oxify Labs is not an afterthought. Every system ships with
                documentation that is maintained throughout the engagement — not written in a
                rush during the final week.
              </p>
              <PropList items={[
                { key: "Format", value: "Notion workspace shared with your team during the engagement" },
                { key: "Content", value: "Architecture decisions, API specs, runbooks, and onboarding guides" },
                { key: "Maintenance", value: "Updated continuously as the system evolves" },
                { key: "Ownership", value: "Fully exported and transferred at handoff" },
              ]} />
            </DocSection>

          </div>
        </main>
      </div>

      <Footer />
    </div>
  )
}

function DocSection({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-28">
      <h2
        className="text-xl font-light text-black/80 mb-5"
        style={{ fontFamily: '"IBM Plex Sans", sans-serif' }}
      >
        {title}
      </h2>
      <div className="text-sm text-black/55 leading-relaxed">{children}</div>
    </section>
  )
}

function CalloutBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-6 rounded-xl border border-black/7 bg-white/50 px-5 py-4 text-sm text-black/50 leading-relaxed">
      {children}
    </div>
  )
}

function PropList({ items }: { items: { key: string; value: string }[] }) {
  return (
    <dl className="mt-6 space-y-3">
      {items.map(item => (
        <div key={item.key} className="flex gap-4 text-sm">
          <dt className="w-36 shrink-0 text-black/35 font-light">{item.key}</dt>
          <dd className="text-black/55">{item.value}</dd>
        </div>
      ))}
    </dl>
  )
}

function Divider() {
  return <hr className="border-black/6" />
}

function Footer() {
  return (
    <footer className="mt-24 py-10 px-6 md:px-12 border-t border-black/6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
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
