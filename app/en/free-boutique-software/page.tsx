import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FreeVersionSection from '@/components/FreeVersionSection';
import AccountingModuleSection from '@/components/AccountingModuleSection';
import FAQSection from '@/components/FAQSection';
import { InternalStickyBar, InternalDoubleCtaSection } from '@/components/InternalConversionBar';
import { Download, Cloud, ArrowUpRight, CheckCircle2, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Download Free Boutique Accounting Software & Offline POS | Tankhor',
  description:
    'Direct download of Tankhor free boutique software for Windows and Mac. No time limits, 100% offline with local SQLite database, zero monthly subscriptions.',
  keywords: [
    'Download Free Boutique Software',
    'Free Clothing Store POS Software',
    'Offline Boutique Accounting Software',
    'Free Fashion Retail Inventory',
    'Desktop Apparel Software Free',
  ],
  alternates: {
    canonical: 'https://tankhor.com/en/free-boutique-software',
    languages: {
      en: 'https://tankhor.com/en/free-boutique-software',
      fa: 'https://tankhor.com/free-boutique-software',
      'x-default': 'https://tankhor.com/free-boutique-software',
    },
  },
  openGraph: {
    title: 'Download Free Boutique Accounting Software & Offline POS | Tankhor',
    description:
      'Free desktop fashion store software for Windows and Mac. No expiration, zero monthly subscriptions, 100% offline.',
    url: 'https://tankhor.com/en/free-boutique-software',
    locale: 'en_US',
    siteName: 'TANKHOR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Download Free Boutique Accounting Software & Offline POS | Tankhor',
    description:
      'Free desktop fashion store software for Windows and Mac. No expiration, zero monthly subscriptions, 100% offline.',
  },
};

export default function EnglishFreeBoutiqueSoftwarePage() {
  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Tankhor Free Boutique Accounting Software',
    operatingSystem: 'Windows, macOS',
    applicationCategory: 'BusinessApplication',
    description:
      '100% free and offline boutique management desktop software. Color/size SKU inventory, checkout register, and local SQLite security without subscription fees.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      ratingCount: '165',
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
        name: 'Free Boutique Software',
        item: 'https://tankhor.com/en/free-boutique-software',
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
        <section className="relative pt-36 sm:pt-44 pb-16 sm:pb-24 bg-gradient-to-b from-teal-950/30 via-neutral-950 to-neutral-950 text-white border-b border-neutral-800">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/20 border border-teal-500/40 text-teal-300 text-xs font-caption-mono font-medium">
              <Zap className="w-4 h-4 text-teal-400" />
              <span>100% Free Desktop Edition (No Expiration / No Credit Card Required)</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Download Free Boutique Accounting &amp; Offline POS Software
            </h1>

            <p className="text-base sm:text-lg text-neutral-300 max-w-3xl mx-auto font-normal leading-relaxed">
              All essential boutique management tools — color and size SKU matrix, rapid invoice checkout, barcode scanning, inventory tracking, and offline local database — are included 100% free forever in Tankhor without paying a single dollar.
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
                className="px-7 py-3.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-neutral-950 font-bold text-sm shadow-md transition-all flex items-center gap-2 active:scale-95 cursor-pointer"
              >
                <Cloud className="w-4 h-4" />
                <span>Cloud Edition (Start Free)</span>
                <ArrowUpRight className="w-4 h-4 opacity-75" />
              </a>
            </div>

            {/* Quick Benefits Badges */}
            <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
              <div className="p-3.5 rounded-xl bg-neutral-900/80 border border-neutral-800 text-xs font-medium text-neutral-200 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                <span>No 14-day limits or expiration</span>
              </div>
              <div className="p-3.5 rounded-xl bg-neutral-900/80 border border-neutral-800 text-xs font-medium text-neutral-200 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                <span>100% Offline on your PC</span>
              </div>
              <div className="p-3.5 rounded-xl bg-neutral-900/80 border border-neutral-800 text-xs font-medium text-neutral-200 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Barcode scanners &amp; POS receipt ready</span>
              </div>
              <div className="p-3.5 rounded-xl bg-neutral-900/80 border border-neutral-800 text-xs font-medium text-neutral-200 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Optional cloud sync whenever you grow</span>
              </div>
            </div>
          </div>
        </section>

        {/* Focused 2-Option Conversion Section */}
        <InternalDoubleCtaSection categoryName="Free Boutique Edition" />

        {/* Download Buttons Section */}
        <FreeVersionSection />
        <AccountingModuleSection />
        <FAQSection />
      </main>
      <Footer />
      <InternalStickyBar />
    </>
  );
}
