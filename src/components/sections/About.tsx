"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { tools } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

const toolColumns = [
  tools.slice(0, 3),
  tools.slice(3, 6),
  tools.slice(6, 9),
];

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    if (!section || !content) return;

    const items = content.querySelectorAll("[data-about-item]");

    const ctx = gsap.context(() => {
      gsap.fromTo(
        items,
        {
          y: 70,
          opacity: 0,
          force3D: true,
        },
        {
          y: 0,
          opacity: 1,
          ease: "none",
          stagger: 0.1,
          scrollTrigger: {
            trigger: content,
            start: "top 92%",
            end: "top 55%",
            scrub: 1.4,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="bg-white text-[#1a1a1a] section-intro-padding pb-16 md:pb-20 lg:pb-28"
    >
      <div className="grid-layout">
        <div className="col-span-12 flex justify-end">
          <div
            ref={contentRef}
            className="about-content-block w-full max-w-none sm:max-w-[580px] md:max-w-[640px]"
          >
            <div data-about-item className="mb-10 md:mb-14 gpu">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/photos/who-am-i.png"
                alt="Who am i"
                className="block w-full h-auto max-md:scale-100 md:scale-110 origin-top-right"
              />
            </div>

            <div
              data-about-item
              className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-8 md:gap-x-14 lg:gap-x-16 w-full gpu"
            >
              <div>
                <h2 className="text-[0.75rem] font-bold uppercase tracking-[0.22em] mb-3">
                  About Me
                </h2>
                <div className="h-px bg-[#1a1a1a]/25 mb-3" />
                <p className="text-[0.8rem] leading-relaxed text-[#1a1a1a]/75">
                  I&apos;m a graphic designer from Georgia specializing in visual
                  communication, problem-solving, and creating designs that help
                  brands increase engagement and connect with their audience. I
                  focus on transforming ideas into clear, impactful visuals that
                  strengthen a company&apos;s identity
                </p>
              </div>

              <div>
                <h2 className="text-[0.75rem] font-bold uppercase tracking-[0.22em] mb-3">
                  Tools I Use
                </h2>
                <div className="h-px bg-[#1a1a1a]/25 mb-3" />
                <div className="flex gap-x-3 sm:gap-x-5 md:gap-x-7 lg:gap-x-9">
                  {toolColumns.map((column, colIndex) => (
                    <ul key={colIndex} className="min-w-0 flex-1 space-y-6">
                      {column.map((tool) => (
                        <li key={tool}>
                          <span className="block text-[0.7rem] sm:text-[0.75rem] md:text-[0.8rem] text-[#1a1a1a]/75 pb-3 leading-tight">
                            {tool}
                          </span>
                          <div className="h-px bg-[#1a1a1a]/15" />
                        </li>
                      ))}
                    </ul>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
