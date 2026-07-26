import './globals.css'

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

const SITE_URL = 'https://352pcs.com'
const SITE_TITLE = '352pcs | PC Builds & Repairs in Niederkorn, Luxembourg'
const SITE_DESCRIPTION =
  'Local PC builds and repairs in Niederkorn, Luxembourg. Custom gaming builds, laptop and desktop repairs, and performance upgrades. Appointment needed, drop-off only. Open Mon–Sat 10:00–18:00.'

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  keywords: ['PC Repair Luxembourg', 'Custom Gaming PC', '352pcs', 'Niederkorn PC Repair', 'PC Build Luxembourg'],
  authors: [{ name: '352pcs' }],
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en',
    url: SITE_URL,
    siteName: '352pcs',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [{ url: '/logo.png', width: 512, height: 512, alt: '352pcs — PC builds & repairs in Luxembourg' }],
  },
  twitter: {
    card: 'summary',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ['/logo.png'],
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'ComputerStore'],
  '@id': 'https://352pcs.com/#business',
  name: '352pcs',
  description:
    'Local PC builds and repairs in Niederkorn, Luxembourg. Custom gaming builds, laptop and desktop repairs, and performance upgrades. Appointment needed, drop-off only.',
  url: 'https://352pcs.com',
  logo: 'https://352pcs.com/logo.png',
  image: 'https://352pcs.com/logo.png',
  telephone: '+352691393559',
  email: 'tech352pcs@outlook.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '149, rue Pierre Gansen',
    addressLocality: 'Niederkorn',
    postalCode: 'L-4570',
    addressCountry: 'LU',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 49.5453,
    longitude: 5.8852,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '10:00',
      closes: '18:00',
    },
  ],
  specialOpeningHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      validFrom: '2026-08-07',
      validThrough: '2026-08-31',
      opens: '00:00',
      closes: '00:00',
    },
  ],
  areaServed: {
    '@type': 'Place',
    name: 'Niederkorn, Luxembourg',
  },
  paymentAccepted: 'Cash, Digicash (SNET bank transfer)',
  currenciesAccepted: 'EUR',
  priceRange: '€€',
  availableLanguage: ['en', 'fr', 'de', 'pt', 'lb'],
  sameAs: ['https://instagram.com/352pcs'],
}

const faqData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      q: 'When are you open?',
      a: 'Monday to Saturday, 10:00–18:00. Closed on Sundays. Closed from 7 August to early September 2026.',
    },
    { q: 'Do you offer pickup?', a: 'Drop-off only at the workshop in Niederkorn. No pickups or deliveries.' },
    { q: 'Do I need an appointment?', a: 'Yes, please book an appointment by WhatsApp or phone before dropping off.' },
    { q: 'What payment methods do you accept?', a: 'Cash or Digicash (SNET instant bank transfer).' },
    { q: 'Which brands do you work on?', a: 'All brands — Dell, HP, Lenovo, Asus, Acer, Apple, MSI — plus fully custom builds.' },
    { q: 'How do custom builds work?', a: 'I can source compatible parts for you, or you can supply your own parts as long as they are compatible.' },
    { q: 'What should I bring?', a: 'Bring your PC or laptop and its power cable or charger.' },
    { q: 'Can you fix my software issues remotely?', a: 'No. All repairs, including software issues, are done in person at the workshop.' },
    { q: 'What is your service area?', a: 'Niederkorn only.' },
  ].map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
