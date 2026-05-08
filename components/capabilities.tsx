"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const capabilities = [
  {
    title: "AI/ML Development",
    description: "Custom Large Language Models, agentic workflows, and predictive analytics designed for compounding leverage. We build intelligent systems that scale your operations autonomously."
  },
  {
    title: "Smart Contract & Blockchain",
    description: "Secure, scalable infrastructure on Stellar and EVM chains. From tokenomics design to high-throughput financial systems with sub-second settlement."
  },
  {
    title: "End-to-End Product Design",
    description: "High-contrast, brutalist UI/UX engineering with conversion-optimized flows. We build products that command attention and drive measurable growth."
  }
];

export function Capabilities() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full py-24 md:py-40 bg-black border-b border-white/10 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 blur-[150px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/4" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <h2 className="text-5xl md:text-7xl lg:text-[6rem] font-heading font-bold uppercase tracking-tighter leading-none">
            Capabilities
          </h2>
          <p className="text-white/50 font-body text-lg md:text-xl max-w-sm">
            Engineering precision meets brutalist aesthetics.
          </p>
        </motion.div>

        <div className="flex flex-col border-t border-white/20">
          {capabilities.map((cap, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="border-b border-white/20 group"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-8 md:py-12 flex items-center justify-between text-left"
              >
                <div className="flex items-center gap-8 md:gap-16">
                  <span className="font-mono text-white/30 text-xl md:text-3xl">0{index + 1}</span>
                  <h3 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold uppercase tracking-tighter text-white group-hover:text-white/60 transition-colors duration-300">
                    {cap.title}
                  </h3>
                </div>
                <div className="relative flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/20 group-hover:bg-white group-hover:text-black transition-colors duration-300">
                  <AnimatePresence mode="wait">
                    {openIndex === index ? (
                      <motion.div
                        key="minus"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Minus className="w-6 h-6 md:w-8 md:h-8" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="plus"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Plus className="w-6 h-6 md:w-8 md:h-8" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </button>
              
              <motion.div
                initial={false}
                animate={{ 
                  height: openIndex === index ? "auto" : 0, 
                  opacity: openIndex === index ? 1 : 0 
                }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <div className="pb-12 pl-16 md:pl-26">
                  <p className="text-xl md:text-3xl font-body font-light max-w-4xl text-white/70 leading-relaxed">
                    {cap.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
