"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Header() {
    const menuItems = [
        { name: "Home", href: "/", external: false },
        { name: "Team", href: "/teams", external: false },
        { name: "Capabilities", href: "/#capabilities", external: false },
        { name: "Philosophy", href: "/#philosophy", external: false },
        { name: "Stack", href: "/#stack", external: false },
    ];

    return (
        <header className="fixed top-4 left-0 right-0 z-50 px-6 mt-4">
            <div className="mx-auto max-w-7xl w-full flex items-center justify-between">
                {/* Left: Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <img src="/logo.svg" alt="Oxify Labs" className="w-12 h-12" />
                </Link>

                {/* Center: Navigation Pill */}
                <nav className="hidden md:flex items-center gap-8 px-8 py-3 rounded-full liquid-glass text-sm font-medium text-foreground/90">
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
                <a href="mailto:sohomchatterjee07@gmail.com?subject=Project%20Inquiry">
                    <button className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-medium transition-transform hover:scale-105">
                        Start a Project <ArrowUpRight className="w-4 h-4" />
                    </button>
                </a>
            </div>
        </header>
    );
}
