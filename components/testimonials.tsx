"use client";

import { motion } from "framer-motion";

export function Testimonials() {
  const testimonials = [
    {
      quote:
        "They didn't just build an MVP; they built a foundation. We scaled to 50k users without needing a rewrite, which is unheard of for early-stage products.",
      author: "Sarah J.",
      role: "Founder, FinTech Startup",
    },
    {
      quote:
        "The architecture review alone saved us months of technical debt. When they implemented the changes, our infrastructure costs dropped by 40% while performance doubled.",
      author: "Michael C.",
      role: "CTO, Enterprise SaaS",
    },
    {
      quote:
        "Most agencies deliver throwaway code. Oxify delivered a production-ready microservices architecture in the time others promised wireframes.",
      author: "David R.",
      role: "Product Lead, Logistics Platform",
    },
  ];

  return (
    <section id="testimonials" className="relative w-full py-24 px-6 md:px-16 lg:px-24 bg-transparent overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="liquid-glass rounded-full px-6 py-2 mb-8"
          >
            <span className="text-sm font-medium text-white/90">What They Say</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white"
          >
            Don't take our word for it.
          </motion.h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="liquid-glass rounded-2xl p-8 flex flex-col justify-between"
            >
              <p className="text-white/80 font-body font-light text-sm italic leading-relaxed mb-8">
                "{testimonial.quote}"
              </p>
              <div>
                <div className="text-white font-medium text-sm">
                  {testimonial.author}
                </div>
                <div className="text-white/50 font-body text-xs mt-1">
                  {testimonial.role}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
