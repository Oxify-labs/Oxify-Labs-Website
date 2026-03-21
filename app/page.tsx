"use client";

import { Hero } from "@/components/hero";
import { TechStack } from "@/components/tech-stack";
import { Capabilities } from "@/components/capabilities";
import { Philosophy } from "@/components/philosophy";
import { Process } from "@/components/process";
import { ImpactStats } from "@/components/impact-stats";
import { Testimonials } from "@/components/testimonials";
import { CtaFooter } from "@/components/cta-footer";

export default function Home() {
  return (
    <>
      <main className="relative z-10 selection:bg-white/20 selection:text-white pb-32">
        <Hero />
        <TechStack />
        <Process />
        <Capabilities />
        <Philosophy />
        <ImpactStats />
        <Testimonials />
        <CtaFooter />
      </main>
    </>
  );
}
