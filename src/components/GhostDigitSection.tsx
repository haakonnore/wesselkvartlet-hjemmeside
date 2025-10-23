import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

export function GhostDigitSection() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="text-4xl">🔬</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 text-blue-900">
                    GHOST-DIGIT Forskningsprosjekt
                  </h3>
                  <p className="text-base md:text-lg text-blue-800 mb-4 leading-relaxed">
                    Wesselkvartalet er en sentral del av det europeiske forskningsprosjektet GHOST-DIGIT,
                    som utvikler digitale tvillinger for optimalisering av geotermiske energisystemer.
                    Prosjektet kombinerer innovativ teknologi med bærekraftig energiforsyning.
                  </p>
                  <a
                    href="https://www.sintef.no/en/projects/2024/ghost-digit/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-900 font-semibold transition-colors"
                  >
                    Les mer om GHOST-DIGIT
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
