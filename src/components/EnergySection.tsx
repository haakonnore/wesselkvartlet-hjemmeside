import { Card, CardContent } from "@/components/ui/card";

export function EnergySection() {
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
          <p className="text-lg opacity-90 font-medium max-w-4xl mx-auto leading-relaxed">
            Anlegget representerer et paradigmeskifte innen urban energiforsyning og er forberedt for fremtidig utvidelse til hele Asker-regionen.
          </p>
        </div>
      </div>
    </section>
  );
}