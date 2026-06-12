"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { packagingDesignSections } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

export default function PackagingDesignPage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const page = pageRef.current;
    const intro = introRef.current;
    const heading = headingRef.current;
    const paragraph = paragraphRef.current;
    const gallery = galleryRef.current;
    if (!page || !intro || !heading || !paragraph || !gallery) return;

    const galleryItems = gallery.querySelectorAll("[data-gallery-item]");

    const ctx = gsap.context(() => {
      gsap.fromTo(
        heading,
        { y: 48, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          ease: "power2.out",
          scrollTrigger: {
            trigger: intro,
            start: "top 90%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        paragraph,
        { y: 32, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          ease: "power2.out",
          delay: 0.08,
          scrollTrigger: {
            trigger: intro,
            start: "top 90%",
            once: true,
          },
        }
      );

      galleryItems.forEach((item) => {
        gsap.fromTo(
          item,
          { y: 28, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.85,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 92%",
              once: true,
            },
          }
        );
      });
    }, page);

    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, []);

  const gridClass = (columns: 2 | 3 | 4) => {
    if (columns === 4) return "grid-cols-2 md:grid-cols-4";
    if (columns === 3) return "grid-cols-2 md:grid-cols-3";
    return "grid-cols-2 md:grid-cols-2";
  };

  return (
    <div ref={pageRef} className="bg-black text-white">
      <div className="project-page">
        <div className="pt-24 sm:pt-28 md:pt-32 pb-6 sm:pb-8">
          <Link
            href="/#other-work"
            className="text-[0.8rem] text-white/55 hover:text-accent-green transition-colors duration-500 hover-line w-fit"
          >
            ← Back to other work
          </Link>
        </div>

        <div ref={introRef} className="pb-16 md:pb-24">
          <h1
            ref={headingRef}
            className="gpu text-[clamp(3rem,10vw,7rem)] font-black leading-[0.9] tracking-tight text-[#1a1a1a] mb-[20px] will-change-transform"
          >
            PACKAGING DESIGN
          </h1>

          <p
            ref={paragraphRef}
            className="gpu text-[0.8rem] leading-relaxed text-white/55 max-w-xl md:max-w-2xl will-change-transform"
          >
            Packaging design brings brand identity into the physical world—
            shaping how products are seen, held, and remembered on shelf and in
            hand.
          </p>
        </div>

        <div
          ref={galleryRef}
          className="flex flex-col gap-6 md:gap-8 pb-24 md:pb-32"
        >
          {packagingDesignSections.map((section) => {
            if (section.type === "featured") {
              return (
                <div
                  key={section.item.src}
                  data-gallery-item
                  className="gpu overflow-hidden rounded-sm"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={section.item.src}
                    alt={section.item.alt}
                    className="block h-auto w-full object-contain"
                  />
                </div>
              );
            }

            return (
              <div
                key={section.items.map((item) => item.src).join("-")}
                className={`grid ${gridClass(section.columns)} gap-4 md:gap-6`}
              >
                {section.items.map((item) => (
                  <div
                    key={item.src}
                    data-gallery-item
                    className="gpu overflow-hidden rounded-sm bg-black"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="block h-auto w-full object-contain"
                    />
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
