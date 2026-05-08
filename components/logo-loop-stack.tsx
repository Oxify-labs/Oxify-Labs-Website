"use client";

import { motion } from "framer-motion";

const clients = ["STELLAR", "CELLO", "HACKQUEST", "TRIPLE C PRODUCTIONS", "STELLAR", "CELLO", "HACKQUEST", "TRIPLE C PRODUCTIONS"];

export function LogoLoopStack() {
  return (
    <section className="relative w-full border-y border-white/10 py-16 md:py-24 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-noise mix-blend-overlay opacity-30 pointer-events-none" />
      
      {/* Side gradients for smooth marquee fade */}
      <div className="absolute left-0 top-0 bottom-0 w-24 md:w-64 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 md:w-64 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 mb-16 flex justify-center"
      >
        <span className="font-heading text-sm md:text-base font-bold uppercase tracking-[0.3em] text-white/40">
          Trusted By Industry Leaders
        </span>
      </motion.div>

      <div className="relative flex overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex whitespace-nowrap items-center opacity-70 hover:opacity-100 transition-opacity duration-500"
        >
          {clients.map((client, idx) => (
            <div
              key={`${client}-${idx}`}
              className="px-12 md:px-24 text-4xl md:text-6xl lg:text-8xl font-heading font-bold tracking-tighter text-transparent"
              style={{ WebkitTextStroke: "1px rgba(255,255,255,0.8)" }}
            >
              {client}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
