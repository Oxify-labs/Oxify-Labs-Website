"use client";

import { motion } from "framer-motion";

export function ImpactStats() {
  const stats = [
    { value: "99.99%", label: "Uptime engineered" },
    { value: "14", label: "Days to MVP" },
    { value: "50M+", label: "Requests handled" },
    { value: "100%", label: "Client retention" },
  ];

  return (
    <section className="relative w-full py-32 px-6 md:px-16 lg:px-24 flex items-center justify-center overflow-hidden bg-transparent">

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="liquid-glass rounded-3xl p-12 md:p-16 w-full"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="flex flex-col items-center justify-center space-y-2"
              >
                <div className="text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight">
                  {stat.value}
                </div>
                <div className="text-sm text-white/60 font-body font-medium uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
