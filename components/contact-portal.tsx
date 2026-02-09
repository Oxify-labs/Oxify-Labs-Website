"use client";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, Loader2 } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
export const ContactPortal = () => {
    const [stage, setStage] = useState<"initial" | "input" | "sending" | "sent">("initial");
    const [email, setEmail] = useState("");

    const handleStart = () => setStage("input");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStage("sending");
        // Simulate API call
        setTimeout(() => {
            setStage("sent");
        }, 2000);
    };

    return (
        <section id="contact" className="py-48 px-4 relative flex items-center justify-center min-h-[80vh] overflow-hidden">
            {/* Ambient Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,217,255,0.05)_0%,transparent_70%)] pointer-events-none" />

            <div className="relative z-10 w-full max-w-2xl text-center">
                {stage === "initial" && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-8"
                    >
                        <h2 className="font-sentient text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tighter mix-blend-color-dodge">
                            Build Something <br />
                            <span className="italic text-primary/80">Inevitable.</span>
                        </h2>

                        <p className="font-mono text-zinc-400 text-lg">
                            Ready to engineer the future?
                        </p>

                        <Button
                            onClick={handleStart}
                            className="bg-white text-black hover:bg-zinc-200 rounded-full h-16 w-64 text-lg font-medium tracking-tight mx-auto group"
                        >
                            Initialize Sequence <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </motion.div>
                )}

                {stage === "input" && (
                    <motion.form
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="w-full relative"
                        onSubmit={handleSubmit}
                    >
                        <button
                            type="button"
                            onClick={() => setStage("initial")}
                            className="absolute -top-16 left-0 text-zinc-500 hover:text-white flex items-center gap-2 font-mono text-xs uppercase tracking-widest"
                        >
                            <ArrowLeft className="w-4 h-4" /> Back
                        </button>

                        <div className="relative group">
                            <input
                                type="email"
                                required
                                placeholder="Identify yourself (email)"
                                className="w-full bg-transparent border-b-2 border-white/10 text-3xl md:text-5xl font-sentient py-8 focus:outline-none focus:border-primary/50 transition-colors placeholder:text-white/10 text-center"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                autoFocus
                            />
                            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 group-focus-within:scale-x-100 transition-transform duration-500 origin-center" />
                        </div>

                        <div className="mt-12 flex justify-center">
                            <Button type="submit" className="bg-white/5 border border-white/10 text-white hover:bg-white/10 rounded-full h-14 px-8">
                                Transmit Request <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                        </div>
                    </motion.form>
                )}

                {stage === "sending" && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex flex-col items-center gap-4"
                    >
                        <Loader2 className="w-12 h-12 text-primary animate-spin" />
                        <p className="font-mono text-sm text-zinc-500 animate-pulse">Establishing secure link...</p>
                    </motion.div>
                )}

                {stage === "sent" && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="space-y-6"
                    >
                        <div className="w-20 h-20 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto border border-emerald-500/50 box-shadow-glow">
                            <Check className="w-10 h-10 text-emerald-500" />
                        </div>
                        <h3 className="font-sentient text-4xl text-white">Signal Received.</h3>
                        <p className="font-mono text-zinc-400">
                            Our systems have logged your interest. <br />
                            An architect will initiate contact shortly.
                        </p>
                        <Button
                            onClick={() => { setStage("initial"); setEmail(""); }}
                            className="mt-8 text-zinc-500 hover:text-white variant-ghost"
                        >
                            Reset Terminal
                        </Button>
                    </motion.div>
                )}
            </div>
        </section>
    );
};
