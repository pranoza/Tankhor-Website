import type { Metadata } from 'next';
import { Vazirmatn, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { LanguageAndThemeProvider } from '@/context/LanguageAndThemeContext';
import { DownloadLinksProvider } from '@/context/DownloadLinksContext';

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
  title: 'تنخور | نرم‌افزار مدیریت و حسابداری فروشگاه پوشاک',
  description:
    'با نرم‌افزار تنخور فروش، انبارداری و مدیریت رنگ و سایز پوشاک، کیف و کفش را ساده‌تر کنید. نسخه رایگان آفلاین و نسخه ابری Pro برای مدیریت حرفه‌ای فروشگاه.',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  keywords: [
    'نرم افزار مدیریت فروشگاه پوشاک',
    'نرم افزار حسابداری پوشاک',
    'نرم افزار انبارداری پوشاک',
    'نرم افزار مدیریت بوتیک',
    'نرم افزار حسابداری کیف و کفش',
    'نرم افزار مدیریت فروشگاه لباس',
    'نرم افزار حسابداری بوتیک رایگان',
    'نرم افزار مدیریت مزون',
    'نرم افزار انبارداری ماتریسی رنگ و سایز',
  ],
  alternates: {
    canonical: 'https://tankhor.com',
    languages: {
      fa: 'https://tankhor.com',
      en: 'https://tankhor.com/en',
      'x-default': 'https://tankhor.com',
    },
  },
  openGraph: {
    title: 'تنخور | نرم‌افزار مدیریت و حسابداری فروشگاه پوشاک',
    description:
      'با نرم‌افزار تنخور فروش، انبارداری و مدیریت رنگ و سایز پوشاک، کیف و کفش را ساده‌تر کنید. نسخه رایگان آفلاین و نسخه ابری Pro برای مدیریت حرفه‌ای فروشگاه.',
    url: 'https://tankhor.com',
    siteName: 'Tankhor',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'تنخور | نرم‌افزار مدیریت و حسابداری فروشگاه پوشاک',
    description:
      'با نرم‌افزار تنخور فروش، انبارداری و مدیریت رنگ و سایز پوشاک، کیف و کفش را ساده‌تر کنید. نسخه رایگان آفلاین و نسخه ابری Pro.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl" className={`dark ${vazirmatn.variable} ${jakarta.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var p = window.location.pathname;
                  if (p && (p === '/en' || p.indexOf('/en/') === 0)) {
                    document.documentElement.setAttribute('lang', 'en');
                    document.documentElement.setAttribute('dir', 'ltr');
                  }
                  var saved = localStorage.getItem('tankhor_theme');
                  if (saved === 'light') {
                    document.documentElement.classList.remove('dark');
                  } else {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  // Safeguard against circular structure serialization (e.g. DOM nodes, fiber nodes, events)
                  if (typeof Node !== 'undefined' && Node.prototype && !Node.prototype.toJSON) {
                    Node.prototype.toJSON = function() {
                      return {
                        nodeType: this.nodeType,
                        nodeName: this.nodeName,
                        id: this.id || undefined,
                        className: typeof this.className === 'string' ? this.className : undefined
                      };
                    };
                  }
                  if (typeof Event !== 'undefined' && Event.prototype && !Event.prototype.toJSON) {
                    Event.prototype.toJSON = function() {
                      return {
                        type: this.type,
                        bubbles: this.bubbles,
                        cancelable: this.cancelable
                      };
                    };
                  }
                  var origStringify = JSON.stringify;
                  JSON.stringify = function(value, replacer, space) {
                    try {
                      return origStringify(value, replacer, space);
                    } catch (err) {
                      if (err && (err.name === 'TypeError' || String(err).indexOf('circular') !== -1)) {
                        var seen = new WeakSet();
                        return origStringify(value, function(k, v) {
                          if (typeof v === 'object' && v !== null) {
                            if (seen.has(v)) return '[Circular]';
                            seen.add(v);
                            if (typeof Node !== 'undefined' && v instanceof Node) {
                              return '<' + (v.nodeName || 'Node').toLowerCase() + (v.id ? '#' + v.id : '') + '>';
                            }
                          }
                          return typeof replacer === 'function' ? replacer(k, v) : v;
                        }, space);
                      }
                      throw err;
                    }
                  };
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-neutral-50 dark:bg-[#0a0a0a] text-neutral-900 dark:text-neutral-100 font-sans antialiased selection:bg-teal-500 selection:text-neutral-950 transition-colors duration-200">
        <DownloadLinksProvider>
          <LanguageAndThemeProvider>
            {children}
          </LanguageAndThemeProvider>
        </DownloadLinksProvider>
      </body>
    </html>
  );
}
