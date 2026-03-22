import Link from "next/link";

const SECTIONS = [
  {
    id: "acceptance",
    title: "Acceptance of Terms",
    content: [
      `These Terms of Service ("Terms") govern your access to and use of the website and services provided by Oxify Labs ("we", "our", or "us"), a software systems and architecture studio based in Kolkata, India.`,
      `By visiting our website, submitting a project inquiry, or entering into a contract or Statement of Work with us, you confirm that you have read, understood, and agree to be bound by these Terms. If you do not agree, please do not use our services.`,
      `These Terms apply alongside any signed proposal, contract, or Statement of Work ("SOW") governing a specific engagement. In the event of conflict, the signed contract or SOW takes precedence.`,
    ],
  },
  {
    id: "services",
    title: "Services Description",
    content: [
      "Oxify Labs provides professional software engineering and architecture services, including but not limited to:",
    ],
    items: [
      "Systems architecture design and technical advisory",
      "Full-stack web application development",
      "SaaS product development and MVP delivery",
      "AI/ML integration and applied research",
      "Cloud infrastructure design and deployment",
      "Technical due diligence and code audits",
      "Ongoing development retainers and team augmentation",
    ],
    footer: "The specific scope, deliverables, timeline, and fees for each engagement are defined in a separate Statement of Work or project proposal signed by both parties.",
  },
  {
    id: "engagement",
    title: "Project Engagements",
    subsections: [
      {
        heading: "Proposals & Statements of Work",
        items: [
          "All project work is governed by a written proposal or SOW agreed upon before work begins",
          "Proposals are valid for 14 days from the date of issue unless otherwise stated",
          "Work does not commence until a SOW is signed and any required deposit is received",
          "Scope changes must be agreed upon in writing and may result in adjusted timelines and fees",
        ],
      },
      {
        heading: "Client Responsibilities",
        items: [
          "Providing timely access to necessary systems, credentials, and stakeholders",
          "Supplying clear requirements, feedback, and approvals within agreed timelines",
          "Ensuring you have the rights to any third-party assets, APIs, or data you provide to us",
          "Designating a primary point of contact for project communication",
          "Meeting payment obligations as defined in the SOW or proposal",
        ],
      },
      {
        heading: "Delivery & Acceptance",
        items: [
          "Deliverables are considered accepted if no written objection is raised within 7 days of delivery",
          "Revisions and amendments outside the agreed scope are subject to additional fees",
          "Final delivery is conditional on full payment of outstanding invoices",
        ],
      },
    ],
  },
  {
    id: "payment",
    title: "Payment Terms",
    content: [
      "All fees are defined in the applicable proposal or SOW. Unless otherwise agreed:",
    ],
    items: [
      "A deposit of 20% of the total project fee is due before work commences",
      "The remaining balance is due upon final delivery or as defined in the payment schedule",
      "Invoices are payable within 14 days of issue",
      "Late payments accrue interest at 1.5% per month or the maximum rate permitted by law",
      "Oxify Labs reserves the right to pause work on overdue accounts without liability",
      "All fees are exclusive of applicable taxes unless stated otherwise",
      "Refunds are not provided for completed work or for project cancellations after work has commenced",
    ],
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    subsections: [
      {
        heading: "Client-Owned Deliverables",
        items: [
          "Upon receipt of full and final payment, Oxify Labs assigns to the client all rights, title, and interest in the custom code and deliverables created specifically for that project",
          "This assignment is exclusive and irrevocable once payment is complete",
          "The client is responsible for ensuring any third-party assets or content provided to us are properly licensed",
        ],
      },
      {
        heading: "Oxify Labs Retained Rights",
        items: [
          "We retain all rights to internal frameworks, libraries, methodologies, tooling, and know-how developed independently of any client engagement",
          "We retain rights to any pre-existing intellectual property incorporated into deliverables, which may be licensed to the client on a non-exclusive basis",
          "We may use general concepts, patterns, and learnings from engagements to improve our services, provided no confidential client information is disclosed",
        ],
      },
      {
        heading: "Portfolio & Attribution",
        items: [
          "Unless the client requests confidentiality in writing, Oxify Labs may reference the engagement in our portfolio and marketing materials",
          "We will not disclose proprietary or confidential project details without explicit written consent",
        ],
      },
    ],
  },
  {
    id: "confidentiality",
    title: "Confidentiality",
    content: [
      "Both parties agree to keep confidential any non-public information disclosed during an engagement, including but not limited to business plans, technical architecture, trade secrets, client lists, and financial data.",
      "Confidentiality obligations remain in effect for a period of 3 years following the conclusion of an engagement, unless a separate Non-Disclosure Agreement specifies otherwise.",
      "Confidential information may be disclosed where required by law, court order, or regulatory authority, provided the disclosing party gives reasonable notice to the other party where legally permitted.",
    ],
  },
  {
    id: "warranties",
    title: "Warranties & Representations",
    subsections: [
      {
        heading: "Oxify Labs Warrants That",
        items: [
          "Services will be performed with reasonable skill, care, and professionalism",
          "Deliverables will substantially conform to the agreed specifications at the time of delivery",
          "We have the right to enter into the agreement and perform the services",
        ],
      },
      {
        heading: "Oxify Labs Does Not Warrant",
        items: [
          "That deliverables will be error-free or operate without interruption in all environments",
          "That any revenue, growth, or business outcome will result from our work",
          "Compatibility with third-party systems not specified in the SOW",
          "Continued availability of any third-party APIs, platforms, or services integrated into deliverables",
        ],
      },
    ],
  },
  {
    id: "liability",
    title: "Limitation of Liability",
    content: [
      "To the maximum extent permitted by applicable law, Oxify Labs shall not be liable for any indirect, incidental, special, consequential, or punitive damages — including but not limited to loss of revenue, loss of data, loss of goodwill, business interruption, or loss of anticipated savings — even if we have been advised of the possibility of such damages.",
      "Our total cumulative liability to you for any claims arising from or related to an engagement shall not exceed the total fees paid by you to Oxify Labs in the three months preceding the claim.",
      "These limitations apply regardless of the legal theory under which a claim is brought, including contract, tort, negligence, strict liability, or otherwise.",
    ],
  },
  {
    id: "termination",
    title: "Termination",
    subsections: [
      {
        heading: "Termination by Client",
        items: [
          "You may terminate an engagement by providing written notice",
          "You remain liable for all fees for work completed up to the date of termination",
          "Any deposit paid is non-refundable unless termination is due to a material breach by Oxify Labs",
          "Oxify Labs will deliver all completed work and documentation upon receipt of outstanding payment",
        ],
      },
      {
        heading: "Termination by Oxify Labs",
        items: [
          "We may terminate an engagement with 14 days' written notice if payment obligations are not met",
          "We may terminate immediately if the client engages in unlawful activity, violates these Terms, or requests work that violates applicable law or ethical standards",
          "Upon termination, Oxify Labs will deliver work completed to that point, and any prepaid fees for undelivered work will be refunded on a pro-rata basis",
        ],
      },
    ],
  },
  {
    id: "independent-contractor",
    title: "Independent Contractor",
    content: [
      "Oxify Labs operates as an independent contractor. Nothing in these Terms creates an employment, partnership, joint venture, agency, or franchise relationship between the client and Oxify Labs or any of its team members.",
      "We are responsible for all taxes, insurance, and statutory obligations relating to our own business and personnel.",
    ],
  },
  {
    id: "governing-law",
    title: "Governing Law & Disputes",
    content: [
      "These Terms and any disputes arising from them shall be governed by and construed in accordance with the laws of India, without regard to conflict of law principles.",
      "Any disputes shall first be attempted to be resolved through good-faith negotiation. If unresolved within 30 days, disputes shall be submitted to binding arbitration in Kolkata, West Bengal, under the Arbitration and Conciliation Act, 1996.",
      "Notwithstanding the above, either party may seek urgent injunctive or equitable relief in any court of competent jurisdiction to protect intellectual property or confidential information.",
    ],
  },
  {
    id: "changes",
    title: "Changes to These Terms",
    content: [
      "We may update these Terms from time to time. When we do, we will revise the effective date at the top of this page. For active client engagements, material changes will be communicated directly.",
      "Your continued use of our website or services after any changes constitutes your acceptance of the updated Terms.",
    ],
  },
  {
    id: "contact",
    title: "Contact",
    content: [
      "For questions, clarifications, or concerns about these Terms, please contact us before beginning an engagement.",
    ],
    contact: {
      company: "Oxify Labs",
      location: "Kolkata, West Bengal, India",
      email: "oxifyhq@gmail.com",
    },
  },
];

export default function TermsPage() {
  return (
    <main className="relative z-10 min-h-screen pt-32 pb-24 px-6 md:px-10 lg:px-16">
      <div className="mx-auto max-w-4xl">

        {/* Header */}
        <div className="mb-12">
          <p className="text-xs uppercase tracking-[0.2em] text-white/40 mb-4 font-mono">Legal</p>
          <h1 className="font-heading italic text-5xl md:text-7xl leading-[0.9] text-white mb-6">
            Terms of Service
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
          <Link href="/privacy" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <Link href="/contact" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  );
}
