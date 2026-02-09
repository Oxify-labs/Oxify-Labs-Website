"use client";

import { BentoGrid, BentoItem } from "./bento-grid";
import { Cpu, Server, Zap, Globe, Layers, Eye, Smartphone, Database, Lock, Code2, Network } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export const Capabilities = () => {
    return (
        <section id="capabilities" className="py-24 px-6 md:px-12 bg-transparent relative z-10 border-t border-white/5">
            <div className="max-w-7xl mx-auto mb-16 text-center md:text-left md:flex justify-between items-end">
                <div>
                    <span className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-4 block">
                        Core Capabilities
                    </span>
                    <h2 className="font-sentient text-4xl md:text-5xl text-white mb-6 md:mb-0">
                        Engineering, not just coding.
                    </h2>
                </div>
                <div className="hidden md:flex flex-col items-end gap-2">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="font-mono text-xs text-zinc-500">SYSTEM STATUS: OPTIMAL</span>
                    </div>
                </div>
            </div>

            <BentoGrid className="max-w-7xl mx-auto">
                {/* 1. System Architecture - Abstract Layers */}
                <BentoItem
                    colSpan={2}
                    title="System Architecture"
                    description="Scalable microservices and distributed systems. We blueprint infrastructures that can handle millions of requests without breaking a sweat."
                    header={
                        <div className="flex-1 w-full h-full min-h-48 rounded-xl bg-neutral-950/50 border border-white/10 relative overflow-hidden items-center justify-center group/card hidden md:flex">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-50 group-hover/card:opacity-100 transition-opacity duration-700" />

                            {/* Abstract Floating Planes */}
                            <div className="relative w-48 h-32 perspective-[1000px]">
                                {[0, 1, 2].map((i) => (
                                    <motion.div
                                        key={i}
                                        className="absolute inset-0 rounded-xl border border-white/20 bg-white/10 backdrop-blur-md shadow-2xl"
                                        initial={{ rotateX: 60, rotateZ: -10, y: i * -20, opacity: 0.6 + i * 0.15, scale: 0.9 + i * 0.05 }}
                                        whileHover={{ y: i * -30 - 10, rotateX: 50, transition: { duration: 0.4 } }}
                                        transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "reverse", delay: i * 0.2 }}
                                        style={{ transformStyle: "preserve-3d" }}
                                    />
                                ))}
                            </div>
                        </div>
                    }
                    icon={<Layers className="h-6 w-6 text-primary" />}
                />

                {/* 2. Security - Concentric Pulse */}
                <BentoItem
                    colSpan={1}
                    title="Enterprise Security"
                    description="Zero-trust architecture by default. We implement bank-grade encryption and rigorous auth patterns."
                    header={
                        <div className="flex-1 w-full h-full min-h-48 rounded-xl bg-neutral-950/50 border border-white/10 relative overflow-hidden items-center justify-center group/lock hidden md:flex">
                            <div className="relative flex items-center justify-center">
                                {/* Pulse Rings */}
                                {[0, 1, 2].map((i) => (
                                    <motion.div
                                        key={i}
                                        className="absolute rounded-full border border-primary/40"
                                        style={{ width: (i + 1) * 60, height: (i + 1) * 60 }}
                                        animate={{
                                            scale: [1, 1.1, 1],
                                            opacity: [0.6, 0.2, 0.6],
                                            borderColor: ["rgba(255,255,255,0.3)", "rgba(255,255,255,0.1)", "rgba(255,255,255,0.3)"]
                                        }}
                                        transition={{ duration: 4, delay: i * 0.5, repeat: Infinity, ease: "easeInOut" }}
                                    />
                                ))}
                                <div className="z-10 bg-neutral-950 p-4 rounded-full border border-white/20 relative">
                                    <Lock className="w-6 h-6 text-primary" />
                                    <div className="absolute inset-0 bg-primary/40 blur-xl rounded-full opacity-0 group-hover/lock:opacity-60 transition-opacity duration-500" />
                                </div>
                            </div>
                        </div>
                    }
                    icon={<Lock className="h-6 w-6 text-primary" />}
                />

                {/* 3. Frontend - Interactive Cursor/Hover */}
                <BentoItem
                    colSpan={1}
                    title="Frontend Engineering"
                    description="Performance-obsessed interfaces. React Server Components, pure CSS, and 60fps animations."
                    header={
                        <div className="flex-1 w-full h-full min-h-48 rounded-xl bg-neutral-950/50 border border-white/10 relative overflow-hidden items-center justify-center group/ui hidden md:flex">
                            <div className="relative w-full max-w-[200px] h-32 bg-white/10 rounded-lg border border-white/10 overflow-hidden backdrop-blur-md transition-all duration-300 group-hover/ui:border-white/30">
                                <div className="absolute top-0 left-0 w-full h-8 border-b border-white/10 flex items-center px-3 gap-2 bg-white/5">
                                    <div className="w-2 h-2 rounded-full bg-white/30" />
                                    <div className="w-2 h-2 rounded-full bg-white/30" />
                                </div>
                                <motion.div
                                    className="absolute top-12 left-4 right-4 h-4 bg-white/20 rounded-sm"
                                    animate={{ width: ["40%", "70%", "40%"] }}
                                    transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
                                />
                                <motion.div
                                    className="absolute top-20 left-4 w-12 h-8 bg-primary/30 rounded-sm border border-primary/40"
                                    whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.3)" }}
                                />
                                {/* Cursor */}
                                <motion.div
                                    className="absolute w-4 h-4 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                                    animate={{
                                        x: [20, 80, 20],
                                        y: [80, 85, 80]
                                    }}
                                    transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
                                >
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="white" stroke="none">
                                        <path d="M5.5 3.21l10.08 15.66c.26.4.06.94-.4 1.05l-3.33.81-2.92 5.06c-.23.4-.76.54-1.16.31l-1.46-.84c-.4-.23-.54-.76-.31-1.16l2.92-5.06-2.52-2.1c-.37-.31-.17-.9.31-1.01L5.5 3.21z" />
                                    </svg>
                                </motion.div>
                            </div>
                        </div>
                    }
                    icon={<Zap className="h-6 w-6 text-primary" />}
                />

                {/* 4. Global - Abstract Spinning Globe */}
                <BentoItem
                    colSpan={2}
                    title="Global Deployment"
                    description="Edge-cached, globally distributed. We deploy where your users are to ensure sub-100ms latency worldwide."
                    header={
                        <div className="flex-1 w-full h-full min-h-48 rounded-xl bg-neutral-950/50 border border-white/10 relative overflow-hidden items-center justify-center hidden md:flex">
                            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />

                            <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                                {/* Latitude Lines */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-40">
                                    <motion.div
                                        className="w-[200%] h-[100px] border-y border-white rounded-[100%] absolute"
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                    />
                                    <motion.div
                                        className="w-[150%] h-[200px] border-x border-white rounded-[100%] absolute"
                                        animate={{ rotate: -360 }}
                                        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                                    />
                                </div>
                                <Globe className="w-32 h-32 text-white/10 absolute" strokeWidth={0.5} />

                                {/* Orbital Dots */}
                                {[0, 1, 2, 3].map((i) => (
                                    <motion.div
                                        key={i}
                                        className="absolute w-1.5 h-1.5 bg-primary rounded-full shadow-[0_0_15px_rgba(255,255,255,0.8)]"
                                        animate={{
                                            x: Math.cos(i) * 100,
                                            y: Math.sin(i * 1.5) * 40,
                                            scale: [0.5, 1.2, 0.5],
                                            opacity: [0.4, 1, 0.4]
                                        }}
                                        transition={{
                                            duration: 3 + i,
                                            repeat: Infinity,
                                            repeatType: "reverse",
                                            ease: "easeInOut"
                                        }}
                                    />
                                ))}
                            </div>
                        </div>
                    }
                    icon={<Globe className="h-6 w-6 text-primary" />}
                />

                {/* 5. Clean Code - Expanded to 2 cols */}
                <BentoItem
                    colSpan={2}
                    title="Clean Code"
                    description="We write self-documenting, typed code. No 'any', no magic strings, just pure, maintainable logic that scales with your team."
                    header={
                        <div className="flex-1 w-full h-full min-h-48 rounded-xl bg-neutral-950/50 border border-white/10 relative overflow-hidden items-center justify-center hidden md:flex">
                            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-size-[24px_24px] opacity-20" />
                            <div className="grid grid-cols-4 gap-3 opacity-80 p-8 w-full max-w-sm">
                                {Array.from({ length: 12 }).map((_, i) => (
                                    <motion.div
                                        key={i}
                                        className="h-2 rounded-full bg-white/10"
                                        style={{ width: `${Math.random() * 60 + 40}%` }}
                                        initial={{ opacity: 0.3 }}
                                        animate={{
                                            opacity: [0.3, 0.6, 0.3],
                                            backgroundColor: ["rgba(255,255,255,0.1)", "rgba(255,255,255,0.2)", "rgba(255,255,255,0.1)"]
                                        }}
                                        transition={{
                                            duration: 3,
                                            delay: i * 0.2,
                                            repeat: Infinity,
                                            repeatType: "reverse"
                                        }}
                                    />
                                ))}
                            </div>
                        </div>
                    }
                    icon={<Code2 className="h-6 w-6 text-primary" />}
                />

                {/* 6. Mobile Solutions - New Item */}
                <BentoItem
                    colSpan={1}
                    title="Mobile Solutions"
                    description="Native performance with React Native. One codebase, zero compromise on feel."
                    header={
                        <div className="flex-1 w-full h-full min-h-48 rounded-xl bg-neutral-950/50 border border-white/10 relative overflow-hidden items-center justify-center hidden md:flex">
                            <div className="relative w-24 h-40 border-2 border-white/10 rounded-4xl bg-black/40 backdrop-blur-sm flex items-center justify-center overflow-hidden">
                                <div className="absolute top-2 w-8 h-1 bg-white/10 rounded-full" />
                                <motion.div
                                    className="w-16 h-24 bg-linear-to-tr from-primary/20 to-purple-500/20 rounded-lg backdrop-blur-md"
                                    animate={{
                                        y: [0, -10, 0],
                                        scale: [1, 1.05, 1]
                                    }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                />
                                <motion.div
                                    className="absolute -bottom-10 -right-10 w-24 h-24 bg-primary/20 blur-2xl rounded-full"
                                    animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
                                    transition={{ duration: 5, repeat: Infinity }}
                                />
                            </div>
                        </div>
                    }
                    icon={<Smartphone className="h-6 w-6 text-primary" />}
                />
            </BentoGrid>
        </section>
    );
};
