"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight, Hash } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const Hero = ({ setHovering }: { setHovering?: (hovering: boolean) => void }) => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();

  // Parallax effects
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative flex flex-col items-center justify-center min-h-[90vh] px-6 pt-32 pb-12 overflow-hidden"
    >
      {/* 1. Background Structure (Subtle Grid) */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[64px_64px] mask-[radial-gradient(ellipse_at_center,black_40%,transparent_100%)] pointer-events-none" />

      {/* 2. Soft Light Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-white/2 blur-[120px] rounded-full pointer-events-none" />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm shadow-sm"
        >
          <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-mono tracking-wider text-zinc-400 uppercase">
            System Architecture Studio
          </span>
        </motion.div>

        {/* Headline */}
        <h1 className="font-sentient text-5xl sm:text-7xl md:text-8xl tracking-tight text-balance font-medium leading-[1.1] mb-8 text-white">
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.215, 0.61, 0.355, 1] }}
            className="block"
          >
            Systems that
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.215, 0.61, 0.355, 1] }}
            className="block bg-clip-text text-transparent bg-linear-to-b from-white to-white/60"
          >
            scale intentionally.
          </motion.span>
        </h1>

        {/* Supporting Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="font-sans text-lg sm:text-xl text-zinc-400 text-balance max-w-2xl mx-auto leading-relaxed mb-10"
        >
          We build the nervous systems of digital business. Resilient infrastructure engineered for clarity, performance, and the next decade of growth.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <Button
            size="lg"
            className="h-12 px-8 text-base rounded-full bg-white text-black hover:bg-zinc-200 transition-all duration-300 font-medium w-full sm:w-auto"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            onMouseEnter={() => setHovering && setHovering(true)}
            onMouseLeave={() => setHovering && setHovering(false)}
          >
            Start Project <ArrowRight className="ml-2 w-4 h-4" />
          </Button>

          <Button
            variant="ghost"
            size="lg"
            className="h-12 px-8 text-base rounded-full text-zinc-400 hover:text-white hover:bg-white/5 transition-all w-full sm:w-auto"
            onClick={() => document.getElementById("capabilities")?.scrollIntoView({ behavior: "smooth" })}
            onMouseEnter={() => setHovering && setHovering(true)}
            onMouseLeave={() => setHovering && setHovering(false)}
          >
            Explore Capabilities <ChevronRight className="ml-1 w-4 h-4" />
          </Button>
        </motion.div>
      </motion.div>

      {/* Decorative Bottom Anchor */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <div className="w-px h-12 bg-linear-to-b from-transparent via-zinc-700 to-transparent" />
      </motion.div>
    </section>
  );
};
