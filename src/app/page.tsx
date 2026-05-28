import HeroBanner from "@/components/HeroBanner";
import StatsBar from "@/components/StatsBar";
import ServicesSection from "@/components/home/ServicesSection";
import CredentialsSection from "@/components/home/CredentialsSection";
import CtaSection from "@/components/home/CtaSection";

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
