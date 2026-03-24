"use client";

import { useEffect, useRef, useState } from "react";

export function VideoBackground() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const video = videoRef.current;
    if (!video) return;

    if (video.readyState >= 3) {
      setVideoLoaded(true);
      return;
    }

    const handleReady = () => setVideoLoaded(true);
    video.addEventListener("canplay", handleReady);
    video.addEventListener("loadeddata", handleReady);

    return () => {
      video.removeEventListener("canplay", handleReady);
      video.removeEventListener("loadeddata", handleReady);
    };
  }, [prefersReducedMotion]);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-[#0a0f1a] pointer-events-none">
      {!prefersReducedMotion && (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className={`absolute top-0 left-0 w-full h-full object-cover scale-[1.05] transition-opacity duration-1000 ${
            videoLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <source src="https://res.cloudinary.com/ddxfzuseh/video/upload/v1774330332/background_a1ii7q.mp4" type="video/mp4" />
        </video>
      )}
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute bottom-0 left-0 right-0 h-[300px] bg-gradient-to-t from-black to-transparent" />
    </div>
  );
}
