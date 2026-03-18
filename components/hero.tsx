"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Hero() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className="relative flex h-[45vh] min-h-[400px] items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&q=80')",
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl text-balance">
          Encontrá tu próximo hogar en Olavarría
        </h1>
        <p className="mb-8 text-lg text-white/90 sm:text-xl text-balance">
          La mejor selección de propiedades en venta y alquiler
        </p>

        {/* Search Bar */}
        <form
          onSubmit={handleSearch}
          className="mx-auto flex max-w-2xl gap-2 rounded-lg bg-white p-2 shadow-xl"
        >
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Buscar por ubicación, tipo de propiedad..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="border-0 pl-10 focus-visible:ring-0"
            />
          </div>
          <Button type="submit" size="lg" className="px-8">
            Buscar
          </Button>
        </form>
      </div>
    </section>
  );
}
