export interface NavigationLink {
  id: string;
  label: { fa: string; en: string };
  href: string;
}

export interface FAQItem {
  id: string;
  question: { fa: string; en: string };
  answer: { fa: string; en: string };
  category: { fa: string; en: string };
}

export interface ProPackage {
  id: '1m' | '3m' | '6m' | '12m';
  months: number;
  name: { fa: string; en: string };
  price: number;
  monthlyEquivalent: number;
  discountBadge?: { fa: string; en: string };
  tag?: { fa: string; en: string };
  popular?: boolean;
}

export interface ComparisonRow {
  feature: { fa: string; en: string };
  free: { fa: string; en: string };
  pro: { fa: string; en: string };
}

export interface PricingPlan {
  id: string;
  name: { fa: string; en: string };
  badge?: { fa: string; en: string };
  description: { fa: string; en: string };
  monthlyPrice: { fa: number; en: number };
  yearlyPriceMonthlyEquivalent: { fa: number; en: number };
  currency: { fa: string; en: string };
  popular?: boolean;
  isCustomPrice?: boolean;
  customPriceText?: { fa: string; en: string };
  contactPhone?: string;
  features: Array<{ fa: string; en: string }>;
  negativeFeatures?: Array<{ fa: string; en: string }>;
  ctaText: { fa: string; en: string };
  highlightColor?: string;
}

export interface FeatureModule {
  id: string;
  iconName: string;
  title: { fa: string; en: string };
  subtitle: { fa: string; en: string };
  description: { fa: string; en: string };
  benefits: Array<{ fa: string; en: string }>;
  metricBadge?: { fa: string; en: string };
}

export interface AccountingFeature {
  id: string;
  iconName: string;
  title: { fa: string; en: string };
  subtitle: { fa: string; en: string };
  description: { fa: string; en: string };
  benefits: Array<{ fa: string; en: string }>;
  tag: string;
}

export interface Testimonial {
  id: string;
  name: { fa: string; en: string };
  role: { fa: string; en: string };
  brand: { fa: string; en: string };
  avatar: string;
  comment: { fa: string; en: string };
  rating: number;
  businessType: { fa: string; en: string };
  impactMetric: { fa: string; en: string };
}

export interface MatrixSampleVariant {
  colorName: { fa: string; en: string };
  colorHex: string;
  sizes: {
    [key: string]: { stock: number; sku: string; price: number };
  };
}

export const siteContent = {
  meta: {
    title: {
      fa: "نرم افزار مدیریت و حسابداری فروشگاه پوشاک، بوتیک و مزون | تنخور",
      en: "Clothing Store, Boutique & Apparel Management Software | Tankhor",
    },
    description: {
      fa: "تنخور؛ نرم افزار مدیریت و حسابداری تخصصی فروشگاه پوشاک، بوتیک، مزون و تولیدی لباس. مدیریت یکپارچه محصولات، انبارداری رنگ/سایز، حسابداری مالی و چک صیادی؛ رایگان و آفلاین.",
      en: "Tankhor: Clothing store, boutique, maison & fashion manufacturing accounting software. Integrated product management, variant inventory, 360° financial accounting; 100% free & offline.",
    },
    keywords: [
      "نرم افزار مدیریت فروشگاه پوشاک",
      "نرم افزار حسابداری بوتیک",
      "نرم افزار حسابداری بوتیک رایگان",
      "نرم افزار حسابداری مزون",
      "نرم افزار حسابداری تولیدی پوشاک",
      "نرم افزار حسابداری تولیدی لباس",
      "نرم افزار انبارداری پوشاک",
      "نرم افزار انبارداری لباس و کفش",
      "نرم افزار حسابداری پوشاک رایگان",
      "نرم افزار انبارداری ماتریسی رنگ و سایز",
      "محاسبه بهای تمام شده پوشاک Landed Cost",
      "نرم افزار مدیریت بوتیک و مزون",
      "دانلود نرم افزار مدیریت پوشاک رایگان",
    ],
  },

  navLinks: [
    { id: "home", label: { fa: "خانه", en: "Home" }, href: "/" },
    { id: "features", label: { fa: "امکانات", en: "Features" }, href: "/features" },
    { id: "solutions", label: { fa: "راهکارها", en: "Solutions" }, href: "#solutions" },
    { id: "size-guide", label: { fa: "سایزفیندر هوشمند", en: "Size Finder" }, href: "/features/size-guide-engine" },
    { id: "pricing", label: { fa: "تن‌خور پرو", en: "Tankhor Pro" }, href: "#pricing" },
  ] as NavigationLink[],

  footerQuickLinks: [
    { id: "home", label: { fa: "خانه", en: "Home" }, href: "/" },
    { id: "features", label: { fa: "امکانات تخصصی", en: "Specialized Features" }, href: "/features" },
    { id: "solutions", label: { fa: "راهکارها", en: "Solutions" }, href: "#solutions" },
    { id: "why-tankhor", label: { fa: "چرا تنخور؟", en: "Why Tankhor?" }, href: "#why-tankhor" },
    { id: "pricing", label: { fa: "تن‌خور پرو (تعرفه‌ها)", en: "Tankhor Pro (Plans)" }, href: "#pricing" },
    { id: "free-version", label: { fa: "نسخه رایگان", en: "Free Version" }, href: "#free-version" },
    { id: "faq", label: { fa: "سوالات متداول", en: "FAQ" }, href: "#faq" },
    { id: "sitemap", label: { fa: "نقشه سایت (Sitemap)", en: "Sitemap" }, href: "/sitemap" },
  ] as NavigationLink[],

  hero: {
    badge: {
      fa: "نسخه رایگان محلی • نسخه Pro ابری و شعب",
      en: "Local Offline Free • Cloud & Multi-Branch Pro",
    },
    h1: {
      fa: "نرم افزار مدیریت و حسابداری فروشگاه پوشاک",
      en: "Clothing Store Management & Accounting Software",
    },
    subheadline: {
      fa: "سیستم یکپارچه فروش، انبارداری ماتریسی رنگ/سایز و حسابداری تخصصی پوشاک. نسخه رایگان با حداکثر سرعت روی سیستم شما کار می‌کند، و نسخه Pro قفل دسترسی وب و اتصال ابری شعب را باز می‌کند.",
      en: "Unified store management, color/size matrix inventory, and fashion accounting. The Free edition runs locally at maximum speed, while Pro unlocks web access and real-time cloud branch sync.",
    },
    ctaPrimary: {
      fa: "دانلود رایگان",
      en: "Free Download",
    },
    ctaSecondary: {
      fa: "بررسی پلن‌ها و امکانات",
      en: "Explore Plans & Features",
    },
    quickStats: [
      { value: "یکپارچه", label: { fa: "فروشگاه + انبار + حسابداری", en: "POS + Inventory + Ledger" } },
      { value: "آفلاین محلی", label: { fa: "سرعت بالا با SQLite محلی", en: "Ultra-fast Local SQLite DB" } },
      { value: "نسخه Pro", label: { fa: "دسترسی وب + اتصال شعب", en: "Web Access + Cloud Sync" } },
      { value: "حسابداری", label: { fa: "Landed Cost + چک صیادی", en: "Landed Cost + Sayad Checks" } },
    ],
    trustedBrands: [
      { name: "هپکو فشن | Hakupian Style", logoText: "HAKUPIAN" },
      { name: "مزون لورا | Lorra Maison", logoText: "LORRA MAISON" },
      { name: "برند زاویه | Zavieh Apparel", logoText: "ZAVIEH" },
      { name: "روکسا شوز | Roxa Shoes", logoText: "ROXA SHOES" },
      { name: "بوتیک وانیا | Vaniya Boutique", logoText: "VANIYA" },
      { name: "تولیدی تن‌پوش | Tanpoosh Factory", logoText: "TANPOOSH" },
    ],
  },

  whyTankhor: {
    title: {
      fa: "چرا تنخور؟ تفاوت ساختاری در سرعت و استقلال",
      en: "Why Tankhor? Structural Distinction in Speed & Independence",
    },
    subtitle: {
      fa: "یکپارچگی کامل فروش، انبارداری ماتریسی و مالی بدون نیاز به خرید نرم‌افزارهای مجزا یا فایل‌های پیچیده اکسل.",
      en: "Complete integration of retail POS, matrix inventory, and finance without generic software or messy spreadsheets.",
    },
    advantages: [
      {
        title: { fa: "تفکیک هوشمند محلی و ابری", en: "Smart Local vs. Cloud Architecture" },
        desc: { fa: "نسخه رایگان ۱۰۰٪ آفلاین روی سخت‌افزار خودتان بدون قطعی کار می‌کند؛ نسخه پرو دسترسی وب و سینک شعب را فراهم می‌سازد.", en: "Free runs 100% offline locally on your hardware; Pro unlocks live cloud sync and browser access." },
      },
      {
        title: { fa: "انبارداری ماتریسی رنگ و سایز", en: "Color & Size Variant Matrix" },
        desc: { fa: "تعریف یکباره مدل لباس و ساخت خودکار ده‌ها ترکیب رنگ و سایز (حروفی، عددی، کفش) با بارکد اختصاصی.", en: "Define a style once; auto-generate infinite color and size combinations with unique barcodes." },
      },
      {
        title: { fa: "حسابداری مالی و چک صیادی", en: "Financial Ledgers & Sayad Checks" },
        desc: { fa: "دفتر معین، حساب اشخاص، صندوق‌ها، چرخه چک‌های صیادی و گزارش‌های سامانه مؤدیان.", en: "Subsidiary ledgers, multi-cashbox treasury, full Sayad check workflows, and Taxpayer compliance." },
      },
      {
        title: { fa: "محاسبه بهای تمام‌شده واقعی (Landed Cost)", en: "True Landed Cost Engine" },
        desc: { fa: "تسهیم هزینه‌های حمل، گمرک، خیاطی و بسته‌بندی روی تک‌تک کالاها جهت محاسبه سود خالص دقیق.", en: "Allocate freight, customs, and stitching overhead directly onto SKU unit cost for accurate net margins." },
      },
      {
        title: { fa: "۱۰۰٪ آفلاین با دیتابیس داخلی SQLite", en: "100% Offline SQLite Engine" },
        desc: { fa: "سرعت فوق‌العاده و عدم وابستگی به اینترنت؛ صندوق فروشگاه در شلوغ‌ترین ساعات هرگز متوقف نمی‌شود.", en: "High-speed embedded SQLite DB. Zero latency and zero downtime during internet outages." },
      },
      {
        title: { fa: "راهنمای سایز هوشمند (ضد مرجوعی)", en: "Smart Size Guide Engine" },
        desc: { fa: "جدول اندازه‌گیری دقیق سانتیمتری جهت کاهش مرجوعی‌های فروشگاه آنلاین و اینستاگرامی.", en: "Interactive centimeter sizing specifications that slash size-exchange logistics for online buyers." },
      },
      {
        title: { fa: "امنیت سخت‌افزاری داده‌ها", en: "Hardware-Level Data Privacy" },
        desc: { fa: "اطلاعات مالی و موجودی در نسخه رایگان منحصراً روی سیستم خودتان ذخیره و با ۱ کلیک پشتیبان‌گیری می‌شود.", en: "Your financial and stock records stay private on your local storage, backed up with 1 click." },
      },
      {
        title: { fa: "مهاجرت خودکار ۱-کلیکه به ابری", en: "1-Click Cloud Migration Wizard" },
        desc: { fa: "ارتقای بی‌دردسر از نسخه رایگان به Pro ابری بدون تغییر یا از دست رفتن اطلاعات قبلی.", en: "Seamless upgrade path from local Free to Cloud Pro with an automated 1-click migration wizard." },
      },
      {
        title: { fa: "پلتفرم‌های ویندوز، مک و اندروید", en: "Cross-Platform Ecosystem" },
        desc: { fa: "اجرا روی انواع سیستم‌های صندوق، لپ‌تاپ و تبلت با پشتیبانی کامل از افزونه‌های کاربردی.", en: "Native Windows, macOS, Android apps, and web browser access with rich add-on support." },
      },
    ],
  },

  accountingModule: {
    title: {
      fa: "ماژول تخصصی حسابداری و مالی پوشاک",
      en: "Fashion Accounting & Financial Management",
    },
    subtitle: {
      fa: "شفافیت ریال به ریال درآمدها، هزینه‌های جاری، چک‌های صیادی و سود واقعی در صنف پوشاک و کیف و کفش",
      en: "Complete financial clarity: revenues, overhead expenses, Sayad checks, and true net margins",
    },
    features: [
      {
        id: "ledger",
        iconName: "BookOpen",
        title: { fa: "دفتر معین و حسابداری اشخاص", en: "Subsidiary Ledger & Contacts" },
        subtitle: { fa: "گردش حساب خریداران، بنکداران و خیاطان", en: "Receivables, Payables & Statements" },
        description: {
          fa: "مدیریت بدهکاری، بستانکاری، صدور فاکتور و ریزگردش حساب مشتریان، تأمین‌کنندگان پارچه و خیاطان با امکان تسویه‌حساب سریع.",
          en: "Track receivables, payables, and account statements for customers, fabric suppliers, and tailors with instant settlements.",
        },
        benefits: [
          { fa: "ریزگردش حساب طرف‌حساب‌ها با جزییات فاکتور", en: "Detailed transaction ledgers per counterparty" },
          { fa: "تعیین سقف اعتبار خریداران عمده و بنکداران", en: "Credit limit controls for wholesale buyers" },
          { fa: "صدور قبض دریافت و پرداخت نقد، پوز و حواله", en: "POS, cash, and bank receipt issuance" },
        ],
        tag: "LEDGER_ACCOUNTS",
      },
      {
        id: "treasury",
        iconName: "Landmark",
        title: { fa: "خزانه و مدیریت چک صیادی", en: "Treasury & Sayad Check Management" },
        subtitle: { fa: "کنترل صندوق‌ها و چرخه چک‌های دریافتی/پرداختی", en: "Multi-Cashbox & Check Lifecycle" },
        description: {
          fa: "مدیریت صندوق‌های فروشگاه، حساب‌های بانکی و پیگیری کامل وضعیت چک‌های صیادی (وصول، سررسید، برگشتی و خرج‌شده).",
          en: "Manage multiple store cashboxes, bank accounts, and track Sayad checks from deposit to clearance or bounce.",
        },
        benefits: [
          { fa: "هشدار خودکار موعد سررسید چک‌های صیادی", en: "Automated check due-date reminders" },
          { fa: "مدیریت کارتخوان‌های فروشگاه و مغایرت‌گیری", en: "Bank reconciliation & POS terminal tracking" },
          { fa: "ثبت چرخه انتقال، واگذاری و خرج چک", en: "Endorsement, transfer & clearance logging" },
        ],
        tag: "TREASURY_SAYAD",
      },
      {
        id: "landed-cost",
        iconName: "Calculator",
        title: { fa: "بهای تمام‌شده واقعی (Landed Cost)", en: "True Landed Cost Engine" },
        subtitle: { fa: "تسهیم هزینه‌های حمل، گمرک، خیاطی و بسته‌بندی", en: "Overhead Cost Allocation" },
        description: {
          fa: "تسهیم هوشمند هزینه‌های جانبی خرید و تولید روی تک‌تک محصولات برای تعیین قیمت تمام‌شده واقعی و سود خالص دقیق.",
          en: "Accurately distribute freight, customs, stitching, and packaging overhead over items to reveal true gross margins.",
        },
        benefits: [
          { fa: "تسهیم خودکار هزینه‌های سربار روی واریانت‌ها", en: "Overhead allocation on SKU unit cost" },
          { fa: "جلوگیری از زیان پنهان و محاسبه سود کاذب", en: "Eliminate false profits from hidden fees" },
          { fa: "تحلیل دقیق حاشیه سود خالص هر مدل لباس", en: "Accurate profit margin analysis per model" },
        ],
        tag: "LANDED_COST_ENGINE",
      },
      {
        id: "tax-reports",
        iconName: "FileSpreadsheet",
        title: { fa: "سامانه مؤدیان و گزارش‌های مالیاتی", en: "Taxpayer Portal & Statements" },
        subtitle: { fa: "ارزش افزوده، ماده ۱۶۹ و خروجی سپیدار/هلو", en: "VAT, Article 169 & ERP Export" },
        description: {
          fa: "ارسال فاکتورهای الکترونیکی به سامانه مؤدیان، گزارش ارزش افزوده و گزارش فصلی با قابلیت خروجی استاندارد به سایر سیستم‌ها.",
          en: "Electronic invoicing for Taxpayer System, automated VAT reports, seasonal tax statements, and standardized exports.",
        },
        benefits: [
          { fa: "اتصال الکترونیکی فاکتورها به سامانه مؤدیان", en: "Taxpayer portal electronic invoicing" },
          { fa: "گزارش ارزش افزوده خرید و فروش با ۱ کلیک", en: "One-click VAT purchase & sales reports" },
          { fa: "خروجی استاندارد جهت سپیدار، هلو و اکسل", en: "Standardized export for Sepidar & Holo" },
        ],
        tag: "TAX_COMPLIANCE",
      },
      {
        id: "pnl",
        iconName: "TrendingUp",
        title: { fa: "صورت سود و زیان لحظه‌ای", en: "Real-time P&L Statement" },
        subtitle: { fa: "سود خالص با احتساب هزینه‌های جاری", en: "Live Net Profit & Operating Expenses" },
        description: {
          fa: "مشاهده سود خالص لحظه‌ای فروشگاه با کسر هزینه‌های جاری (اجاره، حقوق پرسنل، تبلیغات) و بهای تمام‌شده کالاهای فروخته‌شده.",
          en: "Live profitability dashboard deducting operating expenses (rent, payroll, ads) and true COGS in real time.",
        },
        benefits: [
          { fa: "محاسبه دقیق سود ناخالص و سود خالص", en: "Accurate gross & net profit metrics" },
          { fa: "تفکیک هزینه‌های جاری بوتیک و شعب", en: "Store operational expenses categorization" },
          { fa: "نمودارهای تحلیل مالی و مقایسه عملکرد", en: "Visual performance benchmarks & trends" },
        ],
        tag: "LIVE_PNL_ANALYTICS",
      },
    ] as AccountingFeature[],
  },

  freeVersion: {
    title: { fa: "نرم افزار مدیریت و حسابداری پوشاک رایگان (Tankhor Free)", en: "Tankhor Free Apparel Management Software" },
    subtitle: {
      fa: "روی سیستم شخصی خود نصب کنید و بدون پرداخت هزینه اشتراک، مدیریت کامل محصولات، سایزبندی، فاکتورها و انبارداری را با حداکثر سرعت آغاز نمایید.",
      en: "Install locally on your computer and start managing apparel products, size matrices, invoices, and stock at maximum speed with zero subscription fees.",
    },
    benefits: [
      { fa: "ثبت نامحدود کالا، دسته‌بندی و برند (بدون سقف تعدادی)", en: "Unlimited products, categories, and brands with no quantity cap" },
      { fa: "ماتریس نامحدود متغیرها (رنگ، سایز، آرتیکل و بارکد اختصاصی)", en: "Unlimited variants (color, size, article, and custom barcodes)" },
      { fa: "سیستم هوشمند راهنمای سایز اختصاصی پوشاک و کفش (Size Guide)", en: "Smart specialized size guide engine for apparel & footwear" },
      { fa: "صدور سریع فاکتور فروش، پیش‌فاکتور و خرید", en: "Rapid sales invoicing, proformas, and purchase orders" },
      { fa: "مدیریت انبار، کاردکس موجودی و انبارگردانی", en: "Warehouse management, stock ledger cards, and auditing" },
      { fa: "حسابداری مشتریان و تأمین‌کنندگان (دفتر معین و بدهکار/بستانکار)", en: "Customer & supplier accounts (subsidiary ledger and receivables/payables)" },
      { fa: "۱۰۰٪ آفلاین و پرسرعت (پایگاه داده محلی SQLite بدون نیاز به اینترنت و قطعی)", en: "100% Offline & fast (Local SQLite DB without internet dependence or downtime)" },
      { fa: "امنیت کامل اطلاعات (ذخیره اطلاعات فروش و سود روی سخت‌افزار خودتان)", en: "Complete data privacy (sales and profit data strictly stored on your own hardware)" },
      { fa: "پشتیبان‌گیری و بازیابی دستی با ۱ کلیک (فایل JSON)", en: "1-Click manual backup & restore (JSON file)" },
      { fa: "امکان فعال‌سازی دائمی افزونه‌ها (چاپ بارکد، حسابداری دوبل و ووکامرس)", en: "Permanent add-on activation support (barcode printing, double-entry accounting, WooCommerce)" },
    ],
    ctaText: { fa: "دانلود رایگان نرم‌افزار (ویندوز / مک / اندروید)", en: "Download Free App (Windows / Mac / Android)" },
  },

  fashionFeatures: [
    {
      id: "products",
      iconName: "Package",
      title: { fa: "محصولات و مشخصات پوشاک", en: "Apparel Products & Specs" },
      subtitle: { fa: "اطلاعات جنس، پارچه و برند", en: "Comprehensive Fashion Specs" },
      description: {
        fa: "ثبت مشخصات تخصصی پارچه، جنس، برند و قیمت‌گذاری خرده‌فروشی و عمده‌فروشی با رابط سریع.",
        en: "Define garment fabric specs, origin, brand, and wholesale/retail price tiers with touch POS speed.",
      },
    },
    {
      id: "matrix",
      iconName: "Grid",
      title: { fa: "ماتریس رنگ و سایز", en: "Color & Size Matrix" },
      subtitle: { fa: "مدیریت خودکار واریانت‌ها", en: "Variant Architecture" },
      description: {
        fa: "تولید خودکار ماتریس سایزبندی حروفی (S تا 5XL)، عددی و کفش همراه با SKU و بارکد اختصاصی.",
        en: "Auto-generate variant matrices for letter/numeric/shoe sizes with dedicated barcodes and SKUs.",
      },
    },
    {
      id: "inventory",
      iconName: "Layers",
      title: { fa: "موجودی و Landed Cost", en: "Variant Stock & Landed Cost" },
      subtitle: { fa: "کنترل موجودی با بهای تمام‌شده", en: "Variant-Level Costing" },
      description: {
        fa: "کنترل لحظه‌ای موجودی هر رنگ و سایز، هشدار نقطه سفارش و محاسبه دقیق بهای تمام‌شده.",
        en: "Real-time stock tracking per variant, low-stock threshold alerts, and true landed unit costing.",
      },
    },
    {
      id: "warehouse",
      iconName: "Boxes",
      title: { fa: "انبارداری و حواله شعب", en: "Multi-Warehouse Transfers" },
      subtitle: { fa: "مدیریت انبار مرکزی و فروشگاه‌ها", en: "Central Warehouse Sync" },
      description: {
        fa: "انبارگردانی سریع با بارکدخوان و موبایل، صدور حواله بین شعب و رصد ورود و خروج کالا.",
        en: "Fast barcode-driven audits, inter-branch transfers, and full stock movement tracking.",
      },
    },
    {
      id: "orders",
      iconName: "ShoppingCart",
      title: { fa: "صندوق فروش و مرجوعی", en: "Fast POS & Size Returns" },
      subtitle: { fa: "صدور سریع فاکتور و تعویض سایز", en: "Rapid Invoice Processing" },
      description: {
        fa: "ثبت فاکتور در چند ثانیه، اتصال به کارتخوان، تعویض سایز بدون خطا و مدیریت تخفیف‌ها.",
        en: "Instant POS checkout, card terminal integration, seamless size exchanges, and promo discounts.",
      },
    },
    {
      id: "size-guide",
      iconName: "Ruler",
      title: { fa: "راهنمای سایز هوشمند", en: "Interactive Size Guide" },
      subtitle: { fa: "کاهش ۶۵ درصدی مرجوعی آنلاین", en: "Anti-Return Sizing Specs" },
      description: {
        fa: "جدول اندازه‌گیری سانتیمتری لباس و کفش برای هدایت دقیق مشتریان آنلاین و کاهش هزینه‌های ارسال مجدد.",
        en: "Interactive centimeter sizing specs that guide online buyers and slash return shipping costs.",
      },
    },
  ] as FeatureModule[],

  freeVsPro: {
    title: { fa: "از نسخه رایگان شروع کنید، هر زمان نیاز داشتید به ابری بروید", en: "Start Free, Seamlessly Upgrade to Cloud" },
    subtitle: {
      fa: "نسخه رایگان دسکتاپ تنخور تمامی نیازهای اصلی یک فروشگاه را پوشش می‌دهد. نسخه Pro برای همگام‌سازی ابری و چندین شعبه آماده است.",
      en: "Tankhor Free covers all core store operations on desktop. Tankhor Pro adds real-time cloud sync for multi-branch brands.",
    },
    freeCard: {
      title: { fa: "Tankhor Free", en: "Tankhor Free Desktop" },
      badge: { fa: "۱۰۰٪ رایگان و آفلاین", en: "100% Free & Offline" },
      features: [
        { fa: "اپلیکیشن نیتیو دسکتاپ (Windows و macOS)", en: "Native Desktop App (Windows & macOS)" },
        { fa: "دیتابیس سریع محلی SQLite (۱۰۰٪ آفلاین)", en: "Fast local SQLite DB (100% Offline)" },
        { fa: "رایگان همیشگی بدون پرداخت حق اشتراک", en: "Forever Free without monthly subscription" },
        { fa: "مدیریت کامل محصولات پوشاک، کیف و کفش", en: "Full Apparel, Bag & Footwear Management" },
        { fa: "ماتریس نامحدود رنگ و سایز", en: "Unlimited Color & Size Variant Matrix" },
        { fa: "دفتر معین، حسابداری اشخاص و صندوق", en: "Subsidiary Ledgers & Cashbox Accounts" },
        { fa: "مدیریت موجودی انبار و کارتکس کالا", en: "Warehouse Stock Tracking & Item Movements" },
        { fa: "ثبت فاکتور فروش، مرجوعی و تعویض سایز", en: "Sales Invoices, Returns & Size Exchanges" },
        { fa: "چاپ بارکد و اتیکت قیمت حرارتی پوشاک", en: "Thermal Barcode & Price Hangtag Printing" },
      ],
      ctaText: { fa: "دانلود رایگان نسخه دسکتاپ", en: "Download Tankhor Free Desktop" },
    },
    proCard: {
      title: { fa: "Tankhor Pro", en: "Tankhor Pro Cloud ERP" },
      badge: { fa: "همگام‌سازی ابری + حسابداری پیشرفته", en: "Cloud Sync + Full Accounting" },
      features: [
        { fa: "تمامی امکانات نسخه Tankhor Free", en: "Includes all Tankhor Free features" },
        { fa: "همگام‌سازی ابری خودکار متصل به سرور اختصاصی", en: "Automated Cloud Sync via Dedicated Server" },
        { fa: "دسترسی همزمان از وب PWA، دسکتاپ و موبایل", en: "Multi-Platform Access (Web PWA, Desktop, Mobile)" },
        { fa: "ماژول کامل خزانه، چک صیادی و سامانه مؤدیان", en: "Full Treasury, Sayad Check & Taxpayer System" },
        { fa: "موتور محاسبه بهای تمام‌شده واقعی (Landed Cost)", en: "True Landed Cost Calculation Engine" },
        { fa: "همگام‌سازی اطلاعات بین چند شعبه و چند انبار", en: "Multi-Store & Multi-Warehouse Live Sync" },
        { fa: "مدیریت کاربران با سطح دسترسی پیشرفته (RBAC)", en: "Role-Based Access Control & Staff Audit Logs" },
        { fa: "گزارش‌های فصلی مالیاتی و خروجی سپیدار/هلو", en: "Article 169 Tax Statements & Sepidar/Holo Export" },
      ],
      ctaText: { fa: "مشاهده امکانات و تست Pro", en: "Explore Tankhor Pro Cloud" },
    },
  },

  seoContent: {
    title: {
      fa: "پلتفرم یکپارچه مدیریت، انبارداری و حسابداری پوشاک چیست؟",
      en: "What is an Integrated Apparel ERP & Accounting Platform?",
    },
    paragraphs: [
      {
        fa: "کسب‌وکارهای پوشاک، بوتیک‌ها، مزون‌ها و فروشگاه‌های کیف و کفش نیازمند ابزاری هستند که ماهیت ماتریسی رنگ و سایز را پشتیبانی کند. نرم‌افزارهای عمومی حسابداری و اکسل منجر به ایجاد کدهای تکراری، سردرگمی در انبارداری، نادیده گرفتن هزینه‌های جانبی خرید (Landed Cost) و خطاهای مالی می‌شوند.",
        en: "Fashion retail, boutiques, and footwear stores require software natively built for color/size variant matrices. Generic accounting tools and spreadsheets create duplicate items, inventory chaos, distorted profits, and financial discrepancies.",
      },
      {
        fa: "نرم‌افزار تنخور (Tankhor) سیستم یکپارچه‌ای است که فروش فروشگاهی، انبارداری ماتریسی و حسابداری ۳۶۰ درجه را در یک ساختار مدرن تلفیق کرده است. هسته اصلی تنخور بر پایه تفکیک هوشمند بنا شده: نسخه رایگان روی سیستم محلی کاربر با حداکثر سرعت و بدون وابستگی به اینترنت کار می‌کند، و نسخه Pro قفل اتصال ابری، دسترسی وب و شعب را باز می‌نماید.",
        en: "Tankhor unifies retail POS, variant matrix inventory, and 360° financial accounting. Built on a smart architecture: Tankhor Free operates locally with zero internet dependency at lightning speed, while Tankhor Pro unlocks real-time cloud sync, web access, and multi-branch management.",
      },
      {
        fa: "با تنخور، علاوه بر مدیریت واریانت‌ها و صدور سریع فاکتور، به دفتر معین، پیگیری چک‌های صیادی، محاسبه بهای تمام‌شده واقعی (Landed Cost)، گزارش‌های فصلی و سامانه مؤدیان دسترسی دارید. همچنین با ویزارد ۱-کلیکه مهاجرت، انتقال اطلاعات از سیستم‌های قبلی مثل سپیدار، هلو و اکسل به‌سادگی انجام می‌شود.",
        en: "With Tankhor, beyond variant inventory and rapid invoicing, you gain subsidiary ledgers, Sayad check tracking, true landed cost calculations, and Taxpayer compliance. An automated 1-click migration wizard ensures effortless data import from legacy systems.",
      },
    ],

    accountingIntentQA: {
      question: {
        fa: "آیا تنخور شامل سیستم حسابداری کامل تخصصی پوشاک است؟",
        en: "Does Tankhor include a complete specialized accounting system?",
      },
      answer: {
        fa: "بله؛ تنخور سیستم کامل حسابداری مالی ۳۶۰ درجه پوشاک شامل دفتر معین، حسابداری اشخاص (خریداران، بنکداران، خیاطان)، مدیریت صندوق‌ها، گردش چک صیادی، بهای تمام‌شده Landed Cost، صورت سود و زیان و سامانه مؤدیان است.",
        en: "Yes; Tankhor provides full 360° fashion accounting: subsidiary ledgers, counterparty accounts, multi-cashbox treasury, Sayad check workflows, landed costing, live P&L, and Taxpayer portal integration.",
      },
    },
  },

  painPointsVsSolution: {
    title: {
      fa: "چرا استفاده از نرم‌افزارهای عمومی و اکسل برای پوشاک شکست می‌خورد؟",
      en: "Why Generic Accounting & Spreadsheets Fail for Fashion?",
    },
    subtitle: {
      fa: "مقایسه خطاهای متداول نرم‌افزارهای سنتی با ساختار تخصصی و یکپارچه تنخور",
      en: "Comparing generic tools & spreadsheets with Tankhor's specialized fashion ERP",
    },
    traditional: {
      title: { fa: "نرم‌افزارهای عمومی و اکسل", en: "Generic Software & Spreadsheets" },
      points: [
        {
          title: { fa: "نبود ماتریس رنگ و سایز", en: "No color/size variant matrix" },
          desc: { fa: "اجبار به تعریف صدها کد کالای تکراری برای یک مدل لباس و بی‌نظمی در انبار.", en: "Forcing dozens of separate item codes for a single garment, cluttering inventory." },
        },
        {
          title: { fa: "سود کاذب با نادیده گرفتن هزینه‌های جانبی", en: "Distorted profits ignoring landed fees" },
          desc: { fa: "عدم تسهیم هزینه‌های حمل، گمرک و خیاطی (Landed Cost) روی بهای تمام‌شده.", en: "Failing to allocate freight, customs, and stitching leads to false profit margins." },
        },
        {
          title: { fa: "خطای انسانی در چک‌های صیادی و حساب‌ها", en: "Manual Sayad check & balance errors" },
          desc: { fa: "ثبت دستی اسناد در اکسل و فراموشی سررسید چک‌ها و بدهی بنکداران.", en: "Manual spreadsheet tracking causes overdue checks and supplier balance disputes." },
        },
        {
          title: { fa: "قطعی اینترنت و توقف صندوق فروش", en: "Internet drops freeze store POS" },
          desc: { fa: "وابستگی نرم‌افزارهای ابری به شبکه و متوقف شدن فروش در ساعات شلوغ.", en: "Cloud-only POS freezes when internet drops during peak shopping hours." },
        },
      ],
    },
    tankhorSolution: {
      title: { fa: "پلتفرم یکپارچه تنخور (ERP پوشاک)", en: "Tankhor's Unified Fashion ERP" },
      points: [
        {
          title: { fa: "ماتریس خودکار رنگ و سایز", en: "Automated Variant Matrix" },
          desc: { fa: "تعریف یکباره مدل و ساخت اتوماتیک واریانت‌ها با بارکد اختصاصی.", en: "Define a style once; auto-generate variants with unique barcodes." },
        },
        {
          title: { fa: "موتور بهای تمام‌شده Landed Cost", en: "True Landed Cost Engine" },
          desc: { fa: "تسهیم هوشمند باربری و خیاطی روی قیمت تمام‌شده برای محاسبه سود واقعی.", en: "Allocate overhead freight and tailor costs to reveal exact net margins." },
        },
        {
          title: { fa: "مدیریت خزانه، چک صیادی و مؤدیان", en: "Treasury, Sayad Checks & Taxes" },
          desc: { fa: "هشدار سررسید چک‌ها، کنترل صندوق‌ها و اتصال الکترونیکی به سامانه مؤدیان.", en: "Due-date alerts, cashbox controls, and electronic Taxpayer compliance." },
        },
        {
          title: { fa: "سرعت محلی ۱۰۰٪ آفلاین + ارتقای ابری", en: "100% Offline Local + Cloud Sync" },
          desc: { fa: "کارکرد پایدار محلی روی دسکتاپ بدون نیاز به اینترنت، با امکان سینک ابری شعب.", en: "Uninterrupted local SQLite checkout with optional cloud branch sync." },
        },
      ],
    },
  },

  features: [
    {
      id: "matrix",
      iconName: "Grid",
      title: { fa: "ماتریس هوشمند رنگ و سایز", en: "Smart Color & Size Matrix" },
      subtitle: { fa: "مدیریت تنوع کالا بدون سردرگمی", en: "Effortless Variant Management" },
      description: {
        fa: "تعریف محصول در چند ثانیه؛ تولید خودکار ماتریس رنگ و سایز (حروفی، عددی و کفش) با بارکد و SKU اختصاصی برای هر واریانت.",
        en: "Create products in seconds; auto-generate color & size matrices with distinct SKUs and barcodes.",
      },
      benefits: [
        { fa: "صدور اتوماتیک بارکد اختصاصی برای هر واریانت", en: "Auto-generated barcodes per variant" },
        { fa: "قیمت‌گذاری منعطف برای سایزهای خاص", en: "Differential pricing per size tier" },
        { fa: "مشاهده موجودی کل در یک نگاه", en: "At-a-glance stock matrix view" },
      ],
      metricBadge: { fa: "ثبت ۱۰ برابر سریع‌تر", en: "10x Faster Product Entry" },
    },
    {
      id: "accounting",
      iconName: "Calculator",
      title: { fa: "حسابداری مالی و Landed Cost", en: "360° Accounting & Landed Cost" },
      subtitle: { fa: "محاسبه دقیق سود واقعی و قیمت تمام‌شده", en: "True Costing & Ledgers" },
      description: {
        fa: "دفتر معین اشخاص، تسهیم هزینه‌های حمل و خیاطی بر بهای تمام‌شده کالا و صورت سود و زیان دقیق لحظه‌ای.",
        en: "Subsidiary ledgers, freight/tailoring cost allocation on item costs, and real-time net P&L metrics.",
      },
      benefits: [
        { fa: "تسهیم هوشمند هزینه‌های جانبی خرید روی قیمت تمام‌شده", en: "Smart overhead cost allocation" },
        { fa: "دفتر معین و ریزگردش حساب طرف‌حساب‌ها", en: "Detailed customer and supplier ledgers" },
        { fa: "محاسبه سود خالص واقعی با کسر هزینه‌های جاری", en: "Net profit after deducting store expenses" },
      ],
      metricBadge: { fa: "محاسبه سود ۱۰۰٪ واقعی", en: "100% Accurate Margins" },
    },
    {
      id: "sayad-checks",
      iconName: "Landmark",
      title: { fa: "خزانه و مدیریت چک صیادی", en: "Treasury & Sayad Checks" },
      subtitle: { fa: "کنترل کامل اسناد دریافت و پرداخت", en: "Check Status Workflows" },
      description: {
        fa: "مدیریت صندوق‌ها و حساب‌های بانکی، رصد چرخه چک‌های صیادی و اتصال به سامانه مؤدیان مالیاتی.",
        en: "Manage cashboxes, bank accounts, track Sayad check lifecycles, and Taxpayer portal compliance.",
      },
      benefits: [
        { fa: "هشدار هوشمند سررسید چک‌های صیادی", en: "Automated due-date reminders" },
        { fa: "گزارش‌های فصلی ماده ۱۶۹ و ارزش افزوده", en: "Article 169 & VAT reports" },
        { fa: "خروجی استاندارد برای سپیدار و هلو", en: "Clean export for Sepidar & Holo" },
      ],
      metricBadge: { fa: "مدیریت کامل خزانه", en: "360° Treasury Control" },
    },
    {
      id: "warehouse",
      iconName: "Boxes",
      title: { fa: "انبارداری چندگانه و حواله", en: "Multi-Warehouse & Transfers" },
      subtitle: { fa: "کنترل شعب و انبار مرکزی", en: "Multi-Branch Visibility" },
      description: {
        fa: "ثبت ورود و خروج با بارکدخوان، صدور حواله بین انبارها، انبارگردانی سریع با موبایل و هشدار نقطه سفارش.",
        en: "Barcode stock check-in/out, inter-warehouse transfers, mobile auditing, and reorder alerts.",
      },
      benefits: [
        { fa: "صدور حواله مستقیم بین انبار و فروشگاه‌ها", en: "Direct inter-branch stock transfers" },
        { fa: "هشدار کسری موجودی سایزهای پرفروش", en: "Low-stock alert for bestsellers" },
        { fa: "انبارگردانی دقیق با بارکد اسکنر", en: "Fast barcode-driven audits" },
      ],
      metricBadge: { fa: "دقت ۹۹.۸٪ انبار", en: "99.8% Audit Accuracy" },
    },
    {
      id: "offline",
      iconName: "WifiOff",
      title: { fa: "سرعت محلی و استقلال آفلاین", en: "Local Offline Speed & Resilience" },
      subtitle: { fa: "تداوم ۱۰۰٪ فروش در قطعی اینترنت", en: "Zero Internet Downtime" },
      description: {
        fa: "دیتابیس سریع SQLite روی سیستم دسکتاپ شما؛ صندوق فروشگاه بدون ۱ ثانیه وقفه در قطعی شبکه به کار ادامه می‌دهد.",
        en: "High-speed local SQLite database. Sell continuously with zero latency during network drops.",
      },
      benefits: [
        { fa: "کارکرد ۱۰۰٪ مستقل از قطعی اینترنت", en: "100% resilient during network outages" },
        { fa: "حفظ حریم خصوصی و امنیت سخت‌افزاری", en: "Hardware-level privacy on local drive" },
        { fa: "پشتیبان‌گیری دستی سریع با ۱ کلیک", en: "1-Click fast manual JSON backup" },
      ],
      metricBadge: { fa: "پایداری ۱۰۰٪", en: "100% Uptime Guarantee" },
    },
    {
      id: "size-engine",
      iconName: "Ruler",
      title: { fa: "راهنمای سایز هوشمند (ضد مرجوعی)", en: "Interactive Size Guide Engine" },
      subtitle: { fa: "کاهش ۶۵ درصدی تعویض سایز آنلاین", en: "Anti-Return Sizing Specs" },
      description: {
        fa: "جدول اندازه‌گیری سانتیمتری لباس، شلوار و کفش با محاسبه‌گر هوشمند جهت انتخاب دقیق‌ترین سایز توسط خریدار.",
        en: "Centimeter garment measurement tables with interactive sizing calculator that slashes return rates.",
      },
      benefits: [
        { fa: "کاهش ۶۵ درصدی هزینه‌های مرجوعی و تعویض سایز", en: "65% reduction in size exchange costs" },
        { fa: "توضیحات بصری نحوه اندازه‌گیری با متر", en: "Visual measurement guide for buyers" },
        { fa: "خروجی لینک و کد ویجت برای ووکامرس/شاپیفای", en: "WooCommerce/Shopify embed widget" },
      ],
      metricBadge: { fa: "کاهش ۶۵٪ مرجوعی", en: "65% Less Returns" },
    },
  ] as FeatureModule[],

  pricing: {
    title: { fa: "تعرفه‌ها و پلن‌های شفاف تنخور", en: "Transparent & Flexible Tankhor Plans" },
    subtitle: {
      fa: "در ساختار تنخور، هسته اصلی تفاوت در «محل ذخیره داده و نحوه دسترسی» است: نسخه رایگان روی سیستم محلی کاربر با حداکثر سرعت و امکانات کامل کار می‌کند، و نسخه پرو قفل فضای ابری، وب و اتصال شعب را باز می‌کند.",
      en: "The core distinction in Tankhor is data storage and access method: the Free version operates entirely on your local machine at maximum speed with zero downtime, while the Pro version unlocks cloud sync, web browser access, and multi-branch management.",
    },
    proPackages: [
      {
        id: '1m',
        months: 1,
        name: { fa: '۱ ماهه', en: '1 Month' },
        price: 490000,
        monthlyEquivalent: 490000,
        tag: { fa: 'شروع سریع', en: 'Quick Start' },
      },
      {
        id: '3m',
        months: 3,
        name: { fa: '۳ ماهه (فصلی)', en: '3 Months (Quarterly)' },
        price: 1290000,
        monthlyEquivalent: 430000,
        discountBadge: { fa: '۱۲٪ تخفیف اقتصادی', en: '12% OFF' },
        tag: { fa: 'محبوب‌ترین', en: 'Most Popular' },
        popular: true,
      },
      {
        id: '6m',
        months: 6,
        name: { fa: '۶ ماهه', en: '6 Months' },
        price: 2390000,
        monthlyEquivalent: 398333,
        discountBadge: { fa: '۱۸٪ تخفیف', en: '18% OFF' },
        tag: { fa: 'شش ماهه', en: 'Semi-Annual' },
      },
      {
        id: '12m',
        months: 12,
        name: { fa: '۱۲ ماهه (سالانه)', en: '12 Months (Annual)' },
        price: 4490000,
        monthlyEquivalent: 374000,
        discountBadge: { fa: '۲۴٪ تخفیف', en: '24% OFF' },
        tag: { fa: 'بیشترین صرفه‌جویی', en: 'Best Value' },
      },
    ] as ProPackage[],
    freePlan: {
      title: { fa: 'پایه و آفلاین (همیشه رایگان)', en: 'Starter & Offline (Free Forever)' },
      badge: { fa: 'رایگان همیشگی', en: 'Forever Free' },
      targetAudience: { fa: 'مخصوص تک‌فروشگاه و استفاده آفلاین', en: 'For Single Stores & Offline Use' },
      price: 0,
      priceFormatted: { fa: '۰ تومان (رایگان همیشگی)', en: '0 Toman (Free Forever)' },
      shortDescription: {
        fa: 'تمام امکانات مدیریت فروش، انبارداری و سایزبندی به صورت نامحدود و امن روی سیستم خودتان.',
        en: 'Complete sales management, inventory, and size guide operations without limits, stored securely on your own system.',
      },
      ctaText: { fa: 'دانلود رایگان نرم‌افزار (ویندوز / مک / اندروید)', en: 'Download Free App (Windows / Mac / Android)' },
      features: [
        { fa: 'ثبت نامحدود کالا، دسته‌بندی و برند (بدون سقف تعدادی)', en: 'Unlimited products, categories, and brands with no quantity cap' },
        { fa: 'تنوع نامحدود متغیرها (رنگ، سایز، آرتیکل و بارکد اختصاصی)', en: 'Unlimited variants (color, size, article, and custom barcodes)' },
        { fa: 'سیستم هوشمند راهنمای سایز اختصاصی پوشاک و کفش (Size Guide)', en: 'Smart specialized size guide engine for apparel & footwear' },
        { fa: 'صدور سریع فاکتور فروش، پیش‌فاکتور و خرید', en: 'Rapid sales invoicing, proformas, and purchase orders' },
        { fa: 'مدیریت انبار، کاردکس موجودی و انبارگردانی', en: 'Warehouse management, stock ledger cards, and auditing' },
        { fa: 'حسابداری مشتریان و تأمین‌کنندگان (دفتر معین و بدهکار/بستانکار)', en: 'Customer & supplier accounts (subsidiary ledger and receivables/payables)' },
        { fa: '۱۰۰٪ آفلاین و پرسرعت (پایگاه داده محلی SQLite بدون نیاز به اینترنت و قطعی)', en: '100% Offline & fast (Local SQLite DB without internet dependence or downtime)' },
        { fa: 'امنیت کامل اطلاعات (اطلاعات فروش و سود شما صرفاً روی سخت‌افزار خودتان ذخیره می‌شود)', en: 'Complete data privacy (sales and profit data strictly stored on your own hardware)' },
        { fa: 'پشتیبان‌گیری و بازیابی دستی با ۱ کلیک (فایل JSON)', en: '1-Click manual backup & restore (JSON file)' },
        { fa: 'امکان فعال‌سازی دائمی افزونه‌ها (چاپ بارکد، حسابداری دوبل و ووکامرس)', en: 'Permanent add-on activation support (barcode printing, double-entry accounting, WooCommerce)' },
      ],
      negativeFeatures: [
        { fa: 'دسترسی به پنل تحت وب از طریق مرورگر اینترنت', en: 'Web browser dashboard access' },
        { fa: 'همگام‌سازی لحظه‌ای بین چند سیستم یا چند شعبه', en: 'Real-time sync between multiple computers or branches' },
        { fa: 'پشتیبان‌گیری خودکار ابری', en: 'Automated cloud backups' },
      ],
    },
    proPlan: {
      title: { fa: 'ابری و حرفه‌ای (Cloud Pro)', en: 'Cloud & Professional (Cloud Pro)' },
      badge: { fa: 'اتصال ابری و شعب', en: 'Cloud Sync & Branches' },
      trialBadge: { fa: '۱۴ روز تست رایگان', en: '14-Day Free Trial' },
      targetAudience: { fa: 'مخصوص فروشگاه‌های چندکاربره، شعب و زنجیره‌ای', en: 'For Multi-User Stores, Retail Branches & Chains' },
      shortDescription: {
        fa: 'اتصال زنده انبارها و شعب، دسترسی با مرورگر وب و تیم فروش همزمان؛ همراه با ۱۴ روز تست رایگان کامل.',
        en: 'Live connection between warehouses and branches, anywhere web access, and team sync with a 14-day full free trial.',
      },
      ctaText: { fa: 'خرید اشتراک', en: 'Buy Subscription' },
      trialCtaText: { fa: 'شروع تست رایگان ۱۴ روزه پلن Pro', en: 'Start 14-Day Free Trial' },
      features: [
        { fa: '۱۴ روز تست رایگان تمامی امکانات بدون نیاز به پرداخت اولیه', en: '14-day free trial with no upfront payment' },
        { fa: 'تمام امکانات نسخه رایگان به همراه:', en: 'All Free Plan features included, plus:' },
        { fa: 'همگام‌سازی زنده و نامحدود ابری (Real-Time Cloud Sync)', en: 'Real-Time Cloud Sync across all devices' },
        { fa: 'دسترسی کامل تحت وب با مرورگر (ورود به پنل بدون نیاز به نصب برنامه از موبایل یا لپ‌تاپ در هر نقطه)', en: 'Full web browser access (log in anywhere from mobile or laptop without installing)' },
        { fa: 'کاربران و پرسنل نامحدود (تعریف صندوقدار، مدیر، انباردار و حسابدار با سطح دسترسی مجزا)', en: 'Unlimited staff users (cashiers, managers, storekeepers, accountants with granular RBAC)' },
        { fa: 'مدیریت چند شعبه و چند انبار متمرکز (انتقال کالا و رصد موجودی در لحظه بین شعب)', en: 'Centralized multi-branch & multi-warehouse stock management and inter-store transfers' },
        { fa: 'انتقال خودکار ۱-کلیکه اطلاعات قبلی (Migration Wizard) به سرور ابری بدون از دست رفتن هیچ دیتایی', en: '1-Click automated data migration wizard to cloud servers with zero data loss' },
        { fa: 'پشتیبان‌گیری خودکار و روزانه ابری (بیمه کامل اطلاعات در برابر خرابی یا سرقت سیستم)', en: 'Automated daily cloud backups (complete data insurance against hardware theft or failure)' },
        { fa: 'اولویت در دریافت قابلیت‌های آینده (کاتالوگ آنلاین اختصاصی، سفارش‌گیری مستقیم مشتریان)', en: 'Early priority access to upcoming features (private digital catalog, direct customer orders)' },
        { fa: 'پشتیبانی ویژه و اولویت در پاسخگویی', en: 'Dedicated Priority Support & Rapid Response' },
      ],
    },
    comparisonTable: [
      {
        feature: { fa: 'مهلت تست و ارزیابی', en: 'Trial & Evaluation Period' },
        free: { fa: 'رایگان دائمی', en: 'Free Forever' },
        pro: { fa: '۱۴ روز تست رایگان کامل (بدون کارت)', en: '14-Day Full Free Trial (No Card)' },
      },
      {
        feature: { fa: 'هزینه اشتراک', en: 'Subscription Cost' },
        free: { fa: 'رایگان برای همیشه', en: 'Free Forever' },
        pro: { fa: 'ماهانه از ۳۷۴,۰۰۰ ت (در پلن سالانه)', en: 'From 374,000 T/mo (Annual plan)' },
      },
      {
        feature: { fa: 'تعداد کالا و تراکنش', en: 'Products & Transactions' },
        free: { fa: 'نامحدود', en: 'Unlimited' },
        pro: { fa: 'نامحدود', en: 'Unlimited' },
      },
      {
        feature: { fa: 'نرم‌افزار ویندوز، مک و اندروید', en: 'Windows, macOS & Android Apps' },
        free: { fa: 'دارد', en: 'Included' },
        pro: { fa: 'دارد', en: 'Included' },
      },
      {
        feature: { fa: 'اجرای آفلاین و بدون اینترنت', en: 'Offline Execution without Internet' },
        free: { fa: 'دارد (پایگاه محلی)', en: 'Yes (Local Database)' },
        pro: { fa: 'دارد (با قابلیت کش آنلاین)', en: 'Yes (With Online Cache)' },
      },
      {
        feature: { fa: 'دسترسی تحت وب (مرورگر)', en: 'Web Browser Dashboard Access' },
        free: { fa: 'ندارد', en: 'No' },
        pro: { fa: 'دارد (از هر دستگاهی)', en: 'Yes (From any device)' },
      },
      {
        feature: { fa: 'همگام‌سازی لحظه‌ای چند سیستم', en: 'Real-Time Multi-Device Sync' },
        free: { fa: 'ندارد', en: 'No' },
        pro: { fa: 'دارد (بی‌درنگ)', en: 'Yes (Real-time)' },
      },
      {
        feature: { fa: 'مدیریت پرسنل و دسترسی‌ها', en: 'Staff & Role-Based Access' },
        free: { fa: '۱ کاربر اصلی سیستم', en: '1 Primary Local User' },
        pro: { fa: 'نامحدود (با نقش‌های مجزا)', en: 'Unlimited (Granular RBAC roles)' },
      },
      {
        feature: { fa: 'مدیریت چند انبار و چند شعبه', en: 'Multi-Warehouse & Branch Support' },
        free: { fa: '۱ انبار محلی', en: '1 Local Store' },
        pro: { fa: 'نامحدود و متمرکز', en: 'Unlimited & Centralized' },
      },
      {
        feature: { fa: 'پشتیبان‌گیری (Backup)', en: 'Data Backups' },
        free: { fa: 'دستی (فایل JSON)', en: 'Manual (JSON File)' },
        pro: { fa: 'تمام‌خودکار روی سرور ابری', en: 'Fully automated cloud backups' },
      },
      {
        feature: { fa: 'مهاجرت و انتقال دیتا', en: 'Data Migration & Transfer' },
        free: { fa: 'بازیابی دستی', en: 'Manual Restore' },
        pro: { fa: 'انتقال ۱-کلیکه خودکار به ابر', en: '1-Click automatic cloud migration' },
      },
      {
        feature: { fa: 'پشتیبانی', en: 'Customer Support' },
        free: { fa: 'پشتیبانی عمومی', en: 'Standard Community Support' },
        pro: { fa: 'پشتیبانی اختصاصی و اولویت‌دار', en: 'Dedicated Priority Support' },
      },
    ] as ComparisonRow[],
    enterpriseCallout: {
      title: { fa: 'راهکارهای سفارشی و سازمانی (Enterprise)', en: 'Enterprise & Retail Chains' },
      description: {
        fa: 'نیاز به استقرار اختصاصی روی سرور محلی (On-Premise)، یکپارچگی اختصاصی با سپیدار و راهکاران، یا اتصال بیش از ۲۰ شعبه دارید؟ با واحد پروژه‌های سازمانی ما مشورت کنید.',
        en: 'Need private on-premise deployment, custom API integrations, or running more than 20 outlets? Consult with our enterprise engineering team.',
      },
      ctaText: { fa: 'تماس با واحد سازمانی (۰۲۱-۵۵۴۱۶۲۷۴)', en: 'Contact Enterprise Sales (021-55416274)' },
      phone: '02155416274',
    },
  },

  testimonials: [
    {
      id: "1",
      name: { fa: "مهندس رضا اکبری", en: "Reza Akbari" },
      role: { fa: "مدیرعامل", en: "CEO" },
      brand: { fa: "برند پوشاک هپکو فشن", en: "Hakupian Style" },
      avatar: "https://picsum.photos/seed/man1/150/150",
      comment: {
        fa: "با داشتن ۶ شعبه و ۱۰۰۰ واریانت کت و شلوار، قبلاً انبارگردانی و حسابداری ما کابوس بود. یکپارچگی تنخور با Landed Cost و چک صیادی باعث شد حسابداری و انبارگردانی شعب در ۴ ساعت با صفر درصد خطا انجام بشه!",
        en: "With 6 retail branches and 1,000 suit variants, inventory audit and accounting used to be a nightmare. Tankhor's Landed Cost and Sayad check integration slashed audit time to 4 hours with zero errors!",
      },
      rating: 5,
      businessType: { fa: "تولیدی و فروشگاه زنجیره‌ای", en: "Retail Chain & Factory" },
      impactMetric: { fa: "کاهش ۹۰٪ زمان انبارگردانی و مالی", en: "90% Faster Audit & Finance" },
    },
    {
      id: "2",
      name: { fa: "سارا خسروی", en: "Sara Khosravi" },
      role: { fa: "بنیان‌گذار و طراح", en: "Founder & Lead Designer" },
      brand: { fa: "مزون آنلاین لورا", en: "Lorra Online Maison" },
      avatar: "https://picsum.photos/seed/woman1/150/150",
      comment: {
        fa: "بزرگترین معضل ما محاسبه سود واقعی با هزینه‌های خیاطی و گمرک و مرجوعی سایز بود. ماژول Landed Cost و راهنمای سایز تنخور باعث شد سود خالص دقیق رو ببینیم و مرجوعی‌ها به زیر ۷ درصد برسه!",
        en: "Our biggest issue was estimating real profits considering stitching/freight fees alongside size returns. Tankhor's Landed Cost engine revealed true net margins while returns dropped below 7%!",
      },
      rating: 5,
      businessType: { fa: "مزون و فروشگاه آنلاین", en: "Maison & Online Boutique" },
      impactMetric: { fa: "کاهش ۷۵٪ مرجوعی سایز", en: "75% Drop in Returns" },
    },
    {
      id: "3",
      name: { fa: "امیرحسین عباسی", en: "Amirhossein Abbasi" },
      role: { fa: "مدیر انبار و زنجیره تأمین", en: "Supply Chain Manager" },
      brand: { fa: "فروشگاه کفش روکسا", en: "Roxa Shoes Chain" },
      avatar: "https://picsum.photos/seed/man2/150/150",
      comment: {
        fa: "کارکرد آفلاین SQLite تنخور نجات‌دهنده ماست. قطعی اینترنت در شلوغ‌ترین ساعات جمعه‌های پاساژ همیشه فروش ما رو فلج می‌کرد، اما حالا صندوق و حسابداری ما بدون نیاز به اینترنت سریع کار می‌کنه.",
        en: "Tankhor's offline SQLite architecture is a lifesaver. Internet drops during peak Friday mall traffic used to freeze our cashiers. Now POS and accounts work smoothly offline!",
      },
      rating: 5,
      businessType: { fa: "کفش و کیف و اکسسوری", en: "Footwear & Accessories" },
      impactMetric: { fa: "۱۰۰٪ تداوم فروشگاه", en: "100% Sales Uptime" },
    },
  ] as Testimonial[],

  faqs: [
    {
      id: "faq-1",
      question: {
        fa: "تفاوت اصلی نسخه رایگان و نسخه Pro تنخور در چیست؟",
        en: "What is the primary difference between Tankhor Free and Pro?",
      },
      answer: {
        fa: "تفاوت در «محل ذخیره داده و نحوه دسترسی» است. نسخه رایگان روی سیستم محلی شما با دیتابیس SQLite بدون نیاز به اینترنت و با حداکثر سرعت کار می‌کند. نسخه Pro قفل دسترسی تحت وب، همگام‌سازی ابری بی‌درنگ و اتصال چند شعبه و چند کاربر را باز می‌کند.",
        en: "The difference lies in data storage and access method. Free runs locally on your hardware via SQLite with zero internet dependency and maximum speed. Pro unlocks real-time cloud sync, web browser access, multi-branch, and multi-user RBAC.",
      },
      category: { fa: "پلن‌ها و تفاوت‌ها", en: "Plans & Architecture" },
    },
    {
      id: "faq-2",
      question: {
        fa: "تعرفه‌ها و شرایط پرداخت اشتراک Pro چگونه است؟",
        en: "What are the pricing plans and payment options for Pro?",
      },
      answer: {
        fa: "اشتراک Pro تنخور به صورت ۱ ماهه (۴۹۰,۰۰۰ تومان)، ۳ ماهه (۱,۲۹۰,۰۰۰ تومان با ۱۲٪ تخفیف)، ۶ ماهه (۲,۳۹۰,۰۰۰ تومان) و ۱۲ ماهه (۴,۴۹۰,۰۰۰ تومان با ۲۴٪ تخفیف) از طریق درگاه مستقیم بانکی زیبال قابل پرداخت و فعال‌سازی آنی است.",
        en: "Tankhor Pro is available in 1-month (490k T), 3-month (1.29M T - 12% off), 6-month (2.39M T), and 12-month (4.49M T - 24% off) tiers via Zibal gateway with instant activation.",
      },
      category: { fa: "تعرفه‌ها", en: "Pricing" },
    },
    {
      id: "faq-trial",
      question: {
        fa: "آیا پلن Pro امکان تست رایگان دارد؟",
        en: "Does Tankhor Pro offer a free trial?",
      },
      answer: {
        fa: "بله، شما می‌توانید تمامی قابلیت‌های نسخه ابری Pro (همگام‌سازی ابری، دسترسی وب و اتصال شعب) را به مدت ۱۴ روز به صورت کاملاً رایگان و بدون نیاز به پرداخت یا ثبت کارت بانکی تست و ارزیابی نمایید.",
        en: "Yes, you can test all Pro cloud features (real-time sync, web access, and branch management) completely free for 14 days with no credit card or upfront payment required.",
      },
      category: { fa: "تست رایگان", en: "Free Trial" },
    },
    {
      id: "faq-3",
      question: {
        fa: "چگونه داده‌های نسخه رایگان را به نسخه ابری Pro منتقل کنیم؟",
        en: "How do we migrate local data from Free to Pro Cloud?",
      },
      answer: {
        fa: "انتقال با ویزارد ۱-کلیکه درون نرم‌افزار انجام می‌شود. تمامی کالاها، ماتریس رنگ و سایز، طرف‌حساب‌ها و فاکتورهای شما به صورت خودکار و امن به پایگاه ابری منتقل شده و دسترسی وب و شعب بلافاصله فعال می‌گردد.",
        en: "Migration is fully automated with a built-in 1-click wizard. All items, variant matrices, customer records, and invoices migrate securely to the cloud database without any data loss.",
      },
      category: { fa: "مهاجرت ابری", en: "Cloud Migration" },
    },
    {
      id: "faq-4",
      question: {
        fa: "امنیت داده‌ها و کارکرد ۱۰۰٪ آفلاین نسخه رایگان چگونه است؟",
        en: "How secure is the 100% offline Free version?",
      },
      answer: {
        fa: "نسخه رایگان داده‌ها را در پایگاه داده محلی SQLite روی هارد دیسک خودتان نگهداری می‌کند. هیچ اطلاعاتی از فروش یا سود شما بدون اجازه به اینترنت ارسال نمی‌شود و در صورت قطعی شبکه، صندوق فروشگاه بدون ۱ ثانیه وقفه کار می‌کند.",
        en: "Tankhor Free stores encrypted data on your local device using SQLite. No sales or profit records leave your machine, and your cashiers operate continuously during network drops.",
      },
      category: { fa: "امنیت و آفلاین", en: "Offline & Security" },
    },
    {
      id: "faq-5",
      question: {
        fa: "چگونه اطلاعاتمان را از سپیدار، هلو یا فایل اکسل منتقل کنیم؟",
        en: "How do we import existing data from Sepidar, Holo, or Excel?",
      },
      answer: {
        fa: "تنخور دارای ورودی اختصاصی فایل اکسل برای محصولات، سایزها، مشتریان و موجودی اول‌دوره است. همچنین تیم فنی تنخور فایل‌های پایگاه داده سیستم قبلی شما را به‌طور کامل و رایگان تبدیل و وارد می‌کند.",
        en: "Tankhor includes a dedicated Excel Importer for inventory, variant sizes, customer ledgers, and opening stock, with free white-glove migration assistance from legacy software.",
      },
      category: { fa: "انتقال دیتا", en: "Data Import" },
    },
    {
      id: "faq-6",
      question: {
        fa: "محاسبه بهای تمام‌شده Landed Cost چگونه سود واقعی را نشان می‌دهد؟",
        en: "How does true Landed Cost calculate real profit margins?",
      },
      answer: {
        fa: "تنخور هزینه‌های جانبی مانند حمل، گمرک، خیاطی و بسته‌بندی را روی هر تکه لباس تسهیم می‌کند؛ بنابراین به جای دیدن سود کاذب فاکتوری، سود خالص واقعی هر مدل لباس و واریانت را مشاهده می‌نمایید.",
        en: "Tankhor distributes shipping, customs, stitching, and packaging costs over each SKU, preventing misleading invoice margins and displaying true net profitability.",
      },
      category: { fa: "حسابداری و سود", en: "Accounting & Margin" },
    },
    {
      id: "faq-7",
      question: {
        fa: "امکانات ماژول چک صیادی و سامانه مؤدیان چیست؟",
        en: "What are the Sayad check and Taxpayer portal capabilities?",
      },
      answer: {
        fa: "ثبت کامل وضعیت چک‌ها (سررسید، وصول، برگشتی، خرج‌شده)، هشدار اتوماتیک موعد پاس شدن، صدور صورت‌حساب الکترونیکی سامانه مؤدیان و گزارش ارزش افزوده و ماده ۱۶۹ فصلی.",
        en: "Full check status tracking (clearance, bounce, endorsement), due-date reminders, electronic Taxpayer portal invoicing, and Article 169 seasonal statements.",
      },
      category: { fa: "چک و مالیات", en: "Checks & Tax" },
    },
    {
      id: "faq-8",
      question: {
        fa: "ماتریس رنگ و سایز تنخور چه مزیتی نسبت به نرم‌افزارهای عمومی دارد؟",
        en: "Why is Tankhor's color/size matrix better than generic software?",
      },
      answer: {
        fa: "در نرم‌افزارهای عمومی برای ۱ مدل لباس با ۵ رنگ و ۴ سایز باید ۲۰ کالای جداگانه بسازید. در تنخور فقط مدل را تعریف می‌کنید و سیستم اتوماتیک ماتریس ۲۰ واریانت را با بارکد و قیمت مجزا مدیریت می‌کند.",
        en: "Generic tools force creating 20 separate items for 1 shirt with 5 colors and 4 sizes. In Tankhor, define the style once and auto-generate the 20-variant grid with unique barcodes.",
      },
      category: { fa: "رنگ و سایز", en: "Variant Matrix" },
    },
    {
      id: "faq-9",
      question: {
        fa: "راهنمای سایز هوشمند چگونه مرجوعی فروشگاه آنلاین را کاهش می‌دهد؟",
        en: "How does the Size Guide engine reduce online fashion returns?",
      },
      answer: {
        fa: "با ثبت جدول اندازه‌گیری سانتیمتری (قد، دور سینه، دور کمر، عرض شانه) و ویجت هوشمند محاسبه سایز مشتری، خطاهای انتخاب سایز خریداران بیش از ۶۵٪ کاهش می‌یابد.",
        en: "Precise centimeter measurements (chest, sleeve, waist, shoulder) paired with a smart sizing calculator slash online return rates by up to 65%.",
      },
      category: { fa: "راهنمای سایز", en: "Size Guide" },
    },
    {
      id: "faq-10",
      question: {
        fa: "نرم‌افزار تنخور روی چه پلتفرم‌هایی نصب و اجرا می‌شود؟",
        en: "Which operating systems and platforms does Tankhor support?",
      },
      answer: {
        fa: "نسخه پایه دسکتاپ برای ویندوز (Windows 10/11) و مک (macOS)، نسخه موبایل برای اندروید، و نسخه تحت وب مدرن (PWA) برای دسترسی با مرورگر در لپ‌تاپ، تبلت و گوشی.",
        en: "Native desktop apps for Windows 10/11 and macOS, an Android mobile app, and a responsive web application (PWA) accessible from any modern browser.",
      },
      category: { fa: "پلتفرم‌ها", en: "Platforms" },
    },
  ] as FAQItem[],
};
