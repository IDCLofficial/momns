import Image from "next/image";
import Link from "next/link";

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}

const newsList = [
  {
    title: "Imo Commissioner For Industry, Mines, And Solid Minerals, Ibejiako, Vows To Reform Mining Sector",
    description: "Rt.Hon. Barr. Ernest Ibejiako, the Imo State Commissioner for Industry, Mines, and Solid Minerals, has pledged to restore sanity and tackle the challenges facing the mining sector. He made this commitment during a maiden stakeholders’ meeting with miners in Imo State over the weekend.",
    date: "30th May 2025",
    image: "/images/monsm-news1.jpg",
  },
  {
    title: "The Imo State House of Assembly has pledged its support to the Ministry of Industry, Mines and Solid Minerals to put an end to illegal mining activities in the state.",
    description: "It also promised to help strengthen the sector and enhance its proficiency through legislative support.The commitment was made when the Assembly’s Committee on Commerce and Industry interfaced with officials of the Ministry of Industry, Mines and Solid Minerals, led by the commissioner of the ministry, Ernest Ibejiako.",
    date: "30th May 2025",
    image: "/images/monsm-news2.webp",
  },
  {
    title: "IIRS AND MINISTRY OF INDUSTRY, MINES AND SOLID MINERALS UNITE TO BOOST REVENUE",
    description: "The Chairman of the Imo State Internal Revenue Service (IIRS), Mr. Justice Okoye, and his team visited the Commissioner for Industry, Mines and Solid Minerals, Rt. Hon. Chief Ibejiako Ifeanyi Ernest on Tuesday 12th November 2024.",
    date: "30th May 2025",
    image: "/images/monsm-news.jpg",
  },
];

export default function NewsGrid() {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {newsList.map((item, idx) => (
        <Link
          key={idx}
          href={`/news/${slugify(item.title)}`}
          className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col hover:shadow-md transition cursor-pointer"
        >
          <div className="relative w-full h-48">
            <Image src={item.image} alt={item.title} fill className="object-cover" />
            <span className="absolute top-3 left-3 bg-green-600 text-white text-xs px-3 py-1 rounded font-semibold">Top News</span>
          </div>
          <div className="p-5 flex-1 flex flex-col">
            <h3 className="text-lg font-bold text-gray-900 mb-2 leading-snug">{item.title}</h3>
            <p className="text-gray-700 text-sm mb-4 line-clamp-2">{item.description}</p>
            <span className="text-gray-500 text-xs mt-auto">{item.date}</span>
          </div>
        </Link>
      ))}
    </div>
  );
} 