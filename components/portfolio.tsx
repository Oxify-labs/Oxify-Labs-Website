"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";

const projects = [
  {
    id: "stellar-defi",
    title: "Stellar DeFi Infrastructure",
    category: "Blockchain Architecture",
    description: "Built a high-throughput, low-latency decentralized exchange interface on the Stellar network.",
    tech: ["Stellar", "Next.js", "Rust", "Soroban"],
    impact: "Processed $10M+ in daily volume with sub-second settlement times."
  },
  {
    id: "ai-copilot",
    title: "Enterprise AI Copilot",
    category: "AI/ML Development",
    description: "Developed a secure, locally-hosted LLM agent for enterprise data retrieval and summarization.",
    tech: ["Llama 3", "Python", "LangChain", "React"],
    impact: "Reduced employee search time by 60% and ensured 100% data privacy."
  },
  {
    id: "fintech-ux",
    title: "Next-Gen Fintech App",
    category: "Product Design",
    description: "Redesigned the core UX of a major fintech application using brutalist design principles.",
    tech: ["Figma", "React Native", "Tailwind CSS"],
    impact: "Increased user retention by 35% and boosted conversion rates."
  }
];

export function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedProject]);

  return (
    <section className="w-full py-24 md:py-32 bg-black border-b border-white/20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold uppercase tracking-tighter mb-16"
        >
          Featured Work
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer bento-card flex flex-col justify-between aspect-square"
            >
              <div>
                <span className="text-xs font-heading font-bold uppercase tracking-widest text-white/50 mb-4 block">
                  {project.category}
                </span>
                <h3 className="text-3xl md:text-4xl font-heading font-bold uppercase tracking-tighter group-hover:text-white/80 transition-colors">
                  {project.title}
                </h3>
              </div>
              <div className="mt-auto flex items-center justify-between">
                <span className="text-sm font-body uppercase text-white/70">View Case Study</span>
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-10"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
              className="bg-black border border-white/20 p-8 md:p-12 max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 text-white/50 hover:text-white transition-colors"
              >
                <X className="w-8 h-8" />
              </button>

              <span className="text-sm font-heading font-bold uppercase tracking-widest text-white/50 mb-6 block">
                {selectedProject.category}
              </span>
              <h2 className="text-4xl md:text-6xl font-heading font-bold uppercase tracking-tighter mb-8">
                {selectedProject.title}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h4 className="font-heading font-bold uppercase text-xl mb-4">The Challenge</h4>
                  <p className="text-white/80 font-body mb-8">{selectedProject.description}</p>
                  
                  <h4 className="font-heading font-bold uppercase text-xl mb-4">The Impact</h4>
                  <p className="text-white/80 font-body">{selectedProject.impact}</p>
                </div>
                <div>
                  <h4 className="font-heading font-bold uppercase text-xl mb-4">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map(t => (
                      <span key={t} className="px-4 py-2 border border-white/20 font-body text-sm">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="mt-16 pt-8 border-t border-white/20">
                <button className="bg-white text-black px-8 py-4 font-heading font-bold uppercase tracking-widest hover:bg-zinc-200 transition-colors">
                  Start Similar Project
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
