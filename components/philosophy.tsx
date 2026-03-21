"use client";

import { motion } from "framer-motion";
import { PenTool, ShieldCheck, Scale, History } from "lucide-react";

export function Philosophy() {
  const principles = [
    {
      title: "Narrative Sharpness",
      description: "Clear, declarative communication in code and structure.",
      icon: <PenTool className="w-5 h-5 text-white" />,
    },
    {
      title: "Authority",
      description: "Showing deep architectural thinking through engineering artifacts.",
      icon: <ShieldCheck className="w-5 h-5 text-white" />,
    },
    {
      title: "Restraint",
      description: "Designing scalable solutions that age well, avoiding over-engineering.",
      icon: <Scale className="w-5 h-5 text-white" />,
    },
    {
      title: "Responsibility",
      description: "Focusing on long-term systems and compounding returns, not quick hacks.",
      icon: <History className="w-5 h-5 text-white" />,
    },
  ];

  return (
    <section id="philosophy" className="relative w-full py-24 px-6 md:px-16 lg:px-24 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="liquid-glass rounded-full px-6 py-2 mb-8"
          >
            <span className="text-sm font-medium text-white/90">Philosophy</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white"
          >
            The difference is how we build.
          </motion.h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="liquid-glass rounded-2xl p-8 flex flex-col"
            >
              <div className="liquid-glass-strong rounded-full w-12 h-12 flex items-center justify-center mb-6">
                {principle.icon}
              </div>
              <h3 className="text-xl font-heading italic text-white mb-3">
                {principle.title}
              </h3>
              <p className="text-white/60 font-body font-light text-sm leading-relaxed">
                {principle.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
