'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguageAndTheme } from '@/context/LanguageAndThemeContext';
import { useDownloadLinks } from '@/hooks/useDownloadLinks';
import {
  Sun,
  Moon,
  Menu,
  X,
  Download,
  LogIn,
  ChevronRight,
  ChevronDown,
  Monitor,
  Apple,
  Smartphone,
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
} from 'lucide-react';

const featuresDropdownItems = [
  {
    slug: 'apparel-inventory',
    title: { fa: 'انبارداری پوشاک و کفش', en: 'Apparel & Shoe Inventory' },
    desc: { fa: 'ماتریس رنگ و سایز و حواله انتقال بین شعب', en: 'Color/size matrix & inter-branch transfers' },
    icon: Boxes,
  },
  {
    slug: 'clothing-accounting',
    title: { fa: 'حسابداری و صندوق پوشاک', en: 'Apparel POS & Accounting' },
    desc: { fa: 'فروش سریع بارکدی، دخل صندوقدار و سود ناخالص', en: 'Fast barcode checkout & cashier drawer' },
    icon: Receipt,
  },
  {
    slug: 'size-guide-engine',
    title: { fa: 'موتور پیشنهاد سایز پوشاک', en: 'Smart Apparel Size Finder' },
    desc: { fa: 'جدول هوشمند سانتیمتری و کاهش مرجوعی آنلاین‌شاپ', en: 'Anti-return sizing widget & calculator' },
    icon: Ruler,
  },
  {
    slug: 'digital-catalog',
    title: { fa: 'کاتالوگ دیجیتال و ویترین پوشاک', en: 'Digital Apparel Showcase' },
    desc: { fa: 'لینک اختصاصی و QR کد شیک برای اینستاگرام و واتساپ', en: 'Online showcase & WhatsApp order link' },
    icon: QrCode,
  },
  {
    slug: 'barcode-printing',
    title: { fa: 'چاپ بارکد و اتیکت پوشاک', en: 'Garment Barcode & Label' },
    desc: { fa: 'چاپ اتیکت با مشخصات مدل، رنگ، سایز و قیمت', en: 'Thermal label printing for clothes' },
    icon: Barcode,
  },
  {
    slug: 'woocommerce-sync',
    title: { fa: 'اتصال انبار پوشاک به ووکامرس', en: 'Apparel WooCommerce Sync' },
    desc: { fa: 'سینک لحظه‌ای موجودی سایت و مغازه فیزیکی', en: 'Real-time stock sync for WordPress' },
    icon: RefreshCw,
  },
  {
    slug: 'landed-cost',
    title: { fa: 'بهای تمام‌شده پوشاک (Landed Cost)', en: 'Garment Landed Cost' },
    desc: { fa: 'سرشکن هزینه حمل، گمرک و کارگو روی هر تکه لباس', en: 'Shipping & customs allocation per garment' },
    icon: Calculator,
  },
  {
    slug: 'apparel-analytics',
    title: { fa: 'آمار و تحلیل فروش پوشاک', en: 'Fashion Sales Analytics' },
    desc: { fa: 'تحلیل پرفروش‌ترین رنگ‌ها و رسوب انبار', en: 'Best-selling colors, models & dead stock' },
    icon: PieChart,
  },
  {
    slug: 'treasury-and-cheques',
    title: { fa: 'خزانه‌داری و چک صیادی بوتیک', en: 'Apparel Treasury & Cheques' },
    desc: { fa: 'هشدار سررسید چک بنکداران و تفکیک پوز دخل', en: 'Automated due date alerts & cash flow' },
    icon: CreditCard,
  },
  {
    slug: 'financial-integrations',
    title: { fa: 'اتصال انبار پوشاک به سپیدار و هلو', en: 'Accounting Software Bridges' },
    desc: { fa: 'خروجی اسناد دوبل تراز شده و گزارش سامانه مؤدیان', en: 'Standard export to Sepidar & Holo' },
    icon: ArrowLeftRight,
  },
];

export default function Navbar() {
  const { language, theme, toggleTheme, toggleLanguage, openMacModal } = useLanguageAndTheme();
  const downloadLinks = useDownloadLinks();
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isFeaturesDropdownOpen, setIsFeaturesDropdownOpen] = useState(false);
  const [isMobileFeaturesExpanded, setIsMobileFeaturesExpanded] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const getNavHref = (href: string) => {
    if (href.startsWith('#')) {
      return isHome ? href : `/${href}`;
    }
    return href;
  };

  const handleMouseEnterFeatures = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setIsFeaturesDropdownOpen(true);
  };

  const handleMouseLeaveFeatures = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsFeaturesDropdownOpen(false);
    }, 150);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Top Vercel Banner */}
      <div className="bg-neutral-900 text-neutral-300 dark:bg-neutral-950 dark:text-neutral-300 border-b border-neutral-800 text-[10px] sm:text-xs h-8 fixed top-0 left-0 right-0 z-50 flex items-center justify-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 text-center font-caption-mono whitespace-nowrap overflow-hidden">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse shrink-0" />
        <span className="truncate max-w-[calc(100vw-90px)] sm:max-w-none">
          {language === 'fa' ? (
            <>
              <span className="sm:hidden">دانلود رایگان تنخور (ویندوز، مک و اندروید)</span>
              <span className="hidden sm:inline">تنخور؛ نرم‌افزار تخصصی مدیریت و انبارداری پوشاک • نسخه رایگان و آفلاین</span>
            </>
          ) : (
            <>
              <span className="sm:hidden">Download Tankhor (Windows, Mac & Android)</span>
              <span className="hidden sm:inline">Tankhor: Apparel Inventory & Variant Management • Free & Offline</span>
            </>
          )}
        </span>
        <Link
          href={getNavHref('#free-version')}
          className="text-white hover:text-teal-300 underline underline-offset-2 inline-flex items-center gap-0.5 font-semibold transition-colors shrink-0 text-[10px] sm:text-xs"
        >
          <span>{language === 'fa' ? 'دانلود' : 'Download'}</span>
          <ChevronRight className="w-3 h-3 rtl:rotate-180" />
        </Link>
      </div>

      <header
        className={`fixed top-8 left-0 right-0 z-40 transition-all duration-200 h-16 flex items-center ${
          isScrolled
            ? 'bg-white/90 dark:bg-[#0a0a0a]/90 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800/80 shadow-sm'
            : 'bg-white/50 dark:bg-[#0a0a0a]/50 backdrop-blur-sm border-b border-neutral-200/60 dark:border-neutral-800/40'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex items-center justify-between gap-4">
            {/* Logo Monogram */}
            <Link
              href="/"
              className="flex items-center gap-2.5 shrink-0 focus:outline-none group"
              aria-label="Tankhor Homepage"
            >
              <div className="relative h-8 flex items-center shrink-0">
                <Image
                  src="/logo-dark.png"
                  alt="تنخور | TANKHOR"
                  width={110}
                  height={32}
                  className="h-7 w-auto dark:hidden object-contain transition-transform duration-200 group-hover:scale-105"
                  priority
                />
                <Image
                  src="/logo-light.png"
                  alt="تنخور | TANKHOR"
                  width={110}
                  height={32}
                  className="h-7 w-auto hidden dark:block object-contain transition-transform duration-200 group-hover:scale-105"
                  priority
                />
              </div>
              <span className="font-bold text-sm sm:text-base tracking-tight text-neutral-900 dark:text-white shrink-0">
                {language === 'fa' ? 'تن‌خور' : 'TANKHOR'}
              </span>
            </Link>

            {/* Desktop Nav Links */}
            <nav className="hidden md:flex items-center gap-5 lg:gap-6 text-xs font-medium text-neutral-600 dark:text-neutral-400 shrink-0">
              {/* 1. Home Link */}
              <Link
                href="/"
                className={`transition-colors whitespace-nowrap hover:text-neutral-900 dark:hover:text-white ${
                  isHome
                    ? 'text-teal-600 dark:text-teal-400 font-semibold'
                    : 'text-neutral-600 dark:text-neutral-400'
                }`}
              >
                {language === 'fa' ? 'خانه' : 'Home'}
              </Link>

              {/* 2. Features Dropdown */}
              <div
                className="relative"
                onMouseEnter={handleMouseEnterFeatures}
                onMouseLeave={handleMouseLeaveFeatures}
              >
                <button
                  type="button"
                  onClick={() => setIsFeaturesDropdownOpen((prev) => !prev)}
                  className={`inline-flex items-center gap-1 transition-colors whitespace-nowrap cursor-pointer hover:text-neutral-900 dark:hover:text-white ${
                    pathname.startsWith('/features')
                      ? 'text-teal-600 dark:text-teal-400 font-semibold'
                      : 'text-neutral-600 dark:text-neutral-400'
                  }`}
                  aria-expanded={isFeaturesDropdownOpen}
                >
                  <span>{language === 'fa' ? 'امکانات' : 'Features'}</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      isFeaturesDropdownOpen
                        ? 'rotate-180 text-teal-600 dark:text-teal-400'
                        : 'text-neutral-400'
                    }`}
                  />
                </button>

                {/* Desktop Dropdown Mega-Panel */}
                {isFeaturesDropdownOpen && (
                  <div
                    className="absolute top-full -right-28 lg:right-0 mt-2.5 w-[560px] lg:w-[620px] bg-white/95 dark:bg-[#111111]/95 backdrop-blur-xl rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-2xl p-4 z-50 animate-in fade-in zoom-in-95 duration-150"
                    onMouseEnter={handleMouseEnterFeatures}
                    onMouseLeave={handleMouseLeaveFeatures}
                  >
                    <div className="flex items-center justify-between pb-3 mb-3 border-b border-neutral-100 dark:border-neutral-800">
                      <div className="flex items-center gap-2">
                        <span className="p-1 rounded bg-teal-50 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400">
                          <Sparkles className="w-3.5 h-3.5" />
                        </span>
                        <span className="font-bold text-xs text-neutral-900 dark:text-white">
                          {language === 'fa' ? '۱۰ قابلیت تخصصی تنخور برای صنف پوشاک' : '10 Specialized Apparel Capabilities'}
                        </span>
                      </div>
                      <Link
                        href="/features"
                        onClick={() => setIsFeaturesDropdownOpen(false)}
                        className="text-[11px] font-semibold text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 inline-flex items-center gap-1"
                      >
                        <span>{language === 'fa' ? 'هاب همه امکانات' : 'All Features Hub'}</span>
                        <ChevronRight className="w-3 h-3 rtl:rotate-180" />
                      </Link>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      {featuresDropdownItems.map((item) => {
                        const Icon = item.icon;
                        const isItemActive = pathname === `/features/${item.slug}`;
                        return (
                          <Link
                            key={item.slug}
                            href={`/features/${item.slug}`}
                            onClick={() => setIsFeaturesDropdownOpen(false)}
                            className={`group flex items-start gap-2.5 p-2 rounded-lg transition-all ${
                              isItemActive
                                ? 'bg-teal-50 dark:bg-teal-950/40 border border-teal-200/60 dark:border-teal-800/60'
                                : 'hover:bg-neutral-100/80 dark:hover:bg-neutral-800/60'
                            }`}
                          >
                            <div className="p-1.5 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 group-hover:bg-teal-600 group-hover:text-white transition-colors shrink-0 mt-0.5">
                              <Icon className="w-4 h-4" />
                            </div>
                            <div className="space-y-0.5 overflow-hidden">
                              <p className="text-xs font-semibold text-neutral-900 dark:text-neutral-200 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors truncate">
                                {item.title[language]}
                              </p>
                              <p className="text-[10px] text-neutral-500 dark:text-neutral-400 line-clamp-1 leading-snug">
                                {item.desc[language]}
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>

                    <div className="mt-3 pt-2.5 border-t border-neutral-100 dark:border-neutral-800/80 flex items-center justify-between text-[11px] text-neutral-500 dark:text-neutral-400 bg-neutral-50/70 dark:bg-neutral-900/50 -mx-4 -mb-4 p-3 rounded-b-xl">
                      <span>
                        {language === 'fa'
                          ? 'تمام امکانات در نسخه پایه رایگان و آفلاین فعال هستند'
                          : 'All tools fully functional offline in Free edition'}
                      </span>
                      <Link
                        href="/features"
                        onClick={() => setIsFeaturesDropdownOpen(false)}
                        className="font-semibold text-teal-600 dark:text-teal-400 hover:underline"
                      >
                        {language === 'fa' ? 'مشاهده مقایسه و جزئیات فنی ←' : 'Compare & Tech Specs →'}
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* 3. Solutions */}
              <Link
                href={getNavHref('#solutions')}
                className="hover:text-neutral-900 dark:hover:text-white transition-colors whitespace-nowrap"
              >
                {language === 'fa' ? 'راهکارها' : 'Solutions'}
              </Link>

              {/* 4. Smart SizeFinder */}
              <Link
                href="/features/size-guide-engine"
                className={`transition-colors whitespace-nowrap inline-flex items-center gap-1 hover:text-neutral-900 dark:hover:text-white ${
                  pathname === '/features/size-guide-engine'
                    ? 'text-teal-600 dark:text-teal-400 font-semibold'
                    : 'text-neutral-600 dark:text-neutral-400'
                }`}
              >
                <Ruler className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                <span>{language === 'fa' ? 'سایزفیندر هوشمند' : 'Size Finder'}</span>
                <span className="text-[9px] font-semibold px-1 py-0.5 rounded bg-teal-100 dark:bg-teal-950 text-teal-700 dark:text-teal-300 leading-none">
                  {language === 'fa' ? 'ویژه' : 'Pro'}
                </span>
              </Link>

              {/* 5. Tankhor Pro */}
              <Link
                href={getNavHref('#pricing')}
                className="hover:text-neutral-900 dark:hover:text-white transition-colors whitespace-nowrap inline-flex items-center gap-1.5 group"
              >
                <span className="group-hover:text-amber-500 transition-colors">
                  {language === 'fa' ? 'تن‌خور پرو' : 'Tankhor Pro'}
                </span>
                <span className="text-[9px] font-extrabold px-1.5 py-0.5 rounded bg-gradient-to-r from-amber-500 to-teal-500 text-white leading-none shadow-xs">
                  PRO
                </span>
              </Link>
            </nav>

            {/* Right Action Buttons */}
            <div className="hidden sm:flex items-center gap-2 shrink-0">
              {/* Language Switch */}
              <button
                onClick={toggleLanguage}
                className="h-8 px-2.5 flex items-center justify-center font-caption-mono text-[11px] font-semibold rounded-md text-neutral-700 dark:text-neutral-300 bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200/80 dark:hover:bg-neutral-700/80 border border-neutral-200 dark:border-neutral-700 transition-all whitespace-nowrap leading-none cursor-pointer"
                title={language === 'fa' ? 'Switch to English' : 'تغییر به فارسی'}
              >
                <span>{language === 'fa' ? 'EN' : 'FA'}</span>
              </button>

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="h-8 w-8 flex items-center justify-center rounded-md text-neutral-700 dark:text-neutral-300 bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200/80 dark:hover:bg-neutral-700/80 border border-neutral-200 dark:border-neutral-700 transition-all shrink-0 cursor-pointer"
                aria-label="Toggle dark/light mode"
              >
                {theme === 'dark' ? (
                  <Sun className="w-3.5 h-3.5 text-amber-400" />
                ) : (
                  <Moon className="w-3.5 h-3.5 text-neutral-700" />
                )}
              </button>

              {/* Login Button */}
              <a
                href="https://my.tankhor.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-8 px-3.5 flex items-center justify-center gap-1.5 text-xs font-medium text-neutral-800 dark:text-neutral-200 hover:text-neutral-900 dark:hover:text-white bg-transparent hover:bg-neutral-100 dark:hover:bg-neutral-800/80 rounded-md border border-neutral-300/80 dark:border-neutral-700/80 transition-all whitespace-nowrap leading-none"
              >
                <LogIn className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                <span>{language === 'fa' ? 'ورود به پنل' : 'Log In'}</span>
              </a>

              {/* Direct Download Button (Directus Windows link) */}
              <a
                href={downloadLinks.windows_setup}
                target="_blank"
                rel="noopener noreferrer"
                className="h-8 px-3.5 flex items-center justify-center gap-1.5 rounded-md bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-semibold text-xs shadow-sm hover:opacity-90 transition-all active:scale-95 whitespace-nowrap leading-none"
              >
                <Download className="w-3.5 h-3.5 text-teal-300 dark:text-teal-600" />
                <span>{language === 'fa' ? 'دانلود رایگان' : 'Free Download'}</span>
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="flex sm:hidden items-center gap-2 shrink-0">
              <button
                onClick={toggleLanguage}
                className="h-8 w-8 flex items-center justify-center font-caption-mono text-[11px] font-semibold text-neutral-700 dark:text-neutral-300 bg-neutral-100 dark:bg-neutral-800 rounded-md border border-neutral-200 dark:border-neutral-700 cursor-pointer"
                title={language === 'fa' ? 'Switch to English' : 'تغییر به فارسی'}
              >
                <span>{language === 'fa' ? 'EN' : 'FA'}</span>
              </button>
              <button
                onClick={toggleTheme}
                className="h-8 w-8 flex items-center justify-center text-neutral-700 dark:text-neutral-300 bg-neutral-100 dark:bg-neutral-800 rounded-md border border-neutral-200 dark:border-neutral-700 cursor-pointer"
                aria-label="Toggle dark/light mode"
              >
                {theme === 'dark' ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5 text-neutral-700" />}
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="h-8 w-8 flex items-center justify-center text-neutral-800 dark:text-neutral-100 bg-neutral-100 dark:bg-neutral-800 rounded-md border border-neutral-200 dark:border-neutral-700 cursor-pointer"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Drawer */}
        {isMobileMenuOpen && (
          <div className="sm:hidden fixed top-24 left-0 right-0 max-h-[calc(100vh-6rem)] overflow-y-auto bg-white/95 dark:bg-[#0a0a0a]/95 backdrop-blur-2xl border-b border-neutral-200 dark:border-neutral-800 px-5 py-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-2.5">
              {/* Home */}
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-3 py-2 rounded-md text-sm font-semibold transition-colors ${
                  isHome
                    ? 'text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-950/40'
                    : 'text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                }`}
              >
                {language === 'fa' ? 'خانه' : 'Home'}
              </Link>

              {/* Features Accordion in Mobile */}
              <div className="rounded-md border border-neutral-200/80 dark:border-neutral-800 overflow-hidden">
                <button
                  type="button"
                  onClick={() => setIsMobileFeaturesExpanded((prev) => !prev)}
                  className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium text-neutral-800 dark:text-neutral-200 bg-neutral-50 dark:bg-neutral-900/60 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                    <span>{language === 'fa' ? 'امکانات تخصصی (۱۰ قابلیت)' : 'Specialized Features (10)'}</span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isMobileFeaturesExpanded ? 'rotate-180 text-teal-600 dark:text-teal-400' : 'text-neutral-400'
                    }`}
                  />
                </button>

                {isMobileFeaturesExpanded && (
                  <div className="p-2 space-y-1 bg-white dark:bg-neutral-950">
                    <Link
                      href="/features"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center justify-between px-2.5 py-1.5 rounded-md text-xs font-bold text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-950/50"
                    >
                      <span>{language === 'fa' ? 'هاب همه ۱۰ قابلیت تخصصی' : 'All 10 Features Hub'}</span>
                      <ChevronRight className="w-3.5 h-3.5 rtl:rotate-180" />
                    </Link>
                    {featuresDropdownItems.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.slug}
                          href={`/features/${item.slug}`}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="flex items-center gap-2 px-2.5 py-1.5 rounded-md text-xs text-neutral-700 dark:text-neutral-300 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                        >
                          <Icon className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400 shrink-0" />
                          <span className="truncate">{item.title[language]}</span>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Solutions */}
              <Link
                href={getNavHref('#solutions')}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md text-sm font-medium text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800"
              >
                {language === 'fa' ? 'راهکارها' : 'Solutions'}
              </Link>

              {/* Smart SizeFinder */}
              <Link
                href="/features/size-guide-engine"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center justify-between px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  pathname === '/features/size-guide-engine'
                    ? 'text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-950/40 font-semibold'
                    : 'text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Ruler className="w-4 h-4 text-teal-600 dark:text-teal-400" />
                  <span>{language === 'fa' ? 'سایزفیندر هوشمند پوشاک' : 'Smart Size Finder'}</span>
                </div>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-teal-100 dark:bg-teal-950 text-teal-700 dark:text-teal-300">
                  {language === 'fa' ? 'ویژه' : 'Pro'}
                </span>
              </Link>

              {/* Tankhor Pro */}
              <Link
                href={getNavHref('#pricing')}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-between px-3 py-2 rounded-md text-sm font-medium text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800"
              >
                <span>{language === 'fa' ? 'تن‌خور پرو' : 'Tankhor Pro'}</span>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-gradient-to-r from-amber-500 to-teal-500 text-white">
                  PRO
                </span>
              </Link>

              <hr className="border-neutral-200 dark:border-neutral-800 my-2" />
              <div className="flex flex-col gap-2">
                <a
                  href={downloadLinks.windows_setup}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full py-2.5 rounded-md bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-semibold text-xs flex items-center justify-center gap-2"
                >
                  <Monitor className="w-4 h-4 text-teal-400 dark:text-teal-600" />
                  <span>{language === 'fa' ? 'دانلود نسخه ویندوز' : 'Download Windows App'}</span>
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    openMacModal();
                  }}
                  className="w-full py-2.5 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 font-semibold text-xs flex items-center justify-center gap-2 border border-neutral-200 dark:border-neutral-700 cursor-pointer"
                >
                  <Apple className="w-4 h-4" />
                  <span>{language === 'fa' ? 'دانلود نسخه مک (macOS)' : 'Download macOS App'}</span>
                </button>
                <a
                  href={downloadLinks.android_setup}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full py-2.5 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 font-semibold text-xs flex items-center justify-center gap-2 border border-neutral-200 dark:border-neutral-700"
                >
                  <Smartphone className="w-4 h-4 text-emerald-500" />
                  <span>{language === 'fa' ? 'دانلود نسخه اندروید (APK)' : 'Download Android App'}</span>
                </a>
                <a
                  href="https://my.tankhor.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full py-2.5 rounded-md bg-teal-600 text-white font-semibold text-xs flex items-center justify-center gap-2"
                >
                  <LogIn className="w-4 h-4" />
                  <span>{language === 'fa' ? 'ورود به پنل (my.tankhor.com)' : 'Web Login'}</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

