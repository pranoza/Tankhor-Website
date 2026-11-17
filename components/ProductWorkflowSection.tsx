'use client';

import React, { useState } from 'react';
import { useLanguageAndTheme } from '@/context/LanguageAndThemeContext';
import {
  Boxes,
  Receipt,
  Layers,
  Barcode,
  CheckCircle2,
  Scan,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  ChevronRight,
  TrendingUp,
} from 'lucide-react';
import { FadeIn } from '@/components/ScrollAnimation';

export default function ProductWorkflowSection() {
  const { language } = useLanguageAndTheme();
  const isFa = language === 'fa';
  const [activeStep, setActiveStep] = useState<1 | 2 | 3>(1);

  const steps = [
    {
      id: 1,
      num: '۰۱',
      title: isFa ? 'مرحله اول: تعریف و مدیریت محصولات' : 'Step 1: Product & Variant Definition',
      subtitle: isFa
        ? 'تعریف یک محصول و مدیریت رنگ، سایز، تنوع و موجودی آن.'
        : 'Define a garment style once; manage all color and size variant matrices.',
      badge: isFa ? 'تعریف محصول و تنوع' : 'Style & Variants',
      icon: Boxes,
    },
    {
      id: 2,
      num: '۰۲',
      title: isFa ? 'مرحله دوم: ثبت فروش و صدور فاکتور' : 'Step 2: Rapid POS Barcode Sales',
      subtitle: isFa
        ? 'انتخاب یا اسکن بارکد محصول و ثبت فوری فاکتور فروش.'
        : 'Scan garment barcode or select item; print thermal hangtag invoice instantly.',
      badge: isFa ? 'فروش بارکدی' : 'POS Checkout',
      icon: Receipt,
    },
    {
      id: 3,
      num: '۰۳',
      title: isFa ? 'مرحله سوم: کنترل موجودی و گزارش‌ها' : 'Step 3: Inventory Control & Reports',
      subtitle: isFa
        ? 'مشاهده موجودی باقیمانده، گردش کالا و گزارش سود فروش.'
        : 'Track real-time stock balances, product movements, and net profit margins.',
      badge: isFa ? 'کنترل لحظه‌ای انبار' : 'Live Inventory Ledger',
      icon: Layers,
    },
  ];

  return (
    <section
      id="workflow"
      className="py-20 sm:py-28 bg-white dark:bg-[#0a0a0a] text-neutral-900 dark:text-neutral-100 border-t border-neutral-200/80 dark:border-neutral-800/80 relative"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Specified in prompt */}
        <FadeIn className="max-w-3xl mb-14 space-y-3 text-right rtl:text-right ltr:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800/80 text-teal-800 dark:text-teal-300 text-xs font-caption-mono font-medium">
            <Sparkles className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
            <span>{isFa ? 'گردش‌کار نرم‌افزار' : 'End-to-End Workflow'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-tight">
            {isFa
              ? 'از تعریف محصول تا مدیریت فروش، همه‌چیز یکپارچه است'
              : 'From Product Setup to Sales: Completely Integrated'}
          </h2>

          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 font-normal leading-relaxed">
            {isFa
              ? 'مشاهده نحوه عملکرد گام‌به‌گام تنخور در جریان کارهای روزمره فروشگاه پوشاک، کیف و کفش'
              : 'See how TanKhor simplifies daily apparel retail operations across 3 straightforward stages.'}
          </p>
        </FadeIn>

        {/* 3 Step Interactive Stepper Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {steps.map((st) => {
            const Icon = st.icon;
            const isSelected = activeStep === st.id;
            return (
              <button
                key={st.id}
                type="button"
                onClick={() => setActiveStep(st.id as 1 | 2 | 3)}
                className={`p-5 rounded-2xl border text-right rtl:text-right ltr:text-left transition-all cursor-pointer flex flex-col justify-between space-y-3 ${
                  isSelected
                    ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 border-neutral-900 dark:border-white shadow-lg'
                    : 'bg-neutral-50 dark:bg-neutral-900/50 text-neutral-800 dark:text-neutral-200 border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-700'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-xs ${
                      isSelected
                        ? 'bg-teal-500 text-neutral-950'
                        : 'bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <span
                    className={`font-caption-mono text-xs font-bold ${
                      isSelected
                        ? 'text-teal-400 dark:text-teal-700'
                        : 'text-neutral-400 dark:text-neutral-500'
                    }`}
                  >
                    {st.num}
                  </span>
                </div>

                <div>
                  <h3 className="text-sm sm:text-base font-bold leading-snug">
                    {st.title}
                  </h3>
                  <p
                    className={`text-xs mt-1 leading-relaxed font-normal ${
                      isSelected
                        ? 'text-neutral-300 dark:text-neutral-700'
                        : 'text-neutral-500 dark:text-neutral-400'
                    }`}
                  >
                    {st.subtitle}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Real Software UI Workflow Showcase Window */}
        <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-950 text-white shadow-2xl overflow-hidden font-sans">
          
          {/* Mockup Window Topbar */}
          <div className="h-10 bg-neutral-900 border-b border-neutral-800 px-4 flex items-center justify-between text-xs text-neutral-400 select-none font-caption-mono">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              <span className="mr-2 text-neutral-300 hidden sm:inline">
                {activeStep === 1 && (isFa ? 'تنخور > محصولات > تعریف کالا و ماتریس سایز/رنگ' : 'TanKhor > Products > Color & Size Matrix')}
                {activeStep === 2 && (isFa ? 'تنخور > صندوق فروشگاه > ثبت فاکتور و بارکدخوان' : 'TanKhor > Point of Sale > Quick Checkout')}
                {activeStep === 3 && (isFa ? 'تنخور > انبارداری > کاردکس کالا و گزارش سود فروش' : 'TanKhor > Stock Ledger & Sales Profit')}
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-[11px] text-teal-400">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
              <span>{isFa ? 'پایگاه داده آفلاین فعال' : 'Offline Database Active'}</span>
            </div>
          </div>

          {/* Step 1 Screen: Product & Matrix Definition */}
          {activeStep === 1 && (
            <div className="p-5 sm:p-7 space-y-6 bg-[#0c0c0c]">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                
                {/* Form fields mockup */}
                <div className="lg:col-span-5 space-y-3.5 bg-neutral-900/90 p-4 rounded-xl border border-neutral-800 text-xs">
                  <div className="font-bold text-sm text-teal-300 pb-2 border-b border-neutral-800 flex items-center gap-2">
                    <Boxes className="w-4 h-4" />
                    <span>{isFa ? 'فرم مشخصات مدل لباس' : 'Garment Style Info'}</span>
                  </div>

                  <div>
                    <label className="text-neutral-400 block mb-1">{isFa ? 'نام مدل:' : 'Style Title:'}</label>
                    <div className="p-2 rounded bg-neutral-950 border border-neutral-800 text-white font-medium">
                      هودی کتان اسپرت تنخور (کد آرتیکل: HD-920)
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-neutral-400 block mb-1">{isFa ? 'گروه کالا:' : 'Category:'}</label>
                      <div className="p-2 rounded bg-neutral-950 border border-neutral-800 text-neutral-300">
                        سویشرت و هودی
                      </div>
                    </div>
                    <div>
                      <label className="text-neutral-400 block mb-1">{isFa ? 'قیمت فروش:' : 'Price:'}</label>
                      <div className="p-2 rounded bg-neutral-950 border border-neutral-800 text-white font-caption-mono font-bold text-teal-400">
                        ۱,۱۹۰,۰۰۰ تومان
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="text-neutral-400 block mb-1">{isFa ? 'رنگ‌های انتخابی:' : 'Selected Colors:'}</label>
                    <div className="flex flex-wrap gap-1.5">
                      <span className="px-2 py-1 rounded bg-neutral-800 text-white font-caption-mono text-[11px]">مشکی</span>
                      <span className="px-2 py-1 rounded bg-neutral-800 text-white font-caption-mono text-[11px]">طوسی ملانژ</span>
                      <span className="px-2 py-1 rounded bg-neutral-800 text-white font-caption-mono text-[11px]">یشمی</span>
                    </div>
                  </div>

                  <div>
                    <label className="text-neutral-400 block mb-1">{isFa ? 'سایزهای فعال:' : 'Active Sizes:'}</label>
                    <div className="flex flex-wrap gap-1.5 font-caption-mono text-[11px]">
                      <span className="px-2 py-1 rounded bg-teal-950 border border-teal-800 text-teal-300">M</span>
                      <span className="px-2 py-1 rounded bg-teal-950 border border-teal-800 text-teal-300">L</span>
                      <span className="px-2 py-1 rounded bg-teal-950 border border-teal-800 text-teal-300">XL</span>
                      <span className="px-2 py-1 rounded bg-teal-950 border border-teal-800 text-teal-300">2XL</span>
                    </div>
                  </div>
                </div>

                {/* Auto-Generated Matrix Preview */}
                <div className="lg:col-span-7 space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-white">
                      {isFa ? 'ماتریس تولیدشده خودکار (۱۲ واریانت با بارکد اختصاصی)' : 'Auto-Generated Variant Matrix'}
                    </span>
                    <span className="text-teal-400 font-caption-mono text-[11px]">
                      {isFa ? 'موجودی اولیه: ۸۴ عدد' : 'Total Stock: 84'}
                    </span>
                  </div>

                  <div className="overflow-x-auto rounded-xl border border-neutral-800 bg-neutral-900">
                    <table className="w-full text-xs text-right rtl:text-right ltr:text-left">
                      <thead className="bg-neutral-950 text-neutral-400 font-caption-mono border-b border-neutral-800">
                        <tr>
                          <th className="p-2.5">رنگ</th>
                          <th className="p-2.5 text-center">M</th>
                          <th className="p-2.5 text-center">L</th>
                          <th className="p-2.5 text-center">XL</th>
                          <th className="p-2.5 text-center">2XL</th>
                          <th className="p-2.5 text-center">بارکد</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-neutral-800/80 font-caption-mono text-neutral-300">
                        <tr>
                          <td className="p-2.5 font-bold text-white">مشکی</td>
                          <td className="p-2.5 text-center">۸</td>
                          <td className="p-2.5 text-center font-bold text-teal-400">۱۵</td>
                          <td className="p-2.5 text-center font-bold text-teal-400">۱۲</td>
                          <td className="p-2.5 text-center">۶</td>
                          <td className="p-2.5 text-center text-neutral-500 text-[10px]">6260198001</td>
                        </tr>
                        <tr>
                          <td className="p-2.5 font-bold text-white">طوسی ملانژ</td>
                          <td className="p-2.5 text-center">۶</td>
                          <td className="p-2.5 text-center">۱۰</td>
                          <td className="p-2.5 text-center">۹</td>
                          <td className="p-2.5 text-center">۴</td>
                          <td className="p-2.5 text-center text-neutral-500 text-[10px]">6260198002</td>
                        </tr>
                        <tr>
                          <td className="p-2.5 font-bold text-white">یشمی</td>
                          <td className="p-2.5 text-center">۴</td>
                          <td className="p-2.5 text-center">۵</td>
                          <td className="p-2.5 text-center">۳</td>
                          <td className="p-2.5 text-center">۲</td>
                          <td className="p-2.5 text-center text-neutral-500 text-[10px]">6260198003</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p className="text-xs text-neutral-400 leading-relaxed font-normal">
                    {isFa
                      ? '✓ سیستم بدون نیاز به ساخت دستی کالاها، جدول را آماده کرده و آماده چاپ اتیکت و بارکد حرارتی روی لباس است.'
                      : '✓ Instant automated SKUs ready for thermal hangtag printing.'}
                  </p>
                </div>

              </div>
            </div>
          )}

          {/* Step 2 Screen: POS Barcode Checkout */}
          {activeStep === 2 && (
            <div className="p-5 sm:p-7 space-y-5 bg-[#0c0c0c]">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                
                {/* Barcode scanner action bar */}
                <div className="lg:col-span-12 p-3.5 rounded-xl bg-neutral-900 border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    <div className="w-9 h-9 rounded-lg bg-teal-500/20 text-teal-400 flex items-center justify-center shrink-0">
                      <Scan className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white">
                        {isFa ? 'اسکن بارکد با بارکدخوان فیزیکی یا دوربین تبلت' : 'Barcode Scanner Ready'}
                      </p>
                      <p className="text-[11px] text-neutral-400 font-caption-mono">
                        کد خوانده‌شده: 6260198001204 (هودی کتان - مشکی / سایز L)
                      </p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded bg-emerald-500/20 text-emerald-300 text-xs font-caption-mono font-bold shrink-0">
                    {isFa ? 'کالای انتخابی اضافه شد (+۱)' : 'Item Added (+1)'}
                  </span>
                </div>

                {/* Invoice Mockup */}
                <div className="lg:col-span-8 space-y-3 bg-neutral-900/80 p-4 rounded-xl border border-neutral-800">
                  <div className="flex items-center justify-between text-xs text-neutral-400 pb-2 border-b border-neutral-800 font-caption-mono">
                    <span>فاکتور فروش حضوری #1084</span>
                    <span>صندوقدار: خانم محمدی • ۱۴:۳۲</span>
                  </div>

                  <div className="space-y-2 text-xs font-caption-mono">
                    <div className="p-2.5 rounded bg-neutral-950 border border-neutral-800/80 flex items-center justify-between">
                      <div>
                        <span className="font-bold text-white block">هودی کتان اسپرت - مشکی / L</span>
                        <span className="text-[11px] text-neutral-500">تعداد: ۱ عدد • کد: HD-920-BLK-L</span>
                      </div>
                      <span className="font-bold text-white">۱,۱۹۰,۰۰۰ تومان</span>
                    </div>

                    <div className="p-2.5 rounded bg-neutral-950 border border-neutral-800/80 flex items-center justify-between">
                      <div>
                        <span className="font-bold text-white">تیشرت نخی ساده - سفید / XL</span>
                        <span className="text-[11px] text-neutral-500">تعداد: ۲ عدد • کد: TS-100-WHT-XL</span>
                      </div>
                      <span className="font-bold text-white">۹۸۰,۰۰۰ تومان</span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-neutral-800 flex items-center justify-between text-xs">
                    <span className="text-neutral-400">جمع کل فاکتور:</span>
                    <span className="text-base font-extrabold text-teal-400 font-caption-mono">
                      ۲,۱۷۰,۰۰۰ تومان
                    </span>
                  </div>
                </div>

                {/* Payment & Receipt */}
                <div className="lg:col-span-4 space-y-3 bg-neutral-900/80 p-4 rounded-xl border border-neutral-800 flex flex-col justify-between">
                  <div className="space-y-2.5 text-xs">
                    <span className="font-bold text-white block">تسویه و صدور فاکتور:</span>
                    <div className="p-2.5 rounded bg-neutral-950 border border-teal-500/30 text-teal-300 flex items-center justify-between">
                      <span>دستگاه پوز بانکی:</span>
                      <span className="font-bold font-caption-mono">ارسال شد ✓</span>
                    </div>
                    <p className="text-[11px] text-neutral-400 leading-relaxed font-normal">
                      موجودی انبار بلافاصله پس از تسویه کسر شده و اطلاعات فاکتور در کاردکس ثبت شد.
                    </p>
                  </div>

                  <button className="w-full py-2.5 rounded-lg bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer">
                    <Receipt className="w-4 h-4" />
                    <span>چاپ فاکتور حرارتی ۸ سانت</span>
                  </button>
                </div>

              </div>
            </div>
          )}

          {/* Step 3 Screen: Inventory Control & Profit */}
          {activeStep === 3 && (
            <div className="p-5 sm:p-7 space-y-5 bg-[#0c0c0c]">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800">
                  <span className="text-xs text-neutral-400 block mb-1">
                    {isFa ? 'موجودی باقیمانده انبار' : 'Current Stock'}
                  </span>
                  <span className="text-2xl font-bold font-caption-mono text-white">۱,۲4۰ عدد</span>
                  <p className="text-[11px] text-teal-400 mt-1 font-caption-mono">
                    {isFa ? 'همگام‌شده با آخرین فروش' : 'Synced after last POS'}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800">
                  <span className="text-xs text-neutral-400 block mb-1">
                    {isFa ? 'سود ناخالص امروز' : 'Today Net Gross'}
                  </span>
                  <span className="text-2xl font-bold font-caption-mono text-emerald-400">۸,۴۲۰,۰۰۰ ت</span>
                  <p className="text-[11px] text-neutral-400 mt-1 font-caption-mono">
                    {isFa ? 'با کسر بهای تمام‌شده Landed Cost' : 'True margin calculated'}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800">
                  <span className="text-xs text-neutral-400 block mb-1">
                    {isFa ? 'کاردکس گردش کالا' : 'Stock Movements'}
                  </span>
                  <span className="text-2xl font-bold font-caption-mono text-white">۴۲ تراکنش</span>
                  <p className="text-[11px] text-neutral-400 mt-1 font-caption-mono">
                    {isFa ? 'شامل فروش، مرجوعی و حواله' : 'Sales, Returns & Sync'}
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-neutral-900/80 border border-neutral-800 text-xs space-y-2">
                <span className="font-bold text-white block">
                  {isFa ? 'نمونه کاردکس ثبت‌شده مدل هودی کتان (HD-920-BLK-L):' : 'Stock Ledger Preview:'}
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-caption-mono text-[11px] text-neutral-300 pt-1">
                  <div className="p-2 rounded bg-neutral-950">ورود اول‌دوره: ۱۵ عدد</div>
                  <div className="p-2 rounded bg-neutral-950">فروش فاکتور ۱۰۸۴: ۱- عدد</div>
                  <div className="p-2 rounded bg-neutral-950 font-bold text-teal-400">موجودی فعلی: ۱۴ عدد</div>
                  <div className="p-2 rounded bg-neutral-950 text-emerald-400">سود این تراکنش: ۳۱۰,۰۰۰ ت</div>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
