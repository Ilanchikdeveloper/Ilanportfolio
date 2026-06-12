import type { BrandProject, BrandProjectSlide } from "./types";

const asset = (file: string) => `/photos/affio-project/${file}`;

const affioSlides: BrandProjectSlide[] = [
  { type: "image", src: asset("affio-2.webp") },
  { type: "image", src: asset("affio-3.webp") },
  { type: "gif", src: asset("affio-reveal.gif") },
  { type: "gif", src: asset("affio-line-right.gif") },
  { type: "image", src: asset("affio-4.webp") },
  { type: "image", src: asset("affio-5.webp") },
  { type: "image", src: asset("affio-6.webp") },
  { type: "gif", src: asset("affio-line-left.gif") },
  { type: "image", src: asset("affio-7.webp") },
  {
    type: "grid",
    items: [asset("affio-gif-1.gif"), asset("affio-gif-2.gif")],
  },
  ...Array.from({ length: 17 }, (_, index) => ({
    type: "image" as const,
    src: asset(`affio-${index + 8}.webp`),
  })),
];

export const affioProject: BrandProject = {
  id: "affio",
  tag: "Brand Identity",
  title: "AFFIO",
  year: "2026",
  video: "/video/affio-logo-animation.mp4",
  openingAnimation: "/video/affio-logo-animation.mp4",
  href: "/work/affio",
  description:
    "A gift curation studio crafting personalized gift boxes for individuals with care and intention.",
  overview:
    "The identity was built around warmth, care, and thoughtful curation. The visual system combines soft typography with refined details to communicate intimacy, quality, and the personal touch behind every gift experience.",
  services: ["Brand Identity", "Logo Design", "Visual System", "Packaging"],
  color: "#3a2a2a",
  caseStudy: {
    heading: "BRAND IDENTITY",
    intro:
      "Affio is a gift curation studio dedicated to crafting personalized gift boxes with care, intention, and attention to detail for individuals who want their gifts to feel truly meaningful.",
    problem: {
      title: "THE PROBLEM",
      text: "Affio had a clear service offering, but the brand lacked a distinctive visual language that reflected the emotional value of curated gifting. The existing identity felt generic and failed to communicate warmth, personalization, or premium craftsmanship. Without a cohesive system, the studio struggled to stand out in a crowded lifestyle market and build recognition across packaging, social media, and digital touchpoints.",
    },
    approach: {
      title: "THE APPROACH",
      paragraphs: [
        "The goal was to position Affio as a thoughtful, premium gift studio that feels personal without becoming overly decorative. I analyzed the brand's audience, competitor landscape, and existing touchpoints to define a visual direction rooted in care, elegance, and clarity.",
        "The challenge was to balance softness and sophistication — creating an identity that feels inviting and human while still maintaining the polish expected from a curated gifting experience.",
      ],
    },
    solution: {
      title: "THE SOLUTION",
      paragraphs: [
        "I developed a complete visual identity centered on warmth, refinement, and intentional detail. The new system introduced a refined logo, a softer color palette, elegant typography, and a flexible layout language suited for packaging, social content, and digital presentation.",
        "To strengthen recognition, I built consistent rules for logo usage, packaging applications, promotional graphics, and brand communication. The updated identity helps Affio express its emotional value more clearly while elevating the perceived quality of every curated gift.",
        "The result is a cohesive brand that transforms Affio from a generic gifting service into a distinctive studio with a stronger emotional presence and clearer positioning in the market.",
      ],
    },
  },
  slides: affioSlides,
};
