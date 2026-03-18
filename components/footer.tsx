import Link from "next/link";
import { Home, Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="col-span-full lg:col-span-1">
            <Link href="/" className="mb-4 flex items-center gap-2 font-semibold">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary-foreground/10 ring-1 ring-primary-foreground/20">
                <Home className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="text-lg tracking-tight">InmoOlavarría</span>
            </Link>
            <p className="text-sm leading-relaxed text-primary-foreground/70">
              Tu inmobiliaria de confianza en Olavarría. Más de 15 años
              ayudando a las familias a encontrar su hogar ideal.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground/10 transition-colors hover:bg-primary-foreground/20"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground/10 transition-colors hover:bg-primary-foreground/20"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Propiedades */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground/50">
              Propiedades
            </h3>
            <ul className="space-y-2.5">
              {[
                { href: "/propiedades/venta", label: "En Venta" },
                { href: "/propiedades/alquiler", label: "En Alquiler" },
                { href: "/propiedades/temporario", label: "Alquiler Temporario" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground/50">
              Empresa
            </h3>
            <ul className="space-y-2.5">
              {[
                { href: "/#nosotros", label: "Nosotros" },
                { href: "/#contacto", label: "Contacto" },
                { href: "#", label: "Tasaciones" },
                { href: "#", label: "Publicar propiedad" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground/50">
              Contacto
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-primary-foreground/70">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>Av. Rivadavia 1234, Olavarría, Buenos Aires</span>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-primary-foreground/70">
                <Phone className="h-4 w-4 shrink-0" />
                <a href="tel:+542284400000" className="hover:text-primary-foreground transition-colors">
                  (02284) 40-0000
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-primary-foreground/70">
                <Mail className="h-4 w-4 shrink-0" />
                <a href="mailto:info@inmoolava.com.ar" className="hover:text-primary-foreground transition-colors">
                  info@inmoolava.com.ar
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/10 pt-8 sm:flex-row">
          <p className="text-xs text-primary-foreground/40">
            &copy; {new Date().getFullYear()} InmoOlavarría. Todos los derechos reservados.
          </p>
          <p className="text-xs text-primary-foreground/40">
            Matricula CUCICBA N° 12345
          </p>
        </div>
      </div>
    </footer>
  );
}
