import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import DemoRequestModal from '@/components/DemoRequestModal';
import FreeVersionSection from '@/components/FreeVersionSection';
import FeatureInteractiveDemo from '@/components/FeatureInteractiveDemo';
import {
  featuresListEn,
  getFeatureBySlugEn,
  getAllFeatureSlugsEn,
  FeatureDetailEn,
} from '@/data/featuresDataEn';
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
  Download,
  ArrowUpRight,
  ChevronRight,
  Sparkles,
  ShieldCheck,
  Zap,
  HelpCircle,
  Truck,
  AlertTriangle,
  RotateCcw,
  Users,
  Tag,
  BadgePercent,
  TrendingDown,
  Share2,
  Layers,
  MessageCircle,
  Smartphone,
  Printer,
  FileCheck,
  CopyCheck,
  ShieldAlert,
  FileText,
  Ship,
  Scale,
  Percent,
  Clock,
  Trophy,
  LineChart,
  Wallet,
  BellRing,
  Coins,
  FileSpreadsheet,
} from 'lucide-react';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllFeatureSlugsEn().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const feature = getFeatureBySlugEn(slug);

  if (!feature) {
    return {
      title: 'Feature Not Found | Tankhor',
    };
  }

  const url = `https://tankhor.com/en/features/${feature.slug}`;

  return {
    title: `${feature.metaTitle}`,
    description: feature.metaDescription,
    keywords: [
      feature.targetKeyword,
      ...feature.lsiKeywords,
      'Tankhor Apparel ERP',
      'Fashion Boutique Software',
      'Clothing Inventory Software',
    ],
    alternates: {
      canonical: url,
      languages: {
        en: url,
        fa: `https://tankhor.com/features/${feature.slug}`,
        'x-default': `https://tankhor.com/features/${feature.slug}`,
      },
    },
    openGraph: {
      title: feature.metaTitle,
      description: feature.metaDescription,
      url,
      siteName: 'TANKHOR',
      locale: 'en_US',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: feature.metaTitle,
      description: feature.metaDescription,
    },
  };
}

const iconMap: Record<string, React.ElementType> = {
  Boxes,
  AlertTriangle,
  Truck,
  RotateCcw,
  Receipt,
  BadgePercent,
  Users,
  Tag,
  Ruler,
  Sparkles,
  TrendingDown,
  Share2,
  QrCode,
  Layers,
  MessageCircle,
  Smartphone,
  Barcode,
  Printer,
  FileCheck,
  CopyCheck,
  RefreshCw,
  ShieldAlert,
  FileText,
  Zap,
  Ship,
  Calculator,
  Scale,
  Percent,
  PieChart,
  Clock,
  Trophy,
  LineChart,
  CreditCard,
  Wallet,
  BellRing,
  Coins,
  ArrowLeftRight,
  FileSpreadsheet,
  ShieldCheck,
};

export default async function EnglishFeatureDetailPage({ params }: Props) {
  const { slug } = await params;
  const feature = getFeatureBySlugEn(slug);

  if (!feature) {
    notFound();
  }

  const relatedFeatures = feature.relatedSlugs
    .map((s) => getFeatureBySlugEn(s))
    .filter((f): f is FeatureDetailEn => Boolean(f));

  // Structured Data (JSON-LD)
  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: `Tankhor - ${feature.targetKeyword}`,
    operatingSystem: 'Windows, macOS, Android, Web',
    applicationCategory: 'BusinessApplication',
    description: feature.metaDescription,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      ratingCount: '154',
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://tankhor.com/en',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Specialized Fashion Features',
        item: 'https://tankhor.com/en/features',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: feature.targetKeyword,
        item: `https://tankhor.com/en/features/${feature.slug}`,
      },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: feature.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Navbar />

      <main className="overflow-x-hidden min-h-screen bg-white dark:bg-[#0a0a0a] text-neutral-900 dark:text-neutral-100">
        {/* Breadcrumb Navigation Bar */}
        <section className="pt-28 pb-4 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50/60 dark:bg-neutral-950/40 text-xs font-caption-mono text-neutral-500">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center gap-2 overflow-x-auto whitespace-nowrap">
            <Link href="/en" className="hover:text-neutral-900 dark:hover:white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
            <Link href="/en/features" className="hover:text-neutral-900 dark:hover:white transition-colors">
              Features
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
            <span className="text-teal-600 dark:text-teal-400 font-semibold">{feature.targetKeyword}</span>
          </div>
        </section>

        {/* Hero Section */}
        <section className="relative pt-12 pb-16 sm:pb-24 border-b border-neutral-200 dark:border-neutral-800 bg-gradient-to-b from-teal-950/10 via-white to-white dark:from-teal-950/20 dark:via-[#0a0a0a] dark:to-[#0a0a0a]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-6">
            {/* Category & Badge */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              <span className="px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800 text-teal-700 dark:text-teal-300 text-xs font-caption-mono font-medium">
                {feature.badge}
              </span>
              <span className="px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 text-xs font-caption-mono">
                {feature.categoryLabel}
              </span>
            </div>

            {/* H1 Title */}
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight text-neutral-900 dark:text-white">
              {feature.heroHeadline}
            </h1>

            {/* Subtitle / Description */}
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto leading-relaxed font-normal">
              {feature.heroDescription}
            </p>

            {/* LSI Keywords Tag Cloud */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-1.5 text-xs">
              <span className="text-neutral-500 font-caption-mono mr-1">Related keywords:</span>
              {feature.lsiKeywords.map((kw) => (
                <span
                  key={kw}
                  className="px-2.5 py-0.5 rounded-md bg-neutral-100 dark:bg-neutral-800/80 border border-neutral-200 dark:border-neutral-700/60 text-neutral-600 dark:text-neutral-300 text-[11px]"
                >
                  {kw}
                </span>
              ))}
            </div>

            {/* Call to Action Buttons */}
            <div className="pt-6 flex flex-wrap items-center justify-center gap-3.5">
              <a
                href="#free-version"
                className="px-6 py-3 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-bold text-xs sm:text-sm shadow-md hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-all flex items-center gap-2 cursor-pointer"
              >
                <Download className="w-4 h-4 text-teal-400 dark:text-teal-600" />
                <span>Download Free Desktop App</span>
              </a>

              <a
                href="https://my.tankhor.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200 border border-neutral-300 dark:border-neutral-700 font-semibold text-xs sm:text-sm hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-teal-500" />
                <span>14-Day Free Cloud Pro Trial</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
              </a>
            </div>

            {/* Key Benefits Stats Cards */}
            <div className="pt-8 grid grid-cols-1 sm:grid-cols-3 gap-3.5 text-left">
              {feature.keyBenefits.map((b, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-800 space-y-1"
                >
                  {b.stat && (
                    <span className="font-caption-mono text-sm font-bold text-teal-600 dark:text-teal-400 block">
                      {b.stat}
                    </span>
                  )}
                  <p className="font-bold text-xs text-neutral-900 dark:text-white">{b.title}</p>
                  <p className="text-[11px] text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal">
                    {b.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Competitive Advantages Section */}
        <section className="py-16 sm:py-24 max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800 text-teal-700 dark:text-teal-300 text-xs font-caption-mono">
              <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
              <span>Why Tankhor Leads the Industry</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white">
              Competitive Advantages in {feature.targetKeyword}
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 font-normal leading-relaxed">
              Designed from the ground up around real-world retail garment racks, variations, models, and fashion POS registers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {feature.competitiveAdvantages.map((adv, idx) => {
              const IconComp = iconMap[adv.iconName] || Boxes;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-neutral-50/70 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all space-y-3 relative group"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 flex items-center justify-center text-teal-600 dark:text-teal-400 group-hover:scale-105 transition-transform">
                      <IconComp className="w-5 h-5" />
                    </div>
                    {adv.highlight && (
                      <span className="px-2.5 py-0.5 rounded-full bg-teal-50 dark:bg-teal-950/70 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800 text-[10px] font-caption-mono font-semibold">
                        {adv.highlight}
                      </span>
                    )}
                  </div>

                  <h3 className="text-base font-bold text-neutral-900 dark:text-white">
                    {adv.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal">
                    {adv.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Dedicated Interactive Demo */}
        <section className="py-12 bg-neutral-100/50 dark:bg-neutral-950/80 border-y border-neutral-200 dark:border-neutral-800">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <FeatureInteractiveDemo
              demoType={feature.interactiveDemoType}
              featureTitle={feature.targetKeyword}
            />
          </div>
        </section>

        {/* Operational Highlights */}
        <section className="py-16 sm:py-24 max-w-4xl mx-auto px-4 sm:px-6 space-y-10">
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-extrabold text-neutral-900 dark:text-white">
              Technical & Operational Highlights of {feature.targetKeyword}
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed font-normal">
              Generic ERP systems lack variation understanding, causing tied-up capital, lost inventory, and customer sizing frustration. Tankhor eliminates these friction points with modern apparel algorithms.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 space-y-4">
            <h3 className="text-sm font-bold text-neutral-900 dark:text-white flex items-center gap-2">
              <Zap className="w-4 h-4 text-teal-600 dark:text-teal-400" />
              <span>Key Technical Capabilities:</span>
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-600 dark:text-neutral-300">
              {feature.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Free Desktop Version & Pro Trial CTA */}
        <section id="free-version">
          <FreeVersionSection />
        </section>

        {/* Targeted FAQs */}
        <section className="py-16 sm:py-24 border-t border-neutral-200 dark:border-neutral-800 max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 text-xs font-caption-mono">
              <HelpCircle className="w-3.5 h-3.5 text-teal-500" />
              <span>Frequently Asked Questions</span>
            </div>
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">
              Common Questions About {feature.targetKeyword}
            </h2>
          </div>

          <div className="space-y-4">
            {feature.faqs.map((faq, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-neutral-50 dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-800 space-y-2"
              >
                <h3 className="font-bold text-sm text-neutral-900 dark:text-white">
                  {faq.question}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Features Hub */}
        {relatedFeatures.length > 0 && (
          <section className="py-16 border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-950/60">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white">
                    Explore Other Fashion ERP Modules
                  </h2>
                  <p className="text-xs text-neutral-500 mt-1">
                    360° integration across every fashion boutique and atelier workflow
                  </p>
                </div>
                <Link
                  href="/en/features"
                  className="text-xs font-semibold text-teal-600 dark:text-teal-400 hover:underline inline-flex items-center gap-1 font-caption-mono"
                >
                  <span>View All 10 Capabilities</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {relatedFeatures.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/en/features/${rel.slug}`}
                    className="p-4 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-teal-500 dark:hover:border-teal-500 transition-all space-y-2 group block"
                  >
                    <span className="text-[10px] px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 font-caption-mono">
                      {rel.categoryLabel}
                    </span>
                    <h3 className="font-bold text-xs text-neutral-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                      {rel.titleEn}
                    </h3>
                    <p className="text-[11px] text-neutral-500 line-clamp-2 leading-relaxed">
                      {rel.subtitle}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
      <DemoRequestModal />
    </>
  );
}
