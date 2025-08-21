import { Button } from "@/components/ui/button";
import { ExternalLink, Zap } from "lucide-react";

export function EnergyArticleSection() {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-4">
            <Zap className="h-10 w-10 text-primary" />
          </div>
          
          <h2 className="text-2xl font-bold mb-3 text-foreground">
            Energi tilsvarende 50.000 elbilbatterier
          </h2>
          
          <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto leading-relaxed">
            Les mer om Wesselkvartalets banebrytende energiløsninger og hvordan prosjektet 
            kan lagre energi tilsvarende 50.000 elbilbatterier i denne artikkelen fra 
            Norske Kraft- og Fjernvarmeverk.
          </p>
          
          <Button asChild variant="outline" className="group">
            <a 
              href="https://nkf-norge.no/fagblad/energi-tilsvarende-50-000-elbilbatterier/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              Les artikkelen
              <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}