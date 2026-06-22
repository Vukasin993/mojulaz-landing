import { Html, Head, Main, NextScript } from 'next/document'
import { SITE_URL, SITE_NAME, SITE_LOGO, OG_IMAGE, CONTACT_EMAIL, SEO_DEFAULTS } from '../src/lib/seo'

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Da li je MojUlaz besplatan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Da, prvih 30 dana je potpuno besplatno, bez kreditne kartice. Nakon probnog perioda, cena zavisi od broja zgrada koje upravljate.',
      },
    },
    {
      '@type': 'Question',
      name: 'Da li moram da instaliram nešto?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ne. MojUlaz radi u browseru i kao mobilna aplikacija. Pristupate sa bilo kog uređaja.',
      },
    },
    {
      '@type': 'Question',
      name: 'Koliko zgrada mogu da upravljam?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nema ograničenja. MojUlaz je dizajniran za upravljanje jednom ili stotinama zgrada.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kako stanari prijavljuju kvarove?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Stanari otvaraju aplikaciju, biraju kategoriju kvara, dodaju foto i opis. Upravnik odmah dobija notifikaciju i može da prati status rešavanja.',
      },
    },
    {
      '@type': 'Question',
      name: 'Da li je MojUlaz dostupan samo u Srbiji?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Trenutno je fokus na Srbiji — podrška je na srpskom, plaćanje u RSD, a tim je lokalan. Ekspanzija na region je planirana.',
      },
    },
  ],
}

const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: SITE_NAME,
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web, Android, iOS',
  offers: {
    '@type': 'Offer',
    price: '2628',
    priceCurrency: 'RSD',
    priceValidUntil: '2026-12-31',
    availability: 'https://schema.org/InStock',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '270',
  },
  description:
    'Softver za upravljanje stambenim zajednicama u Srbiji. Prijava kvarova, obaveštenja, finansije, dokumentacija i glasanje stanara — sve na jednom mestu.',
  url: SITE_URL,
  publisher: {
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: SITE_LOGO,
    contactPoint: {
      '@type': 'ContactPoint',
      email: CONTACT_EMAIL,
      contactType: 'customer support',
      availableLanguage: 'Serbian',
    },
  },
}

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_NAME,
  url: SITE_URL,
  logo: SITE_LOGO,
  email: CONTACT_EMAIL,
  sameAs: [],
  areaServed: {
    '@type': 'Country',
    name: 'Serbia',
  },
  description:
    'MojUlaz je softver za upravljanje stambenim zajednicama namenjen upravnicima zgrada u Srbiji.',
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${SITE_URL}/#local-business`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: SITE_LOGO,
  email: CONTACT_EMAIL,
  description: 'Softver za upravljanje stambenim zajednicama u Srbiji. Prijava kvarova, obaveštenja, finansije, dokumentacija i glasanje stanara.',
  areaServed: [
    { '@type': 'City', name: 'Beograd' },
    { '@type': 'City', name: 'Novi Sad' },
    { '@type': 'City', name: 'Niš' },
    { '@type': 'City', name: 'Kragujevac' },
  ],
  priceRange: 'od 2.628 RSD godišnje sa PDV-om',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'RS',
  },
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE_NAME,
  url: SITE_URL,
}

export default function Document() {
  return (
    <Html lang="sr">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="theme-color" content="#0d9488" />
        <meta name="description" content={SEO_DEFAULTS.description} />
        <meta name="keywords" content={SEO_DEFAULTS.keywords.join(', ')} />
        <link rel="canonical" href={SITE_URL} />
        <link rel="alternate" hrefLang="sr" href={SITE_URL} />
        <link rel="alternate" hrefLang="x-default" href={SITE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:title" content={SEO_DEFAULTS.title} />
        <meta property="og:description" content={SEO_DEFAULTS.description} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:locale" content={SEO_DEFAULTS.locale} />
        <meta property="og:site_name" content={SITE_NAME} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={SITE_URL} />
        <meta name="twitter:title" content={SEO_DEFAULTS.title} />
        <meta name="twitter:description" content={SEO_DEFAULTS.description} />
        <meta name="twitter:image" content={OG_IMAGE} />

        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
