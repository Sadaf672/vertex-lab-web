"use client";

import { useEffect, useRef, useState } from "react";
import { STATS, type Stat } from "@/lib/site";

function useInView<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return { ref, inView };
}

function StatItem({ stat, active }: { stat: Stat; active: boolean }) {
  const [progress, setProgress] = useState(1);
  const decimals = stat.decimals ?? 0;

  useEffect(() => {
    if (!active || stat.value === undefined) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    let frame = 0;
    const duration = 1400;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - elapsed, 3);
      setProgress(eased);
      if (elapsed < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, stat.value]);

  const value =
    stat.value !== undefined
      ? (stat.value * progress).toFixed(decimals)
      : stat.display;

  return (
    <div className="group relative flex flex-col items-start gap-2 border-white/10 px-5 py-8 sm:px-7 md:border-l md:first:border-l-0">
      <div className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-volt/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <p className="font-display text-4xl font-bold tracking-tight text-white tabular-nums sm:text-5xl">
        {value}
        {stat.suffix ? (
          <span className="text-volt">{stat.suffix}</span>
        ) : null}
      </p>
      <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-silver">
        {stat.label}
      </p>
    </div>
  );
}

export default function StatStrip() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section
      ref={ref}
      aria-label="Performance metrics"
      className="relative border-y border-white/10 bg-panel/60"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-2 divide-y divide-white/10 px-2 md:grid-cols-4 md:divide-y-0 sm:px-4">
        {STATS.map((stat) => (
          <StatItem key={stat.label} stat={stat} active={inView} />
        ))}
      </div>
    </section>
  );
}
