import type { BrandProject } from "./types";

const asset = (file: string) => `/photos/suberlev-project/${file}`;

export const suberlevProject: BrandProject = {
  id: "suberlev",
  tag: "Brand Identity",
  title: "SUBERLEV",
  year: "2026",
  video: "/video/logo-suberlev-grid.mp4",
  openingAnimation: asset("suberlev-1-animation.mp4"),
  href: "/work/suberlev",
  description:
    "Suberlev is a Spanish company that specializes in the development of advanced insulation and coating systems for the construction industry.",
  overview:
    "The identity was built around precision, protection, and industrial strength. The visual system combines a structured grid language with bold typography to communicate reliability and technical expertise across every brand touchpoint.",
  services: ["Brand Identity", "Logo Design", "Visual System", "Motion"],
  color: "#2a3a2e",
  caseStudy: {
    heading: "BRAND IDENTITY",
    intro:
      "Suberlev is a young and dynamic Spanish company, dedicated exclusively to the creation, manufacture and marketing of revolutionary materials in the construction sector.",
    problem: {
      title: "THE PROBLEM",
      text: "Suberlev had strong products and technical expertise, but the brand lacked a modern and recognizable identity. The existing visuals felt outdated, inconsistent, and heavily product-focused without creating an emotional connection with customers. The website and marketing materials also struggled to communicate innovation, sustainability, and trust in a clear visual language. As a result, the brand blended into a crowded industrial market instead of standing out as a forward-thinking insulation company.",
    },
    approach: {
      title: "THE APPROACH",
      paragraphs: [
        "The goal of the rebrand was to reposition Suberlev as a modern, reliable, and energy-efficient brand while keeping its industrial roots. I started by analyzing the company's existing communication, product packaging, website, and competitors to identify inconsistencies and missed opportunities. From there, I developed a clearer visual strategy focused on clarity, structure, and recognition.",
        "The challenge was to create a system that felt both technical and approachable — something professional enough for the construction industry while still visually engaging for digital platforms and marketing materials.",
      ],
    },
    solution: {
      title: "THE SOLUTION",
      paragraphs: [
        "I designed a complete visual identity system centered around energy efficiency, protection, and modern construction. The refreshed identity introduced a cleaner logo execution, a stronger color palette, modern typography, and a more structured layout system that improved readability across both print and digital applications.",
        "To strengthen brand recognition, I created consistent visual rules for packaging, promotional graphics, website presentation, and product communication. The new design system gives Suberlev a more contemporary and trustworthy presence while helping customers quickly understand the brand's value and product benefits.",
        "The result is a cohesive identity that transforms Suberlev from a traditional industrial company into a modern brand with a stronger digital presence and clearer market positioning.",
      ],
    },
  },
  slides: [
    { type: "image", src: asset("suberlev-2.webp") },
    { type: "image", src: asset("suberlev-3.webp") },
    { type: "gif", src: asset("suberlev-4.gif") },
    { type: "image", src: asset("suberlev-5.webp") },
    { type: "image", src: asset("suberlev-6.webp") },
    { type: "image", src: asset("suberlev-7.webp") },
    { type: "video", src: asset("suberlev-7-animation.mp4") },
    { type: "gif", src: asset("suberlev-4.gif") },
    { type: "image", src: asset("suberlev-8.webp") },
    { type: "gif", src: asset("suberlev-10.gif") },
    { type: "image", src: asset("suberlev-9.webp") },
    { type: "image", src: asset("suberlev-11.webp") },
    { type: "video", src: "/video/logo-suberlev-grid.mp4", bg: "#111" },
    { type: "image", src: asset("suberlev-12.webp") },
    { type: "video", src: asset("suberlev-13-animation.mp4") },
    { type: "image", src: asset("suberlev-14.webp") },
    {
      type: "grid",
      items: [asset("suberlev-15.webp"), asset("suberlev-16.webp")],
    },
    {
      type: "video",
      src: asset("suberlev-17-animation.mp4"),
      aspect: "16/5.04",
      width: "80%",
    },
    { type: "image", src: asset("suberlev-18.webp") },
    { type: "gif", src: asset("suberlev-4.gif") },
    { type: "image", src: asset("suberlev-19.webp") },
    { type: "image", src: asset("suberlev-20.webp") },
    { type: "video", src: asset("suberlev-21.mp4") },
    { type: "video", src: asset("suberlev-22.mp4") },
    { type: "image", src: asset("suberlev-23.webp") },
    { type: "video", src: asset("suberlev-22.mp4") },
    { type: "image", src: asset("suberlev-24.webp") },
    { type: "image", src: asset("suberlev-25.webp") },
    { type: "image", src: asset("suberlev-26.webp") },
    { type: "gif", src: asset("suberlev-10.gif") },
    { type: "image", src: asset("suberlev-27.webp") },
    { type: "image", src: asset("suberlev-28.webp") },
    { type: "gif", src: asset("suberlev-10.gif") },
    { type: "image", src: asset("suberlev-29.webp") },
    { type: "image", src: asset("suberlev-30.webp") },
    { type: "image", src: asset("suberlev-31.webp") },
  ],
};
