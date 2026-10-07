import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vertexlabs.pk"),
  title: "Vertex Labs — Premium Digital, Web & AI Automation Studio",
  description:
    "Vertex Labs is a premium digital agency engineering high-performance web apps, luxury brand identities, and AI automation systems. BUILD • AUTOMATE • SCALE.",
  keywords: [
    "Vertex Labs",
    "digital agency",
    "web development",
    "AI automation",
    "AI agents",
    "graphic design",
    "brand identity",
    "Next.js agency",
    "Pakistan digital agency",
  ],
  authors: [{ name: "Vertex Labs" }],
  openGraph: {
    title: "Vertex Labs — Premium Digital, Web & AI Automation Studio",
    description:
      "We build digital systems that scale. Custom web apps, brand identity, and AI automation engineered for growth.",
    siteName: "Vertex Labs",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Vertex Labs — dark digital abstract mesh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vertex Labs — Premium Digital, Web & AI Automation Studio",
    description:
      "Custom web apps, brand identity and AI automation engineered to scale.",
    images: [
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-ink text-zinc-300 antialiased">{children}</body>
    </html>
  );
}
