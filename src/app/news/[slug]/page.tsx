import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const newsList = [
  {
    title: "Imo Commissioner For Industry, Mines, And Solid Minerals, Ibejiako, Vows To Reform Mining Sector",
    date: "30th May 2025",
    image: "/images/monsm-news1.jpg",
    content: `Rt.Hon. Barr. Ernest Ibejiako, the Imo State Commissioner for Industry, Mines, and Solid Minerals, has pledged to restore sanity and tackle the challenges facing the mining sector. He made this commitment during a maiden stakeholders’ meeting with miners in Imo State over the weekend. During the meeting, the commissioner outlined a comprehensive reform agenda aimed at eradicating illegal mining, improving regulatory compliance, and fostering sustainable practices. He emphasized the importance of collaboration between the government, miners, and host communities to ensure that mining activities contribute positively to the state's economy while protecting the environment. The commissioner also announced plans for regular stakeholder engagements and the introduction of new monitoring technologies to track mining operations across the state. Stakeholders at the meeting expressed optimism about the ministry’s new direction and pledged their support for the reforms.`,
  },
  {
    title: "The Imo State House of Assembly has pledged its support to the Ministry of Industry, Mines and Solid Minerals to put an end to illegal mining activities in the state.",
    date: "30th May 2025",
    image: "/images/monsm-news2.webp",
    content: `The Imo State House of Assembly has reaffirmed its commitment to supporting the Ministry of Industry, Mines, and Solid Minerals in its efforts to eradicate illegal mining. During a recent session, the Assembly’s Committee on Commerce and Industry met with ministry officials, led by Commissioner Ernest Ibejiako, to discuss strategies for strengthening the sector. Lawmakers promised to provide legislative backing for new policies and to work closely with the ministry to enhance sector proficiency. The committee also highlighted the need for increased funding, better enforcement of mining regulations, and community sensitization programs. Commissioner Ibejiako thanked the Assembly for its support and reiterated the ministry’s resolve to restore order and promote legal mining operations throughout Imo State.`,
  },
  {
    title: "IIRS AND MINISTRY OF INDUSTRY, MINES AND SOLID MINERALS UNITE TO BOOST REVENUE",
    date: "30th May 2025",
    image: "/images/monsm-news.jpg",
    content: `In a bid to enhance revenue generation, the Imo State Internal Revenue Service (IIRS) and the Ministry of Industry, Mines, and Solid Minerals have formed a strategic partnership. On November 12th, 2024, IIRS Chairman Mr. Justice Okoye and his team visited Commissioner Rt. Hon. Chief Ibejiako Ifeanyi Ernest to discuss the digitization of revenue collection in the solid mineral and industrial sectors. The partnership aims to introduce e-revenue collection systems, improve transparency, and ensure that all dues are properly accounted for. Both parties agreed to set up a joint task force to monitor compliance and address challenges faced by miners and industrial operators. The commissioner expressed confidence that the collaboration would significantly boost the state’s internally generated revenue and foster sustainable sector growth.`,
  },
];

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}

export default function NewsDetailPage({ params }: { params: { slug: string } }) {
  const news = newsList.find(
    (item) => slugify(item.title) === params.slug
  );

  if (!news) return notFound();

  return (
    <div className="bg-white min-h-screen">
      <div className="w-full max-w-3xl mx-auto pt-8 px-4">
        <Link href="/news" className="inline-block mb-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 font-semibold transition">&larr; Go Back</Link>
      </div>
      <div className="w-full flex justify-center">
        <div className="w-full max-w-3xl rounded-xl overflow-hidden">
          <Image src={news.image} alt={news.title} width={900} height={400} className="object-cover w-full h-[350px]" />
        </div>
      </div>
      <div className="w-full max-w-3xl mx-auto text-center mt-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">{news.title}</h1>
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-gray-500 text-sm mb-6">
          <span>{news.date}</span>
        </div>
      </div>
      <div className="w-full max-w-3xl mx-auto mt-4 px-4">
        <p className="text-gray-700 text-base leading-relaxed whitespace-pre-line">{news.content}</p>
      </div>
    </div>
  );
} 