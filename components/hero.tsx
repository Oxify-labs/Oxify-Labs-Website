"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { BlurText } from "./blur-text";

export function Hero() {
  return (
    <section className="relative w-full flex items-center justify-center min-h-screen bg-black overflow-hidden pt-20">
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="absolute inset-0 bg-noise mix-blend-overlay" />
      
      {/* Glowing orb behind text */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-white/10 blur-[120px] rounded-full pointer-events-none" 
      />

      <div className="relative z-10 flex flex-col items-start justify-center px-6 md:px-12 w-full max-w-7xl mx-auto">
        <motion.h1 
          className="text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] xl:text-[11rem] font-heading font-bold text-white uppercase leading-[0.85] tracking-tighter mb-8 md:mb-12 text-left w-full"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          WE BUILD<br />
          HIGH-<br />
          PERFORMANCE<br />
          DIGITAL SYSTEMS
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
          className="text-lg md:text-2xl text-white/80 font-body font-light max-w-3xl mb-12 md:mb-16 leading-relaxed"
        >
          A multi-disciplinary technology studio specializing in advanced engineering, AI/ML, and Web3 solutions for enterprise and high-growth startups.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.6, type: "spring", stiffness: 100 }}
        >
          <a href="#contact" className="inline-block group relative">
            <div className="absolute inset-0 bg-white/20 blur-xl group-hover:bg-white/40 transition-all duration-500 rounded-none pointer-events-none" />
            <button className="relative bg-white text-black px-8 md:px-12 py-4 md:py-6 flex items-center justify-center gap-3 font-heading font-bold uppercase tracking-widest text-lg md:text-xl transition-all duration-300 hover:scale-[1.02]">
              Start A Project 
              <ArrowUpRight className="w-6 h-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
