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
    { id: "why-tankhor", label: { fa: "چرا تنخور؟", en: "Why Tankhor?" }, href: "#why-tankhor" },
    { id: "solutions", label: { fa: "راهکارها", en: "Solutions" }, href: "#solutions" },
    { id: "accounting", label: { fa: "حسابداری تخصصی", en: "Specialized Accounting" }, href: "#accounting" },
    { id: "features", label: { fa: "امکانات تخصصی", en: "Fashion Features" }, href: "#features" },
    { id: "free-version", label: { fa: "نسخه رایگان", en: "Free Version" }, href: "#free-version" },
    { id: "faq", label: { fa: "سوالات متداول", en: "FAQ" }, href: "#faq" },
  ] as NavigationLink[],

  hero: {
    badge: {
      fa: "رایگان • آفلاین • مخصوص پوشاک، کیف و کفش",
      en: "Free • Offline • Purpose-Built for Fashion",
    },
    h1: {
      fa: "نرم افزار مدیریت و حسابداری فروشگاه پوشاک",
      en: "Clothing Store Management & Accounting Software",
    },
    subheadline: {
      fa: "پلتفرم یکپارچه مدیریت فروشگاه، انبارداری ماتریسی رنگ/سایز و حسابداری تخصصی برای بوتیک‌ها، مزون‌ها و تولیدی‌های لباس؛ رایگان، آفلاین و سریع.",
      en: "Unified store management, variant matrix inventory, and dedicated accounting for boutiques, ateliers, and apparel manufacturers — free & offline.",
    },
    ctaPrimary: {
      fa: "دریافت نسخه رایگان / دانلود نسخه دسکتاپ و وب",
      en: "Download Free Version / Desktop & Web",
    },
    ctaSecondary: {
      fa: "بررسی امکانات حسابداری و ابری",
      en: "Explore Accounting & Cloud Features",
    },
    quickStats: [
      { value: "یکپارچه", label: { fa: "فروشگاه + انبار + حسابداری", en: "Retail + Inventory + Accounting" } },
      { value: "۱۰۰٪ آفلاین", label: { fa: "دیتابیس SQLite + همگام‌سازی ابری", en: "SQLite DB + Auto Cloud Sync" } },
      { value: "Landed Cost", label: { fa: "محاسبه بهای تمام‌شده واقعی", en: "True Landed Cost Engine" } },
      { value: "چک صیادی", label: { fa: "مدیریت خزانه و سامانه مؤدیان", en: "Treasury & Sayad Check Lifecycle" } },
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
      fa: "چرا تنخور؟ پلتفرم یکپارچه مدیریت، انبار و حسابداری پوشاک",
      en: "Why Tankhor? All-in-One Fashion ERP Architecture",
    },
    subtitle: {
      fa: "پایان دادن به پراکندگی داده‌ها و نیاز به خرید چندین نرم‌افزار مجزا (حسابداری عمومی + اکسل انبار + نرم‌افزار فروشگاهی).",
      en: "Eliminate fragmented data and stop paying for multiple mismatched tools (generic accounting + warehouse spreadsheets + basic POS).",
    },
    advantages: [
      {
        title: { fa: "یکپارچگی ۳۶۰ درجه فروش، انبار و مالی", en: "360° Unified Retail & Finance" },
        desc: { fa: "ترکیب کامل فروشگاهی، انبارداری ماتریسی رنگ و سایز، و حسابداری مالی تخصصی در یک بستر یکپارچه و هوشمند.", en: "Unifying retail store operations, matrix inventory, and dedicated fashion accounting into one central platform." },
      },
      {
        title: { fa: "انبارداری ماتریسی رنگ، سایز و واریانت", en: "Color & Size Variant Matrix Grid" },
        desc: { fa: "تعریف یکباره محصول و ساخت اتوماتیک ده‌ها ترکیب رنگ و سایز (حروفی، عددی، کفش) با بارکد و SKU اختصاصی.", en: "Single-entry product style creation that auto-generates infinite color/size combinations with dedicated SKUs." },
      },
      {
        title: { fa: "حسابداری مالی و مدیریت چک صیادی", en: "Financial Accounting & Sayad Checks" },
        desc: { fa: "دفتر معین، حسابداری اشخاص، مدیریت صندوق‌ها، حساب‌های بانکی و چرخه کامل چک‌های صیادی و سامانه مؤدیان.", en: "Subsidiary ledgers, accounts receivable/payable, multi-cashbox treasury, and full Sayad check status workflows." },
      },
      {
        title: { fa: "محاسبه بهای تمام‌شده واقعی (Landed Cost)", en: "True Landed Cost Calculation" },
        desc: { fa: "ثبت هزینه‌های حمل، گمرک، خیاطی و بسته‌بندی و تسهیم هوشمند آن روی تک‌تک محصولات برای محاسبه سود واقعی.", en: "Track transport, customs, stitching, and packaging costs, distributing them across items for accurate net profit." },
      },
      {
        title: { fa: "کارکرد ۱۰۰٪ آفلاین با دیتابیس SQLite", en: "100% Offline Resilience (SQLite DB)" },
        desc: { fa: "پایگاه داده داخلی سریع و ایمن روی دسکتاپ Windows و macOS بدون ۱ ثانیه وابستگی یا توقف در قطعی اینترنت.", en: "Ultra-fast embedded SQLite database running locally on Windows & macOS. Zero downtime during internet outages." },
      },
      {
        title: { fa: "همگام‌سازی ابری متصل به سرور اختصاصی", en: "Real-Time Cloud Sync" },
        desc: { fa: "اتصال امن به سرور اختصاصی، همگام‌سازی لحظه‌ای اطلاعات بین چندین شعبه، انبار مرکزی و PWA وب.", en: "Secure encrypted sync connecting physical retail branches, central warehouses, and web/mobile apps." },
      },
      {
        title: { fa: "موتور راهنمای سایز هوشمند (کاهش مرجوعی)", en: "Dynamic Size Guide Engine" },
        desc: { fa: "ارائه جدول اندازه‌گیری دقیق سانتیمتری جهت کاهش مرجوعی‌های فروشگاه آنلاین و اینستاگرامی.", en: "Interactive centimeter sizing specs that dramatically reduce size exchanges for online buyers." },
      },
      {
        title: { fa: "گزارش‌های مالیاتی و خروجی استانداردهایی مثل سپیدار", en: "Tax Reports & Sepidar/Holo Export" },
        desc: { fa: "تولید گزارش‌های فصلی ماده ۱۶۹، ارزش افزوده و قابلیت خروجی دادن داده‌ها به سیستم‌های مالی جانبی.", en: "Generate Article 169 seasonal tax reports, VAT statements, and export standardized data to external accounting software." },
      },
      {
        title: { fa: "دسترسی همزمان وب PWA + دسکتاپ نیتیو", en: "Multi-Platform (Desktop + Web PWA)" },
        desc: { fa: "استفاده همزمان روی رایانه‌های فروشگاه، تبلت صندوق و گوشی هوشمند مدیران با سطح دسترسی پیشرفته (RBAC).", en: "Cross-platform access across desktop, tablet POS, and smartphone web PWA with granular RBAC permissions." },
      },
    ],
  },

  accountingModule: {
    title: {
      fa: "ماژول تخصصی حسابداری و مدیریت مالی پوشاک",
      en: "Specialized Apparel Accounting & Financial Management Module",
    },
    subtitle: {
      fa: "شفافیت کامل ریال به ریال درآمدها، هزینه‌ها، چک‌های صیادی و بهای تمام‌شده واقعی در کسب‌وکارهای پوشاک و کیف و کفش",
      en: "Complete 360° visibility over revenue, expenses, Sayad checks, and landed product costs for fashion enterprises",
    },
    features: [
      {
        id: "ledger",
        iconName: "BookOpen",
        title: { fa: "دفتر معین و حسابداری اشخاص", en: "Subsidiary Ledger & People Accounts" },
        subtitle: { fa: "مدیریت بدهکاری، بستانکاری و گردش حساب", en: "Receivables, Payables & Account Statements" },
        description: {
          fa: "مدیریت دقیق تراکنش‌های مالی، صورت‌حساب مشتریان، بنکداران، خیاطان و تامین‌کنندگان پوشاک با قابلیت ارسال ریزفاکتور و تسویه‌حساب سریع.",
          en: "Manage financial transactions, customer ledgers, apparel wholesalers, tailors, and fabric supplier balances with instant statement exports.",
        },
        benefits: [
          { fa: "ثبت گردش حساب طرف‌حساب‌ها با جزییات فاکتور", en: "Detailed transaction ledgers per counterparty" },
          { fa: "محاسبه سقف اعتبار خریداران عمده و بنکداران", en: "Credit limits for wholesale buyers" },
          { fa: "صدور قبض دریافت/پرداخت نقد، کارتخوان و حواله", en: "POS, cash, and bank transfer receipts" },
        ],
        tag: "LEDGER_ACCOUNTS",
      },
      {
        id: "treasury",
        iconName: "Landmark",
        title: { fa: "خزانه و مدیریت چک صیادی", en: "Treasury & Sayad Check Management" },
        subtitle: { fa: "کنترل صندوق‌ها، بانک‌ها و چرخه اسناد دریافت/پرداختی", en: "Multi-Cashbox & Full Check Status Workflow" },
        description: {
          fa: "مدیریت صندوق‌های فروشگاه، حساب‌های بانکی متعدد، انتقال وجوه و پیگیری هوشمند چرخه چک‌های صیادی (وصول، سررسید، پاس‌نشده، برگشتی و خرج‌شده).",
          en: "Monitor store cashboxes, multiple bank accounts, fund transfers, and track Sayad check lifecycles (deposited, bounced, endorsed, or cashed).",
        },
        benefits: [
          { fa: "هشدار سررسید چک‌های صیادی دریافتی و پرداختی", en: "Automated due-date alerts for Sayad checks" },
          { fa: "مغایرت‌گیری بانکی و مدیریت کارتخوان‌های شعب", en: "Bank reconciliation & POS terminal tracking" },
          { fa: "ثبت چرخه کامل واگذاری، خرج و استرداد چک", en: "Check endorsement, deposit & refund tracking" },
        ],
        tag: "TREASURY_SAYAD",
      },
      {
        id: "landed-cost",
        iconName: "Calculator",
        title: { fa: "محاسبه بهای تمام‌شده واقعی (Landed Cost)", en: "True Landed Cost Engine" },
        subtitle: { fa: "تسهیم هزینه‌های حمل، گمرک، خیاطی و بسته‌بندی", en: "Cost Allocation over Individual Items" },
        description: {
          fa: "محاسبه قیمت واقعی هر تکه لباس با ثبت هزینه‌های جانبی خرید (باربری، گمرک، بسته‌بندی، کمیسیون) و تسهیم هوشمند آن بر اساس تعداد یا ارزش کالا جهت محاسبه سود خالص دقیق.",
          en: "Determine the true cost per garment by factoring in freight, customs, stitching, and packaging fees, allocating them across items for accurate gross margins.",
        },
        benefits: [
          { fa: "تسهیم هزینه‌های جانبی خرید روی قیمت تمام‌شده کالا", en: "Automated overhead allocation on SKU unit cost" },
          { fa: "جلوگیری از بیش‌برآورد سود خالص به دلیل هزینه‌های پنهان", en: "Prevent overestimating profits due to hidden shipping fees" },
          { fa: "تحلیل دقیق حاشیه سود واقعی هر مدل لباس و واریانت", en: "True profit margin analysis per garment model" },
        ],
        tag: "LANDED_COST_ENGINE",
      },
      {
        id: "tax-reports",
        iconName: "FileSpreadsheet",
        title: { fa: "گزارش‌های مالیاتی و سامانه مؤدیان", en: "Tax Reports & Taxpayer System" },
        subtitle: { fa: "ارزش افزوده، گزارش‌های فصلی و خروجی سپیدار/هلو", en: "VAT, Article 169 & Sepidar/Holo Export" },
        description: {
          fa: "تولید اتوماتیک گزارش ارزش افزوده، گزارش‌های فصلی ماده ۱۶۹ مالیاتی و ارسال فاکتورها به سامانه مؤدیان، به همراه خروجی استاندارد جهت همگام‌سازی با سپیدار و هلو.",
          en: "Auto-generate VAT reports, Article 169 seasonal statements, Taxpayer System electronic invoices, and export clean data to external financial systems.",
        },
        benefits: [
          { fa: "ارسال الکترونیکی صورت‌حساب به سامانه مؤدیان", en: "Direct electronic invoicing for Taxpayer portal" },
          { fa: "گزارش ارزش افزوده خرید و فروش با ۱ کلیک", en: "One-click VAT purchase & sales statements" },
          { fa: "خروجی استاندارد اکسل جهت سیستم‌های سپیدار و هلو", en: "Standardized Excel output for Sepidar and Holo" },
        ],
        tag: "TAX_COMPLIANCE",
      },
      {
        id: "pnl",
        iconName: "TrendingUp",
        title: { fa: "صورت سود و زیان لحظه‌ای", en: "Real-time P&L Statement" },
        subtitle: { fa: "محاسبه سود خالص واقعی با احتساب هزینه‌های جاری", en: "Live Net Profit & Operating Expenses" },
        description: {
          fa: "مشاهده سود خالص دقیق فروشگاه در هر بازه زمانی؛ با کسر هزینه‌های جاری (اجاره، حقوق پرسنل، تبلیغات) و بهای تمام‌شده واقعی کالاهای فروخته‌شده.",
          en: "Real-time P&L analytics deducting store operational expenses (rent, salaries, marketing) and true COGS to reveal exact net profitability.",
        },
        benefits: [
          { fa: "محاسبه دقیق سود ناخالص و سود خالص کسب‌وکار", en: "Gross & net profit computation in real time" },
          { fa: "دسته‌بندی هزینه‌های جاری بوتیک و شعب", en: "Categorization of store operational expenses" },
          { fa: "نمودارهای تحلیل مالی و مقایسه عملکرد ماه‌های قبل", en: "Visual financial trends & monthly store benchmarks" },
        ],
        tag: "LIVE_PNL_ANALYTICS",
      },
    ] as AccountingFeature[],
  },

  freeVersion: {
    title: { fa: "نرم افزار مدیریت و حسابداری پوشاک رایگان (Tankhor Free)", en: "Tankhor Free Apparel Management Software" },
    subtitle: {
      fa: "تنخور را رایگان دانلود کنید و بدون پرداخت هزینه اشتراک، مدیریت محصولات، موجودی و حسابداری پایه فروشگاه پوشاک خود را شروع کنید.",
      en: "Download Tankhor Free today and start managing your fashion products, inventory, and basic accounting without subscription fees.",
    },
    benefits: [
      { fa: "۱۰۰٪ رایگان و بدون محدودیت زمانی (بدون انقضا یا Trial بودن)", en: "100% Free forever (Not a trial or limited demo)" },
      { fa: "نصب و کارکرد کاملاً آفلاین با دیتابیس ایمن SQLite روی ویندوز و مک", en: "Runs completely offline using secure local SQLite DB on Windows & macOS" },
      { fa: "بدون نیاز به اینترنت و بدون قطعی در صندوق فروشگاه", en: "No internet required for uninterrupted daily cashier operations" },
      { fa: "مناسب برای بوتیک‌ها، مزون‌ها، تولیدی‌ها و فروشگاه‌های کیف و کفش", en: "Perfect for boutiques, ateliers, clothing & footwear shops" },
      { fa: "مدیریت کامل تنوع رنگ و سایز با ماتریس هوشمند", en: "Full color & size variant matrix grid management" },
      { fa: "دفتر معین، حسابداری اشخاص و ثبت فاکتورهای خرید و فروش", en: "Subsidiary ledgers, customer/supplier accounts & invoices" },
      { fa: "مدیریت موجودی انبار، کارتکس کالا و چاپ بارکد و لیبل قیمت", en: "Warehouse stock ledgers, barcode & price tag printing" },
      { fa: "ثبت سریع سفارش‌ها، مرجوعی، تعویض سایز و ثبت دریافتی نقد/کارتخوان", en: "Fast sales invoices, size exchanges & POS payment entries" },
    ],
    ctaText: { fa: "دانلود رایگان نسخه دسکتاپ تنخور", en: "Download Tankhor Free Desktop" },
  },

  fashionFeatures: [
    {
      id: "products",
      iconName: "Package",
      title: { fa: "محصولات و دسته پوشاک", en: "Products & Fashion Specs" },
      subtitle: { fa: "مدیریت اطلاعات کامل پوشاک، جنس و برند", en: "Comprehensive Apparel Data" },
      description: {
        fa: "تعریف کامل مشخصات لباس، پارچه، جنس، کشور تولیدکننده، برند و قیمت‌های خرده‌فروشی و عمده‌فروشی با رابط کاربری لمسی و سریع.",
        en: "Maintain comprehensive product specs including fabric composition, brand, origin, and retail/wholesale price tiers.",
      },
    },
    {
      id: "matrix",
      iconName: "Grid",
      title: { fa: "ماتریس رنگ و سایز", en: "Color & Size Matrix" },
      subtitle: { fa: "مدیریت تنوع‌های مختلف هر مدل لباس", en: "Multi-Dimensional Variant Grid" },
      description: {
        fa: "ایجاد اتوماتیک ماتریس واریانت‌ها برای انواع سایزبندی (S/M/L/XL یا سایزهای عددی و کفش) به همراه کد SKU و بارکد اختصاصی.",
        en: "Auto-generate variant matrices for letter/numeric/footwear sizing with dedicated SKUs and barcode generation.",
      },
    },
    {
      id: "inventory",
      iconName: "Layers",
      title: { fa: "موجودی و Landed Cost", en: "Variant Stock & Landed Cost" },
      subtitle: { fa: "کنترل دقیق موجودی با بهای تمام‌شده واقعی", en: "Variant-Level Stock & Costing" },
      description: {
        fa: "کنترل لحظه‌ای موجودی دقیق هر سایز و رنگ، محاسبه بهای تمام‌شده با هزینه‌های جانبی و هشدارهای نقطه سفارش مجدد.",
        en: "Track exact stock levels per size/color, calculate true landed unit cost including shipping, and receive reorder alerts.",
      },
    },
    {
      id: "warehouse",
      iconName: "Boxes",
      title: { fa: "انبارداری و حواله شعب", en: "Multi-Warehouse Transfers" },
      subtitle: { fa: "مدیریت موجودی در انبار مرکزی و بوتیک‌ها", en: "Central Warehouse & Boutique Sync" },
      description: {
        fa: "انبارداری دقیق، صدور حواله بین انبار مرکزی و فروشگاه‌ها، انبارگردانی سریع با دستگاه بارکدخوان و موبایل.",
        en: "Manage central stock and store locations with barcode-based stock check-ins, inter-branch transfers, and mobile audits.",
      },
    },
    {
      id: "orders",
      iconName: "ShoppingCart",
      title: { fa: "سفارش‌ها و صندوق POS", en: "Sales Orders & Touch POS" },
      subtitle: { fa: "ثبت سریع فاکتور و مدیریت مرجوعی سایز", en: "Fast Order & Invoice Processing" },
      description: {
        fa: "ثبت فاکتور فروش در چند ثانیه، تسویه‌حساب با کارتخوان، مدیریت مرجوعی سایز، تعویض کالا و محاسبه تخفیف‌ها.",
        en: "Process customer orders in seconds, settle via POS terminals, manage size exchanges, and handle returns seamlessly.",
      },
    },
    {
      id: "size-guide",
      iconName: "Ruler",
      title: { fa: "راهنمای سایز داینامیک", en: "Interactive Size Specs" },
      subtitle: { fa: "جدول اندازه‌گیری سانتیمتری ضد مرجوعی", en: "Garment Measurement Specifications" },
      description: {
        fa: "ثبت جدول اندازه‌گیری دقیق سانتیمتری (دور سینه، قد آستین، عرض شانه، دور کمر) جهت کاهش مرجوعی آنلاین‌شاپ‌ها.",
        en: "Store garment measurements (chest, sleeve, waist, shoulder) to guide online buyers and slash return rates.",
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
        fa: "مدیریت تخصصی یک فروشگاه، بوتیک، مزون یا برند تولیدی پوشاک، کیف و کفش نیازمند ابزاری است که ماهیت پیچیده محصولات این صنعت را درک کند. در کسب‌وکارهای پوشاک، هر مدل لباس تنها یک کالا نیست؛ بلکه ترکیبی از ده‌ها رنگ و سایز (حروفی، عددی و کفش) است. نرم‌افزارهای عمومی حسابداری یا فایل‌های پراکنده اکسل باعث ایجاد صدها کد کالای تکراری، سردرگمی شدید در انبارداری، عدم محاسبه هزینه‌های جانبی خرید (Landed Cost) و خطاهای بزرگ مالی می‌شوند.",
        en: "Managing a clothing boutique, footwear store, or apparel manufacturing brand requires software natively designed for fashion complexity. A single garment style comes with dozens of color/size combinations. Generic accounting tools and manual spreadsheets create item duplication, inventory chaos, and hidden financial leaks.",
      },
      {
        fa: "پلتفرم یکپارچه تنخور (Tankhor) یک سیستم ERP سبک و مدرن است که دقیقاً برای حل این چالش‌ها توسعه یافته است. تنخور با ترکیب «مدیریت فروشگاهی»، «انبارداری ماتریسی رنگ و سایز» و «حسابداری مالی ۳۶۰ درجه» در یک ابزار واحد، نیاز شما به خرید چندین نرم‌افزار مجزا را کاملاً برطرف می‌کند. این سیستم با دیتابیس داخلی سریع SQLite به صورت ۱۰۰٪ آفلاین روی دسکتاپ اجرا می‌شود و در صورت نیاز، اطلاعات را با سرور اختصاصی ابری همگام‌سازی می‌کند.",
        en: "Tankhor is a lightweight, modern ERP engineered to solve these exact bottlenecks. By unifying retail operations, variant matrix inventory, and 360° financial accounting into a single platform, Tankhor eliminates the need for multiple mismatched software tools. Powered by a local SQLite engine, it operates 100% offline on desktop and seamlessly syncs to dedicated cloud servers.",
      },
      {
        fa: "با تنخور، شما علاوه بر مدیریت موجودی انبارها و صدور فاکتور فروش، دفتر معین و حسابداری اشخاص، مدیریت کامل چک‌های صیادی، محاسبه بهای تمام‌شده واقعی (با احتساب هزینه‌های حمل، گمرک و بسته‌بندی)، گزارش‌های ارزش افزوده و ماده ۱۶۹ مالیاتی را در اختیار دارید. هر زمان که بخواهید، داده‌های شما قابل خروجی گرفتن استاندارد جهت نرم‌افزارهایی مثل سپیدار و هلو است و انتقال اطلاعات از سیستم‌های قدیمی تنها در چند دقیقه انجام می‌شود.",
        en: "With Tankhor, alongside variant inventory and POS invoicing, you gain full subsidiary ledger accounts, Sayad check treasury workflows, true landed cost calculations (accounting for freight, customs, and packaging), VAT reports, and Article 169 tax statements. Standardized data exports ensure effortless migration from legacy systems like Sepidar or Holo in minutes.",
      },
    ],

    accountingIntentQA: {
      question: {
        fa: "آیا تنخور شامل سیستم حسابداری کامل تخصصی پوشاک است؟",
        en: "Does Tankhor include a complete specialized accounting system?",
      },
      answer: {
        fa: "بله! تنخور پلتفرم یکپارچه مدیریت، انبارداری و حسابداری مالی ۳۶۰ درجه برای صنعت پوشاک است. تنخور علاوه بر مدیریت موجودی و واریانت‌ها، دفتر معین، حسابداری اشخاص (خریداران، بنکداران، تامین‌کنندگان)، مدیریت صندوق‌ها، چک‌های صیادی، محاسبه بهای تمام‌شده واقعی (Landed Cost)، گزارش ارزش افزوده و ماده ۱۶۹ مالیاتی را به صورت کاملاً یکپارچه ارائه می‌دهد.",
        en: "Yes! Tankhor is an integrated 360° management, inventory, and financial accounting platform for the fashion industry. Beyond variant stock, it delivers subsidiary ledgers, accounts receivable/payable, Sayad check treasury, true landed costing, VAT statements, and Article 169 tax reporting.",
      },
    },
  },

  painPointsVsSolution: {
    title: {
      fa: "چرا استفاده از چند نرم‌افزار مجزا برای پوشاک شکست می‌خورد؟",
      en: "Why Using Multiple Disjointed Tools Fails in Fashion Retail?",
    },
    subtitle: {
      fa: "مقایسه ترکیب نرم‌افزارهای عمومی حسابداری و اکسل با پلتفرم یکپارچه تنخور",
      en: "Compare combining generic accounting tools & spreadsheets with Tankhor's unified fashion ERP",
    },
    traditional: {
      title: { fa: "استفاده از چند نرم‌افزار مجزا و اکسل", en: "Disjointed Generic Software & Spreadsheets" },
      points: [
        {
          title: { fa: "عدم پشتیبانی حسابداری عمومی از ماتریس رنگ/سایز", en: "Generic accounting lacks color/size matrices" },
          desc: { fa: "برای ۱ مدل لباس با ۵ رنگ و ۴ سایز مجبورید ۲۰ کالای مجزا تعریف کرده و حسابداری را سردرگم کنید!", en: "Forcing creators to build 20 separate product codes for a single shirt in basic accounting software!" },
        },
        {
          title: { fa: "محاسبه اشتباه سود به دلیل نادیده گرفتن هزینه‌های جانبی", en: "Distorted profit calculations ignoring landed fees" },
          desc: { fa: "عدم محاسبه هزینه‌های حمل، گمرک و خیاطی (Landed Cost) روی تک‌تک محصولات و نمایش سود غیرواقعی.", en: "Failing to allocate freight, customs, and stitching overhead causes false profit metrics." },
        },
        {
          title: { fa: "پیچیدگی مدیریت چک‌های صیادی و حساب تامین‌کنندگان", en: "Manual Sayad check & supplier account errors" },
          desc: { fa: "ثبت دستی چک‌ها در فایل اکسل و بروز خطا در سررسید و بدهکاری بنکداران و خیاطان.", en: "Manual check tracking in spreadsheets leads to overdue payments and supplier balance disputes." },
        },
        {
          title: { fa: "قطعی اینترنت و توقف صندوق فروشگاه", en: "Internet outage freezes retail POS cashiers" },
          desc: { fa: "وابستگی نرم‌افزارهای ابری عمومی به اینترنت و فلج شدن صندوق فروش در ساعات شلوغ.", en: "Pure cloud POS systems freeze when internet drops during peak shopping store hours." },
        },
      ],
    },
    tankhorSolution: {
      title: { fa: "پلتفرم یکپارچه تنخور (ERP پوشاک)", en: "Tankhor's Unified Fashion ERP Solution" },
      points: [
        {
          title: { fa: "یکپارچگی کامل ماتریس واریانت و حسابداری مالی", en: "Unified Variant Matrix & Financial Ledger" },
          desc: { fa: "تعریف یکباره محصول و ساخت اتوماتیک ماتریس رنگ/سایز همراه با ثبت خودکار اسناد حسابداری.", en: "Single-style creation auto-generates variant matrices while seamlessly posting accounting entries." },
        },
        {
          title: { fa: "موتور محاسبه بهای تمام‌شده واقعی (Landed Cost)", en: "True Landed Cost Allocation Engine" },
          desc: { fa: "تسهیم هوشمند هزینه‌های حمل، گمرک و بسته‌بندی روی قیمت تمام‌شده کالا جهت محاسبه سود واقعی.", en: "Smart allocation of overhead freight & stitching expenses directly onto unit cost for true margins." },
        },
        {
          title: { fa: "مدیریت ۳۶۰ درجه خزانه، چک صیادی و مؤدیان", en: "360° Treasury, Sayad Checks & Tax Portal" },
          desc: { fa: "کنترل کامل چک‌های صیادی، حساب‌های بانکی، گزارش فصلی ماده ۱۶۹ و اتصال به سامانه مؤدیان.", en: "Complete Sayad check status workflows, bank accounts, Article 169 reports, and Taxpayer portal integration." },
        },
        {
          title: { fa: "معماری هیبرید: ۱۰۰٪ آفلاین + سینک ابری", en: "Hybrid Architecture: 100% Offline + Cloud Sync" },
          desc: { fa: "دیتابیس سریع SQLite روی دسکتاپ بدون وابستگی به اینترنت، همراه با سینک ابری خودکار.", en: "Embedded SQLite DB for zero-latency offline checkout, automatically syncing with dedicated cloud servers." },
        },
      ],
    },
  },

  features: [
    {
      id: "matrix",
      iconName: "Grid",
      title: { fa: "ماتریس هوشمند رنگ و سایز", en: "Smart Color & Size Matrix" },
      subtitle: { fa: "مدیریت تنوع محصولات بدون سردرگمی", en: "Effortless Variant Architecture" },
      description: {
        fa: "تعریف محصول در چند ثانیه با ماتریس چندبعدی. افزودن رنگ‌ها، سایزها (حروفی S تا 5XL، عددی، بچه‌گانه و کفش) و صدور بارکد اتوماتیک برای هر واریانت.",
        en: "Create products in seconds with multi-dimensional matrix. Manage infinite colors, letter/numeric sizes, and auto-generated SKUs per variant.",
      },
      benefits: [
        { fa: "ایجاد اتوماتیک SKU و بارکد اختصاصی برای هر واریانت", en: "Auto SKU & EAN-13 Barcode generation per variant" },
        { fa: "مدیریت قیمت متفاوت برای سایزهای بزرگ یا رنگ‌های خاص", en: "Differential pricing for plus sizes or special colors" },
        { fa: "مشاهده کارتکس و موجودی لحظه‌ای کل در یک نگاه", en: "At-a-glance stock matrix view across all stores" },
      ],
      metricBadge: { fa: "ثبت ۱۰ برابر سریع‌تر", en: "10x Faster Product Entry" },
    },
    {
      id: "accounting",
      iconName: "Calculator",
      title: { fa: "حسابداری مالی و Landed Cost", en: "360° Accounting & Landed Cost" },
      subtitle: { fa: "محاسبه دقیق سود واقعی و بهای تمام‌شده", en: "True Costing & Financial Ledgers" },
      description: {
        fa: "دفتر معین اشخاص، محاسبه بهای تمام‌شده واقعی با تسهیم هزینه‌های حمل و گمرک، صورت سود و زیان لحظه‌ای و گزارش ارزش افزوده.",
        en: "Subsidiary ledger, true landed cost allocation (freight & customs), real-time P&L analytics, and automated VAT reporting.",
      },
      benefits: [
        { fa: "تسهیم هزینه‌های جانبی خرید بر روی قیمت تمام‌شده کالا", en: "Automated freight & overhead cost allocation" },
        { fa: "دفتر معین و ریزگردش حساب مشتریان و تامین‌کنندگان", en: "Detailed customer and fabric supplier ledgers" },
        { fa: "صورت سود و زیان دقیق با احتساب هزینه‌های جاری", en: "Real-time net P&L with store operating expenses" },
      ],
      metricBadge: { fa: "محاسبه سود ۱۰۰٪ واقعی", en: "100% Accurate Margins" },
    },
    {
      id: "sayad-checks",
      iconName: "Landmark",
      title: { fa: "مدیریت خزانه و چک صیادی", en: "Treasury & Sayad Check Lifecycle" },
      subtitle: { fa: "پیگیری کامل اسناد دریافت/پرداختی", en: "Complete Check Status Workflow" },
      description: {
        fa: "مدیریت صندوق‌ها، حساب‌های بانکی متعدد، ثبت کامل چرخه چک‌های صیادی (دریافتی/پرداختی، سررسید، وصول، پاس‌نشده، برگشتی) و سامانه مؤدیان.",
        en: "Manage store cashboxes, bank accounts, track Sayad check lifecycles (deposited, bounced, endorsed), and Taxpayer system reports.",
      },
      benefits: [
        { fa: "هشدار هوشمند سررسید چک‌های دریافتی و پرداختی", en: "Automated check due-date reminders" },
        { fa: "گزارش‌های فصلی ماده ۱۶۹ و اتصال به سامانه مؤدیان", en: "Article 169 seasonal tax reports & Taxpayer portal" },
        { fa: "خروجی استاندارد و همگام‌سازی با سپیدار و هلو", en: "Standardized data export for Sepidar & Holo" },
      ],
      metricBadge: { fa: "مدیریت کامل خزانه", en: "360° Treasury Control" },
    },
    {
      id: "warehouse",
      iconName: "Boxes",
      title: { fa: "انبارداری چندگانه و حواله انبار", en: "Multi-Warehouse & Stock Transfers" },
      subtitle: { fa: "کنترل کامل شعب و انبار مرکزی", en: "Total Multi-Branch Visibility" },
      description: {
        fa: "ثبت ورود و خروج کالا با بارکدخوان، صدور حواله بین انبارها، انبارگردانی سریع با گوشی هوشمند و هشدار نقطه سفارش مجدد کالا.",
        en: "Barcode-driven stock check-in/out, inter-warehouse transfers, smartphone auditing, and automated reorder threshold alerts.",
      },
      benefits: [
        { fa: "حواله مستقیم بین انبار مرکزی و شعب بوتیک", en: "Direct branch-to-warehouse transfers" },
        { fa: "هشدار هوشمند اتمام موجودی سایزهای پرفروش", en: "Low stock alert for top-selling sizes" },
        { fa: "انبارگردانی لحظه‌ای با اسکن سریع بارکد", en: "Real-time stock audit via mobile scanner" },
      ],
      metricBadge: { fa: "دقت ۹۹.۸٪ انبار", en: "99.8% Audit Accuracy" },
    },
    {
      id: "offline",
      iconName: "WifiOff",
      title: { fa: "معماری هیبرید: SQLite + ابری", en: "Hybrid SQLite DB & Cloud Sync" },
      subtitle: { fa: "پایداری کامل در قطعی اینترنت", en: "Unstoppable Offline Checkout" },
      description: {
        fa: "پایگاه داده سریع محلی SQLite روی دسکتاپ؛ در صورت قطعی اینترنت صندوق فروشگاه بدون ۱ ثانیه وقفه کار می‌کند و پس از اتصال سینک می‌شود.",
        en: "Embedded SQLite local database. Keep selling with zero latency when internet fails; all transactions auto-sync when back online.",
      },
      benefits: [
        { fa: "کارکرد ۱۰۰٪ مستقل از قطعی شبکه اینترنت", en: "100% resilient during network downtime" },
        { fa: "همگام‌سازی امن و رمزنگاری‌شده با سرور اختصاصی", en: "Encrypted cloud sync with dedicated servers" },
        { fa: "پشتیبان‌گیری اتوماتیک محلی و ابری", en: "Automated dual local/cloud backups" },
      ],
      metricBadge: { fa: "پایداری ۱۰۰٪", en: "100% Uptime Guarantee" },
    },
    {
      id: "size-engine",
      iconName: "Ruler",
      title: { fa: "راهنمای سایز داینامیک و ضد مرجوعی", en: "Interactive Size Guide Engine" },
      subtitle: { fa: "کاهش ۶۵ درصدی مرجوعی آنلاین", en: "Zero-Doubt Sizing Experience" },
      description: {
        fa: "ساخت جداول استاندارد اندازه‌گیری سانتیمتری برای کاپشن، شلوار، کفش، کیف و کت جهت درج در وب‌سایت با الگوریتم پیش‌بینی سایز دقیق.",
        en: "Build custom measurement tables for garments & shoes. Embedded size recommendation widget slashes online returns.",
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
    title: { fa: "طرح‌ها و تعرفه‌های شفاف پلتفرم تنخور", en: "Transparent & Cost-Effective Pricing Plans" },
    subtitle: {
      fa: "بدون هزینه‌های پنهان؛ نسخه دسکتاپ پایه همیشه رایگان و ۱۰۰٪ آفلاین است",
      en: "No hidden fees. Starter desktop plan is free forever with full offline capabilities.",
    },
    billingToggle: {
      monthly: { fa: "پرداخت ماهانه", en: "Monthly Billing" },
      yearly: { fa: "پرداخت سالانه (۲۰٪ تخفیف ویژه)", en: "Annual Billing (20% OFF)" },
    },
    plans: [
      {
        id: "starter",
        name: { fa: "پایه (دسکتاپ / رایگان)", en: "Starter (Offline Free)" },
        badge: { fa: "رایگان همیشگی", en: "Forever Free" },
        description: {
          fa: "مناسب برای بوتیک‌ها، تولیدی‌ها و فروشگاه‌های نوپا تک‌شعبه",
          en: "Ideal for single-store boutiques and emerging fashion brands",
        },
        monthlyPrice: { fa: 0, en: 0 },
        yearlyPriceMonthlyEquivalent: { fa: 0, en: 0 },
        currency: { fa: "تومان", en: "IRR" },
        features: [
          { fa: "کارکرد ۱۰۰٪ آفلاین با دیتابیس محلی SQLite", en: "100% Offline with local SQLite DB" },
          { fa: "ماتریس نامحدود رنگ و سایز", en: "Unlimited Color & Size Variant Matrix" },
          { fa: "دفتر معین و حسابداری اشخاص پایه", en: "Subsidiary Ledgers & Accounts" },
          { fa: "چاپ بارکد و لیبل قیمت پوشاک", en: "Thermal Barcode & Hangtag Printing" },
          { fa: "ثبت فاکتور فروش، مرجوعی و تعویض سایز", en: "Sales Invoices, Returns & Size Exchanges" },
          { fa: "۱ کاربر و ۱ انبار روی رایانه دسکتاپ", en: "1 User & 1 Store Location" },
          { fa: "پشتیبانی تیکتی آنلاین", en: "Online Ticket Support" },
        ],
        ctaText: { fa: "دانلود رایگان نسخه دسکتاپ", en: "Download Free Desktop" },
      },
      {
        id: "pro",
        name: { fa: "حرفه‌ای (ERP ابری + حسابداری)", en: "Professional (Cloud ERP)" },
        badge: { fa: "پرطرفدارترین", en: "Most Popular" },
        popular: true,
        description: {
          fa: "برای فروشگاه‌های فعال، برندها، مزون‌ها و آنلاین‌شاپ‌ها",
          en: "For active boutiques, maisons, and growing fashion brands",
        },
        monthlyPrice: { fa: 890000, en: 18 },
        yearlyPriceMonthlyEquivalent: { fa: 712000, en: 14.5 },
        currency: { fa: "تومان / ماه", en: "USD / mo" },
        highlightColor: "emerald",
        features: [
          { fa: "تمامی امکانات نسخه Starter دسکتاپ", en: "All Starter Plan features included" },
          { fa: "همگام‌سازی ابری خودکار متصل به سرور اختصاصی", en: "Automated Cloud Sync via Dedicated Server" },
          { fa: "ماژول کامل خزانه، چک صیادی و سامانه مؤدیان", en: "Full Treasury, Sayad Check & Taxpayer System" },
          { fa: "موتور محاسبه بهای تمام‌شده واقعی (Landed Cost)", en: "True Landed Cost Calculation Engine" },
          { fa: "صورت سود و زیان لحظه‌ای با کسر هزینه‌های جاری", en: "Real-time P&L Statement with Operating Expenses" },
          { fa: "انبارداری چندگانه (تا ۳ انبار و شعبه بوتیک)", en: "Multi-Warehouse Management (3 Branches)" },
          { fa: "دسترسی همزمان از وب PWA، دسکتاپ و موبایل", en: "Multi-Platform Access (Web PWA, Desktop, Mobile)" },
          { fa: "گزارش‌های فصلی مالیاتی و خروجی سپیدار/هلو", en: "Article 169 Tax Statements & Sepidar/Holo Export" },
          { fa: "پشتیبانی تلفنی و واتس‌اپ اختصاصی", en: "Dedicated Phone & WhatsApp Support" },
        ],
        ctaText: { fa: "تست رایگان ۱۴ روزه", en: "Start 14-Day Free Trial" },
      },
      {
        id: "enterprise",
        name: { fa: "سازمانی (Enterprise)", en: "Enterprise Custom" },
        badge: { fa: "ویژه زنجیره فروشگاه‌ها", en: "For Big Brands" },
        description: {
          fa: "ویژه فروشگاه‌های زنجیره‌ای، تولیدی‌های بزرگ و برندهای پوشاک",
          en: "For retail chains, large factories, and national fashion brands",
        },
        monthlyPrice: { fa: 0, en: 0 },
        yearlyPriceMonthlyEquivalent: { fa: 0, en: 0 },
        currency: { fa: "", en: "" },
        isCustomPrice: true,
        customPriceText: { fa: "تماس بگیرید", en: "Contact Sales" },
        contactPhone: "02155416274",
        features: [
          { fa: "تمامی امکانات پلن حرفه‌ای ابری", en: "All Professional Plan features" },
          { fa: "کاربران، انبارها و شعب نامحدود", en: "Unlimited Users, Branches & Warehouses" },
          { fa: "اتصال اختصاصی API به نرم‌افزارهای مالی جانبی", en: "Custom API Integrations (Sepidar, Rahkaran, etc.)" },
          { fa: "نصب روی سرور اختصاصی مشتری (On-Premise)", en: "On-Premise Private Server deployment option" },
          { fa: "پشتیبانی ۲۴/۷ و آموزش حضوری پرسنل", en: "24/7 Priority SLA & On-site Staff Training" },
          { fa: "مدیر حساب اختصاصی و اختصاصی‌سازی ماژول‌ها", en: "Dedicated Account Manager & Module Customization" },
        ],
        ctaText: { fa: "تماس با کارشناسان (۰۲۱-۵۵۴۱۶۲۷۴)", en: "Call Sales (021-55416274)" },
      },
    ] as PricingPlan[],
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
        fa: "چگونه اطلاعات و موجودی‌های خود را از نرم‌افزارهای قدیمی (سپیدار، هلو، اکسل) به تنخور منتقل کنیم؟",
        en: "How do we migrate data from legacy software (Sepidar, Holo, Excel) to Tankhor?",
      },
      answer: {
        fa: "انتقال اطلاعات بسیار ساده و سریع است. تنخور دارای ابزار ورودی فایل اکسل (Excel Import) اختصاصی برای محصولات، رنگ و سایز، طرف‌حساب‌ها و موجودی اول‌دوره است. تیم پشتیبانی تنخور نیز تمام فرایند انتقال داده‌های نرم‌افزار قدیمی شما (سپیدار، هلو، شایگان و...) به تنخور را به صورت رایگان انجام می‌دهد.",
        en: "Data migration is seamless. Tankhor includes a specialized Excel Importer for styles, variant matrices, customer ledgers, and opening stock. Our support team assists with full automated migration from Sepidar, Holo, or Excel files free of charge.",
      },
      category: { fa: "انتقال داده‌ها", en: "Data Migration" },
    },
    {
      id: "faq-2",
      question: {
        fa: "کارکرد ۱۰۰٪ آفلاین تنخور با دیتابیس SQLite چگونه امنیت و سرعت را تضمین می‌کند؟",
        en: "How does 100% offline operation with SQLite guarantee speed & data security?",
      },
      answer: {
        fa: "تنخور روی رایانه شما از پایگاه داده قدرتمند و فوق‌العاده سریع SQLite استفاده می‌کند. تمام داده‌های شما به صورت محلی و رمزنگاری‌شده روی سیستم خودتان ذخیره می‌شوند، بنابراین هیچ‌گونه کندی یا وابستگی به اینترنت وجود ندارد و در صورت قطعی شبکه، صندوق فروشگاه بدون ۱ ثانیه توقف به کار ادامه می‌دهد.",
        en: "Tankhor utilizes an embedded, high-performance SQLite database on your desktop. All data is stored locally and encrypted on your device. Zero internet reliance guarantees zero latency and 100% operational uptime during network outages.",
      },
      category: { fa: "آفلاین و امنیت", en: "Offline & SQLite" },
    },
    {
      id: "faq-3",
      question: {
        fa: "ماژول حسابداری و چک صیادی تنخور چه امکاناتی ارائه می‌دهد؟",
        en: "What capabilities does Tankhor's accounting & Sayad check module provide?",
      },
      answer: {
        fa: "ماژول حسابداری تنخور شامل دفتر معین و حسابداری اشخاص (خریداران، بنکداران، تامین‌کنندگان)، مدیریت صندوق‌ها و حساب‌های بانکی، مدیریت کامل چرخه چک‌های صیادی (وصول، پاس‌نشده، برگشتی، خرج‌شده) و هشدار سررسید اسناد مالی است.",
        en: "The accounting module delivers subsidiary ledgers, accounts receivable/payable, multi-cashbox treasury, complete Sayad check status tracking (deposited, cashed, bounced, endorsed), and automated due-date reminders.",
      },
      category: { fa: "حسابداری و چک", en: "Accounting & Checks" },
    },
    {
      id: "faq-4",
      question: {
        fa: "محاسبه بهای تمام‌شده واقعی (Landed Cost) در تنخور چگونه کار می‌کند؟",
        en: "How does true Landed Cost calculation work in Tankhor?",
      },
      answer: {
        fa: "هنگام خرید یا تولید پوشاک، علاوه بر فاکتور اصلی، هزینه‌های جانبی مانند حمل‌ونقل، گمرک، خیاطی و بسته‌بندی وجود دارد. تنخور این هزینه‌ها را ثبت کرده و به صورت هوشمند روی تک‌تک محصولات و واریانت‌ها تسهیم می‌کند تا قیمت تمام‌شده واقعی و سود خالص دقیق هر کالا مشخص شود.",
        en: "When purchasing or manufacturing garments, freight, customs, stitching, and packaging fees occur. Tankhor attributes and distributes these overhead expenses directly onto each variant SKU, giving you true landed unit cost and exact net profit metrics.",
      },
      category: { fa: "بهای تمام‌شده", en: "Landed Cost" },
    },
    {
      id: "faq-5",
      question: {
        fa: "آیا تنخور قابلیت گزارش‌های مالیاتی و اتصال به سامانه مؤدیان را دارد؟",
        en: "Does Tankhor generate tax reports and connect to the Taxpayer portal?",
      },
      answer: {
        fa: "بله، تنخور امکان صدور الکترونیکی فاکتورها برای سامانه مؤدیان، تولید گزارش ارزش افزوده خرید و فروش، گزارش‌های فصلی ماده ۱۶۹ و خروجی استاندارد اکسل جهت سیستم‌های مالی مثل سپیدار و هلو را داراست.",
        en: "Yes, Tankhor generates electronic invoices for the Taxpayer System, computes VAT purchase/sales statements, outputs Article 169 tax reports, and exports clean data compatible with Sepidar and Holo.",
      },
      category: { fa: "مالیات و مؤدیان", en: "Tax Compliance" },
    },
    {
      id: "faq-6",
      question: {
        fa: "تفاوت تنخور با نرم‌افزارهای عمومی حسابداری (مثل سپیدار یا هلو) چیست؟",
        en: "How does Tankhor differ from generic accounting tools like Sepidar or Holo?",
      },
      answer: {
        fa: "نرم‌افزارهای عمومی حسابداری ساختار ماتریسی رنگ و سایز، راهنمای اندازه‌گیری و چاپ اتیکت پوشاک را ندارند و انبارداری لباس را به‌شدت پیچیده می‌کنند. تنخور یک ERP یکپارچه و تخصصی پوشاک است که مدیریت فروشگاه، انبارداری ماتریسی و حسابداری ۳۶۰ درجه را در یک ابزار یکپارچه فراهم کرده است.",
        en: "Generic accounting tools lack garment-native variant matrix grids, sizing specs, and clothing tag printing. Tankhor is a specialized fashion ERP uniting store operations, matrix inventory, and 360° financial accounting into a single system.",
      },
      category: { fa: "مقایسه ERP", en: "Comparison" },
    },
    {
      id: "faq-7",
      question: {
        fa: "آیا نسخه دسکتاپ تنخور (Tankhor Free) واقعاً رایگان است؟",
        en: "Is the Tankhor Free desktop app truly 100% free?",
      },
      answer: {
        fa: "بله! نسخه دسکتاپ تنخور (Tankhor Free) کاملاً رایگان است و هیچ محدودیت زمانی (تست یا Trial) ندارد. شما می‌توانید آن را روی سیستم خود نصب کرده و مدیریت محصولات، انبارداری ماتریسی، دفتر معین و فاکتورهای فروشگاه خود را انجام دهید.",
        en: "Yes! Tankhor Free Desktop is 100% free with no time limits or trial expirations. You can install and run it locally for products, variant matrix inventory, ledgers, and sales invoices.",
      },
      category: { fa: "نسخه رایگان", en: "Free Version" },
    },
    {
      id: "faq-8",
      question: {
        fa: "ماتریس رنگ و سایز تنخور چگونه کار می‌کند؟",
        en: "How does Tankhor's color & size matrix work?",
      },
      answer: {
        fa: "شما مدل لباس را یک‌بار تعریف می‌کنید و سیستم به صورت خودکار ماتریس تنوع رنگ‌ها و سایزها (حروفی S تا 5XL، عددی، کفش) را همراه با SKU و بارکد اختصاصی برای هر واریانت ایجاد می‌کند، بدون اینکه ده‌ها کد کالای تکراری و سردرگم‌کننده بسازد.",
        en: "Instead of creating separate items for every combination, you define the style once. Tankhor auto-generates a multi-dimensional matrix grid with distinct SKUs and barcodes for every single size and color.",
      },
      category: { fa: "رنگ و سایز", en: "Variant Matrix" },
    },
    {
      id: "faq-9",
      question: {
        fa: "چگونه داده‌های خود را از نسخه رایگان به Tankhor Pro ابری منتقل کنیم؟",
        en: "How do we upgrade local data from Free to Tankhor Pro Cloud?",
      },
      answer: {
        fa: "انتقال داده‌ها تنها با یک کلیک انجام می‌شود. نرم‌افزار دسکتاپ تنخور خروجی رمزنگاری‌شده ابری تولید کرده و تمامی محصولات، واریانت‌ها، حساب‌ها و تراکنش‌های شما را بدون تغییر به حساب ابری منتقل و همگام می‌سازد.",
        en: "Migration takes a single click. Tankhor Desktop generates an encrypted export file that populates your new cloud account seamlessly without data loss.",
      },
      category: { fa: "ارتقا به ابری", en: "Upgrade Path" },
    },
    {
      id: "faq-10",
      question: {
        fa: "تنخور برای چه کسب‌وکارهایی مناسب است؟",
        en: "Which fashion businesses benefit most from Tankhor?",
      },
      answer: {
        fa: "تنخور برای تمامی فعالان صنعت پوشاک، کیف، کفش و اکسسوری طراحی شده است: بوتیک‌های لباس زنانه و مردانه، فروشگاه‌های زنجیره‌ای، مزون‌ها، تولیدی‌های پوشاک، فروشگاه‌های کیف و کفش، و آنلاین‌شاپ‌ها.",
        en: "Tankhor is purpose-built for all fashion apparel stakeholders: boutiques, retail chains, ateliers, menswear/womenswear stores, shoe and bag shops, clothing factories, and online fashion brands.",
      },
      category: { fa: "مخاطبان", en: "Target Audience" },
    },
  ] as FAQItem[],
};
