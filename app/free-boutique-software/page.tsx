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
  title: 'دانلود نرم افزار حسابداری بوتیک رایگان و آفلاین دسکتاپ | تنخور',
  description:
    'دانلود مستقیم نرم افزار حسابداری بوتیک رایگان تنخور برای ویندوز و مک. بدون محدودیت زمانی، ۱۰۰٪ آفلاین با دیتابیس داخلی SQLite، بدون نیاز به اشتراک ماهانه.',
  keywords: [
    'دانلود نرم افزار حسابداری بوتیک رایگان',
    'نرم افزار حسابداری بوتیک رایگان',
    'دانلود نرم افزار مدیریت فروشگاه لباس رایگان',
    'نرم افزار حسابداری دسکتاپ پوشاک رایگان',
    'نرم افزار آفلاین بوتیک',
  ],
  alternates: {
    canonical: 'https://tankhor.com/free-boutique-software',
    languages: {
      fa: 'https://tankhor.com/free-boutique-software',
      en: 'https://tankhor.com/en/free-boutique-software',
      'x-default': 'https://tankhor.com/free-boutique-software',
    },
  },
  openGraph: {
    title: 'دانلود نرم افزار حسابداری بوتیک رایگان و آفلاین دسکتاپ | تنخور',
    description:
      'دانلود مستقیم نرم افزار حسابداری بوتیک رایگان تنخور برای ویندوز و مک. بدون محدودیت زمانی، ۱۰۰٪ آفلاین با دیتابیس داخلی SQLite.',
    url: 'https://tankhor.com/free-boutique-software',
    siteName: 'Tankhor',
    locale: 'fa_IR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'دانلود نرم افزار حسابداری بوتیک رایگان و آفلاین دسکتاپ | تنخور',
    description: 'دانلود نرم افزار حسابداری بوتیک رایگان و ۱۰۰٪ آفلاین.',
  },
};

export default function FreeBoutiqueSoftwarePage() {
  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'دانلود نرم افزار حسابداری بوتیک رایگان تنخور',
    operatingSystem: 'Windows, macOS',
    applicationCategory: 'BusinessApplication',
    description:
      'دانلود نسخه ۱۰۰٪ رایگان و آفلاین نرم افزار حسابداری و مدیریت بوتیک لباس تنخور با دیتابیس محلی SQLite.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'IRR',
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
        name: 'صفحه اصلی',
        item: 'https://tankhor.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'دانلود نرم افزار رایگان بوتیک',
        item: 'https://tankhor.com/free-boutique-software',
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
              <span>نسخه کاملاً رایگان دسکتاپ تنخور (بدون زمان انقضا)</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              دانلود نرم افزار حسابداری بوتیک رایگان و آفلاین
            </h1>

            <p className="text-base sm:text-lg text-neutral-300 max-w-3xl mx-auto font-normal leading-relaxed">
              تمامی امکانات اصلی مدیریت بوتیک، تعریف ماتریسی رنگ و سایز، صدور فاکتور، مدیریت موجودی و انبارداری دسکتاپ در نسخه رایگان تنخور بدون نیاز به پرداخت حتی ۱ ریال موجود است.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#free-version"
                className="px-7 py-3.5 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-bold text-sm shadow-md hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-all flex items-center gap-2 active:scale-95 cursor-pointer"
              >
                <Download className="w-4 h-4 text-teal-400 dark:text-teal-600" />
                <span>دانلود رایگان نسخه دسکتاپ</span>
              </a>
              <a
                href="https://my.tankhor.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-neutral-950 font-bold text-sm shadow-md transition-all flex items-center gap-2 active:scale-95 cursor-pointer"
              >
                <Cloud className="w-4 h-4" />
                <span>نسخه ابری (شروع رایگان)</span>
                <ArrowUpRight className="w-4 h-4 opacity-75" />
              </a>
            </div>

            {/* Quick Benefits Badges */}
            <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 text-right rtl:text-right">
              <div className="p-3.5 rounded-xl bg-neutral-900/80 border border-neutral-800 text-xs font-medium text-neutral-200 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                <span>بدون محدودیت زمانی یا تست ۱۴ روزه</span>
              </div>
              <div className="p-3.5 rounded-xl bg-neutral-900/80 border border-neutral-800 text-xs font-medium text-neutral-200 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                <span>۱۰۰٪ آفلاین روی کامپیوتر شما</span>
              </div>
              <div className="p-3.5 rounded-xl bg-neutral-900/80 border border-neutral-800 text-xs font-medium text-neutral-200 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                <span>پشتیبانی کامل از بارکدخوان و کارتخوان</span>
              </div>
              <div className="p-3.5 rounded-xl bg-neutral-900/80 border border-neutral-800 text-xs font-medium text-neutral-200 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                <span>ارتقا اختیاری به ابری هر زمان خواستید</span>
              </div>
            </div>
          </div>
        </section>

        {/* Focused 2-Option Conversion Section */}
        <InternalDoubleCtaSection categoryName="نسخه رایگان بوتیک" />

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
