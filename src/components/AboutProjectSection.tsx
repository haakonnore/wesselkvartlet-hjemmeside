import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, X, ExternalLink, Building2, Users, Award } from "lucide-react";
import buildingView1 from "/lovable-uploads/695a7bce-4ed8-4ab2-9464-13ab4755497f.png";
import buildingView2 from "/lovable-uploads/b4bee2d3-5b73-49c3-874b-cc1da2a65ddc.png";
import buildingView3 from "/lovable-uploads/1b0f4c04-b5ad-4004-9cb1-bfb36ce1bf9b.png";
import buildingView4 from "/lovable-uploads/33066afb-850f-44f0-b9a7-c05f160fa162.png";
const galleryImages = [{
  src: "/lovable-uploads/88f6b913-8d40-4ef9-83cd-bb1d175c08a2.png",
  alt: "Wesselkvartalet fasade med moderne arkitektur og butikker i førsteetasje",
  title: "Hovedinngang og butikkområde"
}, {
  src: "/lovable-uploads/95789669-ad3c-47d7-a975-5d38fe7701f6.png",
  alt: "Wesselkvartalet boligbygg med grønne fellesområder og rundede balkonger",
  title: "Boligområde med grønne fellesarealer"
}, {
  src: "/lovable-uploads/942702a4-8b44-4259-ba77-f5fef779f7ec.png",
  alt: "Detaljert arkitektur av Wesselkvartalet med tegl og tre elementer",
  title: "Arkitektoniske detaljer"
}, {
  src: "/lovable-uploads/780bb704-694b-40e3-8322-a7de34abed19.png",
  alt: "Wesselkvartalet kurvet fasade med innovative designelementer",
  title: "Innovativ fasadedesign"
}, {
  src: "/lovable-uploads/9cb76891-08d1-4213-b269-02b584356261.png",
  alt: "Wesselkvartalet helhetsbilde med parker og moderne utbyggingsområde",
  title: "Helhetlig utviklingsområde"
}, {
  src: "/lovable-uploads/80f363fb-b697-44cd-b65c-8f2976d0ce8b.png",
  alt: "Apotekerhagen med vannelementer og lek for barn",
  title: "Apotekerhagen"
}, {
  src: "/lovable-uploads/adffce7c-a626-4649-8072-1049321b4051.png",
  alt: "Gårdsplass med kurvet teglsteinfasade og butikklokaler",
  title: "Gårdsplass"
}, {
  src: "/lovable-uploads/9bdb99e5-f927-48ec-a49f-489d74ca83e1.png",
  alt: "Takterrasser og uteområder med moderne design",
  title: "Takterrasser"
}, {
  src: "/lovable-uploads/f2d21b23-5b51-4277-bf04-2d9e1d135871.png",
  alt: "Gårdsplassen sett fra bakkeplan med butikker og restauranter",
  title: "Handelsgata"
}, {
  src: "/lovable-uploads/7dcce2ef-bbc3-42dd-81fb-dc9a105b4078.png",
  alt: "Wesselkvartalet sett utenfra med kurvet fasade som reiser seg over de historiske bygningene",
  title: "Eksteriør"
}];
export function AboutProjectSection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const architecturalFeatures = [{
    title: "Bærekraftig arkitektur",
    description: "Karakteristisk murstein og geometriske mønstre",
    image: buildingView1
  }, {
    title: "Buede balkonger med trepanel",
    description: "Utsikt over Askerbygda; fra takhagen kan du se helt til Oslo.",
    image: buildingView2
  }, {
    title: "Ikonisk fasade",
    description: "Karakteristisk murstein og geometriske mønstre",
    image: buildingView3
  }, {
    title: "Integrert grøntområde",
    description: "Takhager og grønne elementer i hele kvartalet",
    image: buildingView4
  }];
  const openModal = (index: number) => {
    setSelectedImage(index);
  };
  const closeModal = () => {
    setSelectedImage(null);
  };
  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };
  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    }
  };
  return <section id="om" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main About Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Om Wesselkvartalet</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">Et unikt arkitektonisk kvartal som kombinerer moderne design med bærekraftige prinsipper. Wesselkvartalet representerer fremtidens byutvikling i hjertet av Asker. Wesselgården og Bankveien 4 har etter stort byggeprosjekt blitt til Wesselkvartalet.</p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">Prosjektet er utviklet i samarbeid mellom to familier fra Høn. Wessel/Nore-familien som i 2011 fikk Tandberg Eiendom inn som medeier i selskapet. Sammen ønsket de å bygge noe de kunne være stolte av.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {architecturalFeatures.map((feature, index) => <Card key={index} className="property-card overflow-hidden">
              <div className="relative h-64">
                <img src={feature.image} alt={feature.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-white/90 text-sm">{feature.description}</p>
                </div>
              </div>
            </Card>)}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center mb-20">
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

        {/* Project Gallery Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Prosjektgalleri
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Opplev Wesselkvartalet gjennom disse bildene som viser moderne arkitektur, 
              bærekraftig design og livskraftige fellesarealer
            </p>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => <div key={index} className="group relative overflow-hidden rounded-xl bg-card shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer" onClick={() => openModal(index)}>
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={image.src} alt={image.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h4 className="font-semibold text-lg">{image.title}</h4>
                </div>
              </div>)}
          </div>
        </div>

        {/* Architect Section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            
            <p className="text-lg text-muted-foreground"></p>
          </div>

          
        </div>

        {/* Modal */}
        {selectedImage !== null && <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="relative max-w-7xl max-h-[90vh] w-full">
              <Button variant="ghost" size="icon" className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 text-white" onClick={closeModal}>
                <X className="w-6 h-6" />
              </Button>
              
              <Button variant="ghost" size="icon" className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 text-white" onClick={prevImage}>
                <ChevronLeft className="w-8 h-8" />
              </Button>
              
              <Button variant="ghost" size="icon" className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 text-white" onClick={nextImage}>
                <ChevronRight className="w-8 h-8" />
              </Button>

              <div className="relative overflow-hidden rounded-lg">
                <img src={galleryImages[selectedImage].src} alt={galleryImages[selectedImage].alt} className="w-full h-full object-contain max-h-[80vh]" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <h3 className="text-white text-xl font-semibold mb-2">
                    {galleryImages[selectedImage].title}
                  </h3>
                  <p className="text-white/80 text-sm">
                    {selectedImage + 1} av {galleryImages.length}
                  </p>
                </div>
              </div>
            </div>
          </div>}
      </div>
    </section>;
}