import { MapPin, Compass, Star, Users, Globe, ArrowRight, Shield, Sparkles } from 'lucide-react';
import Link from 'next/link';
import DestinationCard from '@/components/DestinationCard';
import FAQSchema from '@/components/FAQSchema';
import { destinations } from '@/lib/destinations';

const stats = [
  { icon: Globe, value: '50+', label: 'Bestemmingen' },
  { icon: Star, value: '8,8', label: 'Gem. beoordeling' },
  { icon: Users, value: '5.388', label: 'Reviews' },
  { icon: Shield, value: '100%', label: 'Onafhankelijk' },
];

const howItWorks = [
  { icon: Compass, title: 'Kies je bestemming', description: 'Ontdek 50+ steden met onze eerlijke reviews, lokale tips en praktische informatie.' },
  { icon: MapPin, title: 'Ontdek als een local', description: 'Onze gidsen zijn geschreven door locals die hun stad door en door kennen.' },
  { icon: Sparkles, title: 'Beleef het hoogtepunt', description: 'Van verborgen parels tot de bekendste bezienswaardigheden — wij helpen je het beste eruit te halen.' },
];

const faqItems = [
  { question: 'Wat is CitySpotters?', answer: 'CitySpotters is een onafhankelijk stedentrip-platform dat je helpt de perfecte stedentrip samen te stellen. Met meer dan 50 bestemmingen wereldwijd bieden we eerlijke reviews, lokale tips en handige reisinformatie.' },
  { question: 'Is CitySpotters gratis?', answer: 'Ja! CitySpotters is volledig gratis te gebruiken. We verdienen een kleine commissie als je via onze links een tour of activiteit boekt, maar dit heeft geen invloed op onze aanbevelingen.' },
  { question: 'Hoe worden de bestemmingen beoordeeld?', answer: 'Onze beoordelingen zijn gebaseerd op echte ervaringen van reizigers. We kijken naar factoren als bezienswaardigheden, eten en drinken, bereikbaarheid, veiligheid en prijs-kwaliteitverhouding.' },
  { question: 'Kan ik via CitySpotters tours boeken?', answer: 'Ja, bij elke bestemming vind je een selectie van tours en activiteiten die je direct kunt boeken via onze partners. We selecteren alleen tours met hoge beoordelingen.' },
  { question: 'Welke steden zijn het populairst?', answer: 'Barcelona, Rome, Berlijn, Lissabon en Praag zijn onze meest bezochte bestemmingen. Maar ook steden als Rotterdam, Porto en Napels worden steeds populairder.' },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-primary-dark overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-blob" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl animate-blob animation-delay-2000" />
          <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-blob animation-delay-4000" />
        </div>
        <div className="absolute inset-0 dot-pattern opacity-40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 md:pt-44 pb-20 md:pb-32">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-emerald-400 rounded-full" />
            <span className="text-stone-300 text-sm font-medium">50+ bestemmingen wereldwijd</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-4">
            Ontdek jouw ideale
          </h1>
          <p className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 via-cyan-300 to-accent bg-clip-text text-transparent mb-6">
            stedentrip
          </p>
          <p className="text-lg md:text-xl text-stone-300 max-w-2xl mb-10">
            Lokale tips, eerlijke reviews en unieke ervaringen in meer dan 50 steden. Samengesteld door locals, voor jou.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="#bestemmingen" className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-white px-8 py-3.5 rounded-xl font-semibold text-lg transition-colors shadow-lg shadow-accent/25">
              <Compass size={20} />
              Ontdek bestemmingen
            </Link>
            <Link href="/nl/top-tien-stedentrips" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-3.5 rounded-xl font-semibold text-lg transition-colors border border-white/10">
              Bekijk Top 10
            </Link>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="relative -mt-10 z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg border border-border p-6 md:p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent-light flex items-center justify-center shrink-0">
                  <stat.icon size={22} className="text-accent" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-text-main">{stat.value}</p>
                  <p className="text-sm text-text-muted">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-4">Hoe werkt CitySpotters?</h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">In drie stappen naar jouw perfecte stedentrip</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {howItWorks.map((step, i) => (
            <div key={step.title} className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-accent/70 flex items-center justify-center mx-auto mb-5 shadow-lg shadow-accent/20">
                <step.icon size={28} className="text-white" />
              </div>
              <div className="text-sm font-bold text-accent mb-2">Stap {i + 1}</div>
              <h3 className="text-xl font-bold text-text-main mb-2">{step.title}</h3>
              <p className="text-text-muted">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DESTINATIONS */}
      <section id="bestemmingen" className="bg-surface-alt py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-2">Populaire Bestemmingen</h2>
              <p className="text-lg text-text-muted">De favoriete stedentrips van onze reizigers</p>
            </div>
            <Link href="/nl" className="hidden md:flex items-center gap-1.5 text-accent font-semibold hover:gap-3 transition-all">
              Alle bestemmingen <ArrowRight size={18} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.map((dest) => (
              <DestinationCard
                key={dest.slug}
                name={dest.name}
                country={dest.country}
                href={`/nl/${dest.countrySlug}/${dest.slug}`}
                description={dest.description}
                rating={dest.rating}
                highlights={dest.highlights}
                emoji={dest.emoji}
              />
            ))}
          </div>
          <div className="mt-10 text-center md:hidden">
            <Link href="/nl" className="inline-flex items-center gap-2 text-accent font-semibold">
              Alle bestemmingen bekijken <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-dark py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Klaar voor je volgende avontuur?</h2>
          <p className="text-lg text-stone-300 mb-8 max-w-2xl mx-auto">
            Ontdek meer dan 50 bestemmingen met lokale tips, eerlijke reviews en de beste tours. Helemaal gratis en onafhankelijk.
          </p>
          <Link href="#bestemmingen" className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors shadow-lg shadow-accent/25">
            <Compass size={20} />
            Start met ontdekken
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-4">Veelgestelde vragen</h2>
          <p className="text-lg text-text-muted">Alles wat je wilt weten over CitySpotters</p>
        </div>
        <FAQSchema items={faqItems} />
      </section>
    </>
  );
}
