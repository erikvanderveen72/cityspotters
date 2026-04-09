import Link from 'next/link';
import { MapPin, Star, ArrowRight } from 'lucide-react';

interface DestinationCardProps {
  name: string;
  country: string;
  href: string;
  description: string;
  rating: number;
  highlights: string[];
  emoji: string;
}

export default function DestinationCard({ name, country, href, description, rating, highlights, emoji }: DestinationCardProps) {
  return (
    <Link href={href} className="group block">
      <div className="bg-white rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
        {/* Image placeholder with gradient */}
        <div className="relative h-48 bg-gradient-to-br from-primary via-accent to-primary-dark flex items-center justify-center">
          <span className="text-6xl">{emoji}</span>
          <div className="absolute top-3 right-3 flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full">
            <Star size={14} className="text-warning fill-warning" />
            <span className="text-sm font-semibold text-text-main">{rating}</span>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/30 to-transparent" />
          <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-white text-sm font-medium">
            <MapPin size={14} />
            {country}
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="text-lg font-bold text-text-main mb-1 group-hover:text-accent transition-colors">{name}</h3>
          <p className="text-sm text-text-muted mb-3 line-clamp-2">{description}</p>

          {/* Highlights */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {highlights.slice(0, 3).map((h) => (
              <span key={h} className="text-xs bg-accent-light text-accent px-2 py-0.5 rounded-full font-medium">{h}</span>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-1.5 text-sm font-semibold text-accent group-hover:gap-3 transition-all">
            Ontdek {name}
            <ArrowRight size={16} />
          </div>
        </div>
      </div>
    </Link>
  );
}
