import { BRAND, CONTACT, NAV_LINKS } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-panel/70">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <a href="#top" className="flex items-center gap-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-volt" />
            <span className="font-display text-sm font-bold tracking-[0.28em] text-white">
              VERTEX&nbsp;LABS
            </span>
          </a>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-500 transition-colors hover:text-volt"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-500 transition-colors hover:text-volt"
            >
              WhatsApp
            </a>
            <a
              href={CONTACT.email}
              className="text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-500 transition-colors hover:text-volt"
            >
              Email
            </a>
            <a
              href={CONTACT.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-500 transition-colors hover:text-volt"
            >
              Instagram
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 border-t border-white/10 pt-8 sm:flex-row sm:justify-between">
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-volt/70">
            {BRAND.tagline}
          </p>
          <p className="text-[11px] uppercase tracking-[0.18em] text-zinc-600">
            {BRAND.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
