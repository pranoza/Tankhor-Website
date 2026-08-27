'use client';

import React, { useState } from 'react';
import { useLanguageAndTheme } from '@/context/LanguageAndThemeContext';
import { X, Sparkles, CheckCircle2, Download, Phone, Building, Lock } from 'lucide-react';

export default function DemoRequestModal() {
  const { language, isDemoModalOpen, closeDemoModal } = useLanguageAndTheme();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    brandName: '',
    phone: '',
    businessType: 'boutique',
    city: '',
  });

  if (!isDemoModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.brandName || !formData.phone) return;
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    setFormData({ brandName: '', phone: '', businessType: 'boutique', city: '' });
    closeDemoModal();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/70 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#171717] border border-neutral-800 rounded-2xl p-6 sm:p-8 max-w-lg w-full shadow-vercel-lg relative text-white">
        {/* Close Button */}
        <button
          onClick={resetAndClose}
          className="absolute top-4 right-4 rtl:right-4 rtl:left-auto ltr:left-4 ltr:right-auto p-1.5 rounded-md text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="font-caption-mono inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-800 text-teal-300 text-xs font-semibold border border-neutral-700">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{language === 'fa' ? 'راه‌اندازی آنی' : 'Instant Setup'}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {language === 'fa' ? 'شروع رایگان و ساخت پنل تنخور' : 'Create Your Free Tankhor Workspace'}
              </h3>
              <p className="text-xs text-neutral-400">
                {language === 'fa'
                  ? 'اطلاعات برند خود را وارد کنید تا لینک دانلود نرم‌افزار آفلاین و ورود به پنل ابری ارسال شود.'
                  : 'Fill in your brand info to receive instant offline desktop installer links and web app credentials.'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Business Type Selector */}
              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                  {language === 'fa' ? 'نوع کسب‌وکار شما:' : 'Business Type:'}
                </label>
                <select
                  value={formData.businessType}
                  onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                  className="w-full bg-[#0a0a0a] border border-neutral-800 rounded-lg p-3 text-xs sm:text-sm text-neutral-200 focus:outline-none focus:border-teal-500"
                >
                  <option value="boutique">{language === 'fa' ? 'فروشگاه و بوتیک حضوری پوشاک' : 'Apparel Boutique / Store'}</option>
                  <option value="maison">{language === 'fa' ? 'مزون و برند طراحی لباس' : 'Fashion Maison / Atelier'}</option>
                  <option value="factory">{language === 'fa' ? 'تولیدی و کارگاه خیاطی' : 'Garment Factory / Workshop'}</option>
                  <option value="online">{language === 'fa' ? 'آنلاین‌شاپ اینستاگرام / وب‌سایت' : 'Online Store / Instagram Shop'}</option>
                  <option value="shoes">{language === 'fa' ? 'فروشگاه کیف، کفش و اکسسوری' : 'Footwear, Bags & Accessories'}</option>
                </select>
              </div>

              {/* Brand Name */}
              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                  {language === 'fa' ? 'نام برند یا فروشگاه:' : 'Brand / Store Name:'}
                </label>
                <div className="relative">
                  <Building className="w-4 h-4 text-neutral-500 absolute top-1/2 -translate-y-1/2 right-3 rtl:right-3 ltr:left-3" />
                  <input
                    type="text"
                    required
                    value={formData.brandName}
                    onChange={(e) => setFormData({ ...formData, brandName: e.target.value })}
                    placeholder={language === 'fa' ? 'مثال: بوتیک لورا' : 'e.g. Lorra Boutique'}
                    className="w-full bg-[#0a0a0a] border border-neutral-800 rounded-lg p-3 pr-10 rtl:pr-10 ltr:pl-10 text-xs sm:text-sm text-neutral-200 focus:outline-none focus:border-teal-500"
                  />
                </div>
              </div>

              {/* Mobile Phone */}
              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                  {language === 'fa' ? 'شماره موبایل (جهت دریافت لینک ورود):' : 'Mobile Phone Number:'}
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-neutral-500 absolute top-1/2 -translate-y-1/2 right-3 rtl:right-3 ltr:left-3" />
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder={language === 'fa' ? '۰۹۱۲۳۴۵۶۷۸۹' : '+98 912 345 6789'}
                    className="font-caption-mono w-full bg-[#0a0a0a] border border-neutral-800 rounded-lg p-3 pr-10 rtl:pr-10 ltr:pl-10 text-xs sm:text-sm text-neutral-200 font-en focus:outline-none focus:border-teal-500"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-white text-[#171717] hover:bg-neutral-200 font-bold text-sm shadow-vercel-md transition-all flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-teal-600" />
                  <span>{language === 'fa' ? 'ایجاد رایگان پنل و دانلود نسخه دسکتاپ' : 'Create Free Panel & Get Installer'}</span>
                </button>
              </div>

              <div className="flex flex-col items-center justify-center gap-1.5 text-[11px] text-neutral-400 pt-1">
                <div className="flex items-center gap-1.5">
                  <Lock className="w-3 h-3 text-emerald-400" />
                  <span>{language === 'fa' ? 'اطلاعات شما ۱۰۰٪ محرمانه نگهداری می‌شود' : 'Your data is 100% confidential'}</span>
                </div>
                <a href="tel:02155416274" className="text-teal-400 hover:underline flex items-center gap-1">
                  <Phone className="w-3 h-3" />
                  <span>{language === 'fa' ? 'پشتیبانی تلفنی مستند: ۰۲۱-۵۵۴۱۶۲۷۴' : 'Phone Support: 021-55416274'}</span>
                </a>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation Success View */
          <div className="text-center py-6 space-y-5 animate-in zoom-in-95 duration-200">
            <div className="w-14 h-14 mx-auto rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold text-white">
                {language === 'fa' ? 'پنل شما با موفقیت آماده شد!' : 'Your Tankhor Workspace is Ready!'}
              </h3>
              <p className="text-xs text-neutral-300">
                {language === 'fa'
                  ? `خوش آمدید! اطلاعات پنل برند «${formData.brandName}» برای شماره ${formData.phone} ثبت گردید.`
                  : `Welcome! Credentials for "${formData.brandName}" have been registered for ${formData.phone}.`}
              </p>
            </div>

            <div className="p-4 bg-[#0a0a0a] rounded-xl border border-neutral-800 space-y-3 text-xs text-neutral-300 text-right">
              <div className="font-caption-mono flex items-center justify-between font-bold text-teal-400">
                <span>{language === 'fa' ? 'نسخه دسکتاپ (آفلاین کاملاً رایگان)' : 'Desktop Offline Version'}</span>
                <span className="font-en">v3.4.0 (Windows / Mac)</span>
              </div>
              <a
                href="https://github.com/brandyar/Tankhor/releases/latest"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 bg-neutral-800 hover:bg-neutral-700 text-white font-semibold rounded-lg flex items-center justify-center gap-2 border border-neutral-700 transition-colors"
              >
                <Download className="w-4 h-4 text-teal-400" />
                <span>{language === 'fa' ? 'دانلود مستقیم فایل نصب (ویندوز / مک / اندروید)' : 'Direct Download Installer (Windows / Mac / Android)'}</span>
              </a>
            </div>

            <button
              onClick={resetAndClose}
              className="px-6 py-2 rounded-full bg-white text-[#171717] font-bold text-xs"
            >
              {language === 'fa' ? 'بستن پنجره' : 'Close Window'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
