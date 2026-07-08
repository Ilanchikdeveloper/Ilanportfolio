"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { brandingProjects } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

export function Branding() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    const projects = projectsRef.current;
    if (!section || !heading || !projects) return;

    const projectCards = projects.querySelectorAll("[data-branding-card]");

    const ctx = gsap.context(() => {
      gsap.fromTo(
        heading,
        { y: 80, opacity: 0, force3D: true },
        {
          y: 0,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "top 18%",
            scrub: 1.2,
            invalidateOnRefresh: true,
          },
        }
      );

      projectCards.forEach((card) => {
        gsap.fromTo(
          card,
          { y: 80, opacity: 0, force3D: true },
          {
            y: 0,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top 94%",
              end: "top 58%",
              scrub: 1.8,
              invalidateOnRefresh: true,
            },
          }
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="branding"
      ref={sectionRef}
      data-surface="dark"
      className="bg-luxe-noir text-soft-oat"
    >
      <div className="grid-layout section-intro-padding pb-12 md:pb-16 lg:pb-20">
        <div className="col-span-12 max-w-[26rem] sm:max-w-[28rem] md:max-w-[30rem]">
          <h2
            ref={headingRef}
            className="gpu font-playfair text-[clamp(1.75rem,4.5vw,3.5rem)] font-normal leading-[1.22] tracking-[-0.015em] text-soft-oat will-change-transform"
          >
            BRANDING
          </h2>
        </div>
      </div>

      <div ref={projectsRef} className="grid-layout pb-16 md:pb-28 lg:pb-36">
        <div className="col-span-12 flex flex-col">
          {brandingProjects.map((project, i) => (
            <div key={project.id} data-branding-card className="gpu">
              <ProjectCard {...project} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
