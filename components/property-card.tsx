import Image from "next/image";
import Link from "next/link";
import { Property } from "@/lib/properties";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Bed, Bath, Maximize } from "lucide-react";

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
  return (
    <Card className="group overflow-hidden border-border/40 transition-all hover:shadow-lg">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={property.images[0]}
          alt={property.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <div className="mb-3">
          <p className="text-2xl font-semibold text-foreground">
            ${property.price.toLocaleString("es-AR")}
            {property.type === "alquiler" && <span className="text-base text-muted-foreground">/mes</span>}
            {property.type === "temporario" && <span className="text-base text-muted-foreground">/día</span>}
          </p>
        </div>
        <h3 className="mb-2 text-lg font-medium text-foreground line-clamp-1">
          {property.title}
        </h3>
        <div className="mb-4 flex items-center gap-1 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4" />
          <span className="line-clamp-1">{property.location}</span>
        </div>
        <div className="mb-4 flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Bed className="h-4 w-4" />
            <span>{property.bedrooms}</span>
          </div>
          <div className="flex items-center gap-1">
            <Bath className="h-4 w-4" />
            <span>{property.bathrooms}</span>
          </div>
          <div className="flex items-center gap-1">
            <Maximize className="h-4 w-4" />
            <span>{property.area}m²</span>
          </div>
        </div>
        <Button asChild className="w-full">
          <Link href={`/propiedades/${property.id}`}>Ver detalle</Link>
        </Button>
      </div>
    </Card>
  );
}
