import Image from "next/image";

const teamMembers = [
  {
    name: "Hon. Ernest Ibejiako",
    role: "Commissioner for Mines, Industry, and Natural Resources",
    image: "/images/team.jpg",
    bio: "Appointed by Governor Hope Uzodinma, Hon. Ibejiako is dedicated to driving sustainable development across Imo State's industrial and natural resource sectors."
  },
  {
    name: "Chinwe Okafor",
    role: "Director of Mining Department",
    image: "/images/team.png",
    bio: "Leads the regulatory and compliance efforts for mining activities, ensuring responsible resource management."
  },
  {
    name: "Emeka Nwosu",
    role: "Head of Industrial Development",
    image: "/images/team.jpg",
    bio: "Focuses on revitalizing industries and promoting new investments in Imo State."
  },
  {
    name: "Ngozi Uche",
    role: "Chief Technical Officer",
    image: "/images/team.png",
    bio: "Oversees technical operations and field assessments for all ministry projects."
  },
];

export default function TeamPage() {
  return (
    <section className="w-full min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">Meet Our Leadership Team</h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          The Ministry of Industry, Mines & Natural Resources is led by a dedicated team of professionals committed to sustainable development, innovation, and community empowerment in Imo State.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {teamMembers.map((member, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center">
            <div className="w-32 h-32 relative rounded-full overflow-hidden mb-4 border-4 border-green-100">
              <Image src={member.image} alt={member.name} fill className="object-cover" />
            </div>
            <h3 className="text-xl font-bold text-green-800 mb-1">{member.name}</h3>
            <div className="text-green-600 font-semibold mb-2 text-sm">{member.role}</div>
            <p className="text-gray-600 text-sm text-center">{member.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
} 