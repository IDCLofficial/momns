import React from "react";
import Image from "next/image";

const projects = [
  {
    title: "Establishment of Industrial Parks",
    description: "Development of modern industrial parks in key zones to attract investment, support manufacturing, and create jobs across Imo State.",
    status: "active",
  },
  {
    title: "Solid Minerals Mapping and Licensing",
    description: "Comprehensive mapping and licensing of mineral-rich areas to encourage regulated mining and sustainable resource management.",
    status: "active",
  },
  {
    title: "SkillUp Imo Program for Mining and Industry",
    description: "Training and empowering youths with technical and entrepreneurial skills tailored to the needs of the mining and industrial sectors.",
    status: "active",
  },
  {
    title: "Revitalization of Songhai Agricultural and Industrial Scheme",
    description: "Rehabilitation and expansion of the Songhai Scheme in Nekede to boost agro-processing and industrial output.",
    status: "closed",
  },
  {
    title: "Public-Private Partnerships for Mineral Processing",
    description: "Facilitating partnerships to establish mineral processing plants, adding value to Imo’s solid minerals before export.",
    status: "active",
  },
  {
    title: "Stakeholder Engagement for Mining Sector Reforms",
    description: "Ongoing dialogue with host communities, miners, and regulatory agencies to ensure compliance, safety, and community benefits.",
    status: "closed",
  },
];

export default function Projects() {
  const activeProjects = projects.filter(p => p.status === "active");
  const closedProjects = projects.filter(p => p.status === "closed");

  return (
    <section className="w-full py-16 flex flex-col items-center">
      <div className="w-full md:w-[90vw] flex flex-col lg:flex-row">
        {/* Text Content */}
        <div className="flex-1 bg-white rounded-3xl shadow-lg p-8 flex flex-col justify-center">
          <h1 className="text-3xl lg:text-4xl font-bold text-green-700 mb-6">Projects & Initiatives</h1>
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-green-700">Active Projects</h2>
            <div className="space-y-4">
              {activeProjects.map((project, idx) => (
                <div key={idx} className="p-4 bg-green-50 rounded-xl border-l-4 border-green-600 shadow-sm">
                  <h3 className="font-semibold text-lg text-green-800 mb-1">{project.title}</h3>
                  <p className="text-gray-700 text-sm">{project.description}</p>
                </div>
              ))}
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-500">Closed Projects</h2>
            <div className="space-y-4">
              {closedProjects.map((project, idx) => (
                <div key={idx} className="p-4 bg-gray-100 rounded-xl border-l-4 border-gray-400 shadow-sm">
                  <h3 className="font-semibold text-lg text-gray-700 mb-1">{project.title}</h3>
                  <p className="text-gray-600 text-sm">{project.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
        {/* Images Side */}
        <div className="flex-1 flex flex-col items-center justify-center lg:w-[20%] gap-6 py-4">
          <div className="w-full h-56 max-w-xs relative rounded-3xl overflow-hidden shadow-lg">
            <Image src="/images/monsm-news.jpg" alt="Projects 1" fill className="object-cover" />
          </div>
          <div className="w-full h-56 max-w-xs relative rounded-3xl overflow-hidden shadow-lg">
            <Image src="/images/about2.jpg" alt="Projects 2" fill className="object-cover" />
          </div>
          <div className="w-full h-56 max-w-xs relative rounded-3xl overflow-hidden shadow-lg">
            <Image src="/images/about3.jpg" alt="Projects 3" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
} 