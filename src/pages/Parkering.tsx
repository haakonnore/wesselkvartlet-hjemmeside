import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Navigation, MapPin } from "lucide-react";

const Parkering = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    let scriptElement: HTMLScriptElement | null = null;
    
    const initMap = () => {
      if (mapRef.current && window.google) {
        try {
          // Coordinates for Wesselkvartalet (approximate location in Oslo)
          const wesselkvartaletLocation = { lat: 59.9139, lng: 10.7522 };
          
          const map = new window.google.maps.Map(mapRef.current, {
            center: wesselkvartaletLocation,
            zoom: 16,
            mapTypeControl: false,
            streetViewControl: false,
            fullscreenControl: false,
          });

          // Add marker
          new window.google.maps.Marker({
            position: wesselkvartaletLocation,
            map: map,
            title: "Wesselkvartalet Parkering",
          });

          setMapLoaded(true);
        } catch (error) {
          console.error("Error initializing map:", error);
        }
      }
    };

    // Check if Google Maps API is already loaded
    if (window.google && window.google.maps) {
      initMap();
    } else {
      // Check if script is already being loaded
      const existingScript = document.querySelector('script[src*="maps.googleapis.com"]');
      
      if (!existingScript) {
        scriptElement = document.createElement('script');
        scriptElement.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places&loading=async`;
        scriptElement.async = true;
        scriptElement.defer = true;
        scriptElement.onload = initMap;
        scriptElement.onerror = (error) => {
          console.error("Error loading Google Maps script:", error);
        };
        document.head.appendChild(scriptElement);
      } else {
        // If script exists, wait for it to load
        const checkForGoogle = setInterval(() => {
          if (window.google && window.google.maps) {
            clearInterval(checkForGoogle);
            initMap();
          }
        }, 100);
        
        // Clean up interval after 10 seconds
        setTimeout(() => clearInterval(checkForGoogle), 10000);
      }
    }

    // Cleanup function
    return () => {
      if (scriptElement && scriptElement.parentNode) {
        try {
          scriptElement.parentNode.removeChild(scriptElement);
        } catch (error) {
          // Ignore errors if script was already removed
          console.warn("Script cleanup warning:", error);
        }
      }
    };
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
              Finn parkering ved Wesselkvartalet
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-6">
              <div className="bg-card rounded-lg p-6 border border-border">
                <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <MapPin className="h-6 w-6 text-primary" />
                  Lokasjon
                </h2>
                <p className="text-muted-foreground mb-4">
                  Wesselkvartalet ligger sentralt i Oslo med god tilgang til offentlig transport og parkering.
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
                <h3 className="text-xl font-semibold mb-3">Parkeringsmuligheter</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Gateparkering i området</li>
                  <li>• Offentlige parkeringsplasser i nærheten</li>
                  <li>• God tilgang til kollektivtransport</li>
                  <li>• Sykkelparkering tilgjengelig</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <div 
                ref={mapRef} 
                className="w-full h-96 rounded-lg border border-border bg-muted flex items-center justify-center"
              >
                {!mapLoaded && (
                  <div className="text-center text-muted-foreground">
                    <MapPin className="h-12 w-12 mx-auto mb-2" />
                    <p>Laster kart...</p>
                    <p className="text-sm mt-2">
                      Krever Google Maps API-nøkkel for å vise kartet
                    </p>
                  </div>
                )}
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