import NewsSidebar from "./NewsSidebar";
import NewsSearchBar from "./NewsSearchBar";
import NewsGrid from "./NewsGrid";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import SecondTopHero from "@/components/SecondTopHero";

export default function NewsPage() {
  return (
    <div className="bg-white">
      <SecondTopHero
      headingText="Empowering Imo’s Industry, Mines, and Solid Minerals"
      />
      <NewsSearchBar />
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 px-4 pb-16">
        <NewsSidebar />
        <div className="flex-1">
          <NewsGrid />
        </div>
      </div>
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
