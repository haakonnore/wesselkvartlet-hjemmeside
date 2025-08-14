import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Square, DollarSign } from "lucide-react";

interface PropertyCardProps {
  icon: string;
  title: string;
  location: string;
  description: string;
  price: string;
  size?: string;
  features?: string[];
  image?: string;
  buttonText?: string;
  buttonAction?: () => void;
}

export function PropertyCard({
  icon,
  title,
  location,
  description,
  price,
  size,
  features = [],
  image,
  buttonText,
  buttonAction
}: PropertyCardProps) {
  return (
    <Card className="property-card group h-full">
      {image && (
        <div className="relative h-48 overflow-hidden rounded-t-xl">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-4 left-4">
            <Badge variant="secondary" className="bg-white/90 text-primary">
              {icon} {title}
            </Badge>
          </div>
        </div>
      )}
      
      <CardContent className="p-6">
        {!image && (
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">{icon}</span>
            <h3 className="text-xl font-semibold">{title}</h3>
          </div>
        )}

        <div className="space-y-3">
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span className="text-sm">{location}</span>
          </div>

          <p className="text-foreground leading-relaxed">{description}</p>

          {features.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {features.map((feature, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {feature}
                </Badge>
              ))}
            </div>
          )}

          <div className="flex items-center justify-between pt-4 border-t border-border">
            <div className="space-y-1">
              {size && (
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Square className="h-4 w-4" />
                  <span>{size}</span>
                </div>
              )}
              <div className="flex items-center gap-2">
                <DollarSign className="h-4 w-4 text-primary" />
                <span className="font-semibold text-primary">{price}</span>
              </div>
            </div>

            {buttonText && (
              <Button
                variant="outline"
                size="sm"
                onClick={buttonAction}
                className="hover:bg-primary hover:text-primary-foreground"
              >
                {buttonText}
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}