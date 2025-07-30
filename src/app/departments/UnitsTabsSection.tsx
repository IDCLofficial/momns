"use client"

import { useState } from "react";
import Image from "next/image";

const departments = [
  {
    name: "Department of Mining Operations",
    image: "/images/about.jpg",
    description: "Oversees mining activities across the state, ensuring compliance with safety, environmental, and regulatory standards."
  },
  {
    name: "Department of Solid Minerals Development",
    image: "/images/aboutUs1.png",
    description: "Promotes the exploration, development, and sustainable use of the state's solid mineral resources."
  },
  {
    name: "Department of Industrial Promotion",
    image: "/images/stock1.jpg",
    description: "Supports the growth of small, medium, and large-scale industries to boost economic development and job creation."
  },
  {
    name: "Department of Finance and Accounts",
    image: "/images/about2.jpg",
    description: "Handles financial planning, budgeting, accounting, and expenditure control for the ministry."
  },
  {
    name: "Department of Investment and Public-Private Partnerships (PPP)",
    image: "/images/monsm-news.jpg",
    description: "Facilitates investment opportunities and partnerships with the private sector to accelerate industrialization."
  },
  {
    name: "Department of General Administration",
    image: "/images/about3.jpg",
    description: "Manages day-to-day administrative activities and ensures effective internal operations of the ministry."
  },
  {
    name: "Department of Human Resource Management",
    image: "/images/stock4.jpg",
    description: "Handles staff welfare, recruitment, training, and capacity development of ministry personnel."
  },
  {
    name: "Department of Internal Audit",
    image: "/images/building.png",
    description: "Ensures financial accountability and transparency through periodic audits and risk assessments."
  },
  {
    name: "Department of Research, Statistics and Data Management",
    image: "/images/Imo-House-of-Assembly.webp",
    description: "Conducts research and gathers data to inform policy-making and monitor sector performance."
  },
 
  {
    name: "Department of Special Projects and Innovation",
    image: "/images/monsm-news2.webp",
    description: "Drives strategic initiatives and innovative programs that support the ministry’s core objectives."
  }
];



export default function UnitsTabsSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = departments[activeIdx];

  return (
    <section className="w-full max-w-6xl mx-auto flex flex-col md:flex-row gap-8 py-16 px-4">
      {/* Tabs */}
      <div className="w-full md:w-1/4 border-r pr-4">
        <ul className="space-y-2">
          {departments.map((dept, idx) => (
            <li key={dept.name}>
              <button
                className={`w-full text-left px-4 py-2 rounded font-semibold border transition cursor-pointer
                  ${activeIdx === idx
                    ? 'bg-green-600 text-white'
                    : 'bg-white text-black border-transparent hover:bg-green-50 hover:text-green-700'}
                `}
                onClick={() => setActiveIdx(idx)}
              >
                {dept.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
      {/* Content */}
      <div className="flex-1">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">{active.name}</h2>
        <div className="w-full max-w-xl mb-4">
          <Image src={active.image} alt={active.name} width={600} height={300} className="rounded-xl object-cover" />
        </div>
        <p className="text-gray-700 text-sm md:text-base">{active.description}</p>
      </div>
    </section>
  );
} 