'use client';

import React from 'react';
import { siteContent } from '@/data/content';
import { useLanguageAndTheme } from '@/context/LanguageAndThemeContext';

export default function SeoHead() {
  const { language } = useLanguageAndTheme();
  const isEn = language === 'en';

  // SoftwareApplication JSON-LD (USD for English global market, IRR for Persian)
  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: isEn
      ? 'Tankhor | Free Apparel ERP & Fashion Inventory Software'
      : 'تنخور | Tankhor',
    operatingSystem: 'Windows, macOS, Linux, Web, Android, iOS',
    applicationCategory: 'BusinessApplication',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: isEn ? 'USD' : 'IRR',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      ratingCount: '154',
    },
    description: siteContent.meta.description[language],
  };

  // Organization JSON-LD
  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: isEn ? 'Tankhor Global Apparel Platform' : 'تنخور | Tankhor Fashion ERP',
    url: isEn ? 'https://tankhor.com/en' : 'https://tankhor.com',
    logo: 'https://tankhor.com/logo-light.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+98-21-55416274',
      email: 'support@tankhor.com',
      contactType: 'customer service',
      areaServed: isEn ? ['Global', 'US', 'EU', 'AE'] : 'IR',
      availableLanguage: ['Persian', 'English'],
    },
    sameAs: [
      'https://instagram.com/tankhor_app',
      'https://linkedin.com/company/tankhor',
      'https://t.me/tankhor_app',
    ],
  };

  // FAQPage JSON-LD
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: siteContent.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question[language],
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer[language],
      },
    })),
  };

  // BreadcrumbList JSON-LD
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: isEn ? 'Home' : 'صفحه اصلی',
        item: isEn ? 'https://tankhor.com/en' : 'https://tankhor.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: isEn ? 'Specialized Features' : 'قابلیت‌ها',
        item: isEn ? 'https://tankhor.com/en#features' : 'https://tankhor.com/#features',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: isEn ? 'Pricing & Plans' : 'تعرفه‌ها',
        item: isEn ? 'https://tankhor.com/en#pricing' : 'https://tankhor.com/#pricing',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
