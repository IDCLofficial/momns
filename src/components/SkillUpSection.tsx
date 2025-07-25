import Image from "next/image";
import Link from "next/link";

export default function SkillUpSection() {
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-center gap-8 py-8 px-4">
      {/* Left: Green Card */}
      <div className="w-[90%] md:w-[40%]">
        <Image src="/images/imo-map.jpeg" alt="SkillUp Imo" width={600} height={400} className="object-cover rounded-xl" priority />
      </div>
      {/* Right: Text and Buttons */}
      <div className="w-[90%] md:w-[55%] flex-1 flex flex-col justify-center items-start max-w-2xl px-2">
        <h2 className="text-5xl font-bold text-gray-900 mb-4 leading-tight">Strategic Objectives (2025–2030)
        </h2>
        <p className="text-gray-500 text-lg mb-8 max-w-[700px]">
        The Ministry of Industry and Solid Minerals (MISM) is actively pursuing key projects to drive industrial development and sustainable mineral resource management across Imo State. Project updates, along with field photos of ministry personnel at work sites, will be published regularly to ensure transparency and community engagement.
The Ministry has outlined ambitious yet attainable goals to transform Imo State’s industrial and mining landscape over the next five years.
        </p>
        <div className="flex flex-col lg:flex-row gap-4 mt-4">
          <Link href="/about" style={{paddingTop: '.5rem', paddingBottom: '.5rem'}} className="bg-green-700 hover:bg-green-800 text-white font-semibold px-8 py-2 rounded text-lg transition-colors min-w-[150px] text-center">
            See More
          </Link>
          <Link href="/contact-us" style={{paddingTop: '.5rem', paddingBottom: '.5rem'}} className="border border-green-700 text-green-700 font-semibold px-8 py-2 rounded text-lg hover:bg-green-50 transition-colors min-w-[180px] text-center">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
} 