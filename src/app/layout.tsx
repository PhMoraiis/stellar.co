import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import SmoothScroll from '@/components/SmoothScroll'
import StructuredData from '@/components/StructuredData'
import './globals.css'
import { Analytics } from "@vercel/analytics/next"

const interSans = Inter({
  variable: '--font-inter-sans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    default: 'Stellar | Agência de Tecnologia Estratégica e Criativa',
    template: '%s | Stellar Studio'
  },
  description:
    'Stellar é uma agência de tecnologia estratégica e criativa especializada em design, desenvolvimento web e mobile, branding e soluções digitais inovadoras para empresas que querem se destacar no mercado.',
  keywords: [
    'agência de tecnologia',
    'design digital',
    'desenvolvimento web',
    'desenvolvimento mobile',
    'branding',
    'soluções digitais',
    'UX/UI design',
    'aplicações web',
    'aplicações mobile',
    'consultoria tecnológica',
    'transformação digital'
  ],
  authors: [{ name: 'Stellar Studio' }],
  creator: 'Stellar Studio',
  publisher: 'Stellar Studio',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://stellarstudio.tech'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://stellarstudio.tech',
    title: 'Stellar | Agência de Tecnologia Estratégica e Criativa',
    description: 'Stellar é uma agência de tecnologia estratégica e criativa especializada em design, desenvolvimento web e mobile, branding e soluções digitais inovadoras.',
    siteName: 'Stellar Studio',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Stellar Studio - Agência de Tecnologia',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'vbr2Pic0ChQLdNGomO3bIS4M9L3y6hCVswVS02qQsC4',
    yandex: '0e6969f1923bc884',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <StructuredData />
        <script
        src="https://www.googletagmanager.com/gtag/js?id=G-1LQC3PNYW5"
      />
      <script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-1LQC3PNYW5');
        `}
      </script>

      {/* Google Tag Manager */}
      <script id="google-tag-manager">
        {`
         (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TWJSVWX2');
        `}
      </script>
      </head>
      <body className={`${interSans.variable} antialiased`}>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html> 
  )
}
