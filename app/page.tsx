"use client";

import { Hero } from "@/components/hero";
import { LogoLoopStack } from "@/components/logo-loop-stack";
import { Capabilities } from "@/components/capabilities";
import { Philosophy } from "@/components/philosophy";
import { Process } from "@/components/process";
import { Testimonials } from "@/components/testimonials";
import { CtaFooter } from "@/components/cta-footer";

export default function Home() {
  return (
    <>
      <main className="relative z-10 min-h-screen selection:bg-white/20 selection:text-white">
        <Hero />
        <LogoLoopStack />
        <Process />
        <Capabilities />
        <Philosophy />
        <Testimonials />
        <CtaFooter />
      </main>
    </>
  );
}
