"use client";

import { Button } from "@/components/ui/button";
import { ArrowDown, ArrowUpRight, Cpu, Network } from "lucide-react";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface HeroProps {
  setHovering: (hovering: boolean) => void;
}

const variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      delay: custom * 0.1 + 0.2,
      duration: 0.8,
      ease: [0.215, 0.61, 0.355, 1] as [number, number, number, number],
    },
  }),
};

const wordVariants = {
  hidden: { opacity: 0, y: 50, rotateX: -20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.8,
      ease: [0.215, 0.61, 0.355, 1] as [number, number, number, number],
    },
  }),
};

export const Hero = ({ setHovering }: HeroProps) => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 500], [1, 0.9]);

  // Mouse parallax
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const parallaxX = useSpring(mousePosition.x, { stiffness: 100, damping: 20 });
  const parallaxY = useSpring(mousePosition.y, { stiffness: 100, damping: 20 });

  return (
    <section ref={containerRef} className="relative z-10 flex flex-col items-center justify-center min-h-svh px-4 pt-32 pb-12 text-center select-none overflow-hidden perspective-1000">

      {/* Tech Decorations - Fixed to viewport for depth */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-24 left-12 w-32 h-px bg-linear-to-r from-primary/30 to-transparent" />
        <div className="absolute top-24 left-12 w-px h-32 bg-linear-to-b from-primary/30 to-transparent" />
        <div className="absolute bottom-12 right-12 w-32 h-px bg-linear-to-l from-primary/30 to-transparent" />
        <div className="absolute bottom-12 right-12 w-px h-32 bg-linear-to-t from-primary/30 to-transparent" />

        {/* Dynamic Data Points */}
        <motion.div
          style={{ x: parallaxX, y: parallaxY }}
          className="absolute top-1/3 left-[10%] opacity-20 hidden lg:block"
        >
          <Cpu className="text-primary w-12 h-12" strokeWidth={1} />
        </motion.div>

        <motion.div
          style={{ x: useTransform(parallaxX, v => v * -1.5), y: useTransform(parallaxY, v => v * -1.5) }}
          className="absolute bottom-1/3 right-[10%] opacity-20 hidden lg:block"
        >
          <Network className="text-secondary w-16 h-16" strokeWidth={0.5} />
        </motion.div>
      </div>

      <motion.div style={{ y, opacity, scale }} className="relative z-10 flex flex-col items-center max-w-5xl mx-auto">

        {/* Intelligent Subtitle */}
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={variants}
          className="mb-8 flex items-center gap-4"
        >
          <div className="h-px w-8 bg-primary/50" />
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary/80">
            System Architecture Studio
          </span>
          <div className="h-px w-8 bg-primary/50" />
        </motion.div>

        {/* Main Headline - Kinetic Typography */}
        <h1 className="font-sentient text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tighter text-balance uppercase leading-[0.9] mb-8 min-h-[1.2em] mix-blend-color-dodge">
          <span className="sr-only">Systems That Scale Beyond Vision</span>
          <div className="flex flex-wrap justify-center gap-x-[0.25em] perspective-500">
            {["SYSTEMS", "THAT", "SCALE"].map((word, i) => (
              <motion.span
                key={i}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={wordVariants}
                className="inline-block origin-bottom text-white/90"
              >
                {word}
              </motion.span>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-x-[0.25em] perspective-500 mt-2">
            {["BEYOND", "VISION"].map((word, i) => (
              <motion.span
                key={i + 3}
                custom={i + 3}
                initial="hidden"
                animate="visible"
                variants={wordVariants}
                className="inline-block origin-bottom italic text-transparent bg-clip-text bg-linear-to-b from-primary to-white/50"
              >
                {word}
              </motion.span>
            ))}
          </div>
        </h1>

        {/* Narrative Description */}
        <motion.p
          custom={6}
          initial="hidden"
          animate="visible"
          variants={variants}
          className="font-mono text-sm sm:text-base text-foreground/70 text-balance max-w-[600px] mx-auto leading-relaxed mb-12"
        >
          We build the <span className="text-white font-semibold">nervous systems</span> of digital business.
          Resilient, scalable infrastructure engineered for the next decade, designed with clarity and executed with precision.
        </motion.p>

        {/* Action Layer */}
        <motion.div
          custom={8}
          initial="hidden"
          animate="visible"
          variants={variants}
          className="flex flex-col sm:flex-row items-center gap-6"
        >
          <Button
            className="h-14 px-8 text-base rounded-full bg-white/10 text-white hover:bg-white/20 hover:scale-105 transition-all duration-300 border border-white/5 backdrop-blur-md"
            onClick={() => {
              const element = document.getElementById("contact");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
          >
            Start the conversation <ArrowUpRight className="ml-2" size={18} />
          </Button>

          <Link
            href="#capabilities"
            className="group font-mono uppercase text-xs tracking-widest text-foreground/60 hover:text-primary transition-colors flex items-center gap-3 px-6 py-4 rounded-full hover:bg-white/5"
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
          >
            Capabilities
            <span className="block h-px w-4 bg-foreground/40 group-hover:bg-primary group-hover:w-8 transition-all duration-300" />
          </Link>
        </motion.div>
      </motion.div>

      {/* Technical Footer / Scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-0 w-full px-8 flex justify-between items-end pointer-events-none text-[10px] font-mono tracking-widest text-foreground/20 uppercase"
      >
        <div className="hidden md:block">
          LAT: 28.6139° N <br />
          LON: 77.2090° E
        </div>

        <div className="flex flex-col items-center gap-2 animate-pulse">
          <span>Scroll to Descend</span>
          <div className="h-8 w-px bg-linear-to-b from-primary/50 to-transparent" />
        </div>

        <div className="hidden md:block text-right">
          System Status: <span className="text-emerald-500">Nominal</span><br />
          Version: 2.0.4
        </div>
      </motion.div>
    </section>
  );
};
