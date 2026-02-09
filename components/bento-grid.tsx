"use client";

import { cn } from "@/lib/utils";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent, ReactNode } from "react";

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children: ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto auto-rows-[20rem]",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoItem = ({
    className,
    title,
    description,
    header,
    icon,
    colSpan = 1,
}: {
    className?: string;
    title?: string | ReactNode;
    description?: string | ReactNode;
    header?: ReactNode;
    icon?: ReactNode;
    colSpan?: 1 | 2 | 3;
}) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = ({ currentTarget, clientX, clientY }: MouseEvent) => {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            onMouseMove={handleMouseMove}
            className={cn(
                "row-span-1 rounded-3xl group/bento hover:shadow-xl transition duration-300 shadow-input dark:shadow-none p-6 bg-card border border-white/5 flex flex-col space-y-4 relative overflow-hidden",
                colSpan === 2 ? "md:col-span-2" : colSpan === 3 ? "md:col-span-3" : "md:col-span-1",
                className
            )}
        >
            {/* Spotlight Effect */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover/bento:opacity-100"
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

            {/* Inner Border Highlight */}
            <motion.div
                className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition duration-300 group-hover/bento:opacity-100 border border-white/10"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(255,255,255,0.03),
              transparent 80%
            )
          `,
                }}
            />

            {/* Header Content (Visuals) */}
            <div className="flex-1 w-full min-h-[6rem] rounded-xl overflow-hidden relative z-10 transition-transform duration-500 group-hover/bento:scale-[1.01]">
                {header}
            </div>

            {/* Text Content */}
            <div className="group-hover/bento:translate-x-1 transition duration-300 relative z-10">
                <div className="mb-2 w-fit p-2 rounded-lg bg-white/5 border border-white/5 backdrop-blur-sm text-neutral-300 group-hover/bento:text-white group-hover/bento:bg-white/10 transition-colors">
                    {icon}
                </div>
                <div className="font-sentient text-lg font-medium text-neutral-100 mb-1 mt-2">
                    {title}
                </div>
                <div className="font-sans font-normal text-neutral-400 text-sm leading-relaxed">
                    {description}
                </div>
            </div>
        </motion.div>
    );
};
