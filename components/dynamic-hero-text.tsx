"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const STATEMENTS = [
    { top: "Build For", bottom: "The Decade" },
    { top: "Systems For", bottom: "Entropy" },
    { top: "Scale Without", bottom: "Gravity" },
    { top: "Code Is", bottom: "Infrastructure" },
];

export const DynamicHeroText = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        setIndex(Math.floor(Math.random() * STATEMENTS.length));
    }, []);

    const statement = STATEMENTS[index];

    return (
        <h1 className="font-sentient text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tighter text-balance uppercase leading-[0.85] mb-8 min-h-[1.7em]">
            <AnimatePresence mode="wait">
                <motion.div
                    key={`statement-${index}`}
                    initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                    <span className="block">{statement.top}</span>
                    <span className="block text-foreground/40 italic">{statement.bottom}</span>
                </motion.div>
            </AnimatePresence>
        </h1>
    );
};
