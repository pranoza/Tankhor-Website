'use client';

import React, { useState } from 'react';
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
} from 'lucide-react';
import { FadeIn, FadeInStagger, FadeInStaggerItem } from '@/components/ScrollAnimation';

export default function PricingSection() {
  const { language, openDemoModal, openMacModal } = useLanguageAndTheme();
  const downloadLinks = useDownloadLinks();
  const { pricing } = siteContent;

  // Selected package for Pro plan (default: 3 months - popular)
  const [selectedPackageId, setSelectedPackageId] = useState<'1m' | '3m' | '6m' | '12m'>('3m');

  const selectedPackage =
    pricing.proPackages.find((pkg: ProPackage) => pkg.id === selectedPackageId) ||
    pricing.proPackages[1];

  // ROI Calculator state
  const [monthlyOrders, setMonthlyOrders] = useState<number>(300);
  const [returnRate, setReturnRate] = useState<number>(20); // 20%
  const avgShippingLoss = 80000; // 80,000 Toman average return loss per order

  const calculateMonthlySavings = () => {
    const totalReturns = (monthlyOrders * returnRate) / 100;
    const preventedReturns = totalReturns * 0.65; // 65% reduction
    return Math.round(preventedReturns * avgShippingLoss);
  };

  const monthlySavings = calculateMonthlySavings();

  return (
    <section
      id="pricing"
      className="py-20 sm:py-28 bg-white dark:bg-[#0a0a0a] text-neutral-900 dark:text-neutral-100 border-t border-neutral-200/80 dark:border-neutral-800 relative"
    >
      <div id="pro-version" className="absolute -top-20" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <FadeIn className="max-w-3xl mb-14 space-y-3 text-right rtl:text-right ltr:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 text-xs font-caption-mono">
            <Sparkles className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
            <span>{language === 'fa' ? 'پلن‌ها و تعرفه‌ها' : 'Plans & Pricing'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
            {pricing.title[language]}
          </h2>

          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 font-normal leading-relaxed">
            {pricing.subtitle[language]}
          </p>
        </FadeIn>

        {/* 2 Main Cards Grid (Free Plan & Pro Plan) */}
        <FadeInStagger className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-20">
          
          {/* CARD 1: Free Plan (Offline & Local) */}
          <FadeInStaggerItem className="lg:col-span-6 rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-200 bg-neutral-50/90 dark:bg-neutral-900/40 border border-neutral-200/90 dark:border-neutral-800/90 relative">
            <div className="space-y-6">
              {/* Header Info */}
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Laptop className="w-5 h-5 text-neutral-700 dark:text-neutral-300" />
                    <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
                      {pricing.freePlan.title[language]}
                    </h3>
                  </div>
                  <p className="text-xs font-medium text-teal-600 dark:text-teal-400">
                    {pricing.freePlan.targetAudience[language]}
                  </p>
                </div>

                <span className="font-caption-mono px-2.5 py-0.5 rounded text-[11px] font-bold tracking-wider uppercase bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 shrink-0">
                  {pricing.freePlan.badge[language]}
                </span>
              </div>

              {/* Price Banner */}
              <div className="p-4 rounded-xl bg-white dark:bg-neutral-900/80 border border-neutral-200/80 dark:border-neutral-800">
                <div className="font-caption-mono text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white flex items-baseline gap-2">
                  <span>۰</span>
                  <span className="text-base font-semibold text-neutral-500 dark:text-neutral-400">
                    {language === 'fa' ? 'تومان (رایگان همیشگی)' : 'Toman (Free Forever)'}
                  </span>
                </div>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-2 leading-relaxed">
                  {pricing.freePlan.shortDescription[language]}
                </p>
              </div>

              {/* Positive Features */}
              <div className="space-y-2.5 pt-2">
                <div className="text-xs font-bold text-neutral-800 dark:text-neutral-200 pb-1 border-b border-neutral-200/60 dark:border-neutral-800/60 flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>{language === 'fa' ? 'امکانات نسخه رایگان و آفلاین:' : 'Free & Offline Features:'}</span>
                </div>
                <ul className="space-y-2.5 text-xs text-neutral-700 dark:text-neutral-300">
                  {pricing.freePlan.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                      <div className="w-4 h-4 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/80 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <span>{feat[language]}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Negative / Excluded Features */}
              <div className="space-y-2.5 pt-4 border-t border-neutral-200/60 dark:border-neutral-800/60">
                <div className="text-xs font-bold text-neutral-500 dark:text-neutral-400 pb-1 flex items-center gap-2">
                  <X className="w-4 h-4 text-neutral-400 dark:text-neutral-500" />
                  <span>{language === 'fa' ? 'محدود به استفاده محلی (غیر ابری):' : 'Local Only (Non-Cloud):'}</span>
                </div>
                <ul className="space-y-2 text-xs text-neutral-500 dark:text-neutral-400">
                  {pricing.freePlan.negativeFeatures.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                      <div className="w-4 h-4 rounded-full bg-neutral-200/70 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 flex items-center justify-center shrink-0 mt-0.5">
                        <X className="w-2.5 h-2.5 text-neutral-500 dark:text-neutral-400" />
                      </div>
                      <span className="line-through decoration-neutral-400 dark:decoration-neutral-600">{feat[language]}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Free Plan CTA */}
            <div className="pt-6 border-t border-neutral-200/80 dark:border-neutral-800/80 mt-6 space-y-2">
              <a
                href={downloadLinks.windows_setup}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-lg bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-bold text-xs hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <Download className="w-4 h-4" />
                <span>{pricing.freePlan.ctaText[language]}</span>
              </a>
              <div className="flex items-center justify-center gap-3 text-[11px] text-neutral-500 dark:text-neutral-400 pt-1">
                <span>{language === 'fa' ? 'نسخه‌ها:' : 'Platforms:'}</span>
                <a
                  href={downloadLinks.windows_setup}
                  className="hover:text-teal-600 dark:hover:text-teal-400 underline underline-offset-2"
                >
                  {language === 'fa' ? 'ویندوز' : 'Windows'}
                </a>
                <span>•</span>
                <button
                  onClick={openMacModal}
                  className="hover:text-teal-600 dark:hover:text-teal-400 underline underline-offset-2"
                >
                  {language === 'fa' ? 'مک' : 'macOS'}
                </button>
                <span>•</span>
                <a
                  href={downloadLinks.android_setup}
                  className="hover:text-teal-600 dark:hover:text-teal-400 underline underline-offset-2"
                >
                  {language === 'fa' ? 'اندروید' : 'Android'}
                </a>
              </div>
            </div>
          </FadeInStaggerItem>

          {/* CARD 2: Pro Plan (Cloud & Real-time Sync) */}
          <FadeInStaggerItem className="lg:col-span-6 rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-200 bg-neutral-950 text-white border border-teal-500/40 shadow-2xl relative ring-1 ring-teal-500/20">
            <div className="space-y-6">
              {/* Header Info */}
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Cloud className="w-5 h-5 text-teal-400" />
                    <h3 className="text-xl font-bold text-white">
                      {pricing.proPlan.title[language]}
                    </h3>
                  </div>
                  <p className="text-xs font-medium text-teal-300">
                    {pricing.proPlan.targetAudience[language]}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-end sm:items-center gap-1.5 shrink-0">
                  <span className="font-caption-mono px-2.5 py-0.5 rounded text-[11px] font-bold tracking-wider uppercase bg-teal-500/20 text-teal-300 border border-teal-500/40">
                    {pricing.proPlan.badge[language]}
                  </span>
                  <span className="font-caption-mono px-2.5 py-0.5 rounded text-[11px] font-bold bg-amber-400/20 text-amber-300 border border-amber-400/40 animate-pulse">
                    {language === 'fa' ? '۱۴ روز تست رایگان' : '14-Day Free Trial'}
                  </span>
                </div>
              </div>

              {/* Package Period Selector (Zibal Gateway Packages) */}
              <div className="space-y-2">
                <div className="text-[11px] font-caption-mono text-neutral-400">
                  {language === 'fa' ? 'انتخاب دوره اشتراک (درگاه زیبال):' : 'Select Subscription Period (Zibal Gateway):'}
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {pricing.proPackages.map((pkg: ProPackage) => {
                    const isSelected = selectedPackageId === pkg.id;
                    return (
                      <button
                        key={pkg.id}
                        onClick={() => setSelectedPackageId(pkg.id)}
                        className={`p-2.5 rounded-lg border text-right rtl:text-right ltr:text-left transition-all relative ${
                          isSelected
                            ? 'bg-neutral-800 border-teal-400 text-white shadow-sm ring-1 ring-teal-400/40'
                            : 'bg-neutral-900/80 border-neutral-800 text-neutral-300 hover:border-neutral-700'
                        }`}
                      >
                        {pkg.tag && (
                          <div className={`text-[9px] font-caption-mono font-bold mb-1 ${isSelected ? 'text-teal-300' : 'text-neutral-400'}`}>
                            {pkg.tag[language]}
                          </div>
                        )}
                        <div className="text-xs font-bold">{pkg.name[language]}</div>
                        {pkg.discountBadge && (
                          <div className="text-[10px] text-teal-400 font-semibold mt-0.5">
                            {pkg.discountBadge[language]}
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Dynamic Price Display */}
              <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800/90 space-y-2">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div className="font-caption-mono text-2xl sm:text-3xl font-extrabold text-white flex items-baseline gap-1.5 font-en">
                    <span>{selectedPackage.price.toLocaleString()}</span>
                    <span className="text-xs font-semibold text-neutral-400">
                      {language === 'fa' ? 'تومان' : 'Toman'}
                    </span>
                  </div>

                  <div className="text-xs font-caption-mono text-teal-400 bg-teal-950/60 px-2.5 py-1 rounded border border-teal-800/60">
                    <span>{language === 'fa' ? 'معادل ماهانه: ' : 'Monthly equivalent: '}</span>
                    <span className="font-bold font-en">{Math.round(selectedPackage.monthlyEquivalent).toLocaleString()}</span>
                    <span> {language === 'fa' ? 'ت' : 'T'}</span>
                  </div>
                </div>

                <p className="text-xs text-neutral-300 leading-relaxed">
                  {pricing.proPlan.shortDescription[language]}
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-2.5 pt-2">
                <div className="text-xs font-bold text-neutral-200 pb-1 border-b border-neutral-800 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-teal-400" />
                  <span>{language === 'fa' ? 'ویژگی‌ها و امکانات انحصاری پلن Pro:' : 'Exclusive Pro Features:'}</span>
                </div>
                <ul className="space-y-2.5 text-xs text-neutral-200">
                  {pricing.proPlan.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                      <div className="w-4 h-4 rounded-full bg-teal-950/80 border border-teal-500/40 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-teal-300" />
                      </div>
                      <span className={idx === 0 ? 'font-semibold text-white' : ''}>{feat[language]}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Pro Plan CTA */}
            <div className="pt-6 border-t border-neutral-800 mt-6 space-y-2.5">
              <a
                href="https://my.tankhor.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-lg bg-teal-400 hover:bg-teal-300 text-neutral-950 font-bold text-xs transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <span>{pricing.proPlan.trialCtaText?.[language] || (language === 'fa' ? 'شروع تست رایگان ۱۴ روزه پلن Pro' : 'Start 14-Day Free Trial')}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href="https://my.tankhor.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-lg bg-neutral-900/90 hover:bg-neutral-800 text-teal-300 border border-teal-500/30 font-semibold text-xs transition-all flex items-center justify-center gap-2"
              >
                <span>{pricing.proPlan.ctaText[language]} ({selectedPackage.name[language]})</span>
                <ChevronRight className="w-3.5 h-3.5 rtl:rotate-180" />
              </a>
              <p className="text-[11px] text-center text-neutral-400 pt-1">
                {language === 'fa'
                  ? '۱۴ روز تست کامل بدون نیاز به کارت بانکی • امکان فعال‌سازی آنی اشتراک با درگاه زیبال'
                  : '14-day full free trial with no credit card required • Instant automated Zibal activation'}
              </p>
            </div>
          </FadeInStaggerItem>

        </FadeInStagger>

        {/* 2-Column Comparison Table (جدول مقایسه دو ستونه) */}
        <FadeIn delay={0.15} className="mb-20 space-y-6">
          <div className="text-right rtl:text-right ltr:text-left space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 text-xs font-caption-mono">
              <Table className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
              <span>{language === 'fa' ? 'جدول مقایسه جامع' : 'Full Feature Matrix'}</span>
            </div>
            <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">
              {language === 'fa' ? 'مقایسه رو در روی نسخه رایگان (آفلاین) و حرفه‌ای (Pro ابری)' : 'Side-by-Side Comparison: Free vs. Cloud Pro'}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
              {language === 'fa'
                ? 'هر دو نسخه دارای تمامی امکانات سایزبندی، فروش، انبارداری و حسابداری هستند؛ تفاوت اصلی در اتصال ابری و دسترسی اینترنتی است.'
                : 'Both editions include full apparel sizing, POS, warehouse, and accounting modules; the difference is cloud sync and multi-location access.'}
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-neutral-200/90 dark:border-neutral-800/90 bg-white dark:bg-[#0c0c0c] shadow-sm">
            <table className="w-full text-xs text-right rtl:text-right ltr:text-left border-collapse">
              <thead>
                <tr className="border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50/80 dark:bg-neutral-900/60 font-caption-mono">
                  <th className="p-4 sm:p-5 font-bold text-neutral-900 dark:text-white w-1/3">
                    {language === 'fa' ? 'قابلیت و ویژگی' : 'Feature & Capability'}
                  </th>
                  <th className="p-4 sm:p-5 font-bold text-neutral-900 dark:text-white w-1/3 border-x border-neutral-200 dark:border-neutral-800">
                    <div className="flex items-center gap-2">
                      <Laptop className="w-4 h-4 text-neutral-600 dark:text-neutral-400" />
                      <span>{language === 'fa' ? 'نسخه رایگان (آفلاین)' : 'Free Plan (Offline)'}</span>
                    </div>
                  </th>
                  <th className="p-4 sm:p-5 font-bold text-teal-600 dark:text-teal-400 w-1/3 bg-teal-50/30 dark:bg-teal-950/20">
                    <div className="flex items-center gap-2">
                      <Cloud className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                      <span>{language === 'fa' ? 'نسخه حرفه‌ای (Pro ابری)' : 'Pro Plan (Cloud Pro)'}</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200/70 dark:divide-neutral-800/70">
                {pricing.comparisonTable.map((row, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-neutral-50/60 dark:hover:bg-neutral-900/30 transition-colors"
                  >
                    <td className="p-4 sm:p-5 font-semibold text-neutral-900 dark:text-white">
                      {row.feature[language]}
                    </td>
                    <td className="p-4 sm:p-5 text-neutral-700 dark:text-neutral-300 border-x border-neutral-200 dark:border-neutral-800">
                      {row.free[language] === 'ندارد' || row.free[language] === 'No' ? (
                        <span className="inline-flex items-center gap-1.5 text-neutral-400 dark:text-neutral-500 font-medium">
                          <X className="w-3.5 h-3.5 text-neutral-400" />
                          <span>{row.free[language]}</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 text-neutral-800 dark:text-neutral-200">
                          <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                          <span>{row.free[language]}</span>
                        </span>
                      )}
                    </td>
                    <td className="p-4 sm:p-5 text-neutral-900 dark:text-white bg-teal-50/20 dark:bg-teal-950/10 font-medium">
                      <span className="inline-flex items-center gap-1.5 text-teal-700 dark:text-teal-300">
                        <Check className="w-3.5 h-3.5 text-teal-500 shrink-0" />
                        <span>{row.pro[language]}</span>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Enterprise Callout Strip */}
          <div className="p-5 sm:p-6 rounded-xl bg-neutral-50 dark:bg-neutral-900/40 border border-neutral-200 dark:border-neutral-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-neutral-900 dark:text-white flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                <span>{pricing.enterpriseCallout.title[language]}</span>
              </h4>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {pricing.enterpriseCallout.description[language]}
              </p>
            </div>
            <button
              onClick={openDemoModal}
              className="shrink-0 px-4 py-2.5 rounded-lg border border-neutral-300 dark:border-neutral-700 text-xs font-semibold text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors flex items-center gap-2"
            >
              <span>{pricing.enterpriseCallout.ctaText[language]}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </FadeIn>

        {/* Interactive ROI Savings Calculator Box */}
        <FadeIn delay={0.2} className="bg-neutral-50 dark:bg-neutral-900/40 p-6 sm:p-8 rounded-xl border border-neutral-200/80 dark:border-neutral-800/80 max-w-4xl mx-auto space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-md bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 flex items-center justify-center text-teal-600 dark:text-teal-400 shadow-sm">
              <Calculator className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-neutral-900 dark:text-white">
                {language === 'fa' ? 'محاسبه‌گر میزان صرفه‌جویی مالی با تنخور' : 'Tankhor ROI & Savings Calculator'}
              </h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">
                {language === 'fa'
                  ? 'تخمین میزان کاهش هزینه‌های مرجوعی و خسارت تعویض سایز در ماه'
                  : 'Estimate your monthly savings from reduced size exchanges & return logistics'}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              {/* Slider 1: Monthly Orders */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-semibold text-neutral-700 dark:text-neutral-300 font-caption-mono">
                  <span>{language === 'fa' ? 'تعداد سفارشات ماهانه شما:' : 'Monthly Orders Volume:'}</span>
                  <span className="text-teal-600 dark:text-teal-400 font-bold font-en">{monthlyOrders.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="3000"
                  step="50"
                  value={monthlyOrders}
                  onChange={(e) => setMonthlyOrders(Number(e.target.value))}
                  className="w-full accent-teal-500 bg-neutral-200 dark:bg-neutral-800 h-2 rounded cursor-pointer"
                />
              </div>

              {/* Slider 2: Current Return Rate */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-semibold text-neutral-700 dark:text-neutral-300 font-caption-mono">
                  <span>{language === 'fa' ? 'درصد فعلی مرجوعی سایز شما:' : 'Current Size Return Rate:'}</span>
                  <span className="text-amber-600 dark:text-amber-400 font-bold font-en">{returnRate}%</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="45"
                  step="1"
                  value={returnRate}
                  onChange={(e) => setReturnRate(Number(e.target.value))}
                  className="w-full accent-teal-500 bg-neutral-200 dark:bg-neutral-800 h-2 rounded cursor-pointer"
                />
              </div>
            </div>

            {/* Savings Result */}
            <div className="bg-white dark:bg-[#0a0a0a] p-5 rounded-lg border border-teal-500/40 text-center space-y-2">
              <span className="text-xs text-neutral-500 dark:text-neutral-400 font-medium block">
                {language === 'fa' ? 'تخمین صرفه‌جویی خالص ماهانه شما:' : 'Estimated Monthly Net Savings:'}
              </span>

              <div className="font-caption-mono text-2xl sm:text-3xl font-extrabold text-teal-600 dark:text-teal-300 font-en">
                {monthlySavings.toLocaleString()} {language === 'fa' ? 'تومان' : 'Toman'}
              </div>

              <p className="text-[11px] text-neutral-500 dark:text-neutral-400">
                {language === 'fa'
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
