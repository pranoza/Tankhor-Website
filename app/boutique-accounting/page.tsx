import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FreeVersionSection from '@/components/FreeVersionSection';
import AccountingModuleSection from '@/components/AccountingModuleSection';
import FashionFeaturesSection from '@/components/FashionFeaturesSection';
import SizeGuideDemoWidget from '@/components/SizeGuideDemoWidget';
import FAQSection from '@/components/FAQSection';
import { InternalStickyBar, InternalDoubleCtaSection } from '@/components/InternalConversionBar';
import { Store, CheckCircle2, Download, Cloud, ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'نرم افزار حسابداری بوتیک و مدیریت فروشگاه لباس | رایگان و آفلاین - تنخور',
  description:
    'بهترین نرم افزار حسابداری بوتیک لباس زنانه، مردانه، بچگانه و کیف و کفش. مدیریت ماتریسی رنگ و سایز، صندوق POS سریع، حسابداری چک صیادی و دفتر معین؛ ۱۰۰٪ رایگان و آفلاین.',
  keywords: [
    'نرم افزار حسابداری بوتیک',
    'نرم افزار حسابداری بوتیک رایگان',
    'نرم افزار مدیریت بوتیک لباس',
    'نرم افزار انبارداری بوتیک',
    'حسابداری فروشگاه لباس',
    'نرم افزار فروشگاه کیف و کفش',
  ],
  alternates: {
    canonical: 'https://tankhor.com/boutique-accounting',
    languages: {
      fa: 'https://tankhor.com/boutique-accounting',
      en: 'https://tankhor.com/en/boutique-accounting',
      'x-default': 'https://tankhor.com/boutique-accounting',
    },
  },
  openGraph: {
    title: 'نرم افزار حسابداری بوتیک و مدیریت فروشگاه لباس | رایگان و آفلاین - تنخور',
    description:
      'بهترین نرم افزار حسابداری بوتیک لباس زنانه، مردانه، بچگانه و کیف و کفش. مدیریت ماتریسی رنگ و سایز، صندوق POS سریع؛ ۱۰۰٪ رایگان و آفلاین.',
    url: 'https://tankhor.com/boutique-accounting',
    siteName: 'Tankhor',
    locale: 'fa_IR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'نرم افزار حسابداری بوتیک و مدیریت فروشگاه لباس | تنخور',
    description: 'بهترین نرم افزار حسابداری بوتیک لباس و کیف و کفش. رایگان و آفلاین.',
  },
};

export default function BoutiqueAccountingPage() {
  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'نرم افزار حسابداری بوتیک و مدیریت فروشگاه لباس تنخور',
    operatingSystem: 'Windows, macOS, Android, Web',
    applicationCategory: 'BusinessApplication',
    description:
      'نرم افزار تخصصی حسابداری بوتیک لباس و فروشگاه پوشاک. مدیریت ماتریسی رنگ و سایز، صندوق لمسی سریع، حسابداری چک صیادی و دفتر معین اشخاص.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'IRR',
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
        name: 'صفحه اصلی',
        item: 'https://tankhor.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'حسابداری بوتیک لباس',
        item: 'https://tankhor.com/boutique-accounting',
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
              <span>راهکار اختصاصی بوتیک‌های پوشاک، کیف و کفش</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-tight">
              نرم افزار حسابداری بوتیک و مدیریت فروشگاه لباس
            </h1>

            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto font-normal leading-relaxed">
              طراحی شده بر اساس نیازهای واقعی بوتیک‌های پوشاک زنانه، مردانه، بچگانه و کیف/کفش. ثبت سریع فاکتور، انبارداری ماتریسی رنگ و سایز، حسابداری چک‌های صیادی و دفتر معین بدهکار/بستانکار بدون پیچیدگی‌های نرم‌افزارهای سنتی.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#free-version"
                className="px-7 py-3.5 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-bold text-sm shadow-md hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-all flex items-center gap-2 active:scale-95 cursor-pointer"
              >
                <Download className="w-4 h-4 text-teal-400 dark:text-teal-600" />
                <span>دانلود رایگان نسخه دسکتاپ بوتیک</span>
              </a>
              <a
                href="https://my.tankhor.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-sm shadow-md transition-all flex items-center gap-2 active:scale-95 cursor-pointer"
              >
                <Cloud className="w-4 h-4" />
                <span>نسخه ابری بوتیک (شروع رایگان)</span>
                <ArrowUpRight className="w-4 h-4 opacity-80" />
              </a>
            </div>

            {/* Quick Benefits Badges */}
            <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 text-right rtl:text-right">
              <div className="p-3.5 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-xs font-medium text-neutral-800 dark:text-neutral-200 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0" />
                <span>۱۰۰٪ آفلاین و بدون قطعی</span>
              </div>
              <div className="p-3.5 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-xs font-medium text-neutral-800 dark:text-neutral-200 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0" />
                <span>صندوق POS فوق‌العاده سریع</span>
              </div>
              <div className="p-3.5 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-xs font-medium text-neutral-800 dark:text-neutral-200 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0" />
                <span>چاپ بارکد و لیبل حرارتی</span>
              </div>
              <div className="p-3.5 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-xs font-medium text-neutral-800 dark:text-neutral-200 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0" />
                <span>نسخه رایگان همیشگی</span>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Modules Breakdown */}
        <AccountingModuleSection />
        <FashionFeaturesSection />
        {/* Focused 2-Option Conversion Section */}
        <InternalDoubleCtaSection categoryName="بوتیک پوشاک و کفش" />

        <FreeVersionSection />
        <FAQSection />
      </main>
      <Footer />
      <InternalStickyBar />
    </>
  );
}
