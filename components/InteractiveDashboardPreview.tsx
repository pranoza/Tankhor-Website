'use client';

import React, { useState } from 'react';
import { useLanguageAndTheme } from '@/context/LanguageAndThemeContext';
import {
  Grid,
  Ruler,
  QrCode,
  Wifi,
  WifiOff,
  Plus,
  Minus,
  CheckCircle2,
  RefreshCw,
  Box,
  Layers,
  Sparkles,
  Server,
  Zap,
} from 'lucide-react';

type TabType = 'matrix' | 'size-guide' | 'pos-barcode';

export default function InteractiveDashboardPreview() {
  const { language } = useLanguageAndTheme();
  const [activeTab, setActiveTab] = useState<TabType>('matrix');
  const [isOfflineMode, setIsOfflineMode] = useState<boolean>(true);
  const [lastScannedItem, setLastScannedItem] = useState<string | null>(null);
  const [isScanning, setIsScanning] = useState<boolean>(false);

  // Matrix State Demo
  const [matrixStock, setMatrixStock] = useState<{ [key: string]: number }>({
    'black-S': 12,
    'black-M': 28,
    'black-L': 45,
    'black-XL': 18,
    'white-S': 8,
    'white-M': 15,
    'white-L': 32,
    'white-XL': 9,
    'emerald-S': 5,
    'emerald-M': 14,
    'emerald-L': 22,
    'emerald-XL': 11,
    'navy-S': 0,
    'navy-M': 19,
    'navy-L': 30,
    'navy-XL': 7,
  });

  const sizes = ['S', 'M', 'L', 'XL'];
  const colors = [
    { id: 'black', name: { fa: 'مشکی زغالی', en: 'Charcoal Black' }, hex: '#1E293B' },
    { id: 'white', name: { fa: 'سفید عاجی', en: 'Ivory White' }, hex: '#F8FAFC' },
    { id: 'emerald', name: { fa: 'سبز زمردی', en: 'Emerald Green' }, hex: '#0D9488' },
    { id: 'navy', name: { fa: 'سرمه‌ای تیره', en: 'Deep Navy' }, hex: '#1E3A8A' },
  ];

  const updateMatrixCount = (colorId: string, size: string, delta: number) => {
    const key = `${colorId}-${size}`;
    setMatrixStock((prev) => ({
      ...prev,
      [key]: Math.max(0, (prev[key] || 0) + delta),
    }));
  };

  const calculateTotalStock = () => {
    return Object.values(matrixStock).reduce((acc, curr) => acc + curr, 0);
  };

  // Size Guide State Demo
  const [chestInput, setChestInput] = useState<number>(104); // cm
  const [shoulderInput, setShoulderInput] = useState<number>(46); // cm

  const getRecommendedSize = () => {
    if (chestInput < 96) return { size: 'S', match: '98%', fit: language === 'fa' ? 'فیت جذب / اسلیم' : 'Slim Fit' };
    if (chestInput < 102) return { size: 'M', match: '96%', fit: language === 'fa' ? 'فیت استاندارد' : 'Standard Fit' };
    if (chestInput < 108) return { size: 'L', match: '99%', fit: language === 'fa' ? 'فیت ایده‌آل و راحت' : 'Perfect Comfort Fit' };
    if (chestInput < 114) return { size: 'XL', match: '95%', fit: language === 'fa' ? 'فیت آزاد' : 'Loose Fit' };
    return { size: '2XL', match: '92%', fit: language === 'fa' ? 'فیت پلاس سایز' : 'Plus Fit' };
  };

  const recSize = getRecommendedSize();

  // POS Scanner Action Demo
  const handleSimulateScan = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      const items = [
        'TNX-JKT-809-BLK-L (کاپشن چرم زمستانه - مشکی/L)',
        'TNX-SHR-402-EMR-M (پیراهن کتان - زمردی/M)',
        'TNX-PNT-119-NVY-XL (شلوار فاستونی - سرمه‌ای/XL)',
      ];
      const randomItem = items[Math.floor(Math.random() * items.length)];
      setLastScannedItem(randomItem);
      updateMatrixCount('black', 'L', -1);
    }, 600);
  };

  return (
    <div className="w-full bg-[#171717] rounded-xl border border-neutral-800 shadow-vercel-lg overflow-hidden text-neutral-100 font-sans">
      {/* App Window Top Navigation Header */}
      <div className="bg-[#0a0a0a] px-4 py-3 border-b border-neutral-800 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          <span className="font-caption-mono text-xs text-neutral-400 font-en mr-2 ml-2 flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-teal-400" />
            tankhor-workstation v3.4 [Fashion Matrix ERP]
          </span>
        </div>

        {/* Offline / Cloud Status Mode Toggle */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsOfflineMode(!isOfflineMode)}
            className={`font-caption-mono flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full transition-all border ${
              isOfflineMode
                ? 'bg-amber-500/10 text-amber-300 border-amber-500/30'
                : 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30'
            }`}
          >
            {isOfflineMode ? (
              <>
                <WifiOff className="w-3 h-3" />
                <span>{language === 'fa' ? 'آفلاین محلی (SQLite)' : 'Offline Local Mode'}</span>
              </>
            ) : (
              <>
                <Wifi className="w-3 h-3 text-emerald-400" />
                <span>{language === 'fa' ? 'ابری همگام‌سازی شده' : 'Cloud Synced'}</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Tabs Menu inside App View - Responsive horizontal scroll with snap */}
      <div className="bg-[#121212] px-2 sm:px-4 py-2 border-b border-neutral-800 flex items-center gap-1.5 sm:gap-2 overflow-x-auto scrollbar-none snap-x">
        <button
          onClick={() => setActiveTab('matrix')}
          className={`shrink-0 whitespace-nowrap snap-start flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-lg transition-all ${
            activeTab === 'matrix'
              ? 'bg-white text-[#171717] shadow-sm'
              : 'text-neutral-400 hover:text-white hover:bg-neutral-800/80'
          }`}
        >
          <Grid className="w-3.5 h-3.5 shrink-0" />
          <span>{language === 'fa' ? 'ماتریس واریانت (رنگ و سایز)' : 'Color-Size Matrix'}</span>
        </button>

        <button
          onClick={() => setActiveTab('size-guide')}
          className={`shrink-0 whitespace-nowrap snap-start flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-lg transition-all ${
            activeTab === 'size-guide'
              ? 'bg-white text-[#171717] shadow-sm'
              : 'text-neutral-400 hover:text-white hover:bg-neutral-800/80'
          }`}
        >
          <Ruler className="w-3.5 h-3.5 shrink-0" />
          <span>{language === 'fa' ? 'راهنمای سایز هوشمند' : 'Interactive Size Engine'}</span>
        </button>

        <button
          onClick={() => setActiveTab('pos-barcode')}
          className={`shrink-0 whitespace-nowrap snap-start flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-lg transition-all ${
            activeTab === 'pos-barcode'
              ? 'bg-white text-[#171717] shadow-sm'
              : 'text-neutral-400 hover:text-white hover:bg-neutral-800/80'
          }`}
        >
          <QrCode className="w-3.5 h-3.5 shrink-0" />
          <span>{language === 'fa' ? 'صندوق بارکدخوان و فاکتور' : 'POS & Barcode Scanner'}</span>
        </button>
      </div>

      {/* Main Tab Content Display */}
      <div className="p-4 sm:p-6 min-h-[380px] bg-[#171717]">
        {/* TAB 1: COLOR & SIZE MATRIX */}
        {activeTab === 'matrix' && (
          <div className="space-y-4 animate-in fade-in duration-200">
            <div className="flex flex-wrap items-center justify-between gap-3 bg-[#0a0a0a] p-3.5 rounded-lg border border-neutral-800">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-md bg-neutral-800 border border-neutral-700 flex items-center justify-center text-teal-400">
                  <Box className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white flex items-center gap-2">
                    {language === 'fa' ? 'کاپشن زمستانه مدل آلفا-۲۰۲۶' : 'Alpha-2026 Winter Jacket'}
                    <span className="font-caption-mono text-[10px] px-1.5 py-0.5 rounded bg-neutral-800 text-teal-400 border border-neutral-700 font-en">
                      SKU: TNX-JKT-809
                    </span>
                  </h4>
                  <p className="text-xs text-neutral-400">
                    {language === 'fa'
                      ? 'مجموع موجودی واریانت‌ها:'
                      : 'Total Matrix Variant Inventory:'}{' '}
                    <span className="font-caption-mono font-bold text-teal-400 text-sm mx-1">{calculateTotalStock()}</span>{' '}
                    {language === 'fa' ? 'عدد در انبار مرکزی' : 'pcs in Central Hub'}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    const resetObj: { [key: string]: number } = {};
                    colors.forEach((c) =>
                      sizes.forEach((s) => {
                        resetObj[`${c.id}-${s}`] = Math.floor(Math.random() * 25) + 5;
                      })
                    );
                    setMatrixStock(resetObj);
                  }}
                  className="font-caption-mono px-3 py-1.5 text-xs font-semibold bg-neutral-800 hover:bg-neutral-700 text-neutral-200 rounded-md flex items-center gap-1.5 border border-neutral-700 transition-colors"
                >
                  <RefreshCw className="w-3.5 h-3.5 text-teal-400" />
                  <span>{language === 'fa' ? 'بازنشانی ماتریس' : 'Regenerate Matrix'}</span>
                </button>
              </div>
            </div>

            {/* Matrix Table with horizontal scroll container */}
            <div className="overflow-x-auto rounded-lg border border-neutral-800 bg-[#0a0a0a] scrollbar-thin">
              <table className="w-full text-right text-xs min-w-[560px]">
                <thead className="bg-[#121212] text-neutral-400 border-b border-neutral-800 font-caption-mono uppercase text-[11px]">
                  <tr>
                    <th className="p-3 text-center w-36">
                      {language === 'fa' ? 'تنوع رنگ / سایز' : 'Color / Size'}
                    </th>
                    {sizes.map((s) => (
                      <th key={s} className="p-3 text-center font-bold text-teal-300 font-en">
                        {s}
                      </th>
                    ))}
                    <th className="p-3 text-center w-28">{language === 'fa' ? 'جمع رنگ' : 'Total Color'}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-800/80">
                  {colors.map((c) => {
                    const rowTotal = sizes.reduce(
                      (sum, s) => sum + (matrixStock[`${c.id}-${s}`] || 0),
                      0
                    );
                    return (
                      <tr key={c.id} className="hover:bg-neutral-900/60 transition-colors">
                        <td className="p-3 font-semibold text-neutral-200 flex items-center gap-2 whitespace-nowrap">
                          <span
                            className="w-3.5 h-3.5 rounded-full border border-neutral-600 inline-block shadow-sm shrink-0"
                            style={{ backgroundColor: c.hex }}
                          />
                          <span>{c.name[language]}</span>
                        </td>
                        {sizes.map((s) => {
                          const count = matrixStock[`${c.id}-${s}`] || 0;
                          const isLowStock = count <= 5;
                          return (
                            <td key={s} className="p-2 text-center">
                              <div
                                className={`inline-flex items-center justify-center gap-1.5 px-2 py-1 rounded-md border transition-all ${
                                  count === 0
                                    ? 'bg-rose-950/40 border-rose-800/50 text-rose-400'
                                    : isLowStock
                                    ? 'bg-amber-950/30 border-amber-800/50 text-amber-300'
                                    : 'bg-neutral-800/80 border-neutral-700 text-neutral-200'
                                }`}
                              >
                                <button
                                  onClick={() => updateMatrixCount(c.id, s, -1)}
                                  className="w-6 h-6 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-neutral-700 rounded transition-colors active:scale-95"
                                  title="Decrease"
                                >
                                  <Minus className="w-3 h-3" />
                                </button>
                                <span className="font-caption-mono font-bold min-w-[20px] text-center font-en">
                                  {count}
                                </span>
                                <button
                                  onClick={() => updateMatrixCount(c.id, s, 1)}
                                  className="w-6 h-6 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-neutral-700 rounded transition-colors active:scale-95"
                                  title="Increase"
                                >
                                  <Plus className="w-3 h-3" />
                                </button>
                              </div>
                            </td>
                          );
                        })}
                        <td className="p-3 text-center font-caption-mono font-bold text-teal-400 font-en whitespace-nowrap">
                          {rowTotal} {language === 'fa' ? 'عدد' : 'pcs'}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="font-caption-mono flex flex-wrap items-center justify-between text-xs text-neutral-400 bg-[#0a0a0a] p-2.5 rounded-md border border-neutral-800">
              <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" />
                {language === 'fa'
                  ? 'بارکد EAN-13 اختصاصی برای کلیه ۱۶ واریانت تولید گردید.'
                  : 'Auto EAN-13 barcodes assigned to all 16 variants.'}
              </span>
              <span className="text-neutral-500">
                {language === 'fa' ? 'تست تعاملی: تغییر اعداد با + و -' : 'Interactive demo: click + or -'}
              </span>
            </div>
          </div>
        )}

        {/* TAB 2: SIZE GUIDE ENGINE DEMO */}
        {activeTab === 'size-guide' && (
          <div className="space-y-4 animate-in fade-in duration-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Controls */}
              <div className="space-y-4 bg-[#0a0a0a] p-4 rounded-lg border border-neutral-800">
                <h4 className="font-caption-mono text-xs font-bold text-teal-400 uppercase tracking-wider flex items-center gap-2">
                  <Ruler className="w-3.5 h-3.5" />
                  {language === 'fa' ? 'شبیه‌ساز اندازه‌گیری مشتری' : 'Customer Body Dimension Simulator'}
                </h4>

                {/* Chest Slider */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-neutral-300">{language === 'fa' ? 'دور سینه (سانتیمتر):' : 'Chest Width (cm):'}</span>
                    <span className="font-caption-mono text-teal-400 font-bold font-en text-sm">{chestInput} cm</span>
                  </div>
                  <input
                    type="range"
                    min="85"
                    max="125"
                    value={chestInput}
                    onChange={(e) => setChestInput(Number(e.target.value))}
                    className="w-full accent-teal-500 bg-neutral-800 h-2 rounded-md cursor-pointer"
                  />
                </div>

                {/* Shoulder Slider */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-neutral-300">{language === 'fa' ? 'عرض شانه (سانتیمتر):' : 'Shoulder Width (cm):'}</span>
                    <span className="font-caption-mono text-teal-400 font-bold font-en text-sm">{shoulderInput} cm</span>
                  </div>
                  <input
                    type="range"
                    min="40"
                    max="55"
                    value={shoulderInput}
                    onChange={(e) => setShoulderInput(Number(e.target.value))}
                    className="w-full accent-teal-500 bg-neutral-800 h-2 rounded-md cursor-pointer"
                  />
                </div>

                <div className="p-3 bg-neutral-900 rounded-md border border-neutral-800 text-xs text-neutral-300 space-y-1">
                  <p className="font-semibold text-neutral-200">
                    💡 {language === 'fa' ? 'قابلیت اتصال به فروشگاه آنلاین:' : 'E-commerce Embed Feature:'}
                  </p>
                  <p className="text-neutral-400 text-[11px]">
                    {language === 'fa'
                      ? 'جدول تعاملی مستقیم روی محصول ووکامرس/شاپیفای قرار می‌گیرد و مرجوعی سایز را ۶۵٪ کاهش می‌دهد.'
                      : 'Embeds cleanly on WooCommerce or Shopify product pages to eliminate sizing returns.'}
                  </p>
                </div>
              </div>

              {/* Live Recommendation Badge */}
              <div className="bg-[#0a0a0a] p-5 rounded-lg border border-teal-500/30 flex flex-col justify-between items-center text-center relative overflow-hidden">
                <div className="font-caption-mono absolute top-2 right-2 px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 text-[10px] font-bold border border-emerald-500/20 flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  {language === 'fa' ? 'توصیه هوشمند الگوریتم' : 'AI Size Match'}
                </div>

                <div className="my-auto py-2">
                  <span className="text-xs text-neutral-400 font-medium block mb-1">
                    {language === 'fa' ? 'سایز پیشنهادی تنخور:' : 'Recommended Tankhor Size:'}
                  </span>
                  <div className="font-caption-mono text-5xl font-extrabold text-teal-400 font-en tracking-tight">
                    {recSize.size}
                  </div>
                  <div className="mt-2 text-xs font-semibold px-3 py-1 rounded-full bg-teal-500/10 text-teal-300 border border-teal-500/20 inline-block">
                    {recSize.fit} ({recSize.match} {language === 'fa' ? 'تطابق' : 'Match'})
                  </div>
                </div>

                <div className="w-full pt-3 border-t border-neutral-800 text-xs text-neutral-400 flex items-center justify-between">
                  <span>{language === 'fa' ? 'احتمال مرجوعی:' : 'Return Probability:'}</span>
                  <span className="text-emerald-400 font-bold">{language === 'fa' ? 'کمتر از ۲٪ (صفر مرجوعی)' : 'Under 2%'}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: POS BARCODE & RECEIPT DEMO */}
        {activeTab === 'pos-barcode' && (
          <div className="space-y-4 animate-in fade-in duration-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Barcode Scanner Trigger Card */}
              <div className="md:col-span-2 bg-[#0a0a0a] p-4 rounded-lg border border-neutral-800 space-y-4 flex flex-col justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white flex items-center gap-2 mb-1">
                    <QrCode className="w-4 h-4 text-teal-400" />
                    {language === 'fa' ? 'صندوق فروشگاهی لمسی و اسکنر بارکد' : 'Touch POS & Barcode Scanner'}
                  </h4>
                  <p className="text-xs text-neutral-400">
                    {language === 'fa'
                      ? 'اسکن آنی بارکد کالا، کسر هوشمند از انبار و صدور فاکتور حرارتی.'
                      : 'Scan matrix barcode, deduct stock, and generate thermal receipts instantly.'}
                  </p>
                </div>

                <div className="p-4 bg-neutral-900 rounded-lg border border-dashed border-teal-500/30 text-center space-y-3">
                  <div className="w-10 h-10 mx-auto rounded-full bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400">
                    <QrCode className={`w-5 h-5 ${isScanning ? 'animate-bounce text-amber-400' : ''}`} />
                  </div>
                  <div>
                    <button
                      onClick={handleSimulateScan}
                      disabled={isScanning}
                      className="px-4 py-2 bg-white text-[#171717] font-bold text-xs rounded-full shadow-vercel-sm transition-all active:scale-95 disabled:opacity-50"
                    >
                      {isScanning
                        ? language === 'fa'
                          ? 'در حال اسکن...'
                          : 'Scanning...'
                        : language === 'fa'
                        ? '⚡ اسکن شبیه‌سازی بارکد کالا'
                        : '⚡ Simulate Barcode Scan'}
                    </button>
                  </div>
                  {lastScannedItem && (
                    <div className="font-caption-mono p-2 bg-emerald-950/40 border border-emerald-500/40 rounded-md text-xs text-emerald-300 font-medium animate-in fade-in">
                      ✅ {language === 'fa' ? 'کالای اسکن شده:' : 'Scanned:'} {lastScannedItem}
                    </div>
                  )}
                </div>

                <div className="font-caption-mono text-[11px] text-neutral-400 flex items-center justify-between bg-neutral-900/60 p-2 rounded-md">
                  <span>{language === 'fa' ? 'وضعیت اسکنر:' : 'Scanner Status:'}</span>
                  <span className="text-emerald-400 font-bold flex items-center gap-1">
                    <Zap className="w-3 h-3 text-amber-400" />
                    {language === 'fa' ? 'آماده‌به‌کار (USB/Bluetooth)' : 'USB/Bluetooth Ready'}
                  </span>
                </div>
              </div>

              {/* Mini Thermal Receipt Preview */}
              <div className="bg-white text-neutral-900 p-4 rounded-lg border border-neutral-300 space-y-3 shadow-vercel-sm font-caption-mono text-xs">
                <div className="text-center pb-2 border-b border-dashed border-neutral-300">
                  <h5 className="font-bold text-sm font-sans">{language === 'fa' ? 'فروشگاه آلفا' : 'ALPHA BOUTIQUE'}</h5>
                  <p className="text-[10px] text-neutral-500 font-sans">
                    {language === 'fa' ? 'فاکتور صادرشده از تنخور' : 'Tankhor Official POS Receipt'}
                  </p>
                </div>

                <div className="space-y-1.5 text-[11px]">
                  <div className="flex justify-between">
                    <span>۱x کاپشن چرم (L/مشکی)</span>
                    <span className="font-bold">۱,۴۵۰,۰۰۰</span>
                  </div>
                  <div className="flex justify-between text-neutral-500">
                    <span>کد کالا: TNX-809-BLK-L</span>
                    <span>تخفیف: ۰</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-dashed border-neutral-300 space-y-1">
                  <div className="flex justify-between font-bold text-xs">
                    <span>{language === 'fa' ? 'جمع کل (تومان):' : 'Total Amount:'}</span>
                    <span className="text-teal-700">۱,۴۵۰,۰۰۰</span>
                  </div>
                  <div className="text-[10px] text-neutral-500 text-center pt-2 font-sans">
                    {language === 'fa' ? 'با تشکر از خرید شما - تنخور' : 'Powered by Tankhor ERP'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer Banner inside App Window */}
      <div className="font-caption-mono bg-[#0a0a0a] px-4 py-2.5 border-t border-neutral-800 flex flex-wrap items-center justify-between text-xs text-neutral-400 gap-2">
        <div className="flex items-center gap-2">
          <Server className="w-3.5 h-3.5 text-teal-400" />
          <span>
            {language === 'fa'
              ? 'پایگاه داده محلی SQLite + همگام‌سازی ابری AES-256'
              : 'Local SQLite Engine + AES-256 Encrypted Sync'}
          </span>
        </div>
        <div className="flex items-center gap-2 text-teal-400 font-semibold">
          <span>{language === 'fa' ? 'سازگار با کلیه سیستم‌عامل‌ها' : 'Cross-Platform Ready'}</span>
        </div>
      </div>
    </div>
  );
}
