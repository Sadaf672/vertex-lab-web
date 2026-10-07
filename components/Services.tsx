import Image from "next/image";
import {
  ArrowUpRight,
  Bot,
  BrainCircuit,
  Code2,
  Cpu,
  Globe,
  Palette,
  type LucideIcon,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { SERVICES, type Service } from "@/lib/site";

const ICONS: Record<Service["icon"], LucideIcon> = {
  globe: Globe,
  palette: Palette,
  code: Code2,
  bot: Bot,
  brain: BrainCircuit,
  cpu: Cpu,
};

function ServiceCard({ service }: { service: Service }) {
  const Icon = ICONS[service.icon];

  return (
    <article className="card-hover group relative flex min-h-[24rem] flex-col justify-end overflow-hidden rounded-2xl border border-white/10 bg-card">
      <Image
        src={service.image}
        alt={service.imageAlt}
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover opacity-55 transition-all duration-700 group-hover:scale-105 group-hover:opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/20" />
      <div className="absolute inset-0 bg-volt/0 transition-colors duration-500 group-hover:bg-volt/5" />

      <div className="relative flex h-full flex-col justify-between p-6 sm:p-7">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-volt/40 bg-volt/10 text-volt backdrop-blur-md transition-all duration-500 group-hover:border-volt group-hover:shadow-[0_0_30px_-8px_rgba(163,255,18,0.9)]">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>

        <div className="mt-24">
          <div className="flex items-start justify-between gap-4">
            <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-white">
              {service.title}
            </h3>
            <ArrowUpRight
              className="h-5 w-5 shrink-0 text-silver transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-volt"
              aria-hidden="true"
            />
          </div>
          <p className="mt-3 text-sm leading-relaxed text-zinc-400">
            {service.description}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {service.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative scroll-mt-28 py-24 sm:py-32">
      <div className="absolute left-1/2 top-0 h-px w-full max-w-6xl -translate-x-1/2 bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <SectionHeading
          eyebrow="Services"
          title="Capabilities engineered for market leaders"
          description="Six core disciplines, one obsessive standard. Every engagement pairs senior craft with automation-first thinking."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
