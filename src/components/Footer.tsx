import { Button } from "@/components/ui/button";
export function Footer() {
  return <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Wesselkvartalet</h3>
            <p className="text-primary-foreground/80 mb-4">
              Askers nye hjerte - hvor moderne arkitektur møter bærekraftig innovasjon. 
              Vi tilbyr moderne lokaler og fasiliteter i hjertet av Asker sentrum.
            </p>
            <div className="space-y-2 text-sm text-primary-foreground/80">
              <p>Asker sentrum, 1383 Asker</p>
              <p>kontakt@wesselkvartalet.no</p>
              <p>+47 99 58 94 33</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Hurtiglenker</h4>
            <ul className="space-y-2">
              <li>
                <a href="#lokaler" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Ledige lokaler
                </a>
              </li>
              <li>
                <a href="#energi" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Energisentral
                </a>
              </li>
              <li>
                <a href="#doga" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Utmerkelser
                </a>
              </li>
              <li>
                <a href="#om" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Om kvartalet
                </a>
              </li>
            </ul>
          </div>

          {/* External Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Tjenester</h4>
            <div className="space-y-3">
              <Button variant="outline" size="sm" className="w-full border-primary-foreground/20" onClick={() => window.open("https://onepark.no/parkering/akershus/wesselkvartalet/", "_blank")}>
                Bestill parkeringsplass
              </Button>
              <Button variant="outline" size="sm" className="w-full border-primary-foreground/20" onClick={() => window.open("https://www.aneo.com/no/tjenester/mobility/kontakt/", "_blank")}>
                Bestill lader
              </Button>
              <Button variant="outline" size="sm" className="w-full border-primary-foreground/20" onClick={() => window.open("https://www.finn.no/realestate/businessrent/ad.html?finnkode=396460332", "_blank")}>
                Se takhage på Finn.no
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 Wesselkvartalet. Alle rettigheter forbeholdt.
          </p>
        </div>
      </div>
    </footer>;
}