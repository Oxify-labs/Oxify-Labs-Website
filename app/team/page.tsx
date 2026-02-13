"use client";

import { Pill } from "@/components/pill";
import { ProfileCard } from "@/components/profile-card";

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
        <main className="min-h-screen pt-32 pb-20 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="space-y-6 max-w-2xl mb-16">
                    <Pill>THE SQUAD</Pill>
                    <h1 className="font-sentient text-5xl md:text-7xl font-light tracking-tight text-foreground">
                        Our Team
                    </h1>
                    <p className="font-mono text-muted-foreground text-lg">
                        Engineers, designers, and thinkers crafting the future.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {TEAM.map((member) => (
                        <div key={member.name} className="h-full min-h-[400px]">
                            <ProfileCard {...member} />
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
