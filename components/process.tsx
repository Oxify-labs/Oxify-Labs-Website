"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const steps = [
    {
        step: "01",
        title: "Discovery & Blueprint",
        description: "We don't start coding until we understand the problem. We define the architecture, data models, and user flows before writing a single line.",
        accent: "from-cyan-500 to-blue-500",
    },
    {
        step: "02",
        title: "Agile Engineering",
        description: "Two-week sprints. Continuous deployment. You see progress every single day, not just at the end of the month.",
        accent: "from-purple-500 to-pink-500",
    },
    {
        step: "03",
        title: "Rigorous Testing",
        description: "Automated end-to-end tests, load testing, and security audits ensuring what we launch is bulletproof.",
        accent: "from-orange-500 to-red-500",
    },
    {
        step: "04",
        title: "Global Scale",
        description: "Deployment to edge networks. Zero-downtime migrations. We hand over a system ready for millions of users.",
        accent: "from-emerald-500 to-teal-500",
    }
];

export const Process = () => {
    return (
        <section className="relative w-full py-20 sm:py-24 px-4 sm:px-6 md:px-16 lg:px-24 flex items-center justify-center overflow-hidden bg-transparent">

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className="liquid-glass rounded-full px-6 py-2 mb-8"
                >
                    <span className="text-sm font-medium text-white/90">Product Engineering</span>
                </motion.div>

                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading italic text-white mb-6 sm:mb-8"
                >
                    You define the vision. We build the infrastructure.
                </motion.h2>

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-base sm:text-lg md:text-xl text-white/60 font-body font-light mb-10 sm:mb-12 max-w-2xl"
                >
                    From rapid MVP prototyping to production-ready microservices. We handle the architecture, design, code, and deployment.
                </motion.p>

                {/* Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <a href="mailto:sohomchatterjee07@gmail.com?subject=Start%20a%20Project">
                        <button className="liquid-glass-strong px-6 sm:px-8 py-3.5 sm:py-4 rounded-full flex items-center gap-2 text-white font-medium transition-transform hover:scale-105">
                            Start a Project <ArrowUpRight className="w-4 h-4" />
                        </button>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
