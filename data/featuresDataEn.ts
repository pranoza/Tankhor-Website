export interface FeatureAdvantageEn {
  title: string;
  description: string;
  iconName: string;
  highlight?: string;
}

export interface FeatureDetailEn {
  slug: string;
  id: string;
  targetKeyword: string;
  titleEn: string;
  subtitle: string;
  metaTitle: string;
  metaDescription: string;
  lsiKeywords: string[];
  category: 'inventory' | 'sales' | 'smart-tools' | 'ecommerce' | 'finance' | 'analytics';
  categoryLabel: string;
  badge: string;
  heroHeadline: string;
  heroDescription: string;
  competitiveAdvantages: FeatureAdvantageEn[];
  highlights: string[];
  keyBenefits: Array<{
    title: string;
    description: string;
    stat?: string;
  }>;
  interactiveDemoType:
    | 'matrix-inventory'
    | 'pos-quick-sale'
    | 'size-finder'
    | 'digital-catalog'
    | 'barcode-label'
    | 'woocommerce-sync'
    | 'landed-cost-calc'
    | 'analytics-turnover'
    | 'sayadi-cheques'
    | 'financial-export';
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  relatedSlugs: string[];
}

export const featuresListEn: FeatureDetailEn[] = [
  {
    slug: 'apparel-inventory',
    id: 'apparel-inventory',
    targetKeyword: 'Apparel & Footwear Inventory Management',
    titleEn: 'Apparel & Footwear Inventory Management',
    subtitle: 'Color and size SKU matrix grid, automated stock replenishment alerts, and inter-branch inventory transfers.',
    metaTitle: 'Apparel & Footwear Inventory Management Software | Tankhor',
    metaDescription: 'Specialized fashion inventory management software by Tankhor. Matrix grid for color/size variations, stockouts prevention, and inter-store transfers. 100% offline & free.',
    lsiKeywords: [
      'Apparel Inventory Software',
      'Clothing Store Inventory',
      'Fashion Stock Control',
      'Color and Size Matrix Grid',
      'Garment Stock Transfer',
      'Multi-Location Apparel ERP',
    ],
    category: 'inventory',
    categoryLabel: 'Apparel Inventory',
    badge: 'Purpose-Built Fashion ERP',
    heroHeadline: 'Specialized Apparel, Footwear & Boutique Inventory Management',
    heroDescription:
      'Eliminate stock discrepancies and variant mismatches. In Tankhor, every garment model is organized in an intuitive color/size matrix grid, generating transfer manifests and restocking orders in seconds.',
    competitiveAdvantages: [
      {
        title: 'Variant-Level SKU Matrix Tracking',
        description: 'Track each color and size combination with its own distinct barcode, SKU, and physical shelf location instead of generic product IDs.',
        iconName: 'Boxes',
        highlight: 'Precise Rack Isolation',
      },
      {
        title: 'Smart Low-Stock & Reorder Point Alerts',
        description: 'Receive proactive notifications when popular sizes reach safety stock thresholds, preventing out-of-stock lost revenue.',
        iconName: 'AlertTriangle',
        highlight: 'Zero Stockouts',
      },
      {
        title: 'Multi-Store & Inter-Branch Stock Transfers',
        description: 'Issue official transfer notes between central warehouse, flagship stores, and pop-up locations with sender and receiver sign-off verification.',
        iconName: 'Truck',
        highlight: 'Chain Store Control',
      },
      {
        title: 'Returns & Defective Items Ledger',
        description: 'Categorize fitting damages, vendor returns, and alterations with specific reason codes to maintain supplier accountability.',
        iconName: 'RotateCcw',
        highlight: 'Shrinkage Prevention',
      },
    ],
    highlights: [
      'Unlimited size curve templates (XS to 5XL, plus numerical shoe sizing 36 to 48)',
      'High-speed physical stock audit using wireless barcode scanners without stopping cashier operations',
      '100% offline resilience: run high-volume stock rooms with zero internet dependency',
      'Detailed valuation reports by supplier, brand, fabric collection, and retail markup',
    ],
    keyBenefits: [
      {
        title: 'Near-Zero Inventory Discrepancy',
        description: 'Reduce manual counting and sizing errors by 99% using variation-specific thermal barcodes.',
        stat: '99% Accuracy',
      },
      {
        title: 'Rapid Inter-Store Logistics',
        description: 'Create and dispatch store inventory transfers in under 30 seconds per shipment.',
        stat: '<30s Manifests',
      },
      {
        title: 'Retain Loyal Shoppers',
        description: 'Never lose a shopper due to an untracked favorite color or out-of-stock size.',
        stat: '+45% Repeat Sales',
      },
    ],
    interactiveDemoType: 'matrix-inventory',
    faqs: [
      {
        question: 'Why are general ERP tools ill-suited for clothing store inventory?',
        answer: 'General ERP systems only support single product codes. To manage multiple colors and sizes, users must manually create dozens of duplicate products, making reordering and reporting a nightmare. Tankhor models parent garments and auto-generates matrix variations seamlessly.',
      },
      {
        question: 'Does Tankhor support transfers between multiple store locations?',
        answer: 'Yes. With the cloud sync module, you can manage transfers across unlimited retail stores and central distribution hubs with instant dispatch confirmation.',
      },
      {
        question: 'How do stock audits work in Tankhor?',
        answer: 'You can use any standard USB or Bluetooth handheld barcode scanner to count floor stock. The system instantly highlights variance between physical counts and system balances.',
      },
    ],
    relatedSlugs: ['clothing-accounting', 'barcode-printing', 'woocommerce-sync', 'apparel-analytics'],
  },
  {
    slug: 'clothing-accounting',
    id: 'clothing-accounting',
    targetKeyword: 'Fashion Boutique POS & Accounting',
    titleEn: 'Fashion Boutique POS & Retail Accounting',
    subtitle: 'Lightning-fast barcode checkout, gross profit per garment rack, and customer credit ledger.',
    metaTitle: 'Fashion Boutique POS & Retail Accounting Software | Tankhor',
    metaDescription: 'High-speed clothing boutique point of sale (POS) and retail accounting software. Sub-second barcode checkout, true margin per garment model, and customer credit accounts. Free & offline.',
    lsiKeywords: [
      'Boutique POS Software',
      'Clothing Store POS',
      'Fashion Retail Accounting',
      'Garment Checkout Register',
      'Retail Gross Margin',
      'Apparel Cashier System',
    ],
    category: 'sales',
    categoryLabel: 'POS & Accounting',
    badge: 'High-Speed Fashion POS',
    heroHeadline: 'Dedicated Boutique Point of Sale & Retail Accounting',
    heroDescription:
      'Complete invoice checkout in under 10 seconds. Automatically calculate landed costs and net profit per garment model, while tracking customer balances and credit terms without requiring an accounting degree.',
    competitiveAdvantages: [
      {
        title: 'Instant Multi-Payment Checkout',
        description: 'High-speed register interface engineered for rush hours: accept split payments, cards, cash, and customer store credits in seconds.',
        iconName: 'Receipt',
        highlight: '10s Checkout',
      },
      {
        title: 'Automated Gross Profit per Garment Model',
        description: 'Identify exactly which collections and dress cuts generate the highest profit margins after factoring in true landed costs.',
        iconName: 'BadgePercent',
        highlight: 'Real Net Margin',
      },
      {
        title: 'Customer Credit & Vendor Payables Ledger',
        description: 'Maintain detailed subsidiary ledgers, balance statements, and credit limits for VIP clients and fashion wholesale suppliers.',
        iconName: 'Users',
        highlight: 'Clear Balances',
      },
      {
        title: 'Tiered Fashion Discounts & Promotional Campaigns',
        description: 'Easily launch seasonal end-of-season sales, Black Friday discounts, multi-buy bundles, and VIP member pricing tiers.',
        iconName: 'Tag',
        highlight: 'Dynamic Promos',
      },
    ],
    highlights: [
      'Support for split tender payments (part cash, card, and store credit)',
      'Automated sales tax (VAT) computation on each line item',
      '100% offline functionality ensures cashier registers never freeze during internet outages',
      'Cashier end-of-day drawer reconciliations and gross profit analytics by work shift',
    ],
    keyBenefits: [
      {
        title: 'Faster Checkout Queues',
        description: 'Cut peak-hour checkout lines by up to 70% with barcode auto-scans and instant receipts.',
        stat: '10s Receipt',
      },
      {
        title: 'Zero Ledger Calculation Errors',
        description: 'Maintain automated vendor payables and client credits without paper notebooks.',
        stat: 'Zero Errors',
      },
      {
        title: 'Transparent Rack Profitability',
        description: 'Quickly eliminate unprofitable lines and double down on high-margin seasonal winners.',
        stat: '+25% Margin Gain',
      },
    ],
    interactiveDemoType: 'pos-quick-sale',
    faqs: [
      {
        question: 'Do I need professional accounting experience to use Tankhor POS?',
        answer: 'Not at all. The interface is built so any store sales clerk can scan barcodes, collect payment, and issue a customized receipt in seconds without bookkeeping training.',
      },
      {
        question: 'How does Tankhor calculate gross margin on apparel?',
        answer: 'Tankhor tracks the true purchase cost and landed expenses for every inventory batch, automatically updating real-time gross margin upon every register sale.',
      },
      {
        question: 'Can I connect payment terminals and receipt printers?',
        answer: 'Yes, Tankhor works with standard ESC/POS thermal receipt printers, barcode scanners, and payment card terminals.',
      },
    ],
    relatedSlugs: ['apparel-inventory', 'treasury-and-cheques', 'financial-integrations', 'apparel-analytics'],
  },
  {
    slug: 'size-guide-engine',
    id: 'size-guide-engine',
    targetKeyword: 'Smart Size Guide Calculator Engine',
    titleEn: 'Smart Apparel Size Guide & Fit Calculator',
    subtitle: 'Automated size recommendations based on customer height, weight, and fit preference to slash returns.',
    metaTitle: 'Smart Size Guide Calculator & Fit Recommendation Engine | Tankhor',
    metaDescription: 'Tankhor smart apparel fit calculator engine. Delivers accurate size recommendations based on customer height, weight, and fit style. Cut apparel return rates by 60%.',
    lsiKeywords: [
      'Smart Size Guide',
      'Apparel Fit Calculator',
      'Clothing Size Recommendation',
      'Reduce E-Commerce Returns',
      'Online Boutique Sizing Widget',
    ],
    category: 'smart-tools',
    categoryLabel: 'Fit & Sizing Engine',
    badge: 'Anti-Return Fit Tech',
    heroHeadline: 'Interactive Size Guide & Intelligent Fit Recommendation Engine',
    heroDescription:
      'Eliminate size doubts and slash return rates by up to 60%. Shoppers input height, weight, and fit preference (slim, regular, oversize) to receive instant, tailored size recommendations with zero guesswork.',
    competitiveAdvantages: [
      {
        title: 'Intelligent Height-Weight Fit Algorithms',
        description: 'Proprietary sizing engine predicts ideal sizes with high statistical accuracy across men, women, and children collections.',
        iconName: 'Ruler',
        highlight: '60% Fewer Returns',
      },
      {
        title: 'Fit Preference Customization (Slim / Regular / Oversize)',
        description: 'Account for customer styling choices to ensure the recommended size matches their personal silhouette expectations.',
        iconName: 'Sparkles',
        highlight: 'Personalized Fit',
      },
      {
        title: 'Reduction in Double-Order Size Returns',
        description: 'Stop customers from buying two sizes with the intent to return one, protecting logistics margins and packaging costs.',
        iconName: 'TrendingDown',
        highlight: 'Save Cargo Costs',
      },
      {
        title: 'Embeddable Web & Social Sharing Links',
        description: 'Generate interactive sizing links and QR codes to share via Instagram DMs, WhatsApp, or embed directly into your online boutique.',
        iconName: 'Share2',
        highlight: 'Omnichannel Share',
      },
    ],
    highlights: [
      'Dual measurement unit support: centimeters (cm) / kilograms (kg) and inches (in) / pounds (lbs)',
      'Pre-configured size profiles for coats, dresses, hoodies, pants, and footwear',
      'Ready for website integration via iframe or standalone web link',
      'Instant customer confidence boosts checkout conversion rates by up to 35%',
    ],
    keyBenefits: [
      {
        title: 'Drastic Return Rate Reduction',
        description: 'Prevent the #1 cause of fashion e-commerce returns: incorrect garment sizing.',
        stat: '-60% Returns',
      },
      {
        title: 'Enhanced Purchase Conversion',
        description: 'Shoppers who use the size calculator are 3x more likely to complete their order.',
        stat: '+35% Conversions',
      },
      {
        title: 'Lower Customer Support Load',
        description: 'Save hours spent answering repetitive "what size should I get?" inquiries in chat.',
        stat: '80% Less DM Queries',
      },
    ],
    interactiveDemoType: 'size-finder',
    faqs: [
      {
        question: 'How does the size guide engine calculate the right fit?',
        answer: 'It combines the garment exact measurements with demographic sizing charts and customer fit preferences to recommend the optimal garment size.',
      },
      {
        question: 'Can I link this to my Instagram shop or WhatsApp customer service?',
        answer: 'Yes! Every garment profile in Tankhor can generate a direct size guide web link or QR code you can send to customers in private messages.',
      },
      {
        question: 'Can I customize size grading for our brand specific patterns?',
        answer: 'Absolutely. You can customize the chest, waist, hip, and length measurements for every size in your collection.',
      },
    ],
    relatedSlugs: ['digital-catalog', 'apparel-inventory', 'clothing-accounting', 'woocommerce-sync'],
  },
  {
    slug: 'digital-catalog',
    id: 'digital-catalog',
    targetKeyword: 'Interactive Digital Lookbook & Catalog',
    titleEn: 'Interactive Digital Lookbook & Showcase',
    subtitle: 'Exclusive online showcase and branded QR codes for social selling and WhatsApp order capture.',
    metaTitle: 'Interactive Digital Lookbook & Apparel Catalog Software | Tankhor',
    metaDescription: 'Create stunning interactive digital lookbooks and online garment catalogs with Tankhor. Generate QR codes for physical racks and direct WhatsApp ordering.',
    lsiKeywords: [
      'Digital Apparel Lookbook',
      'Online Boutique Catalog',
      'Fashion QR Code Menu',
      'WhatsApp Order Link',
      'Mobile Garment Showcase',
    ],
    category: 'smart-tools',
    categoryLabel: 'Lookbook & Showcase',
    badge: 'Social Commerce Ready',
    heroHeadline: 'Interactive Digital Lookbook & Mobile Showcase for Fashion Brands',
    heroDescription:
      'Transform your inventory into an elegant digital lookbook with a single click. Generate sleek QR codes for clothing racks and share direct order links across Instagram and messaging channels with real-time stock sync.',
    competitiveAdvantages: [
      {
        title: 'Instant One-Click Lookbook Generation',
        description: 'Convert inventory records into high-converting digital product pages complete with high-res photos, color swatches, and size availability.',
        iconName: 'QrCode',
        highlight: 'One-Click Publish',
      },
      {
        title: 'Physical In-Store Rack QR Codes',
        description: 'Print stylish QR tags on clothing hangers so shoppers can scan and explore all available sizes, styling ideas, and matching items.',
        iconName: 'Layers',
        highlight: 'Smart In-Store Tags',
      },
      {
        title: 'Direct WhatsApp & Messenger Ordering',
        description: 'Pre-formatted cart messages sent directly to your sales team with exact model name, color, and selected size.',
        iconName: 'MessageCircle',
        highlight: 'Frictionless Orders',
      },
      {
        title: 'Zero Website Maintenance Overhead',
        description: 'No complicated CMS management required: update stock in your desktop app and your online catalog reflects changes instantly.',
        iconName: 'Smartphone',
        highlight: 'Auto-Updated Sync',
      },
    ],
    highlights: [
      'Optimized for mobile viewing with fluid touch navigation and zoomable lookbook photos',
      'Automatic hiding of out-of-stock items to prevent customer disappointment',
      'Custom branding with boutique logo, color palette, and social links',
      'Built-in search and tag filtering for fast collection browsing',
    ],
    keyBenefits: [
      {
        title: 'Higher Social Media Conversion',
        description: 'Turn Instagram followers into paying clients with structured product pages.',
        stat: '+40% Order Rate',
      },
      {
        title: 'Professional Brand Image',
        description: 'Present your collection with high-end luxury boutique aesthetics without expensive web development.',
        stat: 'Luxury Look',
      },
      {
        title: 'Streamlined Customer Inquiries',
        description: 'Receive crystal-clear orders with exact item codes rather than confusing chat screenshots.',
        stat: '100% Clear Orders',
      },
    ],
    interactiveDemoType: 'digital-catalog',
    faqs: [
      {
        question: 'Do I need web hosting or a domain to use the digital catalog?',
        answer: 'No. Tankhor provides a high-speed cloud link for your brand catalog, accessible on any mobile browser with zero hosting setup.',
      },
      {
        question: 'How do customers place orders from the lookbook?',
        answer: 'Customers browse items, select their desired color and size, and tap "Order on WhatsApp" to send a pre-filled cart directly to your sales team.',
      },
      {
        question: 'Can I restrict wholesale prices from retail shoppers?',
        answer: 'Yes, you can generate separate public retail catalogs and password-protected wholesale buyer lookbooks.',
      },
    ],
    relatedSlugs: ['size-guide-engine', 'barcode-printing', 'woocommerce-sync', 'apparel-inventory'],
  },
  {
    slug: 'barcode-printing',
    id: 'barcode-printing',
    targetKeyword: 'Garment Barcode & Price Tag Generator',
    titleEn: 'Garment Barcode & Care Tag Generator',
    subtitle: 'Thermal tag printing with model name, color, size, care symbols, and dynamic price barcodes.',
    metaTitle: 'Garment Barcode & Price Tag Generator Software | Tankhor',
    metaDescription: 'Professional clothing barcode and hangtag printing software by Tankhor. Compatible with all thermal printers; print SKU, size, color, care symbols, and prices.',
    lsiKeywords: [
      'Garment Barcode Printing',
      'Clothing Hangtag Software',
      'Thermal Price Label Maker',
      'Apparel SKU Barcode Generator',
      'Fashion Price Tag Printer',
    ],
    category: 'inventory',
    categoryLabel: 'Barcode & Tagging',
    badge: 'Thermal Tag Engine',
    heroHeadline: 'Professional Garment Barcode & Hangtag Printing Software',
    heroDescription:
      'Design and print custom clothing tags, jewel labels, and thermal price stickers in seconds. Compatible with all standard thermal label printers (Zebra, Xprinter, Bixolon) with automated SKU and barcode encoding.',
    competitiveAdvantages: [
      {
        title: 'Variant-Specific Barcode Encoding',
        description: 'Generate unique Code-128 and EAN-13 barcodes for each specific color and size variation to streamline inventory audits and register checkout.',
        iconName: 'Barcode',
        highlight: 'Unique Variant Code',
      },
      {
        title: 'Customizable Label Templates & Sizes',
        description: 'Design custom layouts: standard 40x25mm labels, double-column tags, jewelry butterfly labels, or large paper hangtags.',
        iconName: 'Printer',
        highlight: 'All Label Sizes',
      },
      {
        title: 'Batch Printing from Purchase Orders',
        description: 'Print the exact number of labels matching your incoming vendor shipment with a single click, eliminating manual counting.',
        iconName: 'FileCheck',
        highlight: 'One-Click Batch',
      },
      {
        title: 'Garment Care Symbols & Composition Data',
        description: 'Add standard international textile washing symbols, fabric composition (e.g. 100% Cotton), and country of origin to clothing tags.',
        iconName: 'CopyCheck',
        highlight: 'Textile Compliance',
      },
    ],
    highlights: [
      'Compatible with all direct thermal and thermal transfer printers via standard Windows/macOS drivers',
      'Support for EAN-13, Code-128, QR Codes, and UPC formats',
      'Automated strike-through discount price tags for seasonal markdown sales',
      'Ultra-fast print engine capable of generating 500+ tags per minute with zero lag',
    ],
    keyBenefits: [
      {
        title: 'Flawless Checkout Speed',
        description: 'Scan barcodes at point of sale to prevent manual cashier price input errors.',
        stat: 'Zero Input Errors',
      },
      {
        title: 'Rapid Receiving Operations',
        description: 'Tag and merchandise entire incoming shipments in minutes instead of hours.',
        stat: '10x Faster Tagging',
      },
      {
        title: 'Professional Hangtag Aesthetic',
        description: 'Elevate your boutique branding with clean, high-resolution price tags and care instructions.',
        stat: 'Premium Look',
      },
    ],
    interactiveDemoType: 'barcode-label',
    faqs: [
      {
        question: 'What printer models are supported by Tankhor?',
        answer: 'Tankhor supports all commercial thermal label printers including Zebra, Xprinter, TSC, Bixolon, Citizen, and standard laser/inkjet sticker sheets.',
      },
      {
        question: 'Can I design tags with our boutique logo and custom fonts?',
        answer: 'Yes! The built-in label designer allows you to add your brand logo, custom typography, social handles, and QR codes.',
      },
      {
        question: 'Does the system prevent duplicate barcode generation?',
        answer: 'Yes, Tankhor utilizes an intelligent SKU algorithm that guarantees 100% unique barcodes across all brands, models, colors, and sizes.',
      },
    ],
    relatedSlugs: ['apparel-inventory', 'clothing-accounting', 'digital-catalog', 'landed-cost'],
  },
  {
    slug: 'woocommerce-sync',
    id: 'woocommerce-sync',
    targetKeyword: 'Real-time WooCommerce & Shopify Sync',
    titleEn: 'Real-time WooCommerce & Shopify Inventory Sync',
    subtitle: 'Real-time two-way synchronization between physical boutique registers and online stores.',
    metaTitle: 'Real-time WooCommerce & Shopify Fashion Inventory Sync | Tankhor',
    metaDescription: 'Automatic two-way sync between your physical boutique and WooCommerce / Shopify. Prevent overselling, auto-update stock on in-store sales. Free & fast.',
    lsiKeywords: [
      'WooCommerce Fashion Sync',
      'Shopify Apparel Inventory Sync',
      'Omnichannel Boutique POS',
      'Prevent Online Overselling',
      'WordPress Clothing Store Sync',
    ],
    category: 'ecommerce',
    categoryLabel: 'E-Commerce Sync',
    badge: 'Omnichannel Stock Engine',
    heroHeadline: 'Real-time Two-Way E-Commerce Inventory & Order Synchronization',
    heroDescription:
      'Bridge the gap between physical retail registers and online web stores. When an item sells at your store register, web inventory updates in real time, preventing duplicate sales and angry customers.',
    competitiveAdvantages: [
      {
        title: 'Sub-Second Two-Way Inventory Synchronization',
        description: 'Stock levels update immediately across all channels whether an order occurs in your brick-and-mortar boutique or on your website.',
        iconName: 'RefreshCw',
        highlight: 'Sub-Second Sync',
      },
      {
        title: 'Elimination of Embarrassing Overselling',
        description: 'Never worry about selling the last dress in-store while an online shopper orders the exact same size simultaneously.',
        iconName: 'ShieldAlert',
        highlight: 'Zero Duplicate Sales',
      },
      {
        title: 'Automatic Web Order Import into Cashier Register',
        description: 'Online orders appear directly on your store register with customer shipping info ready for packing and invoice printing.',
        iconName: 'FileText',
        highlight: 'Unified Orders',
      },
      {
        title: 'One-Click Product Publishing with Color/Size Attributes',
        description: 'Push new collections from Tankhor straight to WordPress/WooCommerce with high-res photos, variation tables, and prices.',
        iconName: 'Zap',
        highlight: 'Fast Publishing',
      },
    ],
    highlights: [
      'Built-in secure REST API connector for WooCommerce, Shopify, and custom e-commerce engines',
      'Intelligent mapping of variable products and color/size attributes',
      'Configurable safety stock buffers to reserve stock exclusively for physical boutiques',
      'Offline queue resilience: transactions completed during internet hiccups sync automatically upon reconnection',
    ],
    keyBenefits: [
      {
        title: 'Zero Frustrating Overselling Cancellations',
        description: 'Maintain perfect stock harmony and protect brand reviews on social media and marketplaces.',
        stat: '100% Stock Harmony',
      },
      {
        title: 'Hours Saved on Manual Updates',
        description: 'Save 15+ hours weekly spent manually tweaking website product quantities.',
        stat: '15h Saved / Week',
      },
      {
        title: 'Unified Customer History',
        description: 'Recognize repeat clients whether they shop in your physical boutique or on your website.',
        stat: '360° Customer View',
      },
    ],
    interactiveDemoType: 'woocommerce-sync',
    faqs: [
      {
        question: 'Will syncing slow down my WordPress or WooCommerce website?',
        answer: 'No. Tankhor uses optimized lightweight webhook endpoints that only transmit changed SKU quantities without overloading your server database.',
      },
      {
        question: 'What happens if our in-store internet drops temporarily?',
        answer: 'Tankhor queues all transactions locally in its high-speed SQLite database and reconciles inventory with WooCommerce the moment connectivity is restored.',
      },
      {
        question: 'Does it support variable products with different prices per size?',
        answer: 'Yes, Tankhor handles complex apparel variations where different sizes (e.g. Plus sizes) have unique prices and SKU numbers.',
      },
    ],
    relatedSlugs: ['apparel-inventory', 'digital-catalog', 'size-guide-engine', 'clothing-accounting'],
  },
  {
    slug: 'landed-cost',
    id: 'landed-cost',
    targetKeyword: 'Fashion True Landed Cost Calculator',
    titleEn: 'Fashion True Landed Cost Calculator Engine',
    subtitle: 'Allocate shipping freight, customs, packaging, and trims across every single garment piece.',
    metaTitle: 'Fashion True Landed Cost Calculator & Margin Engine | Tankhor',
    metaDescription: 'Accurately allocate freight, customs, tailoring, and fabric costs to each garment piece. Discover true net profit and cost of goods sold (COGS) with Tankhor.',
    lsiKeywords: [
      'Fashion Landed Cost Calculator',
      'Garment COGS Software',
      'Clothing Freight Allocation',
      'Apparel Costing Engine',
      'True Margin Fashion Retail',
    ],
    category: 'finance',
    categoryLabel: 'Costing & COGS',
    badge: 'True Margin Precision',
    heroHeadline: 'True Landed Cost Allocation Engine for Fashion & Footwear',
    heroDescription:
      'Uncover your real net margins. General software only records invoice purchase prices, hiding shipping cargo, packaging, customs, and accessories. Tankhor automatically distributes overhead costs across every garment piece.',
    competitiveAdvantages: [
      {
        title: 'Multimodal Overhead Expense Allocation',
        description: 'Distribute cargo freight, customs duties, transport, and packaging across inventory batches by weight, volume, or purchase value.',
        iconName: 'Ship',
        highlight: 'Weighted Allocation',
      },
      {
        title: 'Exact True Cost of Goods Sold (COGS)',
        description: 'Know the true landed cost down to the exact cent for every dress, jacket, and pair of boots in your boutique.',
        iconName: 'Calculator',
        highlight: 'Cent Precision',
      },
      {
        title: 'Accurate Retail Pricing Recommendations',
        description: 'Set retail pricing with guaranteed profit margins instead of underpricing and eroding boutique cash flow.',
        iconName: 'Scale',
        highlight: 'Guaranteed Profit',
      },
      {
        title: 'Multi-Batch Moving Average Valuation',
        description: 'Maintain accurate inventory valuation when receiving repeat restocks at fluctuating supplier prices and shipping rates.',
        iconName: 'Percent',
        highlight: 'Weighted Average',
      },
    ],
    highlights: [
      'Support for multiple cost allocation methods: by item quantity, value proportion, or physical weight',
      'Automatic calculation of gross and net margin percentage on every product card',
      'Historical landed cost trend tracking to identify supplier price inflation',
      'Seamless export to accounting balance sheets and tax reports',
    ],
    keyBenefits: [
      {
        title: 'Prevent False Profit Illusions',
        description: 'Stop mistaking gross revenue for profit by accounting for all hidden cargo and customs expenses.',
        stat: 'Real Net Profits',
      },
      {
        title: 'Smarter Pricing Strategies',
        description: 'Price garments strategically to maintain healthy margins during seasonal promotional discounts.',
        stat: '+18% Profit Protection',
      },
      {
        title: 'Vendor Negotiation Leverage',
        description: 'Compare effective landed costs across suppliers to negotiate superior purchasing terms.',
        stat: 'Vendor Clout',
      },
    ],
    interactiveDemoType: 'landed-cost-calc',
    faqs: [
      {
        question: 'What expenses can be added to an incoming inventory shipment?',
        answer: 'You can add international freight, customs clearance duties, local courier delivery, hanger/packaging costs, clothing tags, and alteration expenses.',
      },
      {
        question: 'How does Tankhor divide freight costs across different clothing items?',
        answer: 'You can choose between value-based allocation (higher cost items absorb proportional freight) or unit-based allocation (equal share per garment).',
      },
      {
        question: 'Does this affect tax and financial accounting reports?',
        answer: 'Yes! Incorporating true landed costs ensures accurate Cost of Goods Sold (COGS) reporting, preventing overreported taxable profit.',
      },
    ],
    relatedSlugs: ['apparel-inventory', 'clothing-accounting', 'apparel-manufacturing', 'apparel-analytics'],
  },
  {
    slug: 'apparel-analytics',
    id: 'apparel-analytics',
    targetKeyword: 'Apparel Retail Analytics & Inventory Turn',
    titleEn: 'Fashion Retail Analytics & Inventory Turnover',
    subtitle: 'Identify top-performing colors, dead stock risks, and seasonal inventory turnover velocity.',
    metaTitle: 'Apparel Retail Analytics & SKU Sell-Through Software | Tankhor',
    metaDescription: 'Specialized fashion retail analytics and inventory turnover engine. Track top-selling colors, size sell-through rates, and eliminate dead stock. Try Tankhor.',
    lsiKeywords: [
      'Apparel Retail Analytics',
      'Fashion Sell-Through Rate',
      'Clothing Inventory Turnover',
      'Dead Stock Identification',
      'Boutique Sales Reports',
    ],
    category: 'analytics',
    categoryLabel: 'Retail Analytics',
    badge: 'Fashion Business Intelligence',
    heroHeadline: 'Fashion Business Intelligence & Sell-Through Analytics Engine',
    heroDescription:
      'Make data-backed buying decisions. Discover which colors and size curves sell out in days and which remain stuck on racks. Maximize retail inventory turnover and eliminate dead stock before end-of-season markdowns.',
    competitiveAdvantages: [
      {
        title: 'Color & Size Sell-Through Velocity',
        description: 'Detailed analytics on which colorways (e.g. Emerald vs Beige) and sizes achieve rapid sell-through across your stores.',
        iconName: 'PieChart',
        highlight: 'Sell-Through Velocity',
      },
      {
        title: 'Early Dead Stock Detection Alerts',
        description: 'Identify slow-moving models past 45 days on rack to launch flash promotions before garments become obsolete.',
        iconName: 'Clock',
        highlight: 'Liquidate Dead Stock',
      },
      {
        title: 'Top-Selling Brands & Designer Rankings',
        description: 'Compare revenue, gross margin, and return frequency across vendors and manufacturing workshops.',
        iconName: 'Trophy',
        highlight: 'Supplier Scorecard',
      },
      {
        title: 'Seasonal Demand & Reorder Forecasts',
        description: 'Predict exact reorder quantities for next season based on historical sales velocity and seasonal peaks.',
        iconName: 'LineChart',
        highlight: 'Predictive Purchasing',
      },
    ],
    highlights: [
      'Interactive visual graphs: revenue over time, margin distribution, and category breakdowns',
      'Cashier sales performance rankings and commission calculations',
      'Hourly sales heatmaps to optimize boutique staff scheduling during peak traffic hours',
      'Instant CSV/Excel exports for financial analysts and store owners',
    ],
    keyBenefits: [
      {
        title: 'Eliminate Dead Capital',
        description: 'Free up tied-up retail capital by identifying and liquidating stagnant stock early.',
        stat: '-35% Dead Stock',
      },
      {
        title: 'Smarter Pre-Season Purchasing',
        description: 'Reorder only what actually sells, aligning size curves with real customer buying habits.',
        stat: 'High-ROI Buys',
      },
      {
        title: 'Higher Annual Inventory Turnover',
        description: 'Increase annual inventory turnover cycles from 3x to 6x for dramatic revenue growth.',
        stat: '2x Inventory Turn',
      },
    ],
    interactiveDemoType: 'analytics-turnover',
    faqs: [
      {
        question: 'What is a healthy sell-through rate for clothing boutiques?',
        answer: 'Most successful apparel retailers target a 70% to 80% sell-through rate within 6 to 8 weeks before introducing seasonal markdowns. Tankhor monitors this automatically.',
      },
      {
        question: 'Can Tankhor show sales by specific time of day?',
        answer: 'Yes! The hourly traffic heatmap highlights peak store shopping hours, helping you optimize cashier and sales floor staffing.',
      },
      {
        question: 'Can I view performance per sales representative?',
        answer: 'Yes, Tankhor tracks sales volume and gross profit per cashier/sales clerk to streamline monthly commission payouts.',
      },
    ],
    relatedSlugs: ['clothing-accounting', 'apparel-inventory', 'landed-cost', 'treasury-and-cheques'],
  },
  {
    slug: 'treasury-and-cheques',
    id: 'treasury-and-cheques',
    targetKeyword: 'Cash Flow & Treasury Ledger for Retail',
    titleEn: 'Retail Cash Flow & Treasury Ledger System',
    subtitle: 'Automated due date alerts, cash registers, bank reconciliations, and wholesale supplier terms.',
    metaTitle: 'Retail Cash Flow & Treasury Ledger Software for Boutiques | Tankhor',
    metaDescription: 'Manage store registers, bank deposits, supplier credit terms, and cash flow with Tankhor treasury module. Real-time cash visibility for fashion businesses.',
    lsiKeywords: [
      'Retail Cash Flow Software',
      'Boutique Treasury Management',
      'Store Cash Register Drawer',
      'Fashion Vendor Due Dates',
      'Retail Payment Reconciliation',
    ],
    category: 'finance',
    categoryLabel: 'Cash Flow & Treasury',
    badge: 'Retail Treasury Control',
    heroHeadline: 'Boutique Treasury, Cash Drawer & Supplier Cash Flow Ledger',
    heroDescription:
      'Take complete command of store liquidity. Manage cashier drawer balances, bank account reconciliations, incoming/outgoing promissory notes, and wholesale supplier credit terms with zero stress.',
    competitiveAdvantages: [
      {
        title: 'Automated Payment Due Date Notifications',
        description: 'Never miss an upcoming supplier payment or promissory note with smart 3-day and 7-day advance calendar alerts.',
        iconName: 'CreditCard',
        highlight: 'Zero Missed Deadlines',
      },
      {
        title: 'Cashier Drawer Cash Float Audits',
        description: 'Reconcile opening cash floats, mid-day petty cash payouts, and closing cash balances per register shift.',
        iconName: 'Wallet',
        highlight: 'Zero Cash Discrepancies',
      },
      {
        title: 'Multi-Bank & Card Terminal Reconciliations',
        description: 'Track card settlements across merchant bank accounts with real-time deposit verifications.',
        iconName: 'BellRing',
        highlight: 'Instant Reconciliation',
      },
      {
        title: 'Comprehensive Cash Flow Projections',
        description: 'Forecast upcoming 30-day liquidity based on scheduled vendor payments and expected customer receivables.',
        iconName: 'Coins',
        highlight: '30-Day Liquidity View',
      },
    ],
    highlights: [
      'Separate tracking for store petty cash, primary bank accounts, and merchant card terminals',
      'Digital voucher attachments (scanned invoices, receipts, and deposit slips)',
      'Multi-currency ledger support (USD, EUR, GBP, AED, CAD, TRY)',
      'Bank status lifecycle: Received, Deposited, Cleared, Returned, or Voided',
    ],
    keyBenefits: [
      {
        title: 'Total Peace of Mind on Vendor Payments',
        description: 'Eliminate penalty fees and maintain sterling supplier relationships with automated payment reminders.',
        stat: '100% On-Time Terms',
      },
      {
        title: 'Zero Register Cash Discrepancies',
        description: 'Keep cashier shifts fully accountable with structured opening and closing balance counts.',
        stat: 'Balanced Drawers',
      },
      {
        title: 'Clear Working Capital Visibility',
        description: 'Always know your exact disposable cash balance before placing large seasonal collection orders.',
        stat: 'Transparent Cash',
      },
    ],
    interactiveDemoType: 'sayadi-cheques',
    faqs: [
      {
        question: 'Can I track payments made in foreign currencies for imported fabrics or collections?',
        answer: 'Yes! Tankhor supports multi-currency accounts and records current exchange rates for overseas suppliers and freight forwarders.',
      },
      {
        question: 'How does Tankhor assist with cashier shift handovers?',
        answer: 'At the end of each shift, the cashier enters physical cash counts. Tankhor compares this with recorded register receipts, highlighting any variance instantly.',
      },
      {
        question: 'Can I track payment terms and post-dated cheques?',
        answer: 'Yes, Tankhor includes a full promissory note and check lifecycle manager with status tracking and advance due-date reminders.',
      },
    ],
    relatedSlugs: ['clothing-accounting', 'financial-integrations', 'apparel-analytics', 'landed-cost'],
  },
  {
    slug: 'financial-integrations',
    id: 'financial-integrations',
    targetKeyword: 'Accounting ERP Bridges & Automated Tax',
    titleEn: 'Accounting ERP Bridges & Automated Sales Tax',
    subtitle: 'Standardized double-entry export bridges, automated retail sales tax, and corporate ERP sync.',
    metaTitle: 'Accounting ERP Bridges & Automated Sales Tax Software | Tankhor',
    metaDescription: 'Export clean double-entry accounting journals from Tankhor to QuickBooks, Xero, SAP, Sepidar, and Holo. Automated VAT & retail sales tax reporting.',
    lsiKeywords: [
      'Accounting Software Bridges',
      'QuickBooks Fashion POS Export',
      'Xero Apparel Integration',
      'Automated Retail Sales Tax',
      'Apparel Double-Entry Journals',
    ],
    category: 'finance',
    categoryLabel: 'Accounting Integrations',
    badge: 'Enterprise Financial Bridge',
    heroHeadline: 'Accounting ERP Export Bridges & Automated Retail Sales Tax',
    heroDescription:
      'Seamlessly connect high-speed fashion floor sales with your central corporate finance software. Export balanced double-entry journals, sales tax ledgers, and inventory valuations to QuickBooks, Xero, SAP, Sepidar, and Holo with zero manual data entry.',
    competitiveAdvantages: [
      {
        title: 'One-Click Double-Entry Journal Exports',
        description: 'Export clean, balanced debit/credit vouchers for sales, purchase returns, and cost of goods sold ready for standard financial ERPs.',
        iconName: 'ArrowLeftRight',
        highlight: 'One-Click Balance',
      },
      {
        title: 'Automated VAT & Retail Sales Tax Calculation',
        description: 'Automatically compute regional sales taxes (VAT/GST) with ready-to-file periodic tax summaries.',
        iconName: 'FileSpreadsheet',
        highlight: 'Audit-Proof Tax',
      },
      {
        title: 'Standard Corporate ERP Compatibility',
        description: 'Pre-formatted export templates for QuickBooks, Xero, Excel, Sepidar, and Holo to make your external accountant love you.',
        iconName: 'ShieldCheck',
        highlight: 'Ready for Accountants',
      },
      {
        title: 'Complete Audit Trail & Data Security',
        description: 'Every transaction is timestamped with user ID, preventing altered receipts and ensuring strict financial compliance.',
        iconName: 'Sparkles',
        highlight: 'Immutable Records',
      },
    ],
    highlights: [
      'Eliminate duplicate bookkeeping between store floor registers and headquarter finance teams',
      'Standardized chart of accounts mapping customized to your company ledger structure',
      'Periodic sales tax export summaries ready for electronic submission',
      'Safe local SQLite backup with encrypted cloud synchronization for multi-store chains',
    ],
    keyBenefits: [
      {
        title: 'Save Hundreds of Accounting Hours',
        description: 'Eliminate painful manual spreadsheet re-entry at the end of every fiscal month or quarter.',
        stat: '90% Less Manual Entry',
      },
      {
        title: 'Zero Discrepancy with Tax Authorities',
        description: 'Deliver precise, audit-ready sales tax reports with transparent calculation receipts.',
        stat: '100% Compliant',
      },
      {
        title: 'Seamless Collaboration with Bookkeepers',
        description: 'Hand clean Excel/CSV journal files to your external CPA in minutes.',
        stat: 'Happy Accountants',
      },
    ],
    interactiveDemoType: 'financial-export',
    faqs: [
      {
        question: 'Which corporate accounting systems can Tankhor export data to?',
        answer: 'Tankhor exports standardized journals formatted for QuickBooks, Xero, Excel, SAP, Sepidar, and Holo.',
      },
      {
        question: 'Does Tankhor support automated VAT / sales tax calculation?',
        answer: 'Yes! You can configure regional sales tax rates (e.g. 10% VAT, 8.25% state tax) and generate periodic summaries ready for official filing.',
      },
      {
        question: 'Can our accountant access records without coming to the physical store?',
        answer: 'Yes, with Tankhor Cloud Pro, accountants can securely log in via any web browser at my.tankhor.com and download export sheets remotely.',
      },
    ],
    relatedSlugs: ['clothing-accounting', 'treasury-and-cheques', 'landed-cost', 'apparel-analytics'],
  },
];

export function getFeatureBySlugEn(slug: string): FeatureDetailEn | undefined {
  return featuresListEn.find((f) => f.slug === slug);
}

export function getAllFeatureSlugsEn(): string[] {
  return featuresListEn.map((f) => f.slug);
}
