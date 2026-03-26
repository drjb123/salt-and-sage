/* =============================================================
   Home — Salt & Sage Warm Editorial Luxury
   Assembles all page sections in order
   ============================================================= */

import Navbar from "@/components/Navbar";
import Chatbot from "@/components/Chatbot";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import PurposeSection from "@/components/PurposeSection";
import ServicesSection from "@/components/ServicesSection";
import ExpertsSection from "@/components/ExpertsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import VisionSection from "@/components/VisionSection";
import ContactSection from "@/components/ContactSection";
import FAQSection from "@/components/FAQSection";
import MetricsCalculator from "@/components/MetricsCalculator";
import VideoTestimonialsSection from "@/components/VideoTestimonialsSection";
import TeamTrainingSection from "@/components/TeamTrainingSection";
import HowWeWorkSection from "@/components/HowWeWorkSection";
import PracticeBenchmarkingTool from "@/components/PracticeBenchmarkingTool";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div style={{ backgroundColor: "#f8f4ed" }}>
      <Navbar />
      <Chatbot />
      <HeroSection />
      <ProblemSection />
      <PurposeSection />
      <ServicesSection />
      <ExpertsSection />
      <TestimonialsSection />
      <VisionSection />
      <HowWeWorkSection />
      <MetricsCalculator />
      <PracticeBenchmarkingTool />
      <TeamTrainingSection />
      <VideoTestimonialsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
