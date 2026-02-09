"use client";

import { Hero } from "@/components/hero";
import { Manifesto } from "@/components/manifesto";
import { Capabilities } from "@/components/capabilities";
import { InternalProjects } from "@/components/internal-projects";
import { ContactPortal } from "@/components/contact-portal";
import Silk from "@/components/silk";
import { useState } from "react";

export default function Home() {
  const [hovering, setHovering] = useState(false);

  return (
    <>
      <Silk
        speed={0.5}
        scale={1.5}
        color="#36205b"
        noiseIntensity={0.05}
        rotation={45}
      />

      {/* Cinematic Overlay - Vignette & Scanlines */}
      <div className="fixed inset-0 pointer-events-none z-1">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
        <div className="absolute inset-0 bg-noise opacity-[0.03] mix-blend-overlay" />
      </div>

      <main className="relative z-10 selection:bg-cyan-500/30 selection:text-cyan-100">
        <Hero setHovering={setHovering} />

        {/* Deep Dive Sequence */}
        <div className="relative z-20">
          <Manifesto />
          <Capabilities />
          <InternalProjects />
          <ContactPortal />
        </div>
      </main>

      {/* Footer Minimal */}
      <footer className="relative z-20 py-12 text-center border-t border-white/5 bg-black">
        <p className="font-mono text-[10px] text-zinc-600 uppercase tracking-[0.2em]">
          Oxify Labs © {new Date().getFullYear()} <br />
          System Architecture Studio
        </p>
      </footer>
    </>
  );
}
