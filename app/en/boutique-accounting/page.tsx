import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FreeVersionSection from '@/components/FreeVersionSection';
import AccountingModuleSection from '@/components/AccountingModuleSection';
import FashionFeaturesSection from '@/components/FashionFeaturesSection';
import FAQSection from '@/components/FAQSection';
import { InternalStickyBar, InternalDoubleCtaSection } from '@/components/InternalConversionBar';
import { Store, CheckCircle2, Download, Cloud, ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Fashion Boutique Accounting & Retail POS Software | Free & Offline - Tankhor',
  description:
    'Dedicated accounting software for clothing boutiques, apparel retailers, and shoe stores. Matrix color/size inventory, fast POS checkout, customer credit ledger; 100% free & offline.',
  keywords: [
    'Boutique Accounting Software',
    'Free Boutique POS Software',
    'Clothing Store Management Software',
    'Apparel Retail Inventory',
    'Fashion Boutique POS Register',
    'Boutique Cash Register Software',
  ],
  alternates: {
    canonical: 'https://tankhor.com/en/boutique-accounting',
    languages: {
      en: 'https://tankhor.com/en/boutique-accounting',
      fa: 'https://tankhor.com/boutique-accounting',
      'x-default': 'https://tankhor.com/boutique-accounting',
    },
  },
  openGraph: {
    title: 'Fashion Boutique Accounting & Retail POS Software | Tankhor',
    description:
      'Matrix color/size inventory, high-speed POS register, customer credit ledger; 100% free and offline-first.',
    url: 'https://tankhor.com/en/boutique-accounting',
    locale: 'en_US',
    siteName: 'TANKHOR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fashion Boutique Accounting & Retail POS Software | Tankhor',
    description:
      'Matrix color/size inventory, high-speed POS register, customer credit ledger; 100% free and offline-first.',
  },
};

export default function EnglishBoutiqueAccountingPage() {
  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Tankhor Boutique POS & Retail Accounting Software',
    operatingSystem: 'Windows, macOS, Android, Web',
    applicationCategory: 'BusinessApplication',
    description:
      'Dedicated fashion boutique management software. Variant color/size matrix, high-speed POS checkout, customer ledger, and retail tax calculations.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      ratingCount: '142',
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
        name: 'Boutique Accounting Software',
        item: 'https://tankhor.com/en/boutique-accounting',
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
        <section className="relative pt-36 sm:pt-44 pb-16 sm:pb-24 bg-gradient-to-b from-teal-950/15 via-white to-white dark:from-teal-950/25 dark:via-[#0a0a0a] dark:to-[#0a0a0a] border-b border-neutral-200 dark:border-neutral-800">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800 text-teal-700 dark:text-teal-300 text-xs font-caption-mono font-medium">
              <Store className="w-4 h-4 text-teal-600 dark:text-teal-400" />
              <span>Specialized Solution for Fashion Boutiques &amp; Apparel Retailers</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-tight">
              Boutique POS &amp; Fashion Retail Accounting Software
            </h1>

            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto font-normal leading-relaxed">
              Designed around the real-world operational rhythms of women&apos;s, men&apos;s, kids&apos; clothing boutiques, and shoe stores. High-speed barcode invoicing, color and size matrix stock control, customer credit ledger, and retail tax calculations without the friction of legacy accounting software.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#free-version"
                className="px-7 py-3.5 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-bold text-sm shadow-md hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-all flex items-center gap-2 active:scale-95 cursor-pointer"
              >
                <Download className="w-4 h-4 text-teal-400 dark:text-teal-600" />
                <span>Free Desktop Download</span>
              </a>
              <a
                href="https://my.tankhor.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-sm shadow-md transition-all flex items-center gap-2 active:scale-95 cursor-pointer"
              >
                <Cloud className="w-4 h-4" />
                <span>Cloud Edition (Start Free)</span>
                <ArrowUpRight className="w-4 h-4 opacity-80" />
              </a>
            </div>

            {/* Quick Benefits Badges */}
            <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
              <div className="p-3.5 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-xs font-medium text-neutral-800 dark:text-neutral-200 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0" />
                <span>100% Offline &amp; Reliable</span>
              </div>
              <div className="p-3.5 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-xs font-medium text-neutral-800 dark:text-neutral-200 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0" />
                <span>Ultra-Fast POS Register</span>
              </div>
              <div className="p-3.5 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-xs font-medium text-neutral-800 dark:text-neutral-200 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0" />
                <span>Barcode &amp; Thermal Tags</span>
              </div>
              <div className="p-3.5 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-xs font-medium text-neutral-800 dark:text-neutral-200 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0" />
                <span>Lifetime Free Edition</span>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Modules Breakdown */}
        <AccountingModuleSection />
        <FashionFeaturesSection />

        {/* Focused 2-Option Conversion Section */}
        <InternalDoubleCtaSection categoryName="Boutique & Retail Fashion" />

        <FreeVersionSection />
        <FAQSection />
      </main>
      <Footer />
      <InternalStickyBar />
    </>
  );
}
