"use client";

import BrandProjectPage from "@/components/work/BrandProjectPage";
import { affioProject } from "@/lib/projects/affio";

export default function AffioProject() {
  return <BrandProjectPage project={affioProject} />;
}
