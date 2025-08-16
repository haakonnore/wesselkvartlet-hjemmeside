import { ExternalLink } from "lucide-react";

export const ArchitecturePrizeSection = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-foreground">
            Finalist til Statens Arkitekturpris 2025
          </h2>
          <p className="text-lg mb-8 text-muted-foreground">
            Wesselkvartalet er finalist til å vinne statens arkitekturpris 2025.
          </p>
          
          <div className="bg-background rounded-lg p-6 mb-8 border shadow-sm">
            <blockquote className="text-xl italic text-foreground mb-4">
              "Er dette norges fineste bygg?"
            </blockquote>
            <cite className="text-muted-foreground">- Budstikka</cite>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.budstikka.no/er-dette-norges-fineste-bygg-kan-ga-til-topps-i-karing/s/5-55-2060922"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              Les artikkelen i Budstikka
              <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href="https://www.regjeringen.no/no/aktuelt/fem-finalister-i-statens-arkitekturpris/id3116090/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors"
            >
              Pressemelding fra KMD
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};