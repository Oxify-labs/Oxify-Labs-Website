"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { BellIcon, CalendarDays, FileText, Share2Icon } from "lucide-react";
import { HiOutlineUserCircle } from "react-icons/hi2";
import {
  SiGoogledocs,
  SiGoogledrive,
  SiMessenger,
  SiNotion,
  SiWhatsapp,
} from "react-icons/si";

import { cn } from "@/lib/utils";


const files = [
  {
    name: "api-schema.json",
    body: "Schema-first API contracts that keep teams aligned across frontend and backend.",
  },
  {
    name: "growth-dashboard.tsx",
    body: "Conversion-focused interfaces with measurable impact on activation and retention.",
  },
  {
    name: "infra-blueprint.md",
    body: "Scalable architecture patterns for reliability, observability, and release safety.",
  },
  {
    name: "service-map.yaml",
    body: "Microservice boundaries, ownership, and integration paths designed for long-term velocity.",
  },
  {
    name: "experiments.csv",
    body: "A/B iteration plans linked to product hypotheses and measurable business outcomes.",
  },
];

const integrationLogos = [
  { label: "Drive", className: "right-2 top-2", delay: 0, Icon: SiGoogledrive, iconClassName: "text-[#7AB6FF]" },
  { label: "Docs", className: "right-0 top-[4.25rem]", delay: 0.2, Icon: SiGoogledocs, iconClassName: "text-[#8DB5FF]" },
  { label: "WhatsApp", className: "right-3 top-[7.75rem]", delay: 0.4, Icon: SiWhatsapp, iconClassName: "text-[#45D483]" },
  { label: "Messenger", className: "right-1 top-[11.5rem]", delay: 0.6, Icon: SiMessenger, iconClassName: "text-[#79B2FF]" },
  { label: "Notion", className: "right-4 top-[15.25rem]", delay: 0.8, Icon: SiNotion, iconClassName: "text-white" },
];

// ── Background sub-components (each can safely use hooks) ──

function ProductFoundationsBackground() {
  const reduced = useReducedMotion();
  return (
    <motion.div
      animate={reduced ? false : { y: [0, -130] }}
      transition={{ duration: 14, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
      className="absolute inset-x-4 top-8 space-y-3"
    >
      {files.map((file, idx) => (
        <figure
          key={idx}
          className="rounded-2xl border border-white/15 bg-white/5 p-3 backdrop-blur-md"
        >
          <figcaption className="font-body text-white text-sm font-medium">{file.name}</figcaption>
          <blockquote className="mt-1 font-body text-white/60 text-xs leading-relaxed">{file.body}</blockquote>
        </figure>
      ))}
    </motion.div>
  );
}

function ExecutionSignalsBackground() {
  return (
    <div className="absolute inset-0 p-5">
      <div className="grid gap-3">
        {["Design handoff approved", "Infra checks passed", "Launch checklist ready"].map((item, idx) => (
          <motion.div
            key={item}
            initial={{ opacity: 0.3, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: idx * 0.1 }}
            className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3 backdrop-blur-md"
          >
            <div className="flex items-center gap-3">
              <span className="h-2.5 w-2.5 rounded-full bg-white/80" />
              <p className="font-body text-white/80 text-sm">{item}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function SystemIntegrationsBackground() {
  const reduced = useReducedMotion();
  return (
    <div className="absolute top-4 right-2 h-[300px] w-full border-none [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] transition-all duration-300 ease-out group-hover:scale-105 origin-top-right">
      <div className="relative mx-auto h-full w-full max-w-[520px]">
        <motion.div
          animate={reduced ? false : { opacity: [0.12, 0.32, 0.12] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-3xl"
        />

        <motion.div
          animate={reduced ? false : { y: [0, -4, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-3 top-[44%] flex h-14 w-14 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white/85 backdrop-blur-md shadow-[0_0_24px_rgba(132,170,255,0.2)]"
        >
          <HiOutlineUserCircle className="h-7 w-7 text-white/85" />
        </motion.div>

        <motion.div
          animate={reduced ? false : { scale: [1, 1.06, 1] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/40 bg-white/20 shadow-[0_0_50px_rgba(255,255,255,0.18)]"
        />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-body text-[11px] font-semibold tracking-[0.2em] text-white/90">
          API
        </div>

        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 520 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          {[32, 90, 150, 212, 270].map((y, idx) => (
            <motion.path
              key={y}
              d={`M260 150 C 340 ${150 + (idx - 2) * 16}, 420 ${y}, 485 ${y}`}
              stroke="rgba(255,255,255,0.28)"
              strokeWidth="1.6"
              strokeLinecap="round"
              initial={{ pathLength: 0.2, opacity: 0.25 }}
              animate={reduced ? false : { pathLength: [0.2, 1, 0.2], opacity: [0.2, 0.65, 0.2] }}
              transition={{ duration: 3.2, repeat: Infinity, delay: idx * 0.2, ease: "easeInOut" }}
            />
          ))}
          <motion.path
            d="M74 157 C 140 157, 180 157, 220 157"
            stroke="rgba(255,255,255,0.22)"
            strokeWidth="1.6"
            strokeLinecap="round"
            initial={{ pathLength: 0.2, opacity: 0.2 }}
            animate={reduced ? false : { pathLength: [0.2, 1, 0.2], opacity: [0.2, 0.55, 0.2] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>

        {integrationLogos.map((logo) => (
          <motion.div
            key={logo.label}
            animate={reduced ? false : { y: [0, -6, 0], scale: [1, 1.03, 1] }}
            transition={{ duration: 3.1, repeat: Infinity, delay: logo.delay, ease: "easeInOut" }}
            className={cn(
              "absolute h-14 min-w-[56px] rounded-full border border-white/25 bg-white/10 px-3",
              "flex items-center justify-center backdrop-blur-md shadow-[0_0_22px_rgba(124,157,255,0.15)]",
              logo.className
            )}
          >
            <logo.Icon className={cn("h-6 w-6", logo.iconClassName)} aria-label={logo.label} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

type Feature = {
  Icon: React.ComponentType<{ className?: string }>;
  name: string;
  description: string;
  className: string;
  background: ReactNode;
};

const features: Feature[] = [
  {
    Icon: FileText,
    name: "Product Foundations",
    description: "From MVP planning to architecture docs, we build assets teams can scale with.",
    className: "md:col-span-1",
    background: <ProductFoundationsBackground />,
  },
  {
    Icon: BellIcon,
    name: "Execution Signals",
    description: "Live status visibility across product, design, and engineering workflows.",
    className: "md:col-span-2",
    background: <ExecutionSignalsBackground />,
  },
  {
    Icon: Share2Icon,
    name: "System Integrations",
    description: "Composable architecture that connects APIs, analytics, and internal tools.",
    className: "md:col-span-2",
    background: <SystemIntegrationsBackground />,
  },
  {
    Icon: CalendarDays,
    name: "Delivery Timeline",
    description: "Transparent sprint rhythm with clear milestones and dependency management.",
    className: "md:col-span-1",
    background: (
      <div className="absolute inset-0 p-6">
        <div className="rounded-2xl border border-white/15 bg-white/5 p-4 backdrop-blur-md">
          <p className="font-body text-white/75 text-xs uppercase tracking-[0.2em]">May 2026</p>
          <div className="mt-3 grid grid-cols-7 gap-1.5">
            {Array.from({ length: 35 }, (_, i) => i + 1).map((day) => {
              const active = [7, 12, 18, 23, 29].includes(day);
              return (
                <span
                  key={day}
                  className={cn(
                    "grid h-7 w-7 place-items-center rounded-full font-body text-[11px]",
                    active ? "bg-white text-black" : "text-white/65"
                  )}
                >
                  {day <= 31 ? day : ""}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    ),
  },
];

function BentoGrid({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn("grid grid-cols-1 md:grid-cols-3 auto-rows-[20rem] sm:auto-rows-[22rem] gap-4 sm:gap-6", className)}>{children}</div>;
}

function BentoCard({
  Icon,
  name,
  description,
  className,
  background,
}: Feature) {
  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-white/15 bg-white/[0.03] backdrop-blur-md",
        "transition-transform duration-300 hover:-translate-y-1",
        className
      )}
    >
      <div className="absolute inset-0 opacity-90">{background}</div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      <div className="relative z-10 flex h-full flex-col justify-end p-6">
        <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10">
          <Icon className="h-5 w-5 text-white" />
        </div>
        <h3 className="font-heading italic text-white tracking-tight leading-[0.9] text-xl sm:text-2xl">{name}</h3>
        <p className="mt-2 font-body font-light text-white/60 text-sm max-w-sm">{description}</p>
      </div>
    </article>
  );
}

export function Capabilities() {
  return (
    <section id="capabilities" className="relative w-full py-20 sm:py-24 px-4 sm:px-6 md:px-16 lg:px-24 bg-transparent overflow-hidden">
      <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto mb-14 sm:mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="liquid-glass rounded-full px-6 py-2 mb-8"
        >
          <span className="font-body text-sm font-medium text-white/90">Capabilities</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9]"
        >
          Build fast. Scale responsibly.
        </motion.h2>
      </div>

      <div className="max-w-7xl mx-auto">
        <BentoGrid>
          {features.map((feature) => (
            <BentoCard key={feature.name} {...feature} />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
