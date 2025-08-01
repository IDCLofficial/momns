import CTASection from "../../components/CTASection";
import Footer from "../../components/Footer";
import { TopHero } from "@/components/TopHero";
import ServiceCard from "./ServiceCard";

export default function Services() {
    return (
        <div className="h-screen bg-white">
            
            {/* Top Hero */}
            <TopHero
                ministryName="What we do"
                titleLabel="Services"
            />
            <ServiceCard />
            
            {/* CTASection */}
            <CTASection
       heading="Building a Prosperous Imo Through Industry and Resources"
       subtext="Join our mission to transform Imo State through responsible mining, industrial innovation, and inclusive growth."       
        buttonLabel="Partner With Us"
        buttonHref="/contact-us"
      />
            {/* Footer */}
            <Footer />
        </div>
    )
}