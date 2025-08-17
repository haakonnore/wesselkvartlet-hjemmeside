import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function WesselEnergi() {
  const energyStats = [
    {
      icon: "🏭",
      title: "Spisslast",
      stat: "13.5 MW",
      description:
        "Leverer 7 GWh lavtemperert varme årlig til fire store sluttbrukere.",
    },
    {
      icon: "🌍🚂",
      title: "CO2 & NH3 -varmepumpe",
      stat: "4 MW",
      description:
        "2 varmepumper med miljøvennlig CO2 og NH3 som kuldemedium.",
    },
    {
      icon: "⏚",
      title: "Åpne geobrønner",
      stat: "25 × 250-400m",
      description:
        "Dype brønner i fjell under parkeringskjelleren leverer like mye energi som et mye større tradisjonelt anlegg med lukkede brønner.",
    },
    {
      icon: "🔋",
      title: "Varmelager i fjell",
      stat: "70,000 m³",
      description:
        "95 brønnhull på 20m dybde + oppsprukket fjell gir nesten 1 GWh lagringskapasitet - ett av Norges største geotermiske varmelagre.",
    },
    {
      icon: "❄️",
      title: "Gatevarme som energikilde",
      stat: "25,000 m²",
      description:
        "Gatevarmesløyfer fungerer som bakkesolfanger - hentet over 1700 kW som lagres på 38°C for senere bruk.",
    },
    {
      icon: "🏢",
      title: "Forsyningsområde",
      stat: "140",
      description:
        "Leiligheter i 3 boligblokker + næringsarealer + kommunal gatevarme. Utvidelse planlagt til Føyka-Elvely.",
    },
    {
      icon: "🌨️",
      title: "Snøsmelting",
      stat: "8 MW",
      description:
        "Varmelageret leverer opptil 8 MW til snøsmelting i sentrum, reduserer kommunens behov for elkjel betydelig.",
    },
    {
      icon: "🥶",
      title: "Garantert fornybar varme og kjøling",
      stat: "5 MW",
      description:
        "Vi leverer kjøling om sommer og varme om vinter med samme anlegg og kan levere 5 MW kontinuerlig.",
    },
  ];

  const innovations = [
    {
      icon: "🔬",
      title: "Forskning & utvikling",
      description:
        "2-delt varmelagring i fjell med oppsprekking prøves globalt for første gang. Omfattende målinger optimaliserer systemet kontinuerlig.",
    },
    {
      icon: "🏗️",
      title: "Kompakt design",
      description:
        "3D-modellert energisentral i rustfritt stål passar inn under nedkjøringsrampe uten å ta parkeringsplasser.",
    },
    {
      icon: "🤝",
      title: "Kommunalt samarbeid",
      description:
        "Asker kommune faset ut 7 MW oljekjele og bruker lokalt produsert geovarme for snø- og isfri sentrum.",
    },
  ];

  const technicalSpecs = [
    {
      category: "Energiforsyning",
      specs: [
        "Kontinuerlig leveranse: 5 MW",
        "Spisslastkapasitet: 13.5 MW",
        "Årlig varmelevering: 7 GWh",
        "Hovedenergikilder: Geotermi + solvarme (gatevarme)",
      ],
    },
    {
      category: "Varmepumpe 1",
      specs: [
        "Kuldemedium: CO2 (R744)",
        "Antall kompressorer: 8 stk",
        "Kapasitet: 2 MW",
        "COP: 3,5 - 5,5",
        "System: Høy- og lavtemperatur",
      ],
    },
    {
      category: "Varmepumpe 2",
      specs: [
        "Kuldemedium: NH3",
        "Antall kompressorer: 1 stk",
        "Kapasitet: 2 MW",
        "COP: 3,5 - 5,5",
        "System: Lavtemperatur",
      ],
    },
    {
      category: "Energilagring",
      specs: [
        "Lagringsvolum: 70,000 m³",
        "Lagringskapasitet: ~1 GWh",
        "Brønnhull: 95 stk × 20m dybde",
        "Lagringstemperatur: 38°C",
      ],
    },
    {
      category: "Geotermi",
      specs: [
        "Geobrønner: 20 stk × 300m",
        "Type: Åpne brønner i fjell",
        "Plassering: Under parkeringskjeller",
        "Kapasitet: Tilsvarende større lukket system",
      ],
    },
    {
      category: "Elkjele",
      specs: [
        "Kapasitet: 1 MW",
        "Funksjon: Backup system",
        "Type: Elektrisk kjele",
      ],
    },
  ];

  const periods = [
    { time: "00-06", produced: 380, delivered: 250, profit: -5660 },
    { time: "06-12", produced: 350, delivered: 250, profit: -16990 },
    { time: "12-18", produced: 80, delivered: 320, profit: 33060 },
    { time: "18-00", produced: 260, delivered: 340, profit: 6250 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] rounded bg-primary px-3 py-2 text-sm text-primary-foreground"
      >
        Hopp til innhold
      </a>
      <Header />
      <main id="main">
        {/* Hero Section */}
        <section className="hero-gradient py-12 md:py-20 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="mb-6 md:mb-8">
              <Button
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 w-full sm:w-auto"
                onClick={() => window.history.back()}
                aria-label="Tilbake til Wesselkvartalet"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Tilbake til Wesselkvartalet
              </Button>
            </div>

            <div className="text-center mb-12 md:mb-16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-6 leading-tight">
                Wessel Energi
              </h1>
              <p className="text-base sm:text-lg md:text-xl max-w-3xl md:max-w-4xl mx-auto/95 mx-auto opacity-95 font-medium leading-relaxed">
                Norges mest innovative energisentral - Askers naturlige batteri for oppvarming av hele sentrum
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {energyStats.map((stat, index) => (
                <Card
                  key={index}
                  className="bg-white/20 backdrop-blur-sm border-white/20 text-white md:hover:bg-white/25 transition-all duration-300"
                >
                  <CardContent className="p-4 sm:p-6 text-center">
                    <div className="text-2xl sm:text-3xl mb-2 sm:mb-4">{stat.icon}</div>
                    <h3 className="font-semibold mb-1 sm:mb-2 text-base sm:text-lg">{stat.title}</h3>
                    <div className="text-xl sm:text-2xl font-bold text-green-300 mb-2 sm:mb-3">
                      {stat.stat}
                    </div>
                    <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
                      {stat.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="py-12 md:py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-6">
                Tekniske spesifikasjoner
              </h2>
              <p className="text-base md:text-xl text-muted-foreground max-w-2xl md:max-w-3xl mx-auto">
                Detaljert oversikt over systemets kapasiteter og komponenter
              </p>
            </div>

            {/* Mobile: Accordion */}
            <div className="md:hidden">
              <Accordion type="single" collapsible className="w-full">
                {technicalSpecs.map((cat, i) => (
                  <AccordionItem key={i} value={`item-${i}`}>
                    <AccordionTrigger className="text-left text-base font-semibold text-primary">
                      {cat.category}
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2">
                        {cat.specs.map((spec, si) => (
                          <li key={si} className="flex items-start">
                            <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* Desktop/tablet: Cards */}
            <div className="hidden md:grid grid-cols-2 gap-6">
              {technicalSpecs.map((category, index) => (
                <Card key={index} className="shadow-sm">
                  <CardContent className="p-6">
                    <h3 className="text-lg md:text-xl font-semibold mb-4 text-primary">
                      {category.category}
                    </h3>
                    <ul className="space-y-2">
                      {category.specs.map((spec, specIndex) => (
                        <li key={specIndex} className="flex items-start">
                          <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0" />
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

        {/* Arbitrage Strategies */}
        <section className="py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-6">
                Energiarbitrasje på tre nivåer
              </h2>
              <p className="text-base md:text-xl text-muted-foreground max-w-2xl md:max-w-4xl mx-auto">
                Strategisk energioptimalisering gjennom sesong-, måneds- og døgnarbitrasje
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
              {/* Seasonal Arbitrage */}
              <Card className="shadow-sm border-l-4 border-l-blue-500">
                <CardContent className="p-5 md:p-6">
                  <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-blue-700">
                    🗓️ Sesonglagring
                  </h3>
                  <ul className="space-y-2.5 md:space-y-3 text-sm">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span>
                        <strong>Lagre overskudd fra sommer:</strong> Fange opp varme og kjøling når det naturlig oppstår gjennom årstidene
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span>
                        <strong>Produsere ved lave strømpriser:</strong> Bygge opp sesonglagre når elektrisitetsprisene er gunstige
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span>
                        <strong>Langtidsplanlegging:</strong> Optimalisere energibruk over måneder fremover
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Monthly Arbitrage */}
              <Card className="shadow-sm border-l-4 border-l-green-500">
                <CardContent className="p-5 md:p-6">
                  <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-green-700">
                    📅 Månedlig balansering
                  </h3>
                  <ul className="space-y-2.5 md:space-y-3 text-sm">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span>
                        <strong>Værmønster-tilpasning:</strong> Justere kapasitet basert på værprognoser og sesongvariasjoner
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span>
                        <strong>Ekstra kalde/varme dager:</strong> Balansere effektbehov for dager med ekstreme temperaturer
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span>
                        <strong>Kapasitetsplanlegging:</strong> Sikre tilstrekkelig energireserver for uventede behov
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Daily Arbitrage */}
              <Card className="shadow-sm border-l-4 border-l-orange-500">
                <CardContent className="p-5 md:p-6">
                  <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-orange-700">
                    ⏰ Døgnarbitrasje
                  </h3>
                  <ul className="space-y-2.5 md:space-y-3 text-sm">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span>
                        <strong>Strømpris-optimalisering:</strong> Tilpasse varmepumpedrift til de laveste strømprisene døgnet rundt
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span>
                        <strong>Forbruksmønster-analyse:</strong> Arbeide rundt elektrisk forbruksmønster for optimal timing
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span>
                        <strong>Automatisk styring:</strong> Intelligente systemer som maksimerer effektivitet time for time
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Combined Strategy Benefits */}
            <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-semibold text-center mb-4 md:mb-6">
                  Kombinert strategisk fordel
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  <div>
                    <h4 className="text-base md:text-lg font-semibold mb-2 md:mb-3 text-primary">
                      🎯 Økonomisk optimalisering
                    </h4>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      Ved å kombinere alle tre arbitrasjenivåer oppnår systemet maksimal økonomisk effektivitet. Energiproduksjon og -forbruk optimaliseres kontinuerlig basert på markedspriser, værforhold og forbruksbehov.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-base md:text-lg font-semibold mb-2 md:mb-3 text-primary">
                      ⚡ Nettbalansering
                    </h4>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      Systemet bidrar til stabilisering av det elektriske nettet ved å redusere belastning i høylastperioder og øke forbruk når det er overskudd av fornybar energi.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Economic Benefits Chart */}
          <section className="py-12 md:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <Card className="p-5 md:p-8 mb-8 md:mb-12">
                <h3 className="text-xl md:text-2xl font-semibold text-center mb-4 md:mb-6">
                  Eksempel på gevinst ved bruk av vårt system - timefordelt energiforbruk og produksjon på vinteren
                </h3>

                {/* Cards row */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 mb-6 md:mb-8">
                  <Card className="bg-red-50 border-red-200 p-4 md:p-6">
                    <h4 className="text-base md:text-lg font-semibold mb-2 md:mb-3 text-red-800">
                      Lavpris-periode (00-06 & 06-12)
                    </h4>
                    <p className="text-sm md:text-base text-red-700">
                      Når strømprisen er lavest, øker vi effekten for å <strong>maksimere produksjonen</strong> av varme til minimal kostnad
                    </p>
                    <div className="mt-3 md:mt-4 text-xl md:text-2xl font-bold text-red-600">-22 650 kr</div>
                  </Card>

                  <Card className="bg-green-50 border-green-200 p-4 md:p-6">
                    <h4 className="text-base md:text-lg font-semibold mb-2 md:mb-3 text-green-800">
                      Høypris-periode (12-18)
                    </h4>
                    <p className="text-sm md:text-base text-green-700">
                      Rundt middagstider, når strømprisen er høyest og etterspørselen etter varme er stor, selger vi <strong>mest varme</strong> men vår produksjon er minimal.
                    </p>
                    <div className="mt-3 md:mt-4 text-xl md:text-2xl font-bold text-green-600">+39 310 kr</div>
                  </Card>
                </div>

                {/* Manuell, responsiv minigraf (uten eksterne biblioteker) */}
                <div
                  role="img"
                  aria-label="Sammenligning av varme produsert og levert per tidsintervall"
                  className="bg-gradient-to-r from-slate-50 to-slate-100 p-4 md:p-6 rounded-lg"
                >
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
                    {periods.map((period) => (
                      <div key={period.time} className="text-center">
                        <h4 className="font-semibold mb-2 text-sm md:text-base">{period.time}</h4>
                        <div className="flex justify-center items-end h-40 md:h-48 gap-2">
                          <div
                            className="w-6 sm:w-8 bg-orange-400 rounded"
                            style={{ height: `${Math.max(8, period.produced / 4)}px` }}
                            title={`Varme produsert: ${period.produced}`}
                            aria-label={`Varme produsert ${period.produced}`}
                          />
                          <div
                            className="w-6 sm:w-8 bg-yellow-400 rounded"
                            style={{ height: `${Math.max(8, period.delivered / 4)}px` }}
                            title={`Varme levert: ${period.delivered}`}
                            aria-label={`Varme levert ${period.delivered}`}
                          />
                        </div>
                        <div
                          className={`mt-2 text-xs md:text-sm font-bold ${period.profit > 0 ? "text-green-600" : "text-red-600"}`}
                          aria-label={`Netto ${period.profit > 0 ? "gevinst" : "tap"} ${period.profit} kroner`}
                        >
                          {period.profit > 0 ? "+" : ""}
                          {period.profit} kr
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Legend for profit colors */}
                <div className="mt-4 flex flex-wrap justify-center gap-4 text-xs md:text-sm">
                  <div className="flex items-center">
                    <span className="inline-block w-3 h-3 rounded mr-2 bg-green-500" />
                    <span>Netto gevinst ved høy leveranse</span>
                  </div>
                  <div className="flex items-center">
                    <span className="inline-block w-3 h-3 rounded mr-2 bg-red-500" />
                    <span>Netto tap ved høy produksjon</span>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <div className="text-2xl md:text-3xl font-bold text-green-600 mb-2">
                    Netto døgngevinst: +14 660 kr
                  </div>
                  <p className="text-sm md:text-lg text-muted-foreground">
                    Grafen viser inntjeningen ved bruk av vårt varmesystem. For hver krone som genereres fra salg av energi, oppnår man i snitt en 50 % besparelse sammenlignet med tradisjonelle oppvarmingsløsninger.
                  </p>
                </div>
              </Card>
            </div>
          </section>
        </section>

        {/* Comprehensive Benefits */}
        <section className="py-12 md:py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-6">
                Systemets fordeler
              </h2>
              <p className="text-base md:text-xl text-muted-foreground max-w-2xl md:max-w-4xl mx-auto">
                Wessel Energi representerer fremtiden for bærekraftig byutvikling og er et bevis på at innovative energiløsninger kan skape både miljøgevinster og økonomisk verdi.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 md:mb-12">
              {/* Environmental Benefits */}
              <Card className="shadow-sm">
                <CardContent className="p-5 md:p-6">
                  <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-green-700">
                    🌱 Miljøfordeler
                  </h3>
                  <ul className="space-y-2.5 md:space-y-3 text-sm">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span>
                        <strong>Garantert fornybar energi:</strong> 100% fornybar oppvarming og kjøling
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span>
                        <strong>CO2 og NH3 som kuldemedium:</strong> Bruker miljøvennlig CO2 og NH3 i stedet for vanlige klimagasser
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span>
                        <strong>Redusert utslipp:</strong> Arbitrasje muliggjør produksjon når strømmen er fornybar
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Technical Benefits */}
              <Card className="shadow-sm">
                <CardContent className="p-5 md:p-6">
                  <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-purple-700">
                    ⚙️ Tekniske fordeler
                  </h3>
                  <ul className="space-y-2.5 md:space-y-3 text-sm">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span>
                        <strong>Høy effektivitet:</strong> COP varierer mellom 3 og 6
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span>
                        <strong>Optimal drift:</strong> Mindre varmepumpe som kjører på 100% eller er avslått
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span>
                        <strong>Redusert infrastruktur:</strong> Mindre overføringskapasitet nødvendig enn andre systemer
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span>
                        <strong>Optimal kapasitetsutnyttelse:</strong> Varmepumper kjører på maksimal effektivitet i stedet for 30-40% delkapasitet
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span>
                        <strong>Direkte varmeuttrekk:</strong> Varme hentes fra temperaturreservoar, ikke direkte fra varmepumpe
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Building Classification */}
              <Card className="shadow-sm">
                <CardContent className="p-5 md:p-6">
                  <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-orange-700">
                    🏆 Bygningsklassifisering
                  </h3>
                  <ul className="space-y-2.5 md:space-y-3 text-sm">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span>
                        <strong>EU-standard:</strong> Nye prosjekter klassifiseres som Klasse A i henhold til EU Energy Performance of Buildings Directive
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span>
                        <strong>BREEAM-excellent:</strong> Systemet bidrar til å oppnå BREEAM-excellent klassifisering
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Grid Benefits */}
              <Card className="shadow-sm">
                <CardContent className="p-5 md:p-6">
                  <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-teal-700">
                    ⚡ Nettfordeler
                  </h3>
                  <ul className="space-y-2.5 md:space-y-3 text-sm">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span>
                        <strong>Nettavlastning:</strong> Reduserer behov for nettutbygging og stabiliserer strømnettet
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span>
                        <strong>Deltakelse i reguleringsmarkedet:</strong> Bidrar til å opprettholde stabil nett­frekvens (nær 50 Hz) ved å justere strømforbruket.
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Customer Cases */}
              <Card className="shadow-sm">
                <CardContent className="p-5 md:p-6">
                  <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-blue-700">
                    🤝 Kundecaser
                  </h3>
                  <ul className="space-y-2.5 md:space-y-3 text-sm">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span>
                        <strong>Erstattet 7 MW oljekjele i Asker kommune:</strong> Faser ut fossile oppvarmingsløsninger
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span>
                        <strong>Wesselkvartalet er A klassifisert:</strong> Oppnår høyeste energieffektivitetsklasse
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span>
                        <strong>Naturlig kjøling med grunnvann:</strong> Levert til alle påkoblede kunder
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span>
                        <strong>Elvelykvartalet sparte utbygging:</strong> Unngikk egen sentral og ny trafo
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span>
                        <strong>Miljøvennlig varme og kjøling:</strong> Forsyner alle påkoblede kunder
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Future Plans */}
              <Card className="shadow-sm">
                <CardContent className="p-5 md:p-6">
                  <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-red-700">
                    🚀 Fremtidsplaner
                  </h3>
                  <ul className="space-y-2.5 md:space-y-3 text-sm">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span>
                        <strong>Utvidelse til Føyka-Elvely området:</strong> Ekspanderer forsyningsområdet
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span>
                        <strong>Utvidelse til Asker-stasjon og perronger:</strong> Inkluderer transportknutepunkt
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span>
                        <strong>Potensial for hele Asker-regionen:</strong> Skalering til regional energiløsning
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span>
                        <strong>Paradigmeskifte i urban energiforsyning:</strong> Ny standard for bærekraftig byutvikling
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span>
                        <strong>Referanseprosjekt for nye anlegg:</strong> Mal for andre byer i Norge
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Innovation Section */}
        <section className="py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-semibold text-center mb-6 md:mb-8">
                  Teknisk innovasjon med Enova-støtte
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                  {innovations.map((innovation, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl md:text-4xl mb-3 md:mb-4">{innovation.icon}</div>
                      <h4 className="text-base md:text-lg font-semibold mb-2 md:mb-3 text-primary">
                        {innovation.title}
                      </h4>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                        {innovation.description}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
