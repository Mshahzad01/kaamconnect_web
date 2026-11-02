import { site } from "@/lib/site";
import { Download } from "lucide-react";

type Props = {
  className?: string;
  tone?: "dark" | "light";
};

function PlayIcon() {
  return (
    <svg viewBox="0 0 512 512" className="size-7" aria-hidden>
      <path fill="#00d7fe" d="M48 59.5v393c0 9 5 16.6 12.3 20.3L288 256 60.3 39.2C53 42.9 48 50.5 48 59.5Z" />
      <path fill="#ffce00" d="m371.2 172.9-83.2 83.1 83.2 83.1 94-53.5c19.7-11.3 19.7-40 0-51.2l-94-61.5Z" />
      <path fill="#00f076" d="M288 256 60.3 39.2c3.5-1.8 7.4-2.7 11.6-2.7 4.9 0 9.6 1.3 13.7 3.7l285.6 132.7L288 256Z" />
      <path fill="#f83a4a" d="M288 256 371.2 339.1 85.6 471.8c-4.1 2.4-8.8 3.7-13.7 3.7-4.2 0-8.1-.9-11.6-2.7L288 256Z" />
    </svg>
  );
}

export default function StoreButtons({ className = "", tone = "dark" }: Props) {
  const base =
    "group inline-flex items-center gap-3.5 rounded-2xl px-6 py-3.5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl";
  const style =
    tone === "dark"
      ? "bg-slate-950 text-white shadow-xl shadow-slate-900/30 hover:bg-black border border-slate-800"
      : "bg-white text-slate-950 shadow-xl shadow-black/15 hover:bg-brand-50 border border-white/50";
      
  return (
    <div className={`flex flex-wrap items-center gap-4 ${className}`}>
      <a href={site.playStoreUrl} className={`${base} ${style}`} aria-label="Get it on Google Play">
        <PlayIcon />
        <span className="flex flex-col text-left leading-none">
          <span className="text-[0.68rem] font-medium uppercase tracking-wider opacity-75">Get it on</span>
          <span className="mt-1 text-lg font-bold tracking-tight">Google Play</span>
        </span>
      </a>

      <a
        href="#features"
        className={`inline-flex items-center gap-2 rounded-2xl px-6 py-3.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 ${
          tone === "dark"
            ? "bg-brand-50 text-brand-700 hover:bg-brand-100 border border-brand-200"
            : "bg-white/15 text-white backdrop-blur-md hover:bg-white/25 border border-white/30"
        }`}
      >
        <Download className="size-4" />
        Explore App Features
      </a>
    </div>
  );
}
