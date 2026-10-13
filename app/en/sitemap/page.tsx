import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DemoRequestModal from '@/components/DemoRequestModal';
import SitemapClient from '@/components/SitemapClient';
import { ChevronRight, Compass } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sitemap | Complete Directory of Tankhor Fashion Software Pages',
  description:
    'Comprehensive sitemap of Tankhor apparel ERP software. Quick access to all pages, specialized landing pages for boutiques, ateliers, garment manufacturing, and 10 smart features.',
  keywords: [
    'Tankhor Sitemap',
    'Apparel ERP Sitemap',
    'Clothing Software Directory',
    'Boutique Software Pages',
    'Fashion Inventory Solutions',
  ],
  alternates: {
    canonical: 'https://tankhor.com/en/sitemap',
    languages: {
      en: 'https://tankhor.com/en/sitemap',
      fa: 'https://tankhor.com/sitemap',
      'x-default': 'https://tankhor.com/sitemap',
    },
  },
  openGraph: {
    title: 'Sitemap | Complete Directory of Tankhor Fashion Software Pages',
    description:
      'Comprehensive index of all platform areas, fashion industry landing solutions, and specialized software modules.',
    url: 'https://tankhor.com/en/sitemap',
    locale: 'en_US',
    siteName: 'TANKHOR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sitemap | Complete Directory of Tankhor Fashion Software Pages',
    description:
      'Comprehensive index of all platform areas, fashion industry landing solutions, and specialized software modules.',
  },
};

export default function EnglishSitemapPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://tankhor.com/en',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Sitemap',
        item: 'https://tankhor.com/en/sitemap',
      },
    ],
  };

  const sitemapSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Tankhor Apparel ERP Sitemap',
    description: 'Structured index of all pages and features in Tankhor fashion software platform.',
    url: 'https://tankhor.com/en/sitemap',
    isPartOf: {
      '@type': 'WebSite',
      name: 'TANKHOR | Fashion Boutique ERP',
      url: 'https://tankhor.com/en',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(sitemapSchema) }}
      />

      <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col selection:bg-teal-500 selection:text-neutral-950">
        <Navbar />

        <main className="flex-1 pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            {/* Breadcrumb Navigation */}
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-2 text-xs text-neutral-400 font-sans"
            >
              <Link href="/en" className="hover:text-white transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-neutral-600" />
              <span className="text-teal-400 font-medium">Sitemap</span>
            </nav>

            {/* Header Hero */}
            <div className="space-y-4 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-semibold">
                <Compass className="w-3.5 h-3.5" />
                <span>Tankhor Navigation &amp; Site Architecture Guide</span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Tankhor Platform Comprehensive Sitemap
              </h1>
              <p className="text-sm sm:text-base text-neutral-400 leading-relaxed font-normal">
                Structured directory of all core pages, apparel industry specialized landing pages, and modular software tools.
              </p>
            </div>

            {/* Interactive Sitemap Client Component */}
            <SitemapClient />
          </div>
        </main>

        <Footer />
        <DemoRequestModal />
      </div>
    </>
  );
}
