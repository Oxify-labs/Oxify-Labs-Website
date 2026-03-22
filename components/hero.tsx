"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight, Hash } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { BlurText } from "./blur-text";
import { ArrowUpRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative w-full flex items-start justify-center overflow-hidden">
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6 text-center pt-44 md:pt-52 pb-28 max-w-5xl mx-auto">
        {/* Heading */}
        <BlurText
          text="Where systems architecture meets long-term compounding."
          className="text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.85] font-heading italic text-white mb-8"
          delay={0.1}
        />

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-lg md:text-xl text-white/60 font-body font-light max-w-2xl mb-12"
        >
          We build resilient software systems, SaaS products, and MVPs. Build fast, but scale responsibly.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center gap-6"
        >
          <a href="mailto:sohomchatterjee07@gmail.com?subject=System%20Architecture%20Review">
            <button className="liquid-glass-strong px-8 py-4 rounded-full flex items-center gap-2 text-white font-medium transition-transform hover:scale-105">
              Discuss your system <ArrowUpRight className="w-4 h-4" />
            </button>
          </a>
          <a
            href="#stack"
            className="text-white/70 hover:text-white font-medium transition-colors"
          >
            View our architecture
          </a>
        </motion.div>
      </div>
    </section>
  );
};
