import { Hero } from "@/components/Hero";
import { Header } from "../components/Header";
import { Section } from "@/components/Section";

export default function Home() {
  return (
    <div className="back">
      <Header />
      <Hero />
      <Section />
    </div>
  );
}
