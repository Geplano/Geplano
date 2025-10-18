import { HeroSection } from "@/components/layout/hero/hero-section";
import { AboutSection } from "@/components/layout/About";
import { SolutionSection } from "@/components/layout/Solution";
import { FeaturesSection } from "@/components/layout/Features";
import { ProjectsSection } from "@/components/layout/Projetos";
import { ContactSection } from "@/components/layout/Contact";
import { Footer } from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SolutionSection />
      <FeaturesSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </>
  );
}
