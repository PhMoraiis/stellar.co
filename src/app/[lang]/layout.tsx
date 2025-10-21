import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import SmoothScroll from '@/components/SmoothScroll'
import StructuredData from '@/components/StructuredData'
import '../globals.css'
import { Analytics } from "@vercel/analytics/next"

const interSans = Inter({
  variable: '--font-inter-sans',
  subsets: ['latin'],
})

// Função para gerar metadados baseados no idioma
export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params
  
  // Configurações de idioma
  const locales = {
    'pt-BR': {
      title: 'Stellar | Agência de Tecnologia Estratégica e Criativa',
      description: 'Stellar é uma agência de tecnologia estratégica e criativa especializada em design, desenvolvimento web e mobile, branding e soluções digitais inovadoras para empresas que querem se destacar no mercado.',
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
      locale: 'pt_BR',
      lang: 'pt-BR'
    },
    'en': {
      title: 'Stellar | Strategic and Creative Technology Agency',
      description: 'Stellar is a strategic and creative technology agency specialized in design, web and mobile development, branding and innovative digital solutions for companies that want to stand out in the market.',
      keywords: [
        'technology agency',
        'digital design',
        'web development',
        'mobile development',
        'branding',
        'digital solutions',
        'UX/UI design',
        'web applications',
        'mobile applications',
        'technology consulting',
        'digital transformation'
      ],
      locale: 'en',
      lang: 'en'
    }
  }

  const config = locales[lang as keyof typeof locales] || locales['pt-BR']

  return {
    title: {
      default: config.title,
      template: '%s | Stellar Studio'
    },
    description: config.description,
    keywords: config.keywords,
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
      canonical: `/${lang}`,
      languages: {
        'pt-BR': '/pt-BR',
        'en': '/en',
      },
    },
    openGraph: {
      type: 'website',
      locale: config.locale,
      url: `https://stellarstudio.tech/${lang}`,
      title: config.title,
      description: config.description,
      siteName: 'Stellar Studio',
      images: [
        {
          url: '/images/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'Stellar Studio - Technology Agency',
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
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>;
}) {
  return (
    <html lang={(await params).lang}>
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
        <Analytics />
      </body>
    </html>
  )
}