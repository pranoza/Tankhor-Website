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
      fa: "نرم افزار مدیریت فروشگاه پوشاک رایگان | تنخور",
      en: "Free Apparel Store Management Software | Tankhor",
    },
    description: {
      fa: "تنخور، نرم افزار رایگان مدیریت فروشگاه پوشاک برای مدیریت محصولات، رنگ و سایز، موجودی، انبار و سفارش‌ها. رایگان، آفلاین و مخصوص کسب‌وکارهای پوشاک.",
      en: "Tankhor: Free apparel store management software for managing products, color & size variants, inventory, stock & orders. Free, offline, and purpose-built for fashion.",
    },
    keywords: [
      "نرم افزار مدیریت فروشگاه پوشاک رایگان",
      "نرم افزار انبارداری پوشاک رایگان",
      "نرم افزار مدیریت موجودی پوشاک رایگان",
      "نرم افزار مدیریت فروشگاه لباس رایگان",
      "نرم افزار مدیریت بوتیک رایگان",
      "نرم افزار حسابداری پوشاک رایگان",
      "نرم افزار فروش پوشاک رایگان",
      "نرم افزار مدیریت محصولات پوشاک",
      "نرم افزار مدیریت موجودی لباس",
      "نرم افزار انبارداری لباس",
      "نرم افزار فروشگاهی پوشاک",
      "نرم افزار مدیریت مزون رایگان",
    ],
  },

  navLinks: [
    { id: "features", label: { fa: "قابلیت‌ها", en: "Features" }, href: "#features" },
    { id: "free-version", label: { fa: "نسخه رایگان", en: "Free Version" }, href: "#free-version" },
    { id: "pro-version", label: { fa: "تنخور پرو", en: "Tankhor Pro" }, href: "#pro-version" },
    { id: "why-tankhor", label: { fa: "چرا تنخور؟", en: "Why Tankhor?" }, href: "#why-tankhor" },
    { id: "faq", label: { fa: "سوالات متداول", en: "FAQ" }, href: "#faq" },
  ] as NavigationLink[],

  hero: {
    badge: {
      fa: "رایگان • آفلاین • مخصوص پوشاک",
      en: "Free • Offline • Purpose-Built for Apparel",
    },
    h1: {
      fa: "نرم افزار مدیریت فروشگاه پوشاک، رایگان و آفلاین",
      en: "Free & Offline Apparel Store Management Software",
    },
    subheadline: {
      fa: "محصولات، رنگ و سایز، موجودی، انبار و سفارش‌های فروشگاه پوشاک خود را ساده مدیریت کنید؛ رایگان و بدون نیاز به اینترنت.",
      en: "Effortlessly manage your clothing store products, color & size variants, inventory, warehouse, and orders — 100% free and offline.",
    },
    ctaPrimary: {
      fa: "دانلود رایگان تنخور",
      en: "Download Tankhor Free",
    },
    ctaSecondary: {
      fa: "آشنایی با نسخه Pro",
      en: "Explore Tankhor Pro",
    },
    quickStats: [
      { value: "۱۰۰٪", label: { fa: "رایگان و بدون محدودیت زمانی", en: "100% Free Forever" } },
      { value: "آفلاین", label: { fa: "کارکرد کامل بدون اینترنت", en: "Full Offline Resilience" } },
      { value: "مخصوص پوشاک", label: { fa: "ماتریس رنگ، سایز و بارکد", en: "Color & Size Matrix" } },
      { value: "دسکتاپ", label: { fa: "نصب سریع روی ویندوز و مک", en: "Windows & macOS App" } },
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
      fa: "چرا تنخور؟ راهکار تخصصی برای صنعت پوشاک",
      en: "Why Tankhor? Purpose-Built for Apparel Businesses",
    },
    subtitle: {
      fa: "برخلاف نرم‌افزارهای عمومی که ساختار رنگ و سایز را درک نمی‌کنند، تنخور از ابتدا مخصوص پوشاک طراحی شده است.",
      en: "Unlike generic business software that treats clothing like single items, Tankhor natively supports color and size variant matrices.",
    },
    advantages: [
      {
        title: { fa: "مخصوص صنعت پوشاک", en: "Tailor-Made for Apparel" },
        desc: { fa: "طراحی شده بر اساس الزامات واقعی بوتیک‌ها، مزون‌ها، تولیدی‌ها و فروشگاه‌های آنلاین لباس و کفش.", en: "Engineered specifically for the real-world workflow of clothing stores, boutiques, maisons, and footwear shops." },
      },
      {
        title: { fa: "مدیریت رنگ و سایز (ماتریس)", en: "Color & Size Matrix" },
        desc: { fa: "تعریف یکباره محصول با ده‌ها واریانت رنگ و سایز (S تا 5XL، سایزهای عددی و اروپایی) بدون ایجاد کدهای سردرگرم‌کننده.", en: "Create one product with dozens of color/size combinations without duplicating items or mess." },
      },
      {
        title: { fa: "مدیریت محصولات و تنوع‌ها", en: "Product Variant Management" },
        desc: { fa: "دسته‌بندی تخصصی بر اساس پارچه، فصل، برند و بارکد اختصاصی برای هر واریانت.", en: "Categorize by fabric, season, brand, and unique barcodes for each color/size option." },
      },
      {
        title: { fa: "مدیریت موجودی دقیق", en: "Accurate Inventory Tracking" },
        desc: { fa: "مشاهده لحظه‌ای موجودی هر سایز و رنگ در تمامی انبارها و شعب فروشگاه.", en: "Real-time stock visibility for every single size and color across all locations." },
      },
      {
        title: { fa: "مدیریت انبار و ورود/خروج", en: "Warehouse & Stock Movement" },
        desc: { fa: "کارتکس کالا، ثبت ورود/خروج با اسکنر بارکد و انبارگردانی سریع با موبایل.", en: "Stock ledgers, barcode scan check-ins, and lightning-fast smartphone inventory audits." },
      },
      {
        title: { fa: "ثبت و مدیریت سفارش‌ها", en: "Sales Order Processing" },
        desc: { fa: "ثبت سریع فاکتور فروش، مرجوعی، تعویض سایز و چاپ اتیکت قیمت و بارکد پوشاک.", en: "Fast invoice creation, item exchanges, size adjustments, and price tag printing." },
      },
      {
        title: { fa: "کارکرد ۱۰۰٪ آفلاین", en: "100% Offline Capability" },
        desc: { fa: "بدون حتی ۱ ثانیه وابستگی به اینترنت؛ فروشگاه شما در زمان قطعی شبکه متوقف نمی‌شود.", en: "Operates 100% locally. Zero sales interruption during network outages." },
      },
      {
        title: { fa: "نسخه رایگان دسکتاپ (Tankhor Free)", en: "Tankhor Free Desktop App" },
        desc: { fa: "دانلود رایگان، نصب آسان روی ویندوز و مک، بدون پرداخت هزینه اشتراک برای استفاده پایه.", en: "Free download, instant installation on Windows & macOS, no subscription fees for core operations." },
      },
      {
        title: { fa: "امکان ارتقا به Cloud (Tankhor Pro)", en: "Seamless Upgrade to Tankhor Pro Cloud" },
        desc: { fa: "هر زمان کسب‌وکار شما رشد کرد، اطلاعات آفلاین خود را با یک کلیک به ابری منتقل و سینک کنید.", en: "Migrate your local data to the cloud with one click when your team or branches expand." },
      },
    ],
  },

  freeVersion: {
    title: { fa: "نرم افزار مدیریت پوشاک رایگان (Tankhor Free)", en: "Tankhor Free Apparel Management Software" },
    subtitle: {
      fa: "تنخور را رایگان دانلود کنید و بدون پرداخت اشتراک، مدیریت محصولات و موجودی کسب‌وکار پوشاک خود را شروع کنید.",
      en: "Download Tankhor Free today and start managing your fashion products and inventory without subscription fees.",
    },
    benefits: [
      { fa: "۱۰۰٪ رایگان و بدون محدودیت زمانی (اصلاً نسخه آزمایشی یا Trial نیست)", en: "100% Free forever (Not a trial or limited demo)" },
      { fa: "نصب و کارکرد کاملاً آفلاین روی رایانه و دسکتاپ", en: "Runs completely offline on Desktop computers" },
      { fa: "بدون نیاز به اینترنت و بدون قطعی در فروشگاه", en: "No internet required for day-to-day operations" },
      { fa: "مناسب برای بوتیک‌ها، مزون‌ها و فروشگاه‌های پوشاک و کفش", en: "Perfect for boutiques, ateliers, clothing & footwear shops" },
      { fa: "مدیریت کامل تنوع رنگ و سایز با ماتریس هوشمند", en: "Full color & size variant matrix management" },
      { fa: "مدیریت کامل محصولات، بارکد و اتیکت قیمت", en: "Complete product database, barcode & tag printing" },
      { fa: "مدیریت موجودی انبار و کارتکس کالا", en: "Inventory stock control & item movements" },
      { fa: "ثبت سریع سفارش‌ها، فاکتور و مرجوعی سایز", en: "Fast sales invoices, order entries & size exchanges" },
    ],
    ctaText: { fa: "دانلود رایگان تنخور", en: "Download Tankhor Free" },
  },

  fashionFeatures: [
    {
      id: "products",
      iconName: "Package",
      title: { fa: "محصولات", en: "Products" },
      subtitle: { fa: "مدیریت اطلاعات کامل محصولات پوشاک", en: "Full Apparel Product Data" },
      description: {
        fa: "تعریف کامل مشخصات لباس، پارچه، جنس، برند و قیمت‌های خرید و فروش با رابط کاربری بسیار سریع.",
        en: "Maintain comprehensive product specs including fabric composition, brand, and pricing.",
      },
    },
    {
      id: "matrix",
      iconName: "Grid",
      title: { fa: "رنگ و سایز", en: "Color & Size" },
      subtitle: { fa: "مدیریت تنوع‌های مختلف هر محصول", en: "Multi-Dimensional Variant Grid" },
      description: {
        fa: "ایجاد اتوماتیک ماتریس واریانت‌ها برای انواع سایزبندی (S/M/L/XL یا سایزهای عددی) به همراه کد SKU و بارکد اختصاصی.",
        en: "Auto-generate variant matrices for letter/numeric sizing with dedicated SKUs and barcode generation.",
      },
    },
    {
      id: "inventory",
      iconName: "Layers",
      title: { fa: "موجودی", en: "Inventory" },
      subtitle: { fa: "مشاهده و مدیریت موجودی هر محصول و تنوع", en: "Variant-Level Stock Tracking" },
      description: {
        fa: "کنترل لحظه‌ای موجودی دقیق هر سایز و رنگ؛ جلوگیری از تمام شدن سایزهای پرفروش با هشدارهای هوشمند.",
        en: "Track exact stock levels per size and color. Receive low-stock threshold alerts for top-selling sizes.",
      },
    },
    {
      id: "warehouse",
      iconName: "Boxes",
      title: { fa: "انبار", en: "Warehouse" },
      subtitle: { fa: "مدیریت موجودی در انبارها و موقعیت‌های مختلف", en: "Multi-Store Warehouse Controls" },
      description: {
        fa: "انبارداری دقیق، صدور حواله بین انبار مرکزی و فروشگاه، انبارگردانی سریع با دستگاه بارکدخوان.",
        en: "Manage central stock and store locations with barcode-based stock check-ins and transfers.",
      },
    },
    {
      id: "orders",
      iconName: "ShoppingCart",
      title: { fa: "سفارش‌ها", en: "Sales Orders" },
      subtitle: { fa: "ثبت و مدیریت سفارش‌های فروش", en: "Order & Invoice Processing" },
      description: {
        fa: "ثبت فاکتور فروش، مدیریت سفارش‌های مشتریان، ثبت مرجوعی سایز و محاسبه سریع تخفیف‌ها.",
        en: "Process customer orders, manage returns, size exchanges, and apply discounts.",
      },
    },
    {
      id: "size-guide",
      iconName: "Ruler",
      title: { fa: "راهنمای سایز", en: "Size Specs" },
      subtitle: { fa: "مدیریت اطلاعات سایزبندی محصولات", en: "Interactive Sizing Specifications" },
      description: {
        fa: "ثبت جدول اندازه‌گیری دقیق سانتیمتری (دور سینه، قد آستین، عرض شانه، دور کمر) جهت کاهش مرجوعی.",
        en: "Store garment measurements (chest, sleeve, waist, shoulder) to guide buyers and slash return rates.",
      },
    },
  ],

  freeVsPro: {
    title: { fa: "از رایگان شروع کن، هر وقت آماده بودی به Cloud برو", en: "Start Free, Upgrade to Cloud Whenever Ready" },
    subtitle: {
      fa: "نسخه رایگان تنخور تمام نیازهای پایه شما را برآورده می‌کند. نسخه Pro برای همگام‌سازی ابری و تیم‌های بزرگتر آماده است.",
      en: "Tankhor Free satisfies all your essential store needs. Tankhor Pro adds real-time cloud sync for growing teams.",
    },
    freeCard: {
      title: { fa: "Tankhor Free", en: "Tankhor Free" },
      badge: { fa: "۱۰۰٪ رایگان و آفلاین", en: "100% Free & Offline" },
      features: [
        { fa: "نسخه دسکتاپ (Desktop App)", en: "Desktop App (Windows & macOS)" },
        { fa: "کارکرد ۱۰۰٪ آفلاین (بدون نیاز به اینترنت)", en: "100% Offline (No Internet Needed)" },
        { fa: "رایگان همیشگی بدون پرداخت اشتراک", en: "Forever Free without subscription" },
        { fa: "مدیریت کامل محصولات پوشاک", en: "Full Apparel Product Management" },
        { fa: "مدیریت کامل ماتریس رنگ و سایز", en: "Complete Color & Size Matrix" },
        { fa: "مدیریت موجودی انبار", en: "Warehouse Stock Tracking" },
        { fa: "ثبت فاکتور و سفارش‌های فروش", en: "Sales Orders & Invoicing" },
        { fa: "چاپ بارکد و لیبل قیمت پوشاک", en: "Barcode & Tag Printing" },
      ],
      ctaText: { fa: "دانلود رایگان تنخور", en: "Download Tankhor Free" },
    },
    proCard: {
      title: { fa: "Tankhor Pro", en: "Tankhor Pro Cloud" },
      badge: { fa: "همگام‌سازی ابری", en: "Cloud & Multi-User" },
      features: [
        { fa: "تمامی امکانات نسخه Tankhor Free", en: "Includes all Tankhor Free features" },
        { fa: "همگام‌سازی ابری خودکار داده‌ها (Cloud Sync)", en: "Automated Cloud Sync Across Devices" },
        { fa: "دسترسی آنلاین از وب، دسکتاپ و موبایل", en: "Multi-Device Access (Web, Desktop, Mobile)" },
        { fa: "همگام‌سازی اطلاعات بین چند شعبه و چند انبار", en: "Multi-Store & Multi-Warehouse Sync" },
        { fa: "امکانات پیشرفته‌تر برای تیم‌های در حال رشد", en: "Advanced Tools for Growing Teams" },
        { fa: "تعریف چندین کاربر با سطح دسترسی پرسنل", en: "Multi-User Roles & Permissions (RBAC)" },
      ],
      ctaText: { fa: "مشاهده Tankhor Pro", en: "Explore Tankhor Pro" },
    },
  },

  seoContent: {
    title: {
      fa: "نرم افزار مدیریت فروشگاه پوشاک رایگان چیست؟",
      en: "What is Free Apparel Store Management Software?",
    },
    paragraphs: [
      {
        fa: "مدیریت یک فروشگاه پوشاک، بوتیک یا مزون با سایر فروشگاه‌های خرده‌فروشی تفاوت‌های بنیادی دارد. در فروشگاه لباس، شما با یک محصول ساده مواجه نیستید؛ بلکه هر مدل پوشاک دارای ترکیب‌های متعددی از رنگ‌ها (مشکی، سفید، سرمه‌ای، کرم) و سایزها (S, M, L, XL, XXL یا سایزهای عددی ۳۶ تا ۵۲) است. استفاده از دفترچه‌های سنتی، فایل‌های اکسل پیچیده یا نرم‌افزارهای عمومی باعث ایجاد صدها کد کالای تکراری و سردرگمی شدید در انبارداری می‌شود.",
        en: "Managing a clothing store, boutique, or fashion maison differs fundamentally from ordinary retail stores. In apparel retail, a single garment style comes with dozens of color and size combinations. Using manual ledgers or generic tools causes item duplication and severe inventory chaos.",
      },
      {
        fa: "نرم افزار مدیریت فروشگاه پوشاک رایگان تنخور (Tankhor Free) راهکاری تخصصی و آفلاین است که دقیقاً برای حل این چالش طراحی شده است. تنخور با ارائه «ماتریس واریانت رنگ و سایز»، به شما اجازه می‌دهد محصول را فقط یک‌بار ثبت کنید و تمام واریانت‌های رنگی و سایزی آن را در یک جدول ماتریسی منظم مدیریت نمایید. این نرم‌افزار بدون نیاز به اینترنت اجرا می‌شود و مدیریت موجودی، ورود و خروج انبار، ثبت سفارش‌های فروش و چاپ لیبل بارکد پوشاک را با بالاترین سرعت امکان‌پذیر می‌سازد.",
        en: "Tankhor Free is a specialized offline software tailored to solve this exact bottleneck. By providing a smart variant matrix grid, Tankhor lets you define a garment once and manage all color/size combinations seamlessly. It runs completely offline on your desktop computer, providing lightning-fast stock control, order processing, and tag printing.",
      },
      {
        fa: "چه صاحب یک بوتیک کوچک لباس مردانه یا زنانه باشید، چه یک مزون تولید لباس مجلسی یا آنلاین‌شاپ پوشاک، نرم افزار مدیریت بوتیک رایگان تنخور به شما کمک می‌کند تا موجودی دقیق انبار خود را بدانید، از ناموجود شدن سایزهای پرفروش جلوگیری کنید و سفارش‌های مشتریان را بدون خطا ثبت نمایید. علاوه بر این، هر زمان که کسب‌وکار شما توسعه پیدا کرد، می‌توانید به راحتی به نسخه ابری Tankhor Pro ارتقا پیدا کرده و داده‌های خود را بین شعب و فروشگاه اینترنتی همگام‌سازی کنید.",
        en: "Whether you operate a boutique, a maison, or a fashion e-commerce store, Tankhor Free empowers you to know your exact variant inventory, prevent stockouts of popular sizes, and eliminate order mistakes. As your business grows, seamless one-click migration to Tankhor Pro Cloud keeps all your branches synced.",
      },
    ],

    accountingIntentQA: {
      question: {
        fa: "آیا تنخور نرم افزار حسابداری پوشاک است؟",
        en: "Is Tankhor an Accounting Software for Clothing Stores?",
      },
      answer: {
        fa: "خیر. تنخور یک نرم افزار تخصصی مدیریت محصولات، موجودی، انبار و سفارش‌های کسب‌وکارهای پوشاک است و جایگزین نرم‌افزار حسابداری نیست. نرم‌افزارهای عمومی حسابداری فاقد امکاناتی مانند ماتریس رنگ و سایز، راهنمای سایز هوشمند و چاپ تگ لباس هستند. اگر به دنبال نرم افزار حسابداری پوشاک هستید، تنخور می‌تواند در کنار سیستم حسابداری شما برای مدیریت عملیات روزمره محصول، موجودی و انبارداری پوشاک استفاده شود.",
        en: "No. Tankhor is a specialized product, variant, inventory, and order management platform for fashion businesses, and is not a general accounting or tax system. Generic accounting software lacks apparel-native features like color-size matrices and garment measurement specs. If you are searching for clothing accounting software, Tankhor runs seamlessly alongside your financial accounting system to handle product operations.",
      },
    },
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
        fa: "آیا نرم افزار مدیریت فروشگاه پوشاک تنخور واقعاً رایگان است؟",
        en: "Is Tankhor apparel management software truly free?",
      },
      answer: {
        fa: "بله، نسخه دسکتاپ تنخور (Tankhor Free) کاملاً رایگان است و هیچ محدودیت زمانی (تست یا Trial) ندارد. شما می‌توانید آن را بدون نیاز به کارت بانکی یا پرداخت وجه دانلود کرده و برای مدیریت محصولات، موجودی، رنگ و سایز و سفارش‌های فروشگاه خود استفاده کنید.",
        en: "Yes, the desktop version (Tankhor Free) is 100% free with no time limit or trial expiration. You can download and run it without any credit card or payment.",
      },
      category: { fa: "نسخه رایگان", en: "Free Version" },
    },
    {
      id: "faq-2",
      question: {
        fa: "آیا تنخور بدون اتصال به اینترنت هم کار می‌کند؟",
        en: "Does Tankhor work completely offline without internet?",
      },
      answer: {
        fa: "بله، ۱۰۰٪! نسخه رایگان تنخور به صورت کاملاً آفلاین روی رایانه و دسکتاپ شما نصب شده و تمام اطلاعات را روی دیتابیس محلی دستگاه شما ذخیره می‌کند. قطعی اینترنت هیچ خللی در فروشگاه یا انبار شما ایجاد نخواهد کرد.",
        en: "Yes, 100%! Tankhor Free runs locally on your desktop computer, storing all data in a local database with zero internet dependency.",
      },
      category: { fa: "کارکرد آفلاین", en: "Offline Capabilities" },
    },
    {
      id: "faq-3",
      question: {
        fa: "ماتریس رنگ و سایز تنخور چگونه کار می‌کند؟",
        en: "How does Tankhor's color & size matrix work?",
      },
      answer: {
        fa: "در تنخور نیاز نیست برای ۱ مدل لباس با ۵ رنگ و ۴ سایز، ۲۰ کالای مجزا ثبت کنید. شما محصول را ۱ بار تعریف می‌کنید و سیستم به صورت خودکار ماتریس ۲۰ تایی از ترکیب رنگ‌ها و سایزها همراه با بارکد و SKU اختصاصی برای هر واریانت تولید می‌کند.",
        en: "Instead of creating 20 separate items for a shirt with 5 colors and 4 sizes, you define the style once. Tankhor auto-generates a 20-cell matrix grid with individual SKUs and barcodes for every single combination.",
      },
      category: { fa: "رنگ و سایز", en: "Variant Matrix" },
    },
    {
      id: "faq-4",
      question: {
        fa: "تفاوت تنخور با نرم‌افزارهای عمومی حسابداری چیست؟",
        en: "How does Tankhor differ from general accounting software?",
      },
      answer: {
        fa: "نرم‌افزارهای عمومی حسابداری ساختار تخصصی پوشاک (ماتریس رنگ و سایز، جدول اندازه‌گیری، چاپ اتیکت قیمت پوشاک) را ندارند و انبارداری لباس را پیچیده می‌کنند. تنخور از پایه برای مدیریت محصولات، موجودی و سفارش‌های پوشاک ساخته شده است.",
        en: "General accounting software lacks fashion-native structures like color/size matrix grids, garment sizing specs, and clothing tag printing. Tankhor is tailor-made specifically for apparel workflow.",
      },
      category: { fa: "مقایسه", en: "Comparison" },
    },
    {
      id: "faq-5",
      question: {
        fa: "آیا تنخور نرم افزار حسابداری پوشاک است؟",
        en: "Is Tankhor an accounting software?",
      },
      answer: {
        fa: "خیر. تنخور یک نرم افزار تخصصی مدیریت محصولات، موجودی، انبار و سفارش‌های پوشاک است. تنخور صورت‌های مالی پیچیده یا اظهارنامه مالیاتی ارائه نمی‌دهد، اما می‌تواند در کنار نرم افزار حسابداری شما به عنوان موتور اصلی مدیریت محصول و انبار استفاده شود.",
        en: "No. Tankhor specializes in product, variant, inventory, and order operations for apparel. It handles day-to-day store operations and runs seamlessly alongside your financial accounting software.",
      },
      category: { fa: "حسابداری", en: "Accounting" },
    },
    {
      id: "faq-6",
      question: {
        fa: "آیا برای استفاده از تنخور نیاز به اینترنت داریم؟",
        en: "Do we need an internet connection to use Tankhor?",
      },
      answer: {
        fa: "خیر، برای استفاده از نسخه دسکتاپ Tankhor Free نیازی به اینترنت ندارید. تنها در صورتی که بخواهید از نسخه ابری Tankhor Pro برای همگام‌سازی بین چند شعب استفاده کنید به اینترنت نیاز خواهید داشت.",
        en: "No, Tankhor Free runs 100% offline. Internet is only required if you upgrade to Tankhor Pro Cloud to sync data across multiple physical branches.",
      },
      category: { fa: "اینترنت", en: "Internet & Cloud" },
    },
    {
      id: "faq-7",
      question: {
        fa: "تفاوت نسخه Tankhor Free با Tankhor Pro چیست؟",
        en: "What is the difference between Tankhor Free and Tankhor Pro?",
      },
      answer: {
        fa: "نسخه Free کاملاً رایگان و آفلاین روی دسکتاپ اجرا می‌شود و برای ۱ فروشگاه عالی است. نسخه Pro امکان همگام‌سازی ابری، دسترسی آنلاین از چند دستگاه (موبایل و وب) و مدیریت چند شعبه و چند انبار را اضافه می‌کند.",
        en: "Tankhor Free is desktop-offline and 100% free. Tankhor Pro adds real-time cloud sync, multi-device web/mobile access, and multi-store multi-warehouse management.",
      },
      category: { fa: "نسخه‌ها", en: "Versions" },
    },
    {
      id: "faq-8",
      question: {
        fa: "آیا امکان ثبت محصولات با سایزهای غیراستاندارد یا بزرگ وجود دارد؟",
        en: "Can we configure non-standard or plus-size variations?",
      },
      answer: {
        fa: "بله! در تنخور می‌توانید هر نوع سایزبندی (حروفی S تا 5XL، عددی، بچه‌گانه، کفش و سایزهای اختصاصی مزون) را تعریف کنید و حتی برای سایزهای بزرگ قیمت متفاوت تعیین نمایید.",
        en: "Yes! Tankhor supports all size formats (letter sizes S-5XL, numeric trousers/shoes, kids, and custom atelier sizing) with differential price tags for larger sizes.",
      },
      category: { fa: "سایزبندی", en: "Sizing Options" },
    },
    {
      id: "faq-9",
      question: {
        fa: "آیا امکان چاپ بارکد و اتیکت قیمت برای لباس‌ها وجود دارد؟",
        en: "Can we print clothing barcodes and price hangtags?",
      },
      answer: {
        fa: "بله، تنخور سیستم چاپ اتوماتیک بارکد و لیبل قیمت پوشاک را دارد که با انواع لیبل‌پرینترها و پرینترهای حرارتی سازگار است.",
        en: "Yes, Tankhor includes automated barcode and price hangtag design & printing compatible with all standard thermal label printers.",
      },
      category: { fa: "بارکد و لیبل", en: "Barcodes & Labels" },
    },
    {
      id: "faq-10",
      question: {
        fa: "آیا اطلاعات و موجودی‌های ما در نسخه رایگان امن هستند؟",
        en: "Is our inventory data secure in the Free version?",
      },
      answer: {
        fa: "کاملاً. در نسخه رایگان، داده‌ها روی دیتابیس محلی رایانه شما قرار دارند و هیچ دسترسی خارجی به آن‌ها وجود ندارد. همچنین می‌توانید در هر زمان خروجی اکسل و پشتیبان محلی بگیرید.",
        en: "Absolutely. In Tankhor Free, your database is stored strictly locally on your machine with zero external access. You can export complete Excel backups anytime.",
      },
      category: { fa: "امنیت", en: "Security" },
    },
    {
      id: "faq-11",
      question: {
        fa: "چگونه می‌توانیم اطلاعات خود را از نسخه رایگان به Tankhor Pro منتقل کنیم؟",
        en: "How do we upgrade local data from Free to Tankhor Pro Cloud?",
      },
      answer: {
        fa: "انتقال داده‌ها تنها با یک کلیک انجام می‌شود. نرم‌افزار دسکتاپ تنخور خروجی استاندارد ابری تولید کرده و تمام محصولات، موجودی‌ها و واریانت‌های شما را بدون تغییر به ابری منتقل می‌کند.",
        en: "Migration takes a single click. Tankhor Desktop generates an encrypted export file that populates your new cloud account seamlessly.",
      },
      category: { fa: "ارتقا", en: "Upgrade Path" },
    },
    {
      id: "faq-12",
      question: {
        fa: "تنخور برای چه کسب‌وکارهایی مناسب است؟",
        en: "Which fashion businesses benefit most from Tankhor?",
      },
      answer: {
        fa: "تنخور تخصصی برای تمامی فعالان صنعت مد و پوشاک طراحی شده است: فروشگاه‌های لباس زنانه و مردانه، بوتیک‌ها، مزون‌ها، فروشگاه‌های کیف و کفش، تولیدی‌های پوشاک و آنلاین‌شاپ‌های اینستاگرامی و وب‌سایت‌ها.",
        en: "Tankhor is purpose-built for all fashion apparel stakeholders: boutiques, ateliers, menswear/womenswear stores, shoe shops, clothing manufacturers, and online fashion brands.",
      },
      category: { fa: "مخاطبان", en: "Target Audience" },
    },
  ] as FAQItem[],
};
