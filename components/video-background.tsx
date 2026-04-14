"use client";

import { useEffect, useRef, useState } from "react";

export function VideoBackground() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(true); // default true to avoid flash on mobile SSR
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const motionMq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mobileMq = window.matchMedia("(max-width: 767px)");

    setPrefersReducedMotion(motionMq.matches);
    setIsMobile(mobileMq.matches);

    const motionHandler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    const mobileHandler = (e: MediaQueryListEvent) => setIsMobile(e.matches);

    motionMq.addEventListener("change", motionHandler);
    mobileMq.addEventListener("change", mobileHandler);

    return () => {
      motionMq.removeEventListener("change", motionHandler);
      mobileMq.removeEventListener("change", mobileHandler);
    };
  }, []);

  const showVideo = !prefersReducedMotion && !isMobile;

  useEffect(() => {
    if (!showVideo) return;
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
  }, [showVideo]);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-[#0a0f1a] pointer-events-none">
      {showVideo && (
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
      {/* Mobile fallback: subtle radial gradient to mimic the video's depth */}
      {isMobile && (
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(30,50,100,0.6)_0%,_transparent_70%)]" />
      )}
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute bottom-0 left-0 right-0 h-[300px] bg-gradient-to-t from-black to-transparent" />
    </div>
  );
}
