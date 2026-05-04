import { Building2, Package, Palmtree, Car, Server, UserCheck } from "lucide-react";
import React from "react";

export interface Property {
    icon: React.ReactNode | string;
    title: string;
    location: string;
    description: string;
    price: string;
    size?: string;
    image?: string;
    features: string[];
    externalLink?: string;
    externalLinkText?: string;
    contactEmail?: string;
    buttonText?: string;
    buttonLink?: string;
}

export const properties: Property[] = [
    {
        icon: <Building2 className="h-6 w-6 text-primary" />,
        title: "Takeaway resturant lokale",
        location: "Torvveien 9, 1383 Asker i nedkjøring til Wessel P-hus",
        description: "Effektivt resturant lokale for takeaway, kommer med ferdig kjøkken. Perfekt for de som er gode på foodora og wolt",
        price: "8% av omsetning, med minimum 2200 kr/m2 (42,9 m2 + 15% fellesareal)",
        size: "42,9 m2 BTA",
        image: "/lovable-uploads/Tempura-house.png",
        features: ["Takeaway resturant", "Kommer med ferdig kjøkken", "Ledig fra Septeber 2026"],
        externalLink: "/lovable-uploads/A27-U101A Næringslokale U101A.pdf",
        externalLinkText: "Se plantegning"
    },
    {
        icon: <Building2 className="h-6 w-6 text-primary" />,
        title: "Kontor",
        location: "Bankveien 4C, 1383 Asker",
        description: "Cellekontorer for 1-3 pers ledig i kontorfelleskap med tillgang på fellesarealer og møterom. (Bildet er fra et tilsvarende lokale i Wesselkvartalet)",
        price: "3500 kr/m2 + fellesareal",
        size: "6-15 m2",
        image: "/lovable-uploads/bankveien-4c-original.jpg",
        features: ["Møterom og fellesarealer", "Cellekontorer for 1-3 pers", "Ledig fra Mai 2026"],
        externalLink: "/lovable-uploads/A27-202 Næringslokale 202.pdf",
        externalLinkText: "Se plantegning"
    },
    {
        icon: <Building2 className="h-6 w-6 text-primary" />,
        title: "Kontor",
        location: "Apotekerhagen 3, 1383 Asker",
        description: "Ledig fra: mai 2026. (Bildet er fra et tilsvarende lokale i Wesselkvartalet)",
        price: "2950 kr/m2 (54,6 m² BTA + 15% fellesareal)",
        size: "54,6 m² BTA",
        image: "/lovable-uploads/bankveien-4c-original.jpg",
        features: ["Moderne kontorlokaler", "Sentral beliggenhet", "Ledig fra mai 2026"],
        externalLink: "/lovable-uploads/A27-203B Næringslokale 203B.pdf",
        externalLinkText: "Se plantegning"
    },
    {
        icon: <Building2 className="h-6 w-6 text-primary" />,
        title: "Næringslokale",
        location: "Bankveien 6a, 1383 Asker",
        description: "Restaurant eller butikk. Ledig fra 1. august 2026 for overtakelse etter Q-Apotek Asker. (Bildet  er fra et tilsvarende lokale i Wesselkvartalet)",
        price: "8% av omsetning, minimum 3000 kr/m2 + (131,7 m² + 18% fellesareal)",
        size: "131,7 m² BTA",
        image: "/lovable-uploads/leie-img-2.jpg",
        features: ["Høy synlighet", "Gode fasiliteter", "Langsiktig leie"],
        externalLink: "https://api.eve-digital.com/images/114/106.pdf?1594307506",
        externalLinkText: "Se plantegning"
    },
    {
        icon: <Building2 className="h-6 w-6 text-primary" />,
        title: "Næringslokale",
        location: "Bankveien 6B, 1383 Asker",
        description: "Restaurant eller butikk. Ledig fra 1. august 2028, overtakelse etter THE CURATED. (Bildet er fra et tilsvarende lokale i Wesselkvartalet)",
        price: "8% av omsetning, minimum 3000 kr/m2 + (159,8 m² + 18% fellesareal)",
        size: "159,8 m² BTA",
        image: "/lovable-uploads/leie-img-3.jpg",
        features: ["Moderne lokaler", "Fleksibel planløsning", "Sentral i Asker"],
        externalLink: "https://api.eve-digital.com/images/114/A27-105_N%C3%A6ringslokale_105_%283%29.pdf?1678270568",
        externalLinkText: "Se plantegning"
    },
    {
        icon: <Building2 className="h-6 w-6 text-primary" />,
        title: "Næringslokale",
        location: "Under Peppes Pizza, Wesselgården Torvveien 9",
        description: "240 m² næringslokale som kan deles opp. Lokalene skal renoveres med nye vinduer og moderne fasiliteter. Perfekt for butikk, showroom eller kontorlandskap.",
        price: "8% av omsetning, minimum 2200 kr/m2 (240 m² + 18% fellesareal)",
        size: "240 m² BTA",
        image: "/lovable-uploads/3c64b751-93ee-4825-aeef-7a90c50a10c7.png",
        features: ["Kan deles opp", "Nye vinduer", "Sentral beliggenhet", "Direkte adkomst fra gateplan"],
        contactEmail: "kontakt@wesselkvartalet.no"
    },
    {
        icon: <Package className="h-6 w-6 text-primary" />,
        title: "Lager / Bod",
        location: "Wessel P-hus",
        description: "Sikker og sentral lagring midt i sentrum. Vi tilbyr tørre og trygge boder i ulike størrelser. Perfekt for sesongutstyr, innbo or bedriftsarkiv.",
        price: "2000–2500 kr/m²/år",
        size: "5 m² - 240 m²",
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
        image: "/lovable-uploads/c63c1aed-9cfa-4b51-8f39-01ac827b3e52.png",
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
