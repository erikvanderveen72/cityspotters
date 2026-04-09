'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSchemaProps {
  items: FAQItem[];
}

export default function FAQSchema({ items }: FAQSchemaProps) {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };

  return (
    <div className="space-y-3">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {items.map((item, i) => (
        <div
          key={i}
          className={`border rounded-xl transition-colors ${
            expandedIdx === i ? 'border-accent bg-white' : 'border-border bg-white hover:border-accent/50'
          }`}
        >
          <button
            onClick={() => setExpandedIdx(expandedIdx === i ? null : i)}
            className="w-full flex items-center justify-between p-5 text-left"
          >
            <span className="font-semibold text-text-main pr-4">{item.question}</span>
            <ChevronDown
              size={20}
              className={`shrink-0 text-text-muted transition-transform duration-200 ${
                expandedIdx === i ? 'rotate-180' : ''
              }`}
            />
          </button>
          {expandedIdx === i && (
            <div className="px-5 pb-5 text-text-muted leading-relaxed">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
