'use client';

import React, { useState } from 'react';
import { useLanguageAndTheme } from '@/context/LanguageAndThemeContext';
import { Ruler, Sparkles, CheckCircle2, ShieldCheck, ArrowLeft, ArrowRight, Shirt, Footprints } from 'lucide-react';

type GarmentType = 'jacket' | 'shirt' | 'pants' | 'shoes';

export default function SizeGuideDemoWidget() {
  const { language, direction, openDemoModal } = useLanguageAndTheme();
  const [garment, setGarment] = useState<GarmentType>('jacket');
  const [val1, setVal1] = useState<number>(104); // chest / foot length / waist

  const calculateFit = () => {
    if (garment === 'shoes') {
      if (val1 <= 25) return { size: '40 EU', match: '99%', fit: language === 'fa' ? 'سایز استاندارد ۴۰' : 'EU Size 40' };
      if (val1 <= 26) return { size: '41 EU', match: '98%', fit: language === 'fa' ? 'سایز استاندارد ۴۱' : 'EU Size 41' };
      if (val1 <= 27) return { size: '42 EU', match: '100%', fit: language === 'fa' ? 'سایز استاندارد ۴۲' : 'EU Size 42' };
      if (val1 <= 28) return { size: '43 EU', match: '97%', fit: language === 'fa' ? 'سایز استاندارد ۴۳' : 'EU Size 43' };
      return { size: '44 EU', match: '96%', fit: language === 'fa' ? 'سایز پلاس ۴۴' : 'EU Size 44' };
    }

    if (garment === 'pants') {
      if (val1 <= 78) return { size: '30 US / 40 EU', match: '99%', fit: language === 'fa' ? 'کمر جذب اسلیم' : 'Slim Waist' };
      if (val1 <= 84) return { size: '32 US / 42 EU', match: '98%', fit: language === 'fa' ? 'کمر رایفل استاندارد' : 'Standard Fit' };
      if (val1 <= 90) return { size: '34 US / 44 EU', match: '97%', fit: language === 'fa' ? 'کمر کلاسیک راحت' : 'Classic Fit' };
      return { size: '36 US / 46 EU', match: '95%', fit: language === 'fa' ? 'کمر پلاس آزاد' : 'Plus Fit' };
    }

    // Jacket or Shirt
    if (val1 < 96) return { size: 'S (کوچک)', match: '98%', fit: language === 'fa' ? 'فیت جذب اسلیم' : 'Slim Fit' };
    if (val1 < 102) return { size: 'M (متوسط)', match: '97%', fit: language === 'fa' ? 'فیت استاندارد' : 'Standard Fit' };
    if (val1 < 108) return { size: 'L (بزرگ)', match: '99%', fit: language === 'fa' ? 'فیت ایده‌آل و راحت' : 'Ideal Comfort Fit' };
    if (val1 < 114) return { size: 'XL (خیلی بزرگ)', match: '96%', fit: language === 'fa' ? 'فیت آزاد' : 'Relaxed Fit' };
    return { size: '2XL (دو ایکس)', match: '94%', fit: language === 'fa' ? 'فیت پلاس سایز' : 'Plus Fit' };
  };

  const fitResult = calculateFit();

  return (
    <section id="size-guide" className="py-20 bg-neutral-100/60 dark:bg-[#0f172a]/60 text-neutral-900 dark:text-neutral-100 border-y border-neutral-200/80 dark:border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Description Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="font-caption-mono inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 text-xs font-medium border border-neutral-200/80 dark:border-neutral-800 shadow-vercel-sm">
              <Ruler className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
              <span>{language === 'fa' ? 'ماژول ضد مرجوعی' : 'Anti-Return Engine'}</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-bold text-neutral-900 dark:text-white tracking-tight leading-snug">
              {language === 'fa' ? (
                <>
                  راهنمای سایز تعاملی؛{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-600 dark:from-teal-400 dark:to-emerald-400">
                    کاهش ۶۵ درصدی مرجوعی
                  </span>
                </>
              ) : (
                <>
                  Interactive Size Guide:{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-600 dark:from-teal-400 dark:to-emerald-400">
                    Reduce Returns by 65%
                  </span>
                </>
              )}
            </h2>

            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              {language === 'fa'
                ? 'بزرگترین زیان فروشگاه‌های اینترنتی پوشاک مربوط به مرجوعی کالا به دلیل سایز اشتباه است. با موتور راهنمای سایز تنخور، خریداران اندازه‌های بدن یا کفی کفش خود را وارد کرده و دقیق‌ترین سایز را سفارش می‌دهند.'
                : 'Fit mismatches represent the single largest loss for fashion e-commerce. Tankhor lets buyers input their body metrics or insole dimensions to receive pinpoint size recommendations.'}
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>
                  {language === 'fa'
                    ? 'پشتیبانی از جدول سانتیمتر برای لباس، کفش، کیف و شلوار'
                    : 'Supports garment measurement in CM for clothing, shoes & trousers'}
                </span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>
                  {language === 'fa'
                    ? 'قابلیت افزودن عکس و راهنمای تصویری قرارگیری متر روی بدن'
                    : 'Visual measurement guidelines with tape placement diagrams'}
                </span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>
                  {language === 'fa'
                    ? 'افزونه آماده اتصال به فروشگاه ووکامرس و شاپیفای'
                    : 'Ready-to-use WooCommerce & Shopify plugin embed'}
                </span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={openDemoModal}
                className="px-6 py-3 rounded-full bg-[#171717] dark:bg-white text-white dark:text-[#171717] font-semibold text-xs sm:text-sm shadow-vercel-md hover:opacity-90 transition-all flex items-center gap-2"
              >
                <span>{language === 'fa' ? 'فعالسازی راهنمای سایز در فروشگاه شما' : 'Enable Size Guide on Your Store'}</span>
                {direction === 'rtl' ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Right Interactive Widget Demo Container */}
          <div className="lg:col-span-7 bg-white dark:bg-[#0a0a0a] p-6 sm:p-8 rounded-xl border border-neutral-200/80 dark:border-neutral-800/80 shadow-vercel-md space-y-6">
            {/* Category Selector Buttons */}
            <div className="flex flex-wrap items-center gap-2 pb-4 border-b border-neutral-200/80 dark:border-neutral-800/80">
              <button
                onClick={() => {
                  setGarment('jacket');
                  setVal1(104);
                }}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all flex items-center gap-2 ${
                  garment === 'jacket'
                    ? 'bg-[#171717] dark:bg-white text-white dark:text-[#171717] font-bold shadow-vercel-sm'
                    : 'bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                }`}
              >
                <Shirt className="w-3.5 h-3.5" />
                <span>{language === 'fa' ? 'کاپشن و کت' : 'Jacket & Coat'}</span>
              </button>

              <button
                onClick={() => {
                  setGarment('shirt');
                  setVal1(98);
                }}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all flex items-center gap-2 ${
                  garment === 'shirt'
                    ? 'bg-[#171717] dark:bg-white text-white dark:text-[#171717] font-bold shadow-vercel-sm'
                    : 'bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                }`}
              >
                <Shirt className="w-3.5 h-3.5" />
                <span>{language === 'fa' ? 'پیراهن و تیشرت' : 'Shirt & T-Shirt'}</span>
              </button>

              <button
                onClick={() => {
                  setGarment('pants');
                  setVal1(82);
                }}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all flex items-center gap-2 ${
                  garment === 'pants'
                    ? 'bg-[#171717] dark:bg-white text-white dark:text-[#171717] font-bold shadow-vercel-sm'
                    : 'bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                }`}
              >
                <Ruler className="w-3.5 h-3.5" />
                <span>{language === 'fa' ? 'شلوار پارچه‌ای/جین' : 'Trousers & Jeans'}</span>
              </button>

              <button
                onClick={() => {
                  setGarment('shoes');
                  setVal1(27);
                }}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all flex items-center gap-2 ${
                  garment === 'shoes'
                    ? 'bg-[#171717] dark:bg-white text-white dark:text-[#171717] font-bold shadow-vercel-sm'
                    : 'bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                }`}
              >
                <Footprints className="w-3.5 h-3.5" />
                <span>{language === 'fa' ? 'کفش و کتانی' : 'Footwear & Sneakers'}</span>
              </button>
            </div>

            {/* Range Controls */}
            <div className="space-y-4">
              {garment === 'shoes' ? (
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-semibold text-neutral-800 dark:text-neutral-200">
                    <span>{language === 'fa' ? 'طول کفی پای خریدار (سانتیمتر):' : 'Insole Length (CM):'}</span>
                    <span className="font-caption-mono text-teal-600 dark:text-teal-400 font-bold font-en text-sm">{val1} cm</span>
                  </div>
                  <input
                    type="range"
                    min="23"
                    max="30"
                    value={val1}
                    onChange={(e) => setVal1(Number(e.target.value))}
                    className="w-full accent-teal-500 bg-neutral-200 dark:bg-neutral-800 h-2 rounded-md cursor-pointer"
                  />
                </div>
              ) : garment === 'pants' ? (
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-semibold text-neutral-800 dark:text-neutral-200">
                    <span>{language === 'fa' ? 'دور کمر خریدار (سانتیمتر):' : 'Waist Measurement (CM):'}</span>
                    <span className="font-caption-mono text-teal-600 dark:text-teal-400 font-bold font-en text-sm">{val1} cm</span>
                  </div>
                  <input
                    type="range"
                    min="70"
                    max="110"
                    value={val1}
                    onChange={(e) => setVal1(Number(e.target.value))}
                    className="w-full accent-teal-500 bg-neutral-200 dark:bg-neutral-800 h-2 rounded-md cursor-pointer"
                  />
                </div>
              ) : (
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-semibold text-neutral-800 dark:text-neutral-200">
                    <span>{language === 'fa' ? 'دور سینه (سانتیمتر):' : 'Chest Circumference (CM):'}</span>
                    <span className="font-caption-mono text-teal-600 dark:text-teal-400 font-bold font-en text-sm">{val1} cm</span>
                  </div>
                  <input
                    type="range"
                    min="85"
                    max="125"
                    value={val1}
                    onChange={(e) => setVal1(Number(e.target.value))}
                    className="w-full accent-teal-500 bg-neutral-200 dark:bg-neutral-800 h-2 rounded-md cursor-pointer"
                  />
                </div>
              )}
            </div>

            {/* Calculated Result Box */}
            <div className="bg-neutral-50 dark:bg-neutral-900/80 p-5 rounded-lg border border-neutral-200 dark:border-neutral-800 flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="text-xs text-neutral-500 dark:text-neutral-400 block mb-1">
                  {language === 'fa' ? 'سایز پیشنهادی سیستم تنخور:' : 'Calculated Size Result:'}
                </span>
                <div className="font-caption-mono text-3xl font-extrabold text-teal-600 dark:text-teal-300 font-en">
                  {fitResult.size}
                </div>
                <div className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold mt-1">
                  {fitResult.fit} ({fitResult.match} {language === 'fa' ? 'دقت تطابق' : 'Match Precision'})
                </div>
              </div>

              <div className="text-right border-r border-neutral-200 dark:border-neutral-800 pr-4">
                <span className="text-[11px] text-neutral-500 dark:text-neutral-400 block mb-1">
                  {language === 'fa' ? 'وضعیت ریسک مرجوعی:' : 'Return Risk:'}
                </span>
                <span className="font-caption-mono inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 text-xs font-bold border border-emerald-300 dark:border-emerald-800">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  {language === 'fa' ? 'بسیار پایین (زیر ۲٪)' : 'Ultra Low (<2%)'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
