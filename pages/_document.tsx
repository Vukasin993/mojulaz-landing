import { Html, Head, Main, NextScript } from 'next/document'

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
  name: 'MojUlaz',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web, Android, iOS',
  offers: {
    '@type': 'Offer',
    price: '2190',
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
  url: 'https://moj-ulaz.com',
  publisher: {
    '@type': 'Organization',
    name: 'MojUlaz',
    url: 'https://moj-ulaz.com',
    logo: 'https://moj-ulaz.com/logo-icon.png',
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'info@moj-ulaz.com',
      contactType: 'customer support',
      availableLanguage: 'Serbian',
    },
  },
}

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'MojUlaz',
  url: 'https://moj-ulaz.com',
  logo: 'https://moj-ulaz.com/logo-icon.png',
  email: 'info@moj-ulaz.com',
  sameAs: [],
  areaServed: {
    '@type': 'Country',
    name: 'Serbia',
  },
  description:
    'MojUlaz je softver za upravljanje stambenim zajednicama namenjen upravnicima zgrada u Srbiji.',
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'MojUlaz',
  url: 'https://moj-ulaz.com',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://moj-ulaz.com/?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
}

export default function Document() {
  return (
    <Html lang="sr">
      <Head>
        {/* ── Primary Meta ── */}
        <meta charSet="UTF-8" />
        <meta name="theme-color" content="#0d9488" />
        <meta
          name="description"
          content="Softver za upravnike zgrada i stambene zajednice. Prijava kvarova, finansije, dokumentacija i komunikacija stanara — sve na jednom mestu. Besplatno 30 dana."
        />
        <meta
          name="keywords"
          content="upravljanje stambenim zajednicama, softver za upravnike zgrada, aplikacija za upravljanje zgradom, prijava kvarova, finansije zgrade, glasanje stanara, komunikacija stanara, MojUlaz"
        />
        <link rel="canonical" href="https://moj-ulaz.com" />

        {/* ── Open Graph ── */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://moj-ulaz.com" />
        <meta
          property="og:title"
          content="MojUlaz — Softver za upravljanje stambenim zajednicama"
        />
        <meta
          property="og:description"
          content="Softver za upravnike zgrada i stambene zajednice. Prijava kvarova, finansije, dokumentacija i komunikacija stanara — sve na jednom mestu. Besplatno 30 dana."
        />
        <meta property="og:image" content="https://moj-ulaz.com/og-image.png" />
        <meta property="og:locale" content="sr_RS" />
        <meta property="og:site_name" content="MojUlaz" />

        {/* ── Twitter ── */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://moj-ulaz.com" />
        <meta
          name="twitter:title"
          content="MojUlaz — Softver za upravljanje stambenim zajednicama"
        />
        <meta
          name="twitter:description"
          content="Prijava kvarova, finansije, dokumentacija i komunikacija stanara — sve na jednom mestu. Besplatno 30 dana."
        />
        <meta name="twitter:image" content="https://moj-ulaz.com/og-image.png" />

        {/* ── Robots ── */}
        <meta name="robots" content="index, follow" />

        {/* ── Favicons ── */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

        {/* ── Google Fonts ── */}
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

        {/* ── Structured Data ── */}
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
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
