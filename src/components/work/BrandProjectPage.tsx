"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { BrandProject, BrandProjectSlide } from "@/lib/projects/types";

gsap.registerPlugin(ScrollTrigger);

function ProjectSlide({
  children,
  className = "",
  full = false,
  revealOnScroll = true,
}: {
  children: React.ReactNode;
  className?: string;
  full?: boolean;
  revealOnScroll?: boolean;
}) {
  return (
    <section
      data-project-slide={revealOnScroll ? "" : undefined}
      className={`w-full ${full ? "min-h-screen flex flex-col" : ""} ${className}`}
    >
      {children}
    </section>
  );
}

function CaseStudySection({ project }: { project: BrandProject }) {
  const { caseStudy } = project;

  return (
    <ProjectSlide className="pt-[100px] pb-20 md:pb-28">
      <div className="max-w-3xl mb-16 md:mb-20">
        <h2 className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold uppercase tracking-tight leading-[0.95] mb-[20px]">
          {caseStudy.heading}
        </h2>
        <p className="text-[0.8rem] leading-relaxed text-white/55 max-w-xl">
          {caseStudy.intro}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8 lg:gap-10">
        <div>
          <h3 className="text-[0.8rem] font-bold uppercase tracking-[0.08em] text-white mb-5">
            {caseStudy.problem.title}
          </h3>
          <p className="text-[0.8rem] leading-relaxed text-white/55">
            {caseStudy.problem.text}
          </p>
        </div>

        <div>
          <h3 className="text-[0.8rem] font-bold uppercase tracking-[0.08em] text-white mb-5">
            {caseStudy.approach.title}
          </h3>
          <div className="space-y-5">
            {caseStudy.approach.paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 24)}
                className="text-[0.8rem] leading-relaxed text-white/55"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-[0.8rem] font-bold uppercase tracking-[0.08em] text-white mb-5">
            {caseStudy.solution.title}
          </h3>
          <div className="space-y-5">
            {caseStudy.solution.paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 24)}
                className="text-[0.8rem] leading-relaxed text-white/55"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </ProjectSlide>
  );
}

function MediaSlide({
  project,
  slide,
}: {
  project: BrandProject;
  slide: BrandProjectSlide;
}) {
  const altIdentity = `${project.title} brand identity`;
  const altMotion = `${project.title} brand motion`;

  if (slide.type === "grid") {
    const gridCols =
      slide.items.length === 3 ? "grid-cols-3" : "grid-cols-2";

    return (
      <ProjectSlide className="pb-16 md:pb-24">
        <div className={`grid ${gridCols} gap-4 md:gap-6 items-stretch`}>
          {slide.items.map((src) => (
            <div
              key={src}
              className={`h-full w-full overflow-hidden bg-black rounded-sm ${
                src.endsWith(".mp4") ? "relative aspect-[16/10] sm:aspect-auto" : ""
              }`}
            >
              {src.endsWith(".mp4") ? (
                <video
                  className="absolute inset-0 h-full w-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                >
                  <source src={src} type="video/mp4" />
                </video>
              ) : (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={src}
                  alt={src.endsWith(".gif") ? altMotion : altIdentity}
                  className="block h-auto w-full object-contain"
                  loading="lazy"
                  decoding="async"
                />
              )}
            </div>
          ))}
        </div>
      </ProjectSlide>
    );
  }

  if (slide.type === "video") {
    const widthClass =
      slide.width === "80%" ? "w-[80%] mx-auto" : "w-full";
    const aspectRatio = slide.aspect?.replace("/", " / ");

    return (
      <ProjectSlide className="pb-16 md:pb-24">
        <div
          className={`${widthClass} overflow-hidden rounded-sm`}
          style={{ backgroundColor: slide.bg ?? "#000" }}
        >
          <video
            className={`block w-full ${
              aspectRatio ? "object-cover" : "h-auto object-contain"
            }`}
            style={aspectRatio ? { aspectRatio } : undefined}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          >
            <source src={slide.src} type="video/mp4" />
          </video>
        </div>
      </ProjectSlide>
    );
  }

  return (
    <ProjectSlide className="pb-16 md:pb-24">
      <div className="w-full overflow-hidden bg-black rounded-sm">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={slide.src}
          alt={slide.type === "gif" ? altMotion : altIdentity}
          className="block w-full h-auto object-contain"
          loading="lazy"
          decoding="async"
        />
      </div>
    </ProjectSlide>
  );
}

export default function BrandProjectPage({ project }: { project: BrandProject }) {
  const pageRef = useRef<HTMLDivElement>(null);
  const openingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const page = pageRef.current;
    const opening = openingRef.current;
    if (!page) return;

    const ctx = gsap.context(() => {
      if (opening) {
        gsap.fromTo(
          opening,
          { opacity: 0, scale: 1.02 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.9,
            ease: "power2.out",
          }
        );
      }

      const slides = page.querySelectorAll("[data-project-slide]");

      slides.forEach((slide) => {
        gsap.fromTo(
          slide,
          { opacity: 0, y: 28 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            ease: "power2.out",
            scrollTrigger: {
              trigger: slide,
              start: "top 90%",
              once: true,
            },
          }
        );
      });
    }, page);

    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, [project.id]);

  return (
    <div ref={pageRef} className="bg-black text-white">
      <div className="project-page">
        <div className="pt-24 sm:pt-28 md:pt-32 pb-6 sm:pb-8">
          <Link
            href="/#branding"
            className="text-[0.8rem] text-white/55 hover:text-accent-green transition-colors duration-500 hover-line w-fit"
          >
            ← Back to projects
          </Link>
        </div>

        <ProjectSlide revealOnScroll={false}>
          <div ref={openingRef} className="w-full overflow-hidden rounded-sm bg-black">
            <video
              className="block w-full h-auto object-contain bg-black"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            >
              <source src={project.openingAnimation} type="video/mp4" />
            </video>
          </div>
        </ProjectSlide>

        <CaseStudySection project={project} />

        {project.slides.map((slide, index) => (
          <MediaSlide
            key={`${index}-${slide.type === "grid" ? slide.items.join("-") : "src" in slide ? slide.src : ""}`}
            project={project}
            slide={slide}
          />
        ))}

        <ProjectSlide className="pb-24 md:pb-32">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 lg:col-span-8">
              <p className="text-[0.65rem] uppercase tracking-[0.25em] text-white/45 mb-3">
                {project.tag}
              </p>
              <div className="w-7 h-[3px] bg-accent-green mb-8" />
              <h1 className="text-[clamp(3rem,10vw,7rem)] font-bold tracking-tight leading-[0.9] mb-[20px]">
                {project.title}
              </h1>
              <p className="text-[0.8rem] leading-relaxed text-white/55 max-w-2xl mb-12">
                {project.description}
              </p>
              <p className="text-[0.8rem] leading-relaxed text-white/55 max-w-2xl">
                {project.overview}
              </p>
            </div>

            <div className="col-span-12 lg:col-span-4 mt-12 lg:mt-0 flex flex-col gap-10">
              <div>
                <p className="text-[0.65rem] uppercase tracking-[0.25em] text-white/45 mb-3">
                  Year
                </p>
                <div className="h-px bg-white/15 mb-4" />
                <p className="text-[0.8rem] text-white/75">{project.year}</p>
              </div>

              <div>
                <p className="text-[0.65rem] uppercase tracking-[0.25em] text-white/45 mb-3">
                  Services
                </p>
                <div className="h-px bg-white/15 mb-4" />
                <ul className="space-y-3">
                  {project.services.map((service) => (
                    <li
                      key={service}
                      className="text-[0.8rem] text-white/75 border-b border-white/10 pb-3"
                    >
                      {service}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-[0.65rem] uppercase tracking-[0.25em] text-[#2a2a2a] mt-auto">
                made in {project.year}
              </p>
            </div>
          </div>
        </ProjectSlide>
      </div>
    </div>
  );
}
