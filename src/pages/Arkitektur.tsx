import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArchitectsSection } from "@/components/ArchitectsSection";
import ProjectGallery from "@/components/ProjectGallery";
import { Card, CardContent } from "@/components/ui/card";
import { Book } from "lucide-react";

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
        
        {/* Book Section */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Arkitekturdokumentasjon
              </h2>
              <p className="text-lg text-muted-foreground">
                Wesselkvartalet er dokumentert i den prestisjetunge bokserien asBUILT
              </p>
            </div>
            
            <Card className="bg-background shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Book className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 text-foreground">
                      Project: Wesselkvartalet, architect: Vigsnæs+Kosberg++Arkitekter
                    </h3>
                    <div className="space-y-2 mb-4">
                      <p className="text-muted-foreground">
                        <span className="font-medium">Forfattere:</span> Børre Skodvin, Dagfinn Sagen (red), Karl Otto Ellefsen (red)
                      </p>
                      <p className="text-muted-foreground">
                        <span className="font-medium">Bokserie:</span> asBUILT
                      </p>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      Denne publikasjonen dokumenterer den innovative arkitekturen og designprosessen bak Wesselkvartalet, 
                      og er en del av den anerkjente asBUILT-serien som fremhever eksepsjonell norsk arkitektur.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
        
        <ArchitectsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Arkitektur;