"use client";

import { Hero } from "@/components/hero";
import { LogoLoopStack } from "@/components/logo-loop-stack";
import { Capabilities } from "@/components/capabilities";
import { Portfolio } from "@/components/portfolio";
import { CtaFooter } from "@/components/cta-footer";

export default function Home() {
  return (
    <>
      <main className="relative z-10 min-h-screen bg-black text-white">
        <Hero />
        <LogoLoopStack />
        <Capabilities />
        <Portfolio />
        <CtaFooter />
      </main>
    </>
  );
}
