import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

export function GhostDigitSection() {
  const objectives = [
    {
      icon: "🧮",
      title: "Avanserte simuleringsmodeller",
      description:
        "Videreutvikling av simuleringsverktøy for brønnbaserte (BTES) og frakturerte/akvifer termiske energilagre (F/ATES) – inkludert komplekse brønnkonfigurasjoner og koblet varmetransport i heterogene bergarter.",
    },
    {
      icon: "📡",
      title: "Dataintegrasjon & kalibrering",
      description:
        "Integrering av driftsdata for løpende kalibrering og oppdatering av modellene, slik at systemene kan tas bedre beslutninger gjennom hele levetiden.",
    },
    {
      icon: "⚡",
      title: "Differensierbar simulering",
      description:
        "Nøkkelinnovasjon: ved å gjøre simuleringsmodellene differensierbare kan nøyaktige gradienter beregnes, noe som muliggjør effektiv optimalisering av driftsstrategier og systemdesign.",
    },
    {
      icon: "🤖",
      title: "Digitale tvillinger",
      description:
        "Levende, fysikkbaserte modeller av geotermiske energilagre som kontinuerlig oppdateres med driftsdata – brukt til prediksjon, optimalisering og beslutningsstøtte.",
    },
  ];

  const caseStudies = [
    {
      name: "Wesselkvartalet",
      location: "Asker",
      description:
        "Et flerfaset geotermisk lagersystem med tre reservoarer på ulik dybde (5, 20 og 400 m) og over hundre brønner. Studerer energilekkasje, grunnvannsinteraksjon og optimale driftsforhold.",
      highlight: true,
    },
    {
      name: "GeoTermos / Fjell Skole",
      location: "Drammen",
      description:
        "100 brønner à 50 m dybde under parkeringsanlegg – lagrer solenergi om sommeren og varmer 10 000 m² bygningsareal om vinteren.",
      highlight: false,
    },
    {
      name: "Kvitebjørn / Skattøra",
      location: "Tromsø",
      description:
        "Høytemperatur UTES-løsning (140 °C) i 300 m dype brønner. Mål: 6–8 MW utlastningskapasitet og 20 GWh lagringsvolum for å redusere elektrisk oppvarming.",
      highlight: false,
    },
    {
      name: "LKAB / GeoTermos",
      location: "Narvik",
      description:
        "Industrielt BTES-system for å fase ut fossile brensler i energiintensiv jernmalmsindustri. Overskuddsvarme lagres i fjell og gjenvinnes om vinteren.",
      highlight: false,
    },
  ];

  const publications = [
    {
      title: "Fimbul.jl – fast, flexible, robust, and differentiable geothermal energy simulation in Julia",
      venue: "EAGE GET 2025",
      href: "https://doi.org/10.3997/2214-4609.202521164",
    },
    {
      title: "Conceptualizing, Simulating and Optimizing the Integrated Operation of a Multi-Component UTES System",
      venue: "EAGE Annual Conference 2024",
      href: "https://doi.org/10.3997/2214-4609.2024101335",
    },
    {
      title: "Proxy Models for Rapid Simulation of Underground Thermal Energy Storage",
      venue: "EAGE GET 2024",
      href: "https://doi.org/10.3997/2214-4609.202421075",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-blue-950 to-indigo-950 text-white" id="ghost-digit">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-800/50 border border-blue-500/40 rounded-full px-4 py-2 text-sm font-medium text-blue-200 mb-6">
            <span>🔬</span> SINTEF Forskningsprosjekt 2024–2027
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight">
            GHOST DigiT
          </h2>
          <p className="text-blue-200 text-base md:text-xl max-w-3xl mx-auto leading-relaxed">
            Wesselkvartalet er ett av fire casestudier i dette europeiske forskningsprosjektet,
            som utvikler digitale tvillinger og avanserte simuleringsverktøy for å optimalisere
            geotermiske energilagre – og bidra til den grønne energiomstillingen.
          </p>
          <a
            href="https://www.sintef.no/en/projects/2024/ghost-digit/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
            aria-label="Les mer om GHOST DigiT på SINTEF (åpnes i ny fane)"
          >
            Les mer på sintef.no
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>

        {/* Project overview */}
        <div className="mb-12 md:mb-16">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-white">Om prosjektet</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-blue-100 text-sm md:text-base leading-relaxed">
                <p>
                  GHOST DigiT er et SINTEF-ledet kunnskapsbyggingsprosjekt for industrien, finansiert
                  over perioden 2024–2027. Prosjektet utvikler digital tvillingteknologi for underjordiske
                  varmelagre – fra brønnbaserte systemer (BTES) til akvifertermisk lagring (ATES/FTES).
                </p>
                <p>
                  Ved å kombinere fysikkbaserte simuleringsmodeller med driftsdata ønsker prosjektet å
                  redusere usikkerhet og forbedre beslutningsgrunnlaget gjennom hele levetiden til slike
                  anlegg – fra design og bygging til daglig drift og langtidsplanlegging.
                </p>
              </div>
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                {[
                  { label: "Varighet", value: "2024–2027" },
                  { label: "Prosjekttype", value: "KPN" },
                  { label: "Casestudier", value: "4 anlegg" },
                  { label: "Partnere", value: "5 selskaper" },
                ].map((item) => (
                  <div key={item.label} className="bg-blue-800/40 rounded-lg p-3">
                    <div className="text-lg md:text-xl font-bold text-blue-300">{item.value}</div>
                    <div className="text-xs text-blue-200 mt-1">{item.label}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Objectives */}
        <div className="mb-12 md:mb-16">
          <h3 className="text-2xl md:text-3xl font-semibold text-center mb-8 text-white">
            Mål og metodikk
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {objectives.map((obj, i) => (
              <Card key={i} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-colors duration-200">
                <CardContent className="p-5 md:p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl flex-shrink-0">{obj.icon}</div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">{obj.title}</h4>
                      <p className="text-blue-200 text-sm leading-relaxed">{obj.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Case Studies */}
        <div className="mb-12 md:mb-16">
          <h3 className="text-2xl md:text-3xl font-semibold text-center mb-4 text-white">
            Casestudier
          </h3>
          <p className="text-center text-blue-200 mb-8 max-w-2xl mx-auto">
            Metodene og de digitale tvillingkonseptene valideres gjennom fire norske anlegg i full skala.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {caseStudies.map((cs, i) => (
              <Card
                key={i}
                className={`backdrop-blur-sm border transition-colors duration-200 ${
                  cs.highlight
                    ? "bg-green-600/30 border-green-400/50 hover:bg-green-600/40"
                    : "bg-white/10 border-white/20 hover:bg-white/15"
                }`}
              >
                <CardContent className="p-5">
                  {cs.highlight && (
                    <div className="inline-block bg-green-500/30 border border-green-400/50 rounded-full px-2 py-0.5 text-xs text-green-200 mb-3 font-medium">
                      ✓ Wesselkvartalet
                    </div>
                  )}
                  <h4 className="font-semibold text-white mb-1">{cs.name}</h4>
                  <div className="text-xs text-blue-300 mb-3">{cs.location}</div>
                  <p className="text-blue-200 text-sm leading-relaxed">{cs.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Partners */}
        <div className="mb-12 md:mb-16">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-white">Partnere</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "Wessel Energi AS",
                  "Ruden AS",
                  "Kvitebjørn Varme AS",
                  "Seabrokers Geoenergi AS",
                  "Asplan Viak AS",
                ].map((partner) => (
                  <span
                    key={partner}
                    className={`px-4 py-2 rounded-full text-sm font-medium border ${
                      partner === "Wessel Energi AS"
                        ? "bg-green-600/40 border-green-400/60 text-green-200"
                        : "bg-blue-800/40 border-blue-500/30 text-blue-200"
                    }`}
                  >
                    {partner}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Scientific Publications */}
        <div>
          <h3 className="text-2xl md:text-3xl font-semibold text-center mb-8 text-white">
            Vitenskapelige publikasjoner
          </h3>
          <div className="space-y-4">
            {publications.map((pub, i) => (
              <a
                key={i}
                href={pub.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
                aria-label={`Les publikasjon: ${pub.title}`}
              >
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-colors duration-200">
                  <CardContent className="p-5 flex items-start gap-4">
                    <div className="text-blue-400 flex-shrink-0 mt-0.5">
                      <ExternalLink className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-white font-medium text-sm md:text-base leading-snug">
                        {pub.title}
                      </p>
                      <p className="text-blue-300 text-xs mt-1">{pub.venue}</p>
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
          <p className="text-center text-blue-300 text-sm mt-6">
            Open-source simuleringsverktøy:{" "}
            <a
              href="https://github.com/sintefmath/Fimbul.jl"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-white underline underline-offset-2 transition-colors"
            >
              Fimbul.jl på GitHub
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}
