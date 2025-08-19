import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ExternalLink, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import bookImage from "@/assets/wesselkvartalet-book.jpg";

const FrieToyler = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Book Purchase Section */}
        <div className="bg-muted/50 rounded-lg p-6 mb-8 border">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="flex-shrink-0">
              <img 
                src={bookImage} 
                alt="Project: Wesselkvartalet book cover" 
                className="w-32 h-40 object-cover rounded shadow-md"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-semibold mb-2 text-foreground">
                Project: Wesselkvartalet, architect: Vigsnæs+Kosberg++Arkitekter
              </h2>
              <p className="text-muted-foreground mb-3">
                Dette essayet er et vedlegg til boken om Wesselkvartalets arkitektoniske utvikling og samfunnsmessige betydning.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild className="flex-1 sm:flex-none">
                  <a 
                    href="https://www.norli.no/boker/hobby-og-fritid/kunst-og-kultur/arkitektur/project-wesselkvartalet-architect-vigsnaes-kosberg-arkitekter" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <ShoppingCart className="h-4 w-4" />
                    Kjøp boken
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a 
                    href="https://www.norli.no/boker/hobby-og-fritid/kunst-og-kultur/arkitektur/project-wesselkvartalet-architect-vigsnaes-kosberg-arkitekter" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Se hos Norli
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <article className="prose prose-lg max-w-none">
          <div className="mb-6">
            <h1 className="text-4xl font-bold mb-2 text-foreground">FRIE TØYLER</h1>
            <p className="text-muted-foreground text-lg italic">Av Børre Skodvin</p>
          </div>

          {/* Summary Section */}
          <div className="bg-muted/30 p-6 rounded-lg mb-8 border-l-4 border-primary">
            <h2 className="text-xl font-semibold mb-4 text-foreground">Sammendrag</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Wesselkvartalet i Asker har blitt mottatt med nærmest unison begeistring og fremstår som et sjeldent eksempel på høy arkitektonisk kvalitet i norsk kommersiell boligutvikling. Med sin organiske teglarkitektur og gjennomtenkte stedstilpasning viser prosjektet at det er mulig å skape noe mer enn den "ambisjonsløse og inkompetente middelmådigheten" som dominerer bransjen.
              </p>
              <p>
                Suksessen bygger på et unikt samspill mellom tre aktører: En visjonær kommuneplansjef (Tor Arne Midtbø) med 40 års erfaring og stayer-evne, lokale utbyggere (Tandberg Eiendom og Nore-familien) med hundreårs-perspektiv som bryr seg om omdømme, og arkitekter som har fått betydelig mer ansvar og frihet enn vanlig. Dette står i sterk kontrast til store utviklere som OBOS og Selvaag, som opererer med marginer på 15-25% mens bransjen generelt ligger på 7,9%.
              </p>
              <p>
                Essayet argumenterer for at norsk boligarkitektur kan bli mye bedre hvis utviklere gis - eller tar seg - friere tøyler til å prioritere kvalitet over maksimal profitt. Når markedet ikke krever høy kvalitet, må utviklerne selv velge å investere i bedre arkitektur, noe som på lang sikt er lønnsomt både for stedet og for byggherren selv.
              </p>
            </div>
          </div>
          
          <div className="text-muted-foreground leading-relaxed space-y-6">
            <p>
              Det nylig ferdigstilte Wesselkvartalet i Asker sentrum har blitt mottatt med nærmest unison begeistring fra alle kanter. Ifølge Morgenbladets arkitekturkritiker er prosjektet «…et forbilde for hvordan de vanskelige sentrumsområdene rett utenfor Oslo må utvikles.» (Morgenbladet, 16.7.2021). Lokalbefolkningen er positiv, og prosjektet har til og med fått noen tomler opp fra deler av det tidvis ganske konservative Arkitekturopprøret.
            </p>
            
            <p>
              Wesselkvartalet har en egenartet og uvanlig arkitektur, som samtidig med den største selvfølgelighet finner sin plass i situasjonen. På yttersiden underordner bygningskvartalet seg gatenes geometri, men på innsiden oppløses denne rektangulære ordenen, og en rik geometri med kurvede vegger og en avtrappet bygningsmasse danner en mykere omslutning rundt en vakker og sørvendt liten park. Ulike teglforband og relieff, balkonger, fremspring og innhukk avtegner lys og skygge og danner et inntrykksrikt og variert bilde. Mot hovedgaten Bankveien er det lagt en portal som skaper en helt ny forbindelse i forlengelsen av Smuget, inn til parken i midten og videre til jernbanestasjonen. På denne måten skapes en tydelig forankring som ikke bare respekterer den eksisterende urbane strukturen, men videreutvikler den med nye forbindelser, siktlinjer og muligheter. Formspråket kan minne om det ekspresjonistiske uttrykket til den såkalte Amsterdamskolen tidlig på 1900-tallet, med sine organiske og skulpturelle teglkonstruksjoner. Det vekker også assosiasjoner til Antoni Gaudis uortodokse arkitektur slik vi ser den i Barcelona. Bygningen fremstår som en hel, skulpturell form med tiltalende proporsjoner og materialitet, et velartikulert uttrykk og en sterk stedstilhørighet.
            </p>
            
            <p>
              Wesselkvartalet AS engasjerte i 2015 Vigsnæs+Kosberg++ Arkitekter til å lage et skisseforslag for utbyggingen. De har samarbeidet med Tandberg ved flere anledninger tidligere, blant annet Sykepleierskolen på Dikemark og galleri Trafo i Asker sentrum. Arkitektene har ifølge utbygger fått betydelig mer ansvar enn hva de sannsynligvis ville opplevd hos mange andre boligutviklere. Ikke alle arkitekter har tilstrekkelig faglig kompetanse og integritet til å bære et slikt ansvar. Men i dette tilfellet er muligheten brukt til å skape noe flott som gir varig verdi, både til stedet og til byggherren.
            </p>
            
            <p>
              Dette er ingen selvfølge. Den som følger med på nye ferdigstilte boligprosjekter vil se at de aller fleste har vært innom en arkitekt. Likevel er det forbausende få som skiller seg nevneverdig ut på grunn av høy arkitektonisk kvalitet.
            </p>
            
            <p>
              Vi vet at store boligutviklere siden 1990 har realisert millioner av kvadratmeter bolig her i landet, verdt milliarder av kroner. Bare en liten håndfull av disse prosjektene har funnet veien til internasjonal fagpresse. Samtidig ser vi at ny norsk arkitektur i dag er et internasjonalt reisemål for fagfolk som vel som turister. Tilsynelatende speiler ikke norsk kommersiell boligarkitektur den samme kvaliteten som norske arkitekter bidrar til i andre sammenhenger.
            </p>
            
            <p>
              Hvorfor er det slik? Da OBOS inviterte til sin årlige boligkonferanse den 30. august 2016 stilte de to spørsmål: «Hvor viktig er arkitekten når byen skal vokse?» og «Er det en motsetning mellom god arkitektur og boliger folk har råd til?» På podiet den dagen møtte vi blant andre Baard Schumann, den gang administrerende direktør i Selvaag bolig ASA. Han konkluderte allerede i tittelen på sitt innlegg: «Det er vanskelig å bygge boliger for folk flest hvis du slipper arkitekten løs!»<sup>1</sup>
            </p>
            
            <p className="text-sm italic">
              <sup>1</sup> https://nye.obos.no/dette-er-obos/boligkonferanse/obos-boligkonferanse-2016/ lest september 2023.
            </p>
            
            <p>
              Det later til å være en utbredt forestilling blant store norske boligutviklere om at arkitekter er nyttige til å pynte prosjektenes fasader, men i jakten på regningssvarende løsninger med akseptabel kvalitet, er det ikke arkitekten man spør om råd. Tvert imot, ifølge OBOS-sjef Daniel Siraj gjør arkitekter at prosjektene blir dyrere enn de trenger å være: «Ved å overkjøre arkitekten, sparte jeg ti millioner på dette prosjektet!»<sup>2</sup>
            </p>
            
            <p className="text-sm italic">
              <sup>2</sup> Daniel Siraj, Boligkonferansen 2016, OBOS, sitert i Arkitektnytt, 2.9.2016.
            </p>
            
            <p>
              Påstanden er at boligarkitektur med høy kvalitet ikke er mulig uten at det enten blir for dyrt for markedet, eller at utbyggere må avstå mer fortjeneste enn de er villige til. Er dette sannhet, eller er det en mytologi skapt for å hegne om marginer som store deler av norsk næringsliv bare kan drømme om?
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">Historien</h2>
            
            <p>
              Wesselkvartalet er bygget inn som en del av den eksisterende kvartalsstrukturen i Asker sentrum og er dermed det foreløpig nyeste tilskuddet til en transformasjon som har pågått over flere tiår. På 1970-tallet var Asker et ruralt tettsted hvor kolonial, bank, baker, bokhandler, urmaker og gullsmed til sammen sikret et minimum av hvilepuls, tilstrekkelig til å hindre sirkulasjonssvikt i denne slitne urbane kroppen. I gatene vandret fortsatt kjente bygdeorginaler. Det fantes to serveringssteder med skjenkerett. På Asker Tesalong, «Tesen», fikk fruene kaker og te, gjerne under epletrærne i hagen på en fin sommerdag. I andre etasje på Corner Kafeteria og snackbar, satt en gjeng som var litt tørstere. Man handlet kolonial over disk i et gammelt trehus på torget, mens flipperspillet gikk varmt inne på Gudims gatekjøkken. I platesjappa satt Ditlef og spilte Hank Marvin-soloer på den gamle Telecasteren sin.
            </p>
            
            <p>
              Midt i denne tilsynelatende idyllen var Asker sentrum samtidig i ferd med å strupes av 70-tallets hemningsløse biltrafikk. Handelslekkasjen til Sandvika, Drammen og Oslo var betydelig, og livsgrunnlaget for det lokale næringslivet ble stadig skrinnere. Etter en arkitektkonkurranse i 1972 startet arbeidet med en ny sentrumsplan for alvor. Hovedhensikten var å tøyle trafikken og etablere gågater. Samtidig skulle planen legge til rette for ny bebyggelse og sanering av uhensiktsmessige eldre hus. Et lite jorde i utkanten av sentrum, den såkalte trekanten, var inkludert, her skulle det bygges næringslokaler og kulturhus.
            </p>
            
            <p>
              Planforslaget ble lagt ut til offentlig ettersyn i april 1977, og med det våknet debatten. I slike sammenhenger blir det gjerne radikalt å være konservativ. Den såkalte Askeraksjonen ble stiftet i oktober 1977 for å informere om, og sloss mot innholdet i planen. De fikk på kort tid stor oppslutning, også med innslag fra andre politiske ståsteder enn venstresiden.
            </p>
            
            <p>
              Litt nærmere Oslo, var Sandvika allerede godt i gang med sin sentrumsutvikling og fikk den tvilsomme æren å tjene som skrekkbilde: «Aldri et nytt Sandvika» ble Askeraksjonens fremste slagord. De var opptatt av å bevare dyrket mark og gamle trehus, småforretninger og lokal næring, og de var mot kjøpesenter. Eller supermarked, som det ble kalt på den tiden. Målet var et sentrum med menneskelig skala, folkeliv, trivsel og redusert biltrafikk.
            </p>
            
            <p>
              I dag, nesten 50 år senere, er mange av de kvalitetene som Askeraksjonen sloss for og etterlyste i planarbeidet, blitt realitet. Den spiren som fantes til urban struktur har blitt pleiet videre, hull har blitt tettet og nye gater og siktlinjer har oppstått. Torget, som på 70-tallet først og fremst var drosjeholdeplass og parkering, har igjen blitt et torg, med handel og liv. Ulikt Sandvika, hvor kjøpesenteret langt på vei har drenert det gamle sentrum for næring og livsgrunnlag, er Askers gater fulle av butikker, kafeer og mennesker. Selvsagt har ikke alle bygninger, nye eller eldre, like god arkitektonisk kvalitet. Men der normen i lignende småsteder gjerne er lav til middels, kan Asker sentrum i dag skilte med arkitektur fra middels til svært høy kvalitet. Utviklingen av dette tettstedet utenfor Oslo har vært en suksess.
            </p>
            
            <p>
              Hvilke grep eller tilfeldigheter er det som har styrt Asker sentrum unna den ambisjonsløse og inkompetente middelmådigheten som dominerer mye av tettstedsutviklingen i Norge?
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">Har kommunen planmakt?</h2>
            
            <p>
              I bolignøden etter krakket i Kristiania i 1899 inntok kommunen en stadig mer sentral rolle i boligbyggingen, og fikk finansiert og oppført en rekke prosjekter, blant annet Torshovbyen og Ullevål hageby. Som planmyndighet, byggherre og arkitekt på samme tid, kunne det offentlige i en periode utforme og bygge sine planer slik de ønsket. Fra 1911-1931 bygget kommunen ca. 7200 leiligheter for egen regning, og bidro med kommunal støtte til ytterligere ca. 6300 leiligheter bygget av private.<sup>3</sup>
            </p>
            
            <p className="text-sm italic">
              <sup>3</sup> https://www.historieblogg.no/?p=3535 lest September 2023.
            </p>
            
            <p>
              Økonomisk var dette ingen suksess, for eksempel ble Ullevål hageby bygget for 25 millioner, mens salget bare skal ha innbrakt 7 millioner. Men vi vet i dag at det ble en arkitektonisk suksess. Ullevål hageby og Torshovbyen er nå blant de flotteste bydelene Oslo har. Storkvartalene på Torshov er en studie i effektiv bebyggelsesstruktur med moderat høyde som gir svært høy befolkningstetthet, men uten å forsake romslige uteareal.
            </p>
            
            <p>
              Det er mange gode grunner til at kommuner ikke har fortsatt med boligutvikling i egen regi. I dag fungerer kommunale planavdelinger mer som forvaltningsorgan med ansvar for å sikre korrekte planprosesser som ivaretar statlige retningslinjer og krav til medvirkning. Faglige diskusjoner om arkitektonisk kvalitet som middel til å sikre boliger og tettsteder med høy kvalitet er ikke lenger en sentral del av planapparatets virkeområde. I stedet ser vi at jussen tar stadig mer plass og fortrenger diskursen rundt plan- og arkitekturfaglige hensyn. Gir en slik utvikling opphav til bedre byer og tettsteder?
            </p>
            
            <p>
              Allerede før Wesselkvartalet sto ferdig, var Asker sentrum blitt en kjent referanse for svært vellykket tettstedsutvikling. Når kommuneplansjef Tor Arne Midtbø forteller om Asker sentrum starter han gjerne rundt folkevandringstiden.<sup>4</sup> Der hvor etter hvert Kongeveien fra Kongsberg til Christiania skulle krysse oldtidsveien fra Asker-gårdene utover til Heggedal og Røyken, der ligger Asker sentrum i dag. «Det ble et viktig kryss!»
            </p>
            
            <p className="text-sm italic">
              <sup>4</sup> Tor Arne Midtbø ble intervjuet av forfatteren 28.10.2022.
            </p>
            
            <blockquote className="border-l-4 border-primary pl-6 my-6 italic">
              <p>
                Jeg har stor tro på at det må være en stabilitet i kommunen for å få en godt styrt stedsbygging, fordi det tar så lang tid. Se på Heggedal sentrum: Planleggingen tok 10 år, og så har det tatt 10 nye år å få bygget det som står der i dag. Og det er en rask utvikling. Både det offentlige og utbyggerne må ha stayer-evne.
              </p>
              
              <p>
                I Asker kommune har vi ti større tettsteder. Alle disse skal være et knutepunkt, om så bare en bussholdeplass, det skal være et handelssted, vi skal ha dagligvarebutikker, det skal være møteplasser, et lite torg eller en kafe eller noe sånt, i hvert eneste tettsted. Ut over det skal de alle være ulike. For de ligger på forskjellige steder, de har helt ulik historie, de består av helt forskjellige mennesker. Stedet skal preges av sine omgivelser, sin historie og sine mennesker. Stedene skal ikke være kopier av hverandre.
              </p>
              
              <p>
                Etter studiene var jeg i Stavanger kommune i 2 ½ år, hvor det var et kjempeflott fagmiljø. Så flyttet jeg hit og begynte i planavdelingen i Asker i 1984, i en kommune uten urbane tradisjoner. Så kommer jeg på jobb og møter reguleringssjef Helge Johnsen, og sier «fy fader, så trist det ser ut her i Asker.» «Jammen så gjør noe med det da!» var svaret. Så vi gikk opp til rådmannen, og han ville gjerne at vi skulle gjøre noe med det. Jeg ble sekretær for et lite utvalg med sentrale politikere og begynte å lage utredninger for dem. Det ble til en skisse for hvordan utviklingen i Asker kunne være. Asker sentrum var preget av etterkrigstiden, nye hus som poppet opp tilfeldig og totalt uten hensyn til utearealer, biler som fløt rundt, kaos. Jeg sa til utvalget at vi må ha en helhetlig arkitektur med vakre utearealer. Vi må ta vare på de gode møteplassene. Vi må ta vare på Askerelva. Og så foreslo jeg at tegl skal være et gjennomgående materiale. Da jernbanen kom til Asker i 1872 var det trehusbebyggelse, så kom murtvangen og murhusene fra 1930-tallet. Vi går for rød tegl, sa jeg, vi prøver det.
              </p>
              
              <p>
                Kommunen engasjerte ØKAW arkitekter og 13-3 landskapsarkitekter til å utvikle en visjon for det fremtidige Asker i tett samarbeid med oss. Dette foregikk parallelt med jappe-tiden og den påfølgende kollapsen, og alt var helt dødt. Så vi fikk tid til å skru på plass visjonene våre. Når det var klart, begynte kommunens eiendomssjef og jeg å reise rundt til utbyggere for å prøve å overtale dem til å komme til Asker og bygge. Det var stasjonskvartalet som sto først for tur og vi ordnet avtaler med politiet, med Posten og med Rema, de skulle alle inn i dette. Så vi hadde med oss en portefølje med leietakere rundt til utbyggerne. Og til slutt fikk vi napp, da Ole K. Karlsen sa «greit, jeg tar det.»
              </p>
              
              <p>
                I samarbeid med Akershus fylke, NSB og Ole K. Karlsen kjørte vi i gang med en arkitektkonkurranse, basert på visjonen fra ØKAW. Samtidig kom Hurum opp som et aktuelt alternativ for ny hovedflyplass og derfor måtte hele stasjonen oppgraderes. Vi måtte se hva vi kunne gjøre med stasjonsområdet, det var jo bare godsterminal og masse parkeringsplasser, så dette måtte vi få orden på. Jeg satt i juryen selvfølgelig, og kunne trekke i trådene. Det var vel 11 kontorer som deltok i et parallelloppdrag. Og mange av dem kom med forslag om å legge lokk over hele jernbanen slik at sentrum kunne slås sammen på tvers av denne barrieren. Men til det sa vi at det blir det ikke snakk om! Jernbanen er det viktigste transportmiddelet vi har, det skal synes i bybildet. Det skal være attraktivt å komme med jernbanen til Asker, du skal virkelig oppleve at du kommer midt i sentrum, jernbanen skal inn på fortauskanten og der skal den synes! Når du kommer til Asker skal du kjenne om det er vinter eller sommer, du skal høre fuglene og du skal se Vardåsen og Borgenåsen og Bergsåsen. Du skal ikke lure på om du er på Nasjonalteateret eller i Asker! Så sånn ble det.
              </p>
            </blockquote>
            
            <p>
              Trekanten har navnet sitt etter formen på det det lille jordet nedenfor rådhuset. Mye av striden rundt sentrumsplanen som ble vedtatt i 1979 var knyttet til denne åkerlappen. Da Trekanten Senter ble etablert midt på 90-tallet, var Midtbø både pådriver og gjeter overfor politikerne:
            </p>
            
            <blockquote className="border-l-4 border-primary pl-6 my-6 italic">
              <p>
                Jeg ville ha inn Trekanten Senter her. Jeg insisterte på at vi måtte få Hennes & Mauritz i Asker. Da kommer jentene tilbake til sentrum, og da følger alle andre etter. Asker var blitt helt dødt, og vi måtte få liv igjen. Holmensenteret og Liertoppen gjorde at butikkene forsvant og kundene løp etter. Møller-gruppen ville kjøpe selskapet (Trekanten KS, red.) og det var jeg kjempeglad for. Så jeg løp opp til ordføreren og rådmannen og sa at nå kan vi få til ting. Men det er to betingelser. Den ene er at det må ikke bli så stort at det dominerer over utehandelen. Og den andre er at vi må dytte det ned i bakken, det må ikke synes. Vi skal ha den lille byen vår oppå. Da husker jeg at rådmannen sa at «du har fullmakt til å stå på!»
              </p>
            </blockquote>
            
            <p>
              Det er ingen tvil om at Tor Arne Midtbø har spilt en helt sentral rolle i utviklingen av Asker sentrum. Det han forteller, og måten han forteller det på, viser et genuint engasjement for stedet og en usvikelig tro på planfag og arkitektur som nøkkelbrikker i god stedsutvikling. Han har sterke, og noen ganger uventede faglige meninger om hvilke konkrete løsninger han mener er best for stedet. Når for eksempel arkitektkonkurransen foreslo lokk over stasjonen, insisterer i stedet Midtbø på at toget skal inn til fortauskanten. I dag fremstår dette som et svært vellykket valg.
            </p>
            
            <p>
              Midtbø forstår i tillegg hvordan næringslivet, byråkratiet og politikken fungerer og han har vært flink til å sikre seg tilstrekkelig mandat til å gi handlekraft. Da lokalavisen i 2015 for første gang satte opp sin maktliste over de med størst innflytelse på lokal utvikling i Asker og Bærum, var Midtbø på 6. plass. Når han snakker, bruker han stadig vekk formuleringer som «vi vil ha» eller «det skal være». Han forsøker ikke å skjule at han har søkt innflytelse for å forfølge de løsningene han mener gir best resultat. «Hva mener Tor Arne?» er omkvedet når noe skal bygges i Asker (Budstikka, 18.03.2021). Han er motstykket til Max Webers lidenskapsløse byråkrat: «Det er mange aktører i samfunnet som har makt og innflytelse. Kommunen kan lage de flotteste planer på papiret. Men om ingen ønsker å investere skjer det jo ingenting. Vi må dra lasset sammen. Jeg har aldri ønsket å sitte og lage papirplaner.» (Budstikka, 18.03.2021)
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">Eiendomsutvikleren, byggherre eller bare investor?</h2>
            
            <p>
              Men hva med arkitekturen og den enkelte bygningen? Om kommunale planer og intensjoner er aldri så gode, hjelper det fint lite hvis byggherren, den som betaler, ikke har ambisjoner om arkitektonisk kvalitet.
            </p>
            
            <p>
              Tandberg Eiendom AS er en familiebedrift som startet med tekstilhandel. De kjøpte sin første eiendom i Asker sentrum i 1992. Ifølge sine egne nettsider kontrollerer de i dag 26 av sentrumseiendommene. Ved siden av Trekanten senter, er de den desidert største og mest innflytelsesrike utvikleren i området. For innflytelsesrik mener noen: «Nå eier de snart halve Asker», konstaterer lokalavisen i et oppslag i 2012 (Budstikka, 30.04.2012). Fra tid til annen kommer det også kritikk. Det var det flere som hevet et øyebryn da kommunen la den gamle og ærverdige sentrumsbygningen Hasselbakken ut for salg etter at Tandberg eiendom hadde ytret interesse for å kjøpe. Særlig da selskapet fikk tilslaget, etter det andre budgivere karakteriserte som en skinnprosess. Arbeiderpartiets gruppeleder i kommunestyret, Knut Lange, oppsummerte slik: «Det kan synes som det er Tandberg som sitter med tømmene her. Det er greit nok at vi skal ha et godt forhold til næringslivet, men det er betenkelig at når de sier hopp, så hopper vi.» (Budstikka 12.05.2003). Etter denne bataljen valgte Tandberg å omstøte kjøpet, og Hasselbakken gikk tilbake til kommunen.
            </p>
            
            <p>
              Likefullt er det bred enighet om at utviklingen i Asker sentrum har nytt godt av en stor eier. Med en portefølje som omfatter brorparten av gateforretningene, har Tandberg stor makt til å påvirke sammensetningen av butikker, servering og kontor, en makt de ikke skjemmes over å bruke. I en rapport fra 2014 stilte Transportøkonomisk institutt spørsmålet «Hva kan gjøres for å styrke sentrums attraktivitet som etableringsarena for handel og service?» Asker var ett av fire tettsteder som ble undersøkt og TØI oppsummerer blant annet:
            </p>
            
            <blockquote className="border-l-4 border-primary pl-6 my-6 italic">
              <p>
                Den ene gårdeieren (Tandberg Eiendom, red.) kontrollerer store deler av sentrumsarealene, totalt 80 av 110 butikker og serveringssteder utenfor kjøpesenteret. I løpet av cirka 15 år har bedriften hans kjøpt opp eller inngått langvarige leiekontrakter med majoriteten av forretningsgårdene i sentrum av Asker, ekskludert Trekanten kjøpesenter. Utleie av lokaler til handels-, service- og kontorbedrifter er det viktigste kommersielle grunnlaget. Gårdeieren påpeker videre at et levende sentrum er en forutsetning for at forretningsideen skal lykkes, og at det er vanskelig å skille egen interesse for utvikling av et livskraftig sentrum fra selskapets kommersielle interesse. De har over tid sett at det som er bra for sentrum også er bra for selskapet.
              </p>
              
              <p>
                I Asker sentrum er det en tydelig butikkmiks og profil med kafeer i hjørnelokaler og klynger av eksklusive kles- og interiørbutikker. Dette er i stor grad et resultat av at sentrumsgårdeieren gjennom oppkjøp kontrollerer store deler av sentrum og drifter dette som et kjøpesenter i friluft.<sup>5</sup>
              </p>
            </blockquote>
            
            <p className="text-sm italic">
              <sup>5</sup> Transportøkonomisk institutt, «Hva kan gjøres for å styrke sentrums attraktivitet som etableringsarena for handel og service?», TØI rapport 1334/2014, kap. 3.3.2, 37–38.
            </p>
            
            <p>
              Med bakgrunn bl.a. i sitt arbeid som tekstilhandler i morens butikkjede, omtaler Espen Tandberg seg selv som en kremmer.<sup>6</sup> Han er den mest synlige figuren i familiebedriften Tandberg Eiendom AS. Forbindelsen til Tor Arne Midtbø går helt tilbake til barndommens Asker («vi møttes i speideren»).
            </p>
            
            <p className="text-sm italic">
              <sup>6</sup> Espen Tandberg ble intervjuet av forfatteren 20.10.2022.
            </p>
            
            <blockquote className="border-l-4 border-primary pl-6 my-6 italic">
              <p>
                Jeg tror at utviklingen av vårt engasjement i Asker har skjedd gjennom en rekke tilfeldigheter. Det startet med at vi hadde en liten butikk som måtte flytte, så vi leide Strøket 9 i sentrum, Storebrandgården. Vi skulle til å sette i gang en oppussing da vi fikk høre at gården var til salgs, men det var ingen som turte å gå inn og kjøpe. Så vi bare slo til og en uke senere hadde vi kjøpt den. Etter det begynte vi å tenke på gården ved siden av, men før vi kom så langt, fikk vi mulighet til å kjøpe Meierigården og Strøket 6 og 8, på den andre siden av gaten. Med det fikk vi en viktig bit av Agro-kvartalet. Da kom tanken om at med eierskap følger også muligheten til å kontrollere blandingen av virksomheter i gatebildet, og at på den måten kan vi skape et godt grunnlag for folkeliv og næring, en motvekt til kjøpesenterets innendørshandel. Dette ble på en måte begynnelsen på vår visjon for et fremtidig Asker sentrum.
              </p>
              
              <p>
                Min gamle læremester var Øyvind Gromholt, det var han som først lærte meg noe om betydningen av arkitektur. Han hadde gjort noen mindre prosjekter for familien og vi engasjerte Bergersen, Gromholt og Ottar (BGO) da vi skulle bygge ut Agro-kvartalet tidlig på 2000-tallet. Øyvind lagde arkitekturkompendier, og så reiste vi sammen rundt i Europa og så på flotte bygg og steder. Denne inspirasjonen tok vi med oss hjem til Asker, både opplevelser av hva gode steder kan være, og konkrete idéer fra bygg vi hadde sett.
              </p>
            </blockquote>
            
            <p>
              Wesselkvartalet er det siste tilskuddet til Tandberg Eiendoms portefølje i Asker sentrum. Apoteker Thor Wessel kjøpte eiendommen med en staselig gammel trebygning og stor hage i 1927. Bygget var tegnet av arkitekt Ivar Næss. På 60-tallet ble tomten bygget ytterligere ut med et næringsbygg, før det gamle trehuset i 2002 ble flyttet 50 meter mot sør. Det hele var fortsatt eid av familiens selskap, som siden 80-tallet hadde hatt forskjellige planer for tomten.
            </p>
            
            <p>
              Men det var først da Tandberg Eiendom kjøpte seg inn i 2014 at planene skjøt fart. De engasjerte Vigsnæs+Kosberg++ Arkitekter til å utvikle et prosjektforslag, og i mai 2017 forelå rammetillatelsen. Med et sammensatt organisk formspråk, ikke-repeterende etasjeplaner og relativt kostbare materialer, skiller det ferdige prosjektet seg tydelig fra typiske utviklerstyrte bolig- og næringsbygg. Det er åpenbart at et forenklet og simplere uttrykk ville hatt lavere kostnader.
            </p>
            
            <blockquote className="border-l-4 border-primary pl-6 my-6 italic">
              <p>
                Dette er det ikke billig å bygge, det er dyr arkitektur. Men positiviteten vi får tilbake er enorm. Når vi bygger noe, vil vi at det skal bli noe vi kan være stolte av. Utformingen av Wesselkvartalet er helt og holdent arkitektens idé, og disse dynamiske, organiske formene kom tilsynelatende helt ut av det blå.
              </p>
              
              <p>
                Vår tanke har hele tiden vært at ethvert bygg vi sto ansvarlig for skulle være verdig en byggeskikkpris. Vi har tidligere prøvd å bygge billig, men uten å klare det. Dører for eksempel, vi skal ikke ha pappdører. Alle leiligheter skal ha massivdører med ordentlig kvalitet, og det koster mer. De fleste utbyggere driter i slikt, folk kjøper jo uansett på prospekt, på tegning.
              </p>
            </blockquote>
            
            <p>
              Espen Tandberg har sin klokkeklare mening om hva som er grunnen til at arkitektonisk kvalitet er så lite til stede i norsk boligutvikling:
            </p>
            
            <blockquote className="border-l-4 border-primary pl-6 my-6 italic">
              <p>
                Kommersiell profitt-tenking. Utbyggere som OBOS, som Selvaag, alle sammen, tenker kun på å bygge billigst mulig og selge for høyest mulig kvadratmeterpris, og så har de ingen andre større tanker rundt det. I tillegg er de ofte engangsutbyggere på hvert område de bygger ut. Selvaag hadde jo i sin tid god teknisk kvalitet på byggene sine, men nå, oppe på Landåsjordet for eksempel (utbyggingsområde i Asker, red.), det er utrolig enkel billigbygging.
              </p>
            </blockquote>
            
            <p>
              Begrepet byggherre er et gammelmodig ord. Men om vi klarer å se bort fra den patriarkalske vektingen, inneholder det en ganske presis beskrivelse av hvilken makt og hvilket ansvar som følger rollen. En utvikler representerer som byggherre selvsagt sine egne interesser. Men i tillegg påhviler det en god utvikler å ivareta interessene til alle som i fremtiden skal bruke, eller som vil påvirkes av det som bygges, og som ikke selv er representert i byggesaken. Fremtidige beboere er en åpenbar slik gruppe. Men plan- og byggeprosjekter i byer og tettsteder påvirker også det offentlige rom, som eies av allmenheten. Gaten og byrommet er byens allmenning. Selv om kommunenes planer er ment å være garantist for fellesskapets kvaliteter, er det til sist og slutt utvikleren som med byggherrens makt avgjør i hvilken grad dette faktisk skjer.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">Uten å skjemmes</h2>
            
            <p>
              «Wesselkvartalet er ikke profittmaksimert, da hadde vi heller bygget en firkantet kloss. Det ville åpenbart gitt oss … bedre økonomi, slår byggherre og prosjektleder Henrik Nore i Wesselkvartalet AS fast.<sup>7</sup> Det var et premiss i familien fra dag én, Wesselkvartalet skulle bli noe vi kunne være stolte av. Derfor er det også lagt vekt på kvalitet i fasader og i innvendige løsninger, avslutter Nore.»<sup>8</sup>
            </p>
            
            <p className="text-sm italic">
              <sup>7</sup> Henrik Nore ble intervjuet av forfatteren 26.10.2022.
            </p>
            
            <p className="text-sm italic">
              <sup>8</sup> Byggeindustrien, 11.10 2021, 107 https://www.bygg.no/wesselkvartalet/1466873!/
            </p>
            
            <p>
              Henrik Nore er styreleder i Wesselkvartalet AS, og barnebarn av gamle apoteker Thor Wessel. Han har vært byggherrens prosjektleder i gjennomføringen. Det han sier her, er verdt å legge merke til. Som eier av en viktig sentrumsgård gjennom nesten 100 år, er Nore-familien opptatt av at når nybygget skal opp, må det skje på en måte som gjøre det mulig for familiens medlemmer å passere prosjektet uten å skjemmes. I vår tid er det ikke vanlig å begrunne sine handlinger med et ønske om å unngå skam. Men når vi ser hvor bra resultatet har blitt, er det lett å mene at noen av våre boligutviklere kan være litt for skamløse.
            </p>
            
            <blockquote className="border-l-4 border-primary pl-6 my-6 italic">
              <p>
                Jeg er nok kanskje en litt annerledes byggherre. Jeg er egentlig ingeniør, så jeg kan jo litt om alle fagene. Jeg kan statikk, jeg kan fasthetslære og materialteknologi, mye forskjellig. Jeg kan litt om alt, så jeg klarer å diskutere med alle faggruppene. Det har vært både en stor fordel, men også en utfordring. Vi har vært en byggherre som går helt ned i detaljer. Jeg har for eksempel brukt utallige timer på å gre ventilasjonskanaler i dette bygget, og har spart mye volum på det. Det kan jo være feil ressursbruk, men av og til er det nødvendig for å få til en viss kvalitet.
              </p>
              
              <p>
                For å oppnå høy kvalitet trengs engasjerte utbyggere, sånn som Tandberg, som er veldig opptatt av kvalitet på det de gjør. De har et hundreårs-perspektiv, og det har vi (Wessel-familien, red.) også. Det gjør noe med hele prosessen. Vi gir jo arkitekten veldig mye mer arbeid og ansvar enn det som er vanlig.
              </p>
              
              <p>
                Prosjektet er gjennomført som totalentreprisekontrakt, ikke fordi vi ville ha det, men fordi banken krevet det. Men i motsetning til hva som er vanlig, har arkitektens kontrakt ligget hos oss, vi har hatt full kontroll på arkitekten. Entreprenøren har styrt når arkitekten skal levere hva, mens vi har styrt hva de skal tegne.
              </p>
            </blockquote>
            
            <p>
              Til lokalavisen oppsummerer Henrik Nore slik: «Vi har latt arkitekturen styre. Oppdraget til arkitekten var å bygge de fineste leilighetene innenfor egne rammer, som vi kunne være stolte av.» (Budstikka, 25.09.2021)
            </p>
            
            <p>
              Bruken av tegl er sentral:
            </p>
            
            <blockquote className="border-l-4 border-primary pl-6 my-6 italic">
              <p>
                Det er for eksempel ikke tilfeldig at teglen ble bra. Vi satte opp fullskala tester, bygget med forskjellige fugetyper og fugeavstand, ulike måter å mure det på, vi har testet veldig mye før vi landet en løsning. Vi måtte se at det fungerte i det lyset og de forholdene som er her på stedet, ikke i et eller annet visningsrom. Og alt i alt har vi nok brukt litt for mye penger på arkitekt, vi burde vært litt strengere.
              </p>
            </blockquote>
            
            <p>
              Byggherrens avveiing mellom egne og allmenne interesser inneholder noen grunnleggende konflikter. Hvem skal betale for en vakker og varig fasade, eller en park? I prinsippet er det lov- og planverket som skal beskytte allmennhetens rettigheter og behov, og stille krav til utbyggeren som sikrer verdier og kvaliteter på vegne av fellesskapet. En moderne kommuneplan inneholder få eller ingen konkrete tanker og idéer om utforming av bebyggelsen og dens uterom. I stedet definerer den stadig mer detaljerte juridiske rammer som de private utbyggerne må forholde seg til når de på byens vegne beslutter hvilken utforming den skal ha.
            </p>
            
            <p>
              På mange måter er dette en fin ordning. I en ideell verden kunne dette åpne muligheter for mangfold og variasjon, hvor planene beskriver hvilke arkitektoniske og urbane kvaliteter som er målet. Men estetikkens vokabular er upresist fordi det til sist og slutt omhandler den subjektive opplevelsen. Derfor snakker ikke planverket om stygt og pent eller om god utforming, men vektlegger i stedet juridiske rammer.
            </p>
            
            <p>
              Om vi ønsker et godt resultat, forutsetter derfor dette at utviklerne, i tillegg til å etterse sin egen fortjeneste, har et bevisst forhold til at de med hvert av sine prosjekter faktisk deltar i byggingen av en by eller et tettsted. De er delegert et ansvar for å ivareta en liten del av alle de behov en by eller et tettsted har for å bli velfungerende, også arkitektoniske og urbane kvaliteter, valg av materialer, vakre og brukbare utearealer, og så videre. Og som eksempelet Asker viser, det som er bra for stedet er i det lange løp også bra for utvikleren.
            </p>
            
            <p>
              I stedet ser vi at mange boligutviklere oppfatter planverkets rammer som en ytre grense som skal tøyes og strekkes, eller om mulig overskrides. Dette skaper en polarisert situasjon, hvor mistillit mellom partene er den viktigste drivkraften.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">Frie tøyler</h2>
            
            <p>
              Det finnes et utall plausible begrunnelser for middelmådig arkitektur og det står den fritt å velge, som trenger å forsvare sin posisjon. Innledningsvis var vi innom OBOS boligkonferanse i 2016. Den odiøse omtalen av arkitektur i konferansens hovedspørsmål, overgås bare av utbyggernes hybris i sine tilsvar. Boligutviklernes viktigste argument er at kjøperne ikke vil betale for høyere kvalitet: «Alt koster penger. Det er mange som ikke forstår at Groruddalen ikke kan se ut som Tjuvholmen. Folk må ha penger til å kjøpe det som bygges… Hvis prosjekter ikke er lønnsomme, kan de ikke gjennomføres», sier Baard Schumann.<sup>9</sup>
            </p>
            
            <p className="text-sm italic">
              <sup>9</sup> Byggeindustrien, 11.12.2015. https://www.bygg.no/svaere-feen-fyrer-los-mot-bransjetopper-pa-twitter/1258386!/
            </p>
            
            <p>
              Og hva betrakter Selvaag som et lønnsomt prosjekt? I perioden fra 2012 til 2021 hadde Selvaag Bolig ASA ifølge rapportene fra Oslo Børs marginer som varierte mellom 15,9% og 25,2%, eller gjennomsnittlig 20% for hele tiårsperioden.<sup>10</sup> Til sammenligning, hadde hele bygg- og anleggsbransjen fra 2017 til 2021 en gjennomsnittlig margin på 7,9%.<sup>11</sup> Og selv dette er høyere enn norsk næringsliv i sin alminnelighet.
            </p>
            
            <p className="text-sm italic">
              <sup>10</sup> https://newsweb.oslobors.no/
            </p>
            
            <p className="text-sm italic">
              <sup>11</sup> BDO, Bygg- og anleggsanalysen 2022, 13. (https://issuu.com/konsis/docs/bygg-_og_anleggsanalysen_2022_?fr=sNGI0NjQ4MzI1NjQ )
            </p>
            
            <p>
              OBOS, er Norges største boligutvikler. De investerer tungt innen byggenæringen og eier betydelige aksjeposter i noen av Nordens største entreprenørselskap. Som aksjeselskap ville de antakelig vært inne på listen over Norges rikeste bedrifter, sammen med for eksempel Norsk Hydro, Statkraft og Fredensborg Eiendom, og gitt svært god avkastning til sine eiere. Som stiftelse er OBOS en kapital som eier og forvalter seg selv, hvis hovedformål er å skaffe boliger til sine medlemmer. Det utbetales ikke utbytte, og overskudd akkumuleres som egenkapital.
            </p>
            
            <p>
              Ved utgangen av 2021 hadde OBOS 6596 boliger under bygging og 2952 boliger ble ferdigstilt i løpet av året. Årsresultatet landet på drøye 4,5 milliarder kroner før skatt og egenkapitalen økte med 4 milliarder fra året før, til rekordhøye 33,2 milliarder.<sup>12</sup> Til tross for pandemien økte bokført egenkapital videre i 2022 til 35,6 milliarder kroner, verdijustert til 54,1 milliarder.<sup>13</sup> Slike kapitalreserver gjør blant annet at en utvikler selv kan velge når det skal bygges og når det skal selges. Om boligprisen anses å være for lav, kan de bare vente.
            </p>
            
            <p className="text-sm italic">
              <sup>12</sup> https://www.obos.no/bedrift/ir/arsrapport-2021/arsberetning-2021/hovedtrekk-2021/ lest oktober 2022.
            </p>
            
            <p className="text-sm italic">
              <sup>13</sup> Finansavisen 8.2.2023. https://www.finansavisen.no/bolig/2023/02/08/7984126/obos-ble-truffet-av-en-perfekt-storm-resultatet-falt-med-2-9-milliarder-i-2022
            </p>
            
            <p>
              OBOS-sjef Daniel Siraj er ganske åpen om at arkitekten ikke er en sentral bidragsyter til disse eventyrlige resultatene. «Arkitekter er generelt en gruppe som ofte har lite lojalitet mot annet enn sine egne ideer og allierte og i liten grad mot andres ideer og visjoner. Her ligger faktisk vi som boligbyggere et hakk foran i forhold til å anerkjenne andres gode arbeid og formål»<sup>14</sup>. Når Siraj skryter av at han har spart ti millioner ved å overkjøre arkitekten, kan man jo undres hvor disse pengene havnet til slutt. Kom det kjøperne til gode i form av lavere priser, eller ble det påfyll i OBOS sin etter hvert stappfulle pengebinge?
            </p>
            
            <p className="text-sm italic">
              <sup>14</sup> Byggeindustrien, 11.12.2015. https://www.bygg.no/svaere-feen-fyrer-los-mot-bransjetopper-pa-twitter/1258386!/
            </p>
            
            <p>
              Det virker betimelig å spørre om medlemmene virkelig er tjent med at Siraj fortsetter å overkjøre arkitekten, eller om det hadde vært bedre å få noe av denne enorme verdien tilbake i form av høyere kvalitet på bygninger og bygningsmiljø.
            </p>
            
            <p>
              Siraj uttaler at «De kommersielle grepene gjør oss økonomisk i stand til å bygge og holde hjulene i gang selv i dårligere tider...Målet er at summen av investeringer skal skape bedre tjenester og økonomiske verdier for oss og medlemmene våre.»<sup>15</sup> I kraft av sine finansielle muskler har OBOS sannsynligvis større innflytelse på boligmarkedet enn både regjering og storting.
            </p>
            
            <p className="text-sm italic">
              <sup>15</sup> Byggeindustrien, 8.12.2022. https://www.bygg.no/boligkjempen-har-milliardverdier-i-entreprenorselskaper-dette-eier-obos/1514045!/
            </p>
            
            <p>
              Som vi ser, er det snakk om svært store overskudd over lang tid og det er lett å forstå at slike resultater kan virke berusende, for ikke å si vanedannende. Baard Schumann har helt rett når han påpeker at høyere kvalitet koster. Men det er ikke like åpenbart at den kostnaden nødvendigvis må havne hos kjøperne. Det er heller ikke opplagt at boligutviklernes beste strategi er å klemme ut hver siste krone av prosjektporteføljen år etter år, i stedet for å vise litt samfunnsansvar og investere noe av pengene i god stedsutvikling, bedre boligarkitektur og høyere materialkvalitet. Om ikke annet, så kunne dette gi utsikter til litt bedre karma, eller omdømme som det kalles i dag. I stedet ser vi at mange store utviklere anstrenger seg for å finne ut nøyaktig hvor lavt de kan legge listen og fortsatt slippe unna med det. De har blitt mestere av det middelmådige.
            </p>
            
            <p>
              Utviklere som Selvaag og OBOS later til å betrakte maksimering av profitt som en naturlov. Men samtidig innrømmer Baard Schumann at «Kuttene i byggekostnader kommer ikke kjøperne til gode slik markedet er i Oslo i dag. Det kommer kun kjøperne til gode når markedet er i balanse og det er en viss konkurransesituasjon».<sup>16</sup> Med denne innsikten slår han samtidig bena under sin egen argumentasjon. Han har jo hevdet at utviklerne er nødt til å redusere byggekostnadene ved å fire på kvaliteten og innskrenke den arkitekturfaglige innflytelsen, slik at de kan tilby kjøperne lavere priser. Men her sier han tvert imot at besparelsene ikke fører til lavere boligpris. De bidrar i stedet til et enda større overskudd og til å fete opp bunnlinjen i utviklerens regnskap.
            </p>
            
            <p className="text-sm italic">
              <sup>16</sup> Dagens Næringsliv, 6.12.2017 https://www.dn.no/eiendom/boligbygging/boligmarkedet/arkitektur/-alle-kan-ikke-bo-i-et-hus-pa-prarien-med-sollys-dognet-rundt/2-1-26874
            </p>
            
            <p>
              Det har vært sagt at det norske markedet for nye boliger ligner en sovjetisk skobutikk: det finnes kun én type sko i ulike størrelser, og det er for få sko til at alle som vil kan få kjøpe. Uansett hva de selv måtte si og mene om saken, er det ikke vanskelig å se at store utviklere kan være tjent med en slik situasjon. En generell mangel på boliger og diversitet gir utviklerne langt på vei frie tøyler til å fortsette å selge middelmådig kvalitet til høy pris, i et marked uten reell konkurranse. Når det ikke kreves av markedet, er det utviklerne selv som bevisst må velge å gjennomføre med høyere kvalitet.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-foreground">Er det noe å lære?</h2>
            
            <p>
              Boligmarkedet er stort og sammensatt og det finnes ikke et enkelt svar på hva som må til for å skape grobunn for en tilstand hvor en større andel av prosjektene får bedre kvalitet. Desto mer interessant er det å undersøke Wesselkvartalet, med sine bakenforliggende aktører og prosesser. Dette prosjektet, og flere andre sider ved utviklingen i Asker sentrum, er eksempler på at det finnes muligheter som kan gi andre resultat enn den pregløse og uengasjerte middelmådigheten som dominerer for eksempel Lørenbyen.
            </p>
            
            <p>
              At utbyggeren er lokal og har flere bygg samme område, kan ha en betydning. Dette kan inspirere den viljen til kvalitet som utbyggeren i Asker uttrykker. Men det viktigste er kanskje den innsikten som kommer frem i TØIs rapport: det er vanskelig å skille egen interesse for utvikling av et livskraftig sentrum fra selskapets kommersielle interesse. Det at utbygger fortsetter som eier av næringslokalene i sine egne prosjekter, gir en mye lenger tidshorisont enn om alt skulle selges på prospekt og avhendes ved ferdigstillelse. Og med sine lokale hjemmeadresser, skal vi heller ikke se bort fra de synes det er godt å kunne passere sine egne bygninger uten å rødme.
            </p>
            
            <p>
              Like viktig synes møtet med det kommunale planapparatet å ha vært. Den nåværende kommuneplansjefen i Asker har arbeidet der i snart 40 år. Han er dermed selv en representant for den stabiliteten som han fremhever betydningen av. Dette ville selvsagt vært en katastrofe om han var udugelig, men har blitt en velsignelse fordi han er kompetent. Han har eierskap til det planverket som ligger til grunn for utviklingen av Asker sentrum og har selv bidratt med helt konkrete idéer og føringer som har vært med å gjøre stedet til hva det er i dag. Det mest påfallende er den gjensidige respekten som kommer til uttrykk i forholdet mellom utbygger og kommuneplansjef, hvor utbygger unngår å tøye strikken for langt, og kommuneplansjefen gir klare tilbakemeldinger om det offentliges forventninger og krav. Heller enn å fremstå som motstandere, virker begge parter som medspillere i forhandling om gjennomføringen av interesser som langt på vei er sammenfallende. Dette er en annen virkelighet enn den krigslignende tilstanden som råder i for eksempel Oslo, hvor kjempende jurister på begge sider råder grunnen mer eller mindre alene.
            </p>
            
            <p>
              En rypehund i bånd finner lite fugl, og dette kan være noe Baard Schumann bør skrive seg bak øret. Kanskje er det heller arkitekten som skulle hatt litt friere tøyler, hvis Schumann i sitt neste prosjekt ønsker å bidra til høyere kvalitet i våre nye bo- og bymiljøer. For i møte med Christian Pagh, direktør for Oslo Arkitekturtriennale, må selv Baard Schumann ifølge Aftenposten innrømme at de ikke har strukket seg langt nok: «...han er faktisk helt enig i at for mange av de nye prosjektene blir for like og kjedelige. - Vi må bruke ulike arkitekter og utfordre dem til å gjøre uttrykket litt annerledes. Byrådet har jo oppfordret til mer bruk av farger.»<sup>17</sup>
            </p>
            
            <p className="text-sm italic">
              <sup>17</sup> Aftenposten, 7.3.2021. https://www.aftenposten.no/oslo/i/JJvlB4/oslos-utbyggere-mange-grunner-til-at-vi-ikke-alltid-faar-det-til
            </p>
            
            <p>
              Så spørs det om noen fargeklatter er nok til å få dem i mål.
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default FrieToyler;