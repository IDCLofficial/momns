import AnimatedSection from "@/components/AnimatedSection";
import React from "react";

const services = [
  {
    title: "Mineral Resource Development",
    description:
      "Identifying, mapping, and promoting the exploration and exploitation of solid mineral resources in Imo State. Encouraging investment in the sector while ensuring sustainable and environmentally responsible practices.",
  },
  {
    title: "Industrialization and Investment Promotion",
    description:
      "Driving industrial growth by supporting small, medium, and large-scale enterprises. Creating an enabling environment for investors through policy incentives, land access, and infrastructure support.",
  },
  {
    title: "Mining Regulation and Compliance",
    description:
      "Monitoring mining activities to ensure compliance with state and federal laws. Collaborating with regulatory agencies to enforce standards and prevent illegal mining operations.",
  },
  {
    title: "Entrepreneurship and Skill Development",
    description:
      "Organizing training programs and workshops to build capacity in mining, industrial processing, and related entrepreneurial skills. Supporting youth and local artisans with tools and resources.",
  },
  {
    title: "Industrial Parks and Clusters Development",
    description:
      "Establishing and managing industrial clusters and parks to boost productivity, attract investors, and create job opportunities across various sectors including agro-processing and solid minerals.",
  },
  {
    title: "Partnerships and Stakeholder Engagement",
    description:
      "Engaging with local communities, private sector, and development partners to ensure inclusive growth. Promoting Public-Private Partnerships (PPP) for industrial and mineral resource development.",
  },
  {
    title: "Research, Data, and Resource Management",
    description:
      "Conducting geological surveys and maintaining a mineral resource database. Using data-driven approaches for policy formulation and strategic planning in the industry and solid minerals sector.",
  },
];


const ServiceCard = ({ title, description }: { title: string; description: string;}) => (
 <AnimatedSection>
 <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col h-full border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
    <h3 className="text-lg font-bold text-green-700 mb-2">{title}</h3>
    <p className="text-gray-700 text-sm flex-1 mb-3">{description}</p>
  </div>
  </AnimatedSection>
);

export default function ServicesGrid() {
  return (
    <section className="w-full py-12 bg-[#f7f9fa] flex flex-col items-center">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {services.map((service, idx) => (
          <ServiceCard key={idx} {...service} />
        ))}
      </div>
    </section>
  );
}