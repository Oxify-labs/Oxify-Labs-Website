"use client";

import { motion } from "framer-motion";

export function TechStack() {
  const stack = ["Next.js", "TypeScript", "Tailwind CSS", "AWS", "Node.js", "PostgreSQL", "React Three Fiber"];

  return (
    <section id="stack" className="relative w-full py-24 flex flex-col items-center justify-center border-t border-white/5 bg-transparent">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="liquid-glass rounded-full px-6 py-2 mb-12"
      >
        <span className="text-sm font-medium text-white/80">
          Powered by the stack behind
        </span>
      </motion.div>

      <div className="w-full overflow-hidden flex justify-center px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-16 max-w-7xl mx-auto"
        >
          {stack.map((tech, index) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              className="text-2xl md:text-3xl font-heading italic text-white/90 hover:text-white transition-colors cursor-default"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
