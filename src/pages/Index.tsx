import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { PropertyGrid } from "@/components/PropertyGrid";
import { ProjectGallery } from "@/components/ProjectGallery";
import { ArchitectSection } from "@/components/ArchitectSection";
import { EnergySection } from "@/components/EnergySection";
import { AwardsSection } from "@/components/AwardsSection";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <PropertyGrid />
        <ProjectGallery />
        <ArchitectSection />
        <EnergySection />
        <AwardsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
