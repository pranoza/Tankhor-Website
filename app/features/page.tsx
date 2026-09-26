import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FreeVersionSection from '@/components/FreeVersionSection';
import DemoRequestModal from '@/components/DemoRequestModal';
import { featuresList } from '@/data/featuresData';
import {
  Boxes,
  Receipt,
  Ruler,
  QrCode,
  Barcode,
  RefreshCw,
  Calculator,
  PieChart,
  CreditCard,
  ArrowLeftRight,
  ArrowUpRight,
  ChevronLeft,
  Sparkles,
  Download,
  CheckCircle2,
  ShieldCheck,
  Layers,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'قابلیت‌ها و امکانات تخصصی نرم‌افزار پوشاک تنخور | ۱۰ راهکار یکپارچه صنف مد',
  description:
    'بررسی جامع ۱۰ قابلیت تخصصی تنخور برای صنف پوشاک: انبارداری ماتریسی پوشاک، حسابداری و صندوق پوشاک، موتور هوشمند پیشنهاد سایز لباس، کاتالوگ دیجیتال، چاپ بارکد لباس، اتصال ووکامرس، Landed Cost، و خروجی سپیدار و هلو.',
  keywords: [
    'نرم افزار پوشاک',
    'نرم افزار صنف پوشاک',
    'قابلیت های نرم افزار پوشاک تنخور',
    'امکانات حسابداری پوشاک',
    'انبارداری پوشاک',
    'صندوق فروشگاهی بوتیک لباس',
    'راهنمای سایز آنلاین لباس',
    'کاتالوگ دیجیتال پوشاک',
    'چاپ بارکد پوشاک',
    'اتصال ووکامرس به انبار پوشاک',
  ],
  alternates: {
    canonical: 'https://tankhor.com/features',
  },
};

const iconMap: Record<string, React.ElementType> = {
  'apparel-inventory': Boxes,
  'clothing-accounting': Receipt,
  'size-guide-engine': Ruler,
  'digital-catalog': QrCode,
  'barcode-printing': Barcode,
  'woocommerce-sync': RefreshCw,
  'landed-cost': Calculator,
  'apparel-analytics': PieChart,
  'treasury-and-cheques': CreditCard,
  'financial-integrations': ArrowLeftRight,
};

export default function FeaturesHubPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'قابلیت‌های تخصصی نرم‌افزار پوشاک تنخور',
    description: 'فهرست ۱۰ راهکار و قابلیت تخصصی نرم‌افزار تنخور برای فروشگاه‌های پوشاک، بوتیک‌ها و مزون‌ها',
    itemListElement: featuresList.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.targetKeyword,
      url: `https://tankhor.com/features/${item.slug}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      <main className="overflow-x-hidden min-h-screen bg-white dark:bg-[#0a0a0a] text-neutral-900 dark:text-neutral-100">
        
        {/* Hero Section */}
        <section className="relative pt-36 sm:pt-44 pb-16 sm:pb-20 border-b border-neutral-200 dark:border-neutral-800 bg-gradient-to-b from-teal-950/15 via-white to-white dark:from-teal-950/25 dark:via-[#0a0a0a] dark:to-[#0a0a0a]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800 text-teal-700 dark:text-teal-300 text-xs font-caption-mono font-medium">
              <Sparkles className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
              <span>معماری اختصاصی صنف پوشاک، کیف و کفش</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight text-neutral-900 dark:text-white">
              ۱۰ قابلیت تخصصی تنخور برای صنف پوشاک
            </h1>

            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto leading-relaxed font-normal">
              تمام ابزارهایی که یک بوتیک، مزون، آنلاین‌شاپ یا بنکداری پوشاک برای مدیریت موجودی، فروش حضوری و آنلاین، حسابداری دقیق و رشد برند نیاز دارد؛ در یک پلتفرم منسجم.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-3.5">
              <a
                href="#free-version"
                className="px-6 py-3 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-bold text-xs sm:text-sm shadow-md hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-all flex items-center gap-2"
              >
                <Download className="w-4 h-4 text-teal-400 dark:text-teal-600" />
                <span>دانلود نسخه رایگان ویندوز، مک و اندروید</span>
              </a>
              <a
                href="https://my.tankhor.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 border border-neutral-300 dark:border-neutral-700 font-semibold text-xs sm:text-sm hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all flex items-center gap-1.5"
              >
                <span>تست رایگان ۱۴ روزه پلن پرو</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
              </a>
            </div>
          </div>
        </section>

        {/* 10 Features Grid */}
        <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {featuresList.map((item, index) => {
              const IconComp = iconMap[item.slug] || Layers;
              return (
                <Link
                  key={item.slug}
                  href={`/features/${item.slug}`}
                  className="p-6 sm:p-8 rounded-2xl bg-neutral-50/70 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 hover:border-teal-500/70 dark:hover:border-teal-500/70 transition-all duration-200 space-y-4 group block relative overflow-hidden"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 flex items-center justify-center text-teal-600 dark:text-teal-400 group-hover:scale-110 transition-transform">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="font-caption-mono text-xs text-neutral-400 font-semibold">
                      ۰{index + 1}
                    </span>
                  </div>

                  <div>
                    <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-neutral-200/70 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 font-caption-mono">
                      {item.categoryLabel}
                    </span>
                    <h2 className="text-xl font-bold text-neutral-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors mt-2">
                      {item.targetKeyword}
                    </h2>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal">
                    {item.subtitle}
                  </p>

                  <div className="pt-2 border-t border-neutral-200/70 dark:border-neutral-800/80 flex items-center justify-between text-xs font-semibold text-teal-600 dark:text-teal-400">
                    <span>مشاهده جزئیات و دموی زنده</span>
                    <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Free Desktop Download Section */}
        <section id="free-version">
          <FreeVersionSection />
        </section>

      </main>

      <Footer />
      <DemoRequestModal />
    </>
  );
}
