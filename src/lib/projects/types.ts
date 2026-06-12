export interface CaseStudySection {
  heading: string;
  intro: string;
  problem: {
    title: string;
    text: string;
  };
  approach: {
    title: string;
    paragraphs: string[];
  };
  solution: {
    title: string;
    paragraphs: string[];
  };
}

export type BrandProjectSlide =
  | { type: "image"; src: string }
  | { type: "gif"; src: string }
  | {
      type: "video";
      src: string;
      aspect?: string;
      width?: string;
      bg?: string;
    }
  | { type: "grid"; items: string[] };

export interface BrandProject {
  id: string;
  tag: string;
  title: string;
  year: string;
  href: string;
  video: string;
  openingAnimation: string;
  description: string;
  overview: string;
  services: string[];
  color: string;
  caseStudy: CaseStudySection;
  slides: BrandProjectSlide[];
}
