"use client";

import BrandProjectPage from "@/components/work/BrandProjectPage";
import { koruProject } from "@/lib/projects/koru";

export default function KoruProject() {
  return <BrandProjectPage project={koruProject} />;
}
