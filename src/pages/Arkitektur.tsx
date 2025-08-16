import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArchitectsSection } from "@/components/ArchitectsSection";
import ProjectGallery from "@/components/ProjectGallery";

const Arkitektur = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <div className="pt-20 pb-10">
          <div className="text-center max-w-4xl mx-auto px-6">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Arkitektur
            </h1>
            <p className="text-xl text-muted-foreground">
              Opplev den unike arkitekturen som definerer Wesselkvartalet - fra innovative designløsninger til de kreative visjonene bak prosjektet
            </p>
          </div>
        </div>
        <ProjectGallery />
        <ArchitectsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Arkitektur;