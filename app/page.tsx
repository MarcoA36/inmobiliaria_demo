import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { PropertiesSection } from "@/components/properties-section";
import { AboutSection } from "@/components/about-section";
import { Footer } from "@/components/footer";
import { getPropertiesByType } from "@/lib/properties";

export default function HomePage() {
  const ventaProperties = getPropertiesByType("venta");
  const alquilerProperties = getPropertiesByType("alquiler");
  const temporarioProperties = getPropertiesByType("temporario");

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        <Hero />

        <PropertiesSection
          title="Propiedades en Venta"
          type="venta"
          properties={ventaProperties}
          href="/propiedades/venta"
        />

        <div className="bg-muted/30">
          <PropertiesSection
            title="Propiedades en Alquiler"
            type="alquiler"
            properties={alquilerProperties}
            href="/propiedades/alquiler"
          />
        </div>

        <PropertiesSection
          title="Alquiler Temporario"
          type="temporario"
          properties={temporarioProperties}
          href="/propiedades/temporario"
        />

        <AboutSection />
      </main>
      <Footer />
    </>
  );
}
