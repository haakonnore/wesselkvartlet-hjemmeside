import { ExternalLink, Trophy } from "lucide-react";

export const ArchitecturePrizeWinnerBanner = () => {
  return (
    <section className="py-16 bg-background border-y border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <Trophy className="h-12 w-12 text-primary" />
          </div>
          
          <h2 className="text-3xl font-bold mb-4 text-foreground">
            VINNER AV STATENS ARKITEKTURPRIS 2025!
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Wesselkvartalet i Asker er tildelt Statens arkitekturpris for 2025. 
            Prisen er en anerkjennelse av arkitektur som skaper gode steder og bidrar til fellesskapets interesser.
          </p>
          
          <a
            href="https://www.regjeringen.no/no/aktuelt/wesselkvartalet-i-asker-er-vinner-av-statens-arkitekturpris-2025/id3116509/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
          >
            Les hele kunngjøringen på regjeringen.no
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};