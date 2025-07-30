import CTASection from "../../components/CTASection";
import Footer from "../../components/Footer";
import { TopHero } from "@/components/TopHero";

export default function Services() {
    return (
        <div className="h-screen bg-white">
            
            {/* Top Hero */}
            <TopHero
                ministryName="Ministry of Industry, Mines, and Solid Minerals"
                titleLabel="Services"
            />
         
            {/* CTASection */}
            <CTASection
                heading="Revolutionalizing Mining in Imo State"
                buttonLabel="See Our Projects"
                buttonHref="/projects"
            />
            {/* Footer */}
            <Footer />
        </div>
    )
}