"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { otherWork } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

export function OtherWork() {
  const sectionRef = useRef<HTMLElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const intro = introRef.current;
    const heading = headingRef.current;
    const list = listRef.current;
    if (!section || !intro || !heading || !list) return;

    const items = list.querySelectorAll("[data-work-item]");

    const ctx = gsap.context(() => {
      gsap.fromTo(
        heading,
        {
          y: 100,
          opacity: 0,
          scale: 0.96,
          transformOrigin: "left center",
          force3D: true,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          ease: "none",
          duration: 1,
          scrollTrigger: {
            trigger: intro,
            start: "top 92%",
            end: "top 38%",
            scrub: 1.8,
          },
        }
      );

      gsap.fromTo(
        items,
        { y: 80, opacity: 0, force3D: true },
        {
          y: 0,
          opacity: 1,
          ease: "none",
          stagger: 0.12,
          scrollTrigger: {
            trigger: list,
            start: "top 88%",
            end: "top 35%",
            scrub: 1.8,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="other-work"
      ref={sectionRef}
      className="section-other-work-padding pb-16 md:pb-40 border-t border-border"
    >
      <div ref={introRef} className="grid-layout mb-16">
        <h2
          ref={headingRef}
          className="gpu col-span-12 text-[clamp(4rem,13vw,11rem)] font-black leading-[0.9] tracking-tight text-[#1a1a1a] will-change-transform"
        >
          OTHER WORK
        </h2>
      </div>

      <div ref={listRef} className="grid-layout">
        {otherWork.map((item) => (
          <a
            key={item.id}
            href={item.href}
            data-work-item
            className="group col-span-12 flex items-center justify-between gap-4 border-t border-border py-6 sm:py-8 md:py-12 gpu"
          >
            <h3 className="font-display text-xl sm:text-2xl md:text-[2.4rem] font-thin tracking-tight transition-all duration-500 group-hover:translate-x-6 group-hover:text-accent-green">
              {item.title}
            </h3>
            <span className="text-muted text-xl opacity-0 group-hover:opacity-100 group-hover:text-accent-green transition-all duration-500 group-hover:translate-x-[-8px]">
              →
            </span>
          </a>
        ))}
        <div className="col-span-12 border-t border-border" />
      </div>
    </section>
  );
}
