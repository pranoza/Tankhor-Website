'use client';

import React, { useState } from 'react';
import { useLanguageAndTheme } from '@/context/LanguageAndThemeContext';
import { siteContent, PricingPlan } from '@/data/content';
import { Check, Sparkles, Calculator, ArrowRight, ArrowLeft } from 'lucide-react';

export default function PricingSection() {
  const { language, direction, openDemoModal } = useLanguageAndTheme();
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
    <section id="pricing" className="py-28 sm:py-36 bg-white dark:bg-[#0a0a0a] text-neutral-900 dark:text-neutral-100 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <div className="font-caption-mono inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 text-xs font-medium border border-neutral-200/80 dark:border-neutral-800">
            <Sparkles className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
            <span>{language === 'fa' ? 'تعرفه‌های شفاف' : 'Transparent Pricing'}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white">
            {siteContent.pricing.title[language]}
          </h2>

          <p className="text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
            {siteContent.pricing.subtitle[language]}
          </p>

          {/* Billing Toggle Switch */}
          <div className="pt-4 flex items-center justify-center">
            <div className="bg-neutral-100 dark:bg-neutral-900 p-1.5 rounded-full border border-neutral-200/80 dark:border-neutral-800 flex items-center gap-1">
              <button
                onClick={() => setIsAnnual(false)}
                className={`px-5 py-2 rounded-full text-xs font-semibold transition-all ${
                  !isAnnual
                    ? 'bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white shadow-vercel-sm'
                    : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-white'
                }`}
              >
                {siteContent.pricing.billingToggle.monthly[language]}
              </button>

              <button
                onClick={() => setIsAnnual(true)}
                className={`px-5 py-2 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 ${
                  isAnnual
                    ? 'bg-[#171717] dark:bg-white text-white dark:text-[#171717] shadow-vercel-sm'
                    : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-white'
                }`}
              >
                <span>{siteContent.pricing.billingToggle.yearly[language]}</span>
              </button>
            </div>
          </div>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-24">
          {siteContent.pricing.plans.map((plan: PricingPlan) => {
            const displayPrice = isAnnual
              ? plan.yearlyPriceMonthlyEquivalent[language]
              : plan.monthlyPrice[language];

            return (
              <div
                key={plan.id}
                className={`rounded-2xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-200 relative ${
                  plan.popular
                    ? 'bg-[#171717] dark:bg-white text-white dark:text-[#171717] shadow-vercel-md lg:-translate-y-2'
                    : 'bg-neutral-50/60 dark:bg-neutral-900/40 border border-neutral-200/80 dark:border-neutral-800/80 shadow-vercel-sm'
                }`}
              >
                {plan.badge && (
                  <div
                    className={`font-caption-mono absolute -top-3.5 right-6 px-3.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase ${
                      plan.popular
                        ? 'bg-teal-400 text-[#171717] dark:bg-teal-600 dark:text-white'
                        : 'bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-300 dark:border-neutral-700'
                    }`}
                  >
                    {plan.badge[language]}
                  </div>
                )}

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold mb-1">
                      {plan.name[language]}
                    </h3>
                    <p className={`text-xs min-h-[32px] leading-relaxed ${plan.popular ? 'text-neutral-300 dark:text-neutral-600' : 'text-neutral-500 dark:text-neutral-400'}`}>
                      {plan.description[language]}
                    </p>
                  </div>

                  {/* Price */}
                  <div className={`py-5 border-y ${plan.popular ? 'border-neutral-800 dark:border-neutral-200' : 'border-neutral-200/80 dark:border-neutral-800/80'}`}>
                    <div className="flex items-baseline gap-1.5">
                      {plan.isCustomPrice ? (
                        <span className="font-caption-mono text-2xl font-extrabold text-teal-600 dark:text-teal-400">
                          {plan.customPriceText ? plan.customPriceText[language] : (language === 'fa' ? 'تماس بگیرید' : 'Contact Sales')}
                        </span>
                      ) : typeof displayPrice === 'number' && displayPrice > 0 ? (
                        <>
                          <span className="font-caption-mono text-3xl sm:text-4xl font-extrabold font-en">
                            {displayPrice.toLocaleString()}
                          </span>
                          <span className={`text-xs font-semibold ${plan.popular ? 'text-neutral-400 dark:text-neutral-500' : 'text-neutral-500 dark:text-neutral-400'}`}>
                            {plan.currency[language]}
                          </span>
                        </>
                      ) : (
                        <span className="font-caption-mono text-2xl font-extrabold text-teal-600 dark:text-teal-400">
                          {language === 'fa' ? 'رایگان (۱۰۰٪ آفلاین)' : '100% Free Offline'}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3.5">
                    {plan.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                        <Check className={`w-4 h-4 shrink-0 mt-0.5 ${plan.popular ? 'text-teal-400 dark:text-teal-600' : 'text-emerald-500'}`} />
                        <span className={plan.popular ? 'text-neutral-200 dark:text-neutral-800' : 'text-neutral-700 dark:text-neutral-300'}>{feat[language]}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8">
                  {plan.contactPhone ? (
                    <a
                      href={`tel:${plan.contactPhone}`}
                      className={`w-full py-3.5 rounded-full font-semibold text-xs sm:text-sm transition-all active:scale-95 flex items-center justify-center gap-2 ${
                        plan.popular
                          ? 'bg-white dark:bg-[#171717] text-[#171717] dark:text-white hover:opacity-90 shadow-vercel-sm'
                          : 'bg-[#171717] dark:bg-white text-white dark:text-[#171717] hover:opacity-90 shadow-vercel-sm'
                      }`}
                    >
                      <span>{plan.ctaText[language]}</span>
                      {direction === 'rtl' ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                    </a>
                  ) : (
                    <button
                      onClick={openDemoModal}
                      className={`w-full py-3.5 rounded-full font-semibold text-xs sm:text-sm transition-all active:scale-95 flex items-center justify-center gap-2 ${
                        plan.popular
                          ? 'bg-white dark:bg-[#171717] text-[#171717] dark:text-white hover:opacity-90 shadow-vercel-sm'
                          : 'bg-[#171717] dark:bg-white text-white dark:text-[#171717] hover:opacity-90 shadow-vercel-sm'
                      }`}
                    >
                      <span>{plan.ctaText[language]}</span>
                      {direction === 'rtl' ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive ROI Savings Calculator Box */}
        <div className="bg-neutral-50 dark:bg-neutral-900/60 p-6 sm:p-8 rounded-xl border border-neutral-200/80 dark:border-neutral-800/80 max-w-4xl mx-auto shadow-vercel-md">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 rounded-md bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 flex items-center justify-center text-teal-600 dark:text-teal-400 shadow-vercel-sm">
              <Calculator className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white">
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
                <div className="flex justify-between text-xs font-semibold text-neutral-700 dark:text-neutral-300">
                  <span>{language === 'fa' ? 'تعداد سفارشات ماهانه شما:' : 'Monthly Orders Volume:'}</span>
                  <span className="font-caption-mono text-teal-600 dark:text-teal-400 font-bold font-en text-sm">{monthlyOrders.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="3000"
                  step="50"
                  value={monthlyOrders}
                  onChange={(e) => setMonthlyOrders(Number(e.target.value))}
                  className="w-full accent-teal-500 bg-neutral-200 dark:bg-neutral-800 h-2 rounded-md cursor-pointer"
                />
              </div>

              {/* Slider 2: Current Return Rate */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-semibold text-neutral-700 dark:text-neutral-300">
                  <span>{language === 'fa' ? 'درصد فعلی مرجوعی سایز شما:' : 'Current Size Return Rate:'}</span>
                  <span className="font-caption-mono text-amber-600 dark:text-amber-400 font-bold font-en text-sm">{returnRate}%</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="45"
                  step="1"
                  value={returnRate}
                  onChange={(e) => setReturnRate(Number(e.target.value))}
                  className="w-full accent-teal-500 bg-neutral-200 dark:bg-neutral-800 h-2 rounded-md cursor-pointer"
                />
              </div>
            </div>

            {/* Savings Result */}
            <div className="bg-white dark:bg-[#0a0a0a] p-6 rounded-lg border border-teal-300/80 dark:border-teal-700/50 text-center space-y-2 shadow-vercel-sm">
              <span className="text-xs text-neutral-500 dark:text-neutral-400 font-medium block">
                {language === 'fa' ? 'تخمین صرفه‌جویی خالص ماهانه شما:' : 'Estimated Monthly Net Savings:'}
              </span>

              <div className="font-caption-mono text-3xl sm:text-4xl font-extrabold text-teal-600 dark:text-teal-300 font-en">
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
