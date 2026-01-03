import { Header } from "@/components/Header";
import { ArchitecturePrizeWinnerBanner } from "@/components/ArchitecturePrizeWinnerBanner";
import { Hero } from "@/components/Hero";
import { GhostDigitSection } from "@/components/GhostDigitSection";
import { EssayTeaserSection } from "@/components/EssayTeaserSection";
import { EnergyArticleSection } from "@/components/EnergyArticleSection";
import { PropertyGrid } from "@/components/PropertyGrid";
import { AboutProjectSection } from "@/components/AboutProjectSection";
import { EnergySection } from "@/components/EnergySection";
import { AwardsSection } from "@/components/AwardsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Wesselkvartalet - Askers nye hjerte"
        description="Ledige lokaler og fasiliteter i Wesselkvartalet - moderne arkitektur møter bærekraftig innovasjon i Asker sentrum"
        canonicalUrl="https://wesselkvartalet.no/"
      />
      <Header />
      <main>
        <Hero />
        <GhostDigitSection />
        <EssayTeaserSection />
        <ArchitecturePrizeWinnerBanner />
        <EnergyArticleSection />
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
