import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { SEOHead } from "@/components/SEOHead";
import { MapPin, Building, ArrowRight, Share2, Mail, Phone } from "lucide-react";

const Lokaler = () => {
  const handleContact = () => {
    const kontaktSection = document.getElementById('kontakt');
    if (kontaktSection) {
      kontaktSection.scrollIntoView({ behavior: 'smooth' });
    } else {
        // Fallback if contact section is not on this page (it will be in the footer or we might duplicate it)
        // For now, let's just scroll to bottom or provide a direct link
         window.location.href = "/#kontakt";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Ledige Lokaler og Næringslokaler i Asker Sentrum | Wesselkvartalet"
        description="Topp moderne næringslokaler til leie i Asker sentrum. Fleksible arealer i Wesselkvartalet, perfekt for kontor eller butikk. Kontakt oss for visning."
        canonicalUrl="https://wesselkvartalet.no/lokaler"
      />
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Næringslokaler i Asker Sentrum
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Skap din bedrifts fremtid i Askers nye hjerte. Vi tilbyr moderne, fleksible lokaler med særpreg og sentral beliggenhet.
            </p>
          </div>

          <div className="grid gap-8 mb-12">
            <Card className="overflow-hidden border-primary/20 shadow-lg">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="h-64 md:h-auto bg-muted relative">
                   <img 
                    src="/lovable-uploads/3c64b751-93ee-4825-aeef-7a90c50a10c7.png" 
                    alt="Næringslokale Asker Sentrum"
                    className="absolute inset-0 w-full h-full object-cover"
                   />
                </div>
                <div className="p-6 md:p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-primary font-medium mb-2">
                       <Building className="h-5 w-5" />
                       <span>Ledig nå</span>
                    </div>
                    <h2 className="text-3xl font-bold mb-2">Wesselgården / Torvveien 9</h2>
                    <div className="flex items-center gap-2 text-muted-foreground mb-4">
                      <MapPin className="h-4 w-4" />
                      <span>Under Peppes Pizza, Asker Sentrum</span>
                    </div>
                    <p className="text-muted-foreground mb-6">
                      240 m² unikt næringslokale som kan tilpasses dine behov. Lokalene skal totalrenoveres med nye vinduer og moderne fasiliteter. Perfekt for butikk, showroom eller kontorlandskap.
                    </p>
                    <ul className="space-y-2 mb-8">
                        <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            <span>Sentral plassering midt i sentrum</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            <span>Mulighet for oppdeling</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            <span>Direkte adkomst fra gateplan</span>
                        </li>
                    </ul>
                  </div>
                  
                  <div className="space-y-4">
                    <Button onClick={handleContact} size="lg" className="w-full">
                      Kontakt oss for visning <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <div className="flex justify-center gap-4 text-sm text-muted-foreground">
                        <span>240 m²</span>
                        <span>•</span>
                        <span>Etasje U1</span>
                        <span>•</span>
                        <span>Renoveres</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card>
                <CardHeader>
                    <CardTitle>Beliggenhet</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">
                        Plassert midt i Asker sentrum med kort vei til tog, buss og alle servicetilbud. Wesselkvartalet er et naturlig knutepunkt.
                    </p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Fasiliteter</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">
                        Tilgang til moderne infrastruktur, parkering i kjeller, sykkelparkering, garderober og mulighet for leie av takhage.
                    </p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Standard</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">
                        Høy teknisk standard, godt inneklima og energieffektive løsninger. Vi tilpasser lokalene etter leietakers behov.
                    </p>
                </CardContent>
            </Card>
          </div>

          <Card id="kontakt-info" className="bg-primary/5 border-primary/10">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Interessert? Ta kontakt</h2>
               <p className="text-muted-foreground mb-8">
                Vi tar gjerne en uforpliktende prat om dine behov for lokaler i Asker.
              </p>
              <div className="flex flex-col md:flex-row justify-center gap-6">
                <Button variant="outline" className="gap-2" onClick={() => window.location.href = "mailto:kontakt@wesselkvartalet.no"}>
                    <Mail className="h-4 w-4" />
                    kontakt@wesselkvartalet.no
                </Button>
                <Button variant="outline" className="gap-2" onClick={() => window.location.href = "tel:+4799589433"}>
                    <Phone className="h-4 w-4" />
                    +47 99 58 94 33
                </Button>
              </div>
            </CardContent>
          </Card>

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Lokaler;
