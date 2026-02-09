"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image"; // Assuming we might use this later, or just divs for now
import { Button } from "./ui/button";

export const InternalProjects = () => {
    return (
        <section className="py-32 px-4 border-y border-white/5 relative overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[100px_100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto md:flex items-center justify-between gap-16 relative z-10">
                <div className="md:w-1/2 space-y-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-mono uppercase tracking-widest">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        Internal R&D
                    </div>

                    <h2 className="font-sentient text-5xl md:text-6xl text-white leading-tight">
                        LUMEO <br />
                        <span className="text-zinc-500 italic">Operating System</span>
                    </h2>

                    <p className="font-mono text-zinc-400 text-lg leading-relaxed max-w-md">
                        Our proprietary platform for rapid system deployment.
                        Lumeo is the kernel of our engineering practice—a modular,
                        adaptive substrate for building complex applications.
                    </p>

                    <ul className="space-y-4 font-mono text-sm text-zinc-300">
                        <li className="flex items-center gap-3">
                            <span className="w-1.5 h-1.5 bg-primary/50 rotate-45" />
                            Event-Driven Architecture
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="w-1.5 h-1.5 bg-primary/50 rotate-45" />
                            Real-Time State Synchronization
                        </li>
                        <li className="flex items-center gap-3">
                            <span className="w-1.5 h-1.5 bg-primary/50 rotate-45" />
                            Distributed Edge Compute
                        </li>
                    </ul>

                    <Button className="mt-8 bg-white text-black hover:bg-zinc-200 rounded-full h-12 px-6">
                        Explore Schematic <ArrowUpRight className="ml-2 w-4 h-4" />
                    </Button>
                </div>

                <div className="md:w-1/2 mt-16 md:mt-0 relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="aspect-square rounded-3xl bg-zinc-900 border border-white/10 relative overflow-hidden group hover:border-primary/30 transition-colors duration-500"
                    >
                        {/* Simulated Interface */}
                        <div className="absolute inset-4 rounded-2xl bg-black border border-white/5 flex flex-col overflow-hidden">
                            <div className="h-10 border-b border-white/10 bg-zinc-900/50 flex items-center px-4 gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/20" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                                <div className="w-3 h-3 rounded-full bg-green-500/20" />
                            </div>
                            <div className="flex-1 p-6 font-mono text-xs text-green-500/80 leading-loose">
                                {`> initializing lumeo_core...`} <br />
                                {`> mounting modules [auth, db, events]...`} <br />
                                {`> connection established: wss://api.oxify.io`} <br />
                                {`> syncing state tree...`} <br />
                                <span className="animate-pulse">_</span>
                            </div>
                        </div>

                        {/* Glow effect underneath */}
                        <div className="absolute -inset-4 bg-primary/20 blur-3xl -z-10 opacity-0 group-hover:opacity-50 transition-opacity duration-700" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
