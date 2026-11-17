'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguageAndTheme } from '@/context/LanguageAndThemeContext';
import {
  Store,
  Footprints,
  Scissors,
  Factory,
  Sparkles,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { FadeIn, FadeInStagger, FadeInStaggerItem } from '@/components/ScrollAnimation';

export default function TargetAudiencesSection() {
  const { language } = useLanguageAndTheme();
  const isFa = language === 'fa';
  const isEn = language === 'en';

  const audiences = [
    {
      id: 'boutique',
      slug: isEn ? '/en/boutique-accounting' : '/boutique-accounting',
      icon: Store,
      title: isFa ? '۱. بوتیک و فروشگاه پوشاک' : '1. Apparel & Clothing Boutiques',
      subtitle: isFa
        ? 'فروشگاه‌های لباس زنانه، مردانه و بچه‌گانه با تنوع گسترده سایز'
        : 'Menswear, womenswear, and kids retail fashion stores',
      needDesc: isFa
        ? 'نیاز به سرعت بالا در ثبت بارکد لباس در ساعات شلوغی، تفکیک رنگ و سایز در انبار و صدور فاکتور بدون قطعی اینترنت.'
        : 'High-speed barcode scanning during rush hours, variant color/size matrix, and zero-downtime offline checkout.',
      keyFeature: isFa
        ? 'ماتریس هوشمند رنگ و سایز + صندوق پرسرعت POS'
        : 'Color/Size Variant Matrix + Fast Barcode POS',
      isPrimaryMarket: true,
      badge: isFa ? 'تمرکز اصلی' : 'Primary Focus',
      colorClass: 'border-teal-500/40 bg-teal-50/20 dark:bg-teal-950/10',
    },
    {
      id: 'shoes',
      slug: isEn ? '/en/boutique-accounting' : '/boutique-accounting',
      icon: Footprints,
      title: isFa ? '۲. فروشگاه کیف و کفش' : '2. Footwear & Bag Stores',
      subtitle: isFa
        ? 'فروشگاه‌های تخصصی کفش زنانه، مردانه، ورزشی و چرم'
        : 'Footwear, leather goods, and accessories retailers',
      needDesc: isFa
        ? 'سایزبندی عددی کفش (۳۶ تا ۴۶)، کاردکس جعبه‌ها در انبار و اتصال بارکد به هر لنگه یا جفت کفش برای جلوگیری از اشتباه انبار.'
        : 'Numeric EU shoe sizing (36-46), stock tracking per box, and thermal barcode hangtags.',
      keyFeature: isFa
        ? 'پشتیبانی تخصصی از سایزبندی عددی کفش و اتیکت قیمت'
        : 'Numeric Shoe Sizing Engine & Price Label Printing',
      isPrimaryMarket: true,
      badge: isFa ? 'تمرکز اصلی' : 'Primary Focus',
      colorClass: 'border-blue-500/40 bg-blue-50/20 dark:bg-blue-950/10',
    },
    {
      id: 'maison',
      slug: isEn ? '/en/maison-accounting' : '/maison-accounting',
      icon: Scissors,
      title: isFa ? '۳. مزون و برند پوشاک' : '3. Fashion Maisons & Ateliers',
      subtitle: isFa
        ? 'طراحان مد، مزون‌های لباس مجلسی و برندهای اختصاصی'
        : 'Bespoke tailoring, bridal boutiques, and independent apparel brands',
      needDesc: isFa
        ? 'ثبت اندازه‌های شخصی مشتریان، مدیریت سفارش‌های دوخت، پیگیری بیعانه‌ها و محاسبه بهای تمام‌شده پارچه و دوخت.'
        : 'Client measurement archives, bespoke tailoring orders, deposit ledgers, and trim costing.',
      keyFeature: isFa
        ? 'ثبت ابعاد مشتری + محاسبه بهای تمام‌شده پارچه و دوخت'
        : 'Client Measurements & Custom Tailoring Ledger',
      isPrimaryMarket: true,
      badge: isFa ? 'طراحی و مزون' : 'Fashion Design',
      colorClass: 'border-amber-500/40 bg-amber-50/20 dark:bg-amber-950/10',
    },
    {
      id: 'manufacturing',
      slug: isEn ? '/en/apparel-manufacturing' : '/apparel-manufacturing',
      icon: Factory,
      title: isFa ? '۴. تولیدی و کارگاه پوشاک' : '4. Garment Manufacturing',
      subtitle: isFa
        ? 'کارگاه‌های دوزندگی، تولیدی‌های پوشاک و بنکداران'
        : 'Garment factories, cutting/sewing workshops, and wholesalers',
      needDesc: isFa
        ? 'محاسبه دقیق هزینه خرج‌کار و پارچه (Landed Cost)، دستمزد خیاط، مدیریت فاکتورهای عمده جینی و حساب دفتری بنکداران.'
        : 'Landed cost allocation (fabric & trims), piecework wages, and wholesale accounts.',
      keyFeature: isFa
        ? 'فرمول محاسبه بهای تمام‌شده واقعی (Landed Cost)'
        : 'True Landed Cost Engine & Wholesale Ledgers',
      isPrimaryMarket: false,
      badge: isFa ? 'بازار توسعه‌ای' : 'Expansion Segment',
      colorClass: 'border-neutral-200 dark:border-neutral-800 bg-neutral-50/40 dark:bg-neutral-900/20',
    },
  ];

  const ArrowIcon = isFa ? ArrowLeft : ArrowRight;

  return (
    <section
      id="solutions"
      className="py-20 sm:py-28 bg-neutral-50/70 dark:bg-[#070707] border-t border-neutral-200/80 dark:border-neutral-800/80 relative"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Specified in prompt */}
        <FadeIn className="max-w-3xl mb-14 space-y-3 text-right rtl:text-right ltr:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 text-xs font-caption-mono font-medium shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
            <span>{isFa ? 'کسب‌وکارهای هدف' : 'Target Industries'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-tight">
            {isFa
              ? 'تنخور برای کسب‌وکارهای مختلف صنعت پوشاک'
              : 'TanKhor for Apparel, Footwear & Fashion Businesses'}
          </h2>

          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 font-normal leading-relaxed">
            {isFa
              ? 'تمرکز اصلی تنخور بر فروشگاه‌های حضوری و آنلاین پوشاک، کیف و کفش است؛ با راهکارهای توسعه‌ای برای مزون‌ها و تولیدی‌ها.'
              : 'Primary focus on apparel and footwear retail stores, with specialized extensions for fashion ateliers and production.'}
          </p>
        </FadeIn>

        {/* 4 Clean Industry Cards Grid */}
        <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {audiences.map((item) => {
            const Icon = item.icon;
            return (
              <FadeInStaggerItem
                key={item.id}
                className={`rounded-2xl border p-6 sm:p-7 space-y-5 transition-all flex flex-col justify-between ${item.colorClass} shadow-sm hover:shadow-md`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 flex items-center justify-center text-neutral-900 dark:text-white shadow-xs">
                      <Icon className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                    </div>
                    <span className="font-caption-mono text-xs font-semibold px-2.5 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700">
                      {item.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                      {item.subtitle}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed font-normal">
                    {item.needDesc}
                  </p>

                  <div className="p-3 rounded-xl bg-white/80 dark:bg-neutral-900/80 border border-neutral-200/80 dark:border-neutral-800 text-xs flex items-center gap-2 text-neutral-800 dark:text-neutral-200">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0" />
                    <span><strong>مهم‌ترین قابلیت:</strong> {item.keyFeature}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-neutral-200/60 dark:border-neutral-800/60">
                  <Link
                    href={item.slug}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-700 dark:text-teal-300 hover:underline"
                  >
                    <span>{isFa ? 'مشاهده صفحه تخصصی و امکانات این صنف' : 'View Specialized Page & Features'}</span>
                    <ArrowIcon className="w-3.5 h-3.5" />
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
