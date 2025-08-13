"use client"

import React, { useState } from "react";
import MediaSearchBar from "./MediaSearchBar";
import MediaHeroSection from "./MediaHeroSection";
import MediaGalleryGrid from "./MediaGalleryGrid";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
const mediaItems = [
  {
    image: "/images/about2.jpg",
    title: "Mining Stakeholders Forum – Imo State Government House",
    isVideo: false,
  },
  {
    image: "/images/about.jpg",
    title: "Launch of Industrial Parks Initiative in Ohaji-Egbema",
    isVideo: false,
  },
  {
    image: "/images/about3.jpg",
    title: "Solid Minerals Investment Roundtable with Foreign Investors",
    isVideo: true,
  },
  {
    image: "/images/stock4.jpg",
    title: "Artisanal Miners’ Training on Environmental Compliance",
    isVideo: false,
  },
  {
    image: "/images/team.jpg",
    title: "Commissioning of Clay Processing Plant in Ngor Okpala",
    isVideo: true,
  },
  {
    image: "/images/stock6.jpg",
    title: "Imo Industrial Policy Framework Presentation",
    isVideo: false,
  },
  {
    image: "/images/stock1.jpg",
    title: "Field Inspection of Mining Sites Across Imo State",
    isVideo: false,
  },
  {
    image: "/images/stock2.jpg",
    title: "Press Briefing: Solid Mineral Regulation and Investment Drive",
    isVideo: false,
  },
  {
    image: "/images/stock3.jpg",
    title: "Youth Empowerment Programme on Industrial Skills",
    isVideo: false,
  },
];



export default function MediaPage() {
  const [search, setSearch] = useState("");

  const filteredItems = mediaItems.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen w-full bg-[#F7F9FA] flex flex-col">
      <MediaHeroSection
        title="Watch Us Transform the Mining Sector"
        subtitle="Explore our gallery of photos, videos, and press releases showcasing our commitments in Imo State."
        backgroundImage="/images/stock6.jpg"
        searchBar={<MediaSearchBar placeholder="Search media..." onSearch={setSearch} />}
      />
      <section className="w-full max-w-7xl mx-auto py-12 px-4">
        <div className="mt-8">
          {filteredItems.length === 0 ? (
            <div className="text-center text-gray-500 text-lg font-semibold py-12">
              No results found
            </div>
          ) : (
            <MediaGalleryGrid items={filteredItems} />
          )}
        </div>
      </section>
      <CTASection
       heading="Building a Prosperous Imo Through Industry and Resources"
       subtext="Join our mission to transform Imo State through responsible mining, industrial innovation, and inclusive growth."       
        buttonLabel="Partner With Us"
        buttonHref="/contact-us"
      />
      <Footer />
    </main>
  );
}
