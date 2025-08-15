import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const subpages = [
  { name: "Wessel Energi", href: "/wessel-energi" },
  { name: "Historien", href: "/historien-om-wesselkvartalet" },
];

const sectionLinks = [
  { name: "Ledige lokaler", href: "/#lokaler" },
  { name: "Utmerkelser", href: "/#doga" },
  { name: "Om kvartalet", href: "/#om" },
  { name: "Kontakt", href: "/#kontakt" },
];

// Force browser refresh by adding this comment

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1 items-center gap-x-8">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="text-2xl font-bold primary-gradient bg-clip-text text-transparent">
              Wesselkvartalet
            </span>
          </Link>
          <div className="hidden lg:flex gap-x-6">
            {subpages.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-sm font-medium leading-6 text-muted-foreground hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex lg:hidden gap-x-4">
          {subpages.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="text-sm font-medium leading-6 text-muted-foreground hover:text-primary transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>

    </header>
  );
}