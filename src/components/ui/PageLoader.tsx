"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export function PageLoader() {
  const loaderRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const loader = loaderRef.current;
    const logo = logoRef.current;
    const bar = barRef.current;
    if (!loader || !logo || !bar) return;

    const fallbackTimer = window.setTimeout(() => setDone(true), 3000);

    gsap.set(bar, { scaleX: 0, transformOrigin: "left center" });

    const tl = gsap.timeline({
      onComplete: () => setDone(true),
    });

    tl.from(logo, {
      opacity: 0,
      scale: 0.92,
      duration: 0.6,
      ease: "power3.out",
    })
      .to(
        bar,
        {
          scaleX: 1,
          duration: 1.4,
          ease: "power2.inOut",
        },
        0.2
      )
      .to(loader, {
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut",
        delay: 0.15,
      });

    return () => {
      window.clearTimeout(fallbackTimer);
      tl.kill();
    };
  }, []);

  if (done) return null;

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center"
      aria-hidden="true"
    >
      <div ref={logoRef} className="gpu">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/photos/my-logo.svg"
          alt="Ilan Biniashvili"
          className="h-16 w-auto md:h-20"
        />
      </div>

      <div className="mt-8 h-[2px] w-40 md:w-52 overflow-hidden rounded-full bg-white/10">
        <div
          ref={barRef}
          className="h-full w-full rounded-full bg-accent-green gpu"
        />
      </div>
    </div>
  );
}
