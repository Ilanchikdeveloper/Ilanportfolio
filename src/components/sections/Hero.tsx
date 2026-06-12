"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    const heading = headingRef.current;
    const paragraph = paragraphRef.current;
    if (!section || !content || !heading || !paragraph) return;

    gsap.set([heading, paragraph], { y: 80, opacity: 0, force3D: true });

    const ctx = gsap.context(() => {
      gsap.to([heading, paragraph], {
        y: 0,
        opacity: 1,
        ease: "none",
        stagger: 0.12,
        scrollTrigger: {
          trigger: content,
          start: "top 95%",
          end: "top 60%",
          scrub: 1.4,
        },
      });

      ScrollTrigger.refresh();
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden">
      <div className="relative h-[100vh] w-full">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        >
          <source src="/video/hero-page-video.mp4" type="video/mp4" />
        </video>

        <div
          className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black"
          aria-hidden="true"
        />
      </div>

      <div ref={contentRef} className="bg-black">
        <div className="grid-layout w-full items-end py-10 md:py-14 lg:py-16">
          <div className="col-span-12">
            <h1
              ref={headingRef}
              className="gpu text-[clamp(2.2rem,11vw,8.5rem)] leading-[0.9] tracking-tight text-white mb-[20px]"
            >
              <span className="font-black">Ilan</span><span className="font-thin">Biniashvili</span>
            </h1>

            <p
              ref={paragraphRef}
              className="gpu text-[0.8rem] leading-relaxed text-white/90 max-w-xl md:max-w-2xl"
            >
              Visual communication is not decoration—it is structure, hierarchy,
              rhythm, and meaning. The projects presented here explore how design
              can simplify complexity and create memorable experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
