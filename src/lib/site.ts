/**
 * Central site configuration.
 * Update store links / contact details here and they propagate everywhere
 * (landing page, footer, contact page, legal pages, metadata).
 */
export const site = {
  name: "KaamConnect",
  nameUrdu: "کام کنیکٹ",
  tagline: "Pakistan's Skilled Worker Marketplace",
  taglineUrdu: "ہنر مند، بااعتماد اور باوقار روزگار",
  description:
    "KaamConnect connects customers with verified electricians, plumbers, masons, carpenters, painters, AC technicians and 18+ skilled trades across Pakistan. Search by city, check ratings, and contact workers directly on Call or WhatsApp. No middlemen, no commission.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://kaamconnect.pk",
  email: "kammconnect@gmail.com",
  phone: "03272092344",
  phoneFormatted: "0327 2092344",
  // Set these once the app is live on the stores
  playStoreUrl: process.env.NEXT_PUBLIC_PLAY_STORE_URL ?? "#download",
  appStoreUrl: process.env.NEXT_PUBLIC_APP_STORE_URL ?? "#download",
  // WhatsApp support number in international format, e.g. "923272092344"
  whatsapp: process.env.NEXT_PUBLIC_SUPPORT_WHATSAPP ?? "923272092344",
  country: "Pakistan",
  legalUpdated: "November 2, 2026",
} as const;

export const navLinks = [
  { href: "/#features", label: "Features" },
  { href: "/#how-it-works", label: "How it works" },
  { href: "/#categories", label: "Categories" },
  { href: "/#for-workers", label: "For Workers" },
  { href: "/#faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
] as const;

export type Category = {
  id: string;
  name: string;
  urdu: string;
};

/** Mirrors lib/core/constants/seed_categories.dart from the mobile app */
export const categories: Category[] = [
  { id: "civil_engineers", name: "Civil Engineers", urdu: "سول انجینئرز" },
  { id: "architects", name: "Architects", urdu: "آرکیٹیکٹس" },
  { id: "mistri_mason", name: "Mistri / Mason", urdu: "مستری / راج مستری" },
  { id: "general_mazdoor", name: "General Mazdoor", urdu: "عام مزدور / ہیلپر" },
  { id: "electricians", name: "Electricians", urdu: "الیکٹریشن" },
  { id: "plumbers", name: "Plumbers", urdu: "پلمبر" },
  { id: "painters", name: "Painters", urdu: "پینٹرز / رنگ ساز" },
  { id: "carpenters", name: "Carpenters", urdu: "بڑھئی / کارپینٹر" },
  { id: "tile_installers", name: "Tile Installers", urdu: "ٹائل ماربل انسٹالر" },
  { id: "welders", name: "Welders", urdu: "ویلڈرز" },
  { id: "ac_technicians", name: "AC Technicians", urdu: "اے سی ٹیکنیشنز" },
  { id: "solar_panel_technicians", name: "Solar Technicians", urdu: "سولر پینل ٹیکنیشنز" },
  { id: "glass_aluminium_workers", name: "Glass & Aluminium", urdu: "شیشہ اور ایلومینیم" },
  { id: "wallpaper_installers", name: "Wallpaper Installers", urdu: "وال پیپر انسٹالرز" },
  { id: "construction_contractors", name: "Contractors", urdu: "تعمیراتی ٹھیکیدار" },
  { id: "interior_exterior_workers", name: "Interior & Exterior", urdu: "انٹیریئر اور ایکسٹیریئر" },
  { id: "cleaning_services", name: "Cleaning Services", urdu: "صفائی کی خدمات" },
  { id: "other_skilled_workers", name: "Other Skilled Workers", urdu: "دیگر ہنر مند" },
];

export const categoryImage = (id: string) => `/images/categories/${id}.webp`;
