import {
  Brain,
  Cloud,
  Code2,
  Layers,
  Terminal,
  Wind,
  type LucideIcon,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { STACK, type StackItem } from "@/lib/site";

const ICONS: Record<StackItem["icon"], LucideIcon> = {
  layers: Layers,
  code: Code2,
  wind: Wind,
  terminal: Terminal,
  brain: Brain,
  cloud: Cloud,
};

export default function Stack() {
  return (
    <section
      id="stack"
      className="relative scroll-mt-28 border-y border-white/10 bg-panel/50 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
          <SectionHeading
            eyebrow="Tech Stack"
            title="Modern tooling. Zero compromises."
            description="We select battle-tested, best-in-class technology for every layer — from interface to intelligence to infrastructure."
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {STACK.map((item) => {
              const Icon = ICONS[item.icon];

              return (
                <div
                  key={item.name}
                  className="card-hover group flex items-center gap-4 rounded-2xl border border-white/10 bg-card px-5 py-5"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-black/40 text-volt transition-all duration-500 group-hover:border-volt/60 group-hover:shadow-[0_0_26px_-8px_rgba(163,255,18,0.9)]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <p className="truncate font-display text-base font-semibold text-white">
                      {item.name}
                    </p>
                    <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-silver">
                      {item.category}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-14 grid gap-4 rounded-2xl border border-white/10 bg-black/40 p-6 sm:grid-cols-3 sm:p-8">
          {[
            {
              title: "Performance-First",
              body: "Core Web Vitals, edge caching, and lean bundles treated as non-negotiable.",
            },
            {
              title: "Automation-Embedded",
              body: "AI agents and pipelines integrated directly into delivery, not bolted on later.",
            },
            {
              title: "Built to Scale",
              body: "Typed architecture and cloud infrastructure ready for 10x traffic.",
            },
          ].map((pillar) => (
            <div key={pillar.title}>
              <p className="font-display text-sm font-bold uppercase tracking-[0.18em] text-volt">
                {pillar.title}
              </p>
              <p className="mt-2.5 text-sm leading-relaxed text-zinc-400">
                {pillar.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
