import type { BrandProject, BrandProjectSlide } from "./types";

const asset = (file: string) => `/photos/koru-project/${file}`;

const koruSlides: BrandProjectSlide[] = [
  { type: "image", src: asset("koru-1.webp") },
  { type: "gif", src: asset("koru-wordmark.gif") },
  { type: "image", src: asset("koru-2.webp") },
  { type: "image", src: asset("koru-3.webp") },
  {
    type: "grid",
    items: [asset("display-1.gif"), asset("display-2.gif")],
  },
  {
    type: "grid",
    items: [asset("koru-4.webp"), asset("koru-5.webp")],
  },
  { type: "image", src: asset("koru-6.webp") },
  { type: "image", src: asset("koru-7.webp") },
  { type: "image", src: asset("koru-8.webp") },
  { type: "gif", src: asset("logo-grid-animation.gif") },
  { type: "image", src: asset("koru-9.webp") },
  { type: "gif", src: asset("mech-animation.gif") },
  { type: "image", src: asset("koru-10.webp") },
  { type: "image", src: asset("koru-11.webp") },
  { type: "gif", src: asset("billboard.gif") },
  { type: "image", src: asset("koru-12.webp") },
  {
    type: "grid",
    items: [asset("koru-13.webp"), asset("koru-14.webp")],
  },
  { type: "image", src: asset("koru-15.webp") },
  {
    type: "grid",
    items: [asset("motion-tile-animation.gif"), asset("pulsing-animation-logo.gif")],
  },
  { type: "image", src: asset("koru-16.webp") },
  { type: "image", src: asset("koru-17.webp") },
  { type: "image", src: asset("koru-18.webp") },
  {
    type: "grid",
    items: [asset("cyan-animation-1.gif"), asset("animation-dark-2.gif")],
  },
  { type: "image", src: asset("koru-19.webp") },
  { type: "image", src: asset("koru-20.webp") },
  { type: "image", src: asset("koru-21.webp") },
  { type: "image", src: asset("koru-22.webp") },
  {
    type: "grid",
    items: [asset("loading-animation.gif"), asset("app-motion.mp4")],
  },
  { type: "image", src: asset("koru-23.webp") },
  { type: "image", src: asset("koru-24.webp") },
  { type: "image", src: asset("koru-25.webp") },
  { type: "image", src: asset("koru-26.webp") },
  { type: "gif", src: asset("koru-wordmark.gif") },
];

export const koruProject: BrandProject = {
  id: "koru",
  tag: "Brand Identity",
  title: "KORU",
  year: "2026",
  video: "/video/koru-logo-animation.mp4",
  openingAnimation: "/video/koru-logo-animation.mp4",
  href: "/work/koru",
  description:
    "Mobile app visual system developed to merge good habits for a young generation through gamification.",
  overview:
    "The identity was built around growth, momentum, and playful structure. The visual system combines bold shapes with energetic motion to communicate progress, motivation, and the spiral of continuous self-improvement.",
  services: ["Brand Identity", "Logo Design", "Visual System", "UI Design", "Motion"],
  color: "#2a2a3a",
  caseStudy: {
    heading: "BRAND IDENTITY",
    intro:
      "Koru is a mobile app visual system designed to help a young generation build better habits through gamification, turning everyday routines into engaging and rewarding experiences.",
    problem: {
      title: "THE PROBLEM",
      text: "Koru had a strong product concept, but the brand lacked a clear and memorable identity that could translate across app interfaces, marketing, and digital touchpoints. The existing visuals felt disconnected from the idea of growth and habit-building, making it difficult to create emotional engagement with a younger audience. Without a unified system, the product struggled to feel distinctive in a crowded wellness and productivity market.",
    },
    approach: {
      title: "THE APPROACH",
      paragraphs: [
        "The goal was to create a visual identity that felt energetic, approachable, and structured — reflecting both the spiral symbolism of the koru and the motivational nature of gamified habit tracking. I analyzed the app's user flow, competitor landscape, and target audience to define a direction rooted in movement, progress, and digital-native aesthetics.",
        "The challenge was to design a system that felt playful without becoming childish — something vibrant enough for a young audience while still maintaining clarity and usability across mobile UI and brand communication.",
      ],
    },
    solution: {
      title: "THE SOLUTION",
      paragraphs: [
        "I developed a complete visual identity centered on growth, rhythm, and gamified motivation. The system introduced a dynamic logo, a bold color palette, modern typography, and flexible graphic elements suited for app interfaces, social content, and promotional materials.",
        "To strengthen recognition, I created consistent rules for iconography, UI components, motion language, and brand presentation. The new design system gives Koru a more distinctive and energetic presence while helping users instantly connect with the idea of building habits through progress.",
        "The result is a cohesive identity that transforms Koru from a generic wellness app into a visually compelling product with a stronger personality and clearer market positioning.",
      ],
    },
  },
  slides: koruSlides,
};
