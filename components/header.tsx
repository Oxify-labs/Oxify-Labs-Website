"use client";

import Link from "next/link";
import { Logo } from "./logo";
import { MobileMenu } from "./mobile-menu";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-center pointer-events-none pt-4">
      <header
        className={cn(
          "pointer-events-auto flex items-center justify-between transition-all duration-300 ease-in-out border border-white/10 rounded-full bg-background/50 backdrop-blur-md",
          isScrolled
            ? "py-2 px-4 shadow-lg w-[90%] md:w-auto gap-12 bg-background/80"
            : "py-4 px-8 w-[90%] md:w-fit gap-8 bg-background/40"
        )}
      >
        <Link href="/" className="shrink-0">
          <Logo className={cn("transition-all duration-300 text-white fill-white stroke-white", isScrolled ? "w-[40px]" : "w-[50px]")} />
        </Link>
        <nav className={cn("hidden md:flex items-center justify-center gap-8 transition-all duration-300", isScrolled ? "gap-6" : "gap-10")}>
          {["About", "Portfolio", "Insights", "Contact"].map((item) => (
            <Link
              className="uppercase inline-block font-mono text-xs tracking-wider text-foreground/80 hover:text-foreground/100 duration-150 transition-colors ease-out"
              href={`#${item.toLowerCase()}`}
              key={item}
            >
              {item}
            </Link>
          ))}
        </nav>

        <MobileMenu className="md:hidden" />
      </header>
    </div>
  );
};
