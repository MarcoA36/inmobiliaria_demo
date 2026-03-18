import Link from "next/link";
import { Property, PropertyType } from "@/lib/properties";
import { PropertyCard } from "@/components/property-card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface PropertiesSectionProps {
  title: string;
  type: PropertyType;
  properties: Property[];
  href: string;
}

const typeLabels: Record<PropertyType, string> = {
  venta: "en Venta",
  alquiler: "en Alquiler",
  temporario: "Alquiler Temporario",
};

export function PropertiesSection({
  title,
  type,
  properties,
  href,
}: PropertiesSectionProps) {
  // Show only 3 properties
  const displayProperties = properties.slice(0, 3);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            Propiedades {typeLabels[type]}
          </h2>
          <Button asChild variant="ghost" className="group">
            <Link href={href}>
              Ver todas
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {displayProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
}
