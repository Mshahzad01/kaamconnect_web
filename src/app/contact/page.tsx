"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, MessageSquare, ArrowLeft, Clock, ShieldCheck } from "lucide-react";
import { site } from "@/lib/site";



export default function ContactPage() {
  return (
    <div className="pt-28 pb-20 bg-canvas min-h-screen">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-brand-600 hover:text-brand-700 mb-6 transition"
        >
          <ArrowLeft className="size-4" /> Back to Home
        </Link>

        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block rounded-full bg-brand-100 px-4 py-1.5 text-xs font-semibold text-brand-700 mb-3">
            Always Here To Help
          </span>
          <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-ink tracking-tight">
            Contact KaamConnect Support
          </h1>
          <p className="mt-3 text-slate-600 font-urdu text-lg">
            ہم سے رابطہ کریں — آپ کے سوالات، تجاویز یا مدد کے لیے ہم حاضر ہیں
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Email Card */}
          <div className="bg-white rounded-3xl p-6 border border-line shadow-sm hover:shadow-md transition">
            <div className="p-3 bg-brand-50 rounded-2xl w-fit text-brand-600 mb-4">
              <Mail className="size-6" />
            </div>
            <h3 className="font-display font-bold text-ink text-lg">Official Email</h3>
            <p className="text-xs text-slate-500 mt-1 mb-4">Direct email inquiries and verification issues</p>
            <a
              href={`mailto:${site.email}`}
              className="text-brand-600 font-semibold text-sm hover:underline block break-all"
            >
              {site.email}
            </a>
          </div>

          {/* Location Card */}
          <div className="bg-white rounded-3xl p-6 border border-line shadow-sm hover:shadow-md transition">
            <div className="p-3 bg-teal/10 rounded-2xl w-fit text-teal mb-4">
              <MapPin className="size-6" />
            </div>
            <h3 className="font-display font-bold text-ink text-lg">Service Coverage</h3>
            <p className="text-xs text-slate-500 mt-1 mb-4">Pan-Pakistan operational network</p>
            <p className="text-slate-700 font-medium text-sm">
              Lahore, Karachi, Islamabad, Rawalpindi, Multan, Faisalabad & all major cities
            </p>
          </div>

          {/* Support Hours Card */}
          <div className="bg-white rounded-3xl p-6 border border-line shadow-sm hover:shadow-md transition">
            <div className="p-3 bg-sky/10 rounded-2xl w-fit text-sky mb-4">
              <Clock className="size-6" />
            </div>
            <h3 className="font-display font-bold text-ink text-lg">Response Time</h3>
            <p className="text-xs text-slate-500 mt-1 mb-4">Support team availability</p>
            <p className="text-slate-700 font-medium text-sm">
              Monday – Saturday: 9:00 AM – 7:00 PM (PKT)
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-line shadow-sm">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-xl sm:text-2xl font-display font-bold text-ink text-center mb-2">
              Send us a Message
            </h2>
            <p className="text-center text-sm text-slate-500 mb-8">
              Fill out the form below and our team will get back to you within 24 hours.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you! Your message has been sent to the KaamConnect support team.");
              }}
              className="space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
                    Your Name / نام
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Muhammad Ali"
                    className="w-full rounded-2xl border border-line bg-canvas px-4 py-3 text-sm text-ink outline-none focus:border-brand-600 focus:bg-white transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
                    Phone Number / فون نمبر
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="0300 1234567"
                    className="w-full rounded-2xl border border-line bg-canvas px-4 py-3 text-sm text-ink outline-none focus:border-brand-600 focus:bg-white transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
                  Email Address / ای میل
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  className="w-full rounded-2xl border border-line bg-canvas px-4 py-3 text-sm text-ink outline-none focus:border-brand-600 focus:bg-white transition"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
                  Message / پیغام
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="How can we help you? (Describe your question or issue)"
                  className="w-full rounded-2xl border border-line bg-canvas px-4 py-3 text-sm text-ink outline-none focus:border-brand-600 focus:bg-white transition resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-semibold py-3.5 px-6 shadow-md shadow-brand-600/25 transition duration-200"
              >
                Send Message / پیغام بھیجیں
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
