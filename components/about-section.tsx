import { Users, Home, Award, Clock } from "lucide-react";

const stats = [
  { icon: Home, value: "500+", label: "Propiedades vendidas" },
  { icon: Users, value: "1.200+", label: "Clientes satisfechos" },
  { icon: Award, value: "15", label: "Años de experiencia" },
  { icon: Clock, value: "24/7", label: "Atención al cliente" },
];

export function AboutSection() {
  return (
    <section id="nosotros" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Text */}
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">
              Quiénes somos
            </p>
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Más de 15 años construyendo confianza en Olavarría
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Somos una inmobiliaria familiar fundada en 2009 con el objetivo de
                brindar un servicio personalizado, honesto y transparente a cada uno
                de nuestros clientes. Conocemos Olavarría como nadie y eso nos
                permite asesorarte de manera integral en cada etapa del proceso.
              </p>
              <p>
                Nuestro equipo de profesionales matriculados está capacitado para
                acompañarte desde la búsqueda de tu propiedad ideal hasta la firma
                de escritura, garantizando que cada transacción se realice con
                total seguridad jurídica y la mejor rentabilidad para vos.
              </p>
              <p>
                Trabajamos tanto con particulares como con empresas, gestionando
                propiedades residenciales, comerciales y rurales en toda la región.
                Porque encontrar un hogar es mucho más que una transacción: es un
                proyecto de vida, y nos comprometemos a acompañarte en cada paso.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-5">
            {stats.map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="flex flex-col gap-3 rounded-xl border border-border/50 bg-card p-6 shadow-sm"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                  <Icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-3xl font-bold text-foreground">{value}</p>
                  <p className="text-sm text-muted-foreground">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
