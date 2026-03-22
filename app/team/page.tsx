"use client";

import { Pill } from "@/components/pill";
import { ProfileCard } from "@/components/profile-card";
import Link from "next/link";

// Sample Data - Replace with real info
const TEAM = [
    {
        name: "Sohom Chatterjee",
        role: "CEO & AI/ML Researcher",
        bio: "Leading the vision of Oxify Labs and pushing the boundaries of Artificial Intelligence research.",
        image: "/Sohom.jpeg",
        socials: {
            linkedin: "https://linkedin.com/in/sohom-chatterjee-61828a312/",
            email: "mailto:sohomchatterjee07@gmail.com"
        }
    },
    {
        name: "Rohit Kumar Kundu",
        role: "COO & Co-Founder",
        bio: "Driving operational excellence and strategic growth initiatives for the company.",
        image: "/Rohit.jpeg",
        socials: {
            linkedin: "https://linkedin.com/in/rohit-kumar-kundu/",
            email: "mailto:kundurohit53@gmail.com"
        }
    },
    {
        name: "Krishnendu Samanta",
        role: "CTO & Product Lead",
        bio: "Architecting scalable product solutions and leading technical innovation.",
        image: "/krishnendu.JPEG",
        socials: {
            linkedin: "https://linkedin.com/in/krishnendu-samanta-25302a238/",
            email: "mailto:skrishnendu115@gmail.com"
        }
    },
    {
        name: "Sagnik Koley",
        role: "Marketing and Design Lead",
        bio: "Crafting the brand identity and driving user engagement through design-led marketing.",
        image: "/Sagnik.jpeg", 
        socials: {
            linkedin: "https://linkedin.com/in/sagnik-koley-624194320/",
            email: "mailto:rikkoley933@gmail.com"
        }
    },
    {
        name: "Debojyoti Banerjee",
        role: "Founding Team Member & Product Lead",
        bio: "Building core product features and ensuring product-market fit from day one.",
        image: "/Debojyoti.jpeg",
        socials: {
            linkedin: "https://linkedin.com/in/debojyoti-banerjee30/",
            email: "mailto:debojyotibanerjee18@gmail.com"
        }
    },
];

export default function TeamPage() {
    return (
        <main className="relative z-10 min-h-screen pt-32 pb-20 px-6 md:px-10 lg:px-16">
            <div className="max-w-7xl mx-auto w-full">
                <div className="space-y-6 max-w-3xl mb-12 md:mb-16">
                    <Pill>THE SQUAD</Pill>
                    <h1 className="font-heading italic text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-foreground leading-[0.95]">
                        Our Team
                    </h1>
                    <p className="font-body font-light text-white/70 text-base md:text-lg max-w-2xl">
                        Engineers, designers, and thinkers crafting the future.
                    </p>
                    <div className="flex flex-wrap items-center gap-4 pt-2">
                        <Link href="/#capabilities" className="liquid-glass-strong px-5 py-2.5 rounded-full text-sm font-medium text-white hover:text-white/90 transition-colors">
                            Explore Capabilities
                        </Link>
                        <Link href="/#stack" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
                            View Stack
                        </Link>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
                    {TEAM.map((member) => (
                        <div key={member.name} className="h-full min-h-[380px] md:min-h-[400px]">
                            <ProfileCard {...member} />
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
