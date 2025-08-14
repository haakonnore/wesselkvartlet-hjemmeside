import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function WesselEnergi() {
  const energyStats = [
    {
      icon: "🏭",
      title: "Total kapasitet",
      stat: "13.5 MW",
      description: "Teoretisk spisslastkapasitet med 3 MW kontinuerlig leveranse. Leverer 7 GWh lavtemperert varme årlig til fire store sluttbrukere."
    },
    {
      icon: "🌍",
      title: "CO2-varmepumpe",
      stat: "2 MW",
      description: "8 kompressorer med miljøvennlig CO2 (R744) som kuldemedium. Høy- og lavtemperatur rørsystemer optimaliserer effektiviteten."
    },
    {
      icon: "⚡",
      title: "Åpne geobrønner",
      stat: "20 × 300m",
      description: "Dype brønner i fjell under parkeringskjelleren leverer like mye energi som et mye større tradisjonelt anlegg med lukkede brønner."
    },
    {
      icon: "🔋",
      title: "Varmelager i fjell",
      stat: "70,000 m³",
      description: "95 brønnhull på 20m dybde + oppsprukket fjell gir nesten 1 GWh lagringskapasitet - ett av Norges største geotermiske varmelagre."
    },
    {
      icon: "❄️",
      title: "Gatevarme som energikilde",
      stat: "25,000 m²",
      description: "Gatevarmesløyfer fungerer som bakkesolfanger - hentet over 1700 kW som lagres på 38°C for senere bruk."
    },
    {
      icon: "🏢",
      title: "Forsyningsområde",
      stat: "140",
      description: "Leiligheter i 3 boligblokker + næringsarealer + kommunal gatevarme. Utvidelse planlagt til Føyka-Elvely."
    },
    {
      icon: "⚙️",
      title: "Driftseffektivitet",
      stat: "COP 4.1",
      description: "Gjennomsnittlig virkningsgrad gjennom hele fyringssesongen siden 2020. Elkjel på 1 MW kun som backup."
    },
    {
      icon: "🌨️",
      title: "Snøsmelting",
      stat: "8 MW",
      description: "Varmelageret leverer opptil 8 MW til snøsmelting i sentrum, reduserer kommunens behov for elkjel betydelig."
    }
  ];

  const innovations = [
    {
      icon: "🔬",
      title: "Forskning & utvikling",
      description: "2-delt varmelagring i fjell med oppsprekking prøves globalt for første gang. Omfattende målinger optimaliserer systemet kontinuerlig."
    },
    {
      icon: "🏗️",
      title: "Kompakt design",
      description: "3D-modellert energisentral i rustfritt stål passar inn under nedkjøringsrampe uten å ta parkeringsplasser."
    },
    {
      icon: "🤝",
      title: "Kommunalt samarbeid",
      description: "Asker kommune faset ut 7 MW oljekjele og bruker lokalt produsert geovarme for snø- og isfri sentrum."
    }
  ];

  const technicalSpecs = [
    {
      category: "Energiforsyning",
      specs: [
        "Kontinuerlig leveranse: 3 MW",
        "Spisslastkapasitet: 13.5 MW", 
        "Årlig varmelevering: 7 GWh",
        "Hovedenergikilder: Geotermi + gatevarme"
      ]
    },
    {
      category: "Varmepumpesystem",
      specs: [
        "Kuldemedium: CO2 (R744)",
        "Antall kompressorer: 8 stk",
        "Kapasitet: 2 MW",
        "System: Høy- og lavtemperatur rørsystemer"
      ]
    },
    {
      category: "Energilagring",
      specs: [
        "Lagringsvolum: 70,000 m³",
        "Lagringskapasitet: ~1 GWh",
        "Brønnhull: 95 stk × 20m dybde",
        "Lagringstemperatur: 38°C"
      ]
    },
    {
      category: "Geotermi",
      specs: [
        "Geobrønner: 20 stk × 300m",
        "Type: Åpne brønner i fjell",
        "Plassering: Under parkeringskjeller",
        "Kapasitet: Tilsvarende større lukket system"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="hero-gradient py-20 text-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-8">
              <Button 
                variant="outline" 
                className="border-white/20 text-white hover:bg-white/10 mb-6"
                onClick={() => window.history.back()}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Tilbake til Wesselkvartalet
              </Button>
            </div>
            
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold mb-6">
                Wessel Energi
              </h1>
              <p className="text-xl max-w-4xl mx-auto opacity-95 font-medium leading-relaxed">
                Norges mest innovative energisentral - Askers naturlige batteri for oppvarming av hele sentrum
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {energyStats.map((stat, index) => (
                <Card key={index} className="bg-white/20 backdrop-blur-sm border-white/20 text-white hover:bg-white/25 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl mb-4">{stat.icon}</div>
                    <h3 className="font-semibold mb-2">{stat.title}</h3>
                    <div className="text-2xl font-bold text-accent mb-3">{stat.stat}</div>
                    <p className="text-sm text-white/90 leading-relaxed">{stat.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Tekniske spesifikasjoner</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Detaljert oversikt over systemets kapasiteter og komponenter
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {technicalSpecs.map((category, index) => (
                <Card key={index} className="shadow-sm">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4 text-primary">{category.category}</h3>
                    <ul className="space-y-2">
                      {category.specs.map((spec, specIndex) => (
                        <li key={specIndex} className="flex items-start">
                          <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-muted-foreground">{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Innovation Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
              <CardContent className="p-8">
                <h3 className="text-3xl font-semibold text-center mb-8">
                  Teknisk innovasjon med Enova-støtte
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {innovations.map((innovation, index) => (
                    <div key={index} className="text-center">
                      <div className="text-4xl mb-4">{innovation.icon}</div>
                      <h4 className="text-lg font-semibold mb-3 text-primary">{innovation.title}</h4>
                      <p className="text-muted-foreground leading-relaxed">{innovation.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Environmental Impact */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Miljøpåvirkning og fremtid</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="shadow-sm">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-4 text-primary">🌱 Miljøeffekt</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></span>
                      <span>Erstattet 7 MW oljekjele i Asker kommune</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></span>
                      <span>Redusert CO2-utslipp med tusenvis av tonn årlig</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></span>
                      <span>100% fornybar energi til oppvarming</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></span>
                      <span>Miljøvennlig CO2 som kuldemedium</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-sm">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-4 text-primary">🚀 Fremtidsplaner</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                      <span>Utvidelse til Føyka-Elvely området</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                      <span>Potensial for hele Asker-regionen</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                      <span>Paradigmeskifte i urban energiforsyning</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                      <span>Referanseprosjekt for andre byer</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Wessel Energi representerer fremtiden for bærekraftig byutvikling og er et bevis på at innovative energiløsninger kan skape både miljøgevinster og økonomisk verdi.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}