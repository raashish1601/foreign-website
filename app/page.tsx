import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhoAreWe from "@/components/WhoAreWe";
import HowDoWeHelp from "@/components/HowDoWeHelp";
import PoweredByTheBest from "@/components/PoweredByTheBest";
import Testimonials from "@/components/Testimonials";
import EndCTA from "@/components/EndCTA";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

export default function Home() {
  return (
    <>
      <JsonLd />
      <main className="min-h-screen">
        <Header />
        <Hero />
        <WhoAreWe />
        <HowDoWeHelp />
        <PoweredByTheBest />
        <Testimonials />
        <EndCTA />
        <Footer />
      </main>
    </>
  );
}
  );
}
