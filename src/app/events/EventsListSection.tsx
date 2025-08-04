import Image from "next/image";
import Link from "next/link";

const events = [
  {
    date: "DECEMBER 15, 2025",
    location: "GOVERNMENT HOUSE, OWERRI",
    title: "Mining Sector Stakeholders Summit",
    description: "A comprehensive summit bringing together mining operators, investors, and government officials to discuss sector reforms and investment opportunities in Imo State's mining industry.",
    img: "/images/commisioner.jpg",
    details: `Led by Commissioner Ernest Ibejiako, this summit focused on regulatory reforms, investment incentives, and sustainable mining practices. Key outcomes included new licensing frameworks and community development agreements for mining operations.`,
    dateString: "2025-12-15T09:00:00",
  },
 
  
  {
    date: "JULY 7, 2025",
    location: "INDUSTRIAL PARK SITE, OWERRI",
    title: "Industrial Park Groundbreaking Ceremony",
    description: "Official groundbreaking ceremony for the new industrial park development project that will create employment and attract manufacturing investments.",
    img: "/images/stock3.jpg",
    details: `The Governor and Commissioner led the groundbreaking ceremony for the 500-hectare industrial park. The facility will include manufacturing zones, logistics centers, and support infrastructure for industrial development.`,
    dateString: "2025-07-25T14:00:00",
  },
  {
    date: "JULY 18, 2025",
    location: "MINISTRY HEADQUARTERS, OWERRI",
    title: "Mining Regulation Compliance Workshop",
    description: "Workshop for mining operators on new regulatory requirements, environmental impact assessments, and community development obligations.",
    img: "/images/stock4.jpg",
    details: `The ministry introduced new mining regulations aimed at curbing illegal activities and ensuring sustainable mining practices. Operators were trained on compliance requirements and best practices.`,
    dateString: "2025-07-18T09:00:00",
  },
];

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}

const now = new Date();
const upcomingEvents = events.filter(e => new Date(e.dateString) >= now);
const pastEvents = events.filter(e => new Date(e.dateString) < now);

export default function EventsListSection() {
  return (
    <section className="w-full max-w-6xl mx-auto py-16 px-4">
      {/* Upcoming Events Section */}
      <h2 className="text-2xl md:text-3xl font-bold mb-8">Upcoming Events</h2>
      {upcomingEvents.length > 0 ? (
        <div className="flex flex-col gap-8 mb-16">
          {upcomingEvents.map((event) => (
            <div key={event.title + event.dateString} className="flex flex-col md:flex-row gap-6 items-center border-b pb-8 last:border-b-0">
              <div className="w-full md:w-64 h-40 relative rounded overflow-hidden flex-shrink-0">
                <Image src={event.img} alt={event.title} fill className="object-cover" />
              </div>
              <div className="flex-1 flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center gap-2 text-gray-500 text-xs mb-1">
                    <span>{event.date}</span>
                    <span className="hidden md:inline">|</span>
                    <span>{event.location}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-1">{event.title}</h3>
                  <p className="text-gray-700 text-sm mb-2">{event.description}</p>
                </div>
                <div className="flex justify-end md:justify-center">
                  <Link href={`/events/${slugify(event.title)}`} className="border border-green-600 text-green-700 px-4 py-2 rounded font-semibold hover:bg-green-50 transition">More Information</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-gray-400 italic mb-16">No upcoming events at this time.</div>
      )}
      {/* Past Events Section */}
      <h2 className="text-2xl md:text-3xl font-bold mb-8">Past Events</h2>
      {pastEvents.length > 0 ? (
        <div className="flex flex-col gap-8">
          {pastEvents.map((event) => (
            <div key={event.title + event.dateString} className="flex flex-col md:flex-row gap-6 items-center border-b pb-8 last:border-b-0 opacity-70">
              <div className="w-full md:w-64 h-40 relative rounded overflow-hidden flex-shrink-0">
                <Image src={event.img} alt={event.title} fill className="object-cover" />
              </div>
              <div className="flex-1 flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center gap-2 text-gray-500 text-xs mb-1">
                    <span>{event.date}</span>
                    <span className="hidden md:inline">|</span>
                    <span>{event.location}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-1">{event.title}</h3>
                  <p className="text-gray-700 text-sm mb-2">{event.description}</p>
                </div>
               
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-gray-400 italic">No past events yet.</div>
      )}
    </section>
  );
} 