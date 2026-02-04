import { PropertyCard } from "./PropertyCard";
import { useNavigate } from "react-router-dom";
import { properties } from "@/data/properties";

export function PropertyGrid() {
  const navigate = useNavigate();

  return (
    <section id="lokaler" className="py-24 bg-white border-y border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground tracking-tight">Ledige lokaler, takhager og parkering</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Finn det perfekte lokalet for ditt behov i Wesselkvartalet. Fra lager til kontorer, parkering til takhager.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <PropertyCard
              key={index}
              {...property}
              buttonAction={() => {
                if (property.externalLink) {
                  window.open(property.externalLink, "_blank");
                } else if (property.buttonLink) {
                  navigate(property.buttonLink);
                } else if (property.contactEmail) {
                  window.location.href = `mailto:${property.contactEmail}`;
                } else {
                  navigate("/leie");
                }
              }}
              buttonText={property.buttonText || (property.externalLink ? (property.externalLinkText || "Se på Finn.no") : "Les mer")}
            />
          ))}
        </div>
      </div>
    </section>
  );
}