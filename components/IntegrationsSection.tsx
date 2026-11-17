'use client';

import React from 'react';
import { useLanguageAndTheme } from '@/context/LanguageAndThemeContext';
import {
  CreditCard,
  Printer,
  Scan,
  RefreshCw,
  ShoppingBag,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  Clock,
} from 'lucide-react';
import { FadeIn, FadeInStagger, FadeInStaggerItem } from '@/components/ScrollAnimation';

export default function IntegrationsSection() {
  const { language } = useLanguageAndTheme();
  const isFa = language === 'fa';

  const readyIntegrations = [
    {
      id: 'pos-printers',
      icon: Printer,
      name: isFa ? 'چاپگرهای حرارتی فیش و اتیکت' : 'Thermal POS & Hangtag Printers',
      status: 'ready',
      statusLabel: isFa ? 'فعال و آماده استفاده' : 'Ready to Use',
      desc: isFa
        ? 'پشتیبانی مستقیم از چاپگرهای فیش ۸۰ و ۵۸ میلی‌متری و چاپگرهای حرارتی برچسب بارکد پوشاک.'
        : 'Direct support for 80mm/58mm thermal receipt and barcode label printers.',
    },
    {
      id: 'card-terminals',
      icon: CreditCard,
      name: isFa ? 'کارتخوان‌های بانکی فروشگاهی' : 'Bank POS Payment Terminals',
      status: 'ready',
      statusLabel: isFa ? 'فعال و آماده استفاده' : 'Ready to Use',
      desc: isFa
        ? 'ارسال اتوماتیک مبلغ فاکتور به دستگاه کارتخوان بدون نیاز به وارد کردن دستی توسط صندوقدار.'
        : 'Automatic invoice amount dispatch to store card terminals with zero manual entry.',
    },
    {
      id: 'barcode-scanners',
      icon: Scan,
      name: isFa ? 'بارکدخوان‌های تک‌بعدی و دوبعدی' : '1D / 2D Barcode Scanners',
      status: 'ready',
      statusLabel: isFa ? 'فعال و آماده استفاده' : 'Ready to Use',
      desc: isFa
        ? 'سازگار با کلیه بارکدخوان‌های سیمی، بیسیم و قرائت سریع بارکدهای تجاری یا اختصاصی لباس.'
        : 'Compatible with all USB, wireless 1D/2D scanners for instantaneous apparel SKU lookups.',
    },
  ];

  const upcomingIntegrations = [
    {
      id: 'woocommerce',
      icon: RefreshCw,
      name: isFa ? 'اتصال انبار به ووکامرس (WooCommerce)' : 'WooCommerce Real-Time Stock Sync',
      status: 'soon',
      statusLabel: isFa ? 'به‌زودی' : 'Coming Soon',
      desc: isFa
        ? 'همگام‌سازی لحظه‌ای موجودی واریانت‌های سایت فروشگاهی وردپرس با انبار مغازه فیزیکی.'
        : 'Automated stock synchronization between WordPress WooCommerce and physical store inventory.',
    },
    {
      id: 'excel-import',
      icon: ShoppingBag,
      name: isFa ? 'ورود اطلاعات از اکسل، سپیدار و هلو' : 'Excel & Legacy Accounting Bridges',
      status: 'soon',
      statusLabel: isFa ? 'به‌زودی' : 'Coming Soon',
      desc: isFa
        ? 'قالب آماده اکسل جهت بارگذاری سریع فهرست اولیه کالاها، سایزها و مانده‌حساب‌ها.'
        : 'Standard Excel data migration templates for products, opening balances, and accounts.',
    },
  ];

  return (
    <section
      id="integrations"
      className="py-20 sm:py-28 bg-neutral-50/70 dark:bg-[#070707] border-t border-neutral-200/80 dark:border-neutral-800/80 relative"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <FadeIn className="max-w-3xl mb-14 space-y-3 text-right rtl:text-right ltr:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 text-xs font-caption-mono font-medium shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
            <span>{isFa ? 'یکپارچگی و تجهیزات' : 'Integrations & Hardware'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-tight">
            {isFa
              ? 'اتصال هماهنگ با تجهیزات فروشگاهی و ابزارهای تجاری'
              : 'Seamless Compatibility with Store Hardware & Tools'}
          </h2>

          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 font-normal leading-relaxed">
            {isFa
              ? 'تجهیزات و اتصال‌های عملیاتی تنخور به‌صورت شفاف معرفی شده‌اند؛ قابلیت‌های در حال توسعه نیز با برچسب مشخص شده‌اند.'
              : 'Clearly delineating active hardware integrations from in-development connectors.'}
          </p>
        </FadeIn>

        {/* Ready Hardware Cards */}
        <div className="space-y-4 mb-8">
          <span className="font-caption-mono text-xs font-bold text-neutral-500 uppercase tracking-wider block">
            {isFa ? 'تجهیزات فروشگاهی آماده استفاده:' : 'Operational Store Hardware:'}
          </span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {readyIntegrations.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  className="p-6 rounded-2xl bg-white dark:bg-[#0f0f0f] border border-neutral-200/90 dark:border-neutral-800/90 space-y-3 shadow-sm flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950/40 border border-teal-200/60 dark:border-teal-800/60 text-teal-600 dark:text-teal-400 flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-[10px] font-bold font-caption-mono flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>{item.statusLabel}</span>
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-neutral-900 dark:text-white">
                      {item.name}
                    </h3>

                    <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* In-Development Connectors with clear "Coming Soon" badge */}
        <div className="space-y-4">
          <span className="font-caption-mono text-xs font-bold text-neutral-500 uppercase tracking-wider block">
            {isFa ? 'یکپارچگی‌های در حال توسعه (به‌زودی):' : 'In-Development Integrations:'}
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {upcomingIntegrations.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  className="p-6 rounded-2xl bg-white/70 dark:bg-[#0f0f0f]/70 border border-dashed border-neutral-300 dark:border-neutral-800 space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 text-[10px] font-bold font-caption-mono flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{item.statusLabel}</span>
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-neutral-900 dark:text-white">
                      {item.name}
                    </h3>

                    <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
