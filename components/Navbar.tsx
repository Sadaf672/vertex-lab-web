"use client";

import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { BRAND, CONTACT, NAV_LINKS } from "@/lib/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 sm:pt-5">
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-2xl px-4 py-3 transition-all duration-500 sm:px-5 ${
          scrolled || open
            ? "glass shadow-[0_20px_60px_-30px_rgba(163,255,18,0.35)]"
            : "border border-transparent bg-transparent"
        }`}
      >
        <a href="#top" className="group flex items-center gap-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-volt animate-dot" />
          <span className="font-display text-sm font-bold tracking-[0.28em] text-white sm:text-base">
            VERTEX&nbsp;LABS
          </span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="link-underline text-[13px] font-medium uppercase tracking-[0.16em] text-zinc-400 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={CONTACT.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="group hidden items-center gap-2 rounded-xl bg-volt px-4 py-2.5 text-[13px] font-semibold uppercase tracking-[0.14em] text-black transition-all duration-300 hover:shadow-[0_0_30px_-6px_rgba(163,255,18,0.9)] sm:inline-flex"
          >
            Get in Touch
            <ArrowUpRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </a>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-colors hover:border-volt/50 hover:text-volt lg:hidden"
          >
            {open ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      <div
        className={`mx-auto mt-2 max-w-6xl overflow-hidden rounded-2xl transition-all duration-300 lg:hidden ${
          open ? "glass max-h-[26rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-1 p-3">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium uppercase tracking-[0.16em] text-zinc-300 transition-colors hover:bg-white/5 hover:text-volt"
              >
                {link.label}
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </li>
          ))}
          <li>
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 flex items-center justify-center rounded-xl bg-volt px-4 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-black"
            >
              Get in Touch
            </a>
          </li>
        </ul>
      </div>

      <span className="sr-only">{BRAND.name}</span>
    </header>
  );
}
