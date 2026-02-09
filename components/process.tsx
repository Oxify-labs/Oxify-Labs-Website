"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

const steps = [
    {
        step: "01",
        title: "Discovery & Blueprint",
        description: "We don't start coding until we understand the problem. We define the architecture, data models, and user flows before writing a single line."
    },
    {
        step: "02",
        title: "Agile Engineering",
        description: "Two-week sprints. Continuous deployment. You see progress every single day, not just at the end of the month."
    },
    {
        step: "03",
        title: "Rigorous Testing",
        description: "Automated end-to-end tests, load testing, and security audits ensuring what we launch is bulletproof."
    },
    {
        step: "04",
        title: "Global Scale",
        description: "Deployment to edge networks. Zero-downtime migrations. We hand over a system ready for millions of users."
    }
];

export const Process = () => {
    return (
        <section className="py-32 px-6 md:px-12 bg-background border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="mb-20">
                    <span className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-4 block">
                        Our Methodology
                    </span>
                    <h2 className="font-sentient text-4xl md:text-5xl text-white">
                        Precision in every step.
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((item, i) => (
                        <div key={i} className="group relative p-8 rounded-3xl border border-white/5 bg-white/2 hover:bg-white/4 transition-all duration-500">
                            <span className="block font-mono text-xs text-zinc-600 mb-6 group-hover:text-blue-500 transition-colors">
                                /{item.step}
                            </span>
                            <h3 className="text-xl text-white font-medium mb-4 group-hover:translate-x-1 transition-transform duration-300">
                                {item.title}
                            </h3>
                            <p className="text-zinc-500 text-sm leading-relaxed">
                                {item.description}
                            </p>

                            <div className="absolute top-8 right-8 w-2 h-2 rounded-full bg-white/10 group-hover:bg-blue-500/50 transition-colors duration-500" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
