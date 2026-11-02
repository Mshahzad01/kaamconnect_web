import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  PhoneCall,
  Briefcase,
  Star,
  Users,
  Search,
  Sparkles,
  ArrowRight,
  ChevronDown,
  FileCheck,
  MapPin,
  Clock,
  Check,
  Handshake,
  Wrench,
  ThumbsUp,
  Award,
} from "lucide-react";
import IPhone from "@/components/IPhone";
import Reveal from "@/components/Reveal";
import StoreButtons from "@/components/StoreButtons";
import { site, categories, categoryImage } from "@/lib/site";

export default function HomePage() {
  return (
    <div className="overflow-x-hidden">
      {/* ---------------------------------------------------- HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-gradient-to-b from-brand-50/80 via-white to-canvas overflow-hidden">
        {/* Animated Background Gradients & Glow */}
        <div className="absolute top-1/4 -left-32 size-96 rounded-full bg-brand-300/30 blur-3xl pointer-events-none animate-pulse-glow" />
        <div className="absolute top-1/3 -right-32 size-96 rounded-full bg-teal/20 blur-3xl pointer-events-none animate-pulse-glow" />
        <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 text-center lg:text-left">
              <Reveal>
                <div className="inline-flex items-center gap-2 rounded-full border border-brand-200/90 bg-white/95 px-4 py-1.5 shadow-sm mb-6 backdrop-blur-md">
                  <span className="flex size-2 rounded-full bg-teal animate-ping" />
                  <span className="text-xs font-bold text-brand-800 tracking-wide uppercase">
                    Pakistan&apos;s #1 Skilled Worker Network
                  </span>
                </div>
              </Reveal>

              <Reveal delay={100}>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-ink tracking-tight leading-[1.12]">
                  Find Verified Skilled Workers.{" "}
                  <span className="text-gradient">Hire Directly in Minutes.</span>
                </h1>
              </Reveal>

              <Reveal delay={200}>
                <p className="mt-4 text-xl sm:text-2xl font-urdu text-brand-700 font-bold leading-relaxed">
                  ہنر مند، بااعتماد اور باوقار روزگار — پاکستان کا اپنا ہنر مند پلیٹ فارم
                </p>
                <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
                  Connect directly with verified electricians, plumbers, carpenters, masons, and technicians across all cities of Pakistan. Instant Phone Call or WhatsApp contact. No middlemen, no commission fees.
                </p>
              </Reveal>

              <Reveal delay={300}>
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <StoreButtons />
                </div>
              </Reveal>

              <Reveal delay={400}>
                <div className="mt-10 grid grid-cols-3 gap-4 border-t border-line/80 pt-6 text-left max-w-md mx-auto lg:mx-0">
                  <div className="bg-white/60 backdrop-blur-xs p-3 rounded-2xl border border-line/50">
                    <p className="text-2xl sm:text-3xl font-display font-extrabold text-ink">18+</p>
                    <p className="text-xs text-slate-500 font-medium">Trade Categories</p>
                  </div>
                  <div className="bg-white/60 backdrop-blur-xs p-3 rounded-2xl border border-line/50">
                    <p className="text-2xl sm:text-3xl font-display font-extrabold text-brand-600">100%</p>
                    <p className="text-xs text-slate-500 font-medium">CNIC Verified</p>
                  </div>
                  <div className="bg-white/60 backdrop-blur-xs p-3 rounded-2xl border border-line/50">
                    <p className="text-2xl sm:text-3xl font-display font-extrabold text-teal">0%</p>
                    <p className="text-xs text-slate-500 font-medium">Commission</p>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right Mockup Showcase with Interactive Floating Elements */}
            <div className="lg:col-span-5 relative flex justify-center">
              <Reveal delay={200} className="w-full max-w-[340px] sm:max-w-[380px] relative">
                {/* Floating Badge 1 - Verified Worker */}
                <div className="absolute -left-6 top-16 z-40 hidden sm:flex items-center gap-3 bg-white/95 rounded-2xl p-3.5 shadow-2xl border border-brand-100 backdrop-blur-md animate-float">
                  <div className="size-11 rounded-xl bg-brand-50 flex items-center justify-center text-brand-600 shadow-inner">
                    <ShieldCheck className="size-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      <p className="text-xs font-bold text-ink">CNIC Verified</p>
                      <CheckCircle2 className="size-3.5 text-brand-600 fill-brand-100" />
                    </div>
                    <p className="text-[11px] text-slate-500">Government ID Authenticated</p>
                  </div>
                </div>

                {/* Floating Badge 2 - Direct Call */}
                <div className="absolute -right-6 bottom-28 z-40 hidden sm:flex items-center gap-3 bg-white/95 rounded-2xl p-3.5 shadow-2xl border border-emerald-100 backdrop-blur-md animate-float-slow">
                  <div className="size-11 rounded-xl bg-emerald-50 flex items-center justify-center text-whatsapp shadow-inner">
                    <PhoneCall className="size-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-ink">Direct WhatsApp & Call</p>
                    <p className="text-[11px] text-emerald-600 font-semibold">Zero Middlemen</p>
                  </div>
                </div>

                {/* iPhone Frame with Home Screen */}
                <IPhone time="3:11">
                  <Image
                    src="/images/screens/home.webp"
                    alt="KaamConnect App Home Screen"
                    width={720}
                    height={1460}
                    priority
                    quality={90}
                    className="w-full h-full object-cover object-top"
                  />
                </IPhone>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- REAL CONNECTION SHOWCASE (Customer & Worker) */}
      <section className="py-24 bg-white border-y border-line relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual Image */}
            <div className="lg:col-span-6">
              <Reveal>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white group">
                  <Image
                    src="/images/generated/customer_booking_worker.webp"
                    alt="Pakistani customer connecting with verified skilled worker at home"
                    width={1200}
                    height={675}
                    className="w-full h-auto object-cover group-hover:scale-103 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex items-end p-6 sm:p-8">
                    <div className="text-white">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-600/90 text-xs font-semibold backdrop-blur-sm mb-2">
                        <CheckCircle2 className="size-3.5" /> Doorstep Service
                      </span>
                      <h4 className="text-lg sm:text-xl font-bold font-display">
                        Verified Craftsmanship, Right at Your Doorstep
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-200 mt-1">
                        Homeowners booking verified electricians, plumbers, and technicians across Pakistan.
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Explanation & Trust Pillars */}
            <div className="lg:col-span-6">
              <Reveal delay={100}>
                <span className="inline-block rounded-full bg-teal/10 text-teal px-4 py-1.5 text-xs font-bold uppercase tracking-wider mb-3">
                  Direct Human Connection
                </span>
                <h2 className="text-3xl sm:text-4xl font-display font-bold text-ink tracking-tight">
                  No Commissions. No Agents. Just Direct Trust.
                </h2>
                <p className="mt-3 text-slate-600 leading-relaxed font-urdu text-lg">
                  صارف اور کاریگر کا براہ راست رابطہ — بغیر کسی کمیشن یا درمیانی ایجنٹ کے
                </p>
                <p className="mt-3 text-slate-600 leading-relaxed text-sm sm:text-base">
                  Traditional service agencies charge up to 30% cut from hard-working technicians. With KaamConnect, customers hire directly, agree upon fair market pricing, and communicate in their local language.
                </p>

                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-canvas border border-line flex items-start gap-3">
                    <div className="p-2.5 rounded-xl bg-brand-100 text-brand-700 shrink-0">
                      <Handshake className="size-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-ink">Direct Agreement</h4>
                      <p className="text-xs text-slate-500 mt-1">Settle job terms and pricing directly via Call or WhatsApp.</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-canvas border border-line flex items-start gap-3">
                    <div className="p-2.5 rounded-xl bg-teal/10 text-teal shrink-0">
                      <Award className="size-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-ink">Dignified Labor</h4>
                      <p className="text-xs text-slate-500 mt-1">Workers keep 100% of their hard-earned labor income.</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- POPULAR CATEGORIES */}
      <section id="categories" className="py-20 bg-canvas border-b border-line">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block rounded-full bg-brand-50 px-4 py-1.5 text-xs font-semibold text-brand-700 mb-3">
              18+ Skilled Trades
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-ink tracking-tight">
              Popular Service Categories
            </h2>
            <p className="mt-2 text-slate-600 font-urdu text-lg">
              اپنی ضرورت کے مطابق پاکستان کے بہترین اور تصدیق شدہ کاریگر تلاش کریں
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
            {categories.map((cat, idx) => (
              <Reveal key={cat.id} delay={idx * 30}>
                <div className="group relative rounded-2xl border border-line bg-white p-3 sm:p-4 text-center hover:border-brand-300 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300">
                  <div className="relative aspect-4/3 w-full overflow-hidden rounded-xl bg-slate-100 mb-3">
                    <Image
                      src={categoryImage(cat.id)}
                      alt={cat.name}
                      fill
                      sizes="(max-width: 640px) 45vw, (max-width: 1024px) 25vw, 15vw"
                      className="object-cover group-hover:scale-108 transition duration-500"
                    />
                  </div>
                  <h3 className="font-display font-semibold text-xs sm:text-sm text-ink leading-tight">
                    {cat.name}
                  </h3>
                  <p className="mt-1 text-[11px] font-urdu text-brand-600 font-medium">
                    {cat.urdu}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- PROUD SKILLED WORKERS TEAM BANNER */}
      <section className="py-24 bg-white border-b border-line">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <span className="inline-block rounded-full bg-brand-50 px-4 py-1.5 text-xs font-semibold text-brand-700 mb-3">
                Empowering Skilled Pakistan
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-ink tracking-tight">
                Proud Pakistani Tradesmen Ready to Build & Fix
              </h2>
              <p className="mt-3 text-slate-600 leading-relaxed font-urdu text-lg">
                ہمارے ملک کے محنتی، باصلاحیت اور ہنر مند کاریگر اب ایک ہی پلیٹ فارم پر
              </p>
              <p className="mt-3 text-slate-600 leading-relaxed text-sm sm:text-base">
                From electricians and plumbers to masons, painters, and carpenters — KaamConnect provides skilled Pakistani craftsmen a verified digital identity so they can build a career with dignity.
              </p>

              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="size-6 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center shrink-0">
                    <Check className="size-4" />
                  </div>
                  <p className="text-sm text-slate-700 font-medium">NADRA CNIC verification for complete background trust</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="size-6 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center shrink-0">
                    <Check className="size-4" />
                  </div>
                  <p className="text-sm text-slate-700 font-medium">Work portfolio showcase with real previous project photos</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="size-6 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center shrink-0">
                    <Check className="size-4" />
                  </div>
                  <p className="text-sm text-slate-700 font-medium">Genuine customer ratings and reviews from across Pakistan</p>
                </div>
              </div>

              <div className="mt-8 flex gap-4">
                <Link
                  href="/#download"
                  className="inline-flex items-center gap-2 rounded-2xl bg-brand-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-600/25 hover:bg-brand-700 transition"
                >
                  Hire Skilled Workers Now
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2">
              <Reveal>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white group">
                  <Image
                    src="/images/generated/skilled_pakistani_workers_team.webp"
                    alt="Team of proud skilled Pakistani workers"
                    width={1200}
                    height={675}
                    className="w-full h-auto object-cover group-hover:scale-103 transition duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-lg border border-line flex items-center gap-1.5 text-xs font-bold text-brand-700">
                    <Star className="size-4 fill-amber-400 text-amber-400" /> 5.0 Star Rated Professionals
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- HOW IT WORKS */}
      <section id="how-it-works" className="py-24 bg-canvas relative">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block rounded-full bg-brand-100 px-4 py-1.5 text-xs font-semibold text-brand-800 mb-3">
              Simple & Direct Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-ink tracking-tight">
              How KaamConnect Works
            </h2>
            <p className="mt-2 text-slate-600">
              Whether you need work done or want to offer your trade skills, it takes less than 2 minutes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <Reveal delay={100} className="bg-white rounded-3xl p-8 border border-line shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300">
              <div className="size-12 rounded-2xl bg-brand-50 text-brand-600 font-bold font-display text-xl flex items-center justify-center mb-6 shadow-inner">
                1
              </div>
              <h3 className="text-xl font-display font-bold text-ink mb-2">
                Search or Post a Job
              </h3>
              <p className="font-urdu text-sm text-brand-600 font-semibold mb-2">
                کاریگر تلاش کریں یا کام کا اشتہار لگائیں
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Browse rated workers near your location or post your job with requirements, photos, and budget.
              </p>
            </Reveal>

            {/* Step 2 */}
            <Reveal delay={200} className="bg-white rounded-3xl p-8 border border-line shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300">
              <div className="size-12 rounded-2xl bg-brand-50 text-brand-600 font-bold font-display text-xl flex items-center justify-center mb-6 shadow-inner">
                2
              </div>
              <h3 className="text-xl font-display font-bold text-ink mb-2">
                Connect Directly
              </h3>
              <p className="font-urdu text-sm text-brand-600 font-semibold mb-2">
                فون کال یا واٹس ایپ کے ذریعے براہ راست بات کریں
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Call or message the worker directly on WhatsApp. Discuss scope, negotiate rates, and schedule work.
              </p>
            </Reveal>

            {/* Step 3 */}
            <Reveal delay={300} className="bg-white rounded-3xl p-8 border border-line shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300">
              <div className="size-12 rounded-2xl bg-teal/10 text-teal font-bold font-display text-xl flex items-center justify-center mb-6 shadow-inner">
                3
              </div>
              <h3 className="text-xl font-display font-bold text-ink mb-2">
                Get Work Done & Review
              </h3>
              <p className="font-urdu text-sm text-teal font-semibold mb-2">
                کام کروائیں اور ریٹنگ و ریویو دیں
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Pay the worker directly after completion. Rate their performance to help maintain high standards for Pakistan.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- TRUST & HANDSHAKE SHOWCASE */}
      <section className="py-24 bg-white border-y border-line">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <Reveal>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white group">
                  <Image
                    src="/images/generated/worker_handshake_happy_customer.webp"
                    alt="Respectful handshake between technician and Pakistani homeowner"
                    width={1200}
                    height={675}
                    className="w-full h-auto object-cover group-hover:scale-103 transition duration-700"
                  />
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-line flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-ink">Satisfaction Guaranteed</p>
                      <p className="text-[11px] text-slate-500">Transparent dealings between real people</p>
                    </div>
                    <ThumbsUp className="size-5 text-brand-600" />
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-6">
              <Reveal delay={100}>
                <span className="inline-block rounded-full bg-brand-50 px-4 py-1.5 text-xs font-semibold text-brand-700 mb-3">
                  Peace of Mind
                </span>
                <h2 className="text-3xl sm:text-4xl font-display font-bold text-ink tracking-tight">
                  Transparent Dealings & Community Trust
                </h2>
                <p className="mt-3 text-slate-600 leading-relaxed font-urdu text-lg">
                  مکمل اطمینان، باہمی احترام اور محفوظ تجربہ
                </p>
                <p className="mt-3 text-slate-600 leading-relaxed text-sm sm:text-base">
                  When you invite someone to your home or office, trust is everything. KaamConnect ensures you know who you are hiring, where they are based, and what other clients have said about their work.
                </p>

                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="size-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="size-4" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-ink text-sm">Clear Scope of Work</h4>
                      <p className="text-xs text-slate-500">Agree upfront before work begins to ensure zero surprises.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="size-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="size-4" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-ink text-sm">Review & Rate Post Job</h4>
                      <p className="text-xs text-slate-500">Your honest feedback keeps the community accountable and rewarded.</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- APP SPLASH / FEATURE */}
      <section id="features" className="py-24 bg-canvas overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual Screen on Left */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-[320px] sm:max-w-[350px]">
                <IPhone time="3:13" statusTone="dark" showHomeBar>
                  <Image
                    src="/images/screens/splash.webp"
                    alt="KaamConnect Splash Screen"
                    width={720}
                    height={1460}
                    quality={90}
                    className="w-full h-full object-cover"
                  />
                </IPhone>
              </div>
            </div>

            {/* Content on Right */}
            <div className="lg:col-span-7">
              <span className="inline-block rounded-full bg-brand-50 px-4 py-1.5 text-xs font-semibold text-brand-700 mb-3">
                Built For Pakistan
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-ink tracking-tight">
                Designed for Easy Use in Urdu and English
              </h2>
              <p className="mt-3 text-slate-600 leading-relaxed">
                KaamConnect is completely bilingual with full RTL support for Urdu and LTR for English. Fast, lightweight, and works seamlessly even on low-speed mobile internet.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="size-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-1">
                    <Check className="size-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-ink text-sm">Full Urdu & English Support (اردو اور انگریزی)</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Switch instantly between Urdu and English with a single tap.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="size-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-1">
                    <Check className="size-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-ink text-sm">Instant Phone & WhatsApp Connect</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Contact workers directly with your preference. No hidden charges or commissions.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="size-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-1">
                    <Check className="size-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-ink text-sm">Verified Badges & Real Client Reviews</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Workers submit CNIC and proof of skill. Authentic ratings from genuine Pakistani customers.</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  href="/#download"
                  className="inline-flex items-center gap-2 rounded-2xl bg-brand-600 px-6 py-3.5 text-sm font-semibold text-white shadow-md hover:bg-brand-700 transition"
                >
                  Download KaamConnect App <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- FOR WORKERS SECTION */}
      <section id="for-workers" className="py-20 bg-brand-900 text-white relative">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block rounded-full bg-brand-800 text-brand-200 px-4 py-1.5 text-xs font-semibold mb-4">
                کاریگروں اور ہنر مندوں کے لیے
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight">
                Are You a Skilled Worker? Grow Your Daily Inquiries
              </h2>
              <p className="mt-4 text-brand-200 text-lg leading-relaxed font-urdu">
                اگر آپ الیکٹریشن، پلمبر، مستری، پینٹر یا کسی بھی ہنر کے ماہر ہیں تو آج ہی کام کنیکٹ پر اپنی پروفائل بنائیں اور اپنے علاقے سے براہ راست گاہک حاصل کریں۔
              </p>

              <ul className="mt-6 space-y-3 text-sm text-brand-100">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="size-5 text-teal" />
                  <span>Receive customer calls and WhatsApp inquiries daily</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="size-5 text-teal" />
                  <span>Get the Verified Worker Badge by uploading your CNIC</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="size-5 text-teal" />
                  <span>Upload work photos to build a credible digital portfolio</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="size-5 text-teal" />
                  <span>100% Free to join — keep all your earnings</span>
                </li>
              </ul>

              <div className="mt-8">
                <Link
                  href="/#download"
                  className="inline-flex items-center gap-2 rounded-2xl bg-white text-brand-900 font-bold px-6 py-3.5 shadow-lg hover:bg-brand-50 transition"
                >
                  Join as a Skilled Worker
                </Link>
              </div>
            </div>

            <div className="bg-brand-800/60 rounded-3xl p-8 border border-brand-700">
              <h3 className="font-display font-bold text-xl mb-4 text-white">
                3 Steps to Start Earning:
              </h3>
              <div className="space-y-4 text-sm">
                <div className="bg-brand-900/60 rounded-2xl p-4 border border-brand-700/60">
                  <p className="font-bold text-teal">Step 1: Download & Register</p>
                  <p className="text-brand-200 text-xs mt-1">Register using your Pakistani phone number via 6-digit OTP.</p>
                </div>
                <div className="bg-brand-900/60 rounded-2xl p-4 border border-brand-700/60">
                  <p className="font-bold text-teal">Step 2: Create Worker Profile & Upload CNIC</p>
                  <p className="text-brand-200 text-xs mt-1">Select your skills, city, and upload CNIC front/back for verification.</p>
                </div>
                <div className="bg-brand-900/60 rounded-2xl p-4 border border-brand-700/60">
                  <p className="font-bold text-teal">Step 3: Receive Calls & Start Working</p>
                  <p className="text-brand-200 text-xs mt-1">Get listed on top of local searches and receive inquiries from customers.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- FAQ SECTION */}
      <section id="faq" className="py-20 bg-canvas border-t border-line">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="text-center max-w-xl mx-auto mb-14">
            <span className="inline-block rounded-full bg-brand-50 px-4 py-1.5 text-xs font-semibold text-brand-700 mb-3">
              Common Questions
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-ink tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="mt-2 text-slate-600 font-urdu">
              عام طور پر پوچھے جانے والے سوالات
            </p>
          </div>

          <div className="space-y-4">
            <details className="group bg-white rounded-2xl p-5 border border-line shadow-xs">
              <summary className="flex cursor-pointer items-center justify-between font-display font-bold text-ink text-base">
                Is KaamConnect free to use for customers?
                <ChevronDown className="size-5 text-slate-400 group-open:rotate-180 transition duration-200" />
              </summary>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                Yes! KaamConnect is completely free for customers looking to find skilled workers or post jobs. You contact and pay the worker directly without any middleman fees.
              </p>
            </details>

            <details className="group bg-white rounded-2xl p-5 border border-line shadow-xs">
              <summary className="flex cursor-pointer items-center justify-between font-display font-bold text-ink text-base">
                How are workers verified on KaamConnect?
                <ChevronDown className="size-5 text-slate-400 group-open:rotate-180 transition duration-200" />
              </summary>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                Workers submit their valid Pakistani CNIC (front and back) and relevant trade experience credentials. Our admin team verifies their identification documents before issuing the blue Verified Worker badge.
              </p>
            </details>

            <details className="group bg-white rounded-2xl p-5 border border-line shadow-xs">
              <summary className="flex cursor-pointer items-center justify-between font-display font-bold text-ink text-base">
                Which cities in Pakistan are covered?
                <ChevronDown className="size-5 text-slate-400 group-open:rotate-180 transition duration-200" />
              </summary>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                KaamConnect is active across all 7 provinces and administrative territories of Pakistan, including Lahore, Karachi, Islamabad, Rawalpindi, Multan, Faisalabad, Peshawar, Quetta, and dozens more.
              </p>
            </details>

            <details className="group bg-white rounded-2xl p-5 border border-line shadow-xs">
              <summary className="flex cursor-pointer items-center justify-between font-display font-bold text-ink text-base">
                Can I switch the app language to Urdu?
                <ChevronDown className="size-5 text-slate-400 group-open:rotate-180 transition duration-200" />
              </summary>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                Yes! The KaamConnect mobile app has native bilingual support. You can switch to Urdu at any time from the top bar or profile settings, and the entire interface seamlessly adapts to Urdu RTL.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- DOWNLOAD CTA SECTION */}
      <section id="download" className="py-24 bg-gradient-to-tr from-brand-800 via-brand-600 to-sky text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 size-80 rounded-full bg-white/10 blur-2xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 size-80 rounded-full bg-brand-900/40 blur-2xl pointer-events-none" />

        <div className="relative mx-auto max-w-5xl px-5 sm:px-8 text-center">
          <span className="inline-block rounded-full bg-white/20 px-4 py-1.5 text-xs font-semibold mb-4 backdrop-blur-xs">
            Start Today
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight">
            Download KaamConnect Now
          </h2>
          <p className="mt-4 text-brand-100 max-w-2xl mx-auto font-urdu text-xl font-bold">
            پاکستان کے ہنر مند افراد اور بااعتماد خدمات تک باآسانی رسائی حاصل کریں
          </p>
          <p className="mt-2 text-sm sm:text-base text-brand-100/90 max-w-xl mx-auto">
            Available on Google Play. Connect with local electricians, plumbers, masons, and technicians today.
          </p>

          <div className="mt-8 flex justify-center">
            <StoreButtons tone="light" />
          </div>
        </div>
      </section>
    </div>
  );
}
