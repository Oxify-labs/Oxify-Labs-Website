'use client'

import { Hero } from "@/components/hero";
import { LandingSections } from "@/components/landing-sections";
import Silk from "@/components/silk";
import { useState } from "react";

export default function Home() {
  const [hovering, setHovering] = useState(false);

  return (
    <>
      <Silk
        speed={3}
        scale={1.2}
        color="#36205b"
        noiseIntensity={0.8}
        rotation={0}
      />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,217,255,0.15),transparent_50%),radial-gradient(ellipse_at_bottom,rgba(139,92,246,0.1),transparent_50%)] pointer-events-none z-1" />
      <main className="relative z-10">
        <Hero setHovering={setHovering} />
        <LandingSections setHovering={setHovering} />
      </main>
    </>
  );
}
