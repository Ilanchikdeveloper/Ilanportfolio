"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { aboutBio, aboutToolsRows } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

const REVEAL_FROM = {
  autoAlpha: 0,
  y: 20,
  filter: "blur(8px)",
  force3D: true,
};

const REVEAL_TO = {
  autoAlpha: 1,
  y: 0,
  filter: "blur(0px)",
  ease: "none",
  duration: 0.55,
};

const REVEAL_STAGGER = 0.5;

function ToolsRow({ tools }: { tools: string[] }) {
  return (
    <p className="font-inter text-[clamp(0.8rem,1.6vw,0.95rem)] font-light leading-relaxed text-soft-oat/85">
      {tools.map((tool, index) => (
        <span key={tool}>
          {index > 0 ? (
            <span className="mx-2 text-soft-oat/25 sm:mx-3" aria-hidden="true">
              |
            </span>
          ) : null}
          {tool}
        </span>
      ))}
    </p>
  );
}

export function WhoAmI() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    if (!section || !content) return;

    const blocks = content.querySelectorAll<HTMLElement>("[data-who-reveal]");
    if (!blocks.length) return;

    const ctx = gsap.context(() => {
      gsap.set(blocks, REVEAL_FROM);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: content,
          start: "top 92%",
          end: "top 38%",
          scrub: 1.2,
          invalidateOnRefresh: true,
        },
      });

      blocks.forEach((block, index) => {
        tl.fromTo(block, REVEAL_FROM, { ...REVEAL_TO, immediateRender: false }, index * REVEAL_STAGGER);
      });

      const refresh = () => ScrollTrigger.refresh();
      requestAnimationFrame(refresh);
      window.setTimeout(refresh, 250);
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section id="who-am-i" ref={sectionRef} className="bg-maroon text-soft-oat">
      <div className="grid-layout pt-[12.675rem] pb-[3.6rem] md:pt-[17.745rem] md:pb-[5.04rem] lg:pt-[22.815rem] lg:pb-[6.48rem]">
        <div
          ref={contentRef}
          className="gpu col-span-12 lg:col-span-4 lg:col-start-9"
        >
          <h2
            data-who-reveal
            className="font-playfair text-[clamp(1.35rem,3vw,2.25rem)] font-normal leading-[1.22] tracking-[-0.015em] text-soft-oat will-change-[transform,opacity,filter]"
          >
            About me
          </h2>

          <div
            data-who-reveal
            className="mt-[5.07rem] space-y-5 md:mt-[6.084rem] will-change-[transform,opacity,filter]"
          >
            <p className="font-inter text-[clamp(0.8rem,1.6vw,0.95rem)] font-light leading-none text-soft-oat/90">
              Who am i ?
            </p>
            <div className="space-y-5 font-inter text-[clamp(0.8rem,1.6vw,0.95rem)] font-light leading-[1.65] text-soft-oat/85">
              {aboutBio.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div
            data-who-reveal
            className="my-8 border-t border-soft-oat/15 md:my-10 will-change-[transform,opacity,filter]"
          />

          <div
            data-who-reveal
            className="space-y-4 will-change-[transform,opacity,filter]"
          >
            <p className="font-inter text-[clamp(0.8rem,1.6vw,0.95rem)] font-light leading-none text-soft-oat/90">
              Tools I use
            </p>
            <div className="space-y-3">
              {aboutToolsRows.map((row) => (
                <ToolsRow key={row.join("-")} tools={row} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
