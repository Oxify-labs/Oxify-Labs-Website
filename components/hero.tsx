"use client";

import { Pill } from "@/components/pill";
import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { DynamicHeroText } from "@/components/dynamic-hero-text";

interface HeroProps {
  setHovering: (hovering: boolean) => void;
}

export const Hero = ({ setHovering }: HeroProps) => {
  return (
    <section className="relative z-10 flex flex-col items-center justify-center min-h-svh px-4 pt-32 pb-12 text-center select-none">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Pill className="mb-8 border-white/10 bg-white/5 backdrop-blur-md">ANTIGRAVITY MODE</Pill>
      </motion.div>

      <DynamicHeroText />

      <motion.p
        initial={{ opacity: 0, filter: "blur(10px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 1, delay: 0.8 }}
        className="font-mono text-sm sm:text-base text-foreground/80 text-balance max-w-[540px] mx-auto leading-relaxed mb-16"
      >
        We engineer resilient software systems that embrace complexity <br className="hidden md:block" /> and deliver compounding returns.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.8, delay: 1, type: "spring", bounce: 0.2 }}
        className="flex flex-col sm:flex-row items-center gap-8 relative z-20"
      >
        <Button
          size="default"
          onClick={() => {
            const element = document.getElementById("contact");
            element?.scrollIntoView({ behavior: "smooth" });
          }}
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
          className="h-16 px-8 text-lg rounded-full shadow-lg shadow-primary/20 hover:scale-105 transition-transform duration-300"
        >
          initiate_sequence <ArrowUpRight className="ml-2" size={20} />
        </Button>
        <Link
          href="#portfolio"
          className="group font-mono uppercase text-sm tracking-widest text-foreground/80 hover:text-primary transition-colors flex items-center gap-3 font-medium"
        >
          View Work
          <span className="block h-px w-8 bg-foreground/40 group-hover:bg-primary transition-colors" />
        </Link>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 pointer-events-none"
      >
        <div className="flex flex-col items-center gap-4 text-foreground/40 animate-bounce">
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] font-semibold">Scroll</span>
          <ArrowDown size={16} strokeWidth={1.5} />
        </div>
      </motion.div>
    </section>
  );
};
