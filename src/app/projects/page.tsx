import CTASection from "@/components/CTASection";
import DigitalAgendaSection from "@/components/DigitalNews";
import Footer from "@/components/Footer";
import SecondTopHero from "@/components/SecondTopHero";
import OngoingProjects from "@/components/projects/Projects";

export default function Projects() {
    return (
        <div>
            {/* SecondTop Hero */}
            <SecondTopHero headingText="Empowering Imo’s Industrial and Mining Future" />
            {/* SkillUp Project */}
            <OngoingProjects />
            {/* Digital section */}
            <DigitalAgendaSection />
            <CTASection
        heading="Ready to Experience the New Imo?"
        subtext="Discover our vision for an inclusive, empowered, and connected state."
        buttonLabel="Contact Us"
        buttonHref="/contact-us"
      />
      {/* Footer */}
      <Footer />

        </div>
    )
}