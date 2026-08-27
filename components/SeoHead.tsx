'use client';

import React from 'react';
import { siteContent } from '@/data/content';
import { useLanguageAndTheme } from '@/context/LanguageAndThemeContext';

export default function SeoHead() {
  const { language } = useLanguageAndTheme();

  // SoftwareApplication JSON-LD
  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'تنخور | Tankhor',
    operatingSystem: 'Windows, macOS, Linux, Web, Android, iOS',
    applicationCategory: 'BusinessApplication',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'IRR',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      ratingCount: '128',
    },
    description: siteContent.meta.description[language],
  };

  // Organization JSON-LD
  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'تنخور | Tankhor Fashion ERP',
    url: 'https://tankhor.ir',
    logo: 'https://tankhor.ir/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+98-21-91008822',
      contactType: 'customer service',
      areaServed: 'IR',
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
        name: language === 'fa' ? 'صفحه اصلی' : 'Home',
        item: 'https://tankhor.ir',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: language === 'fa' ? 'قابلیت‌ها' : 'Features',
        item: 'https://tankhor.ir/#features',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: language === 'fa' ? 'تعرفه‌ها' : 'Pricing',
        item: 'https://tankhor.ir/#pricing',
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
