import type { Metadata } from "next";
import PackagingDesignPage from "@/components/work/PackagingDesignPage";

export const metadata: Metadata = {
  title: "Packaging Design — Ilan Biniashvili",
  description:
    "Packaging design work shaping how products are seen, held, and remembered on shelf and in hand.",
};

export default function PackagingPage() {
  return <PackagingDesignPage />;
}
