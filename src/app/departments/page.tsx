import UnitsTabsSection from "./UnitsTabsSection";
import Footer from "@/components/Footer";
import { TopHero } from "@/components/TopHero";
import CTASection from "@/components/CTASection";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Departments",
  description: "Departments and units of the Ministry of Industry, Mines & Solid Minerals, Imo State Government.",
  path: "/departments",
});


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
       heading="Building a Prosperous Imo Through Industry and Resources"
       subtext="Join our mission to transform Imo State through responsible mining, industrial innovation, and inclusive growth."       
        buttonLabel="Partner With Us"
      buttonHref="/contact-us"
      />
      <Footer />
    </div>
  );
}
