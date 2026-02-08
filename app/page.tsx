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
        color1="#050505"
        color2="#1a1a1a"
        noiseIntensity={0.1}
      />
      <div className="fixed inset-0 bg-black/20 pointer-events-none z-1" />
      <main className="relative z-10">
        <Hero setHovering={setHovering} />
        <LandingSections setHovering={setHovering} />
      </main>
    </>
  );
}
