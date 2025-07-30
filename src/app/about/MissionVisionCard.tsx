import React from "react";
import AnimatedSection from "@/components/AnimatedSection";

export default function MissionVisionCard() {
  return (
    <section className="w-full flex justify-center py-16 bg-[#f7f9fa]">
      <AnimatedSection>
      <div className="bg-white rounded-3xl shadow-xl p-10 w-[80vw] flex flex-col gap-8 items-center">
        <h2 className="text-3xl font-bold text-green-700 mb-2 text-center">Ministry of Water Resources, Imo State</h2>
        <div className="w-full flex flex-col md:flex-row gap-6">
          <div className="bg-green-50 rounded-xl p-6 shadow-sm w-full">
            <h3 className="text-xl font-semibold text-green-800 mb-2">Mission Statement</h3>
            <p className="text-gray-700 text-base">
              To be the leading catalyst for sustainable industrialization and responsible mineral development in Imo State—creating compelling investment opportunities, transforming livelihoods, and positioning the state as a hub for safe, compliant, and growth-oriented industries.
            </p>
          </div>
          <div className="bg-green-50 rounded-xl p-6 shadow-sm w-full">
            <h3 className="text-xl font-semibold text-green-800 mb-2">Vision Statement</h3>
            <p className="text-gray-700 text-base">
            To foster a vibrant ecosystem of small, medium, and large industries while harnessing Imo’s solid mineral wealth through transparent regulation, stakeholder engagement, and environmental stewardship—generating revenue, creating employment, reducing poverty, and driving regional economic transformation.
            </p>
          </div>
        </div>
      </div>
      </AnimatedSection>
    </section>
  );
} 