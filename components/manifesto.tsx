"use client";

import { motion } from "framer-motion";

const principles = [
    {
        title: "Complexity is Inevitable",
        desc: "We don't hide from it. We structure it. We build systems that absorb entropy rather than breaking under it.",
        icon: "◈",
    },
    {
        title: "Decades, Not Sprints",
        desc: "Speed is a feature, but longevity is the product. We write code today that you won't have to rewrite tomorrow.",
        icon: "◇",
    },
    {
        title: "Physics of Software",
        desc: "Every abstraction has a cost. We choose our tradeoffs with mathematical precision, not trend-driven hype.",
        icon: "△",
    },
];

export const Manifesto = () => {
    return (
        <section className="py-32 px-6 md:px-12 border-t border-white/5 relative overflow-hidden">
            {/* Ambient glow orbs */}
            <div className="absolute top-1/4 -left-32 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="font-mono text-xs uppercase tracking-widest text-purple-400/80 mb-4 block">
                            The Standard
                        </span>
                        <h2 className="font-sentient text-4xl md:text-6xl text-white leading-[1.1] tracking-tight text-balance">
                            We reject the <br />
                            <span className="bg-clip-text text-transparent bg-linear-to-r from-purple-400 via-pink-400 to-purple-400">
                                fragile consensus.
                            </span>
                        </h2>
                    </motion.div>
                    <motion.div
                        className="flex items-end"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <p className="font-sans text-lg text-zinc-300 max-w-md leading-relaxed">
                            Most software is built to be sold, not to last. We operate differently.
                            We are architects of <span className="text-white font-medium">digital permanence</span> in an era of disposable tech.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {principles.map((p, i) => (
                        <motion.div
                            key={i}
                            className="group relative"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.15 }}
                        >
                            {/* Card with glassmorphism */}
                            <div className="relative p-8 rounded-2xl border border-white/15 bg-black/50 backdrop-blur-md overflow-hidden transition-all duration-500 group-hover:border-purple-500/40 group-hover:bg-black/60 shadow-xl shadow-black/20">
                                {/* Animated gradient border glow on hover */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-purple-500/20 via-pink-500/20 to-purple-500/20" />
                                </div>

                                {/* Corner accent */}
                                <div className="absolute top-0 right-0 w-20 h-20 bg-linear-to-bl from-purple-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Content */}
                                <div className="relative z-10">
                                    <div className="flex items-center justify-between mb-6">
                                        <span className="font-mono text-xs text-zinc-500 group-hover:text-purple-400 transition-colors duration-300">
                                            0{i + 1}
                                        </span>
                                        <span className="text-2xl text-purple-400/40 group-hover:text-purple-400/80 transition-all duration-500 group-hover:scale-110">
                                            {p.icon}
                                        </span>
                                    </div>
                                    <h3 className="font-medium text-white text-xl mb-4 group-hover:text-purple-100 transition-colors duration-300">
                                        {p.title}
                                    </h3>
                                    <p className="text-zinc-400 text-sm leading-relaxed group-hover:text-zinc-300 transition-colors duration-300">
                                        {p.desc}
                                    </p>
                                </div>

                                {/* Bottom line accent */}
                                <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-purple-500/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
