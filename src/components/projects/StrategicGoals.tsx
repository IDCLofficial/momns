import Image from "next/image";

export default function StrategicGoals() {
  return (
    <section className="w-full py-16 bg-white flex flex-col lg:flex-row items-center gap-10 px-6 lg:px-20 border-t">
      <div className="flex-1 flex flex-col gap-6">
        <h2 className="text-3xl lg:text-4xl font-bold">Strategic Goals (2025–2030)</h2>
        <p className="text-gray-700">The Ministry has outlined ambitious yet attainable goals to transform Imo State’s industrial and mining landscape over the next five years:</p>
        <ul className="list-disc ml-6 text-gray-700 space-y-2">
          <li><b>Establish Industrial Clusters in All Zones:</b> Build at least one functional, resource-aligned industrial park in each senatorial district to harness local advantages and stimulate regional growth.</li>
          <li><b>Reduce Illegal Mining by Ninety Percent:</b> Enforce compliance through dedicated task forces, community-based surveillance, and digitized licensing and monitoring systems.</li>
          <li><b>Double Solid Mineral Revenue Contribution to IGR:</b> Strengthen value chains by encouraging mineral processing, certification, and local beneficiation for increased exports and revenue generation.</li>
          <li><b>Empower Twenty Thousand SMEs and Youth-Owned Businesses:</b> Facilitate access to funding, mentorship, and technical training through partnerships with development banks, innovation hubs, and vocational institutions.</li>
          <li><b>Rehabilitate or Privatize Dormant State-Owned Industries:</b> Conduct operational audits and implement Public-Private Partnerships (PPP) and Special Purpose Vehicle (SPV) frameworks to revitalize or divest non-functional assets.</li>
          <li><b>Adopt a Digital Mining and Industry Registry:</b> Launch a GIS-powered platform to map mineral deposits, industrial zones, and investment pipelines for better decision-making and investor access.</li>
        </ul>
      </div>
      <div className="flex-1 flex justify-center">
        <div className="w-full max-w-md h-72 relative rounded-lg overflow-hidden">
          <Image src="/images/initiatives.png" alt="Strategic Goals" fill className="object-cover" />
        </div>
      </div>
    </section>
  );
} 