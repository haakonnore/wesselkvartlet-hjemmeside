import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { ArchitectsSection } from "@/components/ArchitectsSection";
import ProjectGallery from "@/components/ProjectGallery";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Book, ExternalLink, Award, Globe, Newspaper, MapPin, MessageCircle, LucideIcon } from "lucide-react";

interface RecognitionItem {
  icon: LucideIcon;
  title: string;
  description: string;
  metadata?: { label: string; value: string }[];
  link: {
    url: string;
    text: string;
  };
}

const recognitions: RecognitionItem[] = [
  {
    icon: Book,
    title: "Project: Wesselkvartalet, architect: Vigsnæs+Kosberg++Arkitekter",
    description: "Denne publikasjonen dokumenterer den innovative arkitekturen og designprosessen bak Wesselkvartalet, og er en del av den anerkjente asBUILT-serien som fremhever eksepsjonell norsk arkitektur.",
    metadata: [
      { label: "Forfattere", value: "Børre Skodvin, Dagfinn Sagen (red), Karl Otto Ellefsen (red)" },
      { label: "Bokserie", value: "asBUILT" }
    ],
    link: {
      url: "https://www.akademika.no/dokumentar-og-fakta/kunst-og-kultur/project-wesselkvartalet-architect-vigsnaeskosbergarkitekter/9788253044606",
      text: "Kjøp boken"
    }
  },
  {
    icon: Globe,
    title: "Arkitektur.no - Prosjektomtale",
    description: "Les mer om Wesselkvartalet på Arkitektur.no, Norges ledende plattform for arkitektur og design. Her finner du detaljert informasjon om prosjektet, arkitektoniske løsninger og designprinsipper.",
    link: {
      url: "https://www.arkitektur.no/prosjekter/bolig/wesselkvartalet/",
      text: "Les på Arkitektur.no"
    }
  },
  {
    icon: Award,
    title: "DOGA-merket for design og arkitektur",
    description: "Wesselkvartalet har mottatt DOGA-merket, en prestisjetung utmerkelse som tildeles prosjekter med høy designkvalitet og som bidrar til en bedre samfunnsutvikling. Utmerkelsen anerkjenner prosjektets innovative arkitektur og bærekraftige tilnærming.",
    link: {
      url: "https://doga.no/aktiviteter/dogas-priser/doga-merket-design-arkitektur/vinnere-av-doga-merket/wesselkvartalet/",
      text: "Les mer hos DOGA"
    }
  },
  {
    icon: Newspaper,
    title: "Morgenbladet - Arkitekturomtale",
    description: "\"Arkitektur som på egen hånd gjør Asker til et bedre sted\" - Les Morgenbladets dyptgående artikkel om hvordan Wesselkvartalet bidrar til å transformere og forbedre Asker sentrum gjennom gjennomtenkt arkitektur.",
    link: {
      url: "https://www.morgenbladet.no/kultur/arkitektur-som-pa-egen-hand-gjor-asker-til-et-bedre-sted/9344631",
      text: "Les artikkel"
    }
  },
  {
    icon: MapPin,
    title: "International omtale",
    description: "Wesselkvartalet har fått internasjonal oppmerksomhet på Archello, en global plattform for arkitektur og design. Prosjektet fremheves som et eksempel på innovativ skandinavisk arkitektur.",
    link: {
      url: "https://archello.com/project/wesselkvartalet-7?fbclid=IwQ0xDSwMLq9djbGNrAwuryWV4dG4DYWVtAjExAAEeus1Yj9t3mtQCHZmkrz3ZvJrDmvonyPv2u11naXEbMAwIaFxzFbkhYoTyW9g_aem_ML2crdqJDafsokWEsl65yw",
      text: "Se på Archello"
    }
  },
  {
    icon: MessageCircle,
    title: "Aftenposten - Arkitekturomtale",
    description: "\"Hvorfor blir noen hus så fine? Det handler om kvalitet, ikke om stil\" - Les Aftenpostens kommentar om kvalitet i arkitektur, der Wesselkvartalet fremheves som et eksempel på eksepsjonell bygningskvalitet og håndverk.",
    link: {
      url: "https://www.aftenposten.no/kultur/kommentar/i/onr0a7/hvorfor-blir-noen-hus-saa-fine-det-handler-om-kvalitet-ikke-om-stil",
      text: "Les kommentar"
    }
  }
];

const Arkitektur = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEOHead
        title="Arkitektur - Vigsnæs+Kosberg++ Arkitekter | Wesselkvartalet"
        description="Utforsk Wesselkvartalets prisbelønte arkitektur av Vigsnæs+Kosberg++ Arkitekter. Moderne design møter bærekraftig innovasjon."
        canonicalUrl="https://wesselkvartalet.no/arkitektur"
      />
      <Header />
      <main className="flex-grow">
        <div className="pt-24 pb-12">
          <div className="text-center max-w-4xl mx-auto px-6">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Arkitektur
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Opplev den unike arkitekturen som definerer Wesselkvartalet - fra innovative designløsninger til de kreative visjonene bak prosjektet.
            </p>
          </div>
        </div>
        
        <ArchitectsSection />
        
        <ProjectGallery />
        
        {/* Recognition Section */}
        <section className="py-20 bg-muted/30 scroll-mt-20" id="anerkjennelse">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Anerkjennelse og dokumentasjon
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Wesselkvartalet har fått bred anerkjennelse og er dokumentert i prestisjetunge publikasjoner
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recognitions.map((item, index) => (
                <Card key={index} className="bg-background shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                  <CardContent className="p-8 flex flex-col h-full">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                          <item.icon className="w-6 h-6 text-primary" />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-bold leading-tight text-foreground">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                    
                    {item.metadata && (
                      <div className="space-y-2 mb-4 bg-muted/50 p-3 rounded-md text-sm">
                        {item.metadata.map((meta, idx) => (
                          <p key={idx} className="text-muted-foreground">
                            <span className="font-semibold text-foreground">{meta.label}:</span> {meta.value}
                          </p>
                        ))}
                      </div>
                    )}

                    <p className="text-muted-foreground leading-relaxed mb-8 text-sm flex-1">
                      {item.description}
                    </p>

                    <Button asChild variant="outline" size="sm" className="w-fit mt-auto hover:bg-primary hover:text-primary-foreground group transition-colors">
                      <a 
                        href={item.link.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        {item.link.text}
                        <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Arkitektur;