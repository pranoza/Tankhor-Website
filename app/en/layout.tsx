import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | TANKHOR',
    default: 'Tankhor | Free Apparel ERP, Boutique POS & Fashion Inventory Software',
  },
  description:
    'Tankhor is an all-in-one fashion boutique management, color/size SKU matrix inventory, and retail POS software. Free, offline-first, and built for apparel businesses.',
  keywords: [
    'Apparel ERP',
    'Clothing Store Inventory Software',
    'Fashion Boutique POS',
    'Color and Size Matrix Inventory',
    'Garment Stock Management',
    'Boutique Accounting Software',
    'Free Apparel Software',
    'Apparel Manufacturing ERP',
    'Atelier Management Software',
  ],
  alternates: {
    canonical: 'https://tankhor.com/en',
    languages: {
      en: 'https://tankhor.com/en',
      fa: 'https://tankhor.com',
      'x-default': 'https://tankhor.com',
    },
  },
  openGraph: {
    title: 'Tankhor | Free Apparel ERP & Fashion Inventory Software',
    description:
      'All-in-one fashion boutique management, color/size matrix inventory, and retail POS software. 100% offline & free.',
    url: 'https://tankhor.com/en',
    siteName: 'TANKHOR',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tankhor | Free Apparel ERP & Fashion Inventory Software',
    description:
      'All-in-one fashion boutique management, color/size matrix inventory, and retail POS software.',
  },
};

export default function EnglishRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      dir="ltr"
      lang="en"
      className="ltr font-sans min-h-screen text-neutral-900 dark:text-neutral-100 selection:bg-teal-500 selection:text-neutral-950"
    >
      {children}
    </div>
  );
}
