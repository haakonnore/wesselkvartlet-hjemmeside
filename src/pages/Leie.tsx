import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
    Building2,
    MapPin,
    Mail,
    Phone,
    Package,
    ShieldCheck,
    Ruler,
    Clock,
    ArrowRight,
    ExternalLink,
    Car,
    Server,
    UserCheck,
    Palmtree
} from "lucide-react";

const Leie = () => {
    const properties = [
        {
            icon: <Building2 className="h-6 w-6 text-primary" />,
            title: "Næringslokale",
            location: "Under Peppes Pizza, Wesselgården Torvveien 9",
            description: "240 m² næringslokale som kan deles opp. Lokalene skal renoveres med nye vinduer og moderne fasiliteter. Perfekt for butikk, showroom eller kontorlandskap.",
            price: "Avhengig av avtale",
            size: "240 m²",
            image: "/lovable-uploads/3c64b751-93ee-4825-aeef-7a90c50a10c7.png",
            features: ["Kan deles opp", "Nye vinduer", "Sentral beliggenhet", "Direkte adkomst fra gateplan"],
            contactEmail: "kontakt@wesselkvartalet.no"
        },
        {
            icon: <Package className="h-6 w-6 text-primary" />,
            title: "Lager / Bod",
            location: "Wessel P-hus",
            description: "Sikker og sentral lagring midt i sentrum. Vi tilbyr tørre og trygge boder i ulike størrelser. Perfekt for sesongutstyr, innbo eller bedriftsarkiv.",
            price: "1100–1500 kr/m²/år",
            size: "2.5 m² - 240 m²",
            image: "/lovable-uploads/3dd8daf6-3570-4b9e-98e0-3b9babf5262a.png",
            features: ["Kameraovervåkning", "Tilgang 24/7", "Tørrskodd adkomst", "Adgang med nøkkelbrikke"],
            externalLink: "https://www.finn.no/realestate/businessrent/ad.html?finnkode=396460332"
        },
        {
            icon: <Palmtree className="h-6 w-6 text-primary" />,
            title: "Takhage",
            location: "Toppen av Wesselkvartalet",
            description: "20 m² eksklusive takhager med fantastisk utsikt over Asker. En unik mulighet for både private og bedrifter til å sikre seg et grønt uterom.",
            price: "1000 kr/m²/år",
            size: "20 m²",
            image: "/lovable-uploads/b906604e-7f45-4382-a192-40914b16e300.png",
            features: ["Fantastisk utsikt", "Bærekraftig", "Leie eller kjøp"],
            externalLink: "https://www.finn.no/realestate/businessrent/ad.html?finnkode=396460332"
        },
        {
            icon: <Car className="h-6 w-6 text-primary" />,
            title: "Parkering",
            location: "Wessel P-hus i Asker sentrum",
            description: "Stort og romslig p-hus med videoovervåkning og god størrelse på plassene. Enkelt og trygt for både beboere og besøkende.",
            price: "1200-1900 kr/mnd",
            image: "/assets/images/parking-facility-3XgMsmJZ.jpg",
            features: ["Videoovervåkning", "Elbillading", "Faste plasser", "Korttidsparkering"],
            buttonText: "Bestill plass",
            buttonLink: "/parkering"
        },
        {
            icon: <Server className="h-6 w-6 text-primary" />,
            title: "Datarom",
            location: "U2 i Wessel P-hus",
            description: "Profesjonelt datarom med redundant strømforsyning og kjøling. Designet for høy sikkerhet og driftssikkerhet for kritiske IT-systemer.",
            price: "Avhengig av avtale",
            size: "45 m²",
            features: ["Redundant strøm", "Luftkjølt/vannkjølt", "Høy sikkerhet", "Opp til 1MW effekt"],
            contactEmail: "kontakt@wesselkvartalet.no"
        },
        {
            icon: <UserCheck className="h-6 w-6 text-primary" />,
            title: "Garderober",
            location: "Wessel P-hus",
            description: "Tilgang til moderne garderobefasiliteter med låsbare skap og dusj. Ideelt for de som pendler eller trener i sentrum.",
            price: "Ta kontakt",
            features: ["Låsbare skap", "Dusj tilgjengelig", "Sikker adgang"],
            contactEmail: "kontakt@wesselkvartalet.no"
        }
    ];

    return (
        <div className="min-h-screen bg-background">
            <SEOHead
                title="Leie i Wesselkvartalet | Lokaler, Takhager, Boder og Parkering"
                description="Oversikt over alt som er til leie i Wesselkvartalet. Finn næringslokaler, lagerboder, takhager, parkeringsplasser og datarom midt i Asker sentrum."
                canonicalUrl="https://wesselkvartalet.no/leie"
            />
            <Header />

            <main className="pt-24 pb-16">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Alt til leie</h1>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Finn det perfekte lokalet eller fasiliteten for ditt behov i Wesselkvartalet.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {properties.map((item, index) => (
                            <Card key={index} className="overflow-hidden border-primary/20 shadow-md hover:shadow-lg transition-shadow">
                                <div className="grid sm:grid-cols-5 h-full">
                                    {item.image && (
                                        <div className="sm:col-span-2 relative h-48 sm:h-auto bg-muted">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="absolute inset-0 w-full h-full object-cover"
                                            />
                                        </div>
                                    )}
                                    <div className={`p-6 flex flex-col justify-between ${item.image ? 'sm:col-span-3' : 'sm:col-span-5'}`}>
                                        <div>
                                            <div className="flex items-center gap-2 mb-3">
                                                <div className="p-1.5 bg-primary/10 rounded-lg">
                                                    {item.icon}
                                                </div>
                                                <h2 className="text-xl font-bold">{item.title}</h2>
                                            </div>
                                            <div className="flex items-start gap-2 text-muted-foreground mb-3 text-sm italic">
                                                <MapPin className="h-3.5 w-3.5 mt-0.5 shrink-0" />
                                                <span>{item.location}</span>
                                            </div>
                                            <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                                                {item.description}
                                            </p>
                                            <div className="flex flex-wrap gap-x-4 gap-y-1 mb-4">
                                                {item.size && (
                                                    <div className="flex items-center gap-1.5 text-xs font-medium text-foreground">
                                                        <Ruler className="h-3.5 w-3.5" />
                                                        <span>{item.size}</span>
                                                    </div>
                                                )}
                                                <div className="text-xs font-semibold text-primary">
                                                    {item.price}
                                                </div>
                                            </div>
                                            <ul className="space-y-1.5 mb-6">
                                                {item.features.map((feature, fIndex) => (
                                                    <li key={fIndex} className="flex items-center gap-2 text-xs text-muted-foreground">
                                                        <div className="w-1 h-1 rounded-full bg-primary/60" />
                                                        <span>{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="mt-auto">
                                            {item.externalLink ? (
                                                <Button asChild className="w-full sm:w-auto">
                                                    <a href={item.externalLink} target="_blank" rel="noopener noreferrer">
                                                        Se annonse på Finn.no <ExternalLink className="ml-2 h-4 w-4" />
                                                    </a>
                                                </Button>
                                            ) : item.buttonLink ? (
                                                <Button onClick={() => window.location.href = item.buttonLink} className="w-full sm:w-auto">
                                                    {item.buttonText || "Les mer"} <ArrowRight className="ml-2 h-4 w-4" />
                                                </Button>
                                            ) : (
                                                <Button onClick={() => window.location.href = `mailto:${item.contactEmail}`} className="w-full sm:w-auto">
                                                    Kontakt oss <Mail className="ml-2 h-4 w-4" />
                                                </Button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>

                    {/* Global Contact Info Section */}
                    <section className="mt-20 max-w-4xl mx-auto bg-primary/5 rounded-3xl p-8 md:p-12 text-center border border-primary/10">
                        <h3 className="text-2xl font-bold mb-4">Interessert i leie?</h3>
                        <p className="text-muted-foreground mb-8">Vi tar gjerne en uforpliktende prat om dine behov for lokaler og fasiliteter i Wesselkvartalet.</p>
                        <div className="flex flex-col sm:flex-row justify-center gap-6">
                            <Button variant="outline" className="gap-2" onClick={() => window.location.href = "mailto:kontakt@wesselkvartalet.no"}>
                                <Mail className="h-4 w-4" />
                                kontakt@wesselkvartalet.no
                            </Button>
                            <Button variant="outline" className="gap-2" onClick={() => window.location.href = "tel:+4799589433"}>
                                <Phone className="h-4 w-4" />
                                +47 99 58 94 33
                            </Button>
                        </div>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Leie;
