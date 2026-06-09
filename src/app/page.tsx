import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Portfolio } from "@/components/Portfolio";
import { Clients } from "@/components/Clients";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { getPortfolioItems } from "@/lib/portfolio";

export default function Home() {
  const portfolioItems = getPortfolioItems();

  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Marquee />
        <Portfolio items={portfolioItems} />
        <Clients />
        <Marquee />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
