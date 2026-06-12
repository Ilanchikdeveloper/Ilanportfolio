"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { brandingProjects } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

export function Branding() {
  const sectionRef = useRef<HTMLElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const intro = introRef.current;
    const heading = headingRef.current;
    const paragraph = paragraphRef.current;
    const projects = projectsRef.current;
    if (!section || !intro || !heading || !paragraph || !projects) return;

    const projectCards = projects.querySelectorAll("[data-branding-card]");

    const ctx = gsap.context(() => {
      const introTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: intro,
          start: "top 92%",
          end: "top 38%",
          scrub: 1.8,
        },
      });

      introTimeline
        .fromTo(
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
          }
        )
        .fromTo(
          paragraph,
          { y: 70, opacity: 0, force3D: true },
          { y: 0, opacity: 1, ease: "none", duration: 1 },
          0.3
        );

      gsap.fromTo(
        projectCards,
        { y: 80, opacity: 0, force3D: true },
        {
          y: 0,
          opacity: 1,
          ease: "none",
          stagger: 0.15,
          scrollTrigger: {
            trigger: projects,
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
    <section id="branding" ref={sectionRef} className="bg-black text-white">
      <div ref={introRef} className="grid-layout section-intro-padding pb-16 md:pb-32 lg:pb-40">
        <div className="col-span-12 md:col-span-8 lg:col-span-7">
          <h2
            ref={headingRef}
            className="gpu text-[clamp(4rem,13vw,11rem)] font-black leading-[0.9] tracking-tight text-[#1a1a1a] mb-[20px] will-change-transform"
          >
            BRANDING
          </h2>

          <p
            ref={paragraphRef}
            className="gpu text-[0.8rem] leading-relaxed text-white/55 max-w-xl md:max-w-2xl will-change-transform"
          >
            Brand identity is not just aesthetics—it is strategy, consistency,
            personality, and meaning. Each identity featured below demonstrates
            how design can shape perception, strengthen recognition, and build
            lasting connections.
          </p>
        </div>
      </div>

      <div
        ref={projectsRef}
        className="grid-layout flex flex-col gap-12 sm:gap-20 md:gap-28 lg:gap-32 pb-16 md:pb-32 lg:pb-40"
      >
        {brandingProjects.map((project, i) => (
          <div key={project.id} data-branding-card className="gpu col-span-12">
            <ProjectCard {...project} index={i} />
          </div>
        ))}
      </div>
    </section>
  );
}
