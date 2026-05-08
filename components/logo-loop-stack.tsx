"use client";

import { motion } from "framer-motion";

const clients = ["STELLAR", "CELLO", "HACKQUEST", "TRIPLE C PRODUCTIONS"];

export function LogoLoopStack() {
  return (
    <section className="relative w-full border-y border-white/20 py-16 bg-black overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 mb-12 flex justify-center"
      >
        <span className="font-heading text-lg md:text-xl font-bold uppercase tracking-widest text-white/50">
          Trusted By
        </span>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-24 opacity-80">
          {clients.map((client, idx) => (
            <motion.div
              key={client}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
              className="text-2xl md:text-4xl font-heading font-bold tracking-tighter text-white uppercase hover:text-white/70 transition-colors"
            >
              {client}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
