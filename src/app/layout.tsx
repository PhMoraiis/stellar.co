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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${interSans.variable} antialiased`}>{children}</body>
    </html>
  )
}