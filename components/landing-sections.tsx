"use client";

import { Pill } from "@/components/pill";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Cpu, Layers, Zap, Clock, Shield, Code, BarChart3 } from "lucide-react";
import { SystemStatus } from "@/components/system-status";

interface SectionProps {
    setHovering: (hovering: boolean) => void;
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

const containerVariants = {
    visible: { transition: { staggerChildren: 0.1 } }
};

export function LandingSections({ setHovering }: SectionProps) {
    return (
        <div className="w-full max-w-7xl mx-auto px-4 pb-32 relative z-10 space-y-32">

            {/* Hero-ish Statement */}
            <section className="text-center py-20">
                <motion.p
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="text-2xl md:text-4xlfont-sentient leading-tight max-w-4xl mx-auto text-foreground/90 font-light"
                >
                    We build the <span className="text-primary italic">nervous systems</span> of digital business. <br className="hidden md:block" />
                    Resilient. Scalable. Inevitable.
                </motion.p>
            </section>

            {/* Bento Grid: Capabilities */}
            <section id="about" className="space-y-12">
                <div className="flex items-center gap-4">
                    <Pill>CAPABILITIES</Pill>
                    <div className="h-px bg-white/10 flex-1" />
                </div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {/* Card 1: Architecture */}
                    <motion.div variants={itemVariants} className="md:col-span-2 group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 hover:bg-white/10 transition-colors duration-500">
                        <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity">
                            <Layers size={120} strokeWidth={0.5} />
                        </div>
                        <div className="relative z-10 h-full flex flex-col justify-between space-y-8">
                            <div className="size-12 rounded-full bg-white/10 flex items-center justify-center">
                                <Layers className="text-primary" size={24} />
                            </div>
                            <div>
                                <h3 className="font-sentient text-3xl md:text-4xl mb-4">System Architecture</h3>
                                <p className="font-mono text-sm text-foreground/60 max-w-md leading-relaxed">
                                    We design foundational structures that support years of product evolution without collapse.
                                    Thinking in decades, not sprints.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 2: Engineering */}
                    <motion.div variants={itemVariants} className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 hover:bg-white/10 transition-colors duration-500">
                        <div className="absolute -bottom-4 -right-4 opacity-10 group-hover:opacity-30 transition-opacity">
                            <Code size={140} strokeWidth={0.5} />
                        </div>
                        <div className="relative z-10 h-full flex flex-col justify-between space-y-8">
                            <div className="size-12 rounded-full bg-white/10 flex items-center justify-center">
                                <Cpu className="text-primary" size={24} />
                            </div>
                            <div>
                                <h3 className="font-sentient text-2xl md:text-3xl mb-4">Engineering</h3>
                                <p className="font-mono text-sm text-foreground/60 leading-relaxed">
                                    Clean, maintainable, and correct code. Zero technical debt from day one.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 3: Strategy */}
                    <motion.div variants={itemVariants} className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 hover:bg-white/10 transition-colors duration-500">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 group-hover:opacity-30 transition-opacity">
                            <BarChart3 size={180} strokeWidth={0.2} />
                        </div>
                        <div className="relative z-10 h-full flex flex-col justify-between space-y-8 text-center items-center">
                            <div className="size-12 rounded-full bg-white/10 flex items-center justify-center">
                                <Zap className="text-primary" size={24} />
                            </div>
                            <div>
                                <h3 className="font-sentient text-2xl md:text-3xl mb-4">Strategy</h3>
                                <p className="font-mono text-sm text-foreground/60 leading-relaxed">
                                    Aligning technical choices with long-term business compounding.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 4: Philosophy - Wide */}
                    <motion.div variants={itemVariants} className="md:col-span-2 group relative overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br from-white/5 to-white/2 p-8 hover:border-white/20 transition-all duration-500">
                        <div className="flex flex-col md:flex-row gap-8 items-start md:items-center justify-between h-full">
                            <div className="space-y-6 md:w-1/2">
                                <div className="size-12 rounded-full bg-white/10 flex items-center justify-center">
                                    <Shield className="text-primary" size={24} />
                                </div>
                                <h3 className="font-sentient text-3xl md:text-4xl">The <span className="italic text-primary">Oxify</span> Standard</h3>
                                <p className="font-mono text-sm text-foreground/60 leading-relaxed">
                                    We don't just ship features. We ship capabilities. Every line of code is a liability; we ensure it pays rent.
                                </p>
                            </div>
                            <div className="md:w-1/2 border-l border-white/10 md:pl-8 space-y-4">
                                <div className="flex items-center gap-4">
                                    <Clock className="text-foreground/40" size={20} />
                                    <span className="font-mono text-sm text-foreground/80">Built for 10+ year longevity</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Zap className="text-foreground/40" size={20} />
                                    <span className="font-mono text-sm text-foreground/80">Performance as a feature</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Layers className="text-foreground/40" size={20} />
                                    <span className="font-mono text-sm text-foreground/80">Modular by default</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </section>

            {/* Section: Who It's For */}
            <section id="portfolio" className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                    <div className="flex items-center gap-4">
                        <Pill>PARTNERS</Pill>
                        <div className="h-px bg-white/10 w-24" />
                    </div>
                    <h2 className="font-sentient text-4xl md:text-6xl leading-[1.1]">
                        Founders who value <br />
                        <span className="text-white bg-white/10 px-2 italic">stability</span> over velocity.
                    </h2>
                    <div className="space-y-6">
                        <p className="font-mono text-foreground/80 text-lg border-l-2 border-primary pl-6">
                            "We need a technical partner, not just a dev shop."
                        </p>
                        <p className="font-mono text-foreground/80 text-lg border-l-2 border-white/20 pl-6">
                            "We are building for the next ten years."
                        </p>
                    </div>
                    <Link href="#contact">
                        <Button variant="default" className="mt-8 rounded-full" onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}>
                            View Case Studies <ArrowUpRight className="ml-2" size={16} />
                        </Button>
                    </Link>
                </div>
                <div className="relative w-full aspect-square md:aspect-auto md:h-[600px] group">
                    <SystemStatus />
                </div>
            </section>

            {/* Why Oxify */}
            <section id="insights" className="relative py-24 overflow-hidden rounded-[3rem] bg-white/2 border border-white/5">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 bg-primary/20 blur-[120px] rounded-full pointer-events-none" />

                <div className="relative z-10 text-center space-y-12 max-w-4xl mx-auto px-6">
                    <Pill>THE PROMISE</Pill>
                    <h2 className="font-sentient text-4xl md:text-6xl leading-tight">
                        Most agencies sell you speed. <br />
                        <span className="text-primary italic">We sell you sleep.</span>
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8 text-left max-w-2xl mx-auto">
                        <div className="p-8 rounded-2xl bg-linear-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-md hover:border-white/20 transition-colors duration-300">
                            <h4 className="font-mono text-primary text-sm mb-4">01</h4>
                            <p className="font-sentient text-2xl leading-tight">You will not wake up to a pager.</p>
                        </div>
                        <div className="p-8 rounded-2xl bg-linear-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-md hover:border-white/20 transition-colors duration-300">
                            <h4 className="font-mono text-primary text-sm mb-4">02</h4>
                            <p className="font-sentient text-2xl leading-tight">You will not rewrite this in six months.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section id="contact" className="py-32 text-center space-y-10 relative">
                <div className="absolute inset-0 bg-linear-to-t from-primary/5 to-transparent pointer-events-none" />
                <h2 className="font-sentient text-5xl md:text-8xl tracking-tight relative z-10">
                    Build something <br /> <span className="italic text-white/50">inevitable.</span>
                </h2>
                <Link className="inline-block relative z-10" href="mailto:hello@oxifylabs.com">
                    <Button
                        className="h-14 px-6 text-base rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors duration-300"
                        onMouseEnter={() => setHovering(true)}
                        onMouseLeave={() => setHovering(false)}
                    >
                        Start the conversation <ArrowUpRight className="ml-2" size={20} />
                    </Button>
                </Link>
            </section>

        </div>
    );
}
