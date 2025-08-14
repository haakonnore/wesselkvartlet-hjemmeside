import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import buildingView1 from "/lovable-uploads/695a7bce-4ed8-4ab2-9464-13ab4755497f.png";
import buildingView2 from "/lovable-uploads/b4bee2d3-5b73-49c3-874b-cc1da2a65ddc.png";
import buildingView3 from "/lovable-uploads/1b0f4c04-b5ad-4004-9cb1-bfb36ce1bf9b.png";
import buildingView4 from "/lovable-uploads/33066afb-850f-44f0-b9a7-c05f160fa162.png";

export function AboutSection() {
  const architecturalFeatures = [
    {
      title: "Bærekraftig arkitektur",
      description: "Innovative mursteinsdesign med naturlige materialer og energieffektive løsninger",
      image: buildingView1
    },
    {
      title: "Moderne balkonger",
      description: "Curved balkonger med trepanel og fantastisk utsikt over Asker sentrum",
      image: buildingView2
    },
    {
      title: "Ikonisk fasade",
      description: "Karakteristisk murstein og geometriske mønstre som skaper visuell interesse",
      image: buildingView3
    },
    {
      title: "Integrert grøntområde",
      description: "Takhager og grønne elementer integrert i hele byggets design",
      image: buildingView4
    }
  ];

  return (
    <section id="om" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Om Wesselkvartalet</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Et unikt arkitektonisk mesterverk som kombinerer moderne design med bærekraftige prinsipper. 
            Wesselkvartalet representerer fremtidens byutvikling i hjertet av Asker.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {architecturalFeatures.map((feature, index) => (
            <Card key={index} className="property-card overflow-hidden">
              <div className="relative h-64">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-white/90 text-sm">{feature.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="space-y-4">
            <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
              <span className="text-2xl">🏢</span>
            </div>
            <h3 className="text-xl font-semibold">Middelhavsinspirert arkitektur</h3>
            <p className="text-muted-foreground">
              52 leiligheter av høy kvalitet i 2-7 etasjer med buede, unike former. Teglfasader med relieff.
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
              <span className="text-2xl">🏪</span>
            </div>
            <h3 className="text-xl font-semibold">Sympatisk fortetting</h3>
            <p className="text-muted-foreground">
              5 restauranter og 4 butikker på bakkeplan. 2000 m² kontorer i andre etasje.
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
              <span className="text-2xl">🌳</span>
            </div>
            <h3 className="text-xl font-semibold">Apotekerhagen</h3>
            <p className="text-muted-foreground">
              Et grønt, intimt rom i kvartalets sentrum - oppkalt etter apoteket som lå her fra 1927.
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
              <span className="text-2xl">🚗</span>
            </div>
            <h3 className="text-xl font-semibold">Bilfri tilværelse</h3>
            <p className="text-muted-foreground">
              250 parkeringsplasser med lading under bakken. Høy tetthet ved togstasjonen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}