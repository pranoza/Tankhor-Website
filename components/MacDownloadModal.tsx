'use client';

import React, { useState } from 'react';
import { useLanguageAndTheme } from '@/context/LanguageAndThemeContext';
import { Apple, Copy, Check, Terminal, ExternalLink, X, ShieldAlert, ArrowDownCircle } from 'lucide-react';

interface MacDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  downloadUrl: string;
}

export default function MacDownloadModal({
  isOpen,
  onClose,
  downloadUrl,
}: MacDownloadModalProps) {
  const { language } = useLanguageAndTheme();
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const commandText = 'sudo xattr -rd com.apple.quarantine /Applications/Tankhor.app';

  const handleCopy = () => {
    try {
      if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
        navigator.clipboard.writeText(commandText).catch(() => {});
      }
    } catch (e) {}
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
      {/* Modal Container */}
      <div className="relative w-full max-w-lg bg-white dark:bg-[#121212] border border-neutral-200 dark:border-neutral-800 rounded-2xl shadow-2xl overflow-hidden text-neutral-900 dark:text-neutral-100 font-sans">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-100 dark:border-neutral-800/80 bg-neutral-50/50 dark:bg-neutral-900/40">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 flex items-center justify-center shrink-0">
              <Apple className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold tracking-tight">
                {language === 'fa' ? 'راهنمای راه‌اندازی نسخه مک (macOS)' : 'macOS Installation Guide'}
              </h3>
              <p className="text-[11px] text-neutral-500 dark:text-neutral-400 font-caption-mono">
                Tankhor.app for Mac
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-neutral-400 hover:text-neutral-800 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-5 text-right rtl:text-right ltr:text-left">
          
          {/* Download Action Alert Box */}
          <div className="p-3.5 rounded-xl bg-teal-500/10 border border-teal-500/20 text-teal-800 dark:text-teal-300 flex items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2">
              <ArrowDownCircle className="w-4 h-4 shrink-0 text-teal-600 dark:text-teal-400 animate-bounce" />
              <span>
                {language === 'fa'
                  ? 'جهت دریافت فایل، روی دکمه دانلود مستقیم کلیک کنید:'
                  : 'Click below if your download did not start:'}
              </span>
            </div>
            <a
              href={downloadUrl || 'https://github.com/brandyar/Tankhor/releases/latest'}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-lg bg-teal-600 dark:bg-teal-500 hover:bg-teal-700 dark:hover:bg-teal-400 text-white dark:text-neutral-950 font-bold text-xs flex items-center gap-1.5 shrink-0 transition-colors shadow-sm"
            >
              <span>{language === 'fa' ? 'دانلود فایل مک' : 'Download macOS'}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Guide Explanation Banner */}
          <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-800 dark:text-amber-300 flex items-start gap-2.5 text-xs">
            <ShieldAlert className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
            <p className="leading-relaxed font-normal">
              {language === 'fa'
                ? 'به دلیل قوانین امنیتی macOS (Gatekeeper)، پس از انتقال برنامه به پوشه Applications، یک‌بار دستور زیر را در ترمینال اجرا کنید:'
                : 'Due to macOS Gatekeeper rules, run the following command once in Terminal after moving the app to Applications:'}
            </p>
          </div>

          {/* Steps List */}
          <div className="space-y-3.5 text-xs text-neutral-600 dark:text-neutral-300 font-normal">
            
            {/* Step 1 */}
            <div className="flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-full bg-neutral-100 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 font-bold text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                ۱
              </span>
              <p className="leading-relaxed">
                {language === 'fa' ? (
                  <>فایل دانلود شده را باز کرده و فایل <strong className="text-neutral-900 dark:text-white font-bold">Tankhor.app</strong> را به پوشه <strong className="text-neutral-900 dark:text-white font-bold">Applications</strong> منتقل کنید.</>
                ) : (
                  <>Open the downloaded file and move <strong className="text-neutral-900 dark:text-white">Tankhor.app</strong> to your <strong className="text-neutral-900 dark:text-white">Applications</strong> folder.</>
                )}
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-full bg-neutral-100 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 font-bold text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                ۲
              </span>
              <p className="leading-relaxed">
                {language === 'fa' ? (
                  <>برنامه <strong className="text-neutral-900 dark:text-white font-bold">Terminal</strong> را در مک باز کنید (می‌توانید کلیدهای <code className="px-1 py-0.5 bg-neutral-100 dark:bg-neutral-800 rounded border border-neutral-200 dark:border-neutral-700 text-[10px]">Cmd + Space</code> را زده و Terminal را جستجو کنید).</>
                ) : (
                  <>Open the <strong className="text-neutral-900 dark:text-white">Terminal</strong> app on your Mac (press <code className="px-1 py-0.5 bg-neutral-100 dark:bg-neutral-800 rounded text-[10px]">Cmd + Space</code> and search for Terminal).</>
                )}
              </p>
            </div>

            {/* Step 3: Terminal Command Box */}
            <div className="flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-full bg-neutral-100 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 font-bold text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                ۳
              </span>
              <div className="flex-1 space-y-2">
                <p className="leading-relaxed">
                  {language === 'fa' ? 'دستور زیر را کپی کرده و در ترمینال قرار دهید:' : 'Copy and paste this command into Terminal:'}
                </p>

                {/* Code Terminal Display */}
                <div className="relative group bg-neutral-900 text-neutral-100 dark:bg-black border border-neutral-800 rounded-xl p-3 font-mono text-[11px] dir-ltr text-left overflow-x-auto flex items-center justify-between gap-2 shadow-inner">
                  <div className="flex items-center gap-2 overflow-x-auto text-teal-400 select-all">
                    <Terminal className="w-3.5 h-3.5 text-neutral-500 shrink-0" />
                    <span>{commandText}</span>
                  </div>
                  <button
                    onClick={handleCopy}
                    className="px-2.5 py-1 rounded-md bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-[10px] font-sans flex items-center gap-1 shrink-0 transition-all border border-neutral-700 active:scale-95"
                    title="کپی دستور"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span className="text-emerald-400 font-bold">{language === 'fa' ? 'کپی شد!' : 'Copied!'}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3 text-neutral-400" />
                        <span>{language === 'fa' ? 'کپی دستور' : 'Copy'}</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-full bg-neutral-100 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 font-bold text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                ۴
              </span>
              <p className="leading-relaxed">
                {language === 'fa' ? (
                  <>کلید Enter را بزنید و سپس <strong className="text-neutral-900 dark:text-white font-bold">رمز عبور مک</strong> خود را تایپ کرده و Enter دهید (هنگام تایپ رمز، کاراکتری نمایش داده نمی‌شود). اکنون تنخور آماده اجراست!</>
                ) : (
                  <>Press Enter, type your <strong className="text-neutral-900 dark:text-white">Mac system password</strong>, and hit Enter (characters will not show while typing). Tankhor is now ready!</>
                )}
              </p>
            </div>

          </div>

        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 bg-neutral-50 dark:bg-neutral-900/60 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between gap-3">
          <button
            onClick={handleCopy}
            className="px-4 py-2 rounded-xl bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-800 dark:text-neutral-200 text-xs font-bold transition-all flex items-center gap-1.5"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? (language === 'fa' ? 'دستور کپی شد' : 'Copied') : (language === 'fa' ? 'کپی دستور ترمینال' : 'Copy Command')}</span>
          </button>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-xs font-bold hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors"
          >
            {language === 'fa' ? 'متوجه شدم، بستن' : 'Got it, Close'}
          </button>
        </div>

      </div>
    </div>
  );
}
