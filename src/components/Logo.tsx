import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  className?: string;
  /** "light" for dark backgrounds */
  tone?: "dark" | "light";
  size?: "sm" | "md" | "lg";
};

const sizes = {
  sm: { box: 30, text: "text-lg" },
  md: { box: 38, text: "text-[1.35rem]" },
  lg: { box: 48, text: "text-2xl" },
};

export function LogoMark({ size = 38, className = "" }: { size?: number; className?: string }) {
  return (
    <Image
      src="/images/brand/logo.png"
      alt="KaamConnect PAK logo"
      width={size}
      height={size}
      className={`object-contain ${className}`}
      priority
    />
  );
}

export default function Logo({ className = "", tone = "dark", size = "md" }: LogoProps) {
  const s = sizes[size];
  return (
    <Link
      href="/"
      aria-label="KaamConnect PAK home"
      className={`group inline-flex items-center gap-2.5 ${className}`}
    >
      {tone === "light" ? (
        <span className="grid place-items-center rounded-xl bg-white p-1.5 shadow-sm">
          <LogoMark size={s.box - 10} />
        </span>
      ) : (
        <LogoMark size={s.box} className="transition-transform duration-300 group-hover:-rotate-6" />
      )}
      <span className={`font-display font-extrabold tracking-tight ${s.text} flex items-center gap-1`}>
        <span>
          <span className={tone === "light" ? "text-white" : "text-brand-800"}>Kaam</span>
          <span className={tone === "light" ? "text-brand-300" : "text-brand-500"}>Connect</span>
        </span>
        <span className="text-[0.62em] font-extrabold px-1.5 py-0.5 rounded-md bg-brand-600 text-white tracking-wider self-center uppercase shadow-xs">
          PAK
        </span>
      </span>
    </Link>
  );
}
