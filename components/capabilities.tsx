"use client";

import { BentoGrid, BentoItem } from "./bento-grid";
import { Cpu, Server, Zap, Globe, Layers, Eye, Smartphone, Database, Lock, Code2, Network } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export const Capabilities = () => {
    return (
        <section id="capabilities" className="py-24 px-6 md:px-12 bg-background relative z-10 border-t border-white/5">
            <div className="max-w-7xl mx-auto mb-16 text-center md:text-left md:flex justify-between items-end">
                <div>
                    <span className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-4 block">
                        Core Capabilities
                    </span>
                    <h2 className="font-sentient text-4xl md:text-5xl text-white mb-6 md:mb-0">
                        Engineering, not just coding.
                    </h2>
                </div>
                <p className="text-zinc-400 max-w-sm text-right hidden md:block text-sm leading-relaxed font-mono">
                    System Architecture v2.0 <br />
                    Status: Nominal
                </p>
            </div>

            <BentoGrid className="max-w-7xl mx-auto">
                {/* 1. Large Feature - Architecture (Abstract Code / Logic) */}
                <BentoItem
                    colSpan={2}
                    title="System Architecture"
                    description="Scalable microservices and distributed systems. We blueprint infrastructures that can handle millions of requests without breaking a sweat."
                    header={
                        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-neutral-950 border border-white/5 relative overflow-hidden flex items-center justify-center group/card">
                            {/* Abstract Logic Gates / Nodes */}
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px]" />

                            <div className="relative w-full h-full flex items-center justify-center gap-8">
                                {/* Node 1 */}
                                <motion.div
                                    className="w-16 h-16 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center z-10 shadow-2xl relative"
                                    whileHover={{ scale: 1.1 }}
                                >
                                    <Database className="text-blue-500 w-6 h-6" />
                                    <div className="absolute -bottom-6 text-[10px] font-mono text-zinc-500">Master DB</div>
                                </motion.div>

                                {/* Connector */}
                                <div className="w-16 h-[2px] bg-gradient-to-r from-blue-500/20 to-emerald-500/20 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-white/20 w-1/2 animate-flow-right" />
                                </div>

                                {/* Node 2 */}
                                <motion.div
                                    className="w-16 h-16 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center z-10 shadow-2xl relative"
                                    whileHover={{ scale: 1.1 }}
                                >
                                    <Server className="text-emerald-500 w-6 h-6" />
                                    <div className="absolute -bottom-6 text-[10px] font-mono text-zinc-500">API Gateway</div>
                                </motion.div>

                                {/* Connector */}
                                <div className="w-16 h-[2px] bg-gradient-to-r from-emerald-500/20 to-purple-500/20 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-white/20 w-1/2 animate-flow-right" style={{ animationDelay: '0.5s' }} />
                                </div>

                                {/* Node 3 */}
                                <motion.div
                                    className="w-16 h-16 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center z-10 shadow-2xl relative"
                                    whileHover={{ scale: 1.1 }}
                                >
                                    <Smartphone className="text-purple-500 w-6 h-6" />
                                    <div className="absolute -bottom-6 text-[10px] font-mono text-zinc-500">Client</div>
                                </motion.div>
                            </div>
                        </div>
                    }
                    icon={<Layers className="h-4 w-4 text-neutral-300" />}
                />

                {/* 2. Smaller Feature - Security (Lock Animation) */}
                <BentoItem
                    title="Enterprise Security"
                    description="Zero-trust architecture by default. We implement bank-grade encryption and rigorous auth patterns."
                    header={
                        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-neutral-900 border border-white/5 relative overflow-hidden flex items-center justify-center group/lock">
                            <div className="relative">
                                <div className="absolute inset-0 bg-emerald-500/20 blur-xl opacity-0 group-hover/lock:opacity-100 transition-opacity duration-500" />
                                <Lock className="w-10 h-10 text-zinc-500 group-hover/lock:text-emerald-400 transition-colors duration-300" />
                                <motion.div
                                    className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-500 opacity-0 group-hover/lock:opacity-100"
                                    initial={{ scale: 0 }}
                                    whileHover={{ scale: 1 }}
                                />
                            </div>
                        </div>
                    }
                    icon={<Lock className="h-4 w-4 text-neutral-300" />}
                />

                {/* 3. Smaller Feature - Frontend (UI Elements) */}
                <BentoItem
                    title="Frontend Engineering"
                    description="Performance-obsessed interfaces. React Server Components, pure CSS, and 60fps animations."
                    header={
                        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-neutral-900 border border-white/5 relative overflow-hidden flex items-center justify-center p-4">
                            <div className="w-full max-w-[180px] space-y-2">
                                {/* Skeleton UI */}
                                <motion.div
                                    className="h-2 w-1/3 bg-zinc-800 rounded-full"
                                    animate={{ opacity: [0.5, 1, 0.5] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                />
                                <motion.div
                                    className="h-16 w-full bg-zinc-800/50 rounded-lg border border-white/5"
                                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.05)' }}
                                />
                                <div className="flex gap-2">
                                    <div className="h-8 w-8 rounded-full bg-zinc-800/50" />
                                    <div className="flex-1 space-y-1 py-1">
                                        <div className="h-2 bg-zinc-800 rounded w-3/4"></div>
                                        <div className="h-2 bg-zinc-800 rounded w-1/2"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                    icon={<Zap className="h-4 w-4 text-neutral-300" />}
                />

                {/* 4. Large Feature - Global Scale (Globe/Map) */}
                <BentoItem
                    colSpan={2}
                    title="Global Deployment"
                    description="Edge-cached, globally distributed. We deploy where your users are to ensure sub-100ms latency worldwide."
                    header={
                        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-neutral-950 border border-white/5 relative overflow-hidden flex items-center justify-center">
                            {/* Abstract Map Dots */}
                            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />

                            <div className="relative w-full h-full">
                                {/* Pulse Points */}
                                <motion.div
                                    className="absolute top-1/3 left-1/4 w-3 h-3 bg-blue-500 rounded-full"
                                    animate={{ boxShadow: ['0 0 0 0px rgba(59,130,246,0.5)', '0 0 0 20px rgba(59,130,246,0)'] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                />
                                <div className="absolute top-1/3 left-1/4 -mt-8 -ml-4 text-[10px] font-mono text-blue-400">US-EAST</div>

                                <motion.div
                                    className="absolute top-1/2 left-1/2 w-3 h-3 bg-purple-500 rounded-full"
                                    animate={{ boxShadow: ['0 0 0 0px rgba(168,85,247,0.5)', '0 0 0 20px rgba(168,85,247,0)'], }}
                                    transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                                />
                                <div className="absolute top-1/2 left-1/2 -mt-8 -ml-4 text-[10px] font-mono text-purple-400">EU-WEST</div>

                                <motion.div
                                    className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-emerald-500 rounded-full"
                                    animate={{ boxShadow: ['0 0 0 0px rgba(16,185,129,0.5)', '0 0 0 20px rgba(16,185,129,0)'], }}
                                    transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                                />
                                <div className="absolute bottom-1/3 right-1/4 -mt-8 -ml-4 text-[10px] font-mono text-emerald-400">AP-SOUTH</div>

                                {/* Connecting Lines */}
                                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                                    <motion.path
                                        d="M 25% 33% Q 50% 10% 50% 50%"
                                        fill="none"
                                        stroke="url(#gradient-line-1)"
                                        strokeWidth="1"
                                        strokeDasharray="4 4"
                                    />
                                    <motion.path
                                        d="M 50% 50% Q 75% 80% 75% 66%"
                                        fill="none"
                                        stroke="url(#gradient-line-2)"
                                        strokeWidth="1"
                                        strokeDasharray="4 4"
                                    />
                                    <defs>
                                        <linearGradient id="gradient-line-1" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="rgba(59,130,246,0.5)" />
                                            <stop offset="100%" stopColor="rgba(168,85,247,0.5)" />
                                        </linearGradient>
                                        <linearGradient id="gradient-line-2" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="rgba(168,85,247,0.5)" />
                                            <stop offset="100%" stopColor="rgba(16,185,129,0.5)" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                    }
                    icon={<Globe className="h-4 w-4 text-neutral-300" />}
                />

                {/* 5. Code Quality Feature */}
                <BentoItem
                    title="Clean Code"
                    description="We write self-documenting, typed code. No 'any', no magic strings, just pure, maintainable logic."
                    header={
                        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-neutral-900 border border-white/5 relative overflow-hidden flex items-center justify-center p-4">
                            <div className="w-full font-mono text-[10px] text-zinc-400 leading-snug p-2 rounded bg-black/40 border border-white/5">
                                <span className="text-purple-400">interface</span> <span className="text-yellow-200">System</span> {'{'} <br />
                                &nbsp;&nbsp;<span className="text-blue-400">scale</span>: <span className="text-emerald-400">"global"</span>;<br />
                                &nbsp;&nbsp;<span className="text-blue-400">uptime</span>: <span className="text-emerald-400">99.99</span>;<br />
                                {'}'}
                            </div>
                        </div>
                    }
                    icon={<Code2 className="h-4 w-4 text-neutral-300" />}
                />

            </BentoGrid>

            <style jsx global>{`
                @keyframes flow-right {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(200%); }
                }
                .animate-flow-right {
                    animation: flow-right 2s linear infinite;
                }
            `}</style>
        </section>
    );
};
