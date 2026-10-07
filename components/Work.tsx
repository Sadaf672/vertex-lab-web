import Image from "next/image";
import { ArrowUpRight, TrendingUp } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { PROJECTS } from "@/lib/site";

export default function Work() {
  return (
    <section
      id="work"
      className="relative scroll-mt-28 border-t border-white/10 bg-panel/50 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Selected Work"
            title="Case studies with measurable outcomes"
            description="Luxury builds backed by hard numbers. A sample of systems we shipped and the performance they unlocked."
          />
          <a
            href="#contact"
            className="group inline-flex w-fit items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:border-volt/60 hover:text-volt"
          >
            Discuss your project
            <ArrowUpRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </a>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <article
              key={project.title}
              className="card-hover group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-card"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-black/40 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full border border-volt/40 bg-black/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-volt backdrop-blur-md">
                  {project.client}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-xl font-bold uppercase tracking-tight text-white">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="h-5 w-5 shrink-0 text-silver transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-volt"
                    aria-hidden="true"
                  />
                </div>

                <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center justify-between gap-4 border-t border-white/10 pt-5">
                  <div>
                    <p className="font-display text-3xl font-bold tracking-tight text-volt text-glow-soft">
                      {project.metricValue}
                    </p>
                    <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-silver">
                      {project.metricLabel}
                    </p>
                  </div>
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-black/40 text-volt transition-colors duration-300 group-hover:border-volt/60">
                    <TrendingUp className="h-4 w-4" aria-hidden="true" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
