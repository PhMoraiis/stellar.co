import { Hero } from "@/components/Hero";
import { Header } from "../components/Header";
import { Section } from "@/components/Section";
import { EssensegSection } from "@/components/EssensegSection";

export default function Home() {
  return (
    <div className="bg-[#050505]">
      <div className="back">
        <Header />
        <Hero />
      </div>
      <Section />
      <EssensegSection />
    </div>
  );
}
