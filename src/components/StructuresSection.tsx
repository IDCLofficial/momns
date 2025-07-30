import Image from "next/image";
import AnimatedSection from "./AnimatedSection";

interface StructuresSectionProps {
    imgSrc: string;
}

export const StructuresSection = ({imgSrc}: StructuresSectionProps) => {
    const departments = {
      row1: [
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
  }
],
  
  row2: [
  {
    title: "Mining Department",
    description: "Responsible for overseeing all activities related to the exploration, exploitation, regulation, and monitoring of solid mineral resources within the state."
  },
  {
    title: "Solid Mineral Department",
    description: "Focuses specifically on the identification, regulation, and sustainable development of the state’s vast solid mineral resources."
  }
]
}

    return (
        <section className="w-full bg-[#1D1D1D] py-10 sm:py-20">
            <div className="max-w-7xl mx-auto px-2 sm:px-8 text-center flex flex-col items-center">
                {/* Header */}
                <h2 className="text-2xl sm:text-3xl md:text-[43px] font-medium text-white">
                    Our Structure
                </h2>
                <p className="text-white text-sm sm:text-base md:text-[1rem] mb-8 sm:mb-16 w-full sm:w-[80%] md:w-[40%] mx-auto">
                    The Ministry is divided into specialized departments that collectively drive Imo&apos;s Industralization agenda
                </p>

                {/* Main Image */}
                <div className="relative w-full h-[500px] rounded-xl overflow-hidden shadow-lg mb-20">
              <Image
                  src={imgSrc}
                  alt="Ministry Building"
                  fill
                  className="object-cover"
                  priority
              />
          </div>

          {/* Department Cards Grid */}
          <div className="flex flex-col gap-2 w-full">
              <div className="flex flex-col md:flex-row gap-2 w-full justify-between">
                  {departments.row1.map((department, index) => (
                      <div key={index} className="flex-1 bg-white p-8 shadow-md border border-gray-200">
                          <h3 className="font-bold text-[22px] text-dark-primary mb-3">
                              {department?.title}
                          </h3>
                          <p className="text-dark-secondary-body text-[16px]">
                              {department?.description}
                          </p>
                      </div>
                  ))}
              </div>
              <div className="flex flex-col md:flex-row w-full gap-2">
                  {departments.row2.map((department, index) => (
                      <div key={index} className="flex-1 bg-white p-8 shadow-md border border-gray-200">
                          <AnimatedSection>
                          <h3 className="font-bold text-[22px] text-dark-primary mb-3">
                              {department?.title}
                          </h3>
                          <p className="text-dark-secondary-body text-[16px]">
                              {department?.description}
                          </p>
                          </AnimatedSection>
                      </div>
                  ))}
              </div>
          </div>
          <div className="flex justify-center mt-10">
            <a
              href="/departments"
              className="bg-green-700 hover:bg-green-800 text-white font-semibold px-12 py-3 rounded text-lg transition-colors shadow-md"
            >
              See More
            </a>
          </div>
            </div>
        </section>
    );
}; 
