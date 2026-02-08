"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const hexChars = "0123456789ABCDEF";
const randomHex = (length: number) =>
    Array.from({ length }, () => hexChars[Math.floor(Math.random() * hexChars.length)]).join("");

export function SystemStatus() {
    const [logs, setLogs] = useState<string[]>([]);

    useEffect(() => {
        const interval = setInterval(() => {
            setLogs((prev) => {
                const newLog = `> SYS_CHK: 0x${randomHex(4)}... [OK]`;
                const updated = [newLog, ...prev];
                return updated.slice(0, 6); // Keep last 6 logs
            });
        }, 800);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-full min-h-[400px] md:h-[600px] bg-black/40 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-xl group">
            {/* Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-size-[40px_40px] mask-[radial-gradient(ellipse_at_center,black_60%,transparent_100%)]" />

            {/* Central Rotating Rings */}
            <div className="absolute inset-0 flex items-center justify-center">
                {/* Outer Ring */}
                <motion.div
                    className="w-64 h-64 md:w-96 md:h-96 rounded-full border border-primary/20 border-dashed"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                />
                {/* Middle Ring */}
                <motion.div
                    className="absolute w-48 h-48 md:w-72 md:h-72 rounded-full border border-white/10"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-white/50 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                </motion.div>
                {/* Inner Core */}
                <motion.div
                    className="absolute w-32 h-32 md:w-48 md:h-48 rounded-full border-2 border-primary/50 flex items-center justify-center bg-primary/5"
                    animate={{ scale: [1, 1.05, 1], opacity: [0.8, 1, 0.8] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                    <div className="text-primary font-mono text-xl tracking-widest font-bold">99.99%</div>
                </motion.div>
            </div>

            {/* Scanning Line */}
            <motion.div
                className="absolute inset-0 bg-linear-to-b from-transparent via-primary/5 to-transparent h-[15%]"
                animate={{ top: ["-20%", "120%"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />

            {/* Interface Elements */}
            <div className="absolute top-6 left-6 flex items-center gap-2">
                <div className="size-2 bg-green-500 rounded-full animate-pulse" />
                <span className="font-mono text-xs text-white/60 tracking-widest">SYSTEM_INTEGRITY: OPTIMAL</span>
            </div>

            <div className="absolute top-6 right-6">
                <div className="flex gap-1">
                    {[...Array(3)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="w-1 h-1 bg-white/20"
                            animate={{ opacity: [0.2, 1, 0.2] }}
                            transition={{ duration: 1.5, delay: i * 0.2, repeat: Infinity }}
                        />
                    ))}
                </div>
            </div>

            {/* Live Logs */}
            <div className="absolute bottom-6 left-6 font-mono text-[10px] md:text-xs text-white/40 space-y-1 w-full max-w-[200px]">
                {logs.map((log, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1 - i * 0.15, x: 0 }}
                        className="truncate"
                    >
                        {log}
                    </motion.div>
                ))}
            </div>

            <div className="absolute bottom-6 right-6 border border-white/10 px-3 py-1 rounded-full bg-black/20">
                <span className="font-mono text-[10px] text-primary tracking-wider">SECURE_CONNECTION</span>
            </div>
        </div>
    );
}
