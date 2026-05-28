import HeroBanner from "@/components/HeroBanner";
import StatsBar from "@/components/StatsBar";
import ServicesSection from "./_sections/ServicesSection";
import CredentialsSection from "./_sections/CredentialsSection";
import CtaSection from "./_sections/CtaSection";

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <StatsBar />
      <ServicesSection />
      <CredentialsSection />
      <CtaSection />
    </>
  );
}
