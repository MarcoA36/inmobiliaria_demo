import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ChevronLeft,
  MapPin,
  Bed,
  Bath,
  Maximize,
  Check,
  Phone,
  Mail,
  ArrowLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import {
  getPropertyById,
  getPropertiesByType,
  type PropertyType,
} from "@/lib/properties";
import { PropertyCarousel } from "@/components/property-carousel";
import { PropertyCard } from "@/components/property-card";

const typeLabels: Record<PropertyType, string> = {
  venta: "en Venta",
  alquiler: "en Alquiler",
  temporario: "Alquiler Temporario",
};

const typePriceSuffix: Record<PropertyType, string> = {
  venta: "",
  alquiler: "/mes",
  temporario: "/día",
};

const VALID_TYPES: string[] = ["venta", "alquiler", "temporario"];

interface Props {
  params: Promise<{ id: string }>;
}

export default async function PropiedadesPage({ params }: Props) {
  const { id } = await params;

  // Listing page by type
  if (VALID_TYPES.includes(id)) {
    const propertyType = id as PropertyType;
    const properties = getPropertiesByType(propertyType);

    return (
      <>
        <Navbar />
        <main className="min-h-screen bg-background py-12">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <Button asChild variant="ghost" className="mb-4 -ml-4">
                <Link href="/">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Volver al inicio
                </Link>
              </Button>
              <h1 className="text-4xl font-bold tracking-tight text-foreground">
                Propiedades {typeLabels[propertyType]}
              </h1>
              <p className="mt-2 text-muted-foreground">
                {properties.length}{" "}
                {properties.length === 1
                  ? "propiedad disponible"
                  : "propiedades disponibles"}
              </p>
            </div>

            {properties.length === 0 ? (
              <div className="flex min-h-[400px] flex-col items-center justify-center text-center">
                <p className="text-xl text-muted-foreground">
                  No hay propiedades disponibles en este momento.
                </p>
              </div>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {properties.map((property) => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>
            )}
          </div>
        </main>
        <Footer />
      </>
    );
  }

  // Property detail page
  const property = getPropertyById(id);

  if (!property) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pb-20">
        <div className="container mx-auto px-4 pt-8">
          <Link
            href={`/propiedades/${property.type}`}
            className="mb-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ChevronLeft className="h-4 w-4" />
            Volver al listado
          </Link>

          <div className="grid gap-10 lg:grid-cols-[1fr_360px]">
            {/* Left column */}
            <div className="min-w-0">
              <PropertyCarousel images={property.images} title={property.title} />

              <div className="mt-8">
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <Badge variant="secondary" className="text-xs font-medium">
                    {typeLabels[property.type]}
                  </Badge>
                </div>

                <h1 className="mb-2 text-3xl font-bold tracking-tight text-foreground text-balance">
                  {property.title}
                </h1>

                <div className="mb-4 flex items-center gap-1.5 text-muted-foreground">
                  <MapPin className="h-4 w-4 shrink-0" />
                  <span>{property.location}</span>
                </div>

                <div className="mb-6 flex flex-wrap items-center gap-6 border-y border-border/50 py-5">
                  <div className="flex items-center gap-2 text-sm">
                    <Bed className="h-4 w-4 text-muted-foreground" />
                    <span className="font-medium text-foreground">
                      {property.bedrooms}
                    </span>
                    <span className="text-muted-foreground">
                      {property.bedrooms === 1 ? "dormitorio" : "dormitorios"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Bath className="h-4 w-4 text-muted-foreground" />
                    <span className="font-medium text-foreground">
                      {property.bathrooms}
                    </span>
                    <span className="text-muted-foreground">
                      {property.bathrooms === 1 ? "baño" : "baños"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Maximize className="h-4 w-4 text-muted-foreground" />
                    <span className="font-medium text-foreground">
                      {property.area} m²
                    </span>
                    <span className="text-muted-foreground">superficie</span>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="mb-3 text-xl font-semibold text-foreground">
                    Descripción
                  </h2>
                  <p className="leading-relaxed text-muted-foreground">
                    {property.description}
                  </p>
                </div>

                <div>
                  <h2 className="mb-4 text-xl font-semibold text-foreground">
                    Características
                  </h2>
                  <ul className="grid gap-2.5 sm:grid-cols-2">
                    {property.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2.5 text-sm text-muted-foreground"
                      >
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary">
                          <Check className="h-3 w-3 text-primary-foreground" />
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Right column — sticky sidebar */}
            <div className="lg:sticky lg:top-24 lg:self-start">
              <div className="rounded-xl border border-border/50 bg-card p-6 shadow-sm">
                <p className="mb-1 text-sm text-muted-foreground">Precio</p>
                <p className="mb-6 text-4xl font-bold text-foreground">
                  ${property.price.toLocaleString("es-AR")}
                  <span className="text-base font-normal text-muted-foreground">
                    {typePriceSuffix[property.type]}
                  </span>
                </p>

                <div className="space-y-3">
                  <Button className="w-full" size="lg" asChild>
                    <a href="tel:+542284400000">
                      <Phone className="mr-2 h-4 w-4" />
                      Llamar ahora
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full" size="lg" asChild>
                    <a href="mailto:info@inmoolava.com.ar">
                      <Mail className="mr-2 h-4 w-4" />
                      Enviar consulta
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full" size="lg" asChild>
                    <a
                      href={`https://wa.me/542284400000?text=Hola, me interesa la propiedad: ${property.title}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Consultar por WhatsApp
                    </a>
                  </Button>
                </div>

                <div className="mt-6 border-t border-border/50 pt-5 text-center">
                  <p className="text-xs text-muted-foreground">
                    Atención de lunes a sábado de 9:00 a 18:00 hs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
