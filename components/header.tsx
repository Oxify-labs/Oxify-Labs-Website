"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Header() {
    const menuItems = [
        { name: "Home", href: "/", external: false },
        { name: "Team", href: "/teams", external: false },
    ];

    return (
        <header className="fixed top-4 left-0 right-0 z-50 px-3 sm:px-6 mt-2 sm:mt-4">
            <div className="mx-auto max-w-7xl w-full grid grid-cols-[auto_1fr_auto] md:grid-cols-[1fr_auto_1fr] items-center gap-2 sm:gap-4">
                {/* Left: Brand */}
                <Link href="/" className="justify-self-start inline-flex flex-col leading-none">
                    <span className="font-heading italic text-white text-lg sm:text-xl md:text-2xl tracking-tight">
                        Oxify Labs
                    </span>
                </Link>

                {/* Mobile Nav */}
                <nav className="md:hidden justify-self-center flex items-center gap-2 px-3 py-2 rounded-full liquid-glass text-xs font-medium text-foreground/90">
                    {menuItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="transition-colors hover:text-white"
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* Center: Navigation Pill */}
                <nav className="hidden md:flex items-center gap-8 px-8 py-3 rounded-full liquid-glass text-sm font-medium text-foreground/90 justify-self-center">
                    {menuItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="transition-colors hover:text-white"
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* Right: CTA */}
                <a href="mailto:sohomchatterjee07@gmail.com?subject=Project%20Inquiry" className="justify-self-end">
                    <button className="flex items-center gap-2 bg-white text-black px-3 sm:px-5 md:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm md:text-base font-medium transition-transform hover:scale-105 whitespace-nowrap">
                        <span className="hidden sm:inline">Start a Project</span>
                        <span className="sm:hidden">Start</span>
                        <ArrowUpRight className="w-4 h-4" />
                    </button>
                </a>
            </div>
        </header>
    );
}
