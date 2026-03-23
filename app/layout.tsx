import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import DemoBadge from '@/components/DemoBadge';

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Inmobiliaria Olavarría | Propiedades en Venta y Alquiler',
  description: 'Encontrá tu próximo hogar en Olavarría. Propiedades en venta, alquiler y alquiler temporario. La mejor selección de casas y departamentos.',
  generator: 'v0.app',
  keywords: ['inmobiliaria', 'Olavarría', 'propiedades', 'venta', 'alquiler', 'casas', 'departamentos'],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className="font-sans antialiased">
        {children}
        <DemoBadge/>
        <Analytics />
      </body>
    </html>
  )
}
