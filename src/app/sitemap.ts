import { MetadataRoute } from 'next';
import { destinations } from '@/lib/destinations';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://cityspotters.com';

  const cityPages = destinations.map((dest) => ({
    url: `${baseUrl}/nl/${dest.countrySlug}/${dest.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'daily' as const, priority: 1.0 },
    { url: `${baseUrl}/nl`, lastModified: new Date(), changeFrequency: 'daily' as const, priority: 0.9 },
    { url: `${baseUrl}/nl/top-tien-stedentrips`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/nl/travel-stories`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.7 },
    ...cityPages,
  ];
}
