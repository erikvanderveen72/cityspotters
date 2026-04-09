import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ variable: '--font-inter', subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  title: { template: '%s | CitySpotters', default: 'Kies jouw ideale stedentrip - CitySpotters' },
  description: 'Ontdek de beste stedentrips met CitySpotters. 50+ bestemmingen, lokale tips, tours en activiteiten. Onafhankelijk en gratis. Beoordeling: 8,8/10.',
  keywords: ['stedentrip', 'city trip', 'reizen', 'tours', 'activiteiten', 'Europa', 'steden'],
  metadataBase: new URL('https://cityspotters.com'),
  openGraph: { type: 'website', locale: 'nl_NL', url: 'https://cityspotters.com', siteName: 'CitySpotters' },
  twitter: { card: 'summary_large_image' },
  alternates: { canonical: 'https://cityspotters.com' },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nl" className={`${inter.variable} h-full antialiased`}>
      <head>
        <meta name="geo.country" content="NL" />
        <meta name="geo.placename" content="Netherlands" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'WebSite',
              name: 'CitySpotters',
              url: 'https://cityspotters.com',
              potentialAction: {
                '@type': 'SearchAction',
                target: 'https://cityspotters.com/nl/zoeken?q={search_term_string}',
                'query-input': 'required name=search_term_string'
              }
            },
            {
              '@type': 'Organization',
              name: 'CitySpotters',
              url: 'https://cityspotters.com',
              aggregateRating: { '@type': 'AggregateRating', ratingValue: '8.8', reviewCount: '5388' },
              sameAs: ['https://facebook.com/cityspotters', 'https://instagram.com/cityspotters']
            }
          ]
        }) }} />
      </head>
      <body className="min-h-full flex flex-col bg-surface">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
