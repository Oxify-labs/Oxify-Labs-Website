"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { usePathname } from "next/navigation";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

export function Header() {
    const pathname = usePathname();
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
        setIsScrolled(latest > 50);
    });

    const menuItems = [
        { name: "Home", href: "/", external: false },
        { name: "Team", href: "/teams", external: false },
    ];

    const isActive = (href: string) => {
        if (href === "/") return pathname === "/";
        if (href === "/teams") return pathname.startsWith("/team");
        return pathname === href;
    };

    return (
        <motion.header 
            variants={{
                visible: { y: 0 },
                hidden: { y: "-100%" }
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${isScrolled ? 'bg-black/90 backdrop-blur-md border-b border-white/10' : 'bg-transparent border-b-transparent'}`}
        >
            <div className="mx-auto max-w-7xl w-full flex items-center justify-between px-6 py-4 md:py-6">
                {/* Left: Brand */}
                <Link href="/" className="inline-flex group relative overflow-hidden">
                    <span className="font-heading font-bold uppercase tracking-tighter text-white text-2xl z-10">
                        Oxify Labs
                    </span>
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                </Link>

                {/* Center: Navigation */}
                <nav className="hidden md:flex items-center gap-10">
                    {menuItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`relative font-heading font-bold uppercase tracking-widest text-sm transition-colors group py-2 ${isActive(item.href) ? "text-white" : "text-white/50 hover:text-white"}`}
                        >
                            {item.name}
                            {isActive(item.href) && (
                                <motion.span 
                                    layoutId="nav-indicator"
                                    className="absolute left-0 bottom-0 w-full h-[2px] bg-white"
                                />
                            )}
                            {!isActive(item.href) && (
                                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-white/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                            )}
                        </Link>
                    ))}
                </nav>

                {/* Right: CTA */}
                <a href="#contact" className="relative group">
                    <div className="absolute inset-0 bg-white/20 blur-md group-hover:bg-white/40 transition-all duration-300 pointer-events-none" />
                    <button className="relative flex items-center gap-2 bg-white text-black px-6 py-3 font-heading font-bold uppercase tracking-widest text-sm transition-transform duration-300 hover:scale-[1.05]">
                        <span className="hidden sm:inline">Start Project</span>
                        <span className="sm:hidden">Start</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                </a>
            </div>
        </motion.header>
    );
}
