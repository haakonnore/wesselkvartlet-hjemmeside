import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { PropertyGrid } from "@/components/PropertyGrid";
import { AboutProjectSection } from "@/components/AboutProjectSection";
import { EnergySection } from "@/components/EnergySection";
import { AwardsSection } from "@/components/AwardsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <PropertyGrid />
        <AboutProjectSection />
        <EnergySection />
        <AwardsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
