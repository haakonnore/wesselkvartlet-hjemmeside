import { Building2, Users, Award } from "lucide-react";

export const ArchitectsSection = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              Arkitektene Bak Wesselkvartalet
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Vigsnæs+Kosberg++ */}
            <div className="bg-background rounded-lg p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <Building2 className="h-8 w-8 text-primary mr-3" />
                <h3 className="text-2xl font-bold text-foreground">
                  Vigsnæs+Kosberg++ Arkitekter
                </h3>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Hovedarkitekter for Wesselkvartalet, ansvarlig for det innovative designet med myke, buede linjer og lys teglstein. Firmaet er kjent for sin særpregede arkitektur som balanserer estetikk med funksjonalitet.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <Award className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Arkitektonisk innovasjon</h4>
                    <p className="text-sm text-muted-foreground">
                      Skapte unike buede former som prioriterer kvalitet fremfor maksimal utnyttelse
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Users className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Menneskevennlig design</h4>
                    <p className="text-sm text-muted-foreground">
                      Fokus på spennende gangforløp og maksimering av dagslys i alle boliger
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* LARK */}
            <div className="bg-background rounded-lg p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <Building2 className="h-8 w-8 text-primary mr-3" />
                <h3 className="text-2xl font-bold text-foreground">
                  LARK: Gullik Gulliksen Landskapsarkitekter
                </h3>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Ansvarlig for landskapsarkitekturen og utomhusarealene. LARK har skapt de grønne fellesområdene som binder sammen kvartalet og skaper en helhetlig opplevelse.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <Award className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Grønn arkitektur</h4>
                    <p className="text-sm text-muted-foreground">
                      Design av takhager og fellesområder som fremmer miljø og fellesskap
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Users className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Urbane oaser</h4>
                    <p className="text-sm text-muted-foreground">
                      Skapte Apotekerhagen og andre grønne rom som binder sammen kvartalet
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};