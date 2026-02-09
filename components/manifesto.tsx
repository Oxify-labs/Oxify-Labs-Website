"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Pill } from "./pill";

export const Manifesto = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    const principles = [
        {
            title: "Complexity is Inevitable",
            desc: "We don’t hide from it. We structure it. We build systems that absorb entropy rather than breaking under it.",
        },
        {
            title: "Decades, Not Sprints",
            desc: "Speed is a feature, but longevity is the product. We write code today that you won’t have to rewrite tomorrow.",
        },
        {
            title: "Physics of Software",
            desc: "Every abstraction has a cost. We choose our tradeoffs with mathematical precision, not trend-driven hype.",
        },
    ];

    return (
        <section ref={containerRef} className="relative py-32 md:py-48 px-4 overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                {/* Left: The Statement */}
                <motion.div style={{ y, opacity }} className="space-y-8 relative z-10">
                    <Pill className="bg-primary/10 text-primary border-primary/20">The Oxify Standard</Pill>

                    <h2 className="font-sentient text-5xl md:text-7xl leading-[1.1] tracking-tight">
                        We reject the <br />
                        <span className="text-white/30 italic">fragile</span> consensus.
                    </h2>

                    <p className="font-mono text-lg text-foreground/60 max-w-md leading-relaxed">
                        Most software is built to be sold, not to last. We operate differently.
                        We are architects of digital permanence in an era of disposable tech.
                    </p>

                    <div className="h-px w-full bg-linear-to-r from-white/20 to-transparent my-12" />

                    <div className="grid gap-8">
                        {principles.map((p, i) => (
                            <div key={i} className="group cursor-pointer">
                                <h3 className="font-mono uppercase tracking-widest text-sm text-primary/80 mb-2 group-hover:text-primary transition-colors">
                                    0{i + 1} — {p.title}
                                </h3>
                                <p className="font-sentient text-2xl text-foreground/80 group-hover:text-white transition-colors">
                                    {p.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Right: Abstract Visualization */}
                <div className="relative h-[600px] w-full hidden md:block perspective-1000">
                    {/* Abstract grid lines representing structure */}
                    <div className="absolute inset-0 border border-white/5 rounded-3xl overflow-hidden backdrop-blur-sm bg-white/2">
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[40px_40px]" />

                        <motion.div
                            style={{ rotateY: 15, rotateX: 5 }}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 border border-primary/20 bg-primary/5 rounded-xl shadow-[0_0_100px_-20px_rgba(0,240,255,0.1)] flex items-center justify-center"
                        >
                            <div className="text-center font-mono text-xs uppercase tracking-[0.5em] text-primary/40">
                                System Architecture <br />
                                v2.0
                            </div>
                        </motion.div>

                        {/* Floating Orbitals */}
                        {[...Array(3)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute rounded-full border border-white/10"
                                style={{
                                    width: 200 + i * 100,
                                    height: 200 + i * 100,
                                    top: '50%',
                                    left: '50%',
                                    x: '-50%',
                                    y: '-50%',
                                }}
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20 + i * 10, repeat: Infinity, ease: "linear" }}
                            >
                                <div className="absolute top-0 left-1/2 w-2 h-2 bg-white/20 rounded-full -translate-x-1/2 -translate-y-1/2 box-shadow-glow" />
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};
