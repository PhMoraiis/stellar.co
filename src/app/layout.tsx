<<<<<<< HEAD
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const interSans = Inter({
  variable: '--font-inter-sans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Stellar | Agência de Tecnologia estratégica e criativa',
  description:
    'Stellar é uma agência de tecnologia estratégica e criativa que ajuda empresas a crescerem e se destacarem no mercado, com serviços de branding, design e desenvolvimento de aplicações web & mobile.',
=======
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  icons: {
    icon: {
      url: "./images/favicon2.ico",
      type: "icon/ico",
    },
    shortcut: { url: "./images/favicon2.ico", type: "icon/ico" },
  },
  title: "Stellar — Desenvolvimento de Software Personalizado",
  description: "A Stellar é uma empresa especializada em desenvolvimento de software personalizado para atender às necessidades exclusivas de cada cliente. Entre em contato conosco para saber mais.",
  keywords: "desenvolvimento de software, software personalizado, soluções tecnológicas, inovação, tecnologia",
  creator: "Philipe Morais",
  viewport: "width=device-width, initial-scale=1.0",
  applicationName: "Stellar Website",
>>>>>>> 1195f16999c15de8b2092f6f835d139e8244440a
}

export default function RootLayout({
  children,
<<<<<<< HEAD
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${interSans.variable} antialiased`}>{children}</body>
    </html>
  )
}
=======
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body>{children}</body>
    </html>
  )
}
>>>>>>> 1195f16999c15de8b2092f6f835d139e8244440a
