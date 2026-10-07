import { BRAND } from "@/lib/site";

export default function Marquee() {
  const items = Array.from({ length: 8 });

  return (
    <div className="relative overflow-hidden border-b border-white/10 bg-ink py-5">
      <div className="flex w-max animate-marquee motion-reduce:animate-none">
        {[0, 1].map((copy) => (
          <div
            key={copy}
            className="flex shrink-0 items-center"
            aria-hidden={copy === 1}
          >
            {items.map((_, index) => (
              <span
                key={`${copy}-${index}`}
                className="flex items-center gap-6 px-6 font-display text-sm font-semibold uppercase tracking-[0.42em] text-zinc-500 sm:text-base"
              >
                {BRAND.tagline}
                <span className="h-1.5 w-1.5 rounded-full bg-volt" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
