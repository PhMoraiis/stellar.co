import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Stellar — Desenvolvimento de Software Personalizado',
  description: 'A Stellar é uma empresa especializada em desenvolvimento de software personalizado para atender às necessidades exclusivas de cada cliente. Entre em contato conosco para saber mais.',
  keywords: 'desenvolvimento de software, software personalizado, soluções tecnológicas, inovação, tecnologia',
  creator: 'Philipe Morais',
  viewport: 'width=device-width, initial-scale=1.0',
  applicationName: 'Stellar Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}