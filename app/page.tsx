import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatStrip from "@/components/StatStrip";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Methodology from "@/components/Methodology";
import Stack from "@/components/Stack";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <StatStrip />
      <Marquee />
      <Services />
      <Work />
      <Methodology />
      <Stack />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
