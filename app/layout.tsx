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
  title: 'نرم افزار مدیریت فروشگاه پوشاک رایگان | تنخور',
  description: 'تنخور، نرم افزار رایگان مدیریت فروشگاه پوشاک برای مدیریت محصولات، رنگ و سایز، موجودی، انبار و سفارش‌ها. رایگان، آفلاین و مخصوص کسب‌وکارهای پوشاک.',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  keywords: [
    'نرم افزار مدیریت فروشگاه پوشاک رایگان',
    'نرم افزار انبارداری پوشاک رایگان',
    'نرم افزار مدیریت موجودی پوشاک رایگان',
    'نرم افزار مدیریت فروشگاه لباس رایگان',
    'نرم افزار مدیریت بوتیک رایگان',
    'نرم افزار حسابداری پوشاک رایگان',
    'نرم افزار فروش پوشاک رایگان',
    'نرم افزار مدیریت محصولات پوشاک',
    'نرم افزار مدیریت موجودی لباس',
    'نرم افزار انبارداری لباس',
    'نرم افزار فروشگاهی پوشاک',
    'نرم افزار مدیریت مزون رایگان',
  ],
  openGraph: {
    title: 'نرم افزار مدیریت فروشگاه پوشاک رایگان | تنخور',
    description: 'تنخور، نرم افزار رایگان مدیریت فروشگاه پوشاک برای مدیریت محصولات، رنگ و سایز، موجودی، انبار و سفارش‌ها. رایگان، آفلاین و مخصوص کسب‌وکارهای پوشاک.',
    url: 'https://tankhor.com',
    siteName: 'Tankhor',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'نرم افزار مدیریت فروشگاه پوشاک رایگان | تنخور',
    description: 'تنخور، نرم افزار رایگان مدیریت فروشگاه پوشاک برای مدیریت محصولات، رنگ و سایز، موجودی، انبار و سفارش‌ها.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl" className={`${vazirmatn.variable} ${jakarta.variable}`}>
      <head>
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
        <LanguageAndThemeProvider>
          {children}
        </LanguageAndThemeProvider>
      </body>
    </html>
  );
}
