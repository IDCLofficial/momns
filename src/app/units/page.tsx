import UnitsTabsSection from "./UnitsTabsSection";
import Footer from "@/components/Footer";
import { TopHero } from "@/components/TopHero";
import CTASection from "@/components/CTASection";

export default function UnitsPage() {
  return (
    <div className="bg-white">
     {/* Top Hero */}
     <TopHero
                ministryName="Departments Driving Our Vision"
                titleLabel="Departments"
            />
      <UnitsTabsSection />
    
      <CTASection
        heading="Join our mission to make Imo the Industrial heart of Nigeria"
        subtext=""
        buttonLabel="Contact Us"
        buttonHref="/contact-us"
      />
      <Footer />
    </div>
  );
}
