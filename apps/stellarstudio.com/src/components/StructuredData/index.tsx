export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Stellar Studio",
    "alternateName": "Stellar",
    "url": "https://stellarstudio.tech",
    "logo": "https://stellarstudio.tech/images/logo.png",
    "description": "Stellar é uma agência de tecnologia estratégica e criativa especializada em design, desenvolvimento web e mobile, branding e soluções digitais inovadoras.",
    "foundingDate": "2024",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "BR",
      "addressLocality": "Brasil"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": "Portuguese"
    },
    "sameAs": [
      "https://www.linkedin.com/company/stellar-studio",
      "https://www.instagram.com/stellarstudio",
      "https://twitter.com/stellarstudio"
    ],
    "serviceArea": {
      "@type": "Country",
      "name": "Brasil"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Serviços de Tecnologia",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Design Digital",
            "description": "Criação de interfaces e experiências digitais únicas"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Desenvolvimento Web",
            "description": "Desenvolvimento de aplicações web modernas e responsivas"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Desenvolvimento Mobile",
            "description": "Criação de aplicativos móveis para iOS e Android"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Branding",
            "description": "Desenvolvimento de identidade visual e estratégia de marca"
          }
        }
      ]
    }
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Stellar Studio",
    "url": "https://stellarstudio.tech",
    "description": "Agência de tecnologia estratégica e criativa especializada em design, desenvolvimento web e mobile, branding e soluções digitais inovadoras.",
    "publisher": {
      "@type": "Organization",
      "name": "Stellar Studio"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://stellarstudio.tech/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Início",
        "item": "https://stellarstudio.tech"
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema)
        }}
      />
    </>
  )
}
