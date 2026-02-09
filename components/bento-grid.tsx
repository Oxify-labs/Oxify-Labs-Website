"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ReactNode } from "react";

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
                "grid md:auto-rows-[22rem] grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto",
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
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={cn(
                "row-span-1 rounded-3xl group/bento bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-500 p-8 flex flex-col justify-between space-y-4 relative overflow-hidden",
                colSpan === 2 ? "md:col-span-2" : colSpan === 3 ? "md:col-span-3" : "md:col-span-1",
                className
            )}
        >
            {/* Header Content (Visuals) */}
            {header && (
                <div className="flex-1 w-full min-h-24 rounded-xl overflow-hidden relative z-10">
                    {header}
                </div>
            )}

            {/* Content */}
            <div className="relative z-10 flex flex-col gap-4">
                {icon && (
                    <div className="size-12 rounded-full bg-white/10 flex items-center justify-center text-primary">
                        {icon}
                    </div>
                )}
                <div>
                    {title && (
                        <div className="font-sentient text-2xl md:text-3xl mb-2 text-foreground">
                            {title}
                        </div>
                    )}
                    {description && (
                        <div className="font-mono text-sm text-foreground/60 leading-relaxed">
                            {description}
                        </div>
                    )}
                </div>
            </div>
        </motion.div>
    );
};
