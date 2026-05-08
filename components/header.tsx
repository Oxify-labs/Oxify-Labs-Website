"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { usePathname } from "next/navigation";

export function Header() {
    const pathname = usePathname();

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
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/20">
            <div className="mx-auto max-w-7xl w-full flex items-center justify-between px-6 py-4">
                {/* Left: Brand */}
                <Link href="/" className="inline-flex">
                    <span className="font-heading font-bold uppercase tracking-tighter text-white text-2xl">
                        Oxify Labs
                    </span>
                </Link>

                {/* Center: Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {menuItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`font-heading font-bold uppercase tracking-widest text-sm transition-colors ${isActive(item.href) ? "text-white" : "text-white/50 hover:text-white"}`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* Right: CTA */}
                <a href="#contact">
                    <button className="flex items-center gap-2 bg-white text-black px-6 py-3 font-heading font-bold uppercase tracking-widest text-sm transition-colors hover:bg-zinc-200">
                        <span className="hidden sm:inline">Start Project</span>
                        <span className="sm:hidden">Start</span>
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </a>
            </div>
        </header>
    );
}
