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
                className="border-white/20 mb-6 text-white hover:text-primary hover:bg-white"
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

        {/* Economic Benefits Chart */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Økonomisk gevinst: ca 50% ved bruk av våre varmepumper</h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                Timefordelte Energiforbruk og Produksjon Om Vinteren
              </p>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto mt-4">
                Grafen viser inntjeningen ved bruk av våre varmepumper. For hver krone som genereres fra salg av strøm, oppnår man en fortjeneste på 50 øre.
              </p>
            </div>

            <Card className="p-8 mb-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <Card className="bg-green-50 border-green-200 p-6">
                  <h3 className="text-lg font-semibold mb-3 text-green-800">Lavpris-periode (00-06 & 06-12)</h3>
                  <p className="text-green-700">
                    Når strømprisen er lavest, øker vi forbruket for å <strong>maksimere produksjonen</strong> av varme til minimal kostnad
                  </p>
                  <div className="mt-4 text-2xl font-bold text-green-600">-2265 kr besparelse</div>
                </Card>
                
                <Card className="bg-green-50 border-green-200 p-6">
                  <h3 className="text-lg font-semibold mb-3 text-green-800">Høypris-periode (12-18)</h3>
                  <p className="text-green-700">
                    Rundt middagstider, når strømprisen er høyest og etterspørselen etter varme er stor, selger vi <strong>mest varme</strong> men vår produksjon er minimal.
                  </p>
                  <div className="mt-4 text-2xl font-bold text-green-600">+3306 kr fortjeneste</div>
                </Card>
              </div>

              {/* Chart representation */}
              <div className="bg-gradient-to-r from-slate-50 to-slate-100 p-8 rounded-lg">
                <div className="grid grid-cols-4 gap-4 mb-8">
                  {[
                    { time: "00-06", produced: 380, delivered: 250, profit: -566 },
                    { time: "06-12", produced: 350, delivered: 250, profit: -1699 },
                    { time: "12-18", produced: 80, delivered: 320, profit: 3306 },
                    { time: "18-00", produced: 260, delivered: 340, profit: 625 }
                  ].map((period, index) => (
                    <div key={period.time} className="text-center">
                      <div className="mb-4">
                        <h4 className="font-semibold mb-2">{period.time}</h4>
                        <div className="flex justify-center space-x-2 mb-2">
                          <div 
                            className="w-8 bg-orange-400 rounded"
                            style={{ height: `${period.produced / 4}px` }}
                            title="Varme produsert"
                          ></div>
                          <div 
                            className="w-8 bg-yellow-400 rounded"
                            style={{ height: `${period.delivered / 4}px` }}
                            title="Varme levert"
                          ></div>
                        </div>
                        <div className={`text-sm font-bold ${period.profit > 0 ? 'text-green-600' : 'text-red-600'}`}>
                          {period.profit > 0 ? '+' : ''}{period.profit}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="flex justify-center space-x-8 text-sm">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-green-500 rounded mr-2"></div>
                    <span>Vinst og tap</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-orange-400 rounded mr-2"></div>
                    <span>Varme produsert</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-yellow-400 rounded mr-2"></div>
                    <span>Varme levert</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  Netto årsgevinst: +1,466 kr
                </div>
                <p className="text-lg text-muted-foreground">
                  50% besparelse sammenlignet med tradisjonelle oppvarmingsløsninger
                </p>
              </div>
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