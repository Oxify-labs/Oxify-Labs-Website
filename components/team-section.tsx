"use client"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"

const TEAM = [
  {
    name: "Sohom Chatterjee",
    title: "CEO",
    focus: "AI/ML + Backend",
    img: "/Sohom.jpeg",
    initials: "SC",
    color: "from-stone-200 to-stone-100",
  },
  {
    name: "Rohit Kumar Kundu",
    title: "COO",
    focus: "Full Stack",
    img: "/Rohit.jpeg",
    initials: "RK",
    color: "from-zinc-200 to-zinc-100",
  },
  {
    name: "Krishnendu Samanta",
    title: "CTP",
    focus: "Web3 + Mobile",
    img: "/krishnendu.JPEG",
    initials: "KS",
    color: "from-neutral-200 to-neutral-100",
  },
  {
    name: "Debojyoti Banerjee",
    title: "CPO",
    focus: "Frontend + Cybersecurity",
    img: "/Debojyoti.jpeg",
    initials: "DB",
    color: "from-slate-200 to-slate-100",
  },
  {
    name: "Sagnik Koley",
    title: "Design Lead",
    focus: "Design Systems",
    img: "/Sagnik.jpeg",
    initials: "SK",
    color: "from-stone-200 to-stone-100",
  },
  {
    name: "Prachi Jha",
    title: "CMO",
    focus: "Marketing + Growth",
    img: "/prachi.png",
    initials: "PJ",
    color: "from-zinc-200 to-zinc-100",
  },
]

function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true) },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, inView }
}

function TeamCard({
  member,
  index,
}: {
  member: (typeof TEAM)[number]
  index: number
}) {
  const { ref, inView } = useInView(0.1)
  const delay = index * 80

  return (
    <div
      ref={ref}
      className="group relative flex flex-col rounded-2xl border border-black/[0.07] bg-white overflow-hidden hover:border-black/15 hover:shadow-md transition-all duration-500"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0) scale(1)" : "translateY(32px) scale(0.97)",
        transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms, border-color 0.3s ease, box-shadow 0.3s ease`,
      }}
    >
      {/* Photo */}
      <div className={`relative overflow-hidden bg-linear-to-b ${member.color}`} style={{ height: "280px" }}>
        <Image
          src={member.img}
          alt={member.name}
          fill
          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* subtle dark gradient at bottom of photo */}
        <div className="absolute inset-x-0 bottom-0 h-20 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.9))" }}
        />
      </div>

      {/* Info */}
      <div className="px-6 pb-6 pt-4 flex flex-col gap-1">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium text-[#111] tracking-tight">{member.name}</h3>
          <span
            className="text-[10px] tracking-widest text-black/40 border border-black/10 rounded-full px-2 py-0.5 font-mono"
          >
            {member.title}
          </span>
        </div>
        <p className="text-xs text-black/40 tracking-wide">{member.focus}</p>
      </div>
    </div>
  )
}

export function TeamSection() {
  const headingRef = useRef<HTMLDivElement>(null)
  const [headingVisible, setHeadingVisible] = useState(false)
  useEffect(() => {
    const el = headingRef.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) setHeadingVisible(true)
    }, { threshold: 0.2 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="team" className="py-32 px-6 md:px-12 lg:px-20 border-t border-black/6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div ref={headingRef} className="mb-16">
          <div
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] tracking-widest font-sans text-black/40 bg-black/4 mb-5"
            style={{
              opacity: headingVisible ? 1 : 0,
              transform: headingVisible ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 0.6s cubic-bezier(0.16,1,0.3,1), transform 0.6s cubic-bezier(0.16,1,0.3,1)",
            }}
          >
            TEAM
          </div>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05]"
            style={{
              fontFamily: '"IBM Plex Sans", sans-serif',
              opacity: headingVisible ? 1 : 0,
              transform: headingVisible ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.7s cubic-bezier(0.16,1,0.3,1) 80ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) 80ms",
            }}
          >
            The people who<br />build the systems.
          </h2>
          <p
            className="mt-5 text-sm text-black/45 leading-relaxed max-w-md"
            style={{
              opacity: headingVisible ? 1 : 0,
              transform: headingVisible ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 0.7s cubic-bezier(0.16,1,0.3,1) 160ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) 160ms",
            }}
          >
            Six disciplines. One studio. Every engagement draws from the full range — engineering, research, design, and growth — from day one.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {TEAM.map((member, i) => (
            <TeamCard key={member.name} member={member} index={i} />
          ))}
        </div>

        {/* Footer note */}
        <div
          className="mt-12 pt-8 border-t border-black/5 flex items-center justify-between flex-wrap gap-4"
          style={{
            opacity: headingVisible ? 1 : 0,
            transition: "opacity 0.8s cubic-bezier(0.16,1,0.3,1) 500ms",
          }}
        >
          <span className="text-xs text-black/25 tracking-widest">OXIFY LABS — FOUNDED 2024</span>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/70 animate-pulse" />
            <span className="text-xs text-black/35 tracking-wide">Actively taking on new projects</span>
          </div>
        </div>
      </div>
    </section>
  )
}
