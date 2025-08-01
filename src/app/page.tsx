import AboutMandateSection from "@/components/AboutMandateSection";
import HeroSection from "@/components/HeroSection";
import CommissionerSection from "@/components/CommissionerSection";
import QuickLinksSection from "@/components/QuickLinksSection";
import SkillUpSection from "@/components/SkillUpSection";
import LatestNewsSection from "@/components/LatestNewsSection";
import Stats from "@/components/Stats";
import FeaturedPartners from "@/components/FeaturedPartners";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>

     
      {/* hero section */}
      <HeroSection
        backgroundImage="/images/Homehero.jpg"
        overlayText="Imo State Ministry of Industry, Mines, and Solid Minerals"
        heading="Empowering Industry. "
        subheading="Harnessing Minerals. "
        description="Harnessing solid minerals, advancing industries, and empowering Imo citizens through sustainable mining, industrial growth, and inclusive economic policies."
      />
      {/* About Mandate Section */}
      <AboutMandateSection
        label="ABOUT US"
        title="Our Mandate —"
        subheading="Ministry of Industry, Mines & Solid Minerals"
        description="Welcome to the Imo State Ministry of Industries and Solid Minerals
As a key driver of economic transformation, our Ministry plays a critical role in positioning Imo State as a hub for industrialization and responsible mining. In a time of post-oil diversification, we are committed to fostering sustainable development, attracting investment, and creating jobs through a robust policy framework and forward-thinking leadership.

Established through the restructuring of former commerce, industry, and natural resource departments, this Ministry brings focus to the vast opportunities in Imo’s rich mineral landscape—limestone, kaolin, clay, laterite, and more.
"
        buttonText="Discover More"
        image1="/images/stock6.jpg"
        image2="/images/stock2.jpg"
        image3="/images/stock1.jpg"
      />

      {/* Commissioner Section */}
      <CommissionerSection
        imageSrc="/images/commisioner.jpg"
        imageAlt="Hon. Ernest Ibejiako, Minister of Mines, Industry in Imo State"
        title="Rt. Hon. Barr. Ernest Ibejiako (LLB.BL.LLM.KSC.JP)"
        bio="Rt. Hon. Barr. Ernest Ibejiako serves as the Honourable Commissioner for Mines, Industry, and Solid Minerals in Imo State, Nigeria. Appointed by Governor Hope Uzodinma, he is dedicated to driving sustainable development across the state's industrial and solid mineral sectors."
        details="With a focus on responsible mining, industrial expansion, and job creation, Hon. Ibejiako champions policies that harness Imo State’s solid mineral wealth for economic empowerment. His leadership aims to attract investments, modernize industries, and ensure environmental sustainability in resource management."
        buttonText="What we Do"
      />
      <div className="bg-white">

      {/* Skill Up Section */}
      <SkillUpSection />
      {/* Quick Links Section */}
      <QuickLinksSection />
      {/* Latest News Section */}
      <LatestNewsSection />
      </div>

      {/* Stats Section */}
      <Stats />
      {/* Featured Partners Section */}
      <FeaturedPartners />
      {/* CTASection */}
      <CTASection
       heading="Building a Prosperous Imo Through Industry and Resources"
       subtext="Join our mission to transform Imo State through responsible mining, industrial innovation, and inclusive growth."       
        buttonLabel="Partner With Us"
        buttonHref="/contact-us"
      />
      {/* Footer */}
      <Footer />
    </>
  );
}
