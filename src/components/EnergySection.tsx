import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function EnergySection() {
  const energyHighlights = [
    {
      icon: "🏭",
      title: "Total kapasitet",
      stat: "13.5 MW",
      description: "Norges mest innovative energisentral forsyner hele Asker sentrum"
    },
    {
      icon: "🌍",
      title: "CO2-varmepumpe",
      stat: "2 MW",
      description: "Miljøvennlig CO2-teknologi med høy effektivitet"
    },
    {
      icon: "🔋",
      title: "Varmelager i fjell",
      stat: "70,000 m³",
      description: "Ett av Norges største geotermiske varmelagre"
    },
    {
      icon: "🌨️",
      title: "Snøsmelting",
      stat: "8 MW",
      description: "Snø- og isfri sentrum med fornybar energi"
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

  return (
    <section id="energi" className="py-20 hero-gradient">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 text-white">
          <h2 className="text-4xl font-bold mb-6">
            Banebrytende energisentral – Askers naturlige batteri for oppvarming
          </h2>
          <p className="text-xl max-w-4xl mx-auto opacity-95 font-medium leading-relaxed">
            Norges mest innovative energisentral forsyner ikke bare Wesselkvartalet, men hele Asker sentrum med fornybar energi
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {energyHighlights.map((highlight, index) => (
            <Card key={index} className="bg-white/20 backdrop-blur-sm border-white/20 text-white hover:bg-white/25 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="text-3xl mb-4">{highlight.icon}</div>
                <h3 className="font-semibold mb-2">{highlight.title}</h3>
                <div className="text-2xl font-bold text-accent mb-3">{highlight.stat}</div>
                <p className="text-sm text-white/90 leading-relaxed">{highlight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-white/15 backdrop-blur-sm border-white/20 mb-12">
          <CardContent className="p-8">
            <h3 className="text-2xl font-semibold text-center mb-8 text-white">
              Teknisk innovasjon med Enova-støtte
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {innovations.map((innovation, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl mb-4">{innovation.icon}</div>
                  <h4 className="text-lg font-semibold mb-3 text-accent">{innovation.title}</h4>
                  <p className="text-white/90 leading-relaxed">{innovation.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="text-center text-white">
          <p className="text-lg opacity-90 font-medium max-w-4xl mx-auto leading-relaxed mb-8">
            Anlegget representerer et paradigmeskifte innen urban energiforsyning og er forberedt for fremtidig utvidelse til hele Asker-regionen.
          </p>
          <Button 
            variant="outline" 
            className="border-white/20"
            onClick={() => window.location.href = '/wessel-energi'}
          >
            Les mer om Wessel Energi
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}