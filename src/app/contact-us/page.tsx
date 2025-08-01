import React from "react";
import ContactInfoSection from "./ContactInfoSection";
import ContactFormSection from "./ContactFormSection";
import ContactImageSection from "./ContactImageSection";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { TopHero } from "@/components/TopHero";

export default function ContactUsPage() {
  return (
    <main className="min-h-screen w-full bg-white flex flex-col">
      <TopHero
      ministryName="Reach Out to Us"
      titleLabel="Contact Us"
      />
      <section className="w-full mx-auto py-20 px-4 md:px-12 flex flex-col gap-10">
        <div className="flex flex-col lg:flex-row gap-8 relative">    
            <div className="flex-1 order-2 lg:order-1">
              <ContactInfoSection />
            </div>
            <div className="flex-1 flex justify-center items-start order-3 lg:order-2 lg:absolute lg:right-0 lg:z-5">
              <ContactFormSection />
            </div>
        </div>
        <ContactImageSection />
      </section>
      <CTASection
       heading="Building a Prosperous Imo Through Industry and Resources"
       subtext="Join our mission to transform Imo State through responsible mining, industrial innovation, and inclusive growth."       
buttonLabel="See Our Projects"
  buttonHref="/projects"
      />
      <Footer />
    </main>
  );
}
