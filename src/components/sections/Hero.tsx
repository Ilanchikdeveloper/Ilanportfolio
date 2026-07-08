"use client";

import { useEffect, useRef } from "react";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const startPlayback = () => {
      video.play().catch(() => {});
    };

    if (document.readyState === "complete") {
      startPlayback();
      return;
    }

    window.addEventListener("load", startPlayback, { once: true });
    return () => window.removeEventListener("load", startPlayback);
  }, []);

  return (
    <section className="relative w-full overflow-hidden">
      <div className="hero-viewport relative w-full">
        <video
          ref={videoRef}
          className="hero-video gpu absolute inset-0"
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        >
          <source src="/video/comp-2.mp4" type="video/mp4" />
        </video>

        <div
          className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/15 to-black/70 sm:from-black/25 sm:via-transparent sm:to-black/65"
          aria-hidden="true"
        />

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[42%] bg-gradient-to-t from-black/80 via-black/45 to-transparent sm:hidden" aria-hidden="true" />

        <div className="absolute inset-x-0 bottom-0 z-10 grid-layout pb-[max(2rem,env(safe-area-inset-bottom))] pt-24 md:pb-10 md:pt-0">
          <div className="col-span-12">
            <h1 className="font-playfair text-[clamp(1.75rem,7vw,32px)] font-normal leading-none tracking-tight text-soft-oat drop-shadow-[0_2px_18px_rgba(0,0,0,0.55)]">
              Ilan Biniashvili
            </h1>
            <p className="mt-1 font-inter text-[clamp(0.75rem,3.2vw,14px)] font-light uppercase tracking-[0.12em] text-soft-oat/90 drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)]">
              Graphic<span className="text-soft-oat/50">|</span>Designer
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
