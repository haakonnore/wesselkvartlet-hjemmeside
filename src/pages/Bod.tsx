import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SEOHead } from "@/components/SEOHead";
import { Package, ShieldCheck, Ruler, Clock, ArrowRight, ExternalLink } from "lucide-react";

const Bod = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Bod og Lager til Leie i Asker Sentrum | Wessel P-hus"
        description="Trenger du ekstra lagringsplass? Vi leier ut boder og lager i Wessel P-hus i Asker sentrum. Sikkert, tørt og tilgjengelig. Størrelser fra 2.5 til 240 kvm."
        canonicalUrl="https://wesselkvartalet.no/bod"
      />
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Bod og Lager i Asker Sentrum
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Sikker og sentral lagring midt i sentrum. Vi tilbyr tørre og trygge boder i ulike størrelser.
            </p>
          </div>

          <div className="grid gap-8 mb-12">
            <Card className="overflow-hidden border-primary/20 shadow-lg">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="h-64 md:h-auto bg-muted relative">
                   <img 
                    src="/lovable-uploads/3dd8daf6-3570-4b9e-98e0-3b9babf5262a.png" 
                    alt="Bod og Lagerplass Asker"
                    className="absolute inset-0 w-full h-full object-cover"
                   />
                </div>
                <div className="p-6 md:p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-primary font-medium mb-2">
                       <Package className="h-5 w-5" />
                       <span>Ledig umiddelbart</span>
                    </div>
                    <h2 className="text-3xl font-bold mb-2">Lagerboder Wessel P-hus</h2>
                    <p className="text-muted-foreground mb-6">
                      Vi har boder i flere størrelser, fra små boder på 2.5 kvm til større lagerarealer opp til 240 kvm. Perfekt for lagring av sesongutstyr, innbo, eller arkiv/lager for bedrifter.
                    </p>
                    <ul className="space-y-2 mb-8">
                        <li className="flex items-center gap-2">
                            <ShieldCheck className="h-4 w-4 text-primary" />
                            <span>Kameraovervåket område</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-primary" />
                            <span>Tilgang 24/7</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <Ruler className="h-4 w-4 text-primary" />
                            <span>Fra 2.5 m² til 240 m²</span>
                        </li>
                    </ul>
                  </div>
                  
                  <div className="space-y-4">
                    <Button asChild size="lg" className="w-full">
                         <a href="https://www.finn.no/realestate/businessrent/ad.html?finnkode=396460332" target="_blank" rel="noopener noreferrer">
                          Se annonse på Finn.no <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                    </Button>
                    <div className="flex justify-center gap-4 text-sm text-muted-foreground">
                        <span>Pris: 1100–1500 kr/m²/år</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <ShieldCheck className="h-5 w-5 text-primary" />
                        Sikkerhet
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">
                        Wessel P-hus er et moderne anlegg med videoovervåkning og adgangskontroll. Din eiendom står trygt hos oss.
                    </p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <ArrowRight className="h-5 w-5 text-primary" />
                        Enkel Adkomst
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">
                        Enkel innkjøring via parkeringshuset. Tørrskodd adkomst til bodene direkte fra bilen. Adgang med nøkkelbrikke.
                    </p>
                </CardContent>
            </Card>
             <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Package className="h-5 w-5 text-primary" />
                         Fleksibilitet
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">
                        Trenger du mer eller mindre plass? Vi har ulike størrelser og kan tilpasse løsninger for større behov.
                    </p>
                </CardContent>
            </Card>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Bod;
