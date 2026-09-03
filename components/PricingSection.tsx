'use client';

import React, { useState } from 'react';
import { useLanguageAndTheme } from '@/context/LanguageAndThemeContext';
import { siteContent, PricingPlan } from '@/data/content';
import { useDownloadLinks } from '@/hooks/useDownloadLinks';
import { Check, Sparkles, Calculator, ArrowRight, ArrowLeft, Download, ArrowUpRight } from 'lucide-react';

export default function PricingSection() {
  const { language, direction, openDemoModal } = useLanguageAndTheme();
  const downloadLinks = useDownloadLinks();
  const [isAnnual, setIsAnnual] = useState<boolean>(true);

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
    <section id="pricing" className="py-20 sm:py-28 bg-white dark:bg-[#0a0a0a] text-neutral-900 dark:text-neutral-100 border-t border-neutral-200/80 dark:border-neutral-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Vercel Header */}
        <div className="max-w-3xl mb-12 space-y-3 text-right rtl:text-right ltr:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 text-xs font-caption-mono">
            <Sparkles className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
            <span>{language === 'fa' ? 'تعرفه‌های شفاف' : 'Transparent Pricing'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
            {siteContent.pricing.title[language]}
          </h2>

          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 font-normal leading-relaxed">
            {siteContent.pricing.subtitle[language]}
          </p>

          {/* Billing Toggle Switch */}
          <div className="pt-2 flex items-center justify-start">
            <div className="bg-neutral-100 dark:bg-neutral-900 p-1 rounded-md border border-neutral-200 dark:border-neutral-800 flex items-center gap-1 font-caption-mono text-xs">
              <button
                onClick={() => setIsAnnual(false)}
                className={`px-4 py-1.5 rounded text-xs font-semibold transition-all ${
                  !isAnnual
                    ? 'bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white shadow-sm'
                    : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-white'
                }`}
              >
                {siteContent.pricing.billingToggle.monthly[language]}
              </button>

              <button
                onClick={() => setIsAnnual(true)}
                className={`px-4 py-1.5 rounded text-xs font-semibold transition-all flex items-center gap-1.5 ${
                  isAnnual
                    ? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 shadow-sm'
                    : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-white'
                }`}
              >
                <span>{siteContent.pricing.billingToggle.yearly[language]}</span>
              </button>
            </div>
          </div>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch mb-20">
          {siteContent.pricing.plans.map((plan: PricingPlan) => {
            const displayPrice = isAnnual
              ? plan.yearlyPriceMonthlyEquivalent[language]
              : plan.monthlyPrice[language];

            const isFreePlan = plan.id === 'free';
            const isProPlan = plan.id === 'pro';

            return (
              <div
                key={plan.id}
                className={`rounded-xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-200 relative ${
                  plan.popular
                    ? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 border border-teal-500/50'
                    : 'bg-neutral-50/80 dark:bg-neutral-900/40 border border-neutral-200/80 dark:border-neutral-800/80'
                }`}
              >
                {plan.badge && (
                  <div
                    className={`font-caption-mono absolute top-4 left-4 px-2.5 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase ${
                      plan.popular
                        ? 'bg-teal-400 text-neutral-900 dark:bg-teal-600 dark:text-white'
                        : 'bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300'
                    }`}
                  >
                    {plan.badge[language]}
                  </div>
                )}

                <div className="space-y-5">
                  <div>
                    <h3 className="text-lg font-bold mb-1">
                      {plan.name[language]}
                    </h3>
                    <p className={`text-xs min-h-[32px] leading-relaxed ${plan.popular ? 'text-neutral-300 dark:text-neutral-600' : 'text-neutral-500 dark:text-neutral-400'}`}>
                      {plan.description[language]}
                    </p>
                  </div>

                  {/* Price */}
                  <div className={`py-4 border-y ${plan.popular ? 'border-neutral-800 dark:border-neutral-200' : 'border-neutral-200/80 dark:border-neutral-800/80'}`}>
                    <div className="flex items-baseline gap-1">
                      {plan.isCustomPrice ? (
                        <span className="font-caption-mono text-xl font-extrabold text-teal-400 dark:text-teal-600">
                          {plan.customPriceText ? plan.customPriceText[language] : (language === 'fa' ? 'تماس بگیرید' : 'Contact Sales')}
                        </span>
                      ) : typeof displayPrice === 'number' && displayPrice > 0 ? (
                        <>
                          <span className="font-caption-mono text-2xl sm:text-3xl font-extrabold font-en">
                            {displayPrice.toLocaleString()}
                          </span>
                          <span className={`text-[11px] font-semibold ${plan.popular ? 'text-neutral-400 dark:text-neutral-500' : 'text-neutral-500 dark:text-neutral-400'}`}>
                            {plan.currency[language]}
                          </span>
                        </>
                      ) : (
                        <span className="font-caption-mono text-xl font-extrabold text-teal-400 dark:text-teal-600">
                          {language === 'fa' ? 'رایگان (۱۰۰٪ آفلاین)' : '100% Free Offline'}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3">
                    {plan.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs">
                        <Check className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${plan.popular ? 'text-teal-400 dark:text-teal-600' : 'text-emerald-500'}`} />
                        <span className={plan.popular ? 'text-neutral-200 dark:text-neutral-800' : 'text-neutral-700 dark:text-neutral-300'}>{feat[language]}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-neutral-200/40 dark:border-neutral-800/40 mt-4">
                  {isFreePlan ? (
                    <a
                      href={downloadLinks.windows_setup}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 rounded-md bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-semibold text-xs hover:opacity-90 transition-all flex items-center justify-center gap-2"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>{plan.ctaText[language]}</span>
                    </a>
                  ) : isProPlan ? (
                    <a
                      href="https://my.tankhor.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 rounded-md bg-teal-400 dark:bg-teal-600 text-neutral-950 dark:text-white font-semibold text-xs hover:opacity-90 transition-all flex items-center justify-center gap-2"
                    >
                      <span>{plan.ctaText[language]}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <button
                      onClick={openDemoModal}
                      className="w-full py-2.5 rounded-md bg-neutral-200 dark:bg-neutral-800 text-neutral-900 dark:text-white font-semibold text-xs hover:opacity-90 transition-all flex items-center justify-center gap-2"
                    >
                      <span>{plan.ctaText[language]}</span>
                      {direction === 'rtl' ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive ROI Savings Calculator Box */}
        <div className="bg-neutral-50 dark:bg-neutral-900/40 p-6 sm:p-8 rounded-xl border border-neutral-200/80 dark:border-neutral-800/80 max-w-4xl mx-auto space-y-6">
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
        </div>

      </div>
    </section>
  );
}
