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
        <div className="hidden md:flex flex-wrap items-center gap-x-4 gap-y-2 w-full mt-4">
          {subpages.map((item, index) => (
            <div key={item.name} className="flex items-center gap-x-4">
              <Link to={item.href} className="text-sm font-medium leading-5 text-muted-foreground hover:text-primary transition-colors">
                {item.name}
              </Link>
              {index < subpages.length - 1 && (
                <span className="text-muted-foreground">|</span>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden flex flex-col gap-y-2 w-full mt-4 pb-4 border-t border-border pt-4">
            {subpages.map(item => (
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