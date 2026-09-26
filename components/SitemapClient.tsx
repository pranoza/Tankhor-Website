'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  FileCode,
  Copy,
  Check,
  ExternalLink,
  ChevronDown,
  ChevronLeft,
  Compass,
  Sparkles,
  Boxes,
  Receipt,
  Ruler,
  QrCode,
  Barcode,
  RefreshCw,
  Calculator,
  PieChart,
  CreditCard,
  ArrowLeftRight,
  Monitor,
  Apple,
  Smartphone,
  CheckCircle2,
  HelpCircle,
  FolderTree,
  Building2,
  Scissors,
  Store,
  Layers,
  Search,
  Globe,
  Download,
} from 'lucide-react';
import { featuresList } from '@/data/featuresData';
import { useDownloadLinks } from '@/hooks/useDownloadLinks';
import { useLanguageAndTheme } from '@/context/LanguageAndThemeContext';

export default function SitemapClient() {
  const [copied, setCopied] = useState(false);
  const [guideOpen, setGuideOpen] = useState(true);
  const [filterQuery, setFilterQuery] = useState('');
  const downloadLinks = useDownloadLinks();
  const { openMacModal } = useLanguageAndTheme();

  const sitemapXmlUrl = 'https://tankhor.com/sitemap.xml';

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(sitemapXmlUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const getFeatureIcon = (slug: string) => {
    switch (slug) {
      case 'apparel-inventory':
        return Boxes;
      case 'clothing-accounting':
        return Receipt;
      case 'size-guide-engine':
        return Ruler;
      case 'digital-catalog':
        return QrCode;
      case 'barcode-printing':
        return Barcode;
      case 'woocommerce-sync':
        return RefreshCw;
      case 'landed-cost':
        return Calculator;
      case 'apparel-analytics':
        return PieChart;
      case 'treasury-and-cheques':
        return CreditCard;
      case 'financial-integrations':
        return ArrowLeftRight;
      default:
        return Sparkles;
    }
  };

  const industryPages = [
    {
      title: 'نرم افزار حسابداری بوتیک لباس',
      url: '/boutique-accounting',
      desc: 'سیستم ویژه فروشگاه‌های تک‌فروشی لباس زنانه، مردانه و بچگانه همراه با صندوق لمسی و کاردکس انبار.',
      icon: Store,
      badge: 'بوتیک و فروشگاه',
      changeFreq: 'هفتگی',
      priority: '0.85',
    },
    {
      title: 'نرم افزار حسابداری و مدیریت مزون لباس',
      url: '/maison-accounting',
      desc: 'مدیریت سفارشات دوخت، بیعانه، پرو لباس، دستمزد خیاط و حسابداری تخصصی آتلیه و مزون.',
      icon: Scissors,
      badge: 'مزون و دوخت سفارشی',
      changeFreq: 'هفتگی',
      priority: '0.85',
    },
    {
      title: 'نرم افزار حسابداری تولیدی و کارگاه پوشاک',
      url: '/apparel-manufacturing',
      desc: 'فرمول ساخت (BOM)، کنترل مصرف پارچه و خرج‌کار، دستمزد کارمزدی دوزندگان و بهای تمام‌شده تیراژ.',
      icon: Building2,
      badge: 'کارگاه و تولیدی',
      changeFreq: 'هفتگی',
      priority: '0.85',
    },
    {
      title: 'دانلود نرم افزار حسابداری بوتیک رایگان',
      url: '/free-boutique-software',
      desc: 'دانلود ۱۰۰٪ رایگان نسخه لوکال برای ثبت کالا، چاپ فاکتور و کنترل دخل صندوق بوتیک بدون هزینه اشتراک.',
      icon: Download,
      badge: 'نسخه رایگان',
      changeFreq: 'هفتگی',
      priority: '0.85',
    },
  ];

  const mainPages = [
    {
      title: 'صفحه اصلی تنخور (نرم افزار مدیریت و انبارداری پوشاک)',
      url: '/',
      desc: 'صفحه فرود اصلی، معرفی ماتریس رنگ و سایز، کارکرد آفلاین و اتصال ابری شعب.',
      changeFreq: 'روزانه',
      priority: '1.0',
    },
    {
      title: 'امکانات و قابلیت‌های تخصصی نرم افزار پوشاک',
      url: '/features',
      desc: 'فهرست ۱۰ ماژول حیاتی پوشاک شامل انبارداری، صندوق، راهنمای سایز، کاتالوگ و اتصال وبسایت.',
      changeFreq: 'هفتگی',
      priority: '0.90',
    },
    {
      title: 'تعرفه و پلن‌های تن‌خور پرو (قیمت‌گذاری)',
      url: '/#pricing',
      desc: 'مقایسه پلن پایه، نسخه پرو، شعب زنجیره‌ای و تعرفه‌های سالانه و مادام‌العمر.',
      changeFreq: 'هفتگی',
      priority: '0.80',
    },
    {
      title: 'نسخه رایگان و آفلاین تنخور',
      url: '/#free-version',
      desc: 'امکانات نسخه لوکال بدون محدودیت زمانی جهت استفاده پایدار فروشگاه‌های پوشاک.',
      changeFreq: 'هفتگی',
      priority: '0.80',
    },
    {
      title: 'چرا تنخور؟ (مقایسه با نرم افزارهای عمومی حسابداری)',
      url: '/#why-tankhor',
      desc: 'بررسی تفاوت‌های کلیدی نرم‌افزار تخصصی پوشاک با نرم‌افزارهای سنتی مثل هلو و سپیدار.',
      changeFreq: 'ماهانه',
      priority: '0.75',
    },
    {
      title: 'سوالات متداول صنف پوشاک (FAQ)',
      url: '/#faq',
      desc: 'پاسخ به سوالات پیرامون سازگاری بارکدخوان، پرینتر، انتقال دیتا و اتصال به ووکامرس.',
      changeFreq: 'ماهانه',
      priority: '0.70',
    },
  ];

  const filteredFeatures = featuresList.filter((f) => {
    if (!filterQuery.trim()) return true;
    const q = filterQuery.toLowerCase();
    return (
      f.targetKeyword.toLowerCase().includes(q) ||
      f.metaTitle.toLowerCase().includes(q) ||
      f.subtitle.toLowerCase().includes(q) ||
      f.slug.toLowerCase().includes(q)
    );
  });

  return (
    <div className="space-y-12">
      {/* Top Banner / Submission Box */}
      <section className="relative overflow-hidden rounded-2xl border border-teal-500/30 bg-gradient-to-br from-teal-950/20 via-neutral-900 to-neutral-950 p-6 sm:p-8 shadow-xl">
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-semibold">
              <FileCode className="w-3.5 h-3.5" />
              <span>فایل رسمی نقشه سایت جهت ثبت در گوگل (XML Sitemap)</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              آدرس اینترنتی نقشه سایت (sitemap.xml)
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              این نشانی با فرمت استاندارد پروتکل Sitemaps به صورت خودکار توسط موتورهای جستجوی Google، Bing و یاندکس پایش می‌شود.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <div className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-black/60 border border-neutral-700/80 font-mono text-xs sm:text-sm text-teal-300">
              <Globe className="w-4 h-4 text-neutral-400 shrink-0" />
              <span className="select-all">{sitemapXmlUrl}</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={copyToClipboard}
                className="px-4 py-2.5 rounded-lg bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg shadow-teal-900/30 shrink-0"
              >
                {copied ? <Check className="w-4 h-4 text-teal-200" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'کپی شد!' : 'کپی آدرس XML'}</span>
              </button>

              <a
                href="/sitemap.xml"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 text-neutral-200 font-medium text-xs flex items-center justify-center gap-1.5 transition-all shrink-0"
              >
                <span>مشاهده XML</span>
                <ExternalLink className="w-3.5 h-3.5 text-neutral-400" />
              </a>
            </div>
          </div>
        </div>

        {/* Collapsible Google Search Console Guide */}
        <div className="mt-6 pt-6 border-t border-neutral-800">
          <button
            type="button"
            onClick={() => setGuideOpen(!guideOpen)}
            className="w-full flex items-center justify-between text-right text-xs sm:text-sm font-semibold text-teal-300 hover:text-teal-200 transition-colors"
          >
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal-400" />
              <span>راهنمای ۳ مرحله‌ای ثبت نقشه سایت در Google Search Console</span>
            </span>
            <ChevronDown className={`w-4 h-4 transform transition-transform duration-200 ${guideOpen ? 'rotate-180' : ''}`} />
          </button>

          {guideOpen && (
            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-neutral-300 font-sans">
              <div className="p-4 rounded-xl bg-neutral-900/80 border border-neutral-800/80 space-y-2">
                <div className="w-6 h-6 rounded-full bg-teal-500/20 text-teal-300 flex items-center justify-center font-bold text-xs">
                  ۱
                </div>
                <h4 className="font-bold text-white">ورود به سرچ کنسول</h4>
                <p className="text-neutral-400 leading-relaxed text-[11px]">
                  وارد پنل <a href="https://search.google.com/search-console" target="_blank" rel="noopener noreferrer" className="text-teal-400 underline">Google Search Console</a> شوید و دامنه <strong>tankhor.com</strong> را انتخاب کنید.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-neutral-900/80 border border-neutral-800/80 space-y-2">
                <div className="w-6 h-6 rounded-full bg-teal-500/20 text-teal-300 flex items-center justify-center font-bold text-xs">
                  ۲
                </div>
                <h4 className="font-bold text-white">انتخاب بخش Sitemaps</h4>
                <p className="text-neutral-400 leading-relaxed text-[11px]">
                  از منوی سمت چپ (سایدبار)، بر روی تب <strong>Sitemaps</strong> در زیربخش Indexing کلیک نمایید.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-neutral-900/80 border border-neutral-800/80 space-y-2">
                <div className="w-6 h-6 rounded-full bg-teal-500/20 text-teal-300 flex items-center justify-center font-bold text-xs">
                  ۳
                </div>
                <h4 className="font-bold text-white">ثبت sitemap.xml و Submit</h4>
                <p className="text-neutral-400 leading-relaxed text-[11px]">
                  در کادر <span className="font-mono text-teal-300">Add a new sitemap</span>، کلمه <code className="bg-black/50 px-1 py-0.5 rounded text-teal-300">sitemap.xml</code> را وارد کرده و دکمه <strong>Submit</strong> را بزنید.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Quick Search & Summary Stats */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pb-2">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-lg bg-teal-500/10 border border-teal-500/20 text-teal-400">
            <FolderTree className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-white">فهرست موضوعی صفحات وبسایت تنخور</h2>
            <p className="text-xs text-neutral-400">مجموعاً ۱۶ آدرس و لندینگ پیج سئو شده با تمرکز بر صنف پوشاک</p>
          </div>
        </div>

        <div className="relative max-w-xs w-full">
          <Search className="w-4 h-4 text-neutral-500 absolute right-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={filterQuery}
            onChange={(e) => setFilterQuery(e.target.value)}
            placeholder="جستجو در صفحات و قابلیت‌ها..."
            className="w-full bg-neutral-900 border border-neutral-800 rounded-lg pr-9 pl-3 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-teal-500 transition-colors"
          />
        </div>
      </div>

      {/* Category 1: Main Platform Pages */}
      <section className="space-y-4">
        <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-teal-400" />
            <h3 className="text-sm sm:text-base font-bold text-white">۱. صفحات عمومی و پلتفرم تنخور</h3>
          </div>
          <span className="text-[11px] font-caption-mono text-neutral-500">{mainPages.length} آدرس</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {mainPages.map((page) => (
            <div
              key={page.url}
              className="group p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900 transition-all flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-start justify-between gap-2">
                  <Link
                    href={page.url}
                    className="text-sm font-bold text-white group-hover:text-teal-300 transition-colors flex items-center gap-1.5"
                  >
                    <span>{page.title}</span>
                    <ChevronLeft className="w-3.5 h-3.5 text-neutral-500 group-hover:text-teal-400 transform group-hover:-translate-x-0.5 transition-all" />
                  </Link>
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed">{page.desc}</p>
              </div>

              <div className="mt-4 pt-3 border-t border-neutral-800/80 flex items-center justify-between text-[11px] font-mono text-neutral-500">
                <span className="text-neutral-400 bg-neutral-800/60 px-2 py-0.5 rounded text-[10px]">
                  {page.url}
                </span>
                <div className="flex items-center gap-3">
                  <span>اولویت: {page.priority}</span>
                  <span>بروزرسانی: {page.changeFreq}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Category 2: Industry Solutions */}
      <section className="space-y-4">
        <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
          <div className="flex items-center gap-2">
            <Building2 className="w-4 h-4 text-emerald-400" />
            <h3 className="text-sm sm:text-base font-bold text-white">۲. لندینگ‌های تخصصی اصناف مد و پوشاک</h3>
          </div>
          <span className="text-[11px] font-caption-mono text-neutral-500">{industryPages.length} صفحه هدف</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {industryPages.map((ind) => {
            const Icon = ind.icon;
            return (
              <div
                key={ind.url}
                className="group p-5 rounded-xl bg-neutral-900/60 border border-neutral-800 hover:border-emerald-500/40 hover:bg-neutral-900 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full">
                      {ind.badge}
                    </span>
                    <Icon className="w-4 h-4 text-emerald-400" />
                  </div>

                  <Link
                    href={ind.url}
                    className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors flex items-center gap-1.5"
                  >
                    <span>{ind.title}</span>
                    <ChevronLeft className="w-3.5 h-3.5 text-neutral-500 group-hover:text-emerald-400 transform group-hover:-translate-x-0.5 transition-all" />
                  </Link>

                  <p className="text-xs text-neutral-400 leading-relaxed">{ind.desc}</p>
                </div>

                <div className="mt-4 pt-3 border-t border-neutral-800/80 flex items-center justify-between text-[11px] font-mono text-neutral-500">
                  <span className="text-neutral-400 bg-neutral-800/60 px-2 py-0.5 rounded text-[10px]">
                    {ind.url}
                  </span>
                  <div className="flex items-center gap-3">
                    <span>اولویت: {ind.priority}</span>
                    <span>بروزرسانی: {ind.changeFreq}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Category 3: 10 Specialized Feature Pages */}
      <section className="space-y-4">
        <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <h3 className="text-sm sm:text-base font-bold text-white">۳. صفحات ۱۰ قابلیت تخصصی نرم افزار پوشاک</h3>
          </div>
          <span className="text-[11px] font-caption-mono text-neutral-500">
            {filteredFeatures.length} از {featuresList.length} قابلیت
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredFeatures.map((feat) => {
            const Icon = getFeatureIcon(feat.slug);
            const featureUrl = `/features/${feat.slug}`;
            return (
              <div
                key={feat.slug}
                className="group p-5 rounded-xl bg-neutral-900/60 border border-neutral-800 hover:border-teal-500/40 hover:bg-neutral-900 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-semibold text-teal-400 bg-teal-500/10 border border-teal-500/20 px-2.5 py-0.5 rounded-full">
                      {feat.badge}
                    </span>
                    <Icon className="w-4 h-4 text-teal-400" />
                  </div>

                  <Link
                    href={featureUrl}
                    className="text-sm font-bold text-white group-hover:text-teal-300 transition-colors flex items-center gap-1.5"
                  >
                    <span>{feat.targetKeyword}</span>
                    <ChevronLeft className="w-3.5 h-3.5 text-neutral-500 group-hover:text-teal-400 transform group-hover:-translate-x-0.5 transition-all" />
                  </Link>

                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {feat.subtitle}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-neutral-800/80 flex items-center justify-between text-[11px] font-mono text-neutral-500">
                  <span className="text-neutral-400 bg-neutral-800/60 px-2 py-0.5 rounded text-[10px]">
                    {featureUrl}
                  </span>
                  <div className="flex items-center gap-3">
                    <span>اولویت: 0.80</span>
                    <span>بروزرسانی: هفتگی</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Category 4: App Downloads & Cloud Access */}
      <section className="space-y-4">
        <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
          <div className="flex items-center gap-2">
            <Download className="w-4 h-4 text-blue-400" />
            <h3 className="text-sm sm:text-base font-bold text-white">۴. لینک‌های مستقیم دریافت و پنل ابری</h3>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a
            href={downloadLinks.windows_setup}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 hover:border-blue-500/50 hover:bg-neutral-900 transition-all flex items-center gap-3"
          >
            <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-400">
              <Monitor className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white">دانلود نسخه ویندوز</h4>
              <p className="text-[11px] text-neutral-400">Windows 10 / 11 (EXE)</p>
            </div>
          </a>

          <button
            type="button"
            onClick={openMacModal}
            className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900 transition-all flex items-center gap-3 text-right cursor-pointer"
          >
            <div className="p-2.5 rounded-lg bg-neutral-800 text-neutral-300">
              <Apple className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white">دانلود نسخه مک</h4>
              <p className="text-[11px] text-neutral-400">Apple Silicon & Intel (DMG)</p>
            </div>
          </button>

          <a
            href={downloadLinks.android_setup}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 hover:border-emerald-500/50 hover:bg-neutral-900 transition-all flex items-center gap-3"
          >
            <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400">
              <Smartphone className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white">دانلود اپلیکیشن اندروید</h4>
              <p className="text-[11px] text-neutral-400">مخصوص موبایل و پوز اندرویدی</p>
            </div>
          </a>

          <a
            href="https://my.tankhor.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 hover:border-teal-500/50 hover:bg-neutral-900 transition-all flex items-center gap-3"
          >
            <div className="p-2.5 rounded-lg bg-teal-500/10 text-teal-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-white">پنل ابری مای تنخور</h4>
              <p className="text-[11px] text-neutral-400">my.tankhor.com</p>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
}
