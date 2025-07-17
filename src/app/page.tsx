import AboutMandateSection from "@/components/AboutMandateSection";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import CommissionerSection from "@/components/CommissionerSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Navbar section */}
      <Navbar />
      {/* hero section */}
      <HeroSection
        backgroundImage="/images/Homehero.jpg"
        overlayText="Imo State Ministry of Industry, Mines, and Solid Minerals"
        heading="Driving Sustainable Growth Through"
        subheading="Industry, Mining, and Natural Resource Development."
        description="Harnessing natural resources, advancing industries, and empowering Imo citizens — through sustainable mining, industrial growth, and inclusive economic policies."
      />
      {/* About Mandate Section */}
      <AboutMandateSection
        label="ABOUT US"
        title="Our Mandate —"
        subheading="Ministry of Industry, Mines & Natural Resources"
        description="The Imo State Ministry of Industry, Mines, and Natural Resources is dedicated to harnessing the state’s mineral wealth, advancing industrial development, and promoting sustainable resource management. Our goal is to create jobs, attract investment, and ensure that the natural resources of Imo State contribute meaningfully to the prosperity of its people."
        buttonText="Discover More"
        image1="/images/stock6.jpg"
        image2="/images/stock2.jpg"
        image3="/images/stock1.jpg"
      />

      {/* Commissioner Section */}
      <CommissionerSection
        imageSrc="/images/commisioner.jpg"
        imageAlt="Hon. Ernest Ibejiako, Minister of Mines, Industry in Imo State"
        title="About The Commissioner"
        bio="Hon. Ernest Ibejiako serves as the Honourable Commissioner for Mines, Industry, and Natural Resources in Imo State, Nigeria. Appointed by Governor Hope Uzodinma, he is dedicated to driving sustainable development across the state's industrial and natural resource sectors."
        details="With a focus on responsible mining, industrial expansion, and job creation, Hon. Ibejiako champions policies that harness Imo State’s natural wealth for economic empowerment. His leadership aims to attract investments, modernize industries, and ensure environmental sustainability in resource management."
        buttonText="Meet Our Leadership"
      />


    </>
  );
}
