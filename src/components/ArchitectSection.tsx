import { Button } from "@/components/ui/button";
import { ExternalLink, Building2, Users, Award } from "lucide-react";

export function ArchitectSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Arkitektene bak Wesselkvartalet
            </h2>
            <p className="text-xl text-muted-foreground">
              Et samarbeid mellom anerkjente arkitektfirmaer
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-lg border">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Building2 className="w-8 h-8 text-primary" />
                  <h3 className="text-2xl font-bold text-foreground">VI-KO Arkitekter</h3>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  VI-KO står bak den innovative designen av Wesselkvartalet. Med sin ekspertise 
                  innen bærekraftig arkitektur og urbane løsninger, har de skapt et prosjekt som 
                  redefinerer Askers sentrum med en blanding av moderne design og miljøvennlige løsninger.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary" />
                    <span className="text-sm text-muted-foreground">Erfarne arkitekter</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-primary" />
                    <span className="text-sm text-muted-foreground">Bærekraftig design</span>
                  </div>
                </div>

                <Button asChild className="gap-2">
                  <a 
                    href="https://www.vi-ko.no/projects/wessel" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Se mer hos VI-KO
                  </a>
                </Button>
              </div>

              <div className="bg-muted/50 rounded-xl p-6">
                <h4 className="font-semibold text-lg mb-4 text-foreground">Prosjektdetaljer</h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>Blandet bruk: butikker, kontorer og boliger</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>Optimalisert for sollys og utsikt</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>Underjordisk parkering og tekniske anlegg</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>Takhage og grønne fellesarealer</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}