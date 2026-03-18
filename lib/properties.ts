export type PropertyType = "venta" | "alquiler" | "temporario";

export interface Property {
  id: string;
  title: string;
  price: number;
  type: PropertyType;
  location: string;
  images: string[];
  bedrooms: number;
  bathrooms: number;
  area: number;
  description: string;
  features: string[];
}

export const properties: Property[] = [
  // Propiedades en Venta
  {
    id: "1",
    title: "Casa moderna con jardín",
    price: 185000,
    type: "venta",
    location: "Centro, Olavarría",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80",
    ],
    bedrooms: 3,
    bathrooms: 2,
    area: 180,
    description:
      "Espectacular casa moderna ubicada en el corazón de Olavarría. Cuenta con amplios espacios luminosos, cocina equipada, jardín privado y garage para dos vehículos. Terminaciones de primera calidad y materiales de construcción premium.",
    features: [
      "Jardín privado",
      "Garage doble",
      "Cocina equipada",
      "Pisos de porcelanato",
      "Calefacción central",
      "Seguridad 24hs",
    ],
  },
  {
    id: "2",
    title: "Departamento luminoso",
    price: 95000,
    type: "venta",
    location: "Av. Pringles, Olavarría",
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=80",
    ],
    bedrooms: 2,
    bathrooms: 1,
    area: 65,
    description:
      "Moderno departamento de dos ambientes con excelente iluminación natural. Ubicado en Av. Pringles, a pasos del centro comercial y transporte público. Edificio con amenities, seguridad y estacionamiento opcional.",
    features: [
      "Vista al exterior",
      "Balcón",
      "Estacionamiento opcional",
      "Amenities del edificio",
      "Gas natural",
      "Portero eléctrico",
    ],
  },
  {
    id: "3",
    title: "Casa con pileta y quincho",
    price: 250000,
    type: "venta",
    location: "Barrio Sierras Bayas",
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1200&q=80",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&q=80",
    ],
    bedrooms: 4,
    bathrooms: 3,
    area: 220,
    description:
      "Imponente propiedad en el exclusivo Barrio Sierras Bayas. Cuenta con pileta, quincho totalmente equipado, jardín de gran extensión y living comedor con doble altura. Ideal para familias que buscan espacio y confort.",
    features: [
      "Pileta",
      "Quincho equipado",
      "Jardín amplio",
      "Doble altura",
      "Baulera",
      "Garage para 3 vehículos",
    ],
  },
  // Propiedades en Alquiler
  {
    id: "4",
    title: "Departamento céntrico",
    price: 95000,
    type: "alquiler",
    location: "Centro, Olavarría",
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=80",
      "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=1200&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&q=80",
    ],
    bedrooms: 1,
    bathrooms: 1,
    area: 45,
    description:
      "Acogedor monoambiente céntrico, ideal para profesionales o estudiantes. A dos cuadras de la Plaza Independencia, rodeado de comercios, bancos y transporte. Totalmente amueblado y listo para habitar.",
    features: [
      "Amueblado",
      "Internet incluido",
      "Cocina equipada",
      "Expensas bajas",
      "Luminoso",
      "A metros del centro",
    ],
  },
  {
    id: "5",
    title: "Casa familiar amplia",
    price: 150000,
    type: "alquiler",
    location: "Barrio CECO",
    images: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
    ],
    bedrooms: 3,
    bathrooms: 2,
    area: 150,
    description:
      "Amplia casa familiar en el tranquilo Barrio CECO. Cuenta con tres dormitorios, patio interno con parrilla, cochera y lavadero independiente. Zona residencial con excelente acceso vial y espacios verdes cercanos.",
    features: [
      "Patio con parrilla",
      "Cochera",
      "Lavadero independiente",
      "Barrio tranquilo",
      "Gas natural",
      "Cerca de colegios",
    ],
  },
  {
    id: "6",
    title: "Departamento moderno",
    price: 120000,
    type: "alquiler",
    location: "Av. Del Valle",
    images: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&q=80",
    ],
    bedrooms: 2,
    bathrooms: 2,
    area: 75,
    description:
      "Elegante departamento de dos dormitorios sobre Av. Del Valle. Piso alto con amplia terraza, vistas despejadas y muy luminoso. Edificio moderno con gym, sauna y vigilancia las 24 horas.",
    features: [
      "Terraza amplia",
      "Piso alto",
      "Gym y sauna",
      "Vigilancia 24hs",
      "Estacionamiento incluido",
      "Calefacción central",
    ],
  },
  // Alquiler Temporario
  {
    id: "7",
    title: "Cabaña con vista panorámica",
    price: 45000,
    type: "temporario",
    location: "Sierras Bayas",
    images: [
      "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=1200&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80",
    ],
    bedrooms: 2,
    bathrooms: 1,
    area: 60,
    description:
      "Encantadora cabaña de madera con vista panorámica a las sierras. Perfecta para desconectarse del ruido de la ciudad. Cuenta con chimenea, deck exterior, parrilla y todo lo necesario para una estadía confortable.",
    features: [
      "Vista panorámica",
      "Chimenea",
      "Deck exterior",
      "Parrilla",
      "Ropa de cama incluida",
      "WiFi",
    ],
  },
  {
    id: "8",
    title: "Departamento turístico",
    price: 35000,
    type: "temporario",
    location: "Centro, Olavarría",
    images: [
      "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=1200&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80",
    ],
    bedrooms: 1,
    bathrooms: 1,
    area: 40,
    description:
      "Cómodo departamento céntrico ideal para viajeros de negocios o turismo. A pasos de restaurantes, museos y el centro comercial. Incluye todo el equipamiento necesario para una estadía perfecta.",
    features: [
      "Totalmente equipado",
      "Smart TV",
      "WiFi de alta velocidad",
      "Desayuno opcional",
      "Check-in flexible",
      "Céntrico",
    ],
  },
  {
    id: "9",
    title: "Casa con quincho",
    price: 60000,
    type: "temporario",
    location: "Barrio Country",
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80",
    ],
    bedrooms: 3,
    bathrooms: 2,
    area: 120,
    description:
      "Amplia casa en Barrio Country para grupos o familias. Cuenta con quincho equipado con parrilla y horno de barro, jardín arbolado y acceso a amenidades del complejo. Mínimo 2 noches. Ideal para celebraciones.",
    features: [
      "Quincho con horno de barro",
      "Jardín arbolado",
      "Amenidades del country",
      "Ideal para grupos",
      "Estacionamiento",
      "Seguridad privada",
    ],
  },
];

export function getPropertiesByType(type: PropertyType): Property[] {
  return properties.filter((property) => property.type === type);
}

export function getPropertyById(id: string): Property | undefined {
  return properties.find((p) => p.id === id);
}
