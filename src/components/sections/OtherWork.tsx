"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { otherWork } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

function WorkPreview({
  preview,
  previewGrid,
  previewAlt,
}: {
  preview?: string;
  previewGrid?: string[];
  previewAlt: string;
}) {
  return (
    <div
      className="pointer-events-none absolute right-4 top-1/2 z-10 hidden aspect-[5/4] w-36 -translate-y-1/2 overflow-hidden rounded-sm border border-luxe-noir/10 bg-soft-oat opacity-0 shadow-[0_12px_40px_rgba(0,0,0,0.12)] transition-all duration-500 ease-out scale-[0.94] group-hover:opacity-100 group-hover:scale-100 sm:right-8 sm:w-40 md:block lg:right-12 lg:w-48 xl:w-52"
      aria-hidden="true"
    >
      {previewGrid ? (
        <div className="grid h-full w-full grid-cols-2 grid-rows-2">
          {previewGrid.map((src, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={src}
              src={src}
              alt={`${previewAlt} ${i + 1}`}
              className="h-full w-full object-cover"
            />
          ))}
        </div>
      ) : preview ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={preview} alt={previewAlt} className="h-full w-full object-cover" />
      ) : null}
    </div>
  );
}

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
        section,
        { backgroundColor: "#060D0C" },
        {
          backgroundColor: "#F0EDE5",
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top 95%",
            end: "top 55%",
            scrub: 1.2,
          },
        }
      );

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
      className="bg-luxe-noir text-luxe-noir section-other-work-padding pb-16 md:pb-40 border-t border-luxe-noir/15"
    >
      <div ref={introRef} className="grid-layout mb-16">
        <h2
          ref={headingRef}
          className="gpu col-span-12 font-playfair text-[clamp(2.5rem,8vw,7rem)] font-normal leading-[0.95] tracking-[-0.02em] text-luxe-noir will-change-transform"
        >
          Other Work
        </h2>
      </div>

      <div ref={listRef} className="grid-layout">
        {otherWork.map((item) => (
          <a
            key={item.id}
            href={item.href}
            data-work-item
            className="group relative col-span-12 flex items-center justify-between gap-4 border-t border-luxe-noir/15 py-6 pr-0 sm:py-8 sm:pr-4 md:py-12 md:pr-8 lg:pr-44 xl:pr-52 gpu"
          >
            <h3 className="font-inter text-xl font-light tracking-tight text-luxe-noir/70 transition-all duration-500 group-hover:translate-x-6 group-hover:text-luxe-noir sm:text-2xl md:text-[2.4rem]">
              {item.title}
            </h3>

            <WorkPreview
              preview={"preview" in item ? item.preview : undefined}
              previewGrid={"previewGrid" in item ? item.previewGrid : undefined}
              previewAlt={item.previewAlt}
            />

            <span className="relative z-20 shrink-0 text-xl text-luxe-noir/40 opacity-0 transition-all duration-500 group-hover:translate-x-[-8px] group-hover:opacity-100 group-hover:text-luxe-noir">
              →
            </span>
          </a>
        ))}
        <div className="col-span-12 border-t border-luxe-noir/15" />
      </div>
    </section>
  );
}
