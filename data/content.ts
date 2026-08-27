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
      fa: "تنخور | پلتفرم تخصصی مدیریت محصول و انبارداری پوشاک، کیف و کفش",
      en: "TANKHOR | Next-Gen Apparel Product & Inventory Management Platform",
    },
    description: {
      fa: "پلتفرم تخصصی تنخور با قابلیت کارکرد کاملاً آفلاین، همگام‌سازی ابری، ماتریس رنگ و سایز و راهنمای سایز هوشمند؛ ویژه تولیدی‌ها، مزون‌ها و آنلاین‌شاپ‌های پوشاک.",
      en: "Tankhor: Offline-capable B2B SaaS platform with smart size & color matrix, interactive size guide engine, multi-warehouse inventory for apparel & footwear.",
    },
    keywords: [
      "نرم‌افزار مدیریت موجودی و انبارداری پوشاک",
      "نرم‌افزار راهنمای سایز هوشمند و اختصاصی لباس و کفش",
      "نرم‌افزار حسابداری و مدیریت فروشگاه پوشاک و مزون",
      "سیستم بارکدخوان و مدیریت تنوع رنگ و سایز (ماتریس واریانت)",
      "نرم‌افزار آفلاین و ابری مدیریت بوتیک و فروشگاه مد و فشن",
      "Apparel Inventory Management Software",
      "Clothing Size Guide Software",
      "Fashion ERP Matrix",
    ],
  },

  navLinks: [
    { id: "features", label: { fa: "قابلیت‌ها", en: "Features" }, href: "#features" },
    { id: "size-guide", label: { fa: "راهنمای سایز", en: "Size Guide" }, href: "#size-guide" },
    { id: "inventory-matrix", label: { fa: "ماتریس واریانت", en: "Variant Matrix" }, href: "#inventory-matrix" },
    { id: "pricing", label: { fa: "تعرفه‌ها", en: "Pricing" }, href: "#pricing" },
    { id: "testimonials", label: { fa: "نظرات", en: "Testimonials" }, href: "#testimonials" },
    { id: "faq", label: { fa: "سوالات متداول", en: "FAQ" }, href: "#faq" },
  ] as NavigationLink[],

  hero: {
    badge: {
      fa: "🚀 اولین پلتفرم تخصصی مدیریت محصول و انبارداری صنعت مد و پوشاک ایران",
      en: "🚀 Iran's First Specialized Product & Inventory ERP for Fashion Industry",
    },
    h1: {
      fa: "مدیریت هوشمند محصولات، ماتریس رنگ و سایز، و انبارداری تخصصی پوشاک",
      en: "Smart Product Management, Color-Size Matrix & Specialized Apparel Inventory",
    },
    subheadline: {
      fa: "پلتفرم دوزبانه تنخور با قابلیت کارکرد کاملاً آفلاین (رایگان) و همگام‌سازی ابری؛ ویژه تولیدی‌ها، مزون‌ها، بوتیک‌ها و فروشگاه‌های آنلاین لباس، کیف و کفش.",
      en: "Dual-language platform with zero-latency offline mode and cloud backup; purpose-built for factories, maisons, boutiques, and fashion e-commerce.",
    },
    ctaPrimary: {
      fa: "شروع رایگان بدون نیاز به کارت بانکی",
      en: "Start Free - No Credit Card Required",
    },
    ctaSecondary: {
      fa: "مشاهده دموی زنده و تعاملی",
      en: "Explore Interactive Live Demo",
    },
    quickStats: [
      { value: "۱۰۰,۰۰۰+", label: { fa: "محصول ثبت شده", en: "Products Managed" } },
      { value: "۶۵٪", label: { fa: "کاهش مرجوعی سایز", en: "Return Rate Reduction" } },
      { value: "۱۰۰٪", label: { fa: "افلاین و بدون اینترنت", en: "Full Offline Capability" } },
      { value: "۹۹.۹٪", label: { fa: "آپتایم ابری مطمئن", en: "Cloud Service Uptime" } },
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

  painPointsVsSolution: {
    title: {
      fa: "چرا نرم‌افزارهای عمومی حسابداری برای پوشاک شکست می‌خورند؟",
      en: "Why Generic Accounting Software Fails in Fashion & Apparel?",
    },
    subtitle: {
      fa: "مقایسه روش‌های سنتی و نرم‌افزارهای عمومی با راهکار یکپارچه و تخصصی تنخور",
      en: "Compare traditional spreadsheets & standard accounting tools with Tankhor's specialized fashion architecture",
    },
    traditional: {
      title: { fa: "روش‌های سنتی و نرم‌افزارهای عمومی", en: "Traditional Methods & Generic Tools" },
      points: [
        {
          title: { fa: "ثبت جداگانه هر رنگ و سایز", en: "Separate creation for each color & size" },
          desc: { fa: "برای یک تیشرت با ۵ رنگ و ۴ سایز باید ۲۰ کالا با کدهای متفاوت تعریف کنید!", en: "Creating 20 separate item codes for a single t-shirt with 5 colors & 4 sizes!" },
        },
        {
          title: { fa: "نرخ مرجوعی ۳۵٪ به دلیل سایز اشتباه", en: "35% online return rate due to size confusion" },
          desc: { fa: "عدم وجود راهنمای سایز دقیق و اندازه‌گیری استانداردهای لباس", en: "Lack of interactive garment size specs leads to customer sizing errors." },
        },
        {
          title: { fa: "قطعی اینترنت = توقف فروشگاه", en: "Internet outage halts physical store sales" },
          desc: { fa: "وابستگی کامل نرم‌افزارهای ابری به اینترنت و کندی صندوق فروش", en: "Pure cloud systems freeze when internet drops during peak shopping hours." },
        },
        {
          title: { fa: "عدم پشتیبانی از حواله انبار شعب", en: "No multi-warehouse branch transfers" },
          desc: { fa: "سردرگمی موجودی انبار مرکزی و فروشگاه آنلاین هنگام ترانسفر کالا", en: "Stock mismatches between central warehouse and retail branches." },
        },
      ],
    },
    tankhorSolution: {
      title: { fa: "راهکار یکپارچه و تخصصی تنخور", en: "Tankhor's Specialized Fashion Solution" },
      points: [
        {
          title: { fa: "ماتریس یکبار تعریف (Matrix Grid)", en: "Single-Entry Color & Size Matrix" },
          desc: { fa: "تعریف یکباره محصول اصلی و ساخت خودکار جدول ماتریسی تمام سایزها و رنگ‌ها با بارکد اختصاصی.", en: "Define the main style once; Tankhor instantly auto-generates matrix variants with distinct SKUs." },
        },
        {
          title: { fa: "موتور راهنمای سایز هوشمند (کاهش ۶۵٪ مرجوعی)", en: "Dynamic Size Engine (65% return reduction)" },
          desc: { fa: "ارائه جدول اندازه‌گیری دقیق بر اساس سانتیمتر و توصیه سایز پیشنهادی به مشتری آنلاین.", en: "Interactive size recommendation based on chest, shoulder, waist, or foot length in centimeters." },
        },
        {
          title: { fa: "معماری هیبرید: ۱۰۰٪ آفلاین + سینک ابری", en: "Hybrid Architecture: 100% Offline + Cloud Sync" },
          desc: { fa: "صندوق فروش و انبارداری بدون حتی ۱ ثانیه قطعی کار می‌کنند و در وصل مجدد سینک می‌شوند.", en: "Uninterrupted offline checkout with automatic secure cloud synchronization upon connection." },
        },
        {
          title: { fa: "انبارداری چندگانه و حواله‌جات هوشمند", en: "Multi-Store Warehouse & Smart Transfers" },
          desc: { fa: "مدیریت لحظه‌ای کارتکس کالا، جابه‌جایی بین شعب و رزرو موجودی فروشگاه آنلاین.", en: "Real-time stock movement tracking, branch transfers, and automated online re-order triggers." },
        },
      ],
    },
  },

  features: [
    {
      id: "matrix",
      iconName: "Grid",
      title: { fa: "ماتریس هوشمند تنوع محصول", en: "Smart Color & Size Matrix" },
      subtitle: { fa: "مدیریت بی‌دردسر تنوع رنگ و سایز", en: "Effortless Variant Architecture" },
      description: {
        fa: "تعریف محصول فقط در چند ثانیه با ماتریس چندبعدی. افزودن رنگ‌ها، سایزها (S تا 5XL، سایزهای عددی و اروپایی/آمریکایی) و صدور بارکد اتوماتیک برای هر واریانت.",
        en: "Create products in seconds with multi-dimensional matrix. Manage infinite colors, letter/numeric sizes, and auto-generated SKUs per variant.",
      },
      benefits: [
        { fa: "ایجاد اتوماتیک SKU و بارکد EAN-13", en: "Auto SKU & EAN-13 Barcode generation" },
        { fa: "مدیریت قیمت متفاوت برای سایزهای بزرگ", en: "Differential pricing for plus sizes" },
        { fa: "مشاهده لحظه‌ای موجودی کل در یک نگاه", en: "At-a-glance stock matrix view" },
      ],
      metricBadge: { fa: "سرعت ثبت ۱۰ برابر", en: "10x Faster Product Entry" },
    },
    {
      id: "size-engine",
      iconName: "Ruler",
      title: { fa: "راهنمای سایز داینامیک و ضد مرجوعی", en: "Interactive Size Guide Engine" },
      subtitle: { fa: "تجربه خرید آنلاین بدون شک و تردید", en: "Zero-Doubt Sizing Experience" },
      description: {
        fa: "ساخت جداول استاندارد اندازه‌گیری برای انواع کاپشن، شلوار، کفش، کیف و کت. قابلیت قرارگیری در وب‌سایت فروشگاهی با الگوریتم پیش‌بینی سایز دقیق مشتری.",
        en: "Build custom measurement tables for jackets, trousers, shoes, bags & suits. Embedded size recommendation algorithm reduces sizing return rates.",
      },
      benefits: [
        { fa: "کاهش ۶۵ درصدی هزینه‌های مرجوعی و تعویض", en: "65% reduction in size exchange costs" },
        { fa: "توضیحات بصری نحوه اندازه‌گیری با متر", en: "Visual measurement guide for buyers" },
        { fa: "خروجی لینک و کد Embed برای ووکامرس/شاپیفای", en: "WooCommerce/Shopify embed widget" },
      ],
      metricBadge: { fa: "کاهش ۶۵٪ مرجوعی", en: "65% Less Returns" },
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
        { fa: "حواله مستقیم بین انبار مرکزی و شعب", en: "Direct branch-to-warehouse transfers" },
        { fa: "هشدار هوشمند اتمام موجودی سایزهای پرفروش", en: "Low stock alert for top-selling sizes" },
        { fa: "انبارگردانی لحظه‌ای با اسکن سریع", en: "Real-time stock audit via mobile scanner" },
      ],
      metricBadge: { fa: "دقت ۹۹.۸٪ انبار", en: "99.8% Audit Accuracy" },
    },
    {
      id: "offline",
      iconName: "WifiOff",
      title: { fa: "معماری هیبرید: آفلاین + ابری", en: "Hybrid Architecture: Offline + Cloud" },
      subtitle: { fa: "بدون قطعی در شلوغ‌ترین ساعات فروش", en: "Unstoppable Offline Checkout" },
      description: {
        fa: "پایگاه داده محلی سریع روی دسکتاپ و تبلت؛ در صورت قطعی اینترنت فروشگاه شما به کار ادامه می‌دهد و پس از اتصال، داده‌ها با سرور ابری همگام می‌شوند.",
        en: "Fast local storage engine on desktop & tablets. Keep selling when internet fails; all transactions seamlessly auto-sync when online.",
      },
      benefits: [
        { fa: "کارکرد ۱۰۰٪ مستقل از قطعی شبکه", en: "100% resilient during network downtime" },
        { fa: "همگام‌سازی امن و خودکار با سرور ابری", en: "End-to-end encrypted cloud sync" },
        { fa: "پشتیبان‌گیری اتوماتیک محلی و ابری", en: "Automated dual local/cloud backup" },
      ],
      metricBadge: { fa: "پایداری ۱۰۰٪", en: "100% Uptime Guarantee" },
    },
    {
      id: "rbac",
      iconName: "Users",
      title: { fa: "مدیریت چند سازمانی و سطح دسترسی", en: "Multi-Tenant & Role-Based Access" },
      subtitle: { fa: "امنیت داده‌ها و مدیریت دقیق پرسنل", en: "Enterprise Staff Security" },
      description: {
        fa: "تعریف نقش‌های کاربردی: صندوق‌دار، مدیر انبار، حسابدار، مدیر شعبه و فروشنده. محدودسازی دیدن قیمت‌های خرید و سود برای پرسنل غیرمجاز.",
        en: "Pre-configured roles for cashiers, warehouse managers, accountants, and store managers. Restrict access to purchase costs & margins.",
      },
      benefits: [
        { fa: "تعریف لاگ کامل تغییرات و فعالیت کاربران", en: "Complete audit logs of every operation" },
        { fa: "پشتیبانی از چند شعبه و چند برند", en: "Multi-store and multi-brand support" },
        { fa: "صندوق فروش با رابط کاربری لمسی سریع", en: "Touchscreen-optimized cashier POS" },
      ],
      metricBadge: { fa: "امنیت بانکی", en: "Bank-Grade RBAC" },
    },
    {
      id: "barcode",
      iconName: "QrCode",
      title: { fa: "چاپ بارکد و لیبل قیمت پوشاک", en: "Clothing Barcode & Label Printer" },
      subtitle: { fa: "طراحی تخصصی تگ لباس و کفش", en: "Custom Hangtag & Sticker Printing" },
      description: {
        fa: "طراحی و چاپ سریع لیبل‌های دوتایی و سه‌تایی، اتیکت قیمت، بارکد، مشخصات پارچه، شستشو و سایز روی انواع لیبل‌پرینتر حرارتی و حرارتی مستقیم.",
        en: "Design and print dual/triple stickers, price tags, washing instructions, and barcodes on thermal label printers.",
      },
      benefits: [
        { fa: "سازگار با تمامی لیبل‌پرینترهای بازار (Xprinter, Bixolon, TSC)", en: "Compatible with all thermal printers" },
        { fa: "پشتیبانی از قالب‌های استاندارد تگ آویز و چسبی", en: "Preset hangtag and adhesive templates" },
        { fa: "چاپ دسته‌ای بر اساس سفارش خرید", en: "Batch print directly from PO orders" },
      ],
      metricBadge: { fa: "چاپ ۱۰۰ لیبل/دقیقه", en: "Fast Thermal Printing" },
    },
  ] as FeatureModule[],

  pricing: {
    title: { fa: "طرح‌ها و تعرفه‌های شفاف و مقرون‌به‌صرفه", en: "Transparent & Cost-Effective Pricing Plans" },
    subtitle: {
      fa: "بدون هزینه‌های پنهان؛ پلن پایه همیشه رایگان و آفلاین است",
      en: "No hidden fees. Basic plan is free forever with full offline capabilities.",
    },
    billingToggle: {
      monthly: { fa: "پرداخت ماهانه", en: "Monthly Billing" },
      yearly: { fa: "پرداخت سالانه (۲۰٪ تخفیف ویژه)", en: "Annual Billing (20% OFF)" },
    },
    plans: [
      {
        id: "starter",
        name: { fa: "پایه (آفلاین / رایگان)", en: "Starter (Offline Free)" },
        badge: { fa: "رایگان همیشگی", en: "Forever Free" },
        description: {
          fa: "مناسب برای بوتیک‌ها، تولیدی‌ها و کسب‌وکارهای نوپا تک‌شعبه",
          en: "Ideal for single-store boutiques and emerging fashion brands",
        },
        monthlyPrice: { fa: 0, en: 0 },
        yearlyPriceMonthlyEquivalent: { fa: 0, en: 0 },
        currency: { fa: "تومان", en: "IRR" },
        features: [
          { fa: "کارکرد ۱۰۰٪ آفلاین روی دسکتاپ و تبلت", en: "100% Offline operation on Desktop/Tablet" },
          { fa: "ماتریس نامحدود رنگ و سایز", en: "Unlimited Color & Size Matrix" },
          { fa: "ثبت تا ۵۰۰ محصول و واریانت", en: "Up to 500 products & variants" },
          { fa: "چاپ بارکد و لیبل قیمت", en: "Thermal Barcode & Tag Printing" },
          { fa: "راهنمای سایز پایه", en: "Basic Size Guide Builder" },
          { fa: "۱ کاربر و ۱ انبار", en: "1 User & 1 Warehouse" },
          { fa: "پشتیبانی آنلاین تیکتی", en: "Online Ticket Support" },
        ],
        ctaText: { fa: "دانلود و شروع رایگان", en: "Download & Start Free" },
      },
      {
        id: "pro",
        name: { fa: "حرفه‌ای (ابری + آفلاین)", en: "Professional (Cloud + Offline)" },
        badge: { fa: "پرطرفدارترین", en: "Most Popular" },
        popular: true,
        description: {
          fa: "برای فروشگاه‌های فعال، مزون‌ها و آنلاین‌شاپ‌ها با رشد بالا",
          en: "For active boutiques, maisons, and growing fashion e-commerce",
        },
        monthlyPrice: { fa: 890000, en: 18 },
        yearlyPriceMonthlyEquivalent: { fa: 712000, en: 14.5 },
        currency: { fa: "تومان / ماه", en: "USD / mo" },
        highlightColor: "emerald",
        features: [
          { fa: "تمامی امکانات پلن پایه", en: "All Starter Plan features included" },
          { fa: "همگام‌سازی ابری خودکار و پشتیبان روزانه", en: "Automated Cloud Sync & Daily Backups" },
          { fa: "محصولات و واریانت‌های نامحدود", en: "Unlimited Products & Variants" },
          { fa: "تا ۵ کاربر همزمان با سطح دسترسی (RBAC)", en: "Up to 5 Concurrent Users with RBAC" },
          { fa: "انبارداری چندگانه (تا ۳ انبار و شعبه)", en: "Multi-Warehouse Management (3 Branches)" },
          { fa: "موتور راهنمای سایز هوشمند با Embed ووکامرس", en: "Dynamic Size Guide Engine with WooCommerce Plugin" },
          { fa: "گزارش‌های پیشرفته فروش و سودآوری", en: "Advanced Sales & Profit Margin Analytics" },
          { fa: "پشتیبانی تلفنی و واتس‌اپ اختصاصی", en: "Dedicated Phone & WhatsApp Support" },
        ],
        ctaText: { fa: "تست رایگان ۱۴ روزه", en: "Start 14-Day Free Trial" },
      },
      {
        id: "enterprise",
        name: { fa: "سازمانی (Enterprise)", en: "Enterprise Custom" },
        badge: { fa: "ویژه برندهای بزرگ", en: "For Big Brands" },
        description: {
          fa: "ویژه زنجیره فروشگاه‌ها، تولیدی‌های بزرگ و برندهای ملی پوشاک",
          en: "For retail chains, large factories, and national fashion brands",
        },
        monthlyPrice: { fa: 0, en: 0 },
        yearlyPriceMonthlyEquivalent: { fa: 0, en: 0 },
        currency: { fa: "", en: "" },
        isCustomPrice: true,
        customPriceText: { fa: "تماس بگیرید", en: "Contact Sales" },
        contactPhone: "02155416274",
        features: [
          { fa: "تمامی امکانات پلن حرفه‌ای", en: "All Professional Plan features" },
          { fa: "کاربران و شعب نامحدود", en: "Unlimited Users, Branches & Warehouses" },
          { fa: "اتصال اختصاصی API به سیستم‌های ERP و حسابداری", en: "Custom API Integrations (Sepidar, Rahkaran, etc.)" },
          { fa: "نصب روی سرور اختصاصی مشتری (On-Premise)", en: "On-Premise Private Server deployment option" },
          { fa: "پشتیبانی ۲۴/۷ و آموزش حضوری پرسنل", en: "24/7 Priority SLA & On-site Staff Training" },
          { fa: "مدیر حساب اختصاصی و اختصاصی‌سازی الگوریتم سایز", en: "Dedicated Account Manager & Size Algo Customization" },
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
        fa: "با داشتن ۶ شعبه و ۱۰۰۰ واریانت کت و شلوار، قبلاً انبارگردانی ما ۳ روز طول می‌کشید. با تنخور و اسکنر بارکد ماتریسی، کل انبارگردانی شعب در ۴ ساعت با صفر درصد خطا انجام می‌شود!",
        en: "With 6 retail branches and over 1,000 suit variants, inventory audit used to take 3 full days. With Tankhor's matrix barcodes, audit completes in 4 hours with zero error!",
      },
      rating: 5,
      businessType: { fa: "تولیدی و فروشگاه زنجیره‌ای", en: "Retail Chain & Factory" },
      impactMetric: { fa: "کاهش ۹۰٪ زمان انبارگردانی", en: "90% Faster Audit" },
    },
    {
      id: "2",
      name: { fa: "سارا خسروی", en: "Sara Khosravi" },
      role: { fa: "بنیان‌گذار و طراح", en: "Founder & Lead Designer" },
      brand: { fa: "مزون آنلاین لورا", en: "Lorra Online Maison" },
      avatar: "https://picsum.photos/seed/woman1/150/150",
      comment: {
        fa: "بزرگترین معضل ما مرجوعی ۳۰ درصدی مانتو و لباس‌های مجلسی به خاطر اندازه نبودن بود. راهنمای سایز تعاملی تنخور رو روی سایتمون گذاشتیم و مرجوعی‌ها به زیر ۷ درصد رسید!",
        en: "Our biggest headache was a 30% return rate on online dress orders due to sizing. Since embedding Tankhor's interactive size guide engine, returns plummeted to under 7%!",
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
        fa: "قابلیت آفلاین بودن تنخور نجات‌دهنده ماست. قطع شدن اینترنت در جمعه‌های شلوغ پاساژ همیشه فروش ما رو فلج می‌کرد، اما حالا صندوق ما بدون نیاز به اینترنت سریع کار می‌کنه.",
        en: "Tankhor's offline architecture is a lifesaver. Internet drops during peak Friday shopping hours used to freeze our checkout. Now our cashiers sell seamlessly without internet!",
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
        fa: "آیا نرم‌افزار تنخور بدون اتصال به اینترنت هم کار می‌کند؟",
        en: "Does Tankhor software work without an internet connection?",
      },
      answer: {
        fa: "بله، ۱۰۰٪! تنخور با معماری هیبریدی طراحی شده است. تمام عملیات ثبت فاکتور، اسکن بارکد، اصلاح موجودی و انبارداری به صورت محلی روی رایانه یا تبلت شما انجام می‌شود و هیچ نیازی به اینترنت ندارد. به محض وصل شدن اینترنت، اطلاعات به صورت امن با ابر همگام‌سازی می‌شوند.",
        en: "Yes, 100%! Tankhor features a hybrid architecture. All sales transactions, barcode scanning, stock adjustments, and print jobs execute locally on your device with zero internet dependency. Once connected, data encrypts and syncs automatically with the cloud.",
      },
      category: { fa: "امکانات و آفلاین", en: "Features & Offline" },
    },
    {
      id: "faq-2",
      question: {
        fa: "تفاوت تنخور با نرم‌افزارهای حسابداری عمومی (مثل سپیدار یا هلو) چیست؟",
        en: "How does Tankhor differ from generic accounting software?",
      },
      answer: {
        fa: "نرم‌افزارهای عمومی حسابداری مفهوم «ماتریس رنگ و سایز» را نمی‌شناسند و شما مجبورید برای ۱ مدل لباس با ۵ رنگ و ۴ سایز، ۲۰ کالای مجزا تعریف کنید که انبار را آشفته می‌کند. تنخور تخصصی پوشاک است: با یک کلیک ماتریس ۲۰ تایی می‌سازد، جدول سایز اختصاصی تولید می‌کند و چاپ لیبل پوشاک دارد.",
        en: "Generic software forces you to create separate item codes for every single color and size combination. Tankhor is tailor-made for apparel: 1-click matrix creation, built-in size guide engine, thermal hangtag printing, and variant barcode mapping.",
      },
      category: { fa: "مقایسه و برتری", en: "Comparison" },
    },
    {
      id: "faq-3",
      question: {
        fa: "چگونه راهنمای سایز تعاملی تنخور باعث کاهش مرجوعی فروشگاه آنلاین می‌شود؟",
        en: "How does the interactive size guide engine reduce online return rates?",
      },
      answer: {
        fa: "تنخور به شما اجازه می‌دهد جداول دقیق اندازه‌گیری (دور سینه، قد آستین، عرض شانه، دور کمر، طول کفی کفش) را ثبت کنید. خریدار با وارد کردن ابعاد بدن خود، دقیق‌ترین سایز پیشنهادی را دریافت می‌کند. این کار تا ۶۵٪ از اشتباهات انتخاب سایز توسط مشتری جلوگیری می‌نماید.",
        en: "Tankhor lets you build precise garment sizing metrics (chest, shoulder, sleeve, waist, insole). Customers enter their measurements or fit preferences to get calculated size recommendations, cutting fit-related returns by up to 65%.",
      },
      category: { fa: "راهنمای سایز", en: "Size Guide Engine" },
    },
    {
      id: "faq-4",
      question: {
        fa: "آیا امکان اتصال تنخور به سایت اینترنتی (ووکامرس / شاپیفای) وجود دارد؟",
        en: "Can Tankhor integrate with e-commerce stores like WooCommerce or Shopify?",
      },
      answer: {
        fa: "بله، در پلن‌های حرفه‌ای و سازمانی افزونه رسمی تنخور برای ووکامرس ارائه می‌شود. موجودی رنگ‌ها و سایزها بین انبار حضوری و سایت اینترنتی به صورت خودکار و لحظه‌ای همگام می‌شود تا از فروش کالای ناموجود جلوگیری شود.",
        en: "Yes! Professional and Enterprise plans include native API sync plugins for WooCommerce and Shopify. Inventory levels across physical branches and online stores sync instantly in real-time.",
      },
      category: { fa: "اتصالات و API", en: "Integrations & API" },
    },
    {
      id: "faq-5",
      question: {
        fa: "امنیت داده‌ها و فایل‌های پشتیبان چگونه تضمین می‌شود؟",
        en: "How are data security and backups handled?",
      },
      answer: {
        fa: "اطلاعات شما با رمزنگاری AES-256 ذخیره می‌شوند. در حالت آفلاین داده‌ها در دیتابیس محلی دستگاه خودتان قرار دارند. در حالت ابری، فایل‌های پشتیبان روزانه در ۳ سرور مجزای ابری پشتیبان‌گیری می‌شوند و امکان خروجی کامل اکسل در هر لحظه وجود دارد.",
        en: "Your data is secured with AES-256 encryption. In offline mode, data stays strictly local on your machine. In cloud mode, automated daily redundant backups take place across encrypted servers, and full Excel export is available anytime.",
      },
      category: { fa: "امنیتی و پشتیبان", en: "Security & Backup" },
    },
  ] as FAQItem[],
};
