import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const FraFamilietomtTilByutvikling = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-16 bg-gradient-to-b from-muted/30 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Wesselkvartalet: Fra familietomt til bærekraftig byutvikling
              </h1>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
              
              <p className="text-muted-foreground leading-relaxed mb-8">
                Utviklingen av Wesselkvartalet startet da Tandberg eiendom kjøpte seg inn i familieselskapet til Wessel/Nore familien i 2015 med en eierandel på 47%. Prosjektet ble utviklet i samarbeid mellom to familier som kjente hverandre fra Høn. Mandatet Henrik fikk fra familien var å bygge noe vi kunne være stolte av.
              </p>

              <h3 className="text-2xl font-semibold mb-4 text-foreground">
                Henrik Nore - utvikler og prosjektleder for Wesselkvartalet
              </h3>
              
              <p className="text-muted-foreground leading-relaxed mb-8">
                Henrik Johannes Nore, født i 1959 og bosatt i Nesbru, er daglig leder for Wesselkvartalet AS (tidligere Apotekergården og Bankveien 4) og Wessel Energi AS (etablert 2018). Som Henrik selv uttrykker det: "Wesselkvartalet er ikke profittmaksimert, da hadde vi heller bygget en firkantet kloss" - en filosofi som gjenspeiler fokuset på kvalitet fremfor kvantitet.
              </p>

              <h3 className="text-2xl font-semibold mb-4 text-foreground">
                Partnerskapet med Tandberg Eiendom
              </h3>

              <div className="relative mx-auto max-w-2xl mb-8">
                <img src="/lovable-uploads/9cb76891-08d1-4213-b269-02b584356261.png" alt="Vokste opp sammen på Høn: Gudbrand Tandberg(t.v.), Henrik Nore og Espen Tandberg" className="w-full h-auto rounded-lg shadow-lg" />
                <div className="absolute inset-0 bg-black/10 rounded-lg"></div>
                <p className="text-sm text-muted-foreground text-center mt-2 italic">
                  Vokste opp sammen på Høn: Gudbrand Tandberg(t.v.), Henrik Nore og Espen Tandberg
                </p>
              </div>
              
              <p className="text-muted-foreground leading-relaxed mb-8">
                For lokale i Asker er Tandberg Familien og deres selskap Tandberg Eiendom godt kjent som praktisk talt enerådende på eiendom i området. Tandberg drifter større deler av Asker sentrum, og har de siste årene blant annet markert seg ved utbygging i Heggedal Torg, Sykepleierskolen på Dikemark og kanskje ikke minst da de sammen med den lokale Asker helten: Jan Wangaard - hentet "Maud" hjem. (<a href="https://www.nrk.no/urix/xl/polarskuta-_maud_-pa-veg-heim---100-ar-etter-at-amundsen-sin-ekspedisjon-starta-1.14071057" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">link</a>)
              </p>

              <h3 className="text-2xl font-semibold mb-4 text-foreground">
                Fra apotek til moderne byutvikling
              </h3>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                Eiendommens historie strekker seg tilbake til 1927, da Henrik Nores bestefar Thor Wessel overtok et apotek med stor hage i Asker sentrum. Apoteket lå omtrent der det nåværende syv-etasjes bygget står i dag.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Utviklingen har skjedd gradvis over flere tiår. Familien bygde sitt første næringsbygg langs Bankveien i 1960, flyttet apoteket 50 meter sør i 1997, og har hatt ulike planer for tomta siden midten av 1980-tallet.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Det avgjørende vendepunktet kom i 2014 da Tandberg Eiendom kjøpte seg inn med 47% eierandel. Tandberg eiendom sin eiendomsutviklingsekspertise muliggjorde realiseringen av det ambisiøse prosjektet.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Planleggingen startet i 2015 med Vigsnæs+Kosberg++ Arkitekter. Byggingen begynte i januar 2018 og ble ferdigstilt i 2020, til tross for utfordringer med grunnforholdene, inkludert uventede kampesteiner som krevde omfattende sprenging 13 meter under bakken.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-8">
                Bygget inneholder 52 leiligheter på 45-131 m², 1 900 m² næringsarealer på bakkeplan og 2100 m² kontorarealer i 2.etg. Stedets historie er bevart ved at den gamle apotekerbygningen fra 1924 ble flyttet og bevart og "Apotekerhagen", et offentlig parkområde som refererer til de opprinnelige hagen rundt Apotekergården.
              </p>

              <h3 className="text-2xl font-semibold mb-4 text-foreground">
                Wessel Energi og geotermisk teknologi
              </h3>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                Wessel Energi AS, etablert i 2018 som heleid datterselskap, driver et geotermisk energisystem basert på 20 brønner boret 300 meter ned i berggrunnen under parkeringskjelleren. Systemet har også 95 termiske lagringsbrønner på 20 meters dybde.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-8">
                I Wesselkvartalet har Henrik fått realisere sitt miljøengasjement gjennom byggingen av et nærvarmeanlegg basert på geotermisk varme (varmepumper), varmelager i fjell og solvarme fra asker kommune sitt gatevarmeanlegg. Anlegget er utviklet med bistand fra hydrogeolog Ruden AS og Norconsult. Les mer om Wessel Energi her: <a href="/wessel-energi" className="text-primary hover:underline">Wessel Energi</a>
              </p>

              <h3 className="text-2xl font-semibold mb-4 text-foreground">
                Samarbeidet med arkitektene
              </h3>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                Wesselkvartalet ble bygget som en totalentreprise av SV Betong fra Rogaland. (Nå Consto AS). I byggfasen var arkitekten direkte underlagt byggherren, og vi hadde dermed full kontroll over kvaliteten. Dette er svært uvanlig. Vanligvis blir arkitekten transportert til entreprenøren i totalentrepriser. Dermed kunne byggherren gjennom arkitekten beholde kontroll og oversikt fra tidligfase til gjennomføring, og sørge for at endringer underveis ikke gikk utover kvaliteten og helheten i løsningene som ble valgt. Jeg tror dette er en av grunnene til at prosjektet har blitt så bra.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Vigsnæs+Kosberg++ Arkitekter (Vi-Ko) fikk stort spillerom i prosjektet og koordinerte prosjektgruppa under ledelse av Henrik Nore. Tillit er også betegnende for forholdet mellom Wesselkvartalet og Vi-Ko, som fikk stort spillerom og på nærmest gammeldags vis koordinerte prosjektgruppa.
              </p>

              <div className="relative mx-auto max-w-2xl mb-8">
                <img src="/lovable-uploads/942702a4-8b44-4259-ba77-f5fef779f7ec.png" alt="Bygherre Henrik Nore(tv.). Arkitekt Håkon Vigsnæs (til høyre). Foto: MARIT HELLAND" className="w-full h-auto rounded-lg shadow-lg" />
                <div className="absolute inset-0 bg-black/10 rounded-lg"></div>
                <p className="text-sm text-muted-foreground text-center mt-2 italic">
                  Bygherre Henrik Nore(tv.). Arkitekt Håkon Vigsnæs (til høyre). Foto: MARIT HELLAND
                </p>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Arkitektene utfordret reguleringen ved å senke høydene på bebyggelsen mot trehusene i sør og legge ekstra kvadratmetere i punkthuset. De fikk gehør hos kommunen uten krav om omregulering. Ifølge Vi-Ko var bygningsformene nøkkelen for å sikre den relativt høye utnyttelsen innenfor reguleringen.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Som Henrik Nore selv uttaler til bygg.no, gikk det med litt i overkant mange arkitekttimer på arbeidet, men han ser dette som en investering. I Wesselkvartalet er arkitekturen først og fremst en investering, dernest et salgsobjekt. Når forretningsmodellen er eierskap, blir marginene på omsetting av boliger mindre viktige.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Arkitekt Håkon Vigsnæs beskriver bygget som "litt som et sandslott" på grunn av de tegldraperte etasjene med sine murfasader og ornamenterte bånd. Bygget er formet utenfra og inn som en bybygning, der kvartalet danner vegger mot Bankveien og Busserullen og rammer inn et plassrom - Askers tredje torg, kalt "Apotekerhagen" etter den tidligere hagen som lå på stedet.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-8">
                Arkitektene har fokusert på å skape intime plassrom og passasjer uten å gå på kompromiss med kvalitet. Vigsnæs mener det bygges for mange store byrom i Norge, selv om det ofte er de mer intime plass- og gaterom som blir de beste møtestedene. Den bølgende teglen er ikke bare dekor, men et redskap for å formgi myk flyt gjennom små rom mellom gateløp og torg.
              </p>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FraFamilietomtTilByutvikling;