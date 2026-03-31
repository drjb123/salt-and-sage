/* =============================================================
   Home — Salt & Sage Warm Editorial Luxury
   Assembles all page sections in order
   ============================================================= */

import Navbar from "@/components/Navbar";
import Chatbot from "@/components/Chatbot";
import HeroSection from "@/components/HeroSection";
import AccordionContent from "@/components/AccordionContent";
import CarouselContent from "@/components/CarouselContent";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div style={{ backgroundColor: "#f8f4ed" }}>
      <Navbar />
      <Chatbot />
      <HeroSection />
      <AccordionContent />
      <CarouselContent />
      <ContactSection />
      <Footer />
    </div>
  );
}
