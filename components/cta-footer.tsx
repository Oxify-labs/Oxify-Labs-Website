"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function CtaFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <section className="relative w-full flex flex-col justify-between pt-24 pb-0 overflow-hidden bg-transparent border-t border-white/5">

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
          <a href="mailto:sohomchatterjee07@gmail.com?subject=Architecture%20Review">
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
      <div className="relative z-10 w-full px-6 py-8 mt-auto border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-white/40 text-xs font-mono">
          © {currentYear} Oxify Labs, Kolkata
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
