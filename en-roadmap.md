# نقشه راه جامع پیاده‌سازی نسخه انگلیسی و بین‌المللی تن‌خور (Tankhor Global Roadmap)

این سند نقشه راه گام‌به‌گام و فنی برای ورود پلتفرم **تن‌خور (Tankhor)** به بازار جهانی و راه‌اندازی نسخه انگلیسی روی ساختار زیرپوشه استاندارد سئو (`tankhor.com/en/...`) است.

---

## 📌 اهداف استراتژیک و اصول کلیدی
1. **حفظ کامل سئو و رتبه‌های فعلی صفحات فارسی:** نسخه فارسی بدون هیچ‌گونه تغییر آدرس یا ریدایرکت روی روت دامنه (`tankhor.com`) باقی می‌ماند.
2. **سئوی بین‌المللی درجه یک (International Technical SEO):** پیاده‌سازی کامل تگ‌های دوطرفه `hreflang`، کنونیکال‌های اختصاصی، متاتگ‌های OpenGraph انگلیسی و اسکیماهای JSON-LD بین‌المللی.
3. **قیمت‌گذاری دلاری (USD):** تبدیل تمام تعرفه‌های تومانی به قیمت‌های استاندارد SaaS جهانی ($) همراه با ویژگی‌های مورد نیاز برندهای مد بین‌المللی.
4. **بومی‌سازی کامل و حرفه‌ای (No Mixed Language):** حذف تمام عبارات، اصطلاحات محلی (مثل چک صیادی، سامانه مودیان و...) و جایگزینی با استانداردهای جهانی (Sales Tax/VAT، Accounting Bridges، Landed Cost، Multi-currency).

---

## 🗺️ ماتریس نگاشت صفحات (URL Mapping Matrix)

| صفحه | آدرس نسخه فارسی (موجود) | آدرس نسخه انگلیسی (جدید) | کلمه کلیدی هدف در سئو جهانی |
| :--- | :--- | :--- | :--- |
| **صفحه اصلی (Home)** | `tankhor.com/` | `tankhor.com/en` | Apparel ERP, Fashion Boutique Software |
| **لیست امکانات (Features)** | `tankhor.com/features` | `tankhor.com/en/features` | Clothing Store Features & POS |
| **انبارداری پوشاک** | `tankhor.com/features/apparel-inventory` | `tankhor.com/en/features/apparel-inventory` | Apparel & Footwear Inventory Management |
| **حسابداری و صندوق بوتیک** | `tankhor.com/features/clothing-accounting` | `tankhor.com/en/features/clothing-accounting` | Fashion Boutique POS & Accounting |
| **راهنمای سایز هوشمند** | `tankhor.com/features/size-guide-engine` | `tankhor.com/en/features/size-guide-engine` | Smart Size Guide Calculator Engine |
| **کاتالوگ دیجیتال** | `tankhor.com/features/digital-catalog` | `tankhor.com/en/features/digital-catalog` | Interactive Digital Lookbook & Catalog |
| **چاپ بارکد و لیبل** | `tankhor.com/features/barcode-printing` | `tankhor.com/en/features/barcode-printing` | Garment Barcode & Price Tag Generator |
| **اتصال ووکامرس** | `tankhor.com/features/woocommerce-sync` | `tankhor.com/en/features/woocommerce-sync` | Real-time WooCommerce & Shopify Sync |
| **بهای تمام‌شده (Landed Cost)**| `tankhor.com/features/landed-cost` | `tankhor.com/en/features/landed-cost` | Fashion True Landed Cost Calculator |
| **تحلیل فروش و گردش موجودی**| `tankhor.com/features/apparel-analytics` | `tankhor.com/en/features/apparel-analytics` | Apparel Retail Analytics & Inventory Turn |
| **مدیریت نقدینگی و خزانه‌داری**| `tankhor.com/features/treasury-and-cheques` | `tankhor.com/en/features/treasury-and-cheques` | Cash Flow & Treasury Ledger for Retail |
| **پل‌های حسابداری و مالیاتی**| `tankhor.com/features/financial-integrations`| `tankhor.com/en/features/financial-integrations`| Accounting ERP Bridges & Automated Tax |
| **لندینگ حسابداری بوتیک** | `tankhor.com/boutique-accounting` | `tankhor.com/en/boutique-accounting` | Boutique Accounting Software |
| **لندینگ مدیریت مزون** | `tankhor.com/maison-accounting` | `tankhor.com/en/maison-accounting` | Atelier & Fashion Maison Management |
| **لندینگ تولیدی پوشاک** | `tankhor.com/apparel-manufacturing` | `tankhor.com/en/apparel-manufacturing` | Garment Manufacturing ERP |
| **لندینگ نرم‌افزار رایگان** | `tankhor.com/free-boutique-software` | `tankhor.com/en/free-boutique-software` | Free Apparel Management Software |
| **نقشه سایت (Sitemap UI)** | `tankhor.com/sitemap` | `tankhor.com/en/sitemap` | Visual HTML Sitemap |

---

## 🚀 فازهای پیاده‌سازی (Phased Roadmap)

### فاز ۱: معماری مسیرها و لی‌اوت اختصاصی انگلیسی (`/en/...`)
* **ایجاد دایرکتوری ریشه‌ای `app/en/` در Next.js App Router:**
  * ایجاد `app/en/layout.tsx`: تنظیم اختصاصی `<html lang="en" dir="ltr">` با فونت‌های انگلیسی (`Plus_Jakarta_Sans`)، متاتگ‌های پیش‌فرض انگلیسی و تنظیمات جهت متن چپ‌به‌راست (LTR).
  * تفکیک کانتکست زبان بر اساس مسیر جاری (Pathname-based locale detection) به جای نگهداری فقط در `localStorage`، جهت اطمینان از Server-Side Rendering بی‌نقص گوگل.
* **ساخت فایل‌های مسیر در دایرکتوری `app/en/`:**
  * `app/en/page.tsx`
  * `app/en/features/page.tsx`
  * `app/en/features/[slug]/page.tsx`
  * `app/en/boutique-accounting/page.tsx`
  * `app/en/maison-accounting/page.tsx`
  * `app/en/apparel-manufacturing/page.tsx`
  * `app/en/free-boutique-software/page.tsx`
  * `app/en/sitemap/page.tsx`

---

### فاز ۲: سئوی فنی بین‌المللی (International SEO Engine)
* **تگ‌های دوطرفه `hreflang` (Bidirectional Hreflang Tags):**
  * در تمام صفحات فارسی:
    ```html
    <link rel="alternate" hreflang="fa" href="https://tankhor.com/path" />
    <link rel="alternate" hreflang="en" href="https://tankhor.com/en/path" />
    <link rel="alternate" hreflang="x-default" href="https://tankhor.com/path" />
    ```
  * در تمام صفحات انگلیسی:
    ```html
    <link rel="alternate" hreflang="en" href="https://tankhor.com/en/path" />
    <link rel="alternate" hreflang="fa" href="https://tankhor.com/path" />
    <link rel="alternate" hreflang="x-default" href="https://tankhor.com/path" />
    ```
* **تگ‌های Canonical اختصاصی:**
  * هر صفحه انگلیسی به آدرس دقیق خودش با پروتکل `https://tankhor.com/en/...` کنونیکال می‌زند.
* **اسکیماهای ساختاریافته (Schema.org JSON-LD):**
  * ایجاد اسکیماهای کامل انگلیسی برای:
    * `SoftwareApplication` (قیمت به USD، رتبه، دسته‌بندی BusinessApplication)
    * `Organization` (پلتفرم جهانی تنخور)
    * `BreadcrumbList` برای ناوبری گوگل
    * `FAQPage` با پرسش و پاسخ‌های انگلیسی بازار جهانی
* **نقشه سایت داینامیک (`app/sitemap.ts`):**
  * ثبت تمام ۳۲ آدرس (۱۶ صفحه فارسی + ۱۶ صفحه انگلیسی) به همراه اتریبیوت‌های `alternates: { languages: { fa: ..., en: ... } }`.

---

### فاز ۳: پایگاه داده محتوا و تعرفه‌های دلاری (USD Pricing & Content)
* **تکمیل ترجمه انگلیسی در `data/featuresData.ts`:**
  * اضافه کردن متن کامل ۱۰ صفحه تخصصی به انگلیسی (عناوین، توضیحات متا، مزایای رقابتی، بخش‌های دمو و سوالات متداول جهانی).
* **طراحی پلن‌های دلاری برای بازار جهانی:**
  * تغییر پلن‌های تومانی به دوره‌های اشتراک دلاری SaaS پوشاک:
    * **دوره ۱ ماهه (1 Month):** معادل **$19/month**
    * **دوره ۳ ماهه (3 Months):** معادل **$49/quarter** ($16.3/mo)
    * **دوره ۶ ماهه (6 Months):** معادل **$89/half-year** ($14.8/mo)
    * **دوره ۱۲ ماهه (12 Months):** معادل **$149/year** ($12.4/mo) — صرفه‌جویی ویژه سالانه
  * **تغییر برچسب‌ها در نسخه انگلیسی:**
    * ارز: `$` (USD)
    * روش پرداخت: کارت‌های بین‌المللی و فعال‌سازی فوری در پنل ابری (`my.tankhor.com`)
    * جایگزینی «چک صیادی و سامانه مودیان» با «VAT / Automated Sales Tax & Multi-Currency Ledger».

---

### فاز ۴: کامپوننت‌ها و تجربه کاربری (UI/UX & Components)
* **سوییچر زبان هوشمند در نوار ناوبری (Navbar Language Switcher):**
  * دکمه انتخاب زبان (FA / EN) با آیکون پرچم/کره زمین.
  * با کلیک روی EN، کاربر دقیقاً به معادل انگلیسی همان صفحه منتقل می‌شود (مثلاً از `/features/size-guide-engine` به `/en/features/size-guide-engine` و بالعکس).
* **بومی‌سازی فوتر (Footer Localization):**
  * در نسخه انگلیسی، اینماد (که یک مجوز داخلی ایران است) پنهان شده و به جای آن بج‌های اعتبار بین‌المللی قرار می‌گیرد:
    * `100% Offline Resilience (Local SQLite DB)`
    * `Cloud Security & Encrypted Sync`
    * `Global Multi-Platform (Windows, Mac, Android, Web)`
* **راست‌چین/چپ‌چین هوشمند (RTL/LTR Layout Adaptability):**
  * تمام گریدها، پدینگ‌ها، حاشیه‌ها و آیکون‌ها بر اساس زبان چپ‌چین شده و فونت پیش‌فرض به Plus Jakarta Sans سوئیچ می‌شود.
* **ویجت‌های تعاملی (Interactive Demos):**
  * تبدیل دموهای ماتریس انبار، محاسبه‌گر سایز، و بارکدزن به زبان انگلیسی و نمایش واحدها به سانتی‌متر/اینچ و قیمت‌ها به دلار.

---

### فاز ۵: تست، اعتبارسنجی و بهره‌برداری نهایی (QA & Deployment)
1. **تست بیلد و کامپایل (`compile_applet` و `lint_applet`):** بررسی عدم وجود ارور تایپ‌اسکریپت و هیدریشن.
2. **بررسی تست اسکیما (Rich Results Test):** اطمینان از سلامت تگ‌های JSON-LD در کنسول گوگل.
3. **بررسی صحت هدایت و لینک‌های داخلی:** حصول اطمینان از اینکه هیچ لینک فارسی در نسخه انگلیسی و هیچ لینک انگلیسی در نسخه فارسی نمانده باشد.
4. **تست عملکرد و سرعت (Core Web Vitals):** بهینه‌سازی تصاویر و اسکریپت‌ها در نسخه LTR.

---

## 📊 چک‌لیست اصطلاحات تخصصی جهت جلوگیری از هرگونه کلمه فارسی یا نامأنوس

| مفهوم | نسخه فارسی | نسخه انگلیسی در بازار جهانی |
| :--- | :--- | :--- |
| **نوع نرم‌افزار** | نرم افزار حسابداری و انبارداری پوشاک | Apparel ERP, Clothing POS & Inventory Software |
| **ماتریس رنگ و سایز** | ماتریس هوشمند رنگ و سایز | Color & Size SKU Matrix Grid |
| **ماشین‌حساب سایز** | راهنمای سایز ضد مرجوعی | Interactive Size Guide & Fit Calculator |
| **بهای تمام‌شده** | محاسبه بهای تمام شده کالای خریداری شده | True Landed Cost Allocation Engine |
| **سیستم مالی** | چک صیادی و سامانه مودیان | Automated Retail Tax, Invoicing & Cash Flow |
| **پایداری سیستم** | کارکرد ۱۰۰٪ آفلاین دسکتاپ | 100% Offline Local SQLite Performance |
| **همگام‌سازی شعب** | دسترسی تحت وب و اتصال چند شعبه | Multi-Store Cloud Sync & Browser Access |
| **واحد پول** | تومان / ریال | USD ($) |
