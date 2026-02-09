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
        { name: "About", href: "#about" },
        { name: "Portfolio", href: "#portfolio" },
        { name: "Insights", href: "#insights" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <header
            className={cn(
                "fixed top-0 z-50 w-full transition-all duration-300",
                isScrolled
                    ? "bg-background/80 backdrop-blur-md border-b border-border/40 py-2"
                    : "bg-transparent py-4"
            )}
        >
            <div className="container flex h-12 items-center justify-between px-4 md:px-6 mx-auto">
                <Link href="/" className="mr-6 flex items-center space-x-2">
                    <span className="font-bold text-xl tracking-tighter">
                        OXIFY LABS
                    </span>
                </Link>
                <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
                    {menuItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={cn(
                                "transition-colors hover:text-primary relative group",
                                pathname === item.href ? "text-foreground" : "text-muted-foreground"
                            )}
                        >
                            {item.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                        </Link>
                    ))}
                </nav>
                <div className="flex items-center gap-4">
                    {/* Add any CTA buttons here if needed */}
                    <MobileMenu />
                </div>
            </div>
        </header>
    );
}
