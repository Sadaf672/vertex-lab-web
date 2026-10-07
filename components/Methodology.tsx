import SectionHeading from "@/components/SectionHeading";
import { PROCESS } from "@/lib/site";

export default function Methodology() {
  return (
    <section
      id="methodology"
      className="relative scroll-mt-28 overflow-hidden py-24 sm:py-32"
    >
      <div className="absolute -left-40 top-1/3 h-80 w-80 rounded-full bg-volt/10 blur-[130px] animate-aurora" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6">
        <SectionHeading
          eyebrow="Methodology"
          title="A process built for certainty"
          description="No guesswork, no scope drift. Five disciplined phases that carry a brief from first call to compounding results."
        />

        <ol className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {PROCESS.map((step, index) => (
            <li
              key={step.number}
              className="card-hover group relative rounded-2xl border border-white/10 bg-card/70 p-6 backdrop-blur-sm"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm font-semibold tracking-[0.2em] text-volt">
                  {step.number}
                </span>
                <span className="h-2 w-2 rounded-full bg-white/20 transition-colors duration-500 group-hover:bg-volt" />
              </div>

              <div className="mt-8 h-px w-full bg-gradient-to-r from-volt/50 to-transparent opacity-60" />

              <h3 className="mt-5 font-display text-lg font-bold uppercase tracking-tight text-white">
                {step.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-zinc-400">
                {step.description}
              </p>

              {index < PROCESS.length - 1 ? (
                <span
                  className="absolute -right-3 top-1/2 hidden h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-ink text-[10px] text-silver lg:flex"
                  aria-hidden="true"
                >
                  →
                </span>
              ) : null}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
