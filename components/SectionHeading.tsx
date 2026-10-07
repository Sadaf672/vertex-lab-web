type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div className={`max-w-3xl ${centered ? "mx-auto text-center" : ""}`}>
      <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.34em] text-volt">
        <span className="h-px w-8 bg-volt/60" aria-hidden="true" />
        {eyebrow}
      </span>
      <h2 className="mt-5 font-display text-[clamp(2rem,5vw,3.5rem)] font-bold uppercase leading-[1.02] tracking-[-0.02em] text-white">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-relaxed text-zinc-400 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
