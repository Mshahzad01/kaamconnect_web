import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Lock, FileText, ArrowLeft, Mail, Phone } from "lucide-react";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "KaamConnect Privacy Policy — How we protect and handle your personal data and CNIC verification records.",
};

export default function PrivacyPolicyPage() {
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
              <ShieldCheck className="size-8" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-display font-bold text-ink">
                Privacy Policy
              </h1>
              <p className="text-sm text-slate-500 mt-1">
                Last updated: {site.legalUpdated} | KaamConnect Pakistan
              </p>
            </div>
          </div>

          <div className="space-y-6 text-slate-700 leading-relaxed text-sm sm:text-base">
            <section>
              <h2 className="text-lg font-bold text-ink mb-2">1. Introduction</h2>
              <p>
                KaamConnect (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) operates the KaamConnect mobile application and website. 
                We are dedicated to safeguarding the privacy and security of our users across Pakistan, including customers hiring 
                services and skilled workers offering their craftsmanship.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-ink mb-2">2. Information We Collect</h2>
              <p>To provide a safe, authenticated marketplace, we collect the following information:</p>
              <ul className="list-disc pl-5 space-y-1.5 mt-2">
                <li><strong>Account Information:</strong> Name, Pakistani phone number, and optional email address.</li>
                <li><strong>Worker Verification Data:</strong> Government Computerized National Identity Card (CNIC) front and back images, trade licenses/certifications, and experience details.</li>
                <li><strong>Location Information:</strong> Province, city, and general locality to help match clients with nearby workers.</li>
                <li><strong>Job & Communication Details:</strong> Job postings, ratings, user reviews, and contact preferences.</li>
              </ul>
            </section>

            <section className="bg-brand-50/70 p-5 rounded-2xl border border-brand-100 flex items-start gap-3">
              <Lock className="size-5 text-brand-600 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-brand-900 text-sm">CNIC Security Guarantee</h3>
                <p className="text-xs sm:text-sm text-brand-800 mt-1">
                  Worker CNIC documents are securely encrypted and retained strictly for administrative identity verification to prevent fraud. 
                  <strong> CNICs are never displayed publicly or shared with third parties.</strong>
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-bold text-ink mb-2">3. How We Use Your Information</h2>
              <p>We process your data for the following essential purposes:</p>
              <ul className="list-disc pl-5 space-y-1.5 mt-2">
                <li>Connecting clients with verified local skilled workers.</li>
                <li>Facilitating direct communication via Phone Call and WhatsApp according to user preferences.</li>
                <li>Verifying worker credibility to eliminate scammers and promote trusted work opportunities.</li>
                <li>Sending vital notifications regarding job applications, reviews, and account updates.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-ink mb-2">4. User Privacy & Preferences</h2>
              <p>
                Workers have full control to toggle their availability status (Active / Inactive) and decide whether their phone number is 
                visible to everyone or inquiries arrive via direct in-app links. Users may request account deletion and data removal at any time 
                from within the app settings.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-ink mb-2">5. Contact Support</h2>
              <p>
                If you have questions about our Privacy Policy or your personal data, reach out to our team:
              </p>
              <div className="mt-3 flex flex-wrap gap-4 text-sm font-medium">
                <a href={`mailto:${site.email}`} className="inline-flex items-center gap-1.5 text-brand-600 hover:underline">
                  <Mail className="size-4" /> {site.email}
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
