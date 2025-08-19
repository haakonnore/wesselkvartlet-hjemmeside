import { Button } from "@/components/ui/button";
import { BookOpen, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function EssayTeaserSection() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <BookOpen className="h-12 w-12 text-primary" />
          </div>
          
          <h2 className="text-3xl font-bold mb-4 text-foreground">
            Frie Tøyler
          </h2>
          
          <p className="text-xl text-muted-foreground mb-6 italic">
            Av Børre Skodvin
          </p>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Et kritisk essay om norsk boligutvikling og arkitektonisk kvalitet. 
            Skodvin undersøker hvorfor så få kommersielle boligprosjekter skiller seg ut 
            arkitektonisk, og bruker Wesselkvartalet som eksempel på at det finnes alternativer 
            til den "ambisjonsløse og inkompetente middelmådigheten" som dominerer bransjen.
          </p>
          
          <blockquote className="text-xl italic text-foreground mb-8 border-l-4 border-primary pl-6 max-w-2xl mx-auto">
            "Det er vanskelig å bygge boliger for folk flest hvis du slipper arkitekten løs!"
          </blockquote>
          
          <Button asChild size="lg" className="group">
            <Link to="/frie-toyler" className="flex items-center gap-2">
              Les hele essayet
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}