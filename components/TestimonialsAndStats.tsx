'use client';

import React from 'react';
import { useLanguageAndTheme } from '@/context/LanguageAndThemeContext';
import { siteContent, Testimonial } from '@/data/content';
import { Star, Award } from 'lucide-react';
import { FadeIn, FadeInStagger, FadeInStaggerItem } from '@/components/ScrollAnimation';

// Deterministic avatar styles using local color accents
const avatarBadgeStyles = [
  { bg: 'bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-500/20' },
  { bg: 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20' },
  { bg: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20' },
];

function getInitials(name: string): string {
  if (!name) return 'T';
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2);
  // If first part is honorific like مهندس, use next part if available
  if ((parts[0] === 'مهندس' || parts[0] === 'دکتر') && parts.length > 2) {
    return parts[1][0] + (parts[2][0] || '');
  }
  return parts[0][0] + (parts[1]?.[0] || '');
}

export default function TestimonialsAndStats() {
  const { language } = useLanguageAndTheme();

  const testimonials = siteContent.testimonials;

  return (
    <section id="testimonials" className="py-28 sm:py-36 bg-neutral-100/50 dark:bg-[#0a0a0a] text-neutral-900 dark:text-neutral-100 relative border-y border-neutral-200/60 dark:border-neutral-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn className="text-center max-w-2xl mx-auto space-y-4 mb-20">
          <div className="font-caption-mono inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 text-xs font-medium border border-neutral-200/80 dark:border-neutral-800">
            <Award className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
            <span>{language === 'fa' ? 'نظرات مشتریان' : 'Testimonials'}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white">
            {language === 'fa'
              ? 'مورد اعتماد برندها و مزون‌های کشور'
              : 'Endorsed by Top Fashion CEOs'}
          </h2>

          <p className="text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
            {language === 'fa'
              ? 'تجربه واقعی مدیران فروشگاه‌ها از سرعت بالا و حذف خطای سایزبندی با تنخور.'
              : 'How Tankhor eliminated stock mismatches and accelerated operations.'}
          </p>
        </FadeIn>

        {/* Testimonials Cards Grid */}
        <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t: Testimonial, idx: number) => {
            const badgeStyle = avatarBadgeStyles[idx % avatarBadgeStyles.length];
            const initials = getInitials(t.name[language]);

            return (
              <FadeInStaggerItem
                key={t.id}
                className="bg-white dark:bg-[#121212] p-8 rounded-2xl border border-neutral-200/80 dark:border-neutral-800/80 flex flex-col justify-between space-y-6 shadow-vercel-sm"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-1 text-amber-500">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="font-caption-mono px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 text-[10px] font-bold border border-emerald-200 dark:border-emerald-800">
                      {t.impactMetric[language]}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed italic">
                    «{t.comment[language]}»
                  </p>
                </div>

                <div className="pt-5 border-t border-neutral-100 dark:border-neutral-800 flex items-center gap-3">
                  <div
                    aria-hidden="true"
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs select-none border shrink-0 ${badgeStyle.bg}`}
                  >
                    {initials}
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-sm font-bold text-neutral-900 dark:text-white truncate">
                      {t.name[language]}
                    </h4>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 truncate">
                      {t.role[language]} -{' '}
                      <span className="font-caption-mono text-teal-600 dark:text-teal-400 font-semibold">
                        {t.brand[language]}
                      </span>
                    </p>
                  </div>
                </div>
              </FadeInStaggerItem>
            );
          })}
        </FadeInStagger>
      </div>
    </section>
  );
}
