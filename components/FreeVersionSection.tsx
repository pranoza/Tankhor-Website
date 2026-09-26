'use client';

import React from 'react';
import { useLanguageAndTheme } from '@/context/LanguageAndThemeContext';
import { siteContent } from '@/data/content';
import { useDownloadLinks } from '@/hooks/useDownloadLinks';
import { Download, Check, Monitor, Apple, Smartphone, ShieldCheck, Laptop } from 'lucide-react';
import { FadeIn } from '@/components/ScrollAnimation';

export default function FreeVersionSection() {
  const { language, openMacModal } = useLanguageAndTheme();
  const { freeVersion } = siteContent;
  const downloadLinks = useDownloadLinks();

  return (
    <section id="free-version" className="py-16 sm:py-20 bg-neutral-900/60 dark:bg-black text-white border-t border-neutral-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="bg-neutral-950 rounded-2xl border border-neutral-800/80 p-6 sm:p-10 lg:p-12 shadow-xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5 text-right rtl:text-right ltr:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-teal-400 text-xs font-mono">
                <Laptop className="w-3.5 h-3.5 text-teal-400" />
                <span>{language === 'fa' ? 'نسخه رایگان دسکتاپ' : 'Free Desktop Edition'}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-snug">
                {freeVersion.title[language]}
              </h2>

              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-xl">
                {freeVersion.subtitle[language]}
              </p>

              {/* Minimal 4-Bullet Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                {freeVersion.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-neutral-300">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{benefit[language]}</span>
                  </div>
                ))}
              </div>

              {/* Download Buttons */}
              <div className="pt-3 space-y-3">
                <div className="flex flex-wrap items-center gap-2.5">
                  <a
                    href={downloadLinks.windows_setup}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-lg bg-white hover:bg-neutral-200 text-neutral-950 font-bold text-xs shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                  >
                    <Monitor className="w-4 h-4 text-blue-600" />
                    <span>{language === 'fa' ? 'دانلود ویندوز' : 'Windows'}</span>
                  </a>

                  <button
                    type="button"
                    onClick={openMacModal}
                    className="px-5 py-2.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-200 border border-neutral-700/80 font-semibold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                  >
                    <Apple className="w-4 h-4 text-neutral-200" />
                    <span>{language === 'fa' ? 'دانلود مک (macOS)' : 'macOS'}</span>
                  </button>

                  <a
                    href={downloadLinks.android_setup}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-200 border border-neutral-700/80 font-semibold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                  >
                    <Smartphone className="w-4 h-4 text-emerald-400" />
                    <span>{language === 'fa' ? 'اندروید (APK)' : 'Android'}</span>
                  </a>
                </div>

                <div className="flex items-center gap-2 text-[11px] text-neutral-400 font-mono">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{language === 'fa' ? 'بدون نیاز به ثبت‌نام یا اینترنت • نصب آسان و سریع' : 'No sign-up or internet required • Fast install'}</span>
                </div>
              </div>
            </div>

            {/* Right Side Minimal Spec Card */}
            <div className="lg:col-span-5 bg-neutral-900/90 rounded-xl p-5 border border-neutral-800 space-y-4 font-mono text-xs">
              <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                </div>
                <span className="text-[11px] text-neutral-400">tankhor-setup.exe</span>
              </div>

              <div className="space-y-2.5 text-neutral-300 text-xs">
                <div className="flex justify-between border-b border-neutral-800/60 pb-2">
                  <span className="text-neutral-500">{language === 'fa' ? 'نسخه:' : 'Edition:'}</span>
                  <span className="text-white font-semibold">{language === 'fa' ? 'دسکتاپ (ویندوز / مک)' : 'Desktop'}</span>
                </div>
                <div className="flex justify-between border-b border-neutral-800/60 pb-2">
                  <span className="text-neutral-500">{language === 'fa' ? 'لایسنس:' : 'License:'}</span>
                  <span className="text-emerald-400 font-semibold">{language === 'fa' ? 'رایگان همیشگی' : 'Free Forever'}</span>
                </div>
                <div className="flex justify-between border-b border-neutral-800/60 pb-2">
                  <span className="text-neutral-500">{language === 'fa' ? 'پایگاه داده:' : 'Database:'}</span>
                  <span className="text-teal-400">{language === 'fa' ? 'محلی و آفلاین (SQLite)' : 'Local SQLite'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">{language === 'fa' ? 'وابستگی اینترنت:' : 'Internet:'}</span>
                  <span className="text-rose-400 font-semibold">{language === 'fa' ? 'صفر (۱۰۰٪ آفلاین)' : 'Zero (100% Offline)'}</span>
                </div>
              </div>

              <a
                href={downloadLinks.windows_setup}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-lg bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all mt-1 shadow-md shadow-teal-950/40"
              >
                <Download className="w-4 h-4" />
                <span>{language === 'fa' ? 'دریافت نسخه ویندوز' : 'Download Windows'}</span>
              </a>
            </div>

          </div>
        </FadeIn>
      </div>
    </section>
  );
}
