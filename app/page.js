import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LocationsSection from "@/components/LocationsSection";
import LifeAtTor from "@/components/LifeAtTor";
import BenefitsSection from "@/components/BenefitsSection";
import JobsSection from "@/components/JobsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import OurReachSection from "@/components/OurReachSection";

// Main page component for the Salesforce careers page
export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <LocationsSection />
      <LifeAtTor />
      <BenefitsSection />
      <TestimonialsSection />
      <OurReachSection/>
      <JobsSection />
      <CTASection />
      <Footer />
    </main>
  );
} 