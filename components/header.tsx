"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MobileMenu } from "./mobile-menu";

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const menuItems = [
        { name: "About", href: "#about", external: false },
        { name: "LinkedIn", href: "https://www.linkedin.com/company/oxify-labs/", external: true },
        { name: "Email", href: "mailto:sohomchatterjee07@gmail.com", external: true },
    ];

    return (
        <header
            className={cn(
                "fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300",
                isScrolled ? "w-[90%] md:w-[600px]" : "w-[95%] md:w-[700px]"
            )}
        >
            <div className={cn(
                "flex h-14 items-center justify-between px-6 rounded-full border border-white/10 bg-black/50 backdrop-blur-xl shadow-lg shadow-black/20 transition-all duration-300",
                isScrolled ? "bg-black/70 border-white/15" : ""
            )}>
                <Link href="/" className="mr-6 flex items-center space-x-2">
                    <span className="font-bold text-lg tracking-tighter">
                        OXIFY
                    </span>
                </Link>
                <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
                    {menuItems.map((item) => (
                        item.external ? (
                            <a
                                key={item.name}
                                href={item.href}
                                target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                                rel={item.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                                className="transition-colors hover:text-primary relative group py-1 text-muted-foreground"
                            >
                                {item.name}
                                <span className="absolute bottom-0 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
                            </a>
                        ) : (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    "transition-colors hover:text-primary relative group py-1",
                                    pathname === item.href ? "text-foreground" : "text-muted-foreground"
                                )}
                            >
                                {item.name}
                                <span className="absolute bottom-0 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
                            </Link>
                        )
                    ))}
                </nav>
                <div className="flex items-center gap-4">
                    <a href="mailto:sohomchatterjee07@gmail.com?subject=Project%20Inquiry%20-%20Oxify%20Labs" className="hidden sm:block">
                        <button className="text-xs font-mono bg-white/10 hover:bg-white/20 text-white px-4 py-1.5 rounded-full transition-colors border border-white/5">
                            LET'S TALK
                        </button>
                    </a>
                    <MobileMenu />
                </div>
            </div>
        </header>
    );
}
