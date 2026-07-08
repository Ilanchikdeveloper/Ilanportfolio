import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { WhoAmI } from "@/components/sections/WhoAmI";
import { Branding } from "@/components/sections/Branding";
import { OtherWork } from "@/components/sections/OtherWork";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <About />
        <WhoAmI />
        <Branding />
        <OtherWork />
      </main>
      <Footer />
    </>
  );
}
