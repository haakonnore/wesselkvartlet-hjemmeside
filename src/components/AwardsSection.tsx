import { Card, CardContent } from "@/components/ui/card";

export function AwardsSection() {
  return (
    <section id="doga" className="py-20" style={{background: "linear-gradient(135deg, #34495e, #B8734A 80%)"}}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* DOGA Award */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-accent mb-6 flex items-center gap-3">
                🏆 DOGA-merket for design og arkitektur
              </h2>
              
              <div className="space-y-6">
                <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-accent mb-3">Juryen uttaler:</h3>
                    <p className="italic text-lg leading-relaxed text-white/95">
                      "Et fortettingsprosjekt med buede, middelhavsinspirerte former har gitt et løft til Asker sentrum. 
                      Vi er fascinert av hvordan teglfasadene er tilpasset trehusbebyggelsen og omkringliggende bygårder."
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-accent mb-3">Forbilde for fremtiden</h3>
                    <p className="text-lg leading-relaxed text-white/95">
                      Wesselkvartalet viser hvordan strategisk bruk av design og arkitektur skaper viktige verdier for 
                      samfunn, miljø og økonomi - et fremste forbilde for bærekraftig byutvikling.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>

          {/* Murverksprisen */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-accent mb-2 flex items-center gap-3">
                🧱 Murverksprisen 2021
              </h2>
              <p className="text-lg text-white/95 mb-6">
                Fremragende arkitektur i tegl der murverket er anvendt på en håndverksmessig og teknisk god måte
              </p>

              <div className="space-y-6">
                <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-accent mb-3">Juryens begrunnelse</h3>
                    <p className="italic leading-relaxed text-white/95">
                      "Wesselkvartalet viderefører det organiske formspråket. Det nye anlegget har et karakteristisk og 
                      originalt uttrykk med en tydelig identitet og knytter seg til eksisterende bebyggelse ved bruk av tegl."
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-accent mb-3">Teknisk innovasjon</h3>
                    <p className="leading-relaxed text-white/95">
                      Marziale teglstein med unikt mønstermurverk. Annethvert løperskift inntrukket i brystningspartier 
                      og på balkonger. Flettverksmuring i rette strekk og konvekse/konkave partier.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-accent mb-3">Håndverksmessig kvalitet</h3>
                    <p className="leading-relaxed text-white/95">
                      Murarbeid utført av AK Byggservice. Weber mørtel som "nærmest usynlig bindeverk" sikrer både 
                      estetikk og teknisk holdbarhet i alle værforhold.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}