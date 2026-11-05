"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, Download } from "lucide-react";
import Logo from "./Logo";
import { navLinks } from "@/lib/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-line/80 bg-white/80 shadow-[0_8px_30px_-12px_rgb(13_71_161/0.18)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8">
        <Logo />

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="rounded-full px-4 py-2 text-[0.94rem] font-medium text-slate-600 transition-colors hover:bg-brand-50 hover:text-brand-700"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Link
            href="/#download"
            className="hidden items-center gap-2 rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-600/25 transition-all hover:-translate-y-0.5 hover:bg-brand-700 hover:shadow-brand-700/30 sm:inline-flex"
          >
            <Download className="size-4" />
            Get the App
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid size-11 place-items-center rounded-full text-ink transition hover:bg-brand-50 lg:hidden"
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </nav>

      {/* mobile sheet */}
      <div
        className={`overflow-hidden transition-[max-height,opacity] duration-300 lg:hidden ${
          open ? "max-h-[calc(100dvh-72px)] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="space-y-1 border-t border-line/70 bg-white px-5 pb-6 pt-3">
          {navLinks.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-2xl px-4 py-3.5 text-base font-medium text-ink hover:bg-brand-50"
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li className="pt-2">
            <Link
              href="/#download"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 rounded-2xl bg-brand-600 px-5 py-3.5 font-semibold text-white"
            >
              <Download className="size-5" />
              Download KaamConnect PAK
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
