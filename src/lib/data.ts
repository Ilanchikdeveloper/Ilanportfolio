export { suberlevProject } from "./projects/suberlev";
export { affioProject } from "./projects/affio";
export { koruProject } from "./projects/koru";

import { affioProject } from "./projects/affio";
import { koruProject } from "./projects/koru";
import { suberlevProject } from "./projects/suberlev";

export const brandingProjects = [
  {
    id: "koru",
    tag: koruProject.tag,
    title: koruProject.title,
    description: koruProject.description,
    color: koruProject.color,
    video: koruProject.video,
    href: koruProject.href,
  },
  {
    id: "suberlev",
    tag: suberlevProject.tag,
    title: suberlevProject.title,
    description: suberlevProject.description,
    color: suberlevProject.color,
    video: suberlevProject.video,
    href: suberlevProject.href,
  },
  {
    id: "affio",
    tag: affioProject.tag,
    title: affioProject.title,
    description: affioProject.description,
    color: affioProject.color,
    video: affioProject.video,
    href: affioProject.href,
  },
];

export const navLinks = [
  { label: "Project", href: "/#branding" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export const tools = [
  "Photoshop",
  "Illustrator",
  "Indesign",
  "After Effects",
  "Premiere Pro",
  "Figma",
  "Webflow",
  "Notepad",
  "My brain :)",
];

export const posterDesignFeatured = {
  src: "/photos/poster-design/poster-0.webp",
  alt: "Poster design 0",
};

export const posterDesignGrids = [
  {
    columns: 4 as const,
    items: [
      { src: "/photos/poster-design/poster-1.webp", alt: "Poster design 1" },
      { src: "/photos/poster-design/poster-2.webp", alt: "Poster design 2" },
      { src: "/photos/poster-design/poster-3.webp", alt: "Poster design 3" },
      { src: "/photos/poster-design/poster-4.webp", alt: "Poster design 4" },
    ],
  },
  {
    columns: 2 as const,
    items: [
      { src: "/photos/poster-design/poster-7.webp", alt: "Poster design 7" },
      { src: "/photos/poster-design/poster-8.webp", alt: "Poster design 8" },
    ],
  },
  {
    columns: 2 as const,
    items: [
      { src: "/photos/poster-design/poster-9.webp", alt: "Poster design 9" },
      { src: "/photos/poster-design/poster-10.webp", alt: "Poster design 10" },
    ],
  },
  {
    columns: 2 as const,
    items: [
      { src: "/photos/poster-design/poster-11.webp", alt: "Poster design 11" },
      { src: "/photos/poster-design/poster-12.webp", alt: "Poster design 12" },
    ],
  },
  {
    columns: 2 as const,
    items: [
      { src: "/photos/poster-design/poster-13.webp", alt: "Poster design 13" },
      { src: "/photos/poster-design/poster-14.webp", alt: "Poster design 14" },
    ],
  },
  {
    columns: 2 as const,
    items: [
      { src: "/photos/poster-design/poster-16.webp", alt: "Poster design 16" },
      { src: "/photos/poster-design/poster-15.webp", alt: "Poster design 15" },
    ],
  },
  {
    columns: 2 as const,
    items: [
      { src: "/photos/poster-design/poster-17.webp", alt: "Poster design 17" },
      { src: "/photos/poster-design/poster-18.webp", alt: "Poster design 18" },
    ],
  },
  {
    columns: 2 as const,
    items: [
      { src: "/photos/poster-design/poster-19.webp", alt: "Poster design 19" },
      { src: "/photos/poster-design/poster-20.webp", alt: "Poster design 20" },
    ],
  },
];

export const packagingDesignSections = [
  {
    type: "featured" as const,
    item: {
      src: "/photos/packaging-design/packaging-1.webp",
      alt: "Packaging design 1",
    },
  },
  {
    type: "grid" as const,
    columns: 3 as const,
    items: [
      {
        src: "/photos/packaging-design/packaging-2.webp",
        alt: "Packaging design 2",
      },
      {
        src: "/photos/packaging-design/packaging-3.webp",
        alt: "Packaging design 3",
      },
      {
        src: "/photos/packaging-design/packaging-4.webp",
        alt: "Packaging design 4",
      },
    ],
  },
  {
    type: "featured" as const,
    item: {
      src: "/photos/packaging-design/packaging-5.webp",
      alt: "Packaging design 5",
    },
  },
  {
    type: "grid" as const,
    columns: 3 as const,
    items: [
      {
        src: "/photos/packaging-design/packaging-6.webp",
        alt: "Packaging design 6",
      },
      {
        src: "/photos/packaging-design/packaging-7.webp",
        alt: "Packaging design 7",
      },
      {
        src: "/photos/packaging-design/packaging-8.webp",
        alt: "Packaging design 8",
      },
    ],
  },
  {
    type: "featured" as const,
    item: {
      src: "/photos/packaging-design/packaging-9.webp",
      alt: "Packaging design 9",
    },
  },
  {
    type: "featured" as const,
    item: {
      src: "/photos/packaging-design/packaging-s.webp",
      alt: "Packaging design",
    },
  },
  {
    type: "featured" as const,
    item: {
      src: "/photos/packaging-design/packaging-10.webp",
      alt: "Packaging design 10",
    },
  },
  {
    type: "featured" as const,
    item: {
      src: "/photos/packaging-design/packaging-11.webp",
      alt: "Packaging design 11",
    },
  },
  {
    type: "featured" as const,
    item: {
      src: "/photos/packaging-design/packaging-12.webp",
      alt: "Packaging design 12",
    },
  },
  {
    type: "featured" as const,
    item: {
      src: "/photos/packaging-design/packaging-13.webp",
      alt: "Packaging design 13",
    },
  },
  {
    type: "grid" as const,
    columns: 2 as const,
    items: [
      {
        src: "/photos/packaging-design/packaging-14.webp",
        alt: "Packaging design 14",
      },
      {
        src: "/photos/packaging-design/packaging-15.webp",
        alt: "Packaging design 15",
      },
    ],
  },
  {
    type: "featured" as const,
    item: {
      src: "/photos/packaging-design/packaging-16.webp",
      alt: "Packaging design 16",
    },
  },
  {
    type: "featured" as const,
    item: {
      src: "/photos/packaging-design/packaging-17.webp",
      alt: "Packaging design 17",
    },
  },
  {
    type: "featured" as const,
    item: {
      src: "/photos/packaging-design/packaging-18.webp",
      alt: "Packaging design 18",
    },
  },
  {
    type: "featured" as const,
    item: {
      src: "/photos/packaging-design/packaging-19.webp",
      alt: "Packaging design 19",
    },
  },
];

export const logofolioLogos = [1, 2, 6, 4, 5, 3, 7, 8, 9, 10].map(
  (number) => ({
    src: `/photos/logofolio/logo-${number}.webp`,
    alt: `Logo ${number}`,
  })
);

export const socialDesignSections = [
  {
    type: "featured" as const,
    item: {
      src: "/photos/social-media/social-1.webp",
      alt: "Social media design 1",
    },
  },
  {
    type: "featured" as const,
    item: {
      src: "/photos/social-media/social-2.avif",
      alt: "Social media design 2",
    },
  },
  {
    type: "grid" as const,
    columns: 2 as const,
    items: [
      {
        src: "/photos/social-media/social-3.avif",
        alt: "Social media design 3",
      },
      {
        src: "/photos/social-media/social-4.avif",
        alt: "Social media design 4",
      },
    ],
  },
  {
    type: "grid" as const,
    columns: 2 as const,
    items: [
      {
        src: "/photos/social-media/social-5.avif",
        alt: "Social media design 5",
      },
      {
        src: "/photos/social-media/social-6.avif",
        alt: "Social media design 6",
      },
    ],
  },
  {
    type: "featured" as const,
    item: {
      src: "/photos/social-media/social-7.avif",
      alt: "Social media design 7",
    },
  },
  {
    type: "grid" as const,
    columns: 2 as const,
    items: [
      {
        src: "/photos/social-media/social-8.avif",
        alt: "Social media design 8",
      },
      {
        src: "/photos/social-media/social-9.avif",
        alt: "Social media design 9",
      },
    ],
  },
  {
    type: "featured" as const,
    item: {
      src: "/photos/social-media/social-10.avif",
      alt: "Social media design 10",
    },
  },
  {
    type: "grid" as const,
    columns: 2 as const,
    items: [
      {
        src: "/photos/social-media/social-11.webp",
        alt: "Social media design 11",
      },
      {
        src: "/photos/social-media/social-12.webp",
        alt: "Social media design 12",
      },
    ],
  },
  {
    type: "grid" as const,
    columns: 2 as const,
    items: [
      {
        src: "/photos/social-media/social-13.webp",
        alt: "Social media design 13",
      },
      {
        src: "/photos/social-media/social-14.webp",
        alt: "Social media design 14",
      },
    ],
  },
  {
    type: "featured" as const,
    item: {
      src: "/photos/social-media/social-15.jpg",
      alt: "Social media design 15",
    },
  },
];

export const otherWork = [
  { id: "poster", title: "Poster Design", href: "/work/poster" },
  { id: "packaging", title: "Packaging Design", href: "/work/packaging" },
  { id: "logofolio", title: "Logofolio 2026", href: "/work/logofolio" },
  { id: "social", title: "Social Media Design", href: "/work/social" },
];

export const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ilan-biniashvili/",
    icon: "linkedin" as const,
  },
  {
    label: "Behance",
    href: "https://www.behance.net/IlanBiniashivli",
    icon: "behance" as const,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/ilanbiniashvili?igsh=ejA1cjgyZnIxZHdy&utm_source=qr",
    icon: "instagram" as const,
  },
];

export const email = "Ilanindustrialdesign@gmail.com";
