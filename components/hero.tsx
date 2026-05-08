"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative w-full flex items-center justify-center min-h-[90vh] bg-black overflow-hidden pt-20">
      <div className="relative z-10 flex flex-col items-start justify-center px-6 md:px-12 w-full max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] xl:text-[9rem] font-heading font-bold text-white uppercase leading-[0.85] tracking-tighter mb-8 md:mb-12 max-w-[1400px]"
        >
          We Build High-Performance Digital Systems
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-2xl text-white/80 font-body font-light max-w-3xl mb-12 md:mb-16 leading-relaxed"
        >
          A multi-disciplinary technology studio specializing in advanced engineering, AI/ML, and Web3 solutions for enterprise and high-growth startups.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <a href="#contact" className="inline-block group">
            <button className="bg-white text-black px-8 md:px-12 py-4 md:py-6 flex items-center justify-center gap-3 font-heading font-bold uppercase tracking-widest text-lg md:text-xl transition-all duration-300 hover:bg-zinc-200">
              Start A Project 
              <ArrowUpRight className="w-6 h-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
