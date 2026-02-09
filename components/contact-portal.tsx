"use client";

import { motion, AnimatePresence } from "framer-motion";
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
        setTimeout(() => {
            setStage("sent");
        }, 1500);
    };

    return (
        <section id="contact" className="py-32 px-6 relative flex flex-col items-center justify-center min-h-[60vh] border-t border-white/5">

            <div className="relative z-10 w-full max-w-3xl mx-auto text-center">
                <AnimatePresence mode="wait">
                    {stage === "initial" && (
                        <motion.div
                            key="initial"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                            className="space-y-8"
                        >
                            <h2 className="font-sentient text-5xl md:text-7xl leading-tight tracking-tight text-white/90">
                                Ready to build?
                            </h2>

                            <p className="font-sans text-zinc-400 text-lg max-w-xl mx-auto">
                                Let's discuss your infrastructure needs.
                            </p>

                            <a
                                href="mailto:sohomchatterjee07@gmail.com?subject=Project%20Inquiry%20-%20Oxify%20Labs&body=Hi%20Oxify%20Labs%2C%0A%0AI'm%20interested%20in%20discussing%20a%20project.%0A%0A"
                                className="inline-flex items-center bg-white text-black hover:bg-zinc-200 rounded-full h-14 px-8 text-base font-medium transition-all"
                            >
                                Start a Project <ArrowRight className="ml-2 w-4 h-4" />
                            </a>
                        </motion.div>
                    )}

                    {stage === "input" && (
                        <motion.form
                            key="input"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                            className="w-full relative max-w-xl mx-auto"
                            onSubmit={handleSubmit}
                        >
                            <button
                                type="button"
                                onClick={() => setStage("initial")}
                                className="absolute -top-16 left-0 text-zinc-500 hover:text-white flex items-center gap-2 text-sm font-medium transition-colors"
                            >
                                <ArrowLeft className="w-4 h-4" /> Back
                            </button>

                            <div className="relative group">
                                <input
                                    type="email"
                                    required
                                    placeholder="Enter your email"
                                    className="w-full bg-transparent border-b border-white/10 text-3xl md:text-4xl font-sentient py-6 focus:outline-none focus:border-white/50 transition-colors placeholder:text-white/10 text-center text-white"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    autoFocus
                                />
                            </div>

                            <div className="mt-12 flex justify-center">
                                <Button type="submit" className="bg-white text-black hover:bg-zinc-200 rounded-full h-14 px-8 text-base font-medium">
                                    Continue <ArrowRight className="ml-2 w-4 h-4" />
                                </Button>
                            </div>
                        </motion.form>
                    )}

                    {stage === "sending" && (
                        <motion.div
                            key="sending"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex flex-col items-center gap-4"
                        >
                            <Loader2 className="w-8 h-8 text-zinc-500 animate-spin" />
                            <p className="text-sm text-zinc-500">Sending...</p>
                        </motion.div>
                    )}

                    {stage === "sent" && (
                        <motion.div
                            key="sent"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="space-y-6"
                        >
                            <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto border border-emerald-500/20">
                                <Check className="w-8 h-8 text-emerald-500" />
                            </div>
                            <h3 className="font-sentient text-3xl text-white">Received.</h3>
                            <p className="text-zinc-400">
                                We'll be in touch shortly.
                            </p>
                            <Button
                                onClick={() => { setStage("initial"); setEmail(""); }}
                                variant="ghost"
                                className="mt-8 text-zinc-500 hover:text-white hover:bg-transparent"
                            >
                                Send another
                            </Button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};
