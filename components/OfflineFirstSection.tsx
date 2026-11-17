'use client';

import React from 'react';
import { useLanguageAndTheme } from '@/context/LanguageAndThemeContext';
import { useDownloadLinks } from '@/hooks/useDownloadLinks';
import {
  WifiOff,
  Cloud,
  HardDrive,
  Monitor,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  RefreshCw,
  Server,
  Zap,
} from 'lucide-react';
import { FadeIn, FadeInStagger, FadeInStaggerItem } from '@/components/ScrollAnimation';

export default function OfflineFirstSection() {
  const { language } = useLanguageAndTheme();
  const downloadLinks = useDownloadLinks();
  const isFa = language === 'fa';

  const ArrowIcon = isFa ? ArrowLeft : ArrowRight;

  return (
    <section
      id="offline-first"
      className="py-20 sm:py-28 bg-white dark:bg-[#0a0a0a] text-neutral-900 dark:text-neutral-100 border-t border-neutral-200/80 dark:border-neutral-800/80 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header - Specified in prompt */}
        <FadeIn className="max-w-3xl mb-14 space-y-3 text-right rtl:text-right ltr:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800/80 text-teal-800 dark:text-teal-300 text-xs font-caption-mono font-medium">
            <WifiOff className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
            <span>{isFa ? 'مزیت کلیدی در بازار ایران' : 'Offline First Architecture'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-tight">
            {isFa
              ? 'فروشگاه شما حتی بدون اینترنت هم کار می‌کند'
              : 'Your Store Operates Smoothly Even Without Internet'}
          </h2>

          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 font-normal leading-relaxed">
            {isFa
              ? 'با نسخه دسکتاپ تنخور، عملیات روزمره فروشگاه را بدون وابستگی به اتصال اینترنت انجام دهید. هر زمان به امکانات آنلاین و مدیریت متمرکز نیاز داشتید، از نسخه Pro استفاده کنید.'
              : 'With TanKhor Desktop, execute all daily store operations with zero internet dependency. Upgrade to Pro whenever you require central cloud management.'}
          </p>
        </FadeIn>

        {/* Diagram: Local Desktop (Free) <-> TanKhor Cloud Server (Pro) */}
        <div className="rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-[#0e0e0e] p-6 sm:p-10 space-y-8 shadow-sm">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left Node: Local Computer (SQLite 100% Offline) */}
            <div className="md:col-span-5 bg-white dark:bg-neutral-900 p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-neutral-100 dark:border-neutral-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950/50 border border-teal-200 dark:border-teal-800 text-teal-600 dark:text-teal-400 flex items-center justify-center font-bold">
                    <Monitor className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-neutral-900 dark:text-white">
                      {isFa ? 'کامپیوتر صندوق فروشگاه' : 'Store Checkout PC'}
                    </h3>
                    <p className="text-xs text-neutral-500 font-caption-mono">
                      {isFa ? 'نسخه دسکتاپ تنخور (ویندوز / مک)' : 'TanKhor Desktop (Win / Mac)'}
                    </p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-xs font-bold font-caption-mono">
                  {isFa ? '۱۰۰٪ آفلاین' : 'Offline'}
                </span>
              </div>

              <ul className="space-y-2.5 text-xs text-neutral-700 dark:text-neutral-300">
                <li className="flex items-center gap-2">
                  <HardDrive className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>{isFa ? 'پایگاه داده محلی مستقل SQLite روی هارد دیسک شما' : 'Local SQLite database stored on your device'}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>{isFa ? 'سرعت ثبت فاکتور زیر ۱ ثانیه در شلوغ‌ترین ساعات' : 'Sub-second invoice checkout during peak rush'}</span>
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>{isFa ? 'بدون وقفه و بدون تاثیرپذیری از نوسان یا قطعی شبکه' : 'Unaffected by internet drops or network outages'}</span>
                </li>
              </ul>
            </div>

            {/* Middle Node: Sync Relationship Diagram */}
            <div className="md:col-span-2 flex flex-col items-center justify-center text-center space-y-2 py-4">
              <div className="w-12 h-12 rounded-full bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-600 dark:text-teal-400">
                <RefreshCw className="w-6 h-6 animate-spin" style={{ animationDuration: '8s' }} />
              </div>
              <span className="text-xs font-bold text-neutral-900 dark:text-white font-caption-mono">
                {isFa ? 'همگام‌سازی ابری' : 'Cloud Sync'}
              </span>
              <p className="text-[11px] text-neutral-500 dark:text-neutral-400 leading-tight">
                {isFa
                  ? 'هنگام برقراری اینترنت، اطلاعات به صورت امن همگام می‌شود'
                  : 'Syncs automatically whenever internet is present'}
              </p>
            </div>

            {/* Right Node: TanKhor Pro Cloud */}
            <div className="md:col-span-5 bg-neutral-900 text-white p-6 rounded-2xl border border-teal-500/50 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center font-bold">
                    <Cloud className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">
                      {isFa ? 'سرور ابری تنخور Pro' : 'TanKhor Pro Cloud'}
                    </h3>
                    <p className="text-xs text-neutral-400 font-caption-mono">
                      {isFa ? 'دسترسی وب، موبایل و مدیریت شعب' : 'Web & Mobile Multi-Store Access'}
                    </p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded bg-teal-500/20 text-teal-300 text-xs font-bold font-caption-mono">
                  Pro Cloud
                </span>
              </div>

              <ul className="space-y-2.5 text-xs text-neutral-300">
                <li className="flex items-center gap-2">
                  <Server className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>{isFa ? 'پشتیبان‌گیری خودکار روزانه ابری از تمام اسناد و فاکتورها' : 'Automated daily cloud backups of invoices & stock'}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Monitor className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>{isFa ? 'مشاهده فروش شعب و موجودی انبار از مرورگر لپ‌تاپ یا موبایل' : 'View remote store sales and stock from web browser'}</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{isFa ? 'تعریف چند صندوقدار و انباردار با دسترسی مشخص' : 'Multi-user roles for store clerks and accountants'}</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Honest Engineering Clarification from prompt */}
          <div className="p-4 rounded-xl bg-neutral-100/90 dark:bg-neutral-900/90 border border-neutral-200 dark:border-neutral-800 text-xs text-neutral-600 dark:text-neutral-400 flex items-start gap-3 leading-relaxed">
            <ShieldCheck className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
            <p>
              {isFa
                ? 'شفافیت فنی: در زمان قطع اینترنت، کلیه عملیات ثبت فاکتور و انبارداری روی سیستم محلی بدون کوچک‌ترین توقفی ادامه می‌یابد. به محض اتصال مجدد سیستم به اینترنت، اطلاعات جدید به‌صورت رمزنگاری‌شده و مطمئن با سرور ابری تنخور Pro همگام می‌گردند.'
                : 'Engineering Note: During network outages, all sales and inventory operations continue locally without interruption. Once reconnected, data syncs safely to the cloud.'}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
