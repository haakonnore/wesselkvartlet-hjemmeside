import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const galleryImages = [
  {
    src: "/lovable-uploads/88f6b913-8d40-4ef9-83cd-bb1d175c08a2.png",
    alt: "Wesselkvartalet fasade med moderne arkitektur og butikker i førsteetasje",
    title: "Hovedinngang og butikkområde"
  },
  {
    src: "/lovable-uploads/95789669-ad3c-47d7-a975-5d38fe7701f6.png",
    alt: "Wesselkvartalet boligbygg med grønne fellesområder og rundede balkonger",
    title: "Boligområde med grønne fellesarealer"
  },
  {
    src: "/lovable-uploads/942702a4-8b44-4259-ba77-f5fef779f7ec.png",
    alt: "Detaljert arkitektur av Wesselkvartalet med tegl og tre elementer",
    title: "Arkitektoniske detaljer"
  },
  {
    src: "/lovable-uploads/780bb704-694b-40e3-8322-a7de34abed19.png",
    alt: "Wesselkvartalet kurvet fasade med innovative designelementer",
    title: "Innovativ fasadedesign"
  },
  {
    src: "/lovable-uploads/9cb76891-08d1-4213-b269-02b584356261.png",
    alt: "Wesselkvartalet helhetsbilde med parker og moderne utbyggingsområde",
    title: "Helhetlig utviklingsområde"
  }
];

export function ProjectGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

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

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Prosjektgalleri
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Opplev Wesselkvartalet gjennom disse bildene som viser moderne arkitektur, 
            bærekraftig design og livskraftige fellesarealer
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-card shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => openModal(index)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="font-semibold text-lg">{image.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="relative max-w-7xl max-h-[90vh] w-full">
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 text-white"
                onClick={closeModal}
              >
                <X className="w-6 h-6" />
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 text-white"
                onClick={prevImage}
              >
                <ChevronLeft className="w-8 h-8" />
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 text-white"
                onClick={nextImage}
              >
                <ChevronRight className="w-8 h-8" />
              </Button>

              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={galleryImages[selectedImage].src}
                  alt={galleryImages[selectedImage].alt}
                  className="w-full h-full object-contain max-h-[80vh]"
                />
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
          </div>
        )}
      </div>
    </section>
  );
}