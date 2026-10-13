'use client';

import React, { useState } from 'react';
import { useLanguageAndTheme } from '@/context/LanguageAndThemeContext';
import {
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
  CheckCircle2,
  AlertTriangle,
  Send,
  MessageCircle,
  Truck,
  Printer,
  ChevronLeft,
  Sparkles,
  ArrowUpRight,
  TrendingUp,
  Tag,
  Download,
  Building2,
} from 'lucide-react';

interface Props {
  demoType:
    | 'matrix-inventory'
    | 'pos-quick-sale'
    | 'size-finder'
    | 'digital-catalog'
    | 'barcode-label'
    | 'woocommerce-sync'
    | 'landed-cost-calc'
    | 'analytics-turnover'
    | 'sayadi-cheques'
    | 'financial-export';
  featureTitle: string;
}

export default function FeatureInteractiveDemo({ demoType, featureTitle }: Props) {
  const { language } = useLanguageAndTheme();
  const isFa = language === 'fa';

  return (
    <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/70 dark:bg-neutral-900/60 p-4 sm:p-7 shadow-sm overflow-hidden">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-5 border-b border-neutral-200 dark:border-neutral-800">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-flex w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-caption-mono text-neutral-500 dark:text-neutral-400">
              {isFa ? 'شبیه‌ساز تعاملی و ابری تنخور' : 'Interactive Cloud Simulator • Tankhor Engine'}
            </span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white mt-1">
            {isFa ? `پیش‌نمایش زنده: ${featureTitle}` : `Live Preview: ${featureTitle}`}
          </h3>
        </div>
        <div className="px-2.5 py-1 rounded-md bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-[11px] font-caption-mono text-neutral-600 dark:text-neutral-300">
          {isFa ? 'نسخه تست زنده (Live Demo)' : 'Live Interactive Sandbox'}
        </div>
      </div>

      <div className="pt-6">
        {demoType === 'matrix-inventory' && <MatrixInventoryDemo isFa={isFa} />}
        {demoType === 'pos-quick-sale' && <PosQuickSaleDemo isFa={isFa} />}
        {demoType === 'size-finder' && <SizeFinderDemo isFa={isFa} />}
        {demoType === 'digital-catalog' && <DigitalCatalogDemo isFa={isFa} />}
        {demoType === 'barcode-label' && <BarcodeLabelDemo isFa={isFa} />}
        {demoType === 'woocommerce-sync' && <WooCommerceSyncDemo isFa={isFa} />}
        {demoType === 'landed-cost-calc' && <LandedCostDemo isFa={isFa} />}
        {demoType === 'analytics-turnover' && <AnalyticsTurnoverDemo isFa={isFa} />}
        {demoType === 'sayadi-cheques' && <SayadiChequesDemo isFa={isFa} />}
        {demoType === 'financial-export' && <FinancialExportDemo isFa={isFa} />}
      </div>
    </div>
  );
}

// 1. Matrix Inventory Demo
function MatrixInventoryDemo({ isFa }: { isFa: boolean }) {
  const [selectedVariant, setSelectedVariant] = useState<{ color: string; size: string } | null>({
    color: isFa ? 'مشکی زغالی' : 'Charcoal Black',
    size: 'L',
  });
  const [transferSent, setTransferSent] = useState(false);

  const colors = isFa
    ? [
        { name: 'مشکی زغالی', hex: '#1c1c1c' },
        { name: 'کرم نسکافه‌ای', hex: '#d2b48c' },
        { name: 'سفید صدفی', hex: '#f8f8f8' },
      ]
    : [
        { name: 'Charcoal Black', hex: '#1c1c1c' },
        { name: 'Sand Cream', hex: '#d2b48c' },
        { name: 'Pearl White', hex: '#f8f8f8' },
      ];
  const sizes = ['S', 'M', 'L', 'XL', '2XL'];

  const stockData: Record<string, Record<string, number>> = isFa
    ? {
        'مشکی زغالی': { S: 4, M: 8, L: 2, XL: 0, '2XL': 5 },
        'کرم نسکافه‌ای': { S: 6, M: 12, L: 7, XL: 3, '2XL': 1 },
        'سفید صدفی': { S: 2, M: 0, L: 9, XL: 6, '2XL': 4 },
      }
    : {
        'Charcoal Black': { S: 4, M: 8, L: 2, XL: 0, '2XL': 5 },
        'Sand Cream': { S: 6, M: 12, L: 7, XL: 3, '2XL': 1 },
        'Pearl White': { S: 2, M: 0, L: 9, XL: 6, '2XL': 4 },
      };

  return (
    <div className="space-y-5">
      <div className="text-xs text-neutral-600 dark:text-neutral-300 flex items-center justify-between">
        <span>
          {isFa ? 'مدل مادر:' : 'Parent Style:'}{' '}
          <strong>{isFa ? 'هودی کلاه‌دار کتان پاییزه' : 'Cotton Fleece Hooded Jacket'}</strong>
        </span>
        <span className="font-caption-mono text-teal-600 dark:text-teal-400">
          {isFa ? 'کد مادر: HD-884' : 'Style SKU: HD-884'}
        </span>
      </div>

      {/* Matrix Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-center border-collapse text-xs">
          <thead>
            <tr className="border-b border-neutral-200 dark:border-neutral-800 text-neutral-500 font-caption-mono">
              <th className="py-2.5 px-3 text-right rtl:text-right ltr:text-left">{isFa ? 'رنگ / سایز' : 'Color / Size'}</th>
              {sizes.map((s) => (
                <th key={s} className="py-2.5 px-3">{s}</th>
              ))}
              <th className="py-2.5 px-3">{isFa ? 'جمع رنگ' : 'Total'}</th>
            </tr>
          </thead>
          <tbody>
            {colors.map((c) => {
              const rowTotal = Object.values(stockData[c.name] || {}).reduce((a, b) => a + b, 0);
              return (
                <tr key={c.name} className="border-b border-neutral-200/60 dark:border-neutral-800/60">
                  <td className="py-2.5 px-3 text-right rtl:text-right ltr:text-left flex items-center gap-2">
                    <span
                      className="w-3.5 h-3.5 rounded-full border border-neutral-300 dark:border-neutral-700 shrink-0"
                      style={{ backgroundColor: c.hex }}
                    />
                    <span className="font-medium text-neutral-800 dark:text-neutral-200">{c.name}</span>
                  </td>
                  {sizes.map((sz) => {
                    const count = stockData[c.name]?.[sz] ?? 0;
                    const isSelected = selectedVariant?.color === c.name && selectedVariant?.size === sz;
                    const isZero = count === 0;
                    const isLow = count > 0 && count <= 2;
                    return (
                      <td key={sz} className="py-2.5 px-2">
                        <button
                          onClick={() => {
                            setSelectedVariant({ color: c.name, size: sz });
                            setTransferSent(false);
                          }}
                          className={`w-full py-1.5 px-2 rounded-lg font-caption-mono text-xs transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-bold ring-2 ring-teal-500'
                              : isZero
                              ? 'bg-red-50 dark:bg-red-950/40 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-900'
                              : isLow
                              ? 'bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-900'
                              : 'bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700 hover:border-teal-400'
                          }`}
                        >
                          {count === 0 ? (isFa ? 'ناموجود' : '0 Out') : `${count} ${isFa ? 'عدد' : 'pcs'}`}
                        </button>
                      </td>
                    );
                  })}
                  <td className="py-2.5 px-3 font-caption-mono font-bold text-neutral-900 dark:text-white">
                    {rowTotal}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Selected Action Bar */}
      {selectedVariant && (
        <div className="p-3.5 rounded-xl bg-white dark:bg-neutral-800/90 border border-neutral-200 dark:border-neutral-700 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <Boxes className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0" />
            <span>
              {isFa ? (
                <>
                  آیتم انتخابی: <strong>{selectedVariant.color}</strong> - سایز <strong>{selectedVariant.size}</strong>{' '}
                  (موجودی فعلی: {stockData[selectedVariant.color]?.[selectedVariant.size]} عدد)
                </>
              ) : (
                <>
                  Selected SKU: <strong>{selectedVariant.color}</strong> - Size <strong>{selectedVariant.size}</strong>{' '}
                  (Live Stock: {stockData[selectedVariant.color]?.[selectedVariant.size] ?? 0} units)
                </>
              )}
            </span>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={() => setTransferSent(true)}
              disabled={transferSent}
              className="w-full sm:w-auto px-4 py-2 rounded-lg bg-teal-600 hover:bg-teal-500 text-white font-medium text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer"
            >
              {transferSent ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{isFa ? 'حواله انتقال به شعبه ۲ صادر شد' : 'Transfer Issued to Branch #2 ✓'}</span>
                </>
              ) : (
                <>
                  <Truck className="w-3.5 h-3.5" />
                  <span>{isFa ? 'صدور حواله انتقال بین شعب' : 'Issue Inter-Branch Stock Transfer'}</span>
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// 2. POS Quick Sale Demo
function PosQuickSaleDemo({ isFa }: { isFa: boolean }) {
  const [cart, setCart] = useState(
    isFa
      ? [
          { id: '1', title: 'کت تک کتان مردانه (طوسی - 50)', price: 1850000, cost: 1100000, qty: 1 },
          { id: '2', title: 'شلوار پارچه‌ای ترک (سرمه‌ای - 44)', price: 950000, cost: 580000, qty: 1 },
        ]
      : [
          { id: '1', title: "Men's Cotton Blazer (Gray - 50)", price: 48, cost: 28, qty: 1 },
          { id: '2', title: 'Tailored Trousers (Navy - 44)', price: 24, cost: 14, qty: 1 },
        ]
  );
  const [discount, setDiscount] = useState(isFa ? 100000 : 5);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const totalCost = cart.reduce((sum, item) => sum + item.cost * item.qty, 0);
  const finalTotal = Math.max(0, subtotal - discount);
  const profit = finalTotal - totalCost;
  const marginPercent = finalTotal > 0 ? Math.round((profit / finalTotal) * 100) : 0;

  const addItem = (item: { id: string; title: string; price: number; cost: number }) => {
    setCart((prev) => {
      const exists = prev.find((x) => x.id === item.id);
      if (exists) {
        return prev.map((x) => (x.id === item.id ? { ...x, qty: x.qty + 1 } : x));
      }
      return [...prev, { ...item, qty: 1 }];
    });
    setPaymentSuccess(false);
  };

  const fmt = (n: number) => (isFa ? `${n.toLocaleString('fa-IR')} ت` : `$${n}`);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 text-xs">
      {/* Quick Add Barcode Simulation */}
      <div className="lg:col-span-7 space-y-4">
        <div className="flex items-center gap-2 p-2.5 rounded-lg bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700">
          <Barcode className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0" />
          <input
            type="text"
            readOnly
            value={isFa ? "بارکدخوان فعال • برای تست روی آیتم‌های زیر کلیک کنید" : "Barcode Scanner Ready • Click items below to simulate scan"}
            className="w-full bg-transparent text-neutral-500 font-caption-mono text-xs focus:outline-none"
          />
        </div>

        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() =>
              addItem({
                id: '3',
                title: isFa ? 'پیراهن آکسفورد (سفید - L)' : 'Oxford Shirt (White - L)',
                price: isFa ? 680000 : 18,
                cost: isFa ? 420000 : 10,
              })
            }
            className="p-3 text-right rtl:text-right ltr:text-left rounded-xl bg-white dark:bg-neutral-800/90 border border-neutral-200 dark:border-neutral-700 hover:border-teal-500 transition-all cursor-pointer"
          >
            <p className="font-bold text-neutral-900 dark:text-white">{isFa ? 'پیراهن آکسفورد' : 'Oxford Shirt'}</p>
            <p className="text-[11px] text-neutral-500">{isFa ? 'سفید • سایز L' : 'White • Size L'}</p>
            <p className="font-caption-mono text-teal-600 dark:text-teal-400 mt-1">{fmt(isFa ? 680000 : 18)}</p>
          </button>
          <button
            onClick={() =>
              addItem({
                id: '4',
                title: isFa ? 'کمربند چرم طبیعی (مشکی)' : 'Leather Belt (Black)',
                price: isFa ? 420000 : 12,
                cost: isFa ? 210000 : 6,
              })
            }
            className="p-3 text-right rtl:text-right ltr:text-left rounded-xl bg-white dark:bg-neutral-800/90 border border-neutral-200 dark:border-neutral-700 hover:border-teal-500 transition-all cursor-pointer"
          >
            <p className="font-bold text-neutral-900 dark:text-white">{isFa ? 'کمربند چرم طبیعی' : 'Leather Belt'}</p>
            <p className="text-[11px] text-neutral-500">{isFa ? 'اکسسوری • مشکی' : 'Accessory • Black'}</p>
            <p className="font-caption-mono text-teal-600 dark:text-teal-400 mt-1">{fmt(isFa ? 420000 : 12)}</p>
          </button>
        </div>

        {/* Cart items */}
        <div className="space-y-2">
          {cart.map((item) => (
            <div
              key={item.id}
              className="p-3 rounded-lg bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 flex items-center justify-between"
            >
              <div>
                <p className="font-semibold text-neutral-900 dark:text-white">{item.title}</p>
                <p className="text-[11px] text-neutral-500 font-caption-mono">
                  {isFa ? `بهای تمام‌شده: ${fmt(item.cost)}` : `Unit Cost: ${fmt(item.cost)}`}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-caption-mono font-bold text-neutral-900 dark:text-white">
                  {fmt(item.price * item.qty)}
                </span>
                <span className="px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-700 font-caption-mono">
                  ×{item.qty}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bill & Profit Breakdown */}
      <div className="lg:col-span-5 p-4 rounded-xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 space-y-3">
        <div className="flex items-center justify-between pb-2 border-b border-neutral-200 dark:border-neutral-700 font-bold text-sm">
          <span>{isFa ? 'فاکتور دخل و صندوق' : 'Register POS Bill'}</span>
          <span className="text-teal-600 dark:text-teal-400 font-caption-mono">#INV-1092</span>
        </div>

        <div className="space-y-1.5 text-neutral-600 dark:text-neutral-300">
          <div className="flex justify-between">
            <span>{isFa ? 'جمع اقلام:' : 'Subtotal:'}</span>
            <span className="font-caption-mono">{fmt(subtotal)}</span>
          </div>
          <div className="flex justify-between text-amber-600 dark:text-amber-400">
            <span>{isFa ? 'تخفیف مشتری:' : 'Discount:'}</span>
            <span className="font-caption-mono">- {fmt(discount)}</span>
          </div>
          <div className="flex justify-between font-bold text-neutral-900 dark:text-white text-sm pt-2 border-t border-neutral-200 dark:border-neutral-700">
            <span>{isFa ? 'مبلغ قابل پرداخت:' : 'Total Due:'}</span>
            <span className="font-caption-mono text-teal-600 dark:text-teal-400">
              {fmt(finalTotal)}
            </span>
          </div>
        </div>

        {/* Realtime Profit Insight */}
        <div className="p-2.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 space-y-1">
          <div className="flex items-center justify-between font-bold text-emerald-800 dark:text-emerald-300">
            <span>{isFa ? 'سود ناخالص واقعی این فاکتور:' : 'Live Gross Margin:'}</span>
            <span className="font-caption-mono">+{fmt(profit)}</span>
          </div>
          <p className="text-[10px] text-emerald-700 dark:text-emerald-400">
            {isFa
              ? `حاشیه سود: ${marginPercent}٪ • بهای تمام‌شده انبار: ${fmt(totalCost)}`
              : `Margin: ${marginPercent}% • True Costing: ${fmt(totalCost)}`}
          </p>
        </div>

        <button
          onClick={() => setPaymentSuccess(true)}
          disabled={paymentSuccess}
          className="w-full py-2.5 rounded-lg bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-bold text-xs flex items-center justify-center gap-2 hover:opacity-90 transition-all cursor-pointer"
        >
          {paymentSuccess ? (
            <>
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>{isFa ? 'فاکتور ثبت شد و کارتخوان تسویه گردید' : 'Invoice Completed & Card Reader Settled ✓'}</span>
            </>
          ) : (
            <>
              <Receipt className="w-4 h-4 text-teal-400 dark:text-teal-600" />
              <span>{isFa ? 'ارسال مبلغ به دستگاه کارتخوان (POS)' : 'Send Amount to POS Card Terminal'}</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}

// 3. Size Finder Demo
function SizeFinderDemo({ isFa }: { isFa: boolean }) {
  const [height, setHeight] = useState(178);
  const [weight, setWeight] = useState(74);
  const [fitStyle, setFitStyle] = useState<'slim' | 'regular' | 'oversize'>('regular');

  // Simple sizing heuristic for demonstration
  const calculateSize = () => {
    let base = 'M';
    if (weight < 65) base = 'S';
    else if (weight <= 75) base = 'M';
    else if (weight <= 85) base = 'L';
    else if (weight <= 95) base = 'XL';
    else base = '2XL';

    if (fitStyle === 'oversize') {
      if (base === 'S') return 'M';
      if (base === 'M') return 'L';
      if (base === 'L') return 'XL';
      if (base === 'XL') return '2XL';
      return '3XL';
    }
    if (fitStyle === 'slim') {
      if (base === '2XL') return 'XL';
      if (base === 'XL') return 'L';
      if (base === 'L') return 'M';
      return 'S';
    }
    return base;
  };

  const suggestedSize = calculateSize();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
      <div className="space-y-4">
        <div>
          <div className="flex justify-between mb-1">
            <span className="font-semibold text-neutral-800 dark:text-neutral-200">
              {isFa ? 'قد خریدار (سانتی‌متر):' : 'Buyer Height (cm):'}
            </span>
            <span className="font-caption-mono font-bold text-teal-600 dark:text-teal-400">{height} cm</span>
          </div>
          <input
            type="range"
            min="150"
            max="205"
            value={height}
            onChange={(e) => setHeight(Number(e.target.value))}
            className="w-full accent-teal-500 cursor-pointer"
          />
        </div>

        <div>
          <div className="flex justify-between mb-1">
            <span className="font-semibold text-neutral-800 dark:text-neutral-200">
              {isFa ? 'وزن خریدار (کیلوگرم):' : 'Buyer Weight (kg):'}
            </span>
            <span className="font-caption-mono font-bold text-teal-600 dark:text-teal-400">{weight} kg</span>
          </div>
          <input
            type="range"
            min="45"
            max="125"
            value={weight}
            onChange={(e) => setWeight(Number(e.target.value))}
            className="w-full accent-teal-500 cursor-pointer"
          />
        </div>

        <div>
          <span className="font-semibold text-neutral-800 dark:text-neutral-200 block mb-2">
            {isFa ? 'استایل و تنخور دلخواه:' : 'Preferred Fit Style:'}
          </span>
          <div className="grid grid-cols-3 gap-2">
            <button
              onClick={() => setFitStyle('slim')}
              className={`py-2 px-2 rounded-lg border text-center font-medium transition-all cursor-pointer ${
                fitStyle === 'slim'
                  ? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 border-neutral-900'
                  : 'bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border-neutral-200 dark:border-neutral-700'
              }`}
            >
              {isFa ? 'جذب (Slim)' : 'Slim Fit'}
            </button>
            <button
              onClick={() => setFitStyle('regular')}
              className={`py-2 px-2 rounded-lg border text-center font-medium transition-all cursor-pointer ${
                fitStyle === 'regular'
                  ? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 border-neutral-900'
                  : 'bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border-neutral-200 dark:border-neutral-700'
              }`}
            >
              {isFa ? 'استاندارد (Regular)' : 'Regular Fit'}
            </button>
            <button
              onClick={() => setFitStyle('oversize')}
              className={`py-2 px-2 rounded-lg border text-center font-medium transition-all cursor-pointer ${
                fitStyle === 'oversize'
                  ? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 border-neutral-900'
                  : 'bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border-neutral-200 dark:border-neutral-700'
              }`}
            >
              {isFa ? 'آزاد (Oversize)' : 'Oversize Fit'}
            </button>
          </div>
        </div>
      </div>

      <div className="p-5 rounded-2xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 flex flex-col items-center justify-center text-center space-y-3">
        <div className="w-12 h-12 rounded-full bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800 flex items-center justify-center">
          <Ruler className="w-6 h-6 text-teal-600 dark:text-teal-400" />
        </div>
        <p className="text-xs text-neutral-500">
          {isFa ? 'سایز پیشنهادی سایزفیندر تنخور:' : 'Recommended Fit by Tankhor Engine:'}
        </p>
        <div className="text-4xl font-extrabold font-caption-mono text-neutral-900 dark:text-white px-6 py-2 rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
          {suggestedSize}
        </div>
        <p className="text-xs text-neutral-600 dark:text-neutral-300 max-w-xs leading-relaxed">
          {isFa
            ? `با توجه به قد ${height} سانتی‌متر و وزن ${weight} کیلوگرم و انتخاب استایل ${fitStyle === 'oversize' ? 'آزاد' : fitStyle === 'slim' ? 'جذب' : 'استاندارد'}، این سایز با ۹۸٪ اطمینان تنخور ایده‌آلی خواهد داشت.`
            : `Based on ${height}cm height, ${weight}kg weight, and ${fitStyle} fit preference, this size offers 98% anti-return accuracy.`}
        </p>
      </div>
    </div>
  );
}

// 4. Digital Catalog Demo
function DigitalCatalogDemo({ isFa }: { isFa: boolean }) {
  const [selectedColor, setSelectedColor] = useState(isFa ? 'نسکافه‌ای' : 'Mocha Sand');
  const [inquired, setInquired] = useState(false);

  const colorOptions = isFa ? ['نسکافه‌ای', 'مشکی زغالی', 'سبز زیتونی'] : ['Mocha Sand', 'Charcoal Black', 'Olive Green'];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center text-xs">
      <div className="space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 font-caption-mono text-[11px]">
          <QrCode className="w-3.5 h-3.5" />
          <span>tankhor.com/v/chic-boutique</span>
        </div>
        <h4 className="text-lg font-bold text-neutral-900 dark:text-white">
          {isFa
            ? 'ویترین آنلاین بوتیک شیک (نمایش در استوری اینستاگرام)'
            : 'Online Lookbook & Instant WhatsApp Checkout'}
        </h4>
        <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
          {isFa
            ? 'مشتری بدون نیاز به ثبت‌نام در سایت، رنگ‌ها و موجودی زنده انبار را می‌بیند و با یک تپ، سفارش را مستقیماً به واتساپ شما می‌فرستد.'
            : 'Shoppers view live stock per variant on Instagram stories or web, then order directly into WhatsApp with 1 tap.'}
        </p>

        <div className="space-y-2">
          <span className="font-semibold text-neutral-800 dark:text-neutral-200">
            {isFa ? 'انتخاب رنگ کاتالوگ:' : 'Select Lookbook Color:'}
          </span>
          <div className="flex gap-2">
            {colorOptions.map((c) => (
              <button
                key={c}
                onClick={() => {
                  setSelectedColor(c);
                  setInquired(false);
                }}
                className={`px-3 py-1.5 rounded-lg border font-medium transition-all cursor-pointer ${
                  selectedColor === c
                    ? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 border-neutral-900'
                    : 'bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border-neutral-200 dark:border-neutral-700'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={() => setInquired(true)}
          className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold flex items-center justify-center gap-2 transition-all cursor-pointer"
        >
          <MessageCircle className="w-4 h-4" />
          <span>
            {inquired
              ? (isFa ? 'پیام سفارش در واتساپ ارسال شد ✓' : 'Order sent to WhatsApp ✓')
              : (isFa ? 'استعلام خرید در واتساپ' : 'Inquire via WhatsApp')}
          </span>
        </button>
      </div>

      {/* Simulated Mobile Screen */}
      <div className="mx-auto w-full max-w-[280px] rounded-3xl border-4 border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 p-4 shadow-xl space-y-3">
        <div className="h-32 rounded-xl bg-gradient-to-tr from-neutral-200 via-neutral-100 to-amber-50 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900 flex items-center justify-center text-neutral-400">
          <Tag className="w-8 h-8 opacity-40" />
        </div>
        <div>
          <div className="flex justify-between items-start">
            <h5 className="font-bold text-neutral-900 dark:text-white">
              {isFa ? 'پالتو کتی فوتر پشمی' : 'Woolen Winter Coat'}
            </h5>
            <span className="font-caption-mono text-emerald-600 dark:text-emerald-400 font-bold">
              {isFa ? 'موجود' : 'In Stock'}
            </span>
          </div>
          <p className="text-[11px] text-neutral-500 font-caption-mono mt-0.5">
            {isFa ? `رنگ: ${selectedColor}` : `Color: ${selectedColor}`}
          </p>
        </div>
        <div className="flex gap-1">
          {['38', '40', '42'].map((sz) => (
            <span key={sz} className="px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 text-[10px] font-caption-mono">
              {isFa ? `سایز ${sz}` : `Size ${sz}`}
            </span>
          ))}
        </div>
        <div className="pt-2 border-t border-neutral-200 dark:border-neutral-800 flex justify-between items-center">
          <span className="font-caption-mono font-bold text-neutral-900 dark:text-white">
            {isFa ? '۱,۴۵۰,۰۰۰ ت' : '$42.00 USD'}
          </span>
          <span className="text-[10px] text-teal-600 dark:text-teal-400 font-bold">CHIC BOUTIQUE</span>
        </div>
      </div>
    </div>
  );
}

// 5. Barcode & Label Printing Demo
function BarcodeLabelDemo({ isFa }: { isFa: boolean }) {
  const [modelName, setModelName] = useState(isFa ? 'کت تک اسلیم فیت' : 'Slim Fit Tailored Blazer');
  const [size, setSize] = useState('L');
  const [color, setColor] = useState(isFa ? 'سرمه‌ای' : 'Navy Blue');
  const [price, setPrice] = useState(isFa ? '1,650,000' : '48.00');
  const [printed, setPrinted] = useState(false);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
      <div className="space-y-3">
        <h4 className="font-bold text-neutral-900 dark:text-white text-sm">
          {isFa ? 'تنظیمات اتیکت حرارتی رگال پوشاک' : 'Thermal Apparel Hangtag & Label Generator'}
        </h4>
        <div className="space-y-2">
          <label className="block text-neutral-600 dark:text-neutral-300">
            {isFa ? 'نام مدل لباس:' : 'Garment Style Name:'}
          </label>
          <input
            type="text"
            value={modelName}
            onChange={(e) => setModelName(e.target.value)}
            className="w-full p-2 rounded-lg bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700"
          />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <label className="block text-neutral-600 dark:text-neutral-300">{isFa ? 'سایز:' : 'Size:'}</label>
            <input
              type="text"
              value={size}
              onChange={(e) => setSize(e.target.value)}
              className="w-full p-2 rounded-lg bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 font-caption-mono"
            />
          </div>
          <div>
            <label className="block text-neutral-600 dark:text-neutral-300">{isFa ? 'رنگ:' : 'Color:'}</label>
            <input
              type="text"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="w-full p-2 rounded-lg bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700"
            />
          </div>
        </div>
        <div>
          <label className="block text-neutral-600 dark:text-neutral-300">
            {isFa ? 'قیمت مصرف‌کننده (تومان):' : 'Retail Price (USD):'}
          </label>
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full p-2 rounded-lg bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 font-caption-mono"
          />
        </div>

        <button
          onClick={() => {
            setPrinted(true);
            setTimeout(() => setPrinted(false), 2500);
          }}
          className="w-full py-2.5 rounded-lg bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-bold flex items-center justify-center gap-2 cursor-pointer"
        >
          <Printer className="w-4 h-4 text-teal-400 dark:text-teal-600" />
          <span>
            {printed
              ? (isFa ? 'دستور چاپ به پرینتر حرارتی ارسال شد...' : 'Printing to thermal roll printer...')
              : (isFa ? 'تست چاپ روی لیبل‌پرینتر' : 'Print Test Barcode Tag')}
          </span>
        </button>
      </div>

      {/* Simulated 40x25mm / 60x40mm Label */}
      <div className="flex flex-col items-center justify-center">
        <div className="w-[240px] p-4 rounded-xl bg-white text-neutral-900 border-2 border-dashed border-neutral-300 shadow-md font-sans text-right rtl:text-right ltr:text-left space-y-2">
          <div className="flex justify-between items-center border-b border-neutral-200 pb-1 text-[11px] font-bold">
            <span>{isFa ? 'تنخور بوتیک' : 'TANKHOR FASHION'}</span>
            <span className="font-caption-mono text-[9px] text-neutral-500">POS • ERP</span>
          </div>
          <div>
            <p className="font-bold text-xs">{modelName}</p>
            <div className="flex justify-between text-[11px] text-neutral-600 mt-0.5">
              <span>{isFa ? `رنگ: ${color}` : `COLOR: ${color}`}</span>
              <span className="font-caption-mono font-bold">SIZE: {size}</span>
            </div>
          </div>

          {/* Barcode graphic */}
          <div className="py-1 flex flex-col items-center">
            <div className="h-9 w-full flex items-center justify-between gap-[2px] px-2 bg-neutral-50">
              {Array.from({ length: 34 }).map((_, i) => (
                <span
                  key={i}
                  className="h-full bg-neutral-900"
                  style={{ width: i % 3 === 0 ? '3px' : i % 5 === 0 ? '1px' : '2px' }}
                />
              ))}
            </div>
            <span className="font-caption-mono text-[9px] tracking-widest text-neutral-600 mt-0.5">
              626084729103
            </span>
          </div>

          <div className="flex justify-between items-center pt-1 border-t border-neutral-200">
            <span className="text-[10px] text-neutral-500">{isFa ? 'قیمت مقطوع:' : 'MSRP:'}</span>
            <span className="font-caption-mono font-extrabold text-sm">
              {isFa ? `${price} ت` : `$${price} USD`}
            </span>
          </div>
        </div>
        <span className="text-[11px] text-neutral-500 font-caption-mono mt-2">
          {isFa ? 'پیش‌نمایش لیبل استاندارد حرارتی (بدون افت کیفیت)' : 'Standard High-Density Thermal Barcode Label'}
        </span>
      </div>
    </div>
  );
}

// 6. WooCommerce Sync Demo
function WooCommerceSyncDemo({ isFa }: { isFa: boolean }) {
  const [shopStock, setShopStock] = useState(8);
  const [isSyncing, setIsSyncing] = useState(false);
  const [lastAction, setLastAction] = useState<string | null>(null);

  const simulateStoreSale = () => {
    if (shopStock <= 0) return;
    setIsSyncing(true);
    setShopStock((prev) => prev - 1);
    setLastAction(isFa ? 'فروش در صندوق فروشگاه حضوری ثبت شد' : 'POS Checkout item sold in physical boutique');
    setTimeout(() => {
      setIsSyncing(false);
      setLastAction(
        isFa
          ? 'وب‌هوک تنخور موجودی ووکامرس را به صورت آنی به ' + (shopStock - 1) + ' عدد رساند ✓'
          : `Tankhor webhook updated WooCommerce online inventory to ${shopStock - 1} units ✓`
      );
    }, 900);
  };

  return (
    <div className="space-y-4 text-xs">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Physical Store */}
        <div className="p-4 rounded-xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 space-y-2">
          <div className="flex items-center justify-between font-bold">
            <span className="flex items-center gap-1.5">
              <Building2 className="w-4 h-4 text-teal-600 dark:text-teal-400" />
              {isFa ? 'انبار فیزیکی فروشگاه' : 'Boutique Store Inventory'}
            </span>
            <span className="font-caption-mono text-teal-600 dark:text-teal-400">
              {shopStock} {isFa ? 'عدد' : 'pcs'}
            </span>
          </div>
          <p className="text-[11px] text-neutral-500">
            {isFa ? 'مدل: کت ترنچ پاییزه (کرم - سایز 38)' : 'Item: Autumn Trench Coat (Sand - Size 38)'}
          </p>
          <button
            onClick={simulateStoreSale}
            disabled={isSyncing || shopStock === 0}
            className="w-full py-2 rounded-lg bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-semibold cursor-pointer disabled:opacity-50"
          >
            {isFa ? 'فروش ۱ عدد در صندوق مغازه' : 'Sell 1 unit via POS Register'}
          </button>
        </div>

        {/* WooCommerce Site */}
        <div className="p-4 rounded-xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 space-y-2">
          <div className="flex items-center justify-between font-bold">
            <span className="flex items-center gap-1.5">
              <RefreshCw className={`w-4 h-4 text-blue-500 ${isSyncing ? 'animate-spin' : ''}`} />
              {isFa ? 'سایت ووکامرس (آنلاین)' : 'WooCommerce & Shopify Store'}
            </span>
            <span className="font-caption-mono text-blue-500">
              {shopStock} {isFa ? 'عدد' : 'pcs'}
            </span>
          </div>
          <p className="text-[11px] text-neutral-500">
            {isFa ? 'متغیر WooCommerce: Color=Cream, Size=38' : 'WooCommerce SKU: Color=Sand, Size=38'}
          </p>
          <div className="p-2 rounded bg-neutral-100 dark:bg-neutral-900 text-center font-caption-mono text-[11px]">
            {isSyncing
              ? (isFa ? 'در حال ارسال وب‌هوک به سایت...' : 'Sending instant webhook update...')
              : (isFa ? 'موجودی انبار و سایت ۱۰۰٪ همگام است' : 'In-store & e-commerce stock 100% synced')}
          </div>
        </div>
      </div>

      {lastAction && (
        <div className="p-3 rounded-lg bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800 text-teal-800 dark:text-teal-300 font-caption-mono text-center">
          {lastAction}
        </div>
      )}
    </div>
  );
}

// 7. Landed Cost Demo
function LandedCostDemo({ isFa }: { isFa: boolean }) {
  const [basePrice, setBasePrice] = useState(isFa ? 450000 : 14.5);
  const [shippingPerPiece, setShippingPerPiece] = useState(isFa ? 65000 : 2.8);
  const [customsPerPiece, setCustomsPerPiece] = useState(isFa ? 45000 : 1.4);
  const [packagingPerPiece, setPackagingPerPiece] = useState(isFa ? 25000 : 0.8);
  const [markupPercent, setMarkupPercent] = useState(55);

  const landedCost = Number((basePrice + shippingPerPiece + customsPerPiece + packagingPerPiece).toFixed(2));
  const retailPrice = isFa
    ? Math.round((landedCost * (1 + markupPercent / 100)) / 1000) * 1000
    : Number((landedCost * (1 + markupPercent / 100)).toFixed(2));
  const grossProfit = isFa ? retailPrice - landedCost : Number((retailPrice - landedCost).toFixed(2));

  const fmt = (n: number) => (isFa ? `${n.toLocaleString('fa-IR')} ت` : `$${n.toFixed(2)} USD`);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs">
      <div className="space-y-3">
        <h4 className="font-bold text-neutral-900 dark:text-white text-sm">
          {isFa
            ? 'تخصیص هزینه‌های وارده هر تکه لباس (Landed Cost)'
            : 'Per-Garment True Landed Cost Allocation Engine'}
        </h4>

        <div>
          <label className="block text-neutral-600 dark:text-neutral-300">
            {isFa ? 'قیمت خرید فاکتور مبدا (تومان):' : 'Supplier Invoice Base Cost ($):'}
          </label>
          <input
            type="number"
            step={isFa ? '10000' : '0.5'}
            value={basePrice}
            onChange={(e) => setBasePrice(Number(e.target.value))}
            className="w-full p-2 rounded-lg bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 font-caption-mono"
          />
        </div>

        <div className="grid grid-cols-3 gap-2">
          <div>
            <label className="block text-[11px] text-neutral-500">
              {isFa ? 'حمل و باربری:' : 'Freight:'}
            </label>
            <input
              type="number"
              step={isFa ? '5000' : '0.1'}
              value={shippingPerPiece}
              onChange={(e) => setShippingPerPiece(Number(e.target.value))}
              className="w-full p-1.5 rounded-lg bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 font-caption-mono text-[11px]"
            />
          </div>
          <div>
            <label className="block text-[11px] text-neutral-500">
              {isFa ? 'گمرک/ترخیص:' : 'Customs/Duty:'}
            </label>
            <input
              type="number"
              step={isFa ? '5000' : '0.1'}
              value={customsPerPiece}
              onChange={(e) => setCustomsPerPiece(Number(e.target.value))}
              className="w-full p-1.5 rounded-lg bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 font-caption-mono text-[11px]"
            />
          </div>
          <div>
            <label className="block text-[11px] text-neutral-500">
              {isFa ? 'بسته‌بندی/اتیکت:' : 'Polybag/Tag:'}
            </label>
            <input
              type="number"
              step={isFa ? '5000' : '0.1'}
              value={packagingPerPiece}
              onChange={(e) => setPackagingPerPiece(Number(e.target.value))}
              className="w-full p-1.5 rounded-lg bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 font-caption-mono text-[11px]"
            />
          </div>
        </div>

        <div>
          <div className="flex justify-between mb-1">
            <span className="text-neutral-600 dark:text-neutral-300">
              {isFa ? 'درصد سود هدف روی رگال:' : 'Target Retail Margin on Rack:'}
            </span>
            <span className="font-caption-mono font-bold text-teal-600 dark:text-teal-400">{markupPercent}%</span>
          </div>
          <input
            type="range"
            min="20"
            max="120"
            value={markupPercent}
            onChange={(e) => setMarkupPercent(Number(e.target.value))}
            className="w-full accent-teal-500 cursor-pointer"
          />
        </div>
      </div>

      {/* Output Summary */}
      <div className="p-4 rounded-xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 flex flex-col justify-between space-y-3">
        <div className="space-y-2">
          <div className="flex justify-between text-neutral-500">
            <span>{isFa ? 'قیمت خام فاکتور:' : 'Base Supplier Cost:'}</span>
            <span className="font-caption-mono">{fmt(basePrice)}</span>
          </div>
          <div className="flex justify-between text-amber-600 dark:text-amber-400">
            <span>{isFa ? 'سرشکن هزینه‌های سربار:' : 'Allocated Overhead:'}</span>
            <span className="font-caption-mono">
              +{fmt(shippingPerPiece + customsPerPiece + packagingPerPiece)}
            </span>
          </div>
          <div className="flex justify-between font-bold text-neutral-900 dark:text-white pt-1 border-t border-neutral-200 dark:border-neutral-700">
            <span>{isFa ? 'بهای تمام‌شده واقعی انبار (Landed Cost):' : 'True Landed Cost per Garment:'}</span>
            <span className="font-caption-mono text-teal-600 dark:text-teal-400">
              {fmt(landedCost)}
            </span>
          </div>
        </div>

        <div className="p-3 rounded-xl bg-neutral-900 text-white dark:bg-neutral-950 border border-neutral-800 space-y-1 text-center">
          <p className="text-[11px] text-neutral-400">
            {isFa ? 'قیمت پیشنهادی اتیکت فروشگاه:' : 'Recommended Retail Tag (MSRP):'}
          </p>
          <p className="text-xl font-extrabold font-caption-mono text-teal-400">
            {fmt(retailPrice)}
          </p>
          <p className="text-[10px] text-emerald-400">
            {isFa
              ? `سود خالص تضمین‌شده برای هر تکه: +${fmt(grossProfit)}`
              : `Guaranteed gross profit per piece: +${fmt(grossProfit)}`}
          </p>
        </div>
      </div>
    </div>
  );
}

// 8. Analytics & Turnover Demo
function AnalyticsTurnoverDemo({ isFa }: { isFa: boolean }) {
  return (
    <div className="space-y-4 text-xs">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-caption-mono">
        <div className="p-3 rounded-xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700">
          <span className="text-neutral-500 text-[11px] block">
            {isFa ? 'پرفروش‌ترین رنگ:' : 'Top Selling Color:'}
          </span>
          <span className="text-base font-bold text-neutral-900 dark:text-white">
            {isFa ? 'مشکی زغالی' : 'Charcoal Black'}
          </span>
          <span className="text-[10px] text-emerald-500 block">
            {isFa ? '۴۸٪ کل فروش' : '48% of total volume'}
          </span>
        </div>
        <div className="p-3 rounded-xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700">
          <span className="text-neutral-500 text-[11px] block">
            {isFa ? 'پرفروش‌ترین سایز:' : 'Fastest Velocity Size:'}
          </span>
          <span className="text-base font-bold text-neutral-900 dark:text-white">
            {isFa ? 'سایز L و M' : 'Size L & M'}
          </span>
          <span className="text-[10px] text-emerald-500 block">
            {isFa ? 'گردش ۲.۴ برابری' : '2.4x Velocity Index'}
          </span>
        </div>
        <div className="p-3 rounded-xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700">
          <span className="text-neutral-500 text-[11px] block">
            {isFa ? 'کالاهای خواب‌رفته (Deadstock):' : 'Stagnant Deadstock:'}
          </span>
          <span className="text-base font-bold text-amber-500">
            {isFa ? '۱۴ قلم' : '14 SKUs'}
          </span>
          <span className="text-[10px] text-neutral-400 block">
            {isFa ? '> ۹۰ روز بدون گردش' : '> 90 days zero turn'}
          </span>
        </div>
        <div className="p-3 rounded-xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700">
          <span className="text-neutral-500 text-[11px] block">
            {isFa ? 'سود ناخالص دوره:' : 'Gross Margin:'}
          </span>
          <span className="text-base font-bold text-teal-600 dark:text-teal-400">42.8%</span>
          <span className="text-[10px] text-emerald-500 block">
            {isFa ? '+۶.۲٪ نسبت به فصل قبل' : '+6.2% vs last season'}
          </span>
        </div>
      </div>

      {/* Visual Velocity Bar */}
      <div className="p-4 rounded-xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 space-y-2">
        <div className="flex justify-between font-bold">
          <span>{isFa ? 'تحلیل توزیع سرعت فروش (Turnover Velocity)' : 'Turnover Velocity & Stock Aging Distribution'}</span>
          <span className="font-caption-mono text-teal-600 dark:text-teal-400">
            {isFa ? 'به‌روزرسانی هفتگی' : 'Live Sync'}
          </span>
        </div>
        <div className="h-4 w-full rounded-full bg-neutral-200 dark:bg-neutral-700 overflow-hidden flex">
          <div className="bg-emerald-500 h-full" style={{ width: '55%' }} title="Fast Movers (55%)" />
          <div className="bg-blue-500 h-full" style={{ width: '30%' }} title="Regular Movers (30%)" />
          <div className="bg-amber-500 h-full" style={{ width: '15%' }} title="Deadstock (15%)" />
        </div>
        <div className="flex justify-between text-[11px] text-neutral-500 font-caption-mono pt-1">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            {isFa ? 'کالای سریع‌فروش (۵۵٪)' : 'Fast Movers (55%)'}
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-blue-500" />
            {isFa ? 'گردش معمولی (۳۰٪)' : 'Regular Movers (30%)'}
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-amber-500" />
            {isFa ? 'خواب‌رفته نیازمند حراج (۱۵٪)' : 'Deadstock (15%)'}
          </span>
        </div>
      </div>
    </div>
  );
}

// 9. Sayadi Cheques & Treasury Demo
function SayadiChequesDemo({ isFa }: { isFa: boolean }) {
  const [cheques, setCheques] = useState(
    isFa
      ? [
          {
            id: '1',
            sayad: '3482-9012-7654-1182',
            issuer: 'پخش پارچه و پوشاک طهران',
            amount: 45000000,
            dueDate: '۱۴۰۳/۰۸/۱۵',
            type: 'پرداختی به بنکدار',
            status: 'در جریان وصول',
          },
          {
            id: '2',
            sayad: '9821-4451-0982-3341',
            issuer: 'مزون پروانه (مشتری اعتباری)',
            amount: 18500000,
            dueDate: '۱۴۰۳/۰۸/۲۸',
            type: 'دریافتی از مشتری',
            status: 'پاس‌شده',
          },
        ]
      : [
          {
            id: '1',
            sayad: 'REF-84920-US',
            issuer: 'Fabric & Apparel Wholesaler Inc.',
            amount: 1850,
            dueDate: '2026-11-15',
            type: 'Supplier Payable',
            status: 'Pending Clearance',
          },
          {
            id: '2',
            sayad: 'REC-33910-US',
            issuer: 'Atelier Maison Chic (Wholesale Client)',
            amount: 720,
            dueDate: '2026-11-28',
            type: 'Client Receivable',
            status: 'Settled',
          },
        ]
  );

  const toggleStatus = (id: string) => {
    setCheques((prev) =>
      prev.map((c) => {
        if (c.id !== id) return c;
        if (isFa) {
          const next = c.status === 'در جریان وصول' ? 'پاس‌شده' : c.status === 'پاس‌شده' ? 'خرج‌شده به بنکدار' : 'در جریان وصول';
          return { ...c, status: next };
        } else {
          const next = c.status === 'Pending Clearance' ? 'Settled' : c.status === 'Settled' ? 'Endorsed to Vendor' : 'Pending Clearance';
          return { ...c, status: next };
        }
      })
    );
  };

  return (
    <div className="space-y-4 text-xs">
      <div className="space-y-2">
        {cheques.map((c) => (
          <div
            key={c.id}
            className="p-3.5 rounded-xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
          >
            <div>
              <div className="flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0" />
                <span className="font-bold text-neutral-900 dark:text-white">{c.issuer}</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-700 font-caption-mono">
                  {c.type}
                </span>
              </div>
              <p className="font-caption-mono text-[11px] text-neutral-500 mt-1">
                {isFa ? `صیاد: ${c.sayad} • سررسید: ${c.dueDate}` : `Instrument Ref: ${c.sayad} • Due Date: ${c.dueDate}`}
              </p>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
              <span className="font-caption-mono font-bold text-neutral-900 dark:text-white text-sm">
                {isFa ? `${c.amount.toLocaleString('fa-IR')} ت` : `$${c.amount.toLocaleString()} USD`}
              </span>
              <button
                onClick={() => toggleStatus(c.id)}
                className={`px-3 py-1.5 rounded-lg font-medium text-[11px] transition-all cursor-pointer ${
                  c.status === 'پاس‌شده' || c.status === 'Settled'
                    ? 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300'
                    : c.status === 'خرج‌شده به بنکدار' || c.status === 'Endorsed to Vendor'
                    ? 'bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300'
                    : 'bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300'
                }`}
              >
                {c.status} ({isFa ? 'تغییر وضعیت' : 'Toggle'})
              </button>
            </div>
          </div>
        ))}
      </div>
      <p className="text-[11px] text-neutral-500 text-center font-caption-mono">
        {isFa
          ? 'با کلیک روی وضعیت هر چک، گردش وضعیت چک در خزانه‌داری را شبیه‌سازی کنید'
          : 'Click any instrument status to simulate automated treasury lifecycle updates'}
      </p>
    </div>
  );
}

// 10. Financial Export & Tax Ledger Demo
function FinancialExportDemo({ isFa }: { isFa: boolean }) {
  const [exported, setExported] = useState<string | null>(null);

  return (
    <div className="space-y-4 text-xs">
      <div className="p-4 rounded-xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 space-y-3">
        <div className="flex justify-between items-center font-bold">
          <span>{isFa ? 'تولید سند دوبل حسابداری تراز شده' : 'Automated Balanced Double-Entry Journal'}</span>
          <span className="text-teal-600 dark:text-teal-400 font-caption-mono">
            {isFa ? 'تراز کل: ۰ ریال مغایرت' : 'Total Trial Balance: $0.00 Variance'}
          </span>
        </div>
        <div className="p-3 rounded-lg bg-neutral-100 dark:bg-neutral-900 font-caption-mono text-[11px] space-y-1 text-neutral-700 dark:text-neutral-300">
          <div className="flex justify-between">
            <span>
              {isFa ? 'بدهکار: صندوق فروشگاه مرکزی (کد معین ۱۰۱)' : 'Debit: Central Retail Cash & POS Register (#1010)'}
            </span>
            <span>{isFa ? '+ ۱۲۴,۵۰۰,۰۰۰ ریال' : '+$4,250.00 USD'}</span>
          </div>
          <div className="flex justify-between">
            <span>
              {isFa ? 'بستانکار: درآمد فروش البسه و پوشاک (کد معین ۶۰۱)' : 'Credit: Apparel & Fashion Retail Revenue (#4010)'}
            </span>
            <span>{isFa ? '- ۱۱۴,۲۲۰,۱۸۳ ریال' : '-$3,899.08 USD'}</span>
          </div>
          <div className="flex justify-between text-amber-600 dark:text-amber-400">
            <span>
              {isFa ? 'بستانکار: مالیات بر ارزش افزوده فروش (کد معین ۴۰۵)' : 'Credit: Sales Tax / VAT Payable (#2200)'}
            </span>
            <span>{isFa ? '- ۱۰,۲۷۹,۸۱۷ ریال' : '-$350.92 USD'}</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <button
          onClick={() => setExported(isFa ? 'سپیدار سیستم' : 'QuickBooks (IIF / QBO)')}
          className="p-3 rounded-xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 hover:border-teal-500 font-medium text-center transition-all cursor-pointer"
        >
          {isFa ? 'خروجی اکسل سپیدار سیستم' : 'Export QuickBooks Format'}
        </button>
        <button
          onClick={() => setExported(isFa ? 'نرم‌افزار هلو' : 'Xero & Cloud Accounting')}
          className="p-3 rounded-xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 hover:border-teal-500 font-medium text-center transition-all cursor-pointer"
        >
          {isFa ? 'خروجی فایل دیتابیس هلو' : 'Export Xero & CSV'}
        </button>
        <button
          onClick={() => setExported(isFa ? 'سامانه مؤدیان و ماده ۱۶۹' : 'Standard VAT / Tax Ledger')}
          className="p-3 rounded-xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 hover:border-teal-500 font-medium text-center transition-all cursor-pointer"
        >
          {isFa ? 'فرمت استاندارد سامانه مؤدیان' : 'Standard VAT / Tax Excel'}
        </button>
      </div>

      {exported && (
        <div className="p-3 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 font-caption-mono text-center flex items-center justify-center gap-2">
          <CheckCircle2 className="w-4 h-4" />
          <span>
            {isFa
              ? `سند حسابداری با فرمت استاندارد ${exported} با موفقیت صادر و دانلود شد.`
              : `Accounting journal in standard ${exported} format generated and downloaded successfully.`}
          </span>
        </div>
      )}
    </div>
  );
}
