'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguageAndTheme } from '@/context/LanguageAndThemeContext';
import {
  ShieldCheck,
  Database,
  Lock,
  Phone,
  Mail,
  FileText,
  Monitor,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
  Headphones,
} from 'lucide-react';
import { FadeIn, FadeInStagger, FadeInStaggerItem } from '@/components/ScrollAnimation';

export default function TrustAndCredibilitySection() {
  const { language } = useLanguageAndTheme();
  const isFa = language === 'fa';

  const pillars = [
    {
      id: 'privacy',
      icon: Database,
      title: isFa ? 'ذخیره ۱۰۰٪ محلی و امنیت اطلاعات' : '100% Local Data Privacy (SQLite)',
      desc: isFa
        ? 'اطلاعات فروش، حساب‌ها و سود فروشگاه شما در نسخه رایگان منحصراً روی هارد دیسک سیستم خودتان ذخیره می‌شود و بدون اجازه شما به هیچ سروری ارسال نمی‌گردد.'
        : 'In the free edition, your financial and sales data is stored strictly on your local PC via encrypted SQLite.',
      badge: isFa ? 'حریم خصوصی' : 'Data Privacy',
    },
    {
      id: 'support',
      icon: Headphones,
      title: isFa ? 'پشتیبانی تلفنی و همراهی فنی' : 'Direct Telephone & Technical Support',
      desc: isFa
        ? 'پشتیبانی مستقیم تلفنی در ساعات کاری (۰۲۱-۵۵۴۱۶۲۷۴) و کانال‌های رسمی جهت راهنمایی نصب، تنظیم بارکدخوان و استفاده روزمره.'
        : 'Dedicated direct phone assistance (021-55416274) during business hours for setup and hardware troubleshooting.',
      badge: isFa ? 'پشتیبانی فعال' : 'Active Support',
    },
    {
      id: 'backup',
      icon: Lock,
      title: isFa ? 'پشتیبان‌گیری دستی و بیمه اسناد' : 'Manual 1-Click Backups',
      desc: isFa
        ? 'امکان خروجی گرفتن سریع با ۱ کلیک از کلیه محصولات و فاکتورها به صورت فایل امن، بدون وابستگی به سرورهای خارجی.'
        : 'Instant 1-click JSON backup export ensuring you always maintain complete physical control of your database.',
      badge: isFa ? 'کنترل کامل داده' : 'Zero Data Loss',
    },
    {
      id: 'docs',
      icon: FileText,
      title: isFa ? 'راهنمای کاربری و شفافیت کامل' : 'Documentation & Transparency',
      desc: isFa
        ? 'تمام امکانات نرم‌افزار و تفاوت‌های نسخه‌ها کاملاً مستند و تست‌شده هستند، بدون هیچ ادعای غیرواقعی یا امکانات ساختگی.'
        : 'Every software capability and pricing tier is clearly documented without synthetic marketing claims.',
      badge: isFa ? 'شفافیت عملکرد' : 'Verified Capabilities',
    },
  ];

  return (
    <section
      id="trust"
      className="py-20 sm:py-28 bg-white dark:bg-[#0a0a0a] text-neutral-900 dark:text-neutral-100 border-t border-neutral-200/80 dark:border-neutral-800/80 relative"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <FadeIn className="max-w-3xl mb-14 space-y-3 text-right rtl:text-right ltr:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800/80 text-teal-800 dark:text-teal-300 text-xs font-caption-mono font-medium">
            <ShieldCheck className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
            <span>{isFa ? 'اعتمادسازی و شفافیت فنی' : 'Trust & Engineering Integrity'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-tight">
            {isFa
              ? 'کسب‌وکارهای پوشاک با تنخور کارشان را ساده‌تر می‌کنند'
              : 'Apparel Businesses Simplify Operations with TanKhor'}
          </h2>

          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 font-normal leading-relaxed">
            {isFa
              ? 'معماری امن، اطلاعات مستند تماس و پشتیبانی مستقیم، روش ذخیره داده‌ها و احترام به استقلال فروشگاه شما.'
              : 'Robust security architecture, verified technical support, and full control over your business data.'}
          </p>
        </FadeIn>

        {/* Trust Pillars Grid */}
        <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {pillars.map((item) => {
            const Icon = item.icon;
            return (
              <FadeInStaggerItem
                key={item.id}
                className="bg-neutral-50/70 dark:bg-[#0f0f0f] rounded-2xl border border-neutral-200/90 dark:border-neutral-800/90 p-6 sm:p-7 space-y-3.5 shadow-sm hover:border-teal-500/40 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950/40 border border-teal-200/60 dark:border-teal-800/60 text-teal-600 dark:text-teal-400 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-caption-mono text-xs px-2.5 py-1 rounded-full bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-neutral-900 dark:text-white">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </FadeInStaggerItem>
            );
          })}
        </FadeInStagger>

        {/* Direct Contact & Support Bar */}
        <div className="rounded-2xl p-6 sm:p-8 bg-neutral-900 text-white border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-right rtl:sm:text-right ltr:sm:text-left">
            <h4 className="text-base sm:text-lg font-bold text-white">
              {isFa ? 'نیاز به راهنمایی قبل از نصب یا شروع کار دارید؟' : 'Need Guidance Before Installing?'}
            </h4>
            <p className="text-xs text-neutral-400 font-normal">
              {isFa
                ? 'تیم پشتیبانی فنی تنخور شنبه تا چهارشنبه ۹ الی ۱۸ پاسخگوی سؤالات شماست.'
                : 'Technical and sales advisors available Sat-Wed 9am to 6pm.'}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0 font-caption-mono text-xs">
            <a
              href="tel:02155416274"
              className="px-5 py-3 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>{isFa ? '۰۲۱-۵۵۴۱۶۲۷۴' : '021-55416274'}</span>
            </a>

            <a
              href="mailto:support@tankhor.com"
              className="px-5 py-3 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-200 font-medium transition-colors flex items-center gap-2 border border-neutral-700"
            >
              <Mail className="w-4 h-4 text-teal-400" />
              <span>support@tankhor.com</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
