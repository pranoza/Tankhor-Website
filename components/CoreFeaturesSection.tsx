'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguageAndTheme } from '@/context/LanguageAndThemeContext';
import {
  Grid,
  Layers,
  Receipt,
  ShoppingCart,
  Users,
  PieChart,
  Building2,
  Cloud,
  CheckCircle2,
  Sparkles,
  ArrowLeft,
  ArrowRight,
} from 'lucide-react';
import { FadeIn, FadeInStagger, FadeInStaggerItem } from '@/components/ScrollAnimation';

export default function CoreFeaturesSection() {
  const { language } = useLanguageAndTheme();
  const isFa = language === 'fa';

  const features = [
    {
      id: 'matrix',
      icon: Grid,
      title: isFa ? 'مدیریت ماتریسی رنگ و سایز' : 'Color & Size Matrix',
      desc: isFa
        ? 'تعریف یکباره مدل لباس و ساخت اتوماتیک جدول ترکیبات رنگ، سایزبندی حروفی و عددی و بارکد اختصاصی.'
        : 'Auto-generate variants for letter, numeric, and shoe sizes with dedicated barcodes and SKU tags.',
      tag: isFa ? 'پوشاک و کفش' : 'Apparel & Shoes',
    },
    {
      id: 'inventory',
      icon: Layers,
      title: isFa ? 'مدیریت موجودی و انبار' : 'Inventory & Stock Control',
      desc: isFa
        ? 'کنترل لحظه‌ای موجودی هر رنگ و سایز، کاردکس گردش کالا، هشدار نقطه سفارش و انبارگردانی سریع با بارکدخوان.'
        : 'Real-time variant stock tracking, low-threshold alerts, barcode inventory audits, and item ledgers.',
      tag: isFa ? 'انبارداری' : 'Warehouse',
    },
    {
      id: 'pos',
      icon: Receipt,
      title: isFa ? 'فروش و صدور فاکتور' : 'POS Checkout & Billing',
      desc: isFa
        ? 'صدور سریع فاکتور فروشگاهی با بارکدخوان، اتصال خودکار به کارتخوان‌های بانکی، ثبت مرجوعی و تعویض سایز.'
        : 'Rapid barcode POS checkout, integrated card terminal payments, size returns, and exchanges.',
      tag: isFa ? 'صندوق فروشگاهی' : 'Fast Checkout',
    },
    {
      id: 'purchases',
      icon: ShoppingCart,
      title: isFa ? 'مدیریت خرید و تأمین' : 'Purchase Orders & Costing',
      desc: isFa
        ? 'ثبت فاکتورهای خرید عمده، محاسبه هزینه‌های جانبی حمل و دوخت (Landed Cost) و اصلاح میانگین قیمت تمام‌شده.'
        : 'Bulk garment purchase orders, landed overhead cost allocation (freight & trims), and vendor billing.',
      tag: isFa ? 'خرید و Landed Cost' : 'Purchasing',
    },
    {
      id: 'customers',
      icon: Users,
      title: isFa ? 'مدیریت مشتریان و حساب‌ها' : 'Customer & Ledger Accounts',
      desc: isFa
        ? 'دفتر معین طرف‌حساب‌ها، سابقه خرید مشتریان، مدیریت حساب‌های دفتری بنکداران و ثبت چک‌های صیادی.'
        : 'Customer accounts, wholesale buyer ledgers, receivables/payables, and Sayad check tracking.',
      tag: isFa ? 'دفتر معین' : 'Customer Ledger',
    },
    {
      id: 'reports',
      icon: PieChart,
      title: isFa ? 'گزارش‌های مدیریتی و سود' : 'Management Reports & Margins',
      desc: isFa
        ? 'مشاهده پرفروش‌ترین رنگ‌ها و مدل‌ها، سود خالص و ناخالص واقعی، رسوب انبار و صورت مالی ماهانه فروشگاه.'
        : 'Best-selling colors, slow-moving items, real net/gross profits, and monthly operating metrics.',
      tag: isFa ? 'تحلیل سود' : 'Analytics',
    },
    {
      id: 'branches',
      icon: Building2,
      title: isFa ? 'مدیریت چند کاربر و شعب' : 'Multi-User & Multi-Branch',
      desc: isFa
        ? 'تعریف نقش‌های مجزا برای صندوقدار، مدیر و انباردار همراه با امکان رصد و انتقال کالا بین شعب فروشگاه.'
        : 'Granular user roles (cashier, manager, auditor) and stock transfers across retail locations.',
      tag: isFa ? 'نقش‌ها و دسترسی' : 'Multi-Store',
    },
    {
      id: 'cloud',
      icon: Cloud,
      title: isFa ? 'امکانات ابری و همگام‌سازی' : 'Cloud Sync & Web Access',
      desc: isFa
        ? 'همگام‌سازی خودکار اطلاعات نسخه دسکتاپ با سرور ابری تنخور Pro جهت مشاهده و مدیریت از راه دور با موبایل و وب.'
        : 'Automated background sync between local desktop and TanKhor Pro cloud for web & mobile access.',
      tag: isFa ? 'تنخور Pro' : 'Cloud Pro',
    },
  ];

  return (
    <section
      id="core-features"
      className="py-20 sm:py-28 bg-neutral-50/60 dark:bg-[#070707] border-t border-neutral-200/80 dark:border-neutral-800/80 relative"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Specified in prompt */}
        <FadeIn className="max-w-3xl mb-14 space-y-3 text-right rtl:text-right ltr:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 text-xs font-caption-mono font-medium shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
            <span>{isFa ? 'امکانات عملیاتی محصول' : 'Production Capabilities'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-tight">
            {isFa
              ? 'ابزارهایی که برای مدیریت حرفه‌ای فروشگاه نیاز دارید'
              : 'Tools Built for Professional Apparel Store Operations'}
          </h2>

          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 font-normal leading-relaxed">
            {isFa
              ? 'مجموعه ابزارهای پیاده‌سازی‌شده در تنخور برای صنف پوشاک، کیف، کفش و اکسسوری در کارتهای منظم و بدون پیچیدگی.'
              : 'Core modules actively implemented in TanKhor, designed specifically for apparel, shoes, and fashion retail.'}
          </p>
        </FadeIn>

        {/* 8 Features Clean Cards Grid */}
        <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <FadeInStaggerItem
                key={item.id}
                className="bg-white dark:bg-[#0f0f0f] rounded-2xl border border-neutral-200/90 dark:border-neutral-800/90 p-5 sm:p-6 space-y-3.5 shadow-sm hover:border-teal-500/50 hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950/40 border border-teal-200/60 dark:border-teal-800/60 text-teal-600 dark:text-teal-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-caption-mono text-[10px] text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-900 px-2.5 py-1 rounded-full border border-neutral-200 dark:border-neutral-800">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-neutral-900 dark:text-white leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal">
                    {item.desc}
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
