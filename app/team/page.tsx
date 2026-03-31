"use client";

import { Pill } from "@/components/pill";
import { ProfileCard } from "@/components/profile-card";

const BOARD_OF_DIRECTORS = [
    {
        name: "Rohit Kumar Kundu",
        role: "Executive Chairman & CEO",
        bio: "Leads corporate strategy, fundraising, and the overall company vision.",
        image: "/Rohit.jpeg",
        socials: {
            linkedin: "https://linkedin.com/in/rohit-kumar-kundu/",
            email: "mailto:rohit.kundu@oxifylabs.app"
        }
    },
    {
        name: "Sohom Chatterjee",
        role: "Director & Founder",
        bio: "Drives strategic R&D, innovation, and technical breakthroughs across Oxify Labs.",
        image: "/Sohom.jpeg",
        socials: {
            linkedin: "https://linkedin.com/in/sohom-chatterjee-61828a312/",
            email: "mailto:sohomchatterjee07@oxifylabs.app"
        }
    },
    {
        name: "Krishnendu Samanta",
        role: "Director & CTO",
        bio: "Oversees engineering excellence, infrastructure, and technical execution.",
        image: "/krishnendu.JPEG",
        socials: {
            linkedin: "https://linkedin.com/in/krishnendu-samanta-25302a238/",
            email: "mailto:skrishnendu115@oxifylabs.app"
        }
    },
    {
        name: "Debojyoti Banerjee",
        role: "Director & CPO",
        bio: "Leads product-market fit, user experience, and the long-term product roadmap.",
        image: "/Debojyoti.jpeg",
        socials: {
            linkedin: "https://linkedin.com/in/debojyoti-banerjee30/",
            email: "mailto:debojyotibanerjee18@oxifylabs.app"
        }
    }
];

const EXECUTIVE_LEADERSHIP = [
    {
        name: "Rohit Kumar Kundu",
        role: "Chief Executive Officer (CEO)",
        bio: "Corporate strategy, fundraising, and overall company vision.",
        image: "/Rohit.jpeg",
        socials: {
            linkedin: "https://linkedin.com/in/rohit-kumar-kundu/",
            email: "mailto:rohit.kundu@oxifylabs.app"
        }
    },
    {
        name: "Sohom Chatterjee",
        role: "Founder & Chief AI/ML Researcher",
        bio: "Strategic R&D, innovation, and technical breakthroughs.",
        image: "/Sohom.jpeg",
        socials: {
            linkedin: "https://linkedin.com/in/sohom-chatterjee-61828a312/",
            email: "mailto:sohomchatterjee07@oxifylabs.app"
        }
    },
    {
        name: "Krishnendu Samanta",
        role: "Chief Technology Officer (CTO)",
        bio: "Engineering excellence, infrastructure, and technical execution.",
        image: "/krishnendu.JPEG",
        socials: {
            linkedin: "https://linkedin.com/in/krishnendu-samanta-25302a238/",
            email: "mailto:skrishnendu115@oxifylabs.app"
        }
    },
    {
        name: "Debojyoti Banerjee",
        role: "Chief Product Officer (CPO)",
        bio: "Product-market fit, user experience, and product roadmap.",
        image: "/Debojyoti.jpeg",
        socials: {
            linkedin: "https://linkedin.com/in/debojyoti-banerjee30/",
            email: "mailto:debojyotibanerjee18@oxifylabs.app"
        }
    },
    {
        name: "Sagnik Koley",
        role: "Design Lead",
        bio: "Brand identity and UI/UX design language.",
        image: "/Sagnik.jpeg",
        socials: {
            linkedin: "https://linkedin.com/in/sagnik-koley-624194320/",
            email: "mailto:sagnik.k@oxifylabs.app"
        }
    },
    {
        name: "Prachi Jha",
        role: "Head of Marketing & Outreach",
        bio: "Growth hacking, PR, and ecosystem expansion.",
        image: "/prachi.png",
        socials: {
            linkedin: "https://www.linkedin.com/in/prachi-jha-297b962b3",
            email: "mailto:prachi.jha@oxifylabs.app"
        }
    },
];

export default function TeamPage() {
    return (
        <main className="relative z-10 min-h-screen pt-28 sm:pt-32 pb-20 px-4 sm:px-6 md:px-10 lg:px-16">
            <div className="max-w-7xl mx-auto w-full">
                <div className="space-y-6 max-w-3xl mb-12 md:mb-16">
                    <Pill>LEADERSHIP</Pill>
                    <h1 className="font-heading italic text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-foreground leading-[0.95]">
                        The People Building Oxify Labs
                    </h1>
                    <p className="font-body font-light text-white/70 text-base md:text-lg max-w-2xl">
                        Meet the board and executive leaders shaping our vision, product, and growth.
                    </p>
                </div>

                <section className="mb-16 md:mb-20">
                    <div className="mb-8 space-y-3">
                        <Pill>BOARD OF DIRECTORS</Pill>
                        <p className="font-body font-light text-white/70 text-base md:text-lg max-w-3xl">
                            Strategic leadership guiding the long-term direction and governance of Oxify Labs.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
                        {BOARD_OF_DIRECTORS.map((member) => (
                            <div key={member.name} className="h-full min-h-[380px] md:min-h-[400px]">
                                <ProfileCard {...member} />
                            </div>
                        ))}
                    </div>
                </section>

                <section>
                    <div className="mb-8 space-y-3">
                        <Pill>EXECUTIVE LEADERSHIP</Pill>
                        <p className="font-body font-light text-white/70 text-base md:text-lg max-w-3xl">
                            The operators, researchers, builders, and creatives driving execution across the company.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
                        {EXECUTIVE_LEADERSHIP.map((member) => (
                            <div key={`${member.name}-${member.role}`} className="h-full min-h-[380px] md:min-h-[400px]">
                                <ProfileCard {...member} />
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}
