"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { Cpu, Globe, Layers, Zap } from "lucide-react";
import { MouseEvent } from "react";

const capabilities = [
    {
        title: "Systems Architecture",
        icon: Layers,
        desc: "Designing structures that support decades of evolution without collapse.",
        color: "from-cyan-500/20 to-blue-500/5",
    },
    {
        title: "High-Performance Engineering",
        icon: Zap,
        desc: "Zero technical debt. Optimized for speed, scale, and reliability.",
        color: "from-yellow-500/20 to-orange-500/5",
    },
    {
        title: "Global Infrastructure",
        icon: Globe,
        desc: "Seamless deployment across regions with edge-first strategies.",
        color: "from-emerald-500/20 to-green-500/5",
    },
    {
        title: "Computation & AI",
        icon: Cpu,
        desc: "Leveraging intelligent models to automate complexity.",
        color: "from-purple-500/20 to-pink-500/5",
    },
];

function Card({ title, desc, icon: Icon, color }: typeof capabilities[0]) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <div
            className="group relative border border-white/10 bg-white/2 px-8 py-16 rounded-3xl overflow-hidden backdrop-blur-sm"
            onMouseMove={handleMouseMove}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(255,255,255,0.1),
              transparent 80%
            )
          `,
                }}
            />
            <div>
                <div className={`mb-6 inline-flex p-3 rounded-lg bg-linear-to-br ${color} border border-white/5`}>
                    <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="mb-2 font-sentient text-2xl tracking-tight text-white">
                    {title}
                </h3>
                <p className="font-mono text-sm leading-relaxed text-zinc-400">
                    {desc}
                </p>
            </div>

            <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-2 h-2 rounded-full bg-primary shadow-glow shadow-primary/50 animate-pulse" />
            </div>
        </div>
    );
}

export const Capabilities = () => {
    return (
        <section id="capabilities" className="py-24 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <h2 className="font-sentient text-4xl md:text-5xl text-white mb-6">
                        Engineering Capabilities
                    </h2>
                    <p className="text-xl text-zinc-400 max-w-2xl font-light">
                        We don't just write code. We architect solutions for <br />
                        <span className="text-white">mission-critical environments</span>.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {capabilities.map((cap) => (
                        <Card key={cap.title} {...cap} />
                    ))}
                </div>
            </div>
        </section>
    );
};
