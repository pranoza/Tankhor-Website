import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FreeVersionSection from '@/components/FreeVersionSection';
import AccountingModuleSection from '@/components/AccountingModuleSection';
import FashionFeaturesSection from '@/components/FashionFeaturesSection';
import FAQSection from '@/components/FAQSection';
import DemoRequestModal from '@/components/DemoRequestModal';
import { Factory, CheckCircle2, Download, ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Garment Manufacturing ERP & Apparel Production Accounting | True Landed Cost - Tankhor',
  description:
    'Production management and accounting software for garment factories, cutting & sewing workshops, and fashion wholesalers. True landed cost engine, fabric allocation, seamstress wages, and wholesale accounts.',
  keywords: [
    'Garment Manufacturing ERP',
    'Apparel Production Accounting',
    'Clothing Factory Software',
    'Sewing Workshop Management',
    'Apparel True Landed Cost Engine',
    'Fashion Wholesale Accounting',
  ],
  alternates: {
    canonical: 'https://tankhor.com/en/apparel-manufacturing',
    languages: {
      en: 'https://tankhor.com/en/apparel-manufacturing',
      fa: 'https://tankhor.com/apparel-manufacturing',
      'x-default': 'https://tankhor.com/apparel-manufacturing',
    },
  },
  openGraph: {
    title: 'Garment Manufacturing ERP & Apparel Production Accounting | Tankhor',
    description:
      'True landed cost engine, fabric and trims allocation, seamstress piecework wages, and wholesale ledger; free and offline-first.',
    url: 'https://tankhor.com/en/apparel-manufacturing',
    locale: 'en_US',
    siteName: 'TANKHOR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Garment Manufacturing ERP & Apparel Production Accounting | Tankhor',
    description:
      'True landed cost engine, fabric and trims allocation, seamstress piecework wages, and wholesale ledger; free and offline-first.',
  },
};

export default function EnglishApparelManufacturingPage() {
  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Tankhor Garment Manufacturing ERP & Apparel Production Software',
    operatingSystem: 'Windows, macOS, Android, Web',
    applicationCategory: 'BusinessApplication',
    description:
      'Production management and accounting software for garment factories, sewing workshops, and wholesale brands. True Landed Cost engine, fabric BOM, and piecework wages.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      ratingCount: '129',
    },
  };

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
        name: 'Garment Manufacturing ERP',
        item: 'https://tankhor.com/en/apparel-manufacturing',
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Navbar />
      <main className="overflow-x-hidden">
        {/* Dedicated Hero Section */}
        <section className="relative pt-36 sm:pt-44 pb-16 sm:pb-24 bg-gradient-to-b from-emerald-950/15 via-white to-white dark:from-emerald-950/25 dark:via-[#0a0a0a] dark:to-[#0a0a0a] border-b border-neutral-200 dark:border-neutral-800">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-caption-mono font-medium">
              <Factory className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Specialized ERP for Garment Factories, Cut &amp; Sew Studios &amp; Wholesalers</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-tight">
              Garment Manufacturing ERP &amp; Apparel Production Accounting
            </h1>

            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto font-normal leading-relaxed">
              Engineered specifically for clothing manufacturers, cutting and sewing workshops, and apparel wholesale distributors. Intelligent True Landed Cost engine with automated allocation of raw fabric yardage, seamstress piecework wages, zippers, buttons, threads, freight, and packaging.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#free-version"
                className="px-7 py-3.5 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-bold text-sm shadow-md hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-all flex items-center gap-2"
              >
                <Download className="w-4 h-4 text-emerald-400 dark:text-emerald-600" />
                <span>Download Free Manufacturing Edition</span>
              </a>
              <a
                href="https://my.tankhor.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-xl bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 border border-neutral-300 dark:border-neutral-700 font-semibold text-sm hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all flex items-center gap-1.5"
              >
                <span>Launch Cloud Production Panel</span>
                <ArrowUpRight className="w-4 h-4 opacity-60" />
              </a>
            </div>

            {/* Quick Benefits Badges */}
            <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
              <div className="p-3.5 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-xs font-medium text-neutral-800 dark:text-neutral-200 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>True Landed Cost Engine</span>
              </div>
              <div className="p-3.5 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-xs font-medium text-neutral-800 dark:text-neutral-200 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Wholesale &amp; Supplier Ledger</span>
              </div>
              <div className="p-3.5 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-xs font-medium text-neutral-800 dark:text-neutral-200 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Tax &amp; Commercial Invoicing</span>
              </div>
              <div className="p-3.5 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-xs font-medium text-neutral-800 dark:text-neutral-200 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Production P&amp;L Analytics</span>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Modules Breakdown */}
        <AccountingModuleSection />
        <FashionFeaturesSection />
        <FreeVersionSection />
        <FAQSection />
      </main>
      <Footer />
      <DemoRequestModal />
    </>
  );
}
