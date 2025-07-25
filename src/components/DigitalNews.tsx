import React from "react";
import AnimatedSection from "./AnimatedSection";

export default function MissionVisionCard() {
  return (
    <section className="w-full flex justify-center py-16 bg-[#f7f9fa]">
      <AnimatedSection>
      <div className="bg-white rounded-3xl shadow-xl p-10 w-[80vw] flex flex-col gap-8 items-center">
        <h2 className="text-3xl font-bold text-green-700 mb-2 text-center">Ministry of Mines, Industry, and Solid Minerals</h2>
        <div className="w-full flex flex-col md:flex-row gap-6">
          <div className="bg-green-50 rounded-xl p-6 shadow-sm w-full">
            <h3 className="text-xl font-semibold text-green-800 mb-2">Mission Statement</h3>
            <p className="text-gray-700 text-base">
              To drive sustainable industrialization and responsible solid mineral development in Imo State by fostering innovation, attracting investment, empowering local entrepreneurs, and ensuring environmental stewardship for inclusive economic growth.
            </p>
          </div>
          <div className="bg-green-50 rounded-xl p-6 shadow-sm w-full">
            <h3 className="text-xl font-semibold text-green-800 mb-2">Vision Statement</h3>
            <p className="text-gray-700 text-base">
              To position Imo State as a leading hub for industrial growth and solid mineral resource management in Nigeria, creating jobs, wealth, and sustainable prosperity for all citizens.
            </p>
          </div>
        </div>
      </div>
      </AnimatedSection>
    </section>
  );
} 