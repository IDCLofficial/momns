import SecondTopHero from "@/components/SecondTopHero";
import EventsListSection from "./EventsListSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function EventsPage() {
  return (
    <div className="bg-white">
      <SecondTopHero
      headingText="Empowering Imo Through Events & Innovation"
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
