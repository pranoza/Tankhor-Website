'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguageAndTheme } from '@/context/LanguageAndThemeContext';
import { Store, Scissors, Factory, Sparkles, ArrowLeft, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { FadeIn, FadeInStagger, FadeInStaggerItem } from '@/components/ScrollAnimation';

export default function SolutionsGrid() {
  const { language } = useLanguageAndTheme();

  const solutions = [
    {
      id: 'boutique',
      slug: '/boutique-accounting',
      icon: Store,
      badge: { fa: 'پرفروش‌ترین', en: 'Most Popular' },
      title: {
        fa: 'نرم افزار حسابداری و مدیریت بوتیک',
        en: 'Boutique Store & Accounting Software',
      },
      description: {
        fa: 'راهکار تخصصی بوتیک‌های لباس زنانه، مردانه و کیف/کفش. انبارداری ماتریسی رنگ/سایز، صندوق سریع POS، مدیریت چک صیادی و دفتر معین.',
        en: 'Specialized for menswear, womenswear & footwear boutiques. Variant matrices, touch POS cashier, Sayad check management & ledgers.',
      },
      keywords: ['نرم افزار حسابداری بوتیک', 'نرم افزار حسابداری بوتیک رایگان', 'مدیریت بوتیک لباس'],
      highlightColor: 'from-blue-500/10 to-teal-500/10 border-blue-500/30',
    },
    {
      id: 'maison',
      slug: '/maison-accounting',
      icon: Scissors,
      badge: { fa: 'ویژه طراحان و مزون‌ها', en: 'For Fashion Maisons' },
      title: {
        fa: 'نرم افزار حسابداری و مدیریت مزون',
        en: 'Fashion Atelier & Maison Software',
      },
      description: {
        fa: 'مدیریت سفارشات دوخت، بیعانه، ثبت اندازه‌گیری‌های شخصی، راهنمای سایز داینامیک، محاسبه بهای تمام‌شده و حسابداری طرف‌حساب‌ها.',
        en: 'Custom tailoring orders, measurement archives, deposit tracking, landed cost calculation, and client accounting ledgers.',
      },
      keywords: ['نرم افزار حسابداری مزون', 'نرم افزار مدیریت مزون رایگان', 'حسابداری مزون لباس'],
      highlightColor: 'from-amber-500/10 to-orange-500/10 border-amber-500/30',
    },
    {
      id: 'manufacturing',
      slug: '/apparel-manufacturing',
      icon: Factory,
      badge: { fa: 'تولیدی و بنکداری', en: 'Manufacturing & Wholesale' },
      title: {
        fa: 'نرم افزار حسابداری تولیدی پوشاک و لباس',
        en: 'Apparel Manufacturing & Wholesale ERP',
      },
      description: {
        fa: 'محاسبه دقیق بهای تمام‌شده (Landed Cost)، خیاطی، پارچه و خرج‌کار، مدیریت بنکداران، سفارشات عمده و گزارش‌های سامانه مؤدیان.',
        en: 'True landed cost allocation (stitching, fabric, trim), wholesaler credit limits, bulk PO processing & tax compliance.',
      },
      keywords: ['نرم افزار حسابداری تولیدی پوشاک', 'نرم افزار حسابداری تولیدی لباس', 'مدیریت تولیدی پوشاک'],
      highlightColor: 'from-emerald-500/10 to-teal-500/10 border-emerald-500/30',
    },
  ];

  const ArrowIcon = language === 'fa' ? ArrowLeft : ArrowRight;

  return (
    <section id="solutions" className="py-20 sm:py-28 bg-neutral-50/60 dark:bg-[#070707] border-t border-neutral-200/80 dark:border-neutral-800/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <FadeIn className="max-w-3xl mb-14 space-y-3 text-right rtl:text-right ltr:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 text-xs font-caption-mono font-medium">
            <Sparkles className="w-3.5 h-3.5 text-teal-500" />
            <span>{language === 'fa' ? 'راهکارهای تخصصی صنف پوشاک' : 'Tailored Fashion Solutions'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
            {language === 'fa' ? 'راهکارهای اختصاصی برای نوع کسب‌وکار شما' : 'Purpose-Built Solutions for Every Fashion Segment'}
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 font-normal leading-relaxed">
            {language === 'fa'
              ? 'انتخاب کنید تا امکانات دقیق مربوط به بوتیک، مزون یا کارگاه تولیدی پوشاک خود را مشاهده کنید'
              : 'Select your business type to explore tailored features for boutiques, ateliers, or garment factories'}
          </p>
        </FadeIn>

        {/* Solutions Cards Grid */}
        <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {solutions.map((item) => {
            const Icon = item.icon;
            return (
              <FadeInStaggerItem
                key={item.id}
                className="p-7 rounded-2xl bg-white dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800/80 hover:border-teal-500/60 dark:hover:border-teal-500/50 transition-all duration-200 flex flex-col justify-between group shadow-sm hover:shadow-md"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-950/60 border border-teal-200/80 dark:border-teal-800/60 flex items-center justify-center text-teal-600 dark:text-teal-400">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-caption-mono text-[10px] bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 px-2.5 py-1 rounded-full border border-neutral-200 dark:border-neutral-700 font-medium">
                      {item.badge[language]}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-neutral-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                      {item.title[language]}
                    </h3>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal">
                      {item.description[language]}
                    </p>
                  </div>

                  {/* Keywords Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {item.keywords.map((kw, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-caption-mono bg-neutral-50 dark:bg-neutral-800/60 text-neutral-500 dark:text-neutral-400 px-2 py-0.5 rounded border border-neutral-200/60 dark:border-neutral-700/60"
                      >
                        #{kw}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-neutral-100 dark:border-neutral-800/80 mt-6">
                  <Link
                    href={item.slug}
                    className="w-full py-2.5 rounded-lg bg-neutral-100 dark:bg-neutral-800 hover:bg-teal-600 hover:text-white dark:hover:bg-teal-500 dark:hover:text-neutral-950 text-neutral-800 dark:text-neutral-200 font-semibold text-xs transition-all flex items-center justify-center gap-2 group-hover:bg-neutral-900 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-neutral-900"
                  >
                    <span>{language === 'fa' ? 'مشاهده امکانات و توضیحات تخصصی' : 'Explore Industry Solution'}</span>
                    <ArrowIcon className="w-4 h-4" />
                  </Link>
                </div>
              </FadeInStaggerItem>
            );
          })}
        </FadeInStagger>

      </div>
    </section>
  );
}
