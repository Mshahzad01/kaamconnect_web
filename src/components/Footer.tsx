import Link from "next/link";
import { site, categories } from "@/lib/site";
import Logo from "./Logo";
import { Mail, Phone, MapPin, ShieldCheck, FileText, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-line/80 bg-white pt-16 pb-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand Col */}
          <div className="lg:col-span-2">
            <Logo size="lg" />
            <p className="mt-4 max-w-sm text-sm text-slate-600 leading-relaxed">
              {site.tagline} ({site.nameUrdu}) — پاکستان کا بااعتماد پلیٹ فارم جہاں سے آپ باآسانی اپنے قریبی مصدقہ اور ہنر مند افراد سے براہ راست رابطہ کر سکتے ہیں۔
            </p>
            <div className="mt-6 flex flex-col gap-2.5 text-sm text-slate-600">
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-2 hover:text-brand-600 transition"
              >
                <Mail className="size-4 text-brand-600" />
                {site.email}
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="size-4 text-brand-600" />
                Available across all major cities of Pakistan
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-ink text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-600">
              <li>
                <Link href="/#features" className="hover:text-brand-600 transition">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/#how-it-works" className="hover:text-brand-600 transition">
                  How it Works
                </Link>
              </li>
              <li>
                <Link href="/#categories" className="hover:text-brand-600 transition">
                  Explore Categories
                </Link>
              </li>
              <li>
                <Link href="/#for-workers" className="hover:text-brand-600 transition">
                  Join as Worker
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-brand-600 transition">
                  Frequently Asked Questions
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Categories */}
          <div>
            <h4 className="font-display font-semibold text-ink text-sm uppercase tracking-wider">
              Popular Services
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-600">
              {categories.slice(0, 5).map((cat) => (
                <li key={cat.id}>
                  <Link href="/#categories" className="hover:text-brand-600 transition">
                    {cat.name} ({cat.urdu})
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & App Links */}
          <div>
            <h4 className="font-display font-semibold text-ink text-sm uppercase tracking-wider">
              Legal & Support
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-600">
              <li>
                <Link href="/privacy-policy" className="hover:text-brand-600 transition flex items-center gap-1.5">
                  <ShieldCheck className="size-4 text-brand-600" />
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-brand-600 transition flex items-center gap-1.5">
                  <FileText className="size-4 text-brand-600" />
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-600 transition flex items-center gap-1.5">
                  <Phone className="size-4 text-brand-600" />
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-line/80 pt-6 flex flex-col items-center justify-between gap-4 sm:flex-row text-xs text-slate-500">
          <p>© 2026 {site.name}. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with pride for Pakistan <Heart className="size-3 text-red-500 fill-red-500" />
          </p>
        </div>
      </div>
    </footer>
  );
}
