import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function WesselEnergi() {
  const energyStats = [
    {
      icon: "🏭",
      title: "Spisslast",
      stat: "13.5 MW",
      description: "Leverer 7 GWh lavtemperert varme årlig til fire store sluttbrukere."
    },
    {
      icon: "🌍🚂",
      title: "CO2 & NH3 -varmepumpe",
      stat: "4 MW",
      description: "2 varmepumper med miljøvennlig CO2 og NH3 som kuldemedium."
    },
    {
      icon: "⏚",
      title: "Åpne geobrønner",
      stat: "25 × 250-400m",
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
      icon: "🌨️",
      title: "Snøsmelting",
      stat: "8 MW",
      description: "Varmelageret leverer opptil 8 MW til snøsmelting i sentrum, reduserer kommunens behov for elkjel betydelig."
    },
    {
      icon: "🥶",
      title: "Garantert fornybar varme og kjøling",
      stat: "5 MW",
      description: "Vi leverer kjøling om sommer og varme om vinter med samme anlegg og kan levere 5 MW kontinuerlig."
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
        "Kontinuerlig leveranse: 5 MW",
        "Spisslastkapasitet: 13.5 MW", 
        "Årlig varmelevering: 7 GWh",
        "Hovedenergikilder: Geotermi + solvarme (gatevarme)"
      ]
    },
    {
      category: "Varmepumpe 1",
      specs: [
        "Kuldemedium: CO2 (R744)",
        "Antall kompressorer: 8 stk",
        "Kapasitet: 2 MW",
        "COP: 3,5 - 5,5",
        "System: Høy- og lavtemperatur"
      ]
    },
    {
      category: "Varmepumpe 2",
      specs: [
        "Kuldemedium: NH3",
        "Antall kompressorer: 1 stk",
        "Kapasitet: 2 MW",
        "COP: 3,5 - 5,5",
        "System: Lavtemperatur"
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
    },
    {
      category: "Elkjele",
      specs: [
        "Kapasitet: 1 MW",
        "Funksjon: Backup system",
        "Type: Elektrisk kjele"
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
                className="border-white/20 mb-6"
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
              <h2 className="text-4xl font-bold mb-6">Økonomisk gevinst: ca 50% ved bruk av vårt varmesystem</h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                Eksempel på timefordelte energiforbruk og produksjon om vinteren
              </p>

            </div>

            <Card className="p-8 mb-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <Card className="bg-green-50 border-green-200 p-6">
                  <h3 className="text-lg font-semibold mb-3 text-green-800">Lavpris-periode (00-06 & 06-12)</h3>
                  <p className="text-green-700">
                    Når strømprisen er lavest, øker vi effekten for å <strong>maksimere produksjonen</strong> av varme til minimal kostnad
                  </p>
                  <div className="mt-4 text-2xl font-bold text-green-600">-22 650 kr</div>
                </Card>
                
                <Card className="bg-green-50 border-green-200 p-6">
                  <h3 className="text-lg font-semibold mb-3 text-green-800">Høypris-periode (12-18)</h3>
                  <p className="text-green-700">
                    Rundt middagstider, når strømprisen er høyest og etterspørselen etter varme er stor, selger vi <strong>mest varme</strong> men vår produksjon er minimal.
                  </p>
                  <div className="mt-4 text-2xl font-bold text-green-600">+39 310 kr</div>
                </Card>
              </div>

              {/* Chart representation */}
              <div className="bg-gradient-to-r from-slate-50 to-slate-100 p-8 rounded-lg">
                <img 
                  src="/lovable-uploads/4d4c7c86-4d23-4fca-90b7-8f9d1ef34fba.png" 
                  alt="Økonomisk gevinst ved bruk av våre varmepumper - timefordelte energiforbruk og produksjon om vinteren"
                  className="w-full h-auto rounded-lg"
                />
              </div>

              <div className="mt-8 text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  Netto døgngevinst: +14 660 kr
                </div>
                <p className="text-lg text-muted-foreground">
                  Grafen viser inntjeningen ved bruk av vårt varmesystem. For hver krone som genereres fra salg av energi, oppnår man i snitt en 50 % besparelse sammenlignet med tradisjonelle oppvarmingsløsninger.
                </p>
              </div>
            </Card>
          </div>
        </section>

        {/* Arbitrage Strategies */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Energiarbitrasje på tre nivåer</h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                Strategisk energioptimalisering gjennom sesong-, måneds- og døgnarbitrasje
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              {/* Seasonal Arbitrage */}
              <Card className="shadow-sm border-l-4 border-l-blue-500">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-blue-700">🗓️ Sesonglagring</h3>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Lagre overskudd fra sommer:</strong> Fange opp varme og kjøling når det naturlig oppstår gjennom årstidene</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Produsere ved lave strømpriser:</strong> Bygge opp sesonglagre når elektrisitetsprisene er gunstige</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Langtidsplanlegging:</strong> Optimalisere energibruk over måneder fremover</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Monthly Arbitrage */}
              <Card className="shadow-sm border-l-4 border-l-green-500">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-green-700">📅 Månedlig balansering</h3>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Værmønster-tilpasning:</strong> Justere kapasitet basert på værprognoser og sesongvariasjoner</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Ekstra kalde/varme dager:</strong> Balansere effektbehov for dager med ekstreme temperaturer</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Kapasitetsplanlegging:</strong> Sikre tilstrekkelig energireserver for uventede behov</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Daily Arbitrage */}
              <Card className="shadow-sm border-l-4 border-l-orange-500">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-orange-700">⏰ Døgnarbitrasje</h3>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Strømpris-optimalisering:</strong> Tilpasse varmepumpedrift til de laveste strømprisene døgnet rundt</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Forbruksmønster-analyse:</strong> Arbeide rundt elektrisk forbruksmønster for optimal timing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Automatisk styring:</strong> Intelligente systemer som maksimerer effektivitet time for time</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Combined Strategy Benefits */}
            <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-center mb-6">
                  Kombinert strategisk fordel
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-primary">🎯 Økonomisk optimalisering</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Ved å kombinere alle tre arbitrasjenivåer oppnår systemet maksimal økonomisk effektivitet. 
                      Energiproduksjon og -forbruk optimaliseres kontinuerlig basert på markedspriser, værforhold og forbruksbehov.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-primary">⚡ Nettbalansering</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Systemet bidrar til stabilisering av det elektriske nettet ved å redusere belastning i høylastperioder 
                      og øke forbruk når det er overskudd av fornybar energi.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Comprehensive Benefits */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Systemets fordeler</h2>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                En komplett oversikt over fordelene ved vårt innovative energisystem
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {/* Environmental Benefits */}
              <Card className="shadow-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-green-700">🌱 Miljøfordeler</h3>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Garantert fornybar energi:</strong> 100% fornybar oppvarming og kjøling</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>CO2 og NH3 som kuldemedium:</strong> Bruker miljøvennlig CO2 og NH3 i stedet for vanlige klimagasser</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Redusert utslipp:</strong> Arbitrasje muliggjør produksjon når strømmen er fornybar</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>


              {/* Technical Benefits */}
              <Card className="shadow-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-purple-700">⚙️ Tekniske fordeler</h3>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Høy effektivitet:</strong> COP varierer mellom 3 og 6</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Optimal drift:</strong> Mindre varmepumpe som kjører på 100% eller er avslått</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Redusert infrastruktur:</strong> Mindre overføringskapasitet nødvendig enn andre systemer</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Building Classification */}
              <Card className="shadow-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-orange-700">🏆 Bygningsklassifisering</h3>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>EU-standard:</strong> Nye prosjekter klassifiseres som Klasse A i henhold til EU Energy Performance of Buildings Directive</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>BREEAM-excellent:</strong> Systemet bidrar til å oppnå BREEAM-excellent klassifisering</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* System Efficiency */}
              <Card className="shadow-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-red-700">🎯 Systemeffektivitet</h3>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Optimal kapasitetsutnyttelse:</strong> Varmepumper kjører på maksimal effektivitet i stedet for 30-40% delkapasitet</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Direkte varmeuttrekk:</strong> Varme hentes fra temperaturreservoar, ikke direkte fra varmepumpe</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Grid Benefits */}
              <Card className="shadow-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-teal-700">⚡ Nettfordeler</h3>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Nettavlastning:</strong> Reduserer behov for nettutbygging og stabiliserer strømnettet</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Ground Heat and Grid Relief */}
              <Card className="shadow-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-emerald-700">🔋 Grunnvarme og avlastning av strømnettet</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Wessel Energi bidrar til å avlaste strømnettet betydelig ved å redusere behovet for elektrisk oppvarming. 
                    Store varmepumper henter varme fra energibrønner i bakken og distribuerer dette som vannbåren varme til bygg. 
                    Denne metoden er langt mer effektiv enn direkte elektrisk oppvarming og reduserer belastningen på strømnettet, 
                    bidrar til å utjevne strømforbruket og reduserer risikoen for overbelastning.
                  </p>
                </CardContent>
              </Card>

              {/* Frequency Market */}
              <Card className="shadow-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-indigo-700">⚡ Wessel Energi og frekvensmarkedet</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Wessel Energi deltar aktivt i reguleringsmarkedet (frekvensmarkedet) for å opprettholde nettstabilitet. 
                    Varmepumpene fungerer som "flytende forbruk" som kan justeres opp eller ned i sanntid for å holde frekvensen 
                    nær 50 Hz. Når frekvensen synker, reduseres strømforbruket midlertidig, og når den stiger, økes forbruket. 
                    Denne raske responsen balanserer produksjon og forbruk og sikrer nettstabilitet.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Environmental Impact */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Kundecaser og fremtid</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="shadow-sm">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-4 text-primary">🌱 Kundecaser</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></span>
                      <span>Erstattet 7 MW oljekjele i Asker kommune</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></span>
                      <span>Wesselkvartalet er A klassifisert</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></span>
                      <span>Naturlig kjøling med grunnvann til alle påkoblede kunder</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></span>
                    <span>Elvelykvartalet sparte utbygging av egen sentral og ny trafo</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></span>
                      <span>Miljøvennlig varme og kjøling til alle påkoblede kunder</span>
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
                      <span>Utvidelse til Asker-stasjon og perronger</span>
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
                      <span>Referanseprosjekt for nye anlegg i andre byer</span>
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