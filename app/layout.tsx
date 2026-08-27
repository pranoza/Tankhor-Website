import type { Metadata } from 'next';
import { Vazirmatn, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { LanguageAndThemeProvider } from '@/context/LanguageAndThemeContext';

const vazirmatn = Vazirmatn({
  subsets: ['arabic', 'latin'],
  variable: '--font-vazirmatn',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'تنخور | TANKHOR - پلتفرم تخصصی مدیریت انبار و سایزبندی پوشاک',
  description: 'پلتفرم تخصصی تنخور با قابلیت کارکرد کاملاً آفلاین، همگام‌سازی ابری، ماتریس رنگ و سایز و راهنمای سایز هوشمند؛ ویژه تولیدی‌ها، مزون‌ها و آنلاین‌شاپ‌های پوشاک.',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  keywords: [
    'نرم‌افزار مدیریت موجودی و انبارداری پوشاک',
    'نرم‌افزار راهنمای سایز هوشمند و اختصاصی لباس و کفش',
    'نرم‌افزار حسابداری و مدیریت فروشگاه پوشاک و مزون',
    'سیستم بارکدخوان و مدیریت تنوع رنگ و سایز (ماتریس واریانت)',
    'نرم‌افزار آفلاین و ابری مدیریت بوتیک و فروشگاه مد و فشن',
  ],
  openGraph: {
    title: 'تنخور | TANKHOR - پلتفرم تخصصی مدیریت انبار و سایزبندی پوشاک',
    description: 'پلتفرم تخصصی مدیریت محصول، ماتریس رنگ و سایز، و انبارداری پوشاک، کیف و کفش',
    url: 'https://tankhor.ir',
    siteName: 'Tankhor',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'تنخور | TANKHOR',
    description: 'پلتفرم تخصصی مدیریت انبار و سایزبندی پوشاک، کیف و کفش',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl" className={`${vazirmatn.variable} ${jakarta.variable}`}>
      <body className="min-h-screen bg-neutral-50 dark:bg-[#0a0a0a] text-neutral-900 dark:text-neutral-100 font-sans antialiased selection:bg-teal-500 selection:text-neutral-950 transition-colors duration-200">
        <LanguageAndThemeProvider>
          {children}
        </LanguageAndThemeProvider>
      </body>
    </html>
  );
}
