export const seoConfig = {
  siteName: 'Stellar Studio',
  siteUrl: 'https://stellarstudio.tech',
  description: 'Stellar é uma agência de tecnologia estratégica e criativa especializada em design, desenvolvimento web e mobile, branding e soluções digitais inovadoras.',
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
    'transformação digital',
    'Stellar Studio',
    'agência criativa',
    'design estratégico',
    'desenvolvimento de software'
  ],
  author: 'Stellar Studio',
  social: {
    linkedin: 'https://www.linkedin.com/company/stellar-studio',
    instagram: 'https://www.instagram.com/stellarstudio.br/'
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Stellar Studio',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Stellar Studio - Agência de Tecnologia'
      }
    ]
  },
}

export function generateMetadata({
  title,
  description,
  keywords = [],
  image,
  url
}: {
  title?: string
  description?: string
  keywords?: string[]
  image?: string
  url?: string
}) {
  const fullTitle = title ? `${title} | ${seoConfig.siteName}` : seoConfig.siteName
  const fullDescription = description || seoConfig.description
  const fullKeywords = [...seoConfig.keywords, ...keywords]
  const fullUrl = url ? `${seoConfig.siteUrl}${url}` : seoConfig.siteUrl
  const fullImage = image ? `${seoConfig.siteUrl}${image}` : `${seoConfig.siteUrl}/images/og-image.jpg`

  return {
    title: fullTitle,
    description: fullDescription,
    keywords: fullKeywords,
    openGraph: {
      ...seoConfig.openGraph,
      title: fullTitle,
      description: fullDescription,
      url: fullUrl,
      images: [
        {
          url: fullImage,
          width: 1200,
          height: 630,
          alt: fullTitle
        }
      ]
    },
    alternates: {
      canonical: fullUrl
    }
  }
}
