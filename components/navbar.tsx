"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/propiedades/venta", label: "Venta" },
  { href: "/propiedades/alquiler", label: "Alquiler" },
  { href: "/propiedades/temporario", label: "Temporario" },
  { href: "/#nosotros", label: "Nosotros" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-semibold text-foreground">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
            <Home className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="text-lg tracking-tight">InmoOlavarría</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Button asChild size="sm">
            <Link href="/#contacto">Contactanos</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="flex items-center justify-center rounded-md p-2 text-muted-foreground transition-colors hover:bg-muted md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border/50 bg-background md:hidden">
          <nav className="container mx-auto flex flex-col gap-1 px-4 py-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2">
              <Button asChild size="sm" className="w-full">
                <Link href="/#contacto" onClick={() => setOpen(false)}>
                  Contactanos
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
