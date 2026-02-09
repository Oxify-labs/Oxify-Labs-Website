"use client";

import { motion } from "framer-motion";

const steps = [
    {
        step: "01",
        title: "Discovery & Blueprint",
        description: "We don't start coding until we understand the problem. We define the architecture, data models, and user flows before writing a single line.",
        accent: "from-cyan-500 to-blue-500",
    },
    {
        step: "02",
        title: "Agile Engineering",
        description: "Two-week sprints. Continuous deployment. You see progress every single day, not just at the end of the month.",
        accent: "from-purple-500 to-pink-500",
    },
    {
        step: "03",
        title: "Rigorous Testing",
        description: "Automated end-to-end tests, load testing, and security audits ensuring what we launch is bulletproof.",
        accent: "from-orange-500 to-red-500",
    },
    {
        step: "04",
        title: "Global Scale",
        description: "Deployment to edge networks. Zero-downtime migrations. We hand over a system ready for millions of users.",
        accent: "from-emerald-500 to-teal-500",
    }
];

export const Process = () => {
    return (
        <section className="py-32 px-6 md:px-12 border-t border-white/5 relative overflow-hidden">
            {/* Ambient background elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-linear-to-r from-transparent via-white/20 to-transparent" />

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    className="mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="font-mono text-xs uppercase tracking-widest text-cyan-400/80 mb-4 block">
                        Our Methodology
                    </span>
                    <h2 className="font-sentient text-4xl md:text-5xl text-white">
                        Precision in every step.
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {steps.map((item, i) => (
                        <motion.div
                            key={i}
                            className="group relative"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                        >
                            {/* Main card */}
                            <div className="relative h-full p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden transition-all duration-500 group-hover:border-white/20 group-hover:bg-white/8 group-hover:translate-y-[-4px] group-hover:shadow-2xl group-hover:shadow-black/20">

                                {/* Gradient glow on hover */}
                                <div className={`absolute -top-20 -right-20 w-40 h-40 rounded-full bg-linear-to-br ${item.accent} opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-700`} />

                                {/* Top border accent */}
                                <div className={`absolute top-0 left-0 right-0 h-px bg-linear-to-r ${item.accent} opacity-0 group-hover:opacity-60 transition-opacity duration-500`} />

                                {/* Step number with glow */}
                                <div className="relative mb-8">
                                    <span className={`block font-mono text-3xl font-bold bg-clip-text text-transparent bg-linear-to-r ${item.accent} opacity-40 group-hover:opacity-100 transition-opacity duration-500`}>
                                        {item.step}
                                    </span>
                                    <div className={`absolute -bottom-2 left-0 w-8 h-px bg-linear-to-r ${item.accent} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
                                </div>

                                {/* Title */}
                                <h3 className="text-xl text-white font-medium mb-4 transition-all duration-300 group-hover:translate-x-1">
                                    {item.title}
                                </h3>

                                {/* Description */}
                                <p className="text-zinc-400 text-sm leading-relaxed group-hover:text-zinc-300 transition-colors duration-300">
                                    {item.description}
                                </p>

                                {/* Corner dot indicator */}
                                <div className={`absolute top-8 right-8 w-2 h-2 rounded-full bg-linear-to-r ${item.accent} opacity-30 group-hover:opacity-100 group-hover:shadow-lg transition-all duration-500`} />

                                {/* Bottom gradient line */}
                                <div className={`absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent ${item.accent} to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-500`} />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Connecting line decoration */}
                <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/5 to-transparent -z-10" />
            </div>
        </section>
    );
}
