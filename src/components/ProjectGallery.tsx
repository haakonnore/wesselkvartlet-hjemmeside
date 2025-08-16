import { useState } from "react";

const ProjectGallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      src: "/lovable-uploads/33d5590e-dfc2-4735-b895-c5104728d4ac.png",
      alt: "Tverrsnitt av Wesselkvartalet som viser bygningens profil og sammenheng med Apotekergården",
      title: "Tverrsnitt"
    },
    {
      src: "/lovable-uploads/358fd518-f5cc-4eaa-9826-37ca5f0a702b.png",
      alt: "Situasjonsplan som viser Wesselkvartalets plassering i Asker sentrum",
      title: "Situasjonsplan"
    },
    {
      src: "/lovable-uploads/f1da76e6-3e04-44d6-a5b0-a0d62f57daa1.png",
      alt: "Plantegning som viser leilighetsløsningene i Wesselkvartalet",
      title: "Plantegning leiligheter"
    },
    {
      src: "/lovable-uploads/1f7b83ec-1de9-4b1f-8008-a2d8f18a3464.png",
      alt: "Plantegning av førsteetasje med landskapsdesign og Apotekerhagen",
      title: "Førsteetasje og hageplan"
    },
    {
      src: "/lovable-uploads/80f363fb-b697-44cd-b65c-8f2976d0ce8b.png",
      alt: "Apotekerhagen med vannelementer og lek for barn",
      title: "Apotekerhagen"
    },
    {
      src: "/lovable-uploads/5dbf5235-1f3a-4fda-a870-37091a63a103.png",
      alt: "Inngangen til Wesselkvartalet med moderne arkitektur og teglsteinfasade",
      title: "Hovedinngang"
    },
    {
      src: "/lovable-uploads/adffce7c-a626-4649-8072-1049321b4051.png",
      alt: "Gårdsplass med kurvet teglsteinfasade og butikklokaler",
      title: "Gårdsplass"
    },
    {
      src: "/lovable-uploads/9bdb99e5-f927-48ec-a49f-489d74ca83e1.png",
      alt: "Takterrasser og uteområder med moderne design",
      title: "Takterrasser"
    },
    {
      src: "/lovable-uploads/f2d21b23-5b51-4277-bf04-2d9e1d135871.png",
      alt: "Gårdsplassen sett fra bakkeplan med butikker og restauranter",
      title: "Handelsgata"
    },
    {
      src: "/lovable-uploads/7dcce2ef-bbc3-42dd-81fb-dc9a105b4078.png",
      alt: "Wesselkvartalet sett utenfra med kurvet fasade som reiser seg over de historiske bygningene",
      title: "Eksteriør"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Prosjektgalleri
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Arkitektoniske tegninger og planer som viser Wesselkvartalets unike design og integrasjon i Asker sentrum
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg bg-white shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedImage(image.src)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-contain bg-white p-4 group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {image.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  Klikk for å se i full størrelse
                </p>
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
            </div>
          ))}
        </div>

        {/* Modal for enlarged image */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center">
              <img
                src={selectedImage}
                alt="Forstørret arkitekturtegning"
                className="max-w-full max-h-full object-contain bg-white rounded-lg"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white hover:text-gray-300 text-2xl font-bold bg-black/50 rounded-full w-10 h-10 flex items-center justify-center"
              >
                ×
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectGallery;