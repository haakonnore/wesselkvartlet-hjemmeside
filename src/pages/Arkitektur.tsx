import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArchitectsSection } from "@/components/ArchitectsSection";
import ProjectGallery from "@/components/ProjectGallery";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Book, ExternalLink, Award, Globe, Newspaper, MapPin } from "lucide-react";

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
                Anerkjennelse og dokumentasjon
              </h2>
              <p className="text-lg text-muted-foreground">
                Wesselkvartalet har fått bred anerkjennelse og er dokumentert i prestisjetunge publikasjoner
              </p>
            </div>
            
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Book Card */}
              <Card className="bg-background shadow-lg h-full">
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Book className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold mb-2 text-foreground">
                        Project: Wesselkvartalet, architect: Vigsnæs+Kosberg++Arkitekter
                      </h3>
                    </div>
                  </div>
                  <div className="space-y-2 mb-4">
                    <p className="text-muted-foreground text-sm">
                      <span className="font-medium">Forfattere:</span> Børre Skodvin, Dagfinn Sagen (red), Karl Otto Ellefsen (red)
                    </p>
                    <p className="text-muted-foreground text-sm">
                      <span className="font-medium">Bokserie:</span> asBUILT
                    </p>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6 text-sm flex-1">
                    Denne publikasjonen dokumenterer den innovative arkitekturen og designprosessen bak Wesselkvartalet, 
                    og er en del av den anerkjente asBUILT-serien som fremhever eksepsjonell norsk arkitektur.
                  </p>
                  <Button asChild size="sm" className="inline-flex items-center gap-2 w-fit">
                    <a 
                      href="https://www.akademika.no/dokumentar-og-fakta/kunst-og-kultur/project-wesselkvartalet-architect-vigsnaeskosbergarkitekter/9788253044606" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Kjøp boken
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Arkitektur.no Card */}
              <Card className="bg-background shadow-lg h-full">
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Globe className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold mb-2 text-foreground">
                        Arkitektur.no - Prosjektomtale
                      </h3>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6 text-sm flex-1">
                    Les mer om Wesselkvartalet på Arkitektur.no, Norges ledende plattform for 
                    arkitektur og design. Her finner du detaljert informasjon om prosjektet, 
                    arkitektoniske løsninger og designprinsipper.
                  </p>
                  <Button asChild size="sm" className="inline-flex items-center gap-2 w-fit">
                    <a 
                      href="https://www.arkitektur.no/prosjekter/bolig/wesselkvartalet/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Les på Arkitektur.no
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
              <Card className="bg-background shadow-lg h-full">
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Award className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold mb-2 text-foreground">
                        DOGA-merket for design og arkitektur
                      </h3>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6 text-sm flex-1">
                    Wesselkvartalet har mottatt DOGA-merket, en prestisjetung utmerkelse som tildeles 
                    prosjekter med høy designkvalitet og som bidrar til en bedre samfunnsutvikling. 
                    Utmerkelsen anerkjenner prosjektets innovative arkitektur og bærekraftige tilnærming.
                  </p>
                  <Button asChild size="sm" className="inline-flex items-center gap-2 w-fit">
                    <a 
                      href="https://doga.no/aktiviteter/dogas-priser/doga-merket-design-arkitektur/vinnere-av-doga-merket/wesselkvartalet/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Les mer hos DOGA
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Morgenbladet Article Card */}
              <Card className="bg-background shadow-lg h-full">
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Newspaper className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold mb-2 text-foreground">
                        Morgenbladet - Arkitekturomtale
                      </h3>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6 text-sm flex-1">
                    "Arkitektur som på egen hånd gjør Asker til et bedre sted" - Les Morgenbladets 
                    dyptgående artikkel om hvordan Wesselkvartalet bidrar til å transformere 
                    og forbedre Asker sentrum gjennom gjennomtenkt arkitektur.
                  </p>
                  <Button asChild size="sm" className="inline-flex items-center gap-2 w-fit">
                    <a 
                      href="https://www.morgenbladet.no/kultur/arkitektur-som-pa-egen-hand-gjor-asker-til-et-bedre-sted/9344631" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Les artikkel
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Archello International Card */}
              <Card className="bg-background shadow-lg h-full">
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold mb-2 text-foreground">
                        International omtale
                      </h3>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6 text-sm flex-1">
                    Wesselkvartalet har fått internasjonal oppmerksomhet på Archello, 
                    en global plattform for arkitektur og design. Prosjektet fremheves 
                    som et eksempel på innovativ skandinavisk arkitektur.
                  </p>
                  <Button asChild size="sm" className="inline-flex items-center gap-2 w-fit">
                    <a 
                      href="https://archello.com/project/wesselkvartalet-7?fbclid=IwQ0xDSwMLq9djbGNrAwuryWV4dG4DYWVtAjExAAEeus1Yj9t3mtQCHZmkrz3ZvJrDmvonyPv2u11naXEbMAwIaFxzFbkhYoTyW9g_aem_ML2crdqJDafsokWEsl65yw" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Se på Archello
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        <ArchitectsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Arkitektur;