import { PropertyCard } from "./PropertyCard";
import parkingImage from "@/assets/parking-facility.jpg";
import rooftopImage from "/lovable-uploads/b906604e-7f45-4382-a192-40914b16e300.png";
import buildingDetailImage from "/lovable-uploads/c63c1aed-9cfa-4b51-8f39-01ac827b3e52.png";

export function PropertyGrid() {
  const properties = [
    {
      icon: "📦",
      title: "Lager/Bod",
      location: "Wessel P-hus",
      description: "Lager til leie i ulike størrelser fra 2.5 m² til 240 m². Sikker oppbevaring i moderne videoovervåket p-hus.",
      price: "1100–1500 kr/m²/år",
      size: "2.5 m² - 240 m²",
      image: "/lovable-uploads/3dd8daf6-3570-4b9e-98e0-3b9babf5262a.png",
      features: ["Videoovervåkning", "Sikker adgang", "Fleksible størrelser"],
      buttonText: "Les mer",
      buttonAction: () => window.open("https://www.finn.no/realestate/businessrent/ad.html?finnkode=396460332", "_blank")
    },
    {
      icon: "🏢",
      title: "Næringslokale",
      location: "Under Peppes Pizza, Wesselgården Torvveien 9",
      description: "240 m² næringslokale som kan deles opp. Lokalene skal renoveres med nye vinduer.",
      price: "Avhengig av avtale",
      size: "240 m²",
      image: "/lovable-uploads/3c64b751-93ee-4825-aeef-7a90c50a10c7.png",
      features: ["Kan deles opp", "Nye vinduer", "Sentral beliggenhet"],
      buttonText: "Kontakt oss",
      buttonAction: () => {
        const kontaktSection = document.getElementById('kontakt');
        if (kontaktSection) kontaktSection.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      icon: "💻",
      title: "Datarom",
      location: "U2 i Wessel P-hus",
      description: "Profesjonelt datarom med redundant strømforsyning og kjøling. Opp til 1MW tilgjengelig effekt.",
      price: "Avhengig av avtale",
      size: "45 m²",
      features: ["Redundant strøm", "Luftkjølt/vannkjølt", "Høy sikkerhet"],
      image: buildingDetailImage,
    },
    {
      icon: "🚗",
      title: "Parkering",
      location: "Wessel P-hus i Asker sentrum",
      description: "Stort og romslig p-hus med videoovervåkning og god størrelse på plassene. Mulighet for lading.",
      price: "1200-1900 kr/mnd",
      image: parkingImage,
      features: ["Videoovervåkning", "Elbillading", "Faste plasser", "Korttidsparkering"],
      buttonText: "Bestill plass",
      buttonAction: () => window.open("https://onepark.no/parkering/akershus/wesselkvartalet/", "_blank")
    },
    {
      icon: "🛁",
      title: "Garderober",
      location: "Wessel P-hus",
      description: "Tilgang til garderobe med skap og dusj. Perfekt for pendlere og aktive mennesker.",
      price: "Ta kontakt",
      features: ["Skap inkludert", "Dusj tilgjengelig", "Sikker adgang"],
      buttonText: "Kontakt oss",
      buttonAction: () => {
        const kontaktSection = document.getElementById('kontakt');
        if (kontaktSection) kontaktSection.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      icon: "🌿",
      title: "Takhage",
      location: "Toppen av Wesselkvartalet",
      description: "20 m² takhager med fantastisk utsikt. Mulighet for både leie og kjøp.",
      price: "1000 kr/m²/år",
      size: "20 m²",
      image: rooftopImage,
      features: ["Fantastisk utsikt", "Bærekraftig", "Leie eller kjøp"],
      buttonText: "Se på Finn.no",
      buttonAction: () => window.open("https://www.finn.no/realestate/businessrent/ad.html?finnkode=396460332", "_blank")
    }
  ];

  return (
    <section id="lokaler" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Ledige lokaler og fasiliteter
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Finn det perfekte lokalet for ditt behov i Wesselkvartalet. Fra lager til kontorer, parkering til takhager.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <PropertyCard key={index} {...property} />
          ))}
        </div>
      </div>
    </section>
  );
}