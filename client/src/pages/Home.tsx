/* =============================================================
   Home — Salt & Sage Warm Editorial Luxury
   Assembles all page sections in order
   ============================================================= */

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PurposeSection from "@/components/PurposeSection";
import ServicesSection from "@/components/ServicesSection";
import ExpertsSection from "@/components/ExpertsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import VisionSection from "@/components/VisionSection";
import ContactSection from "@/components/ContactSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div style={{ backgroundColor: "#f8f4ed" }}>
      <Navbar />
      <HeroSection />
      <PurposeSection />
      <ServicesSection />
      <ExpertsSection />
      <TestimonialsSection />
      <VisionSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
