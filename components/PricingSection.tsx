'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguageAndTheme } from '@/context/LanguageAndThemeContext';
import { siteContent, ProPackage } from '@/data/content';
import { useDownloadLinks } from '@/hooks/useDownloadLinks';
import {
  Check,
  X,
  Sparkles,
  Calculator,
  Download,
  ArrowUpRight,
  ShieldCheck,
  Laptop,
  Cloud,
  PhoneCall,
  Table,
  ChevronRight,
  Zap,
  Building2,
  HardDrive,
  CheckCircle2,
  Coins,
  Globe,
  Users,
} from 'lucide-react';
import { FadeIn, FadeInStagger, FadeInStaggerItem } from '@/components/ScrollAnimation';

export default function PricingSection() {
  const { language, openDemoModal } = useLanguageAndTheme();
  const downloadLinks = useDownloadLinks();
  const { pricing } = siteContent;

  const isFa = language === 'fa';

  // Selected package for Pro plan (default: 12 months - best value)
  const [selectedPackageId, setSelectedPackageId] = useState<'1m' | '3m' | '6m' | '12m'>('12m');

  const selectedPackage =
    pricing.proPackages.find((pkg: ProPackage) => pkg.id === selectedPackageId) ||
    pricing.proPackages[3];

  // ROI Calculator state
  const [monthlyOrders, setMonthlyOrders] = useState<number>(400);
  const [returnRate, setReturnRate] = useState<number>(18); // 18%
  const avgShippingLoss = 85000; // 85,000 Toman average return shipping & packaging loss per order

  const calculateMonthlySavings = () => {
    const totalReturns = (monthlyOrders * returnRate) / 100;
    const preventedReturns = totalReturns * 0.65; // 65% reduction via size guide
    return Math.round(preventedReturns * avgShippingLoss);
  };

  const monthlySavings = calculateMonthlySavings();

  return (
    <section
      id="pricing"
      className="py-20 sm:py-28 bg-white dark:bg-[#0a0a0a] text-neutral-900 dark:text-neutral-100 border-t border-neutral-200/80 dark:border-neutral-800 relative"
    >
      <div id="pro-version" className="absolute -top-20" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Clean Header & Billing Cycle Selector */}
        <FadeIn className="text-center space-y-6 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-600 dark:text-teal-400 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{isFa ? 'پلن‌ها و تعرفه‌های شفاف تنخور' : 'Transparent Pricing & Plans'}</span>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-tight">
              {isFa
                ? 'پلن مناسب کسب‌وکار پوشاک خود را انتخاب کنید'
                : 'Choose the Right Plan for Your Apparel Business'}
            </h2>

            <p className="text-xs sm:text-sm md:text-base text-neutral-600 dark:text-neutral-400 font-normal leading-relaxed max-w-2xl mx-auto">
              {isFa
                ? 'نرم‌افزار پایه تنخور ۱۰۰٪ رایگان و آفلاین روی سیستم شما اجرا می‌شود؛ پلن Pro قفل همگام‌سازی ابری شعب، پنل وب و دسترسی همزمان پرسنل را باز می‌کند.'
                : 'Tankhor Free runs 100% locally with zero fees; Tankhor Pro unlocks cloud sync across branches, anywhere web access, and team collaboration.'}
            </p>
          </div>

          {/* Centralized Modern Billing Toggle */}
          <div className="pt-2 flex flex-col items-center gap-3">
            <div className="text-[11px] font-caption-mono text-neutral-500 dark:text-neutral-400 font-medium">
              {isFa ? 'دوره اشتراک پلن Pro را انتخاب کنید:' : 'Select Pro Subscription Cycle:'}
            </div>

            <div className="inline-flex p-1.5 rounded-2xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-inner max-w-full overflow-x-auto">
              {pricing.proPackages.map((pkg: ProPackage) => {
                const isSelected = selectedPackageId === pkg.id;
                return (
                  <button
                    key={pkg.id}
                    type="button"
                    onClick={() => setSelectedPackageId(pkg.id)}
                    className={`px-3 sm:px-4 py-2 rounded-xl text-xs font-bold transition-all relative flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
                      isSelected
                        ? 'bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white shadow-md'
                        : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                    }`}
                  >
                    <span>{pkg.name[language]}</span>
                    {pkg.discountBadge && (
                      <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-teal-500/10 dark:bg-teal-500/20 text-teal-700 dark:text-teal-300">
                        {pkg.discountBadge[language]}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </FadeIn>

        {/* 2 Main Pricing Cards Grid (Free vs Pro) */}
        <FadeInStagger className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* CARD 1: Free Plan (Local & Offline) */}
          <FadeInStaggerItem className="lg:col-span-6 rounded-3xl p-6 sm:p-9 flex flex-col justify-between bg-neutral-50/80 dark:bg-neutral-950/60 border border-neutral-200/90 dark:border-neutral-800/90 transition-all hover:border-neutral-300 dark:hover:border-neutral-700 relative">
            <div className="space-y-6">
              {/* Card Header */}
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200">
                      <HardDrive className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white">
                      {isFa ? 'آفلاین(رایگان)' : 'Offline (Free)'}
                    </h3>
                  </div>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">
                    {pricing.freePlan.targetAudience[language]}
                  </p>
                </div>

                <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 shrink-0">
                  {pricing.freePlan.badge[language]}
                </span>
              </div>

              {/* Price Block */}
              <div className="p-5 rounded-2xl bg-white dark:bg-neutral-900/80 border border-neutral-200/80 dark:border-neutral-800/80 space-y-1.5">
                <div className="flex items-baseline gap-2">
                  <span className="font-caption-mono text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white">
                    ۰
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-neutral-500 dark:text-neutral-400">
                    {isFa ? 'تومان (رایگان همیشگی بدون محدودیت زمانی)' : 'Toman (Forever Free, No Expiry)'}
                  </span>
                </div>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal">
                  {pricing.freePlan.shortDescription[language]}
                </p>
              </div>

              {/* What is Included (Checklist) */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold text-neutral-800 dark:text-neutral-200 uppercase tracking-wider flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>{isFa ? 'امکانات نسخه رایگان و آفلاین:' : 'Included in Free Plan:'}</span>
                </h4>

                <ul className="space-y-2.5 text-xs text-neutral-700 dark:text-neutral-300">
                  {pricing.freePlan.features.slice(0, 7).map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                      <div className="w-4 h-4 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/80 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <span>{feat[language]}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Offline Highlight Box */}
              <div className="p-3.5 rounded-xl bg-neutral-100 dark:bg-neutral-900/70 border border-neutral-200/70 dark:border-neutral-800/70 text-[11px] text-neutral-600 dark:text-neutral-400 leading-relaxed flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0" />
                <span>
                  {isFa
                    ? 'پایگاه داده روی کامپیوتر خودتان ذخیره می‌شود و هیچ نیازی به اینترنت یا هزینه اشتراک ماهانه ندارد.'
                    : 'Data is stored strictly on your local disk with zero internet dependency or subscription.'}
                </span>
              </div>
            </div>

            {/* Free Plan Action */}
            <div className="pt-6 border-t border-neutral-200/80 dark:border-neutral-800/80 mt-6 space-y-3">
              <a
                href={downloadLinks.windows_setup}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-neutral-900 hover:bg-neutral-800 dark:bg-white dark:hover:bg-neutral-200 text-white dark:text-neutral-950 font-bold text-xs transition-all flex items-center justify-center gap-2 shadow-md active:scale-[0.98]"
              >
                <Download className="w-4 h-4 text-teal-400 dark:text-teal-600" />
                <span>{isFa ? 'دانلود رایگان نسخه ویندوز' : 'Download Windows Free'}</span>
              </a>

              <div className="flex items-center justify-center gap-2 text-[11px] text-neutral-500 dark:text-neutral-400">
                <Link href="#free-version" className="hover:text-teal-600 dark:hover:text-teal-400 underline underline-offset-2">
                  {isFa ? 'مشاهده لینک‌های مک و اندروید' : 'View macOS & Android links'}
                </Link>
                <span>•</span>
                <span>{isFa ? 'بدون نیاز به کارت بانکی' : 'No credit card'}</span>
              </div>
            </div>
          </FadeInStaggerItem>

          {/* CARD 2: Pro Plan (Cloud & Multi-Store Sync) */}
          <FadeInStaggerItem className="lg:col-span-6 rounded-3xl p-6 sm:p-9 flex flex-col justify-between bg-neutral-950 text-white border-2 border-teal-500/50 shadow-2xl shadow-teal-950/30 relative ring-1 ring-teal-500/30">
            {/* Top Recommended Tag */}
            <div className="absolute -top-3.5 right-6 sm:right-8 bg-gradient-to-r from-teal-500 to-emerald-500 text-neutral-950 text-[11px] font-extrabold px-3 py-0.5 rounded-full shadow-md flex items-center gap-1.5">
              <Sparkles className="w-3 h-3" />
              <span>{isFa ? 'پیشنهادی برای شعب و آنلاین‌شاپ‌ها' : 'Recommended for Multi-Branch & Online'}</span>
            </div>

            <div className="space-y-6">
              {/* Header Info */}
              <div className="flex items-start justify-between gap-4 pt-1">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-teal-500/20 text-teal-400 border border-teal-500/30">
                      <Cloud className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {isFa ? 'ابری (پرو)' : 'Cloud (Pro)'}
                    </h3>
                  </div>
                  <p className="text-xs text-teal-300 font-medium">
                    {pricing.proPlan.targetAudience[language]}
                  </p>
                </div>

                <div className="flex flex-col items-end gap-1.5 shrink-0">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-400/20 text-amber-300 border border-amber-400/40">
                    {isFa ? '۱۴ روز تست رایگان' : '14-Day Free Trial'}
                  </span>
                </div>
              </div>

              {/* Dynamic Price Display */}
              <div className="p-5 rounded-2xl bg-neutral-900/90 border border-teal-500/30 space-y-3">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div className="space-y-0.5">
                    <div className="text-[11px] text-neutral-400 font-caption-mono">
                      {isFa ? `مبلغ کل دوره (${selectedPackage.name[language]}):` : `Total for ${selectedPackage.name[language]}:`}
                    </div>
                    <div className="font-caption-mono text-3xl sm:text-4xl font-extrabold text-white flex items-baseline gap-1.5">
                      <span className="font-en">{selectedPackage.price.toLocaleString()}</span>
                      <span className="text-xs font-semibold text-neutral-400">
                        {isFa ? 'تومان' : 'Toman'}
                      </span>
                    </div>
                  </div>

                  <div className="text-left rtl:text-left ltr:text-right">
                    <div className="text-[10px] text-neutral-400 font-caption-mono">
                      {isFa ? 'معادل هزینه ماهانه:' : 'Monthly Equivalent:'}
                    </div>
                    <div className="text-sm sm:text-base font-bold text-teal-300 font-caption-mono font-en bg-teal-950/80 px-2.5 py-1 rounded-lg border border-teal-800/80 inline-block mt-0.5">
                      {Math.round(selectedPackage.monthlyEquivalent).toLocaleString()} {isFa ? 'تومان / ماه' : 'T/mo'}
                    </div>
                  </div>
                </div>

                <p className="text-xs text-neutral-300 leading-relaxed font-normal pt-1 border-t border-neutral-800/80">
                  {pricing.proPlan.shortDescription[language]}
                </p>
              </div>

              {/* Pro Exclusive Superpowers */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold text-teal-300 uppercase tracking-wider flex items-center gap-2">
                  <Zap className="w-4 h-4 text-teal-400" />
                  <span>{isFa ? 'تمام امکانات رایگان به همراه قابلیت‌های ابری Pro:' : 'All Free Features Plus Pro Superpowers:'}</span>
                </h4>

                <ul className="space-y-2.5 text-xs text-neutral-200">
                  <li className="flex items-start gap-2.5 leading-relaxed">
                    <div className="w-4 h-4 rounded-full bg-teal-950 border border-teal-500/40 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-teal-300" />
                    </div>
                    <span>
                      <strong className="text-white font-semibold">دسترسی تحت وب (my.tankhor.com):</strong> ورود با موبایل، تبلت و لپ‌تاپ از هر نقطه‌ای بدون نیاز به نصب برنامه.
                    </span>
                  </li>

                  <li className="flex items-start gap-2.5 leading-relaxed">
                    <div className="w-4 h-4 rounded-full bg-teal-950 border border-teal-500/40 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-teal-300" />
                    </div>
                    <span>
                      <strong className="text-white font-semibold">همگام‌سازی ابری زنده بین شعب:</strong> انتقال لحظه‌ای کالا، بررسی کاردکس و موجودی انبار مرکزی و فروشگاه‌ها.
                    </span>
                  </li>

                  <li className="flex items-start gap-2.5 leading-relaxed">
                    <div className="w-4 h-4 rounded-full bg-teal-950 border border-teal-500/40 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-teal-300" />
                    </div>
                    <span>
                      <strong className="text-white font-semibold">کاربران نامحدود با سطح دسترسی (RBAC):</strong> تعریف صندوقدار، انباردار، مدیر و حسابدار با دسترسی اختصاصی.
                    </span>
                  </li>

                  <li className="flex items-start gap-2.5 leading-relaxed">
                    <div className="w-4 h-4 rounded-full bg-teal-950 border border-teal-500/40 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-teal-300" />
                    </div>
                    <span>
                      <strong className="text-white font-semibold">پشتیبان‌گیری ابری روزانه:</strong> بیمه کامل و خودکار اطلاعات در برابر سوختن هارد، سرقت یا خطای انسانی.
                    </span>
                  </li>

                  <li className="flex items-start gap-2.5 leading-relaxed">
                    <div className="w-4 h-4 rounded-full bg-teal-950 border border-teal-500/40 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-teal-300" />
                    </div>
                    <span>
                      <strong className="text-white font-semibold">اتصال ووکامرس، چک صیادی و سپیدار:</strong> صدور فاکتور مودیان و هماهنگی آنلاین‌شاپ با انبار.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Pro Plan CTA */}
            <div className="pt-6 border-t border-neutral-800/90 mt-6 space-y-3">
              <a
                href="https://my.tankhor.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-teal-400 hover:bg-teal-300 text-neutral-950 font-extrabold text-xs transition-all flex items-center justify-center gap-2 shadow-lg shadow-teal-950/40 active:scale-[0.98]"
              >
                <span>{isFa ? 'شروع ۱۴ روز تست رایگان بدون نیاز به پرداخت' : 'Start 14-Day Free Trial'}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <div className="flex items-center justify-center gap-2 text-[11px] text-neutral-400">
                <span>{isFa ? 'فعال‌سازی آنی با درگاه زیبال' : 'Instant Zibal Gateway'}</span>
                <span>•</span>
                <span>{isFa ? 'انتقال خودکار اطلاعات بدون از دست رفتن دیتا' : 'Zero Data Loss Migration'}</span>
              </div>
            </div>
          </FadeInStaggerItem>

        </FadeInStagger>

        {/* Enterprise Callout Banner */}
        <FadeIn delay={0.15}>
          <div className="rounded-2xl p-6 sm:p-8 bg-neutral-900/70 border border-neutral-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-md bg-neutral-800 border border-neutral-700 text-teal-400 text-[11px] font-bold">
                <Building2 className="w-3.5 h-3.5" />
                <span>{isFa ? 'شعب زنجیره‌ای، برندها و تولیدکنندگان بزرگ پوشاک' : 'Enterprise Chains & Apparel Brands'}</span>
              </div>
              <h4 className="text-base sm:text-lg font-bold text-white">
                {isFa ? 'نیاز به زیرساخت اختصاصی یا اتصال به ERP اختصاصی دارید؟' : 'Need dedicated cloud infrastructure or custom ERP integrations?'}
              </h4>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-normal">
                {isFa
                  ? 'برای شبکه‌های فروشگاهی بیش از ۵ شعبه، کارخانجات تولید پوشاک و برندها؛ سرور ابری اختصاصی، سفارشی‌سازی فرمول تولید (BOM) و پشتیبانی VIP حضوری ارائه می‌شود.'
                  : 'For chains with 5+ branches, garment manufacturers, and retail fashion brands, we offer private servers, custom BOM pipelines, and on-site deployment.'}
              </p>
            </div>

            <button
              type="button"
              onClick={openDemoModal}
              className="shrink-0 px-5 py-3 rounded-xl border border-teal-500/40 bg-teal-500/10 hover:bg-teal-500/20 text-teal-300 font-bold text-xs transition-colors flex items-center gap-2 cursor-pointer"
            >
              <span>{isFa ? 'درخواست دمو و مشاوره سازمانی' : 'Request Enterprise Demo'}</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </FadeIn>

        {/* 2-Column Comparison Table (جدول مقایسه جامع) */}
        <FadeIn delay={0.2} className="space-y-6">
          <div className="text-right rtl:text-right ltr:text-left space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 text-xs font-caption-mono">
              <Table className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
              <span>{isFa ? 'جدول مقایسه جامع امکانات' : 'Full Feature Matrix'}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white">
              {isFa ? 'مقایسه رو در روی نسخه آفلاین(رایگان) و نسخه ابری (پرو)' : 'Side-by-Side Comparison: Offline (Free) vs. Cloud (Pro)'}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
              {isFa
                ? 'هر دو نسخه دارای تمامی امکانات سایزبندی، فروش، انبارداری و حسابداری هستند؛ تفاوت اصلی در محل ذخیره داده‌ها و دسترسی تحت وب است.'
                : 'Both editions include full apparel sizing, POS, warehouse, and accounting modules; the core difference is cloud sync and browser access.'}
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-neutral-200/90 dark:border-neutral-800/90 bg-white dark:bg-[#0c0c0c] shadow-sm">
            <table className="w-full text-xs text-right rtl:text-right ltr:text-left border-collapse">
              <thead>
                <tr className="border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50/80 dark:bg-neutral-900/60 font-caption-mono">
                  <th className="p-4 sm:p-5 font-bold text-neutral-900 dark:text-white w-2/5">
                    {isFa ? 'قابلیت و ماژول تخصصی' : 'Capability & Module'}
                  </th>
                  <th className="p-4 sm:p-5 font-bold text-neutral-900 dark:text-white w-3/10 border-x border-neutral-200 dark:border-neutral-800">
                    <div className="flex items-center gap-2">
                      <HardDrive className="w-4 h-4 text-neutral-600 dark:text-neutral-400" />
                      <span>{isFa ? 'آفلاین(رایگان)' : 'Offline (Free)'}</span>
                    </div>
                  </th>
                  <th className="p-4 sm:p-5 font-bold text-teal-600 dark:text-teal-400 w-3/10 bg-teal-50/40 dark:bg-teal-950/20">
                    <div className="flex items-center gap-2">
                      <Cloud className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                      <span>{isFa ? 'ابری (پرو)' : 'Cloud (Pro)'}</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200/70 dark:divide-neutral-800/70">
                {pricing.comparisonTable.map((row, idx) => {
                  const isFreeNo = row.free[language] === 'ندارد' || row.free[language] === 'No';
                  return (
                    <tr
                      key={idx}
                      className="hover:bg-neutral-50/60 dark:hover:bg-neutral-900/30 transition-colors"
                    >
                      <td className="p-4 sm:p-5 font-medium text-neutral-900 dark:text-white">
                        {row.feature[language]}
                      </td>
                      <td className="p-4 sm:p-5 text-neutral-700 dark:text-neutral-300 border-x border-neutral-200 dark:border-neutral-800">
                        {isFreeNo ? (
                          <span className="inline-flex items-center gap-1.5 text-neutral-400 dark:text-neutral-500 font-normal">
                            <X className="w-3.5 h-3.5 text-neutral-400" />
                            <span>{row.free[language]}</span>
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 text-neutral-800 dark:text-neutral-200 font-medium">
                            <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                            <span>{row.free[language]}</span>
                          </span>
                        )}
                      </td>
                      <td className="p-4 sm:p-5 text-neutral-900 dark:text-white bg-teal-50/20 dark:bg-teal-950/10 font-medium">
                        <span className="inline-flex items-center gap-1.5 text-teal-700 dark:text-teal-300 font-semibold">
                          <Check className="w-3.5 h-3.5 text-teal-500 shrink-0" />
                          <span>{row.pro[language]}</span>
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </FadeIn>

        {/* Interactive ROI Savings Calculator Box */}
        <FadeIn delay={0.25} className="bg-neutral-50 dark:bg-neutral-900/50 p-6 sm:p-8 rounded-2xl border border-neutral-200/80 dark:border-neutral-800/80 max-w-4xl mx-auto space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-600 dark:text-teal-400 shadow-sm">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white">
                {isFa ? 'محاسبه‌گر هوشمند بازگشت سرمایه و صرفه‌جویی مالی' : 'Tankhor ROI & Savings Calculator'}
              </h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">
                {isFa
                  ? 'برآورد میزان صرفه‌جویی ناشی از کاهش خطاهای تعویض سایز و کرایه پستی مرجوعی'
                  : 'Estimate your monthly savings from reduced size exchanges & return logistics'}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-2">
            <div className="space-y-5">
              {/* Slider 1: Monthly Orders */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-semibold text-neutral-700 dark:text-neutral-300 font-caption-mono">
                  <span>{isFa ? 'تعداد سفارشات ماهانه فروشگاه:' : 'Monthly Orders Volume:'}</span>
                  <span className="text-teal-600 dark:text-teal-400 font-bold font-en text-sm">{monthlyOrders.toLocaleString()} سفارش</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="3000"
                  step="50"
                  value={monthlyOrders}
                  onChange={(e) => setMonthlyOrders(Number(e.target.value))}
                  className="w-full accent-teal-500 bg-neutral-200 dark:bg-neutral-800 h-2 rounded-lg cursor-pointer"
                />
              </div>

              {/* Slider 2: Current Return Rate */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-semibold text-neutral-700 dark:text-neutral-300 font-caption-mono">
                  <span>{isFa ? 'درصد فعلی مرجوعی سایز:' : 'Current Size Return Rate:'}</span>
                  <span className="text-amber-600 dark:text-amber-400 font-bold font-en text-sm">{returnRate}%</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="45"
                  step="1"
                  value={returnRate}
                  onChange={(e) => setReturnRate(Number(e.target.value))}
                  className="w-full accent-teal-500 bg-neutral-200 dark:bg-neutral-800 h-2 rounded-lg cursor-pointer"
                />
              </div>
            </div>

            {/* Savings Result */}
            <div className="bg-white dark:bg-neutral-950 p-6 rounded-2xl border border-teal-500/40 text-center space-y-2 shadow-sm">
              <span className="text-xs text-neutral-500 dark:text-neutral-400 font-medium block">
                {isFa ? 'تخمین صرفه‌جویی خالص ماهانه شما:' : 'Estimated Monthly Net Savings:'}
              </span>

              <div className="font-caption-mono text-2xl sm:text-3xl font-extrabold text-teal-600 dark:text-teal-300 font-en">
                {monthlySavings.toLocaleString()} {isFa ? 'تومان' : 'Toman'}
              </div>

              <p className="text-[11px] text-neutral-500 dark:text-neutral-400 leading-relaxed">
                {isFa
                  ? 'بر اساس کاهش ۶۵ درصدی خطاهای مرجوعی با جدول راهنمای سایز هوشمند تنخور'
                  : 'Based on 65% size-fitting error prevention via Tankhor Size Engine'}
              </p>
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
