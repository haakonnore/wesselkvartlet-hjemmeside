import { Header } from "@/components/Header";
import { ArchitecturePrizeWinnerBanner } from "@/components/ArchitecturePrizeWinnerBanner";
import { Hero } from "@/components/Hero";
import { EssayTeaserSection } from "@/components/EssayTeaserSection";
import { EnergyArticleSection } from "@/components/EnergyArticleSection";
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
      <ArchitecturePrizeWinnerBanner />
      <main>
        <Hero />
        <EssayTeaserSection />
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
