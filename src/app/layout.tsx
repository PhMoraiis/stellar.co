import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Stellar ★ Desenvolvimento de Software, Branding e Web Design criativos e inovadores.',
  description: 'A Stellar é uma empresa especializada em desenvolvimento de software personalizado para atender às necessidades exclusivas de cada cliente. Entre em contato conosco para saber mais.',
  keywords: 'desenvolvimento de software, software personalizado, soluções tecnológicas, inovação, tecnologia',
  creator: 'Philipe Morais',
  viewport: 'width=device-width, initial-scale=1.0',
  applicationName: 'Stellar Website',
  icons: {
    icon: {
      url: '/icons/favicon.ico',
      type: 'image/svg+xml',
    }
  },
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