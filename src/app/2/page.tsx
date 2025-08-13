import EventsListSection from "./EventsListSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { TopHero } from "@/components/TopHero";

export default function EventsPage() {
  return (
    <div className="bg-white">
      
<TopHero
ministryName="Empowering Imo Through Innovation"
titleLabel="Events"
/>

      <EventsListSection />
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
