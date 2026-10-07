import Image from "next/image";
import { ArrowUpRight, Mail, Sparkles } from "lucide-react";
import { BRAND, CONTACT, IMAGES } from "@/lib/site";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden"
    >
      <Image
        src={IMAGES.hero}
        alt="Futuristic dark digital abstract mesh with green glow"
        fill
        priority
        sizes="100vw"
        quality={80}
        className="object-cover opacity-45"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/60 to-ink" />
      <div className="absolute inset-0 grid-overlay opacity-70" />
      <div className="absolute -left-40 top-1/4 h-[34rem] w-[34rem] rounded-full bg-volt/20 blur-[140px] animate-aurora" />
      <div className="absolute -right-32 bottom-0 h-[28rem] w-[28rem] rounded-full bg-emerald-500/10 blur-[130px] animate-aurora [animation-delay:-6s]" />

      <div className="relative mx-auto w-full max-w-6xl px-5 pb-24 pt-40 sm:px-6 sm:pt-44">
        <span className="animate-rise inline-flex items-center gap-2.5 rounded-full border border-volt/40 bg-volt/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.26em] text-volt backdrop-blur-md sm:text-xs">
          <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
          Next-Gen Digital &amp; AI Studio
        </span>

        <h1
          className="animate-rise mt-8 max-w-5xl font-display text-[clamp(2.6rem,8.4vw,6.5rem)] font-bold uppercase leading-[0.94] tracking-[-0.03em] text-white [animation-delay:120ms]"
        >
          We build digital{" "}
          <span className="text-volt text-glow">systems</span> that scale.
        </h1>

        <p
          className="animate-rise mt-7 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg [animation-delay:240ms]"
        >
          Vertex Labs engineers custom web applications, luxury brand identity,
          and AI automation for ambitious companies — designed with precision,
          built for velocity, and tuned to outperform.
        </p>

        <div
          className="animate-rise mt-10 flex flex-col gap-4 sm:flex-row sm:items-center [animation-delay:360ms]"
        >
          <a
            href={CONTACT.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2.5 rounded-xl bg-volt px-7 py-4 text-sm font-bold uppercase tracking-[0.16em] text-black transition-all duration-300 hover:shadow-[0_0_45px_-8px_rgba(163,255,18,0.95)]"
          >
            Start a Project
            <ArrowUpRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              aria-hidden="true"
            />
          </a>

          <a
            href={CONTACT.email}
            className="group inline-flex items-center justify-center gap-2.5 rounded-xl border border-white/15 bg-white/5 px-7 py-4 text-sm font-bold uppercase tracking-[0.16em] text-white backdrop-blur-md transition-all duration-300 hover:border-volt/60 hover:text-volt"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            Direct Email
          </a>
        </div>

        <p className="animate-rise mt-12 font-mono text-[11px] uppercase tracking-[0.4em] text-volt/80 [animation-delay:480ms]">
          {BRAND.tagline}
        </p>
      </div>

      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 sm:block">
        <span className="flex h-12 w-7 items-start justify-center rounded-full border border-white/20 p-2">
          <span className="h-2.5 w-1 rounded-full bg-volt animate-float" />
        </span>
      </div>
    </section>
  );
}
