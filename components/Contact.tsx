import type { ComponentType } from "react";
import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
} from "@/components/BrandIcons";
import SectionHeading from "@/components/SectionHeading";
import { CONTACT } from "@/lib/site";

type Channel = {
  label: string;
  value: string;
  href: string;
  Icon: ComponentType<{ className?: string }>;
  external: boolean;
};

const CHANNELS: Channel[] = [
  {
    label: "WhatsApp",
    value: CONTACT.whatsappLabel,
    href: CONTACT.whatsapp,
    Icon: (props) => <MessageCircle {...props} />,
    external: true,
  },
  {
    label: "Email",
    value: CONTACT.emailLabel,
    href: CONTACT.email,
    Icon: (props) => <Mail {...props} />,
    external: false,
  },
  {
    label: "Instagram",
    value: CONTACT.instagramLabel,
    href: CONTACT.instagram,
    Icon: InstagramIcon,
    external: true,
  },
  {
    label: "Facebook",
    value: CONTACT.facebookLabel,
    href: CONTACT.facebook,
    Icon: FacebookIcon,
    external: true,
  },
  {
    label: "LinkedIn",
    value: CONTACT.linkedinLabel,
    href: CONTACT.linkedin,
    Icon: LinkedinIcon,
    external: true,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-28 overflow-hidden py-24 sm:py-32"
    >
      <div className="absolute left-1/2 top-1/4 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-volt/15 blur-[150px] animate-aurora" />
      <div className="absolute inset-0 grid-overlay opacity-40" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6">
        <SectionHeading
          align="center"
          eyebrow="Contact"
          title="Ready to build what's next?"
          description="Tell us where you want to grow. We reply fast, scope honestly, and start with a plan — not a pitch deck."
        />

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={CONTACT.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-volt px-7 py-4 text-sm font-bold uppercase tracking-[0.16em] text-black transition-all duration-300 hover:shadow-[0_0_45px_-8px_rgba(163,255,18,0.95)] sm:w-auto"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Chat on WhatsApp
            <ArrowUpRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              aria-hidden="true"
            />
          </a>
          <a
            href={CONTACT.email}
            className="group inline-flex w-full items-center justify-center gap-2.5 rounded-xl border border-white/15 bg-white/5 px-7 py-4 text-sm font-bold uppercase tracking-[0.16em] text-white backdrop-blur-md transition-all duration-300 hover:border-volt/60 hover:text-volt sm:w-auto"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            {CONTACT.emailLabel}
          </a>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CHANNELS.map((channel) => {
            const Icon = channel.Icon;

            return (
              <a
                key={channel.label}
                href={channel.href}
                target={channel.external ? "_blank" : undefined}
                rel={channel.external ? "noopener noreferrer" : undefined}
                className="card-hover group flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-card px-5 py-5"
              >
                <div className="flex min-w-0 items-center gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-black/40 text-volt transition-all duration-500 group-hover:border-volt/60 group-hover:shadow-[0_0_26px_-8px_rgba(163,255,18,0.9)]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-silver">
                      {channel.label}
                    </p>
                    <p className="mt-1 truncate text-sm font-medium text-white">
                      {channel.value}
                    </p>
                  </div>
                </div>
                <ArrowUpRight
                  className="h-5 w-5 shrink-0 text-silver transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-volt"
                  aria-hidden="true"
                />
              </a>
            );
          })}

          <div className="flex flex-col justify-between rounded-2xl border border-volt/30 bg-volt/10 px-5 py-5">
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-volt">
              Studio Hours
            </p>
            <p className="mt-2 font-display text-lg font-bold uppercase tracking-tight text-white">
              24/7 AI Ops
            </p>
            <p className="mt-1 text-sm text-zinc-400">
              Humans reply within a few hours, every day.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
