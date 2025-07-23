import AnimatedSection from "./AnimatedSection";

export const ObjectivesSection = () => {
    const objectives = [
        {
            title: "Industrial Development & Expansion",
            description: "Promote small, medium, and large-scale industries through enabling infrastructure, access to finance, and business support services."
        },
        {
            title: "Responsible Mining & Resource Governance",
            description: "Formalize mining activities, ensure environmental compliance, and enforce licensing standards to curb illegal operations."
        },
        {
            title: "Investment Promotion & Private Sector Engagement",
            description: "Attract local and foreign direct investment (FDI) into industrial zones and mineral-rich corridors through clear incentives and streamlined processes."
        },
        {
            title: "Job Creation & Youth Empowerment",
            description: "Channel industrial and mining projects into high-employment value chains, with skill development programs tailored to local needs."
        },
        {
            title: "Sustainable Resource Utilization",
            description: "Integrate sustainability principles in the extraction and use of solid minerals, ensuring intergenerational equity and ecological protection."
        },
        {
            title: "Data-Driven Planning & Transparency",
            description: "Maintain a comprehensive geo-mineral and industrial database to guide policy, licensing, and investment decisions."
        }
    ];

    const coreValues = [
        "Accountability",
        "Sustainability",
        "Innovation",
        "Transparency",
        "Collaboration",
        "Service Excellence"
    ];

    return (
        <section className="w-full bg-white py-20">
            <div className="max-w-6xl mx-auto px-8">
                {/* Imo State Ministry of Industry, Mines, and Solid Minerals Objectives */}
                <div className="mb-16">
                    <h2 className="text-2xl sm:text-3xl md:text-[43px] font-medium text-center mb-12">
                        Imo State Ministry of Industry, Mines, and Solid Minerals objectives
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {objectives.map((objective, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 shadow-md text-center">
                               <AnimatedSection>
                                <h3 className="font-medium text-[22px] mb-3">
                                    {objective.title}
                                </h3>
                                </AnimatedSection>
                                <AnimatedSection delay={0.3} yOffset={100}>
                                <p className="text-dark-primary-body text-[1rem]">
                                    {objective.description}
                                </p>
                                </AnimatedSection>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Our Core Values */}
                <div>
                    <h2 className="text-[43px] font-medium text-center mb-12">
                        Our Core Values
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-6">
                        {coreValues.slice(0, 4).map((value, index) => (
                            <div key={index} className="bg-white p-6 border border-gray-200 rounded-lg shadow-md text-center">
                                <span className="font-bold text-lg">{value}</span>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center gap-6">
                        {coreValues.slice(4).map((value, index) => (
                            <div key={index} className="bg-white border border-gray-200 p-6 rounded-lg shadow-md text-center w-48">
                                <span className="font-bold text-lg">{value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}; 