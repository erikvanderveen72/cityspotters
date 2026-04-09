import Link from 'next/link';
import { Compass, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <div className="w-20 h-20 rounded-2xl bg-accent-light flex items-center justify-center mx-auto mb-6">
          <Compass size={36} className="text-accent" />
        </div>
        <h1 className="text-4xl font-bold text-text-main mb-3">Pagina niet gevonden</h1>
        <p className="text-lg text-text-muted mb-8 max-w-md mx-auto">
          Het lijkt erop dat deze bestemming nog niet op onze kaart staat. Ontdek onze andere stedentrips!
        </p>
        <Link href="/" className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-xl font-semibold transition-colors">
          <ArrowLeft size={18} />
          Terug naar home
        </Link>
      </div>
    </div>
  );
}
