"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const SOCIALS = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/oxify-labs/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/oxify_labs/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
  {
    name: "X",
    href: "http://x.com/OxifyLabs",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.259 5.631zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

export function CtaFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <section className="relative w-full flex flex-col justify-between pt-24 pb-0 overflow-hidden bg-transparent border-t border-white/5 mt-8">

      {/* Main CTA Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 max-w-5xl mx-auto flex-1 w-full">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl lg:text-7xl font-heading italic text-white mb-8"
        >
          Your next scalable system starts here.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-white/60 font-body font-light mb-12 max-w-2xl"
        >
          Book an architecture review. See how we build for the long term.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-6"
        >
          <a href="https://calendly.com/sohomchatterjee07-oxifylabs/let-s-build-something-great" target="_blank" rel="noreferrer noopener">
            <button className="liquid-glass-strong px-8 py-4 rounded-full flex items-center gap-2 text-white font-medium transition-transform hover:scale-105">
              Book a Call <ArrowUpRight className="w-4 h-4" />
            </button>
          </a>
          <a
            href="https://www.linkedin.com/company/oxify-labs/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <button className="bg-white text-black px-8 py-4 rounded-full font-medium transition-transform hover:scale-105 flex items-center gap-2">
              Contact Us <ArrowUpRight className="w-4 h-4" />
            </button>
          </a>
        </motion.div>
      </div>

      {/* Footer Details */}
      <div className="relative z-10 w-full px-8 md:px-16 py-8 mt-20 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-white/40 text-xs font-mono">
          © {currentYear} Oxify Labs, Kolkata
        </div>

        {/* Socials */}
        <div className="flex items-center gap-4">
          {SOCIALS.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={social.name}
              className="text-white/40 hover:text-white transition-colors"
            >
              {social.icon}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-6 text-white/40 text-xs font-mono">
          <Link href="/privacy" className="hover:text-white transition-colors">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-white transition-colors">
            Terms
          </Link>
          <Link href="/contact" className="hover:text-white transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </section>
  );
}
