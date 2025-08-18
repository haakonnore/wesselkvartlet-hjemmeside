import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
const subpages = [{
  name: "Wessel Energi",
  href: "/wessel-energi"
}, {
  name: "Historien om Apotekergården",
  href: "/historien-om-wesselkvartalet"
}, {
  name: "Fra familietomt til bærekraftig byutvikling",
  href: "/fra-familietomt-til-byutvikling"
}, {
  name: "Arkitektur",
  href: "/arkitektur"
}, {
  name: "Arkitektonisk kvalitet i en skamløs bransje",
  href: "/arkitektonisk-kvalitet"
}];
const sectionLinks = [{
  name: "Ledige lokaler",
  href: "/#lokaler"
}, {
  name: "Utmerkelser",
  href: "/#doga"
}, {
  name: "Om kvartalet",
  href: "/#om"
}, {
  name: "Kontakt",
  href: "/#kontakt"
}];

// Force browser refresh by adding this comment

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <nav className="mx-auto flex max-w-7xl flex-col items-start p-3 lg:px-4" aria-label="Global">
        <div className="flex items-center justify-between w-full">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="text-2xl font-bold primary-gradient bg-clip-text text-transparent">
              Wesselkvartalet
            </span>
          </Link>
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-col gap-y-1 w-auto mt-4">
          <div className="flex items-center gap-x-2">
            <Link to="/wessel-energi" className="text-sm font-medium leading-5 text-muted-foreground hover:text-primary transition-colors">
              Wessel Energi
            </Link>
            <span className="text-muted-foreground">|</span>
            <Link to="/arkitektur" className="text-sm font-medium leading-5 text-muted-foreground hover:text-primary transition-colors">
              Arkitektur
            </Link>
          </div>
          {subpages.filter(item => item.name !== "Wessel Energi" && item.name !== "Arkitektur").map(item => (
            <Link key={item.name} to={item.href} className="text-sm font-medium leading-5 text-muted-foreground hover:text-primary transition-colors">
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden flex flex-col gap-y-2 w-full mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col gap-y-2">
              <Link 
                to="/wessel-energi" 
                className="text-sm font-medium leading-5 text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Wessel Energi
              </Link>
              <Link 
                to="/arkitektur" 
                className="text-sm font-medium leading-5 text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Arkitektur
              </Link>
            </div>
            {subpages.filter(item => item.name !== "Wessel Energi" && item.name !== "Arkitektur").map(item => (
              <Link 
                key={item.name} 
                to={item.href} 
                className="text-sm font-medium leading-5 text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </nav>

    </header>;
}