'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, MapPin, Compass, ChevronDown } from 'lucide-react';

const destinations = [
  { label: 'Rotterdam', href: '/nl/nederland/rotterdam' },
  { label: 'Berlijn', href: '/nl/duitsland/berlijn' },
  { label: 'Barcelona', href: '/nl/spanje/barcelona' },
  { label: 'Rome', href: '/nl/italie/rome' },
  { label: 'Lissabon', href: '/nl/portugal/lissabon' },
  { label: 'Praag', href: '/nl/tsjechie/praag' },
  { label: 'Londen', href: '/nl/verenigd-koninkrijk/londen' },
  { label: 'Parijs', href: '/nl/frankrijk/parijs' },
];

const navItems = [
  { label: 'Bestemmingen', href: '#', hasDropdown: true },
  { label: 'Travel Stories', href: '/nl/travel-stories' },
  { label: 'Top 10', href: '/nl/top-tien-stedentrips' },
  { label: 'Over Ons', href: '/nl/over-ons' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [destOpen, setDestOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-white shadow-md border-b border-border'
        : 'bg-gradient-to-b from-primary-dark/90 to-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <svg width="34" height="34" viewBox="0 0 36 36">
              <circle cx="18" cy="18" r="17" fill="#3498DB" />
              <circle cx="18" cy="18" r="13" fill="none" stroke="white" strokeWidth="1.5" />
              <circle cx="18" cy="14" r="3" fill="white" />
              <path d="M18 17 L18 25" stroke="white" strokeWidth="2" strokeLinecap="round" />
              <circle cx="18" cy="25" r="1.5" fill="white" />
            </svg>
            <span className={`text-[22px] font-extrabold tracking-tight italic transition-colors ${
              scrolled ? 'text-primary' : 'text-white'
            }`}>
              City<span className="text-accent">Spotters</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.hasDropdown ? (
                  <button
                    className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                      scrolled ? 'text-text-main hover:bg-surface-alt' : 'text-white/90 hover:text-white hover:bg-white/10'
                    }`}
                    onMouseEnter={() => setDestOpen(true)}
                    onMouseLeave={() => setDestOpen(false)}
                  >
                    <MapPin size={16} />
                    {item.label}
                    <ChevronDown size={14} />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                      scrolled ? 'text-text-main hover:bg-surface-alt' : 'text-white/90 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {item.label}
                  </Link>
                )}

                {item.hasDropdown && (
                  <div
                    className={`absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-xl border border-border p-2 transition-all ${
                      destOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                    }`}
                    onMouseEnter={() => setDestOpen(true)}
                    onMouseLeave={() => setDestOpen(false)}
                  >
                    {destinations.map((dest) => (
                      <Link
                        key={dest.href}
                        href={dest.href}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-accent-light transition-colors group/item"
                      >
                        <Compass size={16} className="text-accent" />
                        <span className="text-sm font-medium text-text-main group-hover/item:text-accent">{dest.label}</span>
                      </Link>
                    ))}
                    <div className="border-t border-border mt-2 pt-2">
                      <Link href="/nl" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-accent-light text-sm font-medium text-accent">
                        Alle bestemmingen bekijken →
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Trust badge desktop */}
          <div className={`hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium ${
            scrolled ? 'bg-accent-light text-accent' : 'bg-white/10 text-white/80 border border-white/10'
          }`}>
            <div className="w-2 h-2 bg-emerald-400 rounded-full" />
            Onafhankelijk & gratis
          </div>

          {/* Mobile burger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 rounded-lg ${scrolled ? 'text-text-main' : 'text-white'}`}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-border shadow-lg">
          <div className="px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.hasDropdown ? (
                  <>
                    <p className="px-3 py-2 text-sm font-semibold text-text-muted uppercase tracking-wider">Bestemmingen</p>
                    {destinations.map((dest) => (
                      <Link
                        key={dest.href}
                        href={dest.href}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-surface-alt text-sm text-text-main"
                      >
                        <Compass size={14} className="text-accent" />
                        {dest.label}
                      </Link>
                    ))}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-3 py-2.5 rounded-lg hover:bg-surface-alt text-sm font-medium text-text-main"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
