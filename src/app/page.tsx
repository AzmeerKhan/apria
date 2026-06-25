import HeroBanner from "@/components/HeroBanner";
import StatsBar from "@/components/StatsBar";
import GoalSection from "@/components/home/GoalSection";
import ServicesSection from "@/components/home/ServicesSection";
import CredentialsSection from "@/components/home/CredentialsSection";
import CtaSection from "@/components/home/CtaSection";
import LocationSection from "@/components/home/LocationSection";

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <StatsBar />
      <GoalSection />
      <ServicesSection />
      <CredentialsSection />
      <CtaSection />
      <LocationSection />
    </>
  );
}
