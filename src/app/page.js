import Hero from "@/components/Hero";
import ValueProposition from "@/components/ValuePropositions";
import { Process } from "@/components/Process";
import { Services } from "@/components/Services";
import { Automations } from "@/components/Automations";
import { AdminSection } from "@/components/Directus";
import { FAQ } from "@/components/Faq";
import { ContactSection } from "@/components/Cta";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <ValueProposition  id="accueil"/>
      <Process  id="processus" />
      <Services id="services" />
      <Automations />
      <AdminSection />
      <FAQ />
      <ContactSection />
      <Footer />
      {/* D’autres composants à venir ici */}
    </>
  );
}