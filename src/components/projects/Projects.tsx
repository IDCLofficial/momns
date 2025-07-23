import Image from "next/image";

export default function ProjectsSection() {
  return (
    <section className="w-full py-16 bg-white flex flex-col lg:flex-row items-center gap-10 px-6 lg:px-20">
      <div className="flex-1 flex flex-col gap-6">
        <h2 className="text-3xl lg:text-4xl font-bold">Projects: Ministry of Industry and Solid Minerals</h2>
        <p className="text-gray-700">The Ministry of Industry and Solid Minerals (MISM) is actively pursuing key projects to drive industrial development and sustainable mineral resource management across Imo State. Project updates, along with field photos of ministry personnel at work sites, will be published regularly to ensure transparency and community engagement.</p>
        <ul className="list-disc ml-6 text-gray-700 space-y-2">
          <li><b>Rehabilitation of Industrial Layouts:</b> Upgrading infrastructure and utilities within designated industrial layouts to attract investors and support MSMEs.</li>
          <li><b>Construction of Mining Bays:</b> Establishing designated zones for safe, regulated mining operations to reduce environmental degradation.</li>
          <li><b>Ban on Urban Mining Activities:</b> Enforcement of a total ban on indiscriminate urban mining, coupled with remediation of the Imo ecosystem damaged by illegal activities.</li>
          <li><b>Development of Industrial Parks:</b> Creation of industrial parks across the three senatorial zones, with provision of roads, power, and water to catalyze economic activity.</li>
          <li><b>Digital Revenue Management Partnership with IIRS:</b> Collaboration with the Imo Internal Revenue Service (IIRS) to digitize revenue collection and enhance transparency in the solid mineral and industrial sectors.</li>
          <li><b>Stakeholder Engagement for Sector Regularization:</b> Continuous dialogue with host communities, miners, investors, and regulatory agencies to streamline operations and promote legal compliance.</li>
        </ul>
        <div className="flex gap-6 mt-6">
          <Image src="/images/ocda.jpeg" alt="Project Field" width={120} height={80} className="rounded" />
          <Image src="/images/iirs.jpeg" alt="Initiative" width={120} height={80} className="rounded" />
        </div>
      </div>
      <div className="flex-1 flex justify-center">
        <div className="w-full max-w-md h-72 relative rounded-lg overflow-hidden">
          <Image src="/images/stock1.jpg" alt="Projects" fill className="object-cover" />
        </div>
      </div>
    </section>
  );
} 