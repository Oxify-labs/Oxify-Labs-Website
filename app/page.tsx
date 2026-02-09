"use client";

import { Hero } from "@/components/hero";
import { Capabilities } from "@/components/capabilities";

import { ContactPortal } from "@/components/contact-portal";
import { Process } from "@/components/process";
import { Manifesto } from "@/components/manifesto";
import { useState } from "react";

export default function Home() {
  const [hovering, setHovering] = useState(false);

  return (
    <>
      <main className="relative z-10 bg-background selection:bg-white/20 selection:text-white">
        <Hero setHovering={setHovering} />
        <Capabilities />
        <Manifesto />

        <Process />
        <ContactPortal />
      </main>

      <footer className="relative z-20 py-12 text-center border-t border-white/5 bg-background">
        <p className="font-mono text-[10px] text-zinc-600 uppercase tracking-[0.2em]">
          Oxify Labs © {new Date().getFullYear()} <br />
          System Architecture Studio
        </p>
      </footer>
    </>
  );
}
