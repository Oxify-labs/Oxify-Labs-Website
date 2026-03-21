"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export function Capabilities() {
  return (
    <section id="capabilities" className="relative w-full py-24 px-6 md:px-16 lg:px-24 bg-transparent overflow-hidden">
      {/* Header */}
      <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="liquid-glass rounded-full px-6 py-2 mb-8"
        >
          <span className="text-sm font-medium text-white/90">Capabilities</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white"
        >
          Build fast. Scale responsibly.
        </motion.h2>
      </div>

      {/* Rows */}
      <div className="flex flex-col gap-24 max-w-7xl mx-auto">
        {/* Row 1: Text Left, Image Right */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex-1 space-y-6"
          >
            <h3 className="text-3xl md:text-4xl font-heading italic text-white">
              Designed to convert. Built to scale.
            </h3>
            <p className="text-lg text-white/60 font-body font-light leading-relaxed">
              Every component is intentional. We build modern, high-performance frontend applications that deliver exceptional user experiences.
            </p>
            <div className="pt-4">
              <a href="#contact" className="inline-flex items-center gap-2 text-white font-medium hover:text-white/80 transition-colors">
                Explore frontend <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex-1 w-full"
          >
            <div className="liquid-glass rounded-2xl overflow-hidden aspect-video relative">
              {/* Placeholder for GIF */}
              <div className="absolute inset-0 bg-white/5 flex items-center justify-center">
                <span className="text-white/40 font-mono text-sm">Interactive UI Prototype</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Row 2: Image Left, Text Right */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex-1 space-y-6"
          >
            <h3 className="text-3xl md:text-4xl font-heading italic text-white">
              Treat software like infrastructure.
            </h3>
            <p className="text-lg text-white/60 font-body font-light leading-relaxed">
              We engineer scalable backend systems, microservices, and distributed systems designed for long-term stability and high performance.
            </p>
            <div className="pt-4">
              <a href="#contact" className="inline-flex items-center gap-2 text-white font-medium hover:text-white/80 transition-colors">
                Explore backend <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex-1 w-full"
          >
            <div className="liquid-glass rounded-2xl overflow-hidden aspect-video relative">
              {/* Placeholder for GIF */}
              <div className="absolute inset-0 bg-white/5 flex items-center justify-center">
                <span className="text-white/40 font-mono text-sm">System Architecture Diagram</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
