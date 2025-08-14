import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { TopHero } from "@/components/TopHero";
import OngoingProjects from "./OngoingProjects";

export default function Projects() {
    return (
        <div>
        
            <TopHero
titleLabel="Projects"
ministryName="Empowering Imo's Industrial and Mining Future"
            />
            {/* SkillUp Project */}
            <OngoingProjects />
            
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