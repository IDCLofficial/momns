import { SectionHero } from "@/components/SectionHero";
import { ObjectivesSection } from "@/components/ObjectivesSection";
import CommissionerSection from "@/components/CommissionerSection";
import { StructuresSection } from "@/components/StructuresSection";
import CTASection from "../../components/CTASection";
import Footer from "../../components/Footer";
import { TopHero } from "@/components/TopHero";
import SkillUpSection from "@/components/SkillUpSection";
import MissionVisionCard from "@/components/DigitalNews";

export default function AboutUs() {
    return (
        <div className="h-screen bg-white">
            
            {/* Top Hero */}
            <TopHero
                ministryName="Ministry of Industry, Mines, and Solid Minerals"
                titleLabel="About Us"
            />
            {/* Section Hero */}
            <SectionHero
                aboutText="The Ministry of Industries and Solid Minerals in Imo State serves as a vital engine for economic transformation, especially as the state seeks to move beyond oil dependence. While there's still room for growth and reform, the ministry represents a key opportunity for wealth creation and sustainable development in Imo State.
The Ministry of Industries and Solid Minerals in Imo State is a government agency responsible for promoting industrial development and regulating solid mineral resources within the state. It is a strategic part of the state's economic development plan, especially considering Imo's natural resource base.
The ministry was likely formed from a merger or restructuring of previous departments such as the Ministry of Commerce and Industry and sections of Solid Minerals units.
Over the years, successive governments in Imo State have recognized the importance of harnessing local solid minerals like limestone, kaolin, clay, laterite, and sand, which are abundant in the region."

                imgSrc="/images/about.jpg"
                altText="Our Story - Imo State Ministry of Industry, Mines, and Solid Minerals conference event"
            />
            {/* Commissioner Section */}
            <CommissionerSection
                imageSrc="/images/commisioner.jpg"
                imageAlt="Hon. Commissioner Dr. Ernest Ibejiako"
                title="Hon. Commissioner Dr. Ernest Ibejiako (LLB.BL.LLM.KSC.JP)"
                bio="As Commissioner for Industry, Mines, and Solid Minerals, Dr. Chimezie Amadi is a seasoned leader and policy advocate dedicated to bridging the industrial divide. Under his direction, the ministry has empowered thousands of citizens through training and expanded industrial services across Imo State."
                details=""
                buttonText="Learn More"
            />
            <SkillUpSection />
            <MissionVisionCard />
            {/* Objectives Section */}
            <ObjectivesSection />
            
            {/* Structures Section */}
            <StructuresSection
                imgSrc="/images/building.png"
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