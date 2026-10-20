import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ArchitectureSection } from "@/components/ArchitectureSection";
import { ProjectList } from "@/components/ProjectList";
import { EngineeringNotes } from "@/components/EngineeringNotes";
import { ExperienceSection } from "@/components/Experience";
import { Capabilities } from "@/components/Capabilities";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#111111]">
      <Header />
      <main className="flex-1">
        <Hero />
        {/* <ArchitectureSection /> */}
        <ProjectList />
        <EngineeringNotes />
        <ExperienceSection />
        <Capabilities />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
