'use client';

import React from 'react';
import { useLanguageAndTheme } from '@/context/LanguageAndThemeContext';
import { siteContent } from '@/data/content';
import { useDownloadLinks } from '@/hooks/useDownloadLinks';
import { Download, Check, Monitor, Apple, Smartphone, ShieldCheck, Terminal } from 'lucide-react';

export default function FreeVersionSection() {
  const { language } = useLanguageAndTheme();
  const { freeVersion } = siteContent;
  const downloadLinks = useDownloadLinks();

  return (
    <section id="free-version" className="py-20 sm:py-28 bg-neutral-900 dark:bg-black text-white border-t border-neutral-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-neutral-950 rounded-2xl border border-neutral-800 p-8 sm:p-12 lg:p-16 space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-right rtl:text-right ltr:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-teal-400 text-xs font-caption-mono">
                <Terminal className="w-3.5 h-3.5" />
                <span>{language === 'fa' ? 'نسخه رایگان دسکتاپ (100% Free)' : 'Tankhor Free Desktop Edition'}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                {freeVersion.title[language]}
              </h2>

              <p className="text-sm sm:text-base text-neutral-400 leading-relaxed font-normal">
                {freeVersion.subtitle[language]}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {freeVersion.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-neutral-300">{benefit[language]}</span>
                  </div>
                ))}
              </div>

              {/* Directus Download Buttons */}
              <div className="pt-6 space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={downloadLinks.windows_setup}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-md bg-white hover:bg-neutral-200 text-neutral-950 font-bold text-xs shadow-sm transition-all flex items-center justify-center gap-2"
                  >
                    <Monitor className="w-4 h-4 text-blue-600" />
                    <span>{language === 'fa' ? 'دانلود نسخه ویندوز' : 'Download for Windows'}</span>
                  </a>

                  <a
                    href={downloadLinks.macos_setup}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-md bg-neutral-900 hover:bg-neutral-800 text-neutral-200 border border-neutral-700 font-semibold text-xs transition-all flex items-center justify-center gap-2"
                  >
                    <Apple className="w-4 h-4 text-neutral-200" />
                    <span>{language === 'fa' ? 'دانلود نسخه مک (macOS)' : 'Download for macOS'}</span>
                  </a>

                  <a
                    href={downloadLinks.android_setup}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-md bg-neutral-900 hover:bg-neutral-800 text-neutral-200 border border-neutral-700 font-semibold text-xs transition-all flex items-center justify-center gap-2"
                  >
                    <Smartphone className="w-4 h-4 text-emerald-400" />
                    <span>{language === 'fa' ? 'دانلود اندروید (APK)' : 'Download for Android'}</span>
                  </a>
                </div>

                <div className="flex items-center gap-2 text-xs text-neutral-400 font-caption-mono">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>{language === 'fa' ? 'بدون نیاز به ثبت کارت، لایسنس یا اینترنت' : 'No registration, license key, or credit card required'}</span>
                </div>
              </div>
            </div>

            {/* Right Side Vercel-style Code / Spec Box */}
            <div className="lg:col-span-5 bg-neutral-900 rounded-xl p-6 border border-neutral-800 space-y-5">
              <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
                <div className="flex gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                </div>
                <span className="text-[11px] font-caption-mono text-neutral-400">tankhor-free-v1.0.exe</span>
              </div>

              <div className="space-y-3 font-caption-mono text-xs text-neutral-300">
                <div className="flex justify-between border-b border-neutral-800/60 pb-2">
                  <span className="text-neutral-500">نام نرم‌افزار:</span>
                  <span className="text-white font-semibold">تنخور رایگان (Tankhor Free)</span>
                </div>
                <div className="flex justify-between border-b border-neutral-800/60 pb-2">
                  <span className="text-neutral-500">نوع لایسنس:</span>
                  <span className="text-emerald-400">رایگان همیشگی (100% Free)</span>
                </div>
                <div className="flex justify-between border-b border-neutral-800/60 pb-2">
                  <span className="text-neutral-500">ماتریس رنگ و سایز:</span>
                  <span className="text-teal-400">پشتیبانی کامل</span>
                </div>
                <div className="flex justify-between border-b border-neutral-800/60 pb-2">
                  <span className="text-neutral-500">ذخیره‌سازی:</span>
                  <span className="text-white">دیتابیس محلی (Local DB)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">نیازمند اینترنت:</span>
                  <span className="text-rose-400 font-bold">خیر (۱۰۰٪ آفلاین)</span>
                </div>
              </div>

              <a
                href={downloadLinks.windows_setup}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded bg-white hover:bg-neutral-200 text-neutral-950 font-bold text-xs flex items-center justify-center gap-2 transition-colors mt-2"
              >
                <Download className="w-4 h-4" />
                <span>{language === 'fa' ? 'شروع دانلود رایگان نسخه دسکتاپ' : 'Download Desktop Free App'}</span>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
