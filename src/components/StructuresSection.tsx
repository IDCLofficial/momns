import Image from "next/image";

interface StructuresSectionProps {
    imgSrc: string;
}

export const StructuresSection = ({imgSrc}: StructuresSectionProps) => {
    const departments = [
  {
    title: "Mining Department: Mining & Regulatory Compliance",
    description: "Oversees licensing, eradication of illegal and indiscriminate mining."
  },
  {
    title: "Industrial Department and Development",
    description: "Promotes industrial parks/layout, revitalization of moribund industries, creating and welcoming new industries through PPP, SPV etc. Ensures industrial infrastructure and ease of doing business in the industrial sector of the State Economy."
  },
  {
    title: "Revenue & Digital Systems",
    description: "Works with Imo State Internal Revenue Service to improve mining revenue collection through the e-revenue collection and ticket vending."
  },
  {
    title: "Planning & Strategy",
    description: "Drives short and long-term industrialization plans."
  },
  {
    title: "Administration and Finance Department",
    description: "Responsible for ensuring the smooth internal operation of the ministry. Manages all aspects of human resources, including staff recruitment, training, deployment, and record-keeping. Oversees office logistics, coordinates internal communication, and ensures that facilities and supplies are well-maintained to support day-to-day activities."
  },
  {
    title: "Accounts Department",
    description: "Manages the ministry’s financial records and ensures accountability in all monetary transactions. Handles the preparation and maintenance of financial statements, processes payments and salaries, and ensures that funds are disbursed in line with approved budgets and government regulations."
  },
  {
    title: "Procurement Department",
    description: "Ensures that all goods, works, and services required by the ministry are acquired in a transparent, cost-effective, and timely manner, in compliance with the Public Procurement Act and state procurement guidelines."
  },
  {
    title: "Planning, Statistics, and Research Department",
    description: "Responsible for driving informed decision-making through data collection, analysis, policy planning, and performance monitoring."
  },
  {
    title: "Technical Department",
    description: "The engine room for all field operations, engineering assessments, environmental monitoring, and technical supervision related to industrial and mining activities within the state."
  },
  {
    title: "Industry Department",
    description: "Primarily responsible for promoting and regulating industrial development across the state. Focuses on creating a conducive environment for MSMEs as well as large-scale industries to thrive."
  },
  {
    title: "Mining Department",
    description: "Responsible for overseeing all activities related to the exploration, exploitation, regulation, and monitoring of solid mineral resources within the state."
  },
  {
    title: "Solid Mineral Department",
    description: "Focuses specifically on the identification, regulation, and sustainable development of the state’s vast solid mineral resources."
  }
];

    return (
        <section className="w-full bg-[#1D1D1D] py-10 sm:py-20">
            <div className="max-w-7xl mx-auto px-2 sm:px-8 text-center flex flex-col items-center">
                {/* Header */}
                <h2 className="text-2xl sm:text-3xl md:text-[43px] font-medium text-white">
                    Our Structure
                </h2>
                <p className="text-white text-sm sm:text-base md:text-[1rem] mb-8 sm:mb-16 w-full sm:w-[80%] md:w-[40%] mx-auto">
                    The Ministry is divided into specialized departments that collectively drive Imo's digital agenda
                </p>

                {/* Main Image */}
                <div className="relative w-full h-[180px] sm:h-[300px] md:h-[500px] rounded-xl overflow-hidden shadow-lg mb-8 sm:mb-20">
                    <Image
                        src={imgSrc}
                        alt="Ministry Building"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Department Cards */}
                <div className="flex flex-col gap-4 w-full max-w-md sm:max-w-2xl md:max-w-4xl mx-auto">
                    {departments.map((department, index) => (
                        <div key={index} className="bg-white p-4 sm:p-6 md:p-8 shadow-md border border-gray-200 rounded text-center">
                            <h3 className="font-bold text-base sm:text-lg md:text-[22px] text-dark-primary mb-2 sm:mb-3">
                                {department?.title}
                            </h3>
                            <p className="text-dark-secondary-body text-xs sm:text-sm md:text-[16px]">
                                {department?.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}; 