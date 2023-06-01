import { Hero } from "@/components/Hero";
import { Header } from "../components/Header";
import { Section } from "@/components/Section";
import { Slider } from "@/components/Slider";
import { PreFooter } from "@/components/PreFooter";

export default function Home() {
  return (
    <div className="bg-[#000000]">
      <div className="back">
        <Header />
        <Hero />
      </div>
      <Section />
      <PreFooter />
    </div>
  );
}
