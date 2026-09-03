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

  const moduleTags = [
    'PRODUCTS_MODULE',
    'COLOR_SIZE_GRID',
    'INVENTORY_LEDGER',
    'MULTI_WAREHOUSE',
    'SALES_ORDERS',
    'SIZE_SPECS_ENGINE',
  ];

  return (
    <section id="features" className="py-20 sm:py-28 bg-neutral-50 dark:bg-[#0a0a0a] border-t border-neutral-200/80 dark:border-neutral-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Vercel "Recently shipped" Header Style */}
        <div className="max-w-3xl mb-16 space-y-3 text-right rtl:text-right ltr:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 text-xs font-caption-mono">
            <span>{language === 'fa' ? 'ماژول‌های تخصصی' : 'Specialized Modules'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
            {language === 'fa' ? 'امکانات تخصصی مدیریت فروشگاه پوشاک' : 'Specialized Features for Apparel Management'}
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 font-normal leading-relaxed">
            {language === 'fa'
              ? '۶ ماژول اصلی طراحی شده بر اساس نیازهای واقعی صنعت مد و پوشاک'
              : '6 Core modules engineered for clothing, footwear & fashion stores'}
          </p>
        </div>

        {/* Vercel Style Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {fashionFeatures.map((item, index) => {
            const IconComponent = iconMap[item.iconName] || Package;
            const tag = moduleTags[index % moduleTags.length];

            return (
              <div
                key={item.id}
                className="p-6 rounded-xl bg-white dark:bg-neutral-900/60 border border-neutral-200/80 dark:border-neutral-800/80 hover:border-neutral-400 dark:hover:border-neutral-700 transition-all duration-200 space-y-4 flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-9 h-9 rounded-md bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 flex items-center justify-center text-neutral-900 dark:text-white">
                      <IconComponent className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                    </div>
                    <span className="font-caption-mono text-[10px] text-neutral-400 dark:text-neutral-500 bg-neutral-100 dark:bg-neutral-800 px-2 py-0.5 rounded border border-neutral-200 dark:border-neutral-700">
                      {tag}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-base font-bold text-neutral-900 dark:text-white">
                      {item.title[language]}
                    </h3>
                    <p className="text-[11px] font-caption-mono text-teal-600 dark:text-teal-400">
                      {item.subtitle[language]}
                    </p>
                  </div>

                  <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal">
                    {item.description[language]}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
