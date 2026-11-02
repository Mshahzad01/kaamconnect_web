import type { Metadata } from "next";
import Link from "next/link";
import { FileText, ArrowLeft, Mail, AlertCircle } from "lucide-react";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms and conditions for using the KaamConnect application and services.",
};

export default function TermsPage() {
  return (
    <div className="pt-28 pb-20 bg-canvas min-h-screen">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-brand-600 hover:text-brand-700 mb-6 transition"
        >
          <ArrowLeft className="size-4" /> Back to Home
        </Link>

        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-line shadow-sm prose-legal">
          <div className="flex items-center gap-3 border-b border-line pb-6 mb-8">
            <div className="p-3 bg-brand-50 rounded-2xl text-brand-600">
              <FileText className="size-8" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-display font-bold text-ink">
                Terms of Service
              </h1>
              <p className="text-sm text-slate-500 mt-1">
                Effective date: {site.legalUpdated} | KaamConnect Pakistan
              </p>
            </div>
          </div>

          <div className="space-y-6 text-slate-700 leading-relaxed text-sm sm:text-base">
            <section>
              <h2 className="text-lg font-bold text-ink mb-2">1. Agreement to Terms</h2>
              <p>
                By downloading, accessing, or using the KaamConnect mobile application or website, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, please refrain from using the platform.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-ink mb-2">2. Nature of the Platform</h2>
              <p>
                KaamConnect is a skilled worker marketplace connecting clients directly with independent technicians, masons, electricians, and tradespeople across Pakistan. KaamConnect is not an employer or direct contractor. All negotiations, job arrangements, and payments occur directly between the client and the worker.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-ink mb-2">3. Worker Accounts and CNIC Verification</h2>
              <p>
                Workers must provide authentic identity information (CNIC, phone number, and experience details). Accounts providing false or fraudulent documents will be permanently suspended. Verification badges indicate document review by admin, but clients are advised to exercise standard due diligence.
              </p>
            </section>

            <section className="bg-amber-50/70 p-5 rounded-2xl border border-amber-200 flex items-start gap-3">
              <AlertCircle className="size-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-amber-900 text-sm">Community Standards & Fair Dealings</h3>
                <p className="text-xs sm:text-sm text-amber-800 mt-1">
                  Harassment, abusive communication, or payment defaults will result in immediate termination of account privileges on KaamConnect.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-bold text-ink mb-2">4. Disclaimers and Liability</h2>
              <p>
                KaamConnect provides the directory service &quot;as is&quot; without warranties of any kind. Users negotiate rates and service quality independently.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-ink mb-2">5. Inquiries</h2>
              <p>
                If you have questions regarding these terms, contact us at:{" "}
                <a href={`mailto:${site.email}`} className="text-brand-600 font-semibold hover:underline">
                  {site.email}
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
