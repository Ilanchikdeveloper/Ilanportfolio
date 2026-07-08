import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { AppShell } from "@/components/layout/AppShell";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { PageLoader } from "@/components/ui/PageLoader";
import { CustomCursor } from "@/components/ui/CustomCursor";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["100", "300", "400", "700", "900"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Ilan Biniashvili — Graphic Designer",
  description:
    "Portfolio of Ilan Biniashvili — visual communication, brand identity, and design from Georgia.",
  openGraph: {
    title: "Ilan Biniashvili — Graphic Designer",
    description: "Visual communication is structure, hierarchy, rhythm, and meaning.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#060D0C",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased">
        <CustomCursor />
        <PageLoader />
        <AppShell>
          <SmoothScroll>{children}</SmoothScroll>
        </AppShell>
      </body>
    </html>
  );
}
