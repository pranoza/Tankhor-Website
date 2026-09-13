'use client';

import React from 'react';
import { useLanguageAndTheme } from '@/context/LanguageAndThemeContext';
import { siteContent, AccountingFeature } from '@/data/content';
import {
  BookOpen,
  Landmark,
  Calculator,
  FileSpreadsheet,
  TrendingUp,
  CheckCircle2,
  ShieldCheck,
  ArrowUpRight,
  Receipt,
  PieChart,
} from 'lucide-react';

export default function AccountingModuleSection() {
  const { language } = useLanguageAndTheme();
  const accounting = siteContent.accountingModule;

  const iconMap: Record<string, React.ElementType> = {
    BookOpen,
    Landmark,
    Calculator,
    FileSpreadsheet,
    TrendingUp,
  };

  return (
    <section id="accounting" className="py-20 sm:py-28 bg-white dark:bg-[#080808] border-t border-neutral-200/80 dark:border-neutral-800/80 relative overflow-hidden">
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-teal-500/5 dark:bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-32 w-96 h-96 bg-emerald-500/5 dark:bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4 text-right rtl:text-right ltr:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/50 border border-teal-200 dark:border-teal-800/80 text-teal-700 dark:text-teal-300 text-xs font-caption-mono font-medium">
            <Receipt className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
            <span>{language === 'fa' ? 'ماژول جدید و تخصصی' : 'New Dedicated Module'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-tight">
            {accounting.title[language]}
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 font-normal leading-relaxed">
            {accounting.subtitle[language]}
          </p>
        </div>

        {/* Feature Grid - Vercel Minimalist Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {accounting.features.map((feature: AccountingFeature, index: number) => {
            const IconComponent = iconMap[feature.iconName] || Calculator;
            const isFeatured = feature.id === 'landed-cost' || feature.id === 'treasury';

            return (
              <div
                key={feature.id}
                className={`p-6 sm:p-7 rounded-2xl transition-all duration-200 flex flex-col justify-between group border relative ${
                  isFeatured
                    ? 'bg-gradient-to-b from-neutral-900 to-neutral-950 text-white border-neutral-700 dark:border-teal-800/60 shadow-lg'
                    : 'bg-neutral-50/80 dark:bg-neutral-900/40 border-neutral-200/80 dark:border-neutral-800/80 hover:border-neutral-300 dark:hover:border-neutral-700 text-neutral-900 dark:text-white'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center border ${
                        isFeatured
                          ? 'bg-teal-500/20 text-teal-300 border-teal-500/30'
                          : 'bg-white dark:bg-neutral-800 text-teal-600 dark:text-teal-400 border-neutral-200 dark:border-neutral-700'
                      }`}
                    >
                      <IconComponent className="w-5 h-5" />
                    </div>

                    <span
                      className={`font-caption-mono text-[10px] px-2.5 py-1 rounded-md border tracking-wider uppercase font-semibold ${
                        isFeatured
                          ? 'bg-teal-950/80 text-teal-300 border-teal-800/60'
                          : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 border-neutral-200 dark:border-neutral-700'
                      }`}
                    >
                      {feature.tag}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h3
                      className={`text-lg font-bold tracking-tight ${
                        isFeatured ? 'text-white' : 'text-neutral-900 dark:text-white'
                      }`}
                    >
                      {feature.title[language]}
                    </h3>
                    <p
                      className={`text-xs font-caption-mono font-medium ${
                        isFeatured ? 'text-teal-400' : 'text-teal-600 dark:text-teal-400'
                      }`}
                    >
                      {feature.subtitle[language]}
                    </p>
                  </div>

                  <p
                    className={`text-xs leading-relaxed font-normal ${
                      isFeatured ? 'text-neutral-300' : 'text-neutral-600 dark:text-neutral-400'
                    }`}
                  >
                    {feature.description[language]}
                  </p>

                  {/* Bullet Benefits */}
                  <ul className="space-y-2 pt-2 border-t border-neutral-200/60 dark:border-neutral-800/60">
                    {feature.benefits.map((benefit, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2 text-[11px] font-normal">
                        <CheckCircle2
                          className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${
                            isFeatured ? 'text-teal-400' : 'text-teal-600 dark:text-teal-400'
                          }`}
                        />
                        <span
                          className={
                            isFeatured ? 'text-neutral-200' : 'text-neutral-700 dark:text-neutral-300'
                          }
                        >
                          {benefit[language]}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner - Integration Callout */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-neutral-900 via-neutral-900 to-neutral-950 border border-neutral-800 text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-teal-500/20 border border-teal-500/30 flex items-center justify-center shrink-0">
              <PieChart className="w-6 h-6 text-teal-400" />
            </div>
            <div className="space-y-1 text-right rtl:text-right ltr:text-left">
              <h4 className="text-base font-bold text-white">
                {language === 'fa'
                  ? 'اتصال به سامانه مؤدیان و خروجی استانداردهای مالی'
                  : 'Taxpayer System Invoicing & Standard Financial Exports'}
              </h4>
              <p className="text-xs text-neutral-400 font-normal">
                {language === 'fa'
                  ? 'گزارش ارزش افزوده، ماده ۱۶۹ مالیاتی و خروجی اکسل استاندارد همگام با نرم‌افزارهای سپیدار و هلو'
                  : 'Automated VAT reports, Article 169 tax statements, and standardized exports for Sepidar & Holo'}
              </p>
            </div>
          </div>

          <a
            href="#free-version"
            className="px-5 py-2.5 rounded-lg bg-teal-500 hover:bg-teal-400 text-neutral-950 font-semibold text-xs transition-colors shrink-0 flex items-center gap-1.5"
          >
            <span>{language === 'fa' ? 'تست رایگان ماژول حسابداری' : 'Test Accounting Module Free'}</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
