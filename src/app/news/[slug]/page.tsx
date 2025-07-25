import Image from "next/image";
import NewsHeroSection from "./NewsHeroSection";
import NewsBodySection from "./NewsBodySection";

const latestNews = [
  {
    title: "Imo State Unveils New Industrial Park to Boost Local Manufacturing",
    date: "MAY 15, 2025",
    img: "/images/initiatives.png",
  },
  {
    title: "Solid Minerals Sector Reform: Imo Licenses 20 New Mining Operators",
    date: "APRIL 28, 2025",
    img: "/images/ocda.jpeg",
  },
  {
    title: "SkillUp Imo Program Trains 5,000 Youths for Industrial Jobs",
    date: "APRIL 10, 2025",
    img: "/images/skillup.png",
  },
];

export default function NewsDetailPage() {
  return (
    <div className="min-h-screen bg-[#F7F9FA]">
      {/* Section 1: Hero + Body */}
      <section className="relative w-full pb-[180px]"> {/* pb-[180px] ensures body does not overlap next section */}
        <NewsHeroSection/>
        <NewsBodySection>
          {/* Title & Meta */}
          <div className="relative z-10 w-full flex justify-center pb-2">
  <div className="w-full max-w-3xl rounded-xl overflow-hidden shadow-lg">
    <Image src={'/images/homeImage1.png'} alt="News Hero" width={900} height={400} className="object-cover w-full h-[260px] md:h-[320px]" />
  </div>
</div>
<div className="text-center">
  <h1 className="text-2xl md:text-3xl font-bold mb-2">Imo State Drives Economic Growth Through Industrialization and Solid Mineral Development</h1>
</div>

{/* Main Content */}
<div>
  <p className="text-gray-700 mb-6">
    The Imo State Ministry of Industry, Mines, and Solid Minerals is leading the charge in transforming the state into a hub of industrial activity and sustainable resource management. With renewed focus on industrialization, job creation, and mine resource optimization, the ministry is attracting investments and empowering local entrepreneurs across the state.
  </p>
  <p className="text-gray-700 mb-6">
    Under the leadership of Governor Hope Uzodinma, the Ministry has launched strategic initiatives to develop industrial clusters, revive moribund factories, and formalize the solid minerals sector. Through public-private partnerships and regulatory reforms, Imo State is opening new frontiers for growth in agro-processing, manufacturing, mining, and SME development.
  </p>
  
  <div className="w-full flex justify-center my-8">
    <div className="w-full max-w-md rounded-xl overflow-hidden">
      <Image src="/images/homeImage1.png" alt="News Detail" width={600} height={300} className="object-cover w-full h-64" />
    </div>
  </div>

  <div className="flex flex-col md:flex-row gap-8">
    <div className="flex-1">
      <h2 className="font-semibold mb-2">Key Achievements and Focus Areas:</h2>
      <ul className="list-disc ml-6 text-gray-700 mb-6">
        <li>Revitalization of the Songhai Agricultural and Industrial Scheme in Nekede.</li>
        <li>Establishment of industrial parks and business support centers in key zones.</li>
        <li>Mapping and licensing of mineral-rich areas to encourage regulated mining.</li>
        <li>Youth skills acquisition through the SkillUp Imo Program linked with industry demands.</li>
        <li>Promotion of Made-in-Imo goods through trade expos and investor summits.</li>
      </ul>
    </div>
    <div className="flex-1 flex items-center">
      <blockquote className="border-l-4 border-green-600 pl-4 italic text-gray-800">
        <span className="font-bold">“Industrialization is the bridge between poverty and prosperity. With the right infrastructure and partnerships, Imo State is laying the foundation for inclusive economic transformation.”</span>
      </blockquote>
    </div>
  </div>

  <p className="text-gray-700 mt-6">
    In collaboration with national and international development partners, the ministry is also ensuring that mineral exploitation aligns with environmental sustainability and community development. Local content policies are being implemented to ensure Imo citizens benefit directly from the state’s natural wealth.
  </p>
  <p className="text-gray-700 mt-2">
    The Ministry is committed to fostering an enabling environment for businesses, while promoting transparency, accountability, and innovation within the industrial and mining ecosystem of Imo State.
  </p>
  <p className="text-gray-700 mt-2">
    With these bold reforms, Imo is well on its way to becoming a model state for resource-driven industrial development in Nigeria.
  </p>
</div>

        </NewsBodySection>
      </section>
      {/* Section 2: Latest News */}
      <div className="w-full bg-[#181c23] py-10">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-white text-xl font-semibold mb-6">LATEST NEWS</h2>
          <div className="flex flex-col md:flex-row gap-6">
            {latestNews.map((item, idx) => (
              <div key={idx} className="bg-[#232323] rounded-xl overflow-hidden flex-1 min-w-[220px] max-w-xs">
                <div className="relative w-full h-28">
                  <Image src={item.img} alt={item.title} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <div className="text-white text-xs font-semibold mb-2 line-clamp-2">{item.title}</div>
                  <div className="text-gray-400 text-[10px]">{item.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Section 3: Footer */}
    </div>
  );
} 