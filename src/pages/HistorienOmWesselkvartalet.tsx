import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const HistorienOmWesselkvartalet = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section with Historical Image */}
        <section className="relative py-16 bg-gradient-to-b from-muted/30 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Historien om hvordan Wesselkvartalet ble til
              </h1>
              <div className="relative mx-auto max-w-2xl mb-8">
                <img 
                  src="/lovable-uploads/ab39b28a-08fc-4222-bc6f-b2bc78b18399.png"
                  alt="Historisk bilde av Wesselgården (Apotekergården) i vinter"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 bg-black/20 rounded-lg"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
              
              <h2 className="text-3xl font-bold mb-6 text-foreground">
                Velkommen til Wesselkvartalet – Et Levende Hjerte i Asker Sentrum
              </h2>
              
              <p className="text-muted-foreground leading-relaxed mb-8">
                Wesselgården har vært i Wessel-familiens eie siden Thor Wessel overtok den. I 2011 kom Tandberg Eiendom inn på eiersiden, og i dag er eierskapet til Wesselkvartalet AS fordelt med 51% til barnebarn og oldebarn av Thor Wessel (nå Nore, representert ved som styreleder og prosjektleder Henrik Nore) og 49% til Tandberg Eiendom. De to familieeide selskapene eierskapet har gitt prosjektet en viktig lokal forankring og fokus på kvalitet i arkitektur og stedsutvikling.
              </p>

              <h3 className="text-2xl font-semibold mb-4 text-foreground">
                Fra Wesselgården og Bankveien 10 til et Fremtidsrettet Kvartal
              </h3>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                Før det ble kjent som Wesselkvartalet, var dette området preget av eldre bebyggelse, inkludert Wesselgården (også kjent som Apotekergården) og Bankveien 10 – også kjent som Sentrumsgården. Dette var et historisk viktig punkt i Asker, og utviklingen av Wesselkvartalet representerer en ambisiøs transformasjon.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                En interessant del av historien er at Wesselgården, eller Apotekergården, ble flyttet i 1929. Dette skjedde i forbindelse med at apoteker Thor Wessel overtok gården, og hele bygningen ble flyttet til en ny plassering like ved sin opprinnelige lokasjon. Dette viser at området har en lang historie med endringer og tilpasninger.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-8">
                Med dype røtter i Asker, har både Nore-familien og Tandberg-familien vokst opp på Høn, og Henrik, Espen og Gubrand er fortsatt bosatt i Asker.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-8">
                Visjonen for det nye kvartalet var å skape et dynamisk og attraktivt sentrumsområde som ivaretar stedets identitet samtidig som det tilbyr moderne fasiliteter. Til og med en bevaringsverdig trevilla som huset Peppes Pizza ble flyttet for å gi plass til det nye. Byggeprosjektet ble påbegynt rundt 2019 og ferdigstilt i 2021/2022.
              </p>

              <h3 className="text-2xl font-semibold mb-4 text-foreground">
                En Arkitektonisk Perle med Priser og Anerkjennelse
              </h3>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                Wesselkvartalet, tegnet av Vigsnæs+Kosberg++ Arkitekter, utmerker seg med sin nyskapende og særpregede arkitektur. I motsetning til den mer tradisjonelle, rektangulære bebyggelsen i området, kjennetegnes Wesselkvartalet av myke, buede linjer og fasader kledd i lys teglstein. Denne unike designen er ikke bare estetisk tiltalende, men også funksjonell, utformet for å maksimere dagslys og redusere støy, samtidig som den skaper spennende og menneskevennlige gangforløp.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-8">
                Bruken av relieffmurverk, flettverksmuring og inntrukne skift i teglfasaden gir bygget et rikt detaljpreg som endrer karakter med lyset gjennom dagen. Wesselkvartalets arkitektoniske kvalitet har blitt anerkjent med prestisjetunge priser, blant annet Murverksprisen i 2021 og DOGA-merket for design og arkitektur i 2022.
              </p>

              <h3 className="text-2xl font-semibold mb-4 text-foreground">
                Et Levende Samlingspunkt for Bolig, Handel og Fritid
              </h3>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                Wesselkvartalet er et blandingskvartal som tilbyr en komplett urban livsstil. Her finner du:
              </p>

              <ul className="list-disc pl-6 mb-8 space-y-4 text-muted-foreground">
                <li>
                  <strong className="text-foreground">Boliger:</strong> Et mangfold av moderne leiligheter med smarte løsninger, de fleste med balkonger eller private takterrasser.
                </li>
                <li>
                  <strong className="text-foreground">Næringslokaler:</strong> Et pulserende utvalg av butikker, kafeer og restauranter på gateplan, samt kontorlokaler.
                </li>
                <li>
                  <strong className="text-foreground">Fellesarealer:</strong> Et frodig og innbydende fellesområde med en urban hage og et vakkert vannspeil som innbyr til avslapning og sosiale møter. I tillegg er det felles takhager med mulighet for leie av private parseller for dyrking.
                </li>
                <li>
                  <strong className="text-foreground">Parkering:</strong> En romslig underjordisk parkeringskjeller for beboere og besøkende.
                </li>
              </ul>

              <p className="text-muted-foreground leading-relaxed text-lg">
                Wesselkvartalet har blitt et sentralt samlingspunkt i Asker, et sted hvor du kan bo, arbeide, handle og nyte det urbane livet i et estetisk tiltalende og funksjonelt utformet miljø. Det er et kvartal som er designet for å skape en følelse av fellesskap og tilbyr alt du trenger i umiddelbar nærhet.
              </p>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HistorienOmWesselkvartalet;