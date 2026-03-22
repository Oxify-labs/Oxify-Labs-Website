import Link from "next/link";

const SECTIONS = [
  {
    id: "overview",
    title: "Overview",
    content: [
      `Oxify Labs ("we", "our", or "us") is a software systems and architecture studio based in Kolkata, India. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage our services.`,
      `By accessing our website or initiating a project with us, you acknowledge that you have read and understood this policy. If you do not agree with its terms, please discontinue use of our services.`,
    ],
  },
  {
    id: "information-we-collect",
    title: "Information We Collect",
    subsections: [
      {
        heading: "Information You Provide",
        items: [
          "Name and professional title when you reach out via email or our contact form",
          "Email address and phone number for project communication",
          "Company name, project description, and technical requirements shared during onboarding",
          "Billing and payment information processed through secure third-party providers",
          "Any files, documents, or data you share with us in the course of a project engagement",
        ],
      },
      {
        heading: "Information Collected Automatically",
        items: [
          "Browser type, operating system, and device information",
          "IP address and approximate geographic location",
          "Pages visited, time spent, and navigation patterns on our website",
          "Referring URLs and search terms that led you to our site",
        ],
      },
      {
        heading: "Information from Third Parties",
        items: [
          "Professional profile information from LinkedIn if you connect with us there",
          "Calendar and scheduling data when you book a call via Calendly",
          "Analytics data from providers we use to understand site performance",
        ],
      },
    ],
  },
  {
    id: "how-we-use",
    title: "How We Use Your Information",
    items: [
      "To respond to inquiries, evaluate project fit, and initiate engagement",
      "To deliver, manage, and improve the services outlined in your contract or statement of work",
      "To send project updates, invoices, and other communications directly related to your engagement",
      "To maintain records of our work, proposals, and delivery history",
      "To analyse website traffic and improve the user experience on our site",
      "To comply with applicable legal obligations, court orders, or regulatory requirements",
      "To protect the rights, property, or safety of Oxify Labs, our clients, or the public",
    ],
  },
  {
    id: "data-sharing",
    title: "Data Sharing & Disclosure",
    content: [
      "We do not sell, rent, or trade your personal information to third parties. We may share information only in the following circumstances:",
    ],
    subsections: [
      {
        heading: "Service Providers",
        items: [
          "Cloud infrastructure providers (e.g. AWS, Vercel, Neon) who host systems we build or operate",
          "Payment processors for billing and invoice management",
          "Communication tools such as email, Slack, or Notion used during active engagements",
          "Analytics platforms that help us understand website usage in aggregate",
        ],
      },
      {
        heading: "Legal Requirements",
        items: [
          "When required by applicable law, court order, or governmental authority",
          "To enforce our Terms of Service or other agreements",
          "To protect the safety, rights, or property of Oxify Labs or others",
        ],
      },
      {
        heading: "Business Transfers",
        items: [
          "In the event of a merger, acquisition, or sale of assets, client data may be transferred as part of that transaction. We will notify affected parties before any such transfer.",
        ],
      },
    ],
  },
  {
    id: "data-security",
    title: "Data Security",
    content: [
      "We take the security of your information seriously. We implement industry-standard technical and organisational measures to protect your data from unauthorised access, disclosure, alteration, or destruction.",
      "These measures include encrypted data transmission (TLS/HTTPS), access controls and role-based permissions on internal systems, secure credential management practices, and regular review of security protocols.",
      "However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee absolute security.",
    ],
  },
  {
    id: "cookies",
    title: "Cookies & Tracking",
    content: [
      "Our website may use cookies and similar tracking technologies to enhance your experience and analyse site usage. Cookies are small text files stored on your device.",
    ],
    items: [
      "Essential cookies that enable core website functionality",
      "Analytics cookies that help us understand how visitors interact with our site (e.g. page views, session duration)",
      "Preference cookies that remember your settings across visits",
    ],
    footer: "You may disable cookies through your browser settings. Note that doing so may affect the functionality of certain parts of our website.",
  },
  {
    id: "retention",
    title: "Data Retention",
    content: [
      "We retain personal information for as long as necessary to fulfil the purposes outlined in this policy, maintain our contractual obligations, and comply with legal requirements.",
      "Project-related data is typically retained for a minimum of 5 years following project completion for audit, support, and legal compliance purposes. You may request deletion of your personal data at any time, subject to legal retention obligations.",
    ],
  },
  {
    id: "your-rights",
    title: "Your Rights",
    content: [
      "Depending on your jurisdiction, you may have certain rights regarding your personal information, including:",
    ],
    items: [
      "The right to access the personal data we hold about you",
      "The right to request correction of inaccurate or incomplete data",
      "The right to request deletion of your personal data ('right to be forgotten')",
      "The right to object to or restrict certain types of processing",
      "The right to data portability — receiving your data in a structured, machine-readable format",
      "The right to withdraw consent at any time where processing is based on consent",
    ],
    footer: "To exercise any of these rights, please contact us at oxifyhq@gmail.com. We will respond within 30 days.",
  },
  {
    id: "third-party",
    title: "Third-Party Links",
    content: [
      "Our website may contain links to third-party websites, tools, or services (such as GitHub, Calendly, or LinkedIn). This Privacy Policy does not apply to those external services. We encourage you to review the privacy policies of any third-party sites you visit.",
    ],
  },
  {
    id: "children",
    title: "Children's Privacy",
    content: [
      "Our services are not directed to individuals under the age of 16. We do not knowingly collect personal information from children. If you believe a child has provided us with personal data, please contact us immediately and we will take steps to remove that information.",
    ],
  },
  {
    id: "changes",
    title: "Changes to This Policy",
    content: [
      "We may update this Privacy Policy from time to time to reflect changes in our practices, technology, or legal requirements. When we make material changes, we will update the 'Effective Date' at the top of this page.",
      "Continued use of our website or services after any changes constitutes your acceptance of the updated policy.",
    ],
  },
  {
    id: "contact",
    title: "Contact Us",
    content: [
      "If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:",
    ],
    contact: {
      company: "Oxify Labs",
      location: "Kolkata, West Bengal, India",
      email: "oxifyhq@gmail.com",
    },
  },
];

export default function PrivacyPage() {
  return (
    <main className="relative z-10 min-h-screen pt-32 pb-24 px-6 md:px-10 lg:px-16">
      <div className="mx-auto max-w-4xl">

        {/* Header */}
        <div className="mb-12">
          <p className="text-xs uppercase tracking-[0.2em] text-white/40 mb-4 font-mono">Legal</p>
          <h1 className="font-heading italic text-5xl md:text-7xl leading-[0.9] text-white mb-6">
            Privacy Policy
          </h1>
          <p className="text-white/50 text-sm font-mono">Effective Date: March 2026 &nbsp;·&nbsp; Oxify Labs, Kolkata</p>
        </div>

        {/* Table of Contents */}
        <div className="liquid-glass rounded-2xl p-6 mb-10">
          <p className="text-xs uppercase tracking-[0.2em] text-white/40 mb-4 font-mono">Contents</p>
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {SECTIONS.map((section, i) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="text-sm text-white/60 hover:text-white transition-colors flex items-center gap-2"
                >
                  <span className="font-mono text-white/30 text-xs w-5">{String(i + 1).padStart(2, "0")}</span>
                  {section.title}
                </a>
              </li>
            ))}
          </ol>
        </div>

        {/* Sections */}
        <div className="space-y-6">
          {SECTIONS.map((section, i) => (
            <section
              key={section.id}
              id={section.id}
              className="liquid-glass rounded-2xl p-7 md:p-9 scroll-mt-32"
            >
              <div className="flex items-start gap-4 mb-6">
                <span className="font-mono text-white/20 text-xs mt-1 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                <h2 className="font-heading italic text-2xl md:text-3xl text-white leading-tight">{section.title}</h2>
              </div>

              <div className="pl-8 space-y-4">
                {section.content?.map((para, j) => (
                  <p key={j} className="text-white/65 text-sm leading-relaxed font-body">{para}</p>
                ))}

                {section.subsections?.map((sub) => (
                  <div key={sub.heading} className="pt-2">
                    <p className="text-white/90 text-sm font-medium mb-2">{sub.heading}</p>
                    <ul className="space-y-1.5">
                      {sub.items.map((item, k) => (
                        <li key={k} className="flex items-start gap-2.5 text-white/60 text-sm leading-relaxed">
                          <span className="mt-2 w-1 h-1 rounded-full bg-white/30 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                {section.items && !section.subsections && (
                  <ul className="space-y-1.5 pt-1">
                    {section.items.map((item, k) => (
                      <li key={k} className="flex items-start gap-2.5 text-white/60 text-sm leading-relaxed">
                        <span className="mt-2 w-1 h-1 rounded-full bg-white/30 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                {section.footer && (
                  <p className="text-white/50 text-sm leading-relaxed font-body pt-2 border-t border-white/5">{section.footer}</p>
                )}

                {section.contact && (
                  <div className="liquid-glass-strong rounded-xl p-5 space-y-1.5 mt-2">
                    <p className="text-white font-medium text-sm">{section.contact.company}</p>
                    <p className="text-white/50 text-sm">{section.contact.location}</p>
                    <a href={`mailto:${section.contact.email}`} className="text-white/70 hover:text-white transition-colors text-sm">
                      {section.contact.email}
                    </a>
                  </div>
                )}
              </div>
            </section>
          ))}
        </div>

        {/* Footer Nav */}
        <div className="flex flex-wrap items-center gap-4 mt-10 pt-8 border-t border-white/10">
          <Link href="/" className="liquid-glass-strong rounded-full px-5 py-2.5 text-sm font-medium text-white">
            Back to Home
          </Link>
          <Link href="/terms" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
            Terms of Service
          </Link>
          <Link href="/contact" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  );
}
