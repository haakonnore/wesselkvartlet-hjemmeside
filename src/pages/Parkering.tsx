import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Navigation, MapPin, Clock, Car } from "lucide-react";
import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const Parkering = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mapRef.current) {
      // Create map centered on Asker address
      const map = L.map(mapRef.current).setView([59.8341334, 10.4339811], 16);

      // Add OpenStreetMap tiles
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      // Custom marker icon
      const customIcon = L.divIcon({
        html: '<div style="background-color: hsl(var(--primary)); width: 20px; height: 20px; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 6px rgba(0,0,0,0.3);"></div>',
        className: 'custom-div-icon',
        iconSize: [20, 20],
        iconAnchor: [10, 10]
      });

      // Add marker
      L.marker([59.8341334, 10.4339811], { icon: customIcon })
        .addTo(map)
        .bindPopup('<strong>Wessel P-hus</strong><br>9 Torvveien, 1383 Asker')
        .openPopup();

      // Cleanup function
      return () => {
        map.remove();
      };
    }
  }, []);

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
              Wessel P-hus - 9 Torvveien, 1383 Asker
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
                  <strong>Adresse:</strong><br/>
                  9 Torvveien<br/>
                  1383 Asker
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
                    i Asker sentrum med Autopay skiltgjenkjenning for sømløs parkering.
                  </p>
                  <ul className="space-y-2">
                    <li>• 1 time gratis parkering (plan U1 og U2)</li>
                    <li>• Autopay - automatisk skiltgjenkjenning</li>
                    <li>• Døgnåpen parkering (24/7)</li>
                    <li>• Ingen ladeplikt - parker med både bensin og elbil</li>
                    <li>• HC-parkering tilgjengelig</li>
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
                    <p className="font-medium text-foreground">Priser:</p>
                    <p>1 time gratis i plan U1 og U2</p>
                    <p>22 kr per 30 min ut over gratistiden</p>
                    <p>Makspris: 190 kr per 24 timer</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Betaling:</p>
                    <p>Autopay (skiltgjenkjenning)</p>
                    <p>Kort og mobile betalingsløsninger</p>
                    <p>EasyPark-takstgruppe: 3707</p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-lg p-6 border border-border">
                <h3 className="text-xl font-semibold mb-3">Kart</h3>
                <div 
                  ref={mapRef} 
                  className="w-full h-64 rounded-lg border border-border"
                />
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