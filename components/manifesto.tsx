"use client";

import { motion } from "framer-motion";

const principles = [
    {
        title: "Complexity is Inevitable",
        desc: "We don't hide from it. We structure it. We build systems that absorb entropy rather than breaking under it.",
    },
    {
        title: "Decades, Not Sprints",
        desc: "Speed is a feature, but longevity is the product. We write code today that you won't have to rewrite tomorrow.",
    },
    {
        title: "Physics of Software",
        desc: "Every abstraction has a cost. We choose our tradeoffs with mathematical precision, not trend-driven hype.",
    },
];

export const Manifesto = () => {
    return (
        <section className="py-32 px-6 md:px-12 bg-background border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
                    <div>
                        <span className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-4 block">
                            The Standard
                        </span>
                        <h2 className="font-sentient text-4xl md:text-6xl text-white leading-[1.1] tracking-tight text-balance">
                            We reject the <br />
                            <span className="text-zinc-500">fragile consensus.</span>
                        </h2>
                    </div>
                    <div className="flex items-end">
                        <p className="font-sans text-lg text-zinc-400 max-w-md leading-relaxed">
                            Most software is built to be sold, not to last. We operate differently.
                            We are architects of digital permanence in an era of disposable tech.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/10 pt-12">
                    {principles.map((p, i) => (
                        <div key={i} className="group">
                            <span className="font-mono text-xs text-zinc-600 mb-6 block group-hover:text-blue-500 transition-colors">
                                0{i + 1}
                            </span>
                            <h3 className="font-medium text-white text-xl mb-4">
                                {p.title}
                            </h3>
                            <p className="text-zinc-400 text-sm leading-relaxed">
                                {p.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
