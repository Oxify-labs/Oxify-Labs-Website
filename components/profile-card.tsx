"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

interface ProfileCardProps {
    name: string;
    role: string;
    bio: string;
    image: string;
    socials?: {
        github?: string;
        linkedin?: string;
        twitter?: string;
        email?: string;
    };
    imageClassName?: string;
    imageStyle?: React.CSSProperties;
}

export function ProfileCard({ name, role, bio, image, socials, imageClassName, imageStyle }: ProfileCardProps) {
    const ref = useRef<HTMLDivElement>(null);

    // Mouse position relative to the element (for gradient)
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Mouse position relative to the center (for rotation)
    const centerX = useMotionValue(0);
    const centerY = useMotionValue(0);

    // Smooth movement for gradient
    const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
    const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

    // Smooth movement for rotation
    const rotateXSpring = useSpring(centerY, { stiffness: 150, damping: 15 });
    const rotateYSpring = useSpring(centerX, { stiffness: 150, damping: 15 });

    // Calculate rotation: moves up/down -> rotates around X axis, moves left/right -> rotates around Y axis
    const rotateX = useTransform(rotateXSpring, [-150, 150], ["-20deg", "20deg"]);
    const rotateY = useTransform(rotateYSpring, [-150, 150], ["20deg", "-20deg"]);

    const gradient = useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgba(255,255,255,0.1), transparent 80%)`;

    function handleMouseMove({ clientX, clientY }: React.MouseEvent<HTMLDivElement>) {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();

        const xPos = clientX - rect.left;
        const yPos = clientY - rect.top;

        x.set(xPos);
        y.set(yPos);

        const centerXPos = xPos - rect.width / 2;
        const centerYPos = yPos - rect.height / 2;

        centerX.set(centerXPos);
        centerY.set(centerYPos);
    }

    function handleMouseLeave() {
        centerX.set(0);
        centerY.set(0);
    }

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transformStyle: "preserve-3d",
                rotateX,
                rotateY,
            }}
            className="group relative h-full w-full rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md transition-colors hover:border-white/20"
        >
            {/* Hover Gradient Overlay */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{ background: gradient }}
            />

            <div className="relative flex flex-col p-6 h-full" style={{ transform: "translateZ(20px)" }}>
                {/* Image */}
                <div className="mb-6 overflow-hidden rounded-xl border border-white/5 bg-black/20 p-2">
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
                        <Image
                            src={image}
                            alt={name}
                            fill
                            className={`object-cover object-top transition-transform duration-500 group-hover:scale-105 ${imageClassName || ""}`}
                            style={imageStyle}
                        />
                    </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                    <h3 className="font-sentient text-2xl font-medium text-foreground">{name}</h3>
                    <p className="font-mono text-xs text-muted-foreground mt-2 uppercase tracking-wider">{role}</p>
                    <p className="mt-4 text-sm text-foreground/80 leading-relaxed font-light">
                        {bio}
                    </p>
                </div>

                {/* Socials */}
                <div className="mt-6 flex items-center gap-4 border-t border-white/10 pt-4">
                    {socials?.github && (
                        <a href={socials.github} target="_blank" rel="noreferrer" className="text-muted-foreground transition-colors hover:text-white">
                            <Github className="h-5 w-5" />
                        </a>
                    )}
                    {socials?.linkedin && (
                        <a href={socials.linkedin} target="_blank" rel="noreferrer" className="text-muted-foreground transition-colors hover:text-white">
                            <Linkedin className="h-5 w-5" />
                        </a>
                    )}
                    {socials?.twitter && (
                        <a href={socials.twitter} target="_blank" rel="noreferrer" className="text-muted-foreground transition-colors hover:text-white">
                            <Twitter className="h-5 w-5" />
                        </a>
                    )}
                    {socials?.email && (
                        <a href={socials.email} className="text-muted-foreground transition-colors hover:text-white">
                            <Mail className="h-5 w-5" />
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
}
