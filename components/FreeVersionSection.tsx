'use client';

import React from 'react';
import { useLanguageAndTheme } from '@/context/LanguageAndThemeContext';
import { useDownloadLinks } from '@/hooks/useDownloadLinks';
import {
  Download,
  Monitor,
  Apple,
  Smartphone,
  ShieldCheck,
  WifiOff,
  Boxes,
  Infinity,
  HardDrive,
  CheckCircle2,
  Sparkles,
  ArrowDownToLine,
  Zap,
} from 'lucide-react';
import { FadeIn } from '@/components/ScrollAnimation';

export default function FreeVersionSection() {
  const { language, openMacModal } = useLanguageAndTheme();
  const downloadLinks = useDownloadLinks();

  const isFa = language === 'fa';

  const downloadCards = [
    {
      id: 'windows',
      name: isFa ? 'نسخه ویندوز (Windows)' : 'Windows App',
      tag: isFa ? 'نسخه پیشنهادی صنف پوشاک' : 'Recommended',
      badgeClass: 'bg-teal-500/10 text-teal-400 border-teal-500/30',
      icon: Monitor,
      iconColor: 'text-teal-400',
      specs: isFa ? 'سازگار با ویندوز ۱۰ و ۱۱ (۶۴ بیتی)' : 'Windows 10 & 11 (64-bit)',
      format: isFa ? 'فایل نصبی مستقیم (Setup.exe)' : 'Direct EXE Installer',
      btnText: isFa ? 'دانلود مستقیم ویندوز' : 'Download for Windows',
      btnHref: downloadLinks.windows_setup,
      isPrimary: true,
      onClick: undefined,
    },
    {
      id: 'macos',
      name: isFa ? 'نسخه مک (macOS)' : 'macOS App',
      tag: isFa ? 'سازگار با اپل سیلیکون و اینتل' : 'Apple Silicon & Intel',
      badgeClass: 'bg-neutral-800 text-neutral-300 border-neutral-700',
      icon: Apple,
      iconColor: 'text-neutral-200',
      specs: isFa ? 'پردازنده‌های سری M1 / M2 / M3 / M4 و Intel' : 'M-Series & Intel Chips',
      format: isFa ? 'بسته نصبی DMG با راهنمای فعال‌سازی' : 'DMG Package',
      btnText: isFa ? 'دریافت نسخه مک' : 'Download for macOS',
      btnHref: undefined,
      isPrimary: false,
      onClick: openMacModal,
    },
    {
      id: 'android',
      name: isFa ? 'نسخه اندروید (Android)' : 'Android App',
      tag: isFa ? 'موبایل و کارتخوان اندرویدی' : 'Mobile & Smart POS',
      badgeClass: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
      icon: Smartphone,
      iconColor: 'text-emerald-400',
      specs: isFa ? 'اندروید نسخه ۸.۰ به بالا و پوزهای هوشمند' : 'Android 8.0+ & Smart POS',
      format: isFa ? 'فایل APK مستقیم بدون نیاز به گوگل‌پلی' : 'Direct APK Installer',
      btnText: isFa ? 'دانلود فایل APK' : 'Download APK',
      btnHref: downloadLinks.android_setup,
      isPrimary: false,
      onClick: undefined,
    },
  ];

  const coreFeatures = [
    {
      icon: Infinity,
      iconBg: 'bg-teal-500/10 text-teal-400 border-teal-500/20',
      title: isFa ? 'رایگان و مادام‌العمر' : '100% Free Forever',
      desc: isFa
        ? 'بدون محدودیت زمانی یا پایان مهلت تست (Trial)؛ سیستم برای همیشه فعال می‌ماند.'
        : 'No trial periods or expiry dates; fully functional indefinitely with zero subscription.',
    },
    {
      icon: WifiOff,
      iconBg: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
      title: isFa ? '۱۰۰٪ آفلاین و پرسرعت' : '100% Offline & Fast',
      desc: isFa
        ? 'بدون نیاز به اینترنت؛ در زمان قطعی شبکه، صندوق فروش و ثبت بارکد بدون توقف کار می‌کند.'
        : 'Zero internet required. Checkout and barcode scanning never stall during network outages.',
    },
    {
      icon: Boxes,
      iconBg: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
      title: isFa ? 'ماتریس کامل رنگ و سایز' : 'Complete Color & Size Matrix',
      desc: isFa
        ? 'ثبت و تفکیک هر مدل لباس با رنگ‌بندی، سایزبندی دقیق، بارکد اختصاصی و کاردکس موجودی.'
        : 'Full SKU variation matrix, barcode tracking, and individual stock ledger per size.',
    },
    {
      icon: HardDrive,
      iconBg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
      title: isFa ? 'امنیت و حفظ حریم شخصی' : 'Local Data Ownership',
      desc: isFa
        ? 'پایگاه داده روی کامپیوتر خودتان ذخیره می‌شود و اطلاعات فروشگاه به هیچ سروری ارسال نمی‌گردد.'
        : 'All sales and stock data are saved strictly on your local computer disk.',
    },
  ];

  return (
    <section
      id="free-version"
      className="py-20 sm:py-28 bg-neutral-900/90 dark:bg-black text-white border-t border-neutral-800"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Clean Header */}
        <FadeIn className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-semibold">
            <ArrowDownToLine className="w-3.5 h-3.5" />
            <span>{isFa ? 'دانلود مستقیم نسخه لوکال بدون ثبت‌نام' : 'Instant Direct Download • No Registration'}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            {isFa
              ? 'دانلود نسخه رایگان نرم‌افزار پوشاک تنخور'
              : 'Download Tankhor Apparel Free Edition'}
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-neutral-400 leading-relaxed max-w-2xl mx-auto">
            {isFa
              ? 'نرم‌افزار را متناسب با سیستم‌عامل خود دریافت کنید، در کمتر از ۲ دقیقه نصب نمایید و مدیریت محصولات، بارکد، انبار و صندوق بوتیک خود را آغاز کنید.'
              : 'Choose your operating system, install in less than 2 minutes, and start managing garments, variants, barcodes, and checkout locally.'}
          </p>
        </FadeIn>

        {/* 3 Clear, Organized Platform Download Cards */}
        <FadeIn delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {downloadCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.id}
                  className={`relative flex flex-col justify-between rounded-2xl p-6 sm:p-7 border transition-all duration-200 ${
                    card.isPrimary
                      ? 'bg-gradient-to-b from-neutral-900 to-neutral-950 border-teal-500/40 shadow-xl shadow-teal-950/20 ring-1 ring-teal-500/20'
                      : 'bg-neutral-950/70 border-neutral-800/80 hover:border-neutral-700/80'
                  }`}
                >
                  <div className="space-y-4">
                    {/* Top Row: Icon + Badge */}
                    <div className="flex items-center justify-between gap-2">
                      <div className={`p-3 rounded-xl bg-neutral-900 border border-neutral-800 ${card.iconColor}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className={`text-[10px] sm:text-[11px] font-bold px-2.5 py-1 rounded-full border ${card.badgeClass}`}>
                        {card.tag}
                      </span>
                    </div>

                    {/* Card Title & Specs */}
                    <div className="space-y-1.5 pt-1">
                      <h3 className="text-lg font-bold text-white tracking-tight">
                        {card.name}
                      </h3>
                      <p className="text-xs text-neutral-400 font-normal">
                        {card.specs}
                      </p>
                    </div>

                    {/* Format Indicator */}
                    <div className="py-2 px-3 rounded-lg bg-neutral-900/60 border border-neutral-800/60 text-[11px] text-neutral-400 flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                      <span>{card.format}</span>
                    </div>
                  </div>

                  {/* Download Action Button */}
                  <div className="pt-6">
                    {card.btnHref ? (
                      <a
                        href={card.btnHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-full py-3 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all active:scale-[0.98] ${
                          card.isPrimary
                            ? 'bg-white hover:bg-neutral-200 text-neutral-950 shadow-md shadow-white/10'
                            : 'bg-neutral-900 hover:bg-neutral-800 text-white border border-neutral-700'
                        }`}
                      >
                        <Download className={`w-4 h-4 ${card.isPrimary ? 'text-teal-700' : 'text-neutral-400'}`} />
                        <span>{card.btnText}</span>
                      </a>
                    ) : (
                      <button
                        type="button"
                        onClick={card.onClick}
                        className="w-full py-3 px-4 rounded-xl font-bold text-xs bg-neutral-900 hover:bg-neutral-800 text-white border border-neutral-700 flex items-center justify-center gap-2 transition-all active:scale-[0.98] cursor-pointer"
                      >
                        <Download className="w-4 h-4 text-neutral-400" />
                        <span>{card.btnText}</span>
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </FadeIn>

        {/* 4 Clean Feature Cards (Organized Grid) */}
        <FadeIn delay={0.2}>
          <div className="rounded-2xl border border-neutral-800/90 bg-neutral-950/60 p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-neutral-800/80 pb-4">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-teal-400" />
                <h4 className="text-sm sm:text-base font-bold text-white">
                  {isFa ? 'آنچه در نسخه رایگان تنخور دریافت می‌کنید' : 'What is included in Tankhor Free'}
                </h4>
              </div>
              <span className="text-[11px] text-teal-400 font-semibold bg-teal-500/10 px-3 py-0.5 rounded-full border border-teal-500/20 w-fit">
                {isFa ? 'بدون هزینه‌های پنهان' : 'No hidden fees'}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {coreFeatures.map((item, idx) => {
                const FeatIcon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800/70 space-y-2.5 flex flex-col justify-between"
                  >
                    <div className="space-y-2">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center border ${item.iconBg}`}>
                        <FeatIcon className="w-4 h-4" />
                      </div>
                      <h5 className="text-xs sm:text-sm font-bold text-white">
                        {item.title}
                      </h5>
                      <p className="text-[11px] sm:text-xs text-neutral-400 leading-relaxed font-normal">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </FadeIn>

        {/* Bottom Reassurance & Trust Bar */}
        <FadeIn delay={0.3}>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-neutral-400 border-t border-neutral-800/80 pt-6">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{isFa ? 'بدون نیاز به ثبت کارت بانکی یا مشخصات فردی' : 'No credit card or personal info required'}</span>
            </div>

            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-teal-400 shrink-0" />
              <span>{isFa ? 'نصب آسان در کمتر از ۲ دقیقه' : 'Fast install in under 2 minutes'}</span>
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
              <span>{isFa ? 'امکان ارتقا به نسخه Pro در آینده با حفظ اطلاعات' : 'Seamless upgrade to Pro with full data preservation'}</span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
