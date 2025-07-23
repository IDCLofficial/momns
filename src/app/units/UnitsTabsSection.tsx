"use client"

import { useState } from "react";
import Image from "next/image";

const departments = [
  {
    name: "Mining Department: Mining & Regulatory Compliance",
    image: "/images/monsm-news1.jpg",
    description: "Oversees licensing, eradication of illegal and indiscriminate mining."
  },
  {
    name: "Industrial Department and Development",
    image: "/images/building.png",
    description: "Promotes industrial parks/layout, revitalization of moribund industries, creating and welcoming new industries through PPP, SPV etc. Ensures industrial infrastructure and ease of doing business in the industrial sector of the State Economy."
  },
  {
    name: "Revenue & Digital Systems",
    image: "/images/monsm-news2.webp",
    description: "Works with Imo State Internal Revenue Service to improve mining revenue collection through the e-revenue collection and ticket vending."
  },
  {
    name: "Planning & Strategy",
    image: "/images/monsm-news.jpg",
    description: "Drives short and long-term industrialization plans."
  },
  {
    name: "Administration and Finance Department",
    image: "/images/aboutUs1.png",
    description: "Responsible for ensuring the smooth internal operation of the ministry. Manages all aspects of human resources, including staff recruitment, training, deployment, and record-keeping. Oversees office logistics, coordinates internal communication, and ensures that facilities and supplies are well-maintained to support day-to-day activities."
  },
  {
    name: "Accounts Department",
    image: "/images/stock1.jpg",
    description: "Manages the ministry’s financial records and ensures accountability in all monetary transactions. Handles the preparation and maintenance of financial statements, processes payments and salaries, and ensures that funds are disbursed in line with approved budgets and government regulations."
  },
  {
    name: "Procurement Department",
    image: "/images/stock2.jpg",
    description: "Ensures that all goods, works, and services required by the ministry are acquired in a transparent, cost-effective, and timely manner, in compliance with the Public Procurement Act and state procurement guidelines."
  },
  {
    name: "Planning, Statistics, and Research Department",
    image: "/images/stock3.jpg",
    description: "Responsible for driving informed decision-making through data collection, analysis, policy planning, and performance monitoring."
  },
  {
    name: "Technical Department",
    image: "/images/stock4.jpg",
    description: "The engine room for all field operations, engineering assessments, environmental monitoring, and technical supervision related to industrial and mining activities within the state."
  },
  {
    name: "Industry Department",
    image: "/images/stock5.jpg",
    description: "Primarily responsible for promoting and regulating industrial development across the state. Focuses on creating a conducive environment for MSMEs as well as large-scale industries to thrive."
  },
  {
    name: "Mining Department",
    image: "/images/stock6.jpg",
    description: "Responsible for overseeing all activities related to the exploration, exploitation, regulation, and monitoring of solid mineral resources within the state."
  },
  {
    name: "Solid Mineral Department",
    image: "/images/monsm-news.jpg",
    description: "Focuses specifically on the identification, regulation, and sustainable development of the state’s vast solid mineral resources."
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