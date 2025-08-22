import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Navigation, MapPin, Clock, Car } from "lucide-react";

const Parkering = () => {
  const handleNavigate = () => {
    // Open Google Maps navigation
    window.open("https://maps.app.goo.gl/PMtBhgYfguDKe3xe8", "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Parkering
            </h1>
            <p className="text-xl text-muted-foreground">
              Wessel P-hus - Praktisk parkering i sentrum
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-card rounded-lg p-6 border border-border">
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <MapPin className="h-6 w-6 text-primary" />
                  Lokasjon
                </h2>
                <p className="text-muted-foreground mb-4">
                  Wessel P-hus ligger i Oslo sentrum med lett tilgang til Wesselkvartalet.
                </p>
                <Button 
                  onClick={handleNavigate}
                  className="w-full"
                  size="lg"
                >
                  <Navigation className="h-5 w-5 mr-2" />
                  Naviger hit
                </Button>
              </div>

              <div className="bg-card rounded-lg p-6 border border-border">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <Car className="h-5 w-5 text-primary" />
                  Om Wessel P-hus
                </h3>
                <div className="space-y-3 text-muted-foreground">
                  <p>
                    Wessel P-hus er et moderne parkeringshus som tilbyr trygg og praktisk parkering 
                    i Oslo sentrum. Parkeringshuset er ideelt plassert for besøkende til Wesselkvartalet.
                  </p>
                  <ul className="space-y-2">
                    <li>• Døgnåpen parkering</li>
                    <li>• Sikker og overvåket</li>
                    <li>• Enkelt å finne ledig plass</li>
                    <li>• Kort gåavstand til Wesselkvartalet</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-card rounded-lg p-6 border border-border">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Åpningstider & Priser
                </h3>
                <div className="space-y-3 text-muted-foreground">
                  <div>
                    <p className="font-medium text-foreground">Åpningstider:</p>
                    <p>Døgnåpen - 24/7</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Betaling:</p>
                    <p>Kontaktløs betaling tilgjengelig</p>
                    <p>Kort og mobile betalingsløsninger</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Tilgjengelighet:</p>
                    <p>Universell utforming</p>
                    <p>Tilrettelagt for bevegelseshemmede</p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-lg p-6 border border-border">
                <h3 className="text-xl font-semibold mb-3">Andre parkeringsmuligheter</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Gateparkering i området</li>
                  <li>• Andre parkeringshus i nærheten</li>
                  <li>• God tilgang til kollektivtransport</li>
                  <li>• Sykkelparkering ved Wesselkvartalet</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
export default Parkering;