import { MapPin, ChevronRight } from 'lucide-react';
import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface PageHeroProps {
  title: string;
  subtitle?: string;
  highlightedSubtitle?: string;
  badge?: string;
  showBreadcrumbs?: boolean;
  breadcrumbs?: BreadcrumbItem[];
}

export default function PageHero({ title, subtitle, highlightedSubtitle, badge, showBreadcrumbs, breadcrumbs }: PageHeroProps) {
  return (
    <section className="relative bg-primary-dark overflow-hidden">
      {/* Animated gradient blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/15 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl animate-blob animation-delay-4000" />
      </div>

      {/* Dot pattern overlay */}
      <div className="absolute inset-0 dot-pattern opacity-40" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 md:pt-36 pb-16 md:pb-24">
        {/* Breadcrumbs */}
        {showBreadcrumbs && breadcrumbs && (
          <nav className="flex items-center gap-2 mb-6 text-sm">
            <Link href="/" className="text-blue-200 hover:text-white transition-colors">Home</Link>
            {breadcrumbs.map((item, i) => (
              <span key={item.href} className="flex items-center gap-2">
                <ChevronRight size={14} className="text-white/40" />
                {i === breadcrumbs.length - 1 ? (
                  <span className="text-white font-medium">{item.label}</span>
                ) : (
                  <Link href={item.href} className="text-blue-200 hover:text-white transition-colors">{item.label}</Link>
                )}
              </span>
            ))}
          </nav>
        )}

        {/* Badge */}
        {badge && (
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-emerald-400 rounded-full" />
            <span className="text-stone-300 text-sm font-medium">{badge}</span>
          </div>
        )}

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-4">
          {title}
        </h1>

        {/* Highlighted subtitle */}
        {highlightedSubtitle && (
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-400 via-yellow-300 to-orange-400 bg-clip-text text-transparent mb-4">
            {highlightedSubtitle}
          </p>
        )}

        {/* Subtitle */}
        {subtitle && (
          <p className="text-lg md:text-xl text-stone-300 max-w-2xl">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
