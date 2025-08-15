import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { PropertyGrid } from "@/components/PropertyGrid";
import { AboutProjectSection } from "@/components/AboutProjectSection";
import { EnergySection } from "@/components/EnergySection";
import { AwardsSection } from "@/components/AwardsSection";
import { ArchitectsSection } from "@/components/ArchitectsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import ProjectGallery from "@/components/ProjectGallery";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <PropertyGrid />
        <AboutProjectSection />
        <ProjectGallery />
        <EnergySection />
        <AwardsSection />
        <ArchitectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
