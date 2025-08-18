import { useState } from "react";
import { Button } from "@/components/ui/button"; // (still exported if you want a CTA later)
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";

const subpages = [
  { name: "Wessel Energi", href: "/wessel-energi" },
  { name: "Historien om Apotekergården", href: "/historien-om-wesselkvartalet" },
  { name: "Fra familietomt til bærekraftig byutvikling", href: "/fra-familietomt-til-byutvikling" },
  { name: "Arkitektur", href: "/arkitektur" },
  { name: "Arkitektonisk kvalitet i en skamløs bransje", href: "/arkitektonisk-kvalitet" },
];

const sectionLinks = [
  { name: "Ledige lokaler", href: "/#lokaler" },
  { name: "Utmerkelser", href: "/#doga" },
  { name: "Om kvartalet", href: "/#om" },
  { name: "Kontakt", href: "/#kontakt" },
];

// NOTE: On >= md, ALL subpages render inline on ONE line (no wrap).
// On < md, we keep the two primary links visible and tuck the rest into a collapsible.

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname, hash } = useLocation();

  const primary = subpages.filter((p) => p.name === "Wessel Energi" || p.name === "Arkitektur");
  const secondary = subpages.filter((p) => p.name !== "Wessel Energi" && p.name !== "Arkitektur");

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <nav className="mx-auto flex max-w-7xl flex-col items-start p-3 lg:px-4 w-full" aria-label="Global">
        {/* Top bar: brand + mobile toggle */}
        <div className="flex items-center justify-between w-full">
          <Link to="/" className="-m-1.5 p-1.5" aria-label="Gå til forsiden">
            <span className="text-2xl font-bold primary-gradient bg-clip-text text-transparent">
              Wesselkvartalet
            </span>
          </Link>

          {/* Mobile hamburger (hidden on md+) */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-foreground/70 hover:text-foreground hover:bg-muted focus:outline-none focus:ring-2 focus:ring-primary"
            aria-controls="mobile-menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            <span className="sr-only">Meny</span>
          </button>
        </div>

        {/* Subpages - desktop/tablet: single line, no wrap */}
        <div className="hidden md:block w-full mt-3">
          <div
            className="flex items-center gap-x-3 whitespace-nowrap overflow-x-auto md:overflow-visible md:[overflow-wrap:normal]"
            role="navigation"
            aria-label="Undersider"
          >
            {subpages.map((item, i) => (
              <div key={item.name} className="flex items-center">
                <Link
                  to={item.href}
                  className={cn(
                    "text-sm font-medium leading-6 transition-colors",
                    "text-muted-foreground hover:text-primary",
                    pathname === item.href ? "text-primary" : undefined
                  )}
                >
                  {item.name}
                </Link>
                {i < subpages.length - 1 && (
                  <span className="mx-3 text-muted-foreground/50" aria-hidden>
                    |
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Subpages - mobile: primary inline + collapsible for the rest */}
        <div className="md:hidden w-full mt-3" id="mobile-menu">
          {/* Always-visible primary pair */}
          <div className="flex items-center gap-x-2">
            {primary.map((item, i) => (
              <div key={item.name} className="flex items-center">
                <Link
                  to={item.href}
                  className={cn(
                    "text-sm font-medium leading-5 transition-colors",
                    "text-muted-foreground hover:text-primary",
                    pathname === item.href ? "text-primary" : undefined
                  )}
                >
                  {item.name}
                </Link>
                {i < primary.length - 1 && (
                  <span className="mx-2 text-muted-foreground">|</span>
                )}
              </div>
            ))}

            {/* Toggle shows/hides secondary list */}
            <button
              type="button"
              className="ml-auto inline-flex items-center rounded px-2 py-1 text-xs border border-border text-foreground/70 hover:text-foreground hover:bg-muted"
              onClick={() => setMobileOpen((v) => !v)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-secondary"
            >
              {mobileOpen ? "Lukk" : "Mer"}
            </button>
          </div>

          {/* Collapsible secondary links */}
          <div
            id="mobile-secondary"
            className={cn(
              "mt-2 grid grid-cols-1 gap-y-1",
              mobileOpen ? "block" : "hidden"
            )}
          >
            {secondary.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "text-sm font-medium leading-5 transition-colors",
                  "text-muted-foreground hover:text-primary",
                  pathname === item.href ? "text-primary" : undefined
                )}
                onClick={() => setMobileOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Optional: anchor/section quick links row (scrollable on small) */}
        {sectionLinks.length > 0 && (
          <div className="w-full mt-2 md:mt-3">
            <div className="-mx-1 overflow-x-auto">
              <div className="px-1 flex items-center gap-x-3 text-xs md:text-sm whitespace-nowrap">
                {sectionLinks.map((s) => (
                  <Link
                    key={s.name}
                    to={s.href}
                    className={cn(
                      "text-muted-foreground hover:text-primary transition-colors",
                      hash === s.href.replace(/^.*#/, "#") ? "text-primary" : undefined
                    )}
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
