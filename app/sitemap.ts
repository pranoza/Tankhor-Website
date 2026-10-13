import type { MetadataRoute } from 'next';
import { featuresList } from '@/data/featuresData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://tankhor.com';
  const now = new Date();

  // 7 Static Page Pairs (Persian & English)
  const corePaths = [
    { faPath: '', enPath: '/en', changeFreq: 'daily' as const, priority: 1.0 },
    { faPath: '/features', enPath: '/en/features', changeFreq: 'weekly' as const, priority: 0.9 },
    { faPath: '/boutique-accounting', enPath: '/en/boutique-accounting', changeFreq: 'weekly' as const, priority: 0.85 },
    { faPath: '/maison-accounting', enPath: '/en/maison-accounting', changeFreq: 'weekly' as const, priority: 0.85 },
    { faPath: '/apparel-manufacturing', enPath: '/en/apparel-manufacturing', changeFreq: 'weekly' as const, priority: 0.85 },
    { faPath: '/free-boutique-software', enPath: '/en/free-boutique-software', changeFreq: 'weekly' as const, priority: 0.85 },
    { faPath: '/sitemap', enPath: '/en/sitemap', changeFreq: 'weekly' as const, priority: 0.75 },
  ];

  // Persian Static Pages with bidirectional hreflang alternates
  const staticRoutesFa: MetadataRoute.Sitemap = corePaths.map((item) => ({
    url: `${baseUrl}${item.faPath}`,
    lastModified: now,
    changeFrequency: item.changeFreq,
    priority: item.priority,
    alternates: {
      languages: {
        fa: `${baseUrl}${item.faPath}`,
        en: `${baseUrl}${item.enPath}`,
      },
    },
  }));

  // English Static Pages with bidirectional hreflang alternates
  const staticRoutesEn: MetadataRoute.Sitemap = corePaths.map((item) => ({
    url: `${baseUrl}${item.enPath}`,
    lastModified: now,
    changeFrequency: item.changeFreq,
    priority: item.priority,
    alternates: {
      languages: {
        en: `${baseUrl}${item.enPath}`,
        fa: `${baseUrl}${item.faPath}`,
      },
    },
  }));

  // 10 Specialized Feature Pages (Persian) with bidirectional hreflang alternates
  const featureRoutesFa: MetadataRoute.Sitemap = featuresList.map((feature) => ({
    url: `${baseUrl}/features/${feature.slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
    alternates: {
      languages: {
        fa: `${baseUrl}/features/${feature.slug}`,
        en: `${baseUrl}/en/features/${feature.slug}`,
      },
    },
  }));

  // 10 Specialized Feature Pages (English) with bidirectional hreflang alternates
  const featureRoutesEn: MetadataRoute.Sitemap = featuresList.map((feature) => ({
    url: `${baseUrl}/en/features/${feature.slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
    alternates: {
      languages: {
        en: `${baseUrl}/en/features/${feature.slug}`,
        fa: `${baseUrl}/features/${feature.slug}`,
      },
    },
  }));

  return [...staticRoutesFa, ...staticRoutesEn, ...featureRoutesFa, ...featureRoutesEn];
}
