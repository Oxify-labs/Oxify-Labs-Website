"use client";

import { motion } from "framer-motion";
import LogoLoop from "@/components/ui/logo-loop";

const imageLogos = [
  { src: "/logos/stack/typescript.svg", alt: "TypeScript" },
  { src: "/logos/stack/tailwindcss.svg", alt: "Tailwind CSS" },
  { src: "/logos/stack/vercel.svg", alt: "Vercel" },
  { src: "/logos/stack/github.svg", alt: "GitHub" },
  { src: "/logos/stack/docker.svg", alt: "Docker" },
  { src: "/logos/stack/prisma.svg", alt: "Prisma" },
  { src: "/logos/stack/supabase.svg", alt: "Supabase" },
];

export function LogoLoopStack() {
  return (
    <section
      id="stack"
      className="relative w-full overflow-hidden border-y border-white/10 py-8 md:py-10"
    >
      {/* Colorful ambient glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-24 bg-blue-500/20 blur-3xl rounded-full" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-24 bg-violet-500/20 blur-3xl rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-96 h-24 bg-cyan-400/10 blur-3xl rounded-full" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10 mb-6 flex justify-center"
      >
        <span className="font-body text-xs font-medium uppercase tracking-[0.18em] text-white/55">
          Powered by the stack behind
        </span>
      </motion.div>

      <div className="relative z-10">
        {/* Side fade masks — uses rgba so they blend with any background */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-10 sm:w-28 bg-gradient-to-r from-black/70 to-transparent z-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-10 sm:w-28 bg-gradient-to-l from-black/70 to-transparent z-20" />

        <div className="flex flex-col gap-4">
          {/* Primary rail — large, full color */}
          <div className="relative h-[76px] w-full overflow-hidden">
            <LogoLoop
              logos={imageLogos}
              speed={80}
              direction="left"
              logoHeight={54}
              gap={72}
              hoverSpeed={0}
              scaleOnHover
              ariaLabel="Technology partners primary rail"
            />
          </div>

          {/* Secondary rail — smaller, reversed */}
          <div className="relative h-[46px] w-full overflow-hidden opacity-60">
            <LogoLoop
              logos={[...imageLogos].reverse()}
              speed={52}
              direction="right"
              logoHeight={30}
              gap={52}
              ariaLabel="Technology partners secondary rail"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
