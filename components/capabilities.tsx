"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const capabilities = [
  {
    title: "AI/ML Development",
    description: "Custom Large Language Models, agentic workflows, and predictive analytics designed for compounding leverage."
  },
  {
    title: "Smart Contract & Blockchain Architecture",
    description: "Secure, scalable infrastructure on Stellar and EVM chains. From tokenomics design to high-throughput financial systems."
  },
  {
    title: "End-to-End Product Design",
    description: "High-contrast, brutalist UI/UX engineering with conversion-optimized flows. We build products that command attention."
  }
];

export function Capabilities() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full py-24 md:py-32 bg-black border-b border-white/20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold uppercase tracking-tighter mb-16"
        >
          Capabilities
        </motion.h2>

        <div className="flex flex-col border-t border-white/20">
          {capabilities.map((cap, index) => (
            <div key={index} className="border-b border-white/20">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-8 flex items-center justify-between text-left group"
              >
                <h3 className="text-2xl md:text-5xl font-heading font-bold uppercase tracking-tighter text-white group-hover:text-white/70 transition-colors">
                  {cap.title}
                </h3>
                <ChevronDown 
                  className={`w-8 h-8 md:w-12 md:h-12 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                />
              </button>
              
              <motion.div
                initial={false}
                animate={{ height: openIndex === index ? "auto" : 0, opacity: openIndex === index ? 1 : 0 }}
                className="overflow-hidden"
              >
                <p className="pb-8 text-lg md:text-2xl font-body font-light max-w-4xl text-white/80">
                  {cap.description}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
