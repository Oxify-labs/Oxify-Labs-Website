"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Testimonials() {
  const testimonials = [
    {
      quote: "We don't just ship features — we make decisions that compound. Every system we touch should be harder to break two years from now than it is today.",
      author: "Sohom Chatterjee",
      role: "CEO & AI/ML Researcher",
      image: "/Sohom.jpeg",
    },
    {
      quote: "Execution is the strategy. A brilliant architecture means nothing if it doesn't reach users. My job is making sure it does — on time, every time.",
      author: "Rohit Kumar Kundu",
      role: "COO & Co-Founder",
      image: "/Rohit.jpeg",
    },
    {
      quote: "The best technical decisions are invisible to the end user. If the system just works — fast, reliably, at scale — we've done our job right.",
      author: "Krishnendu Samanta",
      role: "CTO & Product Lead",
      image: "/krishnendu.JPEG",
    },
    {
      quote: "Design isn't decoration. It's the first thing people feel before they read a single word. We build brands that communicate trust before trust is earned.",
      author: "Sagnik Koley",
      role: "Design Lead",
      image: "/Sagnik.jpeg",
    },
    {
      quote: "From day one, we obsessed over what users actually need — not what looks good in a deck. That instinct is what separates products that stick from ones that don't.",
      author: "Debojyoti Banerjee",
      role: "Founding Team Member & Product Lead",
      image: "/Debojyoti.jpeg",
    },
    {
      quote: "Great work deserves to be heard. My role is making sure the right people find Oxify Labs — and when they do, they immediately understand why we're different.",
      author: "Prachi Jha",
      role: "Marketing and Outreach Lead",
      image: "/prachi.png",
    },
  ];

  return (
    <section id="testimonials" className="relative w-full py-20 sm:py-24 px-4 sm:px-6 md:px-16 lg:px-24 bg-transparent overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-14 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="liquid-glass rounded-full px-6 py-2 mb-8"
          >
            <span className="text-sm font-medium text-white/90">The Team</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading italic text-white"
          >
            Straight from the team.
          </motion.h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.08 }}
              className="liquid-glass rounded-2xl p-5 sm:p-7 flex flex-col justify-between gap-5 sm:gap-6"
            >
              <p className="text-white/75 font-body font-light text-sm italic leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-3 border-t border-white/10 pt-5">
                <div className="relative w-9 h-9 rounded-full overflow-hidden shrink-0 border border-white/10">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    fill
                    sizes="36px"
                    className="object-cover object-center"
                  />
                </div>
                <div>
                  <div className="text-white font-medium text-sm leading-tight">
                    {testimonial.author}
                  </div>
                  <div className="text-white/45 font-body text-xs mt-0.5">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
