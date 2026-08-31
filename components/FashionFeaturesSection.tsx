'use client';

import React from 'react';
import { useLanguageAndTheme } from '@/context/LanguageAndThemeContext';
import { siteContent } from '@/data/content';
import { Package, Grid, Layers, Boxes, ShoppingCart, Ruler } from 'lucide-react';

export default function FashionFeaturesSection() {
  const { language } = useLanguageAndTheme();
  const { fashionFeatures } = siteContent;

  const iconMap: Record<string, React.ElementType> = {
    Package,
    Grid,
    Layers,
    Boxes,
    ShoppingCart,
    Ruler,
  };

  return (
    <section id="features" className="py-20 sm:py-28 bg-neutral-50 dark:bg-[#0a0a0a] border-t border-neutral-200/80 dark:border-neutral-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/60 border border-teal-200/80 dark:border-teal-800 text-teal-700 dark:text-teal-300 text-xs font-medium">
            <span>{language === 'fa' ? 'ماژول‌های کلیدی تنخور' : 'Key Apparel Modules'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white">
            {language === 'fa' ? 'امکانات تخصصی مدیریت فروشگاه پوشاک' : 'Specialized Features for Apparel Management'}
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400">
            {language === 'fa'
              ? '۶ ماژول اصلی طراحی شده بر اساس نیازهای واقعی صنعت مد و پوشاک'
              : '6 Core modules engineered for clothing, footwear & fashion stores'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {fashionFeatures.map((item) => {
            const IconComponent = iconMap[item.iconName] || Package;
            return (
              <div
                key={item.id}
                className="p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 hover:border-teal-500/50 transition-all duration-200 shadow-sm hover:shadow-md space-y-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-950/80 border border-teal-200/80 dark:border-teal-800 flex items-center justify-center text-teal-600 dark:text-teal-400 group-hover:scale-110 transition-transform">
                  <IconComponent className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
                    {item.title[language]}
                  </h3>
                  <p className="text-xs font-semibold text-teal-600 dark:text-teal-400">
                    {item.subtitle[language]}
                  </p>
                </div>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {item.description[language]}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
