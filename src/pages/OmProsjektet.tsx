import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Book, Building2, History, Palmtree, ShoppingCart, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArchitectsSection } from "@/components/ArchitectsSection";
import ProjectGallery from "@/components/ProjectGallery";
import bookImage from "@/assets/wesselkvartalet-book.jpg";

const OmProsjektet = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Get active tab from hash or default to 'historie'
  const [activeTab, setActiveTab] = useState("historie");

  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (["historie", "byutvikling", "arkitektur", "essay"].includes(hash)) {
      setActiveTab(hash);
    }
  }, [location.hash]);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    navigate(`#${value}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Om Prosjektet - Fra historie til arkitektonisk perle | Wesselkvartalet"
        description="Lær mer om Wesselkvartalets fascinerende historie, utviklingsreisen fra familietomt til moderne byutvikling, og den prisbelønte arkitekturen."
        canonicalUrl="https://wesselkvartalet.no/om-prosjektet"
      />
      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Om Prosjektet</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Utforsk historien bak, visjonen for og realiseringen av Wesselkvartalet.
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
            <div className="sticky top-20 z-40 bg-background/95 backdrop-blur-sm py-4 border-b">
              <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 max-w-4xl mx-auto h-auto p-1">
                <TabsTrigger value="historie" className="flex items-center gap-2 py-3 px-4">
                  <History className="h-4 w-4" />
                  <span className="hidden sm:inline">Historien</span>
                  <span className="sm:hidden">Historie</span>
                </TabsTrigger>
                <TabsTrigger value="byutvikling" className="flex items-center gap-2 py-3 px-4">
                  <Palmtree className="h-4 w-4" />
                  <span className="hidden sm:inline">Byutvikling</span>
                  <span className="sm:hidden">Utvikling</span>
                </TabsTrigger>
                <TabsTrigger value="arkitektur" className="flex items-center gap-2 py-3 px-4">
                  <Building2 className="h-4 w-4" />
                  <span className="hidden sm:inline">Arkitektur</span>
                  <span className="sm:hidden">Design</span>
                </TabsTrigger>
                <TabsTrigger value="essay" className="flex items-center gap-2 py-3 px-4">
                  <Book className="h-4 w-4" />
                  <span>Frie Tøyler</span>
                </TabsTrigger>
              </TabsList>
            </div>

            <div className="mt-12 max-w-4xl mx-auto">
              {/* HISTORIEN OM APOTEKERGÅRDEN */}
              <TabsContent value="historie" className="space-y-12 animate-in fade-in duration-500">
                <section>
                  <h2 className="text-3xl font-bold mb-8 text-center">Historien om Apotekergården</h2>
                  <div className="relative mx-auto max-w-3xl mb-8">
                    <img src="/lovable-uploads/ab39b28a-08fc-4222-bc6f-b2bc78b18399.png" alt="Historisk bilde av Wesselgården" className="w-full h-auto rounded-xl shadow-lg" />
                  </div>
                  <div className="prose prose-lg dark:prose-invert mx-auto">
                    <p>
                      Historien til Wesselkvartalet er tett knyttet til familien Wessel og deres eiendom, Wesselgården. Den opprinnelige eieren, Thor Wessel, overtok apoteket og den tilhørende hagen i 1927. Siden den gang har eiendommen gått i arv, og arvingene er i dag representert av Nore-familien.
                    </p>
                    <p>
                      I 2014 kom Tandberg Eiendom inn som medeier. Dette sterke, familiedrevne eierskapet har bidratt til en solid lokal forankring, med et unikk fokus på kvalitet over kvantitet. Byggherre Henrik Nore understreker at kvartalet «ikke er profittmaksimert» – valget av buede former fremfor en firkantet kloss bevisst prioriterte arkitektonisk kvalitet og bymiljø fremfor flest mulig kvadratmeter.
                    </p>

                    <h3 className="mt-8">Fra historisk bygård til moderne kvartal</h3>
                    <p>
                      Før dagens kvartal sto ferdig, var området preget av eldre bebyggelse, inkludert Wesselgården og Bankveien 4. En viktig del av denne historien er flyttingen av Apotekergården (bygget i 1924) i 1997, 50 meter lenger mot Torvveien. Denne bevaringen av den historiske trebygningen viser hvordan arkitektur kan integreres i moderne byutvikling.
                    </p>

                    <div className="my-12">
                      <img src="/lovable-uploads/db80c6e7-1807-4d06-a5c2-41a8f782353f.png" alt="Asker jernbanestasjon ca. 1947" className="w-full h-auto rounded-xl shadow-lg" />
                      <p className="text-sm text-muted-foreground text-center mt-4 italic">
                        Asker jernbanestasjon med Apotekergården i bakgrunnen ca. 1947
                      </p>
                    </div>

                    <h3>Etableringen av apoteket</h3>
                    <p>
                      Saken om apotek i Asker tok lang tid før apoteker Ragnar Boyesen den 6. november 1914 fikk bevilling. Han bygget opp den første apotekergården i 1915. Den brant ned i 1923, men ble bygget opp igjen året etter på samme grunnmur, med de endringer i byggestilen slik den fremstår i dag.
                    </p>
                    <p>
                      I august 1997 ble den gamle apotekergården flyttet av flere lastebiler til samme nivå som den omkringliggende bebyggelsen og plassert på nyoppsatt grunnmur – en teknisk komplisert oppgave som ble fulgt spent av lokalbefolkningen.
                    </p>

                    <p className="text-sm text-muted-foreground italic mt-12 border-t pt-4">
                      Basert på tekster av Alf "Bassen" Andersen (1998)
                    </p>
                  </div>
                </section>
              </TabsContent>

              {/* BYUTVIKLING */}
              <TabsContent value="byutvikling" className="space-y-12 animate-in fade-in duration-500">
                <section>
                  <h2 className="text-3xl font-bold mb-8 text-center">Fra familietomt til bærekraftig byutvikling</h2>

                  <div className="prose prose-lg dark:prose-invert mx-auto">
                    <p>
                      Utviklingen av Wesselkvartalet startet som et samarbeid mellom to familier: Wessel/Nore og Tandberg. Mandatet fra familien var klart: "Bygg noe vi kan være stolte av."
                    </p>

                    <div className="my-12 p-8 bg-muted/30 rounded-2xl">
                      <h3 className="mt-0">Henrik Nore – Utvikleren</h3>
                      <p>
                        Henrik Johannes Nore er daglig leder for Wesselkvartalet AS. Som han selv uttrykker det: "Wesselkvartalet er ikke profittmaksimert, da hadde vi heller bygget en firkantet kloss." Denne filosofien gjenspeiler fokuset på kvalitet fremfor kortsiktig vinning.
                      </p>
                    </div>

                    <div className="my-12">
                      <img src="/lovable-uploads/6bf20f99-1b6e-4b59-b43b-e7258f7fe24f.png" alt="Gudbrand Tandberg, Henrik Nore og Espen Tandberg" className="w-full h-auto rounded-xl shadow-lg" />
                      <p className="text-sm text-muted-foreground text-center mt-4 italic">
                        Vokste opp sammen på Høn: Gudbrand Tandberg (t.v.), Henrik Nore og Espen Tandberg
                      </p>
                    </div>

                    <h3>Partnerskapet med Tandberg Eiendom</h3>
                    <p>
                      For lokale i Asker er Tandberg-familien kjent som drivkrefter bak store deler av byens utvikling. Deres ekspertise muliggjorde realiseringen av dette ambisiøse prosjektet, som inkluderer 52 leiligheter og omfattende nærings- og kontorarealer.
                    </p>

                    <h3>Wessel Energi</h3>
                    <p>
                      En sentral del av bærekraftmålene er Wessel Energi AS, et nærvarmeanlegg basert på geotermisk varme fra 20 brønner boret 300 meter ned i berggrunnen. Dette er et resultat av Henrik Nores sterke miljøengasjement.
                    </p>

                    <div className="my-12">
                      <img src="/lovable-uploads/3a33e679-e60c-4c1f-9ffe-901184601499.png" alt="Henrik Nore og Håkon Vigsnæs" className="w-full h-auto rounded-xl shadow-lg" />
                      <p className="text-sm text-muted-foreground text-center mt-4 italic">
                        Byggherre Henrik Nore (t.v.) og arkitekt Håkon Vigsnæs. Foto: Marit Helland
                      </p>
                    </div>

                    <h3>Samarbeidet med Vi-Ko</h3>
                    <p>
                      Vigsnæs+Kosberg++ Arkitekter fikk stort spillerom og koordinerte prosjektgruppa under ledelse av Henrik Nore. Ved å beholde arkitekten direkte underlagt byggherren gjennom hele totalentreprisen, sikret man at den arkitektoniske visjonen aldri ble vannet ut.
                    </p>
                  </div>
                </section>
              </TabsContent>

              {/* ARKITEKTUR */}
              <TabsContent value="arkitektur" className="space-y-16 animate-in fade-in duration-500">
                <section>
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Arkitektonisk kvalitet</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                      Opplev den unike arkitekturen som definerer Wesselkvartalet – moderne design som møter bærekraftig innovasjon.
                    </p>
                  </div>

                  <ArchitectsSection />

                  <div className="mt-16">
                    <ProjectGallery />
                  </div>

                  <div className="mt-20">
                    <h3 className="text-2xl font-bold mb-8 text-center">Anerkjennelse og dokumentasjon</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <Card className="bg-muted/10 border-none shadow-sm h-full">
                        <CardContent className="p-8">
                          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                            <Book className="w-6 h-6 text-primary" />
                          </div>
                          <h4 className="text-xl font-bold mb-4">asBUILT-serien</h4>
                          <p className="text-muted-foreground mb-6">
                            Publikasjonen "Project: Wesselkvartalet" dokumenterer den innovative designprosessen og fremhever kvartalet som et eksempel på eksepsjonell norsk arkitektur.
                          </p>
                          <Button asChild variant="outline" size="sm">
                            <a href="https://www.akademika.no/dokumentar-og-fakta/kunst-og-kultur/project-wesselkvartalet-architect-vigsnaeskosbergarkitekter/9788253044606" target="_blank" rel="noopener noreferrer">Se boken</a>
                          </Button>
                        </CardContent>
                      </Card>

                      <Card className="bg-muted/10 border-none shadow-sm h-full">
                        <CardContent className="p-8">
                          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                            <Palmtree className="w-6 h-6 text-primary" />
                          </div>
                          <h4 className="text-xl font-bold mb-4">DOGA-merket</h4>
                          <p className="text-muted-foreground mb-6">
                            Mottaker av DOGA-merket for design og arkitektur, en utmerkelse som anerkjenner prosjekter som bidrar til bedre samfunnsutvikling gjennom designkvalitet.
                          </p>
                          <Button asChild variant="outline" size="sm">
                            <a href="https://doga.no/aktiviteter/dogas-priser/doga-merket-design-arkitektur/vinnere-av-doga-merket/wesselkvartalet/" target="_blank" rel="noopener noreferrer">Les mer</a>
                          </Button>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </section>
              </TabsContent>

              {/* ESSAY: FRIE TØYLER */}
              <TabsContent value="essay" className="space-y-12 animate-in fade-in duration-500">
                <article className="prose prose-lg dark:prose-invert mx-auto">
                  <header className="text-center mb-12 not-prose">
                    <h2 className="text-4xl font-bold mb-2">FRIE TØYLER</h2>
                    <p className="text-muted-foreground text-xl italic">Av Børre Skodvin</p>
                  </header>

                  <div className="bg-muted/30 p-8 rounded-2xl mb-12 not-prose border">
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                      <div className="flex-shrink-0 w-32 h-44">
                        <img
                          src={bookImage}
                          alt="Wesselkvartalet book cover"
                          className="w-full h-full object-cover rounded shadow-xl"
                        />
                      </div>
                      <div className="flex-1 text-center md:text-left">
                        <h3 className="text-xl font-bold mb-2">Project: Wesselkvartalet</h3>
                        <p className="text-muted-foreground text-sm mb-6">
                          Dette essayet er hentet fra boken om Wesselkvartalets arkitektoniske utvikling og samfunnsmessige betydning.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                          <Button asChild>
                            <a href="https://www.norli.no/boker/hobby-og-fritid/kunst-og-kultur/arkitektur/project-wesselkvartalet-architect-vigsnaes-kosberg-arkitekter" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                              <ShoppingCart className="h-4 w-4" /> Kjøp boken
                            </a>
                          </Button>
                          <Button variant="outline" asChild>
                            <a href="https://www.arkitektur.no/prosjekter/bolig/wesselkvartalet/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                              <ExternalLink className="h-4 w-4" /> Les mer
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="lead font-medium text-xl">
                    Wesselkvartalet i Asker har blitt mottatt med nærmest unison begeistring og fremstår som et sjeldent eksempel på høy arkitektonisk kvalitet i norsk kommersiell boligutvikling.
                  </p>

                  <p>
                    Det nylig ferdigstilte Wesselkvartalet i Asker sentrum har blitt mottatt med nærmest unison begeistring fra alle kanter. Ifølge Morgenbladets arkitekturkritiker er prosjektet «…et forbilde for hvordan de vanskelige sentrumsområdene rett utenfor Oslo må utvikles.»
                  </p>

                  <p>
                    Wesselkvartalet har en egenartet og uvanlig arkitektur, som samtidig med den største selvfølgelighet finner sin plass i situasjonen. Formspråket kan minne om det ekspresjonistiske uttrykket til Amsterdamskolen tidlig på 1900-tallet, eller assosiasjoner til Antoni Gaudis arkitektur.
                  </p>

                  <div className="py-8">
                    <blockquote>
                      "Wesselkvartalet er ikke profittmaksimert, da hadde vi heller bygget en firkantet kloss. Det ville åpenbart gitt oss bedre økonomi."
                      <cite className="block text-sm mt-2 font-normal">— Henrik Nore</cite>
                    </blockquote>
                  </div>

                  <p>
                    Suksessen bygger på et unikt samspill mellom tre aktører: En visjonær kommuneplansjef med stayer-evne, lokale utbyggere med hundreårs-perspektiv som bryr seg om omdømme, og arkitekter som har fått betydelig mer ansvar og frihet enn vanlig.
                  </p>

                  <p>
                    Norsk boligarkitektur kan bli mye bedre hvis utviklere gis – eller tar seg – friere tøyler til å prioritere kvalitet over maksimal profitt. Når markedet ikke krever høy kvalitet, må utviklerne selv velge å investere i bedre arkitektur, noe som på lang sikt er lønnsomt både for stedet og for byggherren selv.
                  </p>
                </article>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div >
  );
};

export default OmProsjektet;
