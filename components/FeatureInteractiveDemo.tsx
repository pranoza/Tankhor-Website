'use client';

import React, { useState } from 'react';
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
  return (
    <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/70 dark:bg-neutral-900/60 p-4 sm:p-7 shadow-sm overflow-hidden">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-5 border-b border-neutral-200 dark:border-neutral-800">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-flex w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-caption-mono text-neutral-500 dark:text-neutral-400">
              شبیه‌ساز تعاملی و ابری تنخور
            </span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white mt-1">
            پیش‌نمایش زنده: {featureTitle}
          </h3>
        </div>
        <div className="px-2.5 py-1 rounded-md bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-[11px] font-caption-mono text-neutral-600 dark:text-neutral-300">
          نسخه تست زنده (Live Demo)
        </div>
      </div>

      <div className="pt-6">
        {demoType === 'matrix-inventory' && <MatrixInventoryDemo />}
        {demoType === 'pos-quick-sale' && <PosQuickSaleDemo />}
        {demoType === 'size-finder' && <SizeFinderDemo />}
        {demoType === 'digital-catalog' && <DigitalCatalogDemo />}
        {demoType === 'barcode-label' && <BarcodeLabelDemo />}
        {demoType === 'woocommerce-sync' && <WooCommerceSyncDemo />}
        {demoType === 'landed-cost-calc' && <LandedCostDemo />}
        {demoType === 'analytics-turnover' && <AnalyticsTurnoverDemo />}
        {demoType === 'sayadi-cheques' && <SayadiChequesDemo />}
        {demoType === 'financial-export' && <FinancialExportDemo />}
      </div>
    </div>
  );
}

// 1. Matrix Inventory Demo
function MatrixInventoryDemo() {
  const [selectedVariant, setSelectedVariant] = useState<{ color: string; size: string } | null>({
    color: 'مشکی زغالی',
    size: 'L',
  });
  const [transferSent, setTransferSent] = useState(false);

  const colors = [
    { name: 'مشکی زغالی', hex: '#1c1c1c' },
    { name: 'کرم نسکافه‌ای', hex: '#d2b48c' },
    { name: 'سفید صدفی', hex: '#f8f8f8' },
  ];
  const sizes = ['S', 'M', 'L', 'XL', '2XL'];

  const stockData: Record<string, Record<string, number>> = {
    'مشکی زغالی': { S: 4, M: 8, L: 2, XL: 0, '2XL': 5 },
    'کرم نسکافه‌ای': { S: 6, M: 12, L: 7, XL: 3, '2XL': 1 },
    'سفید صدفی': { S: 2, M: 0, L: 9, XL: 6, '2XL': 4 },
  };

  return (
    <div className="space-y-5">
      <div className="text-xs text-neutral-600 dark:text-neutral-300 flex items-center justify-between">
        <span>مدل مادر: <strong>هودی کلاه‌دار کتان پاییزه</strong></span>
        <span className="font-caption-mono text-teal-600 dark:text-teal-400">کد مادر: HD-884</span>
      </div>

      {/* Matrix Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-center border-collapse text-xs">
          <thead>
            <tr className="border-b border-neutral-200 dark:border-neutral-800 text-neutral-500 font-caption-mono">
              <th className="py-2.5 px-3 text-right">رنگ / سایز</th>
              {sizes.map((s) => (
                <th key={s} className="py-2.5 px-3">{s}</th>
              ))}
              <th className="py-2.5 px-3">جمع رنگ</th>
            </tr>
          </thead>
          <tbody>
            {colors.map((c) => {
              const rowTotal = Object.values(stockData[c.name] || {}).reduce((a, b) => a + b, 0);
              return (
                <tr key={c.name} className="border-b border-neutral-200/60 dark:border-neutral-800/60">
                  <td className="py-2.5 px-3 text-right flex items-center gap-2">
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
                          className={`w-full py-1.5 px-2 rounded-lg font-caption-mono text-xs transition-all ${
                            isSelected
                              ? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-bold ring-2 ring-teal-500'
                              : isZero
                              ? 'bg-red-50 dark:bg-red-950/40 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-900'
                              : isLow
                              ? 'bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-900'
                              : 'bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700 hover:border-teal-400'
                          }`}
                        >
                          {count === 0 ? 'ناموجود' : `${count} عدد`}
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
              آیتم انتخابی: <strong>{selectedVariant.color}</strong> - سایز <strong>{selectedVariant.size}</strong>
              {' '}(موجودی فعلی: {stockData[selectedVariant.color]?.[selectedVariant.size]} عدد)
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
                  <span>حواله انتقال به شعبه ۲ صادر شد</span>
                </>
              ) : (
                <>
                  <Truck className="w-3.5 h-3.5" />
                  <span>صدور حواله انتقال بین شعب</span>
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
function PosQuickSaleDemo() {
  const [cart, setCart] = useState([
    { id: '1', title: 'کت تک کتان مردانه (طوسی - 50)', price: 1850000, cost: 1100000, qty: 1 },
    { id: '2', title: 'شلوار پارچه‌ای ترک (سرمه‌ای - 44)', price: 950000, cost: 580000, qty: 1 },
  ]);
  const [discount, setDiscount] = useState(100000);
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

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 text-xs">
      {/* Quick Add Barcode Simulation */}
      <div className="lg:col-span-7 space-y-4">
        <div className="flex items-center gap-2 p-2.5 rounded-lg bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700">
          <Barcode className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0" />
          <input
            type="text"
            readOnly
            value="بارکدخوان فعال • برای تست روی آیتم‌های زیر کلیک کنید"
            className="w-full bg-transparent text-neutral-500 font-caption-mono text-xs focus:outline-none"
          />
        </div>

        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() =>
              addItem({ id: '3', title: 'پیراهن آکسفورد (سفید - L)', price: 680000, cost: 420000 })
            }
            className="p-3 text-right rounded-xl bg-white dark:bg-neutral-800/90 border border-neutral-200 dark:border-neutral-700 hover:border-teal-500 transition-all cursor-pointer"
          >
            <p className="font-bold text-neutral-900 dark:text-white">پیراهن آکسفورد</p>
            <p className="text-[11px] text-neutral-500">سفید • سایز L</p>
            <p className="font-caption-mono text-teal-600 dark:text-teal-400 mt-1">۶۸۰,۰۰۰ تومان</p>
          </button>
          <button
            onClick={() =>
              addItem({ id: '4', title: 'کمربند چرم طبیعی (مشکی)', price: 420000, cost: 210000 })
            }
            className="p-3 text-right rounded-xl bg-white dark:bg-neutral-800/90 border border-neutral-200 dark:border-neutral-700 hover:border-teal-500 transition-all cursor-pointer"
          >
            <p className="font-bold text-neutral-900 dark:text-white">کمربند چرم طبیعی</p>
            <p className="text-[11px] text-neutral-500">اکسسوری • مشکی</p>
            <p className="font-caption-mono text-teal-600 dark:text-teal-400 mt-1">۴۲۰,۰۰۰ تومان</p>
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
                  بهای تمام‌شده: {item.cost.toLocaleString('fa-IR')} تومان
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-caption-mono font-bold text-neutral-900 dark:text-white">
                  {(item.price * item.qty).toLocaleString('fa-IR')} ت
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
          <span>فاکتور دخل و صندوق</span>
          <span className="text-teal-600 dark:text-teal-400 font-caption-mono">#INV-1092</span>
        </div>

        <div className="space-y-1.5 text-neutral-600 dark:text-neutral-300">
          <div className="flex justify-between">
            <span>جمع اقلام:</span>
            <span className="font-caption-mono">{subtotal.toLocaleString('fa-IR')} تومان</span>
          </div>
          <div className="flex justify-between text-amber-600 dark:text-amber-400">
            <span>تخفیف مشتری:</span>
            <span className="font-caption-mono">- {discount.toLocaleString('fa-IR')} تومان</span>
          </div>
          <div className="flex justify-between font-bold text-neutral-900 dark:text-white text-sm pt-2 border-t border-neutral-200 dark:border-neutral-700">
            <span>مبلغ قابل پرداخت:</span>
            <span className="font-caption-mono text-teal-600 dark:text-teal-400">
              {finalTotal.toLocaleString('fa-IR')} تومان
            </span>
          </div>
        </div>

        {/* Realtime Profit Insight */}
        <div className="p-2.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 space-y-1">
          <div className="flex items-center justify-between font-bold text-emerald-800 dark:text-emerald-300">
            <span>سود ناخالص واقعی این فاکتور:</span>
            <span className="font-caption-mono">+{profit.toLocaleString('fa-IR')} تومان</span>
          </div>
          <p className="text-[10px] text-emerald-700 dark:text-emerald-400">
            حاشیه سود: {marginPercent}٪ • بهای تمام‌شده انبار: {totalCost.toLocaleString('fa-IR')} تومان
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
              <span>فاکتور ثبت شد و کارتخوان تسویه گردید</span>
            </>
          ) : (
            <>
              <Receipt className="w-4 h-4 text-teal-400 dark:text-teal-600" />
              <span>ارسال مبلغ به دستگاه کارتخوان (POS)</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}

// 3. Size Finder Demo
function SizeFinderDemo() {
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
            <span className="font-semibold text-neutral-800 dark:text-neutral-200">قد خریدار (سانتی‌متر):</span>
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
            <span className="font-semibold text-neutral-800 dark:text-neutral-200">وزن خریدار (کیلوگرم):</span>
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
          <span className="font-semibold text-neutral-800 dark:text-neutral-200 block mb-2">استایل و تنخور دلخواه:</span>
          <div className="grid grid-cols-3 gap-2">
            <button
              onClick={() => setFitStyle('slim')}
              className={`py-2 px-2 rounded-lg border text-center font-medium transition-all ${
                fitStyle === 'slim'
                  ? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 border-neutral-900'
                  : 'bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border-neutral-200 dark:border-neutral-700'
              }`}
            >
              جذب (Slim)
            </button>
            <button
              onClick={() => setFitStyle('regular')}
              className={`py-2 px-2 rounded-lg border text-center font-medium transition-all ${
                fitStyle === 'regular'
                  ? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 border-neutral-900'
                  : 'bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border-neutral-200 dark:border-neutral-700'
              }`}
            >
              استاندارد (Regular)
            </button>
            <button
              onClick={() => setFitStyle('oversize')}
              className={`py-2 px-2 rounded-lg border text-center font-medium transition-all ${
                fitStyle === 'oversize'
                  ? 'bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 border-neutral-900'
                  : 'bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border-neutral-200 dark:border-neutral-700'
              }`}
            >
              آزاد (Oversize)
            </button>
          </div>
        </div>
      </div>

      <div className="p-5 rounded-2xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 flex flex-col items-center justify-center text-center space-y-3">
        <div className="w-12 h-12 rounded-full bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800 flex items-center justify-center">
          <Ruler className="w-6 h-6 text-teal-600 dark:text-teal-400" />
        </div>
        <p className="text-xs text-neutral-500">سایز پیشنهادی سایزفیندر تنخور:</p>
        <div className="text-4xl font-extrabold font-caption-mono text-neutral-900 dark:text-white px-6 py-2 rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
          {suggestedSize}
        </div>
        <p className="text-xs text-neutral-600 dark:text-neutral-300 max-w-xs leading-relaxed">
          با توجه به قد {height} سانتی‌متر و وزن {weight} کیلوگرم و انتخاب استایل {fitStyle === 'oversize' ? 'آزاد' : fitStyle === 'slim' ? 'جذب' : 'استاندارد'}، این سایز با ۹۸٪ اطمینان تنخور ایده‌آلی خواهد داشت.
        </p>
      </div>
    </div>
  );
}

// 4. Digital Catalog Demo
function DigitalCatalogDemo() {
  const [selectedColor, setSelectedColor] = useState('نسکافه‌ای');
  const [inquired, setInquired] = useState(false);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center text-xs">
      <div className="space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 font-caption-mono text-[11px]">
          <QrCode className="w-3.5 h-3.5" />
          <span>tankhor.com/v/chic-boutique</span>
        </div>
        <h4 className="text-lg font-bold text-neutral-900 dark:text-white">
          ویترین آنلاین بوتیک شیک (نمایش در استوری اینستاگرام)
        </h4>
        <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
          مشتری بدون نیاز به ثبت‌نام در سایت، رنگ‌ها و موجودی زنده انبار را می‌بیند و با یک تپ، سفارش را مستقیماً به واتساپ شما می‌فرستد.
        </p>

        <div className="space-y-2">
          <span className="font-semibold text-neutral-800 dark:text-neutral-200">انتخاب رنگ کاتالوگ:</span>
          <div className="flex gap-2">
            {['نسکافه‌ای', 'مشکی زغالی', 'سبز زیتونی'].map((c) => (
              <button
                key={c}
                onClick={() => {
                  setSelectedColor(c);
                  setInquired(false);
                }}
                className={`px-3 py-1.5 rounded-lg border font-medium transition-all ${
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
          <span>{inquired ? 'پیام سفارش در واتساپ ارسال شد ✓' : 'استعلام خرید در واتساپ'}</span>
        </button>
      </div>

      {/* Simulated Mobile Screen */}
      <div className="mx-auto w-full max-w-[280px] rounded-3xl border-4 border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 p-4 shadow-xl space-y-3">
        <div className="h-32 rounded-xl bg-gradient-to-tr from-neutral-200 via-neutral-100 to-amber-50 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900 flex items-center justify-center text-neutral-400">
          <Tag className="w-8 h-8 opacity-40" />
        </div>
        <div>
          <div className="flex justify-between items-start">
            <h5 className="font-bold text-neutral-900 dark:text-white">پالتو کتی فوتر پشمی</h5>
            <span className="font-caption-mono text-emerald-600 dark:text-emerald-400 font-bold">موجود</span>
          </div>
          <p className="text-[11px] text-neutral-500 font-caption-mono mt-0.5">رنگ: {selectedColor}</p>
        </div>
        <div className="flex gap-1">
          {['38', '40', '42'].map((sz) => (
            <span key={sz} className="px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 text-[10px] font-caption-mono">
              سایز {sz}
            </span>
          ))}
        </div>
        <div className="pt-2 border-t border-neutral-200 dark:border-neutral-800 flex justify-between items-center">
          <span className="font-caption-mono font-bold text-neutral-900 dark:text-white">۱,۴۵۰,۰۰۰ ت</span>
          <span className="text-[10px] text-teal-600 dark:text-teal-400 font-bold">بوتیک شیک</span>
        </div>
      </div>
    </div>
  );
}

// 5. Barcode & Label Printing Demo
function BarcodeLabelDemo() {
  const [modelName, setModelName] = useState('کت تک اسلیم فیت');
  const [size, setSize] = useState('L');
  const [color, setColor] = useState('سرمه‌ای');
  const [price, setPrice] = useState('1,650,000');
  const [printed, setPrinted] = useState(false);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
      <div className="space-y-3">
        <h4 className="font-bold text-neutral-900 dark:text-white text-sm">
          تنظیمات اتیکت حرارتی رگال پوشاک
        </h4>
        <div className="space-y-2">
          <label className="block text-neutral-600 dark:text-neutral-300">نام مدل لباس:</label>
          <input
            type="text"
            value={modelName}
            onChange={(e) => setModelName(e.target.value)}
            className="w-full p-2 rounded-lg bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700"
          />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <label className="block text-neutral-600 dark:text-neutral-300">سایز:</label>
            <input
              type="text"
              value={size}
              onChange={(e) => setSize(e.target.value)}
              className="w-full p-2 rounded-lg bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 font-caption-mono"
            />
          </div>
          <div>
            <label className="block text-neutral-600 dark:text-neutral-300">رنگ:</label>
            <input
              type="text"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="w-full p-2 rounded-lg bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700"
            />
          </div>
        </div>
        <div>
          <label className="block text-neutral-600 dark:text-neutral-300">قیمت مصرف‌کننده (تومان):</label>
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
          <span>{printed ? 'دستور چاپ به پرینتر حرارتی ارسال شد...' : 'تست چاپ روی لیبل‌پرینتر'}</span>
        </button>
      </div>

      {/* Simulated 40x25mm / 60x40mm Label */}
      <div className="flex flex-col items-center justify-center">
        <div className="w-[240px] p-4 rounded-xl bg-white text-neutral-900 border-2 border-dashed border-neutral-300 shadow-md font-sans text-right space-y-2">
          <div className="flex justify-between items-center border-b border-neutral-200 pb-1 text-[11px] font-bold">
            <span>تنخور بوتیک</span>
            <span className="font-caption-mono text-[9px] text-neutral-500">TANKHOR</span>
          </div>
          <div>
            <p className="font-bold text-xs">{modelName}</p>
            <div className="flex justify-between text-[11px] text-neutral-600 mt-0.5">
              <span>رنگ: {color}</span>
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
            <span className="text-[10px] text-neutral-500">قیمت مقطوع:</span>
            <span className="font-caption-mono font-extrabold text-sm">{price} ت</span>
          </div>
        </div>
        <span className="text-[11px] text-neutral-500 font-caption-mono mt-2">
          پیش‌نمایش لیبل استاندارد حرارتی (بدون افت کیفیت)
        </span>
      </div>
    </div>
  );
}

// 6. WooCommerce Sync Demo
function WooCommerceSyncDemo() {
  const [shopStock, setShopStock] = useState(8);
  const [isSyncing, setIsSyncing] = useState(false);
  const [lastAction, setLastAction] = useState<string | null>(null);

  const simulateStoreSale = () => {
    if (shopStock <= 0) return;
    setIsSyncing(true);
    setShopStock((prev) => prev - 1);
    setLastAction('فروش در صندوق فروشگاه حضوری ثبت شد');
    setTimeout(() => {
      setIsSyncing(false);
      setLastAction('وب‌هوک تنخور موجودی ووکامرس را به صورت آنی به ' + (shopStock - 1) + ' عدد رساند ✓');
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
              انبار فیزیکی فروشگاه
            </span>
            <span className="font-caption-mono text-teal-600 dark:text-teal-400">{shopStock} عدد</span>
          </div>
          <p className="text-[11px] text-neutral-500">مدل: کت ترنچ پاییزه (کرم - سایز 38)</p>
          <button
            onClick={simulateStoreSale}
            disabled={isSyncing || shopStock === 0}
            className="w-full py-2 rounded-lg bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-semibold cursor-pointer disabled:opacity-50"
          >
            فروش ۱ عدد در صندوق مغازه
          </button>
        </div>

        {/* WooCommerce Site */}
        <div className="p-4 rounded-xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 space-y-2">
          <div className="flex items-center justify-between font-bold">
            <span className="flex items-center gap-1.5">
              <RefreshCw className={`w-4 h-4 text-blue-500 ${isSyncing ? 'animate-spin' : ''}`} />
              سایت ووکامرس (آنلاین)
            </span>
            <span className="font-caption-mono text-blue-500">{shopStock} عدد</span>
          </div>
          <p className="text-[11px] text-neutral-500">متغیر WooCommerce: Color=Cream, Size=38</p>
          <div className="p-2 rounded bg-neutral-100 dark:bg-neutral-900 text-center font-caption-mono text-[11px]">
            {isSyncing ? 'در حال ارسال وب‌هوک به سایت...' : 'موجودی انبار و سایت ۱۰۰٪ همگام است'}
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
function LandedCostDemo() {
  const [basePrice, setBasePrice] = useState(450000);
  const [shippingPerPiece, setShippingPerPiece] = useState(65000);
  const [customsPerPiece, setCustomsPerPiece] = useState(45000);
  const [packagingPerPiece, setPackagingPerPiece] = useState(25000);
  const [markupPercent, setMarkupPercent] = useState(55);

  const landedCost = basePrice + shippingPerPiece + customsPerPiece + packagingPerPiece;
  const retailPrice = Math.round((landedCost * (1 + markupPercent / 100)) / 1000) * 1000;
  const grossProfit = retailPrice - landedCost;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs">
      <div className="space-y-3">
        <h4 className="font-bold text-neutral-900 dark:text-white text-sm">
          تخصیص هزینه‌های وارده هر تکه لباس (Landed Cost)
        </h4>

        <div>
          <label className="block text-neutral-600 dark:text-neutral-300">قیمت خرید فاکتور مبدا (تومان):</label>
          <input
            type="number"
            value={basePrice}
            onChange={(e) => setBasePrice(Number(e.target.value))}
            className="w-full p-2 rounded-lg bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 font-caption-mono"
          />
        </div>

        <div className="grid grid-cols-3 gap-2">
          <div>
            <label className="block text-[11px] text-neutral-500">حمل و باربری:</label>
            <input
              type="number"
              value={shippingPerPiece}
              onChange={(e) => setShippingPerPiece(Number(e.target.value))}
              className="w-full p-1.5 rounded-lg bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 font-caption-mono text-[11px]"
            />
          </div>
          <div>
            <label className="block text-[11px] text-neutral-500">گمرک/ترخیص:</label>
            <input
              type="number"
              value={customsPerPiece}
              onChange={(e) => setCustomsPerPiece(Number(e.target.value))}
              className="w-full p-1.5 rounded-lg bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 font-caption-mono text-[11px]"
            />
          </div>
          <div>
            <label className="block text-[11px] text-neutral-500">بسته‌بندی/اتیکت:</label>
            <input
              type="number"
              value={packagingPerPiece}
              onChange={(e) => setPackagingPerPiece(Number(e.target.value))}
              className="w-full p-1.5 rounded-lg bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 font-caption-mono text-[11px]"
            />
          </div>
        </div>

        <div>
          <div className="flex justify-between mb-1">
            <span className="text-neutral-600 dark:text-neutral-300">درصد سود هدف روی رگال:</span>
            <span className="font-caption-mono font-bold text-teal-600 dark:text-teal-400">{markupPercent}٪</span>
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
            <span>قیمت خام فاکتور:</span>
            <span className="font-caption-mono">{basePrice.toLocaleString('fa-IR')} ت</span>
          </div>
          <div className="flex justify-between text-amber-600 dark:text-amber-400">
            <span>سرشکن هزینه‌های سربار:</span>
            <span className="font-caption-mono">
              +{(shippingPerPiece + customsPerPiece + packagingPerPiece).toLocaleString('fa-IR')} ت
            </span>
          </div>
          <div className="flex justify-between font-bold text-neutral-900 dark:text-white pt-1 border-t border-neutral-200 dark:border-neutral-700">
            <span>بهای تمام‌شده واقعی انبار (Landed Cost):</span>
            <span className="font-caption-mono text-teal-600 dark:text-teal-400">
              {landedCost.toLocaleString('fa-IR')} تومان
            </span>
          </div>
        </div>

        <div className="p-3 rounded-xl bg-neutral-900 text-white dark:bg-neutral-950 border border-neutral-800 space-y-1 text-center">
          <p className="text-[11px] text-neutral-400">قیمت پیشنهادی اتیکت فروشگاه:</p>
          <p className="text-xl font-extrabold font-caption-mono text-teal-400">
            {retailPrice.toLocaleString('fa-IR')} تومان
          </p>
          <p className="text-[10px] text-emerald-400">
            سود خالص تضمین‌شده برای هر تکه: +{grossProfit.toLocaleString('fa-IR')} تومان
          </p>
        </div>
      </div>
    </div>
  );
}

// 8. Analytics & Turnover Demo
function AnalyticsTurnoverDemo() {
  return (
    <div className="space-y-4 text-xs">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-caption-mono">
        <div className="p-3 rounded-xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700">
          <span className="text-neutral-500 text-[11px] block">پرفروش‌ترین رنگ:</span>
          <span className="text-base font-bold text-neutral-900 dark:text-white">مشکی زغالی</span>
          <span className="text-[10px] text-emerald-500 block">۴۸٪ کل فروش</span>
        </div>
        <div className="p-3 rounded-xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700">
          <span className="text-neutral-500 text-[11px] block">پرفروش‌ترین سایز:</span>
          <span className="text-base font-bold text-neutral-900 dark:text-white">سایز L و M</span>
          <span className="text-[10px] text-emerald-500 block">گردش ۲.۴ برابری</span>
        </div>
        <div className="p-3 rounded-xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700">
          <span className="text-neutral-500 text-[11px] block">کالاهای خواب‌رفته (Deadstock):</span>
          <span className="text-base font-bold text-amber-500">۱۴ قلم</span>
          <span className="text-[10px] text-neutral-400 block">&gt; ۹۰ روز بدون گردش</span>
        </div>
        <div className="p-3 rounded-xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700">
          <span className="text-neutral-500 text-[11px] block">سود ناخالص دوره:</span>
          <span className="text-base font-bold text-teal-600 dark:text-teal-400">۴۲.۸٪</span>
          <span className="text-[10px] text-emerald-500 block">+۶.۲٪ نسبت به فصل قبل</span>
        </div>
      </div>

      {/* Visual Velocity Bar */}
      <div className="p-4 rounded-xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 space-y-2">
        <div className="flex justify-between font-bold">
          <span>تحلیل توزیع سرعت فروش (Turnover Velocity)</span>
          <span className="font-caption-mono text-teal-600 dark:text-teal-400">به‌روزرسانی هفتگی</span>
        </div>
        <div className="h-4 w-full rounded-full bg-neutral-200 dark:bg-neutral-700 overflow-hidden flex">
          <div className="bg-emerald-500 h-full" style={{ width: '55%' }} title="اقلام پرفروش و نقدشونده (Fast Movers)" />
          <div className="bg-blue-500 h-full" style={{ width: '30%' }} title="فروش عادی (Regular Movers)" />
          <div className="bg-amber-500 h-full" style={{ width: '15%' }} title="رسوب انبار و خواب سرمایه (Deadstock)" />
        </div>
        <div className="flex justify-between text-[11px] text-neutral-500 font-caption-mono pt-1">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500" /> کالای سریع‌فروش (۵۵٪)
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-blue-500" /> گردش معمولی (۳۰٪)
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-amber-500" /> خواب‌رفته نیازمند حراج (۱۵٪)
          </span>
        </div>
      </div>
    </div>
  );
}

// 9. Sayadi Cheques Demo
function SayadiChequesDemo() {
  const [cheques, setCheques] = useState([
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
  ]);

  const toggleStatus = (id: string) => {
    setCheques((prev) =>
      prev.map((c) => {
        if (c.id !== id) return c;
        const next = c.status === 'در جریان وصول' ? 'پاس‌شده' : c.status === 'پاس‌شده' ? 'خرج‌شده به بنکدار' : 'در جریان وصول';
        return { ...c, status: next };
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
                صیاد: {c.sayad} • سررسید: {c.dueDate}
              </p>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
              <span className="font-caption-mono font-bold text-neutral-900 dark:text-white text-sm">
                {c.amount.toLocaleString('fa-IR')} ت
              </span>
              <button
                onClick={() => toggleStatus(c.id)}
                className={`px-3 py-1.5 rounded-lg font-medium text-[11px] transition-all cursor-pointer ${
                  c.status === 'پاس‌شده'
                    ? 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300'
                    : c.status === 'خرج‌شده به بنکدار'
                    ? 'bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300'
                    : 'bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300'
                }`}
              >
                {c.status} (تغییر وضعیت)
              </button>
            </div>
          </div>
        ))}
      </div>
      <p className="text-[11px] text-neutral-500 text-center font-caption-mono">
        با کلیک روی وضعیت هر چک، گردش وضعیت چک در خزانه‌داری را شبیه‌سازی کنید
      </p>
    </div>
  );
}

// 10. Financial Export Demo
function FinancialExportDemo() {
  const [exported, setExported] = useState<string | null>(null);

  return (
    <div className="space-y-4 text-xs">
      <div className="p-4 rounded-xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 space-y-3">
        <div className="flex justify-between items-center font-bold">
          <span>تولید سند دوبل حسابداری تراز شده</span>
          <span className="text-teal-600 dark:text-teal-400 font-caption-mono">تراز کل: ۰ ریال مغایرت</span>
        </div>
        <div className="p-3 rounded-lg bg-neutral-100 dark:bg-neutral-900 font-caption-mono text-[11px] space-y-1 text-neutral-700 dark:text-neutral-300">
          <div className="flex justify-between">
            <span>بدهکار: صندوق فروشگاه مرکزی (کد معین ۱۰۱)</span>
            <span>+ ۱۲۴,۵۰۰,۰۰۰ ریال</span>
          </div>
          <div className="flex justify-between">
            <span>بستانکار: درآمد فروش البسه و پوشاک (کد معین ۶۰۱)</span>
            <span>- ۱۱۴,۲۲۰,۱۸۳ ریال</span>
          </div>
          <div className="flex justify-between text-amber-600 dark:text-amber-400">
            <span>بستانکار: مالیات بر ارزش افزوده فروش (کد معین ۴۰۵)</span>
            <span>- ۱۰,۲۷۹,۸۱۷ ریال</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <button
          onClick={() => setExported('سپیدار سیستم')}
          className="p-3 rounded-xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 hover:border-teal-500 font-medium text-center transition-all cursor-pointer"
        >
          خروجی اکسل سپیدار سیستم
        </button>
        <button
          onClick={() => setExported('نرم‌افزار هلو')}
          className="p-3 rounded-xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 hover:border-teal-500 font-medium text-center transition-all cursor-pointer"
        >
          خروجی فایل دیتابیس هلو
        </button>
        <button
          onClick={() => setExported('سامانه مؤدیان و ماده ۱۶۹')}
          className="p-3 rounded-xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 hover:border-teal-500 font-medium text-center transition-all cursor-pointer"
        >
          فرمت استاندارد سامانه مؤدیان
        </button>
      </div>

      {exported && (
        <div className="p-3 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 font-caption-mono text-center flex items-center justify-center gap-2">
          <CheckCircle2 className="w-4 h-4" />
          <span>سند حسابداری با فرمت استاندارد {exported} با موفقیت صادر و دانلود شد.</span>
        </div>
      )}
    </div>
  );
}
