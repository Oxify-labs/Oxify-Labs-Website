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
  const { ref, inView } = useInView(0.08)
  const delay = index * 90

  return (
    <div
      ref={ref}
      className="group relative flex flex-col rounded-2xl border border-black/[0.07] bg-white overflow-hidden cursor-pointer"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView
          ? "translateY(0) scale(1)"
          : "translateY(40px) scale(0.96)",
        filter: inView ? "blur(0px)" : "blur(4px)",
        transition: `
          opacity 0.65s cubic-bezier(0.16,1,0.3,1) ${delay}ms,
          transform 0.65s cubic-bezier(0.16,1,0.3,1) ${delay}ms,
          filter 0.65s cubic-bezier(0.16,1,0.3,1) ${delay}ms,
          border-color 0.3s ease,
          box-shadow 0.3s ease
        `,
        boxShadow: "0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)",
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLDivElement).style.boxShadow =
          "0 8px 24px rgba(0,0,0,0.10), 0 2px 6px rgba(0,0,0,0.06)"
        ;(e.currentTarget as HTMLDivElement).style.borderColor =
          "rgba(0,0,0,0.15)"
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLDivElement).style.boxShadow =
          "0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)"
        ;(e.currentTarget as HTMLDivElement).style.borderColor =
          "rgba(0,0,0,0.07)"
      }}
    >
      {/* Shimmer overlay on hover */}
      <div
        className="pointer-events-none absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background:
            "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.18) 50%, transparent 60%)",
          backgroundSize: "200% 100%",
          animation: "none",
        }}
      />

      {/* Photo — aspect-ratio box so every image fits uniformly */}
      <div
        className={`relative w-full overflow-hidden bg-linear-to-b ${member.color}`}
        style={{ aspectRatio: "4 / 3" }}
      >
        <Image
          src={member.img}
          alt={member.name}
          fill
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Bottom fade gradient */}
        <div
          className="absolute inset-x-0 bottom-0 h-16 pointer-events-none z-1"
          style={{
            background:
              "linear-gradient(to bottom, transparent, rgba(255,255,255,0.85))",
          }}
        />
      </div>

      {/* Info */}
      <div className="px-5 pb-5 pt-4 flex flex-col gap-1">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-sm font-medium text-[#111] tracking-tight truncate">
            {member.name}
          </h3>
          <span
            className="shrink-0 text-[10px] tracking-widest text-black/40 border border-black/10 rounded-full px-2.5 py-0.5 font-mono"
            style={{
              animation: inView
                ? `logIn 0.5s cubic-bezier(0.16,1,0.3,1) ${delay + 200}ms both`
                : "none",
            }}
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
              transition:
                "opacity 0.6s cubic-bezier(0.16,1,0.3,1), transform 0.6s cubic-bezier(0.16,1,0.3,1)",
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
              transition:
                "opacity 0.7s cubic-bezier(0.16,1,0.3,1) 80ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) 80ms",
            }}
          >
            The people who<br />build the systems.
          </h2>
          <p
            className="mt-5 text-sm text-black/45 leading-relaxed max-w-md"
            style={{
              opacity: headingVisible ? 1 : 0,
              transform: headingVisible ? "translateY(0)" : "translateY(16px)",
              transition:
                "opacity 0.7s cubic-bezier(0.16,1,0.3,1) 160ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) 160ms",
            }}
          >
            Six disciplines. One studio. Every engagement draws from the full
            range — engineering, research, design, and growth — from day one.
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
          <span className="text-xs text-black/25 tracking-widest">
            OXIFY LABS — FOUNDED 2024
          </span>
          <div className="flex items-center gap-2">
            {/* Ping live dot */}
            <span className="relative inline-flex h-2 w-2">
              <span
                className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"
                style={{ animation: "ping 1.2s cubic-bezier(0,0,0.2,1) infinite" }}
              />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-xs text-black/35 tracking-wide">
              Actively taking on new projects
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
