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
      heading="Ready to Experience the New Imo?"
      subtext="Discover our vision for an inclusive, empowered, and connected state."
      buttonLabel="Contact Us"
      buttonHref="/contact-us"
      />
                    
      <Footer />
    </div>
  );
}
