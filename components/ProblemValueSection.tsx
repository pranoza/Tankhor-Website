'use client';

import React from 'react';
import { useLanguageAndTheme } from '@/context/LanguageAndThemeContext';
import {
  Grid,
  Layers,
  TrendingDown,
  Building2,
  CheckCircle2,
  ArrowLeft,
  ArrowRight,
  ShieldAlert,
  Sparkles,
} from 'lucide-react';
import { FadeIn, FadeInStagger, FadeInStaggerItem } from '@/components/ScrollAnimation';

export default function ProblemValueSection() {
  const { language } = useLanguageAndTheme();
  const isFa = language === 'fa';

  const problems = [
    {
      id: 'variants',
      icon: Grid,
      iconColor: 'text-amber-500',
      problemTitle: isFa
        ? '۱. مدیریت دشوار رنگ‌ها و سایزهای محصولات'
        : '1. Complex Color & Size Variations',
      problemDesc: isFa
        ? 'در نرم‌افزارهای عمومی یا اکسل، برای یک پیراهن با ۴ رنگ و ۵ سایز باید ۲۰ کالای جداگانه بسازید که باعث هرج‌ومرج کدهای کالا و کندی ثبت فاکتور می‌شود.'
        : 'Generic systems force you to create 20 separate item codes for a single shirt with 4 colors and 5 sizes, cluttering product lists.',
      solutionTitle: isFa
        ? 'ماتریس هوشمند رنگ و سایز تنخور'
        : 'Tankhor Smart Variant Matrix',
      solutionDesc: isFa
        ? 'مدل لباس را یک‌بار تعریف کنید؛ سیستم به‌طور خودکار ماتریس کامل متغیرها، بارکد اختصاصی برای هر سایز و جدول موجودی را بدون سردرگمی می‌سازد.'
        : 'Define a garment style once; TanKhor automatically creates a clean 2D variant matrix with distinct SKUs and barcodes.',
    },
    {
      id: 'inventory',
      icon: Layers,
      iconColor: 'text-rose-500',
      problemTitle: isFa
        ? '۲. مغایرت موجودی انبار و فروش'
        : '2. Stock Mismatches Between Inventory & Sales',
      problemDesc: isFa
        ? 'ندانستن دقیق اینکه کدام سایز یا رنگ تمام شده و کدام رسوب کرده، باعث فروش کالای ناموجود یا انباشت سرمایه در انبار می‌شود.'
        : 'Not knowing which exact size or color is depleted leads to selling out-of-stock items or accumulating dead stock.',
      solutionTitle: isFa
        ? 'کاردکس لحظه‌ای و هشدار کسری سایز'
        : 'Real-Time Ledger & Variant Stock Alerts',
      solutionDesc: isFa
        ? 'با هر بار اسکن بارکد در صندوق، موجودی همان سایز کسر می‌شود و گزارش دقیق از پرفروش‌ترین رنگ‌ها و نقطه سفارش دریافت می‌کنید.'
        : 'Every POS barcode scan deducts the exact variant instantly, giving you live replenishment notifications.',
    },
    {
      id: 'margin',
      icon: TrendingDown,
      iconColor: 'text-blue-500',
      problemTitle: isFa
        ? '۳. دشواری کنترل فروش و سود محصولات'
        : '3. Difficulty Calculating True Net Margin',
      problemDesc: isFa
        ? 'هزینه‌های باربری، خیاطی، خرج‌کار و تعویض سایز به صورت کلی ثبت می‌شوند و سود واقعی هر تکه لباس یا سود خالص ماهانه شفاف نیست.'
        : 'Overhead freight, tailoring, and return expenses are lumped together, obscuring true net profitability per garment.',
      solutionTitle: isFa
        ? 'محاسبه بهای تمام‌شده واقعی (Landed Cost)'
        : 'True Landed Cost & Clear P&L',
      solutionDesc: isFa
        ? 'هزینه‌های سربار خرید و تولید مستقیماً روی قیمت تمام‌شده هر واریانت تسهیم می‌شوند تا سود ناخالص و خالص واقعی را ببینید.'
        : 'Landed cost engine allocates freight, trims, and tailoring directly onto SKU unit cost for real gross & net margins.',
    },
    {
      id: 'branches',
      icon: Building2,
      iconColor: 'text-purple-500',
      problemTitle: isFa
        ? '۴. محدودیت دسترسی و مدیریت کسب‌وکار در چند شعبه'
        : '4. Multi-Branch & Remote Access Bottlenecks',
      problemDesc: isFa
        ? 'سیستم‌های تک‌کامپیوتری قدیمی به مدیر اجازه نمی‌دهند موجودی سایر شعب، فروش روزانه یا گردش انبار مرکزی را از راه دور کنترل کند.'
        : 'Legacy offline-only systems prevent owners from viewing remote store sales, warehouse transfers, or consolidated stock.',
      solutionTitle: isFa
        ? 'ارتقای یکپارچه به نسخه ابری Pro'
        : 'Seamless Upgrade to Pro Cloud Sync',
      solutionDesc: isFa
        ? 'هر زمان نیاز به چند شعبه یا چند صندوقدار داشتید، نسخه Pro با همگام‌سازی ابری اطلاعات شعب و انبارها را در یک پنل متمرکز می‌کند.'
        : 'When you expand to multiple outlets or staff, TanKhor Pro synchronizes branch inventories and sales seamlessly in the cloud.',
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-neutral-50/70 dark:bg-[#070707] border-t border-neutral-200/80 dark:border-neutral-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Specified in prompt */}
        <FadeIn className="max-w-3xl mb-16 space-y-3 text-right rtl:text-right ltr:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 text-xs font-caption-mono font-medium shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
            <span>{isFa ? 'چرا مدیریت پوشاک متفاوت است؟' : 'Why Apparel Needs Specialized Tools'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-tight">
            {isFa
              ? 'مدیریت فروشگاه پوشاک نباید پیچیده باشد'
              : 'Managing an Apparel Store Shouldn’t Be Complicated'}
          </h2>

          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 font-normal leading-relaxed">
            {isFa
              ? 'چالش‌های رایج صاحبان فروشگاه‌های لباس، کیف و کفش و راهکار تخصصی که تنخور برای حل هر یک ارائه می‌دهد.'
              : 'Real challenges faced by apparel and footwear retail owners, and how TanKhor solves each with domain architecture.'}
          </p>
        </FadeIn>

        {/* 4 Problem / Solution Visual Scannable Cards */}
        <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {problems.map((item) => {
            const Icon = item.icon;
            return (
              <FadeInStaggerItem
                key={item.id}
                className="bg-white dark:bg-[#0f0f0f] rounded-2xl border border-neutral-200/90 dark:border-neutral-800/90 p-6 sm:p-7 space-y-5 shadow-sm hover:border-teal-500/40 transition-all flex flex-col justify-between"
              >
                {/* Problem Section (Red/Grey Accent) */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center shrink-0">
                      <Icon className={`w-5 h-5 ${item.iconColor}`} />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white leading-snug">
                      {item.problemTitle}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal">
                    {item.problemDesc}
                  </p>
                </div>

                {/* Solution Section (Teal Accent) */}
                <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800/80 space-y-2 bg-teal-50/40 dark:bg-teal-950/20 -mx-6 -mb-6 sm:-mx-7 sm:-mb-7 p-5 rounded-b-2xl border-t-teal-500/20">
                  <div className="flex items-center gap-2 text-teal-700 dark:text-teal-300 font-bold text-xs sm:text-sm">
                    <CheckCircle2 className="w-4 h-4 shrink-0 text-teal-600 dark:text-teal-400" />
                    <span>{item.solutionTitle}</span>
                  </div>
                  <p className="text-xs text-neutral-700 dark:text-neutral-300 leading-relaxed font-normal">
                    {item.solutionDesc}
                  </p>
                </div>
              </FadeInStaggerItem>
            );
          })}
        </FadeInStagger>

      </div>
    </section>
  );
}
