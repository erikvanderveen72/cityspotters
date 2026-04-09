import type { Metadata } from 'next';
import { MapPin, Clock, Euro, Globe2, Train, Ticket, Star, Info, Lightbulb, ArrowRight, Compass } from 'lucide-react';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import FAQSchema from '@/components/FAQSchema';
import { getDestination } from '@/lib/destinations';

const dest = getDestination('berlijn')!;

export const metadata: Metadata = {
  title: `Stedentrip Berlijn 2026 - Tips, Tours & Bezienswaardigheden`,
  description: 'Plan je stedentrip naar Berlijn. Ontdek de beste bezienswaardigheden, lokale tips, tours en praktische reisinformatie. Beoordeling: 8,9/10.',
};

export const revalidate = 3600;

const infoIcons: Record<string, typeof MapPin> = {
  'Beste reistijd': Clock,
  'Gemiddeld budget': Euro,
  'Taal': Globe2,
  'Valuta': Euro,
  'Reistijd vanaf NL': Train,
  'Openbaar vervoer': Ticket,
};

export default function BerlijnPage() {
  return (
    <>
      <PageHero
        title="Berlijn"
        highlightedSubtitle="De bruisende hoofdstad van Duitsland"
        subtitle={dest.description}
        badge="Beoordeling: 8,9/10"
        showBreadcrumbs
        breadcrumbs={[
          { label: 'Duitsland', href: '/nl/duitsland' },
          { label: 'Berlijn', href: '/nl/duitsland/berlijn' },
        ]}
      />

      {/* Intro + Practical Info */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main content */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl md:text-3xl font-bold text-text-main mb-6">Over Berlijn</h2>
            <p className="text-text-muted leading-relaxed text-lg mb-8">{dest.longDescription}</p>

            {/* Highlights */}
            <div className="flex flex-wrap gap-2 mb-10">
              {dest.highlights.map((h) => (
                <span key={h} className="bg-accent-light text-accent px-4 py-1.5 rounded-full text-sm font-semibold">{h}</span>
              ))}
            </div>

            {/* Top Attractions */}
            <h2 className="text-2xl md:text-3xl font-bold text-text-main mb-6">Top Bezienswaardigheden</h2>
            <div className="space-y-4 mb-10">
              {dest.topAttractions.map((attr, i) => (
                <div key={attr.name} className="bg-white rounded-xl border border-border p-5 hover:border-accent/50 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent-light flex items-center justify-center shrink-0 text-accent font-bold text-sm">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="font-bold text-text-main text-lg">{attr.name}</h3>
                      <p className="text-text-muted mt-1">{attr.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar - Practical Info */}
          <div>
            <div className="bg-white rounded-2xl border border-border p-6 sticky top-24">
              <div className="flex items-center gap-2 mb-5">
                <Info size={20} className="text-accent" />
                <h3 className="font-bold text-text-main text-lg">Praktische Info</h3>
              </div>
              <div className="space-y-4">
                {dest.practicalInfo.map((info) => {
                  const Icon = infoIcons[info.label] || MapPin;
                  return (
                    <div key={info.label} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-surface flex items-center justify-center shrink-0">
                        <Icon size={16} className="text-text-muted" />
                      </div>
                      <div>
                        <p className="text-xs font-medium text-text-muted uppercase tracking-wider">{info.label}</p>
                        <p className="text-sm font-semibold text-text-main">{info.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Rating */}
              <div className="mt-6 pt-5 border-t border-border">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center">
                    <Star size={20} className="text-white fill-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-text-main">{dest.rating}/10</p>
                    <p className="text-sm text-text-muted">Beoordeling reizigers</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <Link href="#" className="mt-5 w-full inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-xl font-semibold transition-colors shadow-lg shadow-accent/20">
                <Compass size={18} />
                Bekijk tours in Berlijn
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="bg-surface-alt py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-text-main mb-8">
            <Lightbulb size={28} className="inline text-warning mr-2" />
            Tips voor je stedentrip naar Berlijn
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Koop een dagkaart voor het OV', tip: 'Een Tageskarte (dagkaart) voor zones AB kost circa €8,80 en geeft je onbeperkt toegang tot U-Bahn, S-Bahn, bus en tram.' },
              { title: 'Bezoek de Reichstag bij zonsondergang', tip: 'Reserveer online (gratis!) een bezoek aan de glazen koepel. Bij zonsondergang is het uitzicht over de stad spectaculair.' },
              { title: 'Ontbijt als een Berlijner', tip: 'Berlijn staat bekend om uitgebreide brunch-cafes. Probeer een Fruhstuck in Prenzlauer Berg of Kreuzberg.' },
              { title: 'Ga op zondag naar Mauerpark', tip: 'De vlooienmarkt, het straateten en de legendarische karaoke in het amfitheater maken zondag in Mauerpark onvergetelijk.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl border border-border p-6">
                <h3 className="font-bold text-text-main mb-2">{item.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{item.tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-primary-dark py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Klaar om Berlijn te ontdekken?</h2>
          <p className="text-stone-300 mb-8">Bekijk de beste tours, activiteiten en ervaringen in Berlijn. Geboekt door duizenden reizigers.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#" className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-white px-8 py-3.5 rounded-xl font-semibold transition-colors">
              <Compass size={18} /> Tours & Activiteiten
            </Link>
            <Link href="/" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-3.5 rounded-xl font-semibold border border-white/10 transition-colors">
              Meer bestemmingen <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <h2 className="text-2xl md:text-3xl font-bold text-text-main mb-8 text-center">Veelgestelde vragen over Berlijn</h2>
        <FAQSchema items={dest.faq} />
      </section>

      {/* JSON-LD for this city */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'TouristDestination',
        name: 'Berlijn',
        description: dest.description,
        url: 'https://cityspotters.com/nl/duitsland/berlijn',
        touristType: ['Stedentrip', 'Cultuur', 'Geschiedenis'],
        aggregateRating: { '@type': 'AggregateRating', ratingValue: dest.rating.toString(), bestRating: '10', reviewCount: '892' },
        geo: { '@type': 'GeoCoordinates', latitude: '52.5200', longitude: '13.4050' },
        containedInPlace: { '@type': 'Country', name: 'Duitsland' },
      }) }} />
    </>
  );
}
