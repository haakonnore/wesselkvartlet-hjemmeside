import { ExternalLink, Trophy } from "lucide-react";

export const ArchitecturePrizeWinnerBanner = () => {
  return (
    <section className="bg-primary text-primary-foreground py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-3 text-center">
          <Trophy className="w-6 h-6 text-yellow-400" />
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <span className="font-bold text-lg">
              🏆 VINNER AV STATENS ARKITEKTURPRIS 2025!
            </span>
            <a
              href="https://www.regjeringen.no/no/aktuelt/wesselkvartalet-i-asker-er-vinner-av-statens-arkitekturpris-2025/id3116509/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm underline hover:no-underline transition-all"
            >
              Les mer
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
          <Trophy className="w-6 h-6 text-yellow-400" />
        </div>
      </div>
    </section>
  );
};