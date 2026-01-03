import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Menu, Home, ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";

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
  name: "Frie Tøyler",
  href: "/frie-toyler"
}, {
  name: "Parkering",
  href: "/parkering"
}];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  // Helper to determine if a link is active
  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        
        {/* Logo Area */}
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5 flex items-center gap-2">
            <span className="text-xl md:text-2xl font-bold primary-gradient bg-clip-text text-transparent">
              Wesselkvartalet
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-x-6 items-center">
          {!isHomePage && (
             <Link 
             to="/" 
             className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors flex items-center gap-1 mr-4"
           >
             <ArrowLeft className="h-4 w-4" />
             Tilbake
           </Link>
          )}
          
          <Link 
            to="/" 
            className={cn(
              "text-sm font-semibold leading-6 transition-colors hover:text-primary",
              isHomePage ? "text-primary" : "text-muted-foreground"
            )}
          >
            Hjem
          </Link>
          
          {subpages.map((item) => (
            <Link 
              key={item.name} 
              to={item.href} 
              className={cn(
                "text-sm font-semibold leading-6 transition-colors hover:text-primary",
                isActive(item.href) ? "text-primary" : "text-muted-foreground"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Trigger */}
        <div className="flex lg:hidden">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-muted-foreground">
                <span className="sr-only">Åpne meny</span>
                <Menu className="h-6 w-6" aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetTitle className="text-left text-lg font-bold mb-4">Meny</SheetTitle>
              <SheetDescription className="sr-only">Navigasjonsmeny for Wesselkvartalet</SheetDescription>
              <div className="flex flex-col gap-4 mt-6">
                <Link 
                  to="/" 
                  className={cn(
                    "block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-accent hover:text-accent-foreground",
                    isHomePage ? "bg-accent text-accent-foreground" : "text-foreground"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className="flex items-center gap-2">
                    <Home className="h-4 w-4" />
                    Hjem
                  </div>
                </Link>
                
                {subpages.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={cn(
                      "block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-accent hover:text-accent-foreground",
                      isActive(item.href) ? "bg-accent text-accent-foreground" : "text-foreground"
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                
                {!isHomePage && (
                  <div className="mt-4 pt-4 border-t border-border">
                    <Link
                      to="/"
                      className="flex items-center gap-2 rounded-lg px-3 py-2 text-base font-semibold leading-7 text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <ArrowLeft className="h-4 w-4" />
                      Tilbake til forsiden
                    </Link>
                  </div>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}