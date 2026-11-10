import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import EquipmentHire from "@/components/EquipmentHire";
import CateringMenu from "@/components/CateringMenu";
import Gallery from "@/components/Gallery";
import QuoteCalculator from "@/components/QuoteCalculator";
import WhyChooseUs from "@/components/WhyChooseUs";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF8F5]">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Services Showcase */}
      <Services />

      {/* Equipment Hire Catalog & Cart */}
      <EquipmentHire />

      {/* Catering & Cuisine Showcase */}
      <CateringMenu />

      {/* Real Event Gallery */}
      <Gallery />

      {/* Interactive Quotation Calculator & WhatsApp Generator */}
      <QuoteCalculator />

      {/* Why Choose JS Events & Client Reviews */}
      <WhyChooseUs />

      {/* Contact & Suburb Service Info */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
