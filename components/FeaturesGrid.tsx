'use client';

import React from 'react';
import { useLanguageAndTheme } from '@/context/LanguageAndThemeContext';
import { siteContent, FeatureModule } from '@/data/content';
import {
  Grid,
  Ruler,
  Boxes,
  WifiOff,
  Users,
  QrCode,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

const iconMap: { [key: string]: React.ElementType } = {
  Grid,
  Ruler,
  Boxes,
  WifiOff,
  Users,
  QrCode,
};

export default function FeaturesGrid() {
  const { language } = useLanguageAndTheme();
  const features = siteContent.features;

  return (
    <section id="features" className="py-28 sm:py-36 bg-white dark:bg-[#0a0a0a] text-neutral-900 dark:text-neutral-100 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-20">
          <div className="font-caption-mono inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 text-xs font-medium border border-neutral-200/80 dark:border-neutral-800">
            <Sparkles className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
            <span>{language === 'fa' ? 'ماژول‌های تخصصی' : 'Core Modules'}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white leading-tight">
            {language === 'fa'
              ? '۶ ماژول ویژه صنعت پوشاک و مد'
              : '6 Specialized Modules Built for Fashion'}
          </h2>
          <p className="text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
            {language === 'fa'
              ? 'طراحی شده بر اساس نیازهای واقعی تولیدکنندگان، بوتیک‌داران، مزون‌ها و آنلاین‌شاپ‌ها.'
              : 'Engineered directly for the operational workflows of boutique owners and fashion brands.'}
          </p>
        </div>

        {/* 6 Grid Modules */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item: FeatureModule) => {
            const IconComponent = iconMap[item.iconName] || Grid;
            return (
              <div
                key={item.id}
                className="group bg-neutral-50/60 dark:bg-neutral-900/40 hover:bg-white dark:hover:bg-neutral-900 p-8 rounded-2xl border border-neutral-200/80 dark:border-neutral-800/80 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-200 shadow-vercel-sm flex flex-col justify-between relative"
              >
                <div className="space-y-5">
                  {/* Icon */}
                  <div className="w-11 h-11 rounded-xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 flex items-center justify-center text-neutral-900 dark:text-teal-400 shadow-vercel-sm">
                    <IconComponent className="w-5 h-5" />
                  </div>

                  <div>
                    <span className="font-caption-mono text-xs font-semibold text-teal-600 dark:text-teal-400 block mb-1">
                      {item.subtitle[language]}
                    </span>
                    <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
                      {item.title[language]}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {item.description[language]}
                  </p>

                  {/* Benefits Checklist */}
                  <div className="pt-5 border-t border-neutral-200/60 dark:border-neutral-800/60 space-y-2.5">
                    {item.benefits.map((benefit, bIdx) => (
                      <div key={bIdx} className="flex items-center gap-2.5 text-xs text-neutral-700 dark:text-neutral-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>{benefit[language]}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
