"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { CONTACT } from "@/lib/site";

export default function FloatingWhatsApp() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const targets = Array.from(
      document.querySelectorAll("#contact, footer"),
    );
    if (targets.length === 0) return;

    const visible = new Set<Element>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            visible.add(entry.target);
          } else {
            visible.delete(entry.target);
          }
        }
        setHidden(visible.size > 0);
      },
      { threshold: 0.12 },
    );

    for (const target of targets) observer.observe(target);

    return () => observer.disconnect();
  }, []);

  return (
    <a
      href={CONTACT.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Vertex Labs on WhatsApp"
      aria-hidden={hidden}
      tabIndex={hidden ? -1 : undefined}
      className={`group fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-volt text-black shadow-[0_18px_45px_-15px_rgba(163,255,18,0.9)] transition-all duration-300 hover:scale-110 sm:bottom-7 sm:right-7 ${
        hidden
          ? "pointer-events-none scale-75 opacity-0"
          : "scale-100 opacity-100"
      }`}
    >
      <span className="absolute inset-0 rounded-full bg-volt/40 animate-ping motion-reduce:animate-none" />
      <MessageCircle className="relative h-6 w-6" aria-hidden="true" />
    </a>
  );
}
