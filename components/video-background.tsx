"use client";

import { useEffect, useRef, useState } from "react";

export function VideoBackground() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Already ready (cached)
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
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-black pointer-events-none">
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
        <source src="/background.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute bottom-0 left-0 right-0 h-[300px] bg-gradient-to-t from-black to-transparent" />
    </div>
  );
}
