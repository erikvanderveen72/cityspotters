import Link from 'next/link';
import { MapPin, Shield, Lock, Globe } from 'lucide-react';

const columns = [
  {
    title: 'Populaire Steden',
    links: [
      { label: 'Rotterdam', href: '/nl/nederland/rotterdam' },
      { label: 'Berlijn', href: '/nl/duitsland/berlijn' },
      { label: 'Barcelona', href: '/nl/spanje/barcelona' },
      { label: 'Rome', href: '/nl/italie/rome' },
      { label: 'Lissabon', href: '/nl/portugal/lissabon' },
      { label: 'Praag', href: '/nl/tsjechie/praag' },
    ],
  },
  {
    title: 'Ontdekken',
    links: [
      { label: 'Top 10 Stedentrips', href: '/nl/top-tien-stedentrips' },
      { label: 'Travel Stories', href: '/nl/travel-stories' },
      { label: 'Budget Stedentrips', href: '/nl/budget-stedentrips' },
      { label: 'Weekendje Weg', href: '/nl/weekendje-weg' },
    ],
  },
  {
    title: 'Over CitySpotters',
    links: [
      { label: 'Over Ons', href: '/nl/over-ons' },
      { label: 'Contact', href: '/nl/contact' },
      { label: 'Privacybeleid', href: '/nl/privacy' },
      { label: 'Algemene Voorwaarden', href: '/nl/algemene-voorwaarden' },
    ],
  },
];

const trustBadges = [
  { icon: Shield, label: 'Onafhankelijk' },
  { icon: Lock, label: 'SSL Beveiligd' },
  { icon: Globe, label: '50+ Bestemmingen' },
];

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-stone-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Logo & description */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 mb-12">
          <div className="max-w-sm">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <MapPin size={28} className="text-accent" />
              <span className="text-xl font-extrabold tracking-tight italic text-white">
                City<span className="text-accent">Spotters</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed">
              Ontdek de beste stedentrips met lokale tips, unieke tours en eerlijke aanbevelingen. Al sinds 2015 jouw onafhankelijke reisgids.
            </p>
          </div>

          {/* Trust badges */}
          <div className="flex gap-6">
            {trustBadges.map((badge) => (
              <div key={badge.label} className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                  <badge.icon size={18} className="text-accent" />
                </div>
                <span className="text-xs font-medium">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-12">
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-white font-semibold text-sm mb-4">{col.title}</h3>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs">&copy; {new Date().getFullYear()} GoNomadic B.V. Alle rechten voorbehouden.</p>
          <div className="flex items-center gap-2 text-xs">
            <span className="inline-flex items-center gap-1.5 bg-white/5 px-3 py-1 rounded-full">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
              Beoordeling: 8,8/10
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
