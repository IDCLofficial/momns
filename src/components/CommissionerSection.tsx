import Image from 'next/image';

interface CommissionerSectionProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  bio: string;
  details: string;
  buttonText: string;
}

export default function CommissionerSection({
  imageSrc,
  imageAlt,
  title,
  bio,
  details,
  buttonText,
}: CommissionerSectionProps) {
  return (
    <section className="w-full bg-[#f4f8f9] h-[80vh] py-16 flex justify-center">
      <div className="w-[94%] max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
        {/* Image */}
        <div className="flex-shrink-0">
          <div className="relative w-[380px] h-[380px] rounded-2xl overflow-hidden bg-white shadow">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="flex-1 flex flex-col items-start">
          <h2 className="text-5xl md:text-4xl font-bold text-gray-900">
            {title}
          </h2>
          <p className="text-[#777777]  text-base md:text-lg mb-4">
            {bio}
          </p>
         
          <p className="text-[#777777] text-base md:text-lg mb-6">
            {details}
          </p>
          <button className="px-7 py-2 bg-green-600 text-white rounded font-semibold shadow hover:bg-green-700 transition">
            {buttonText}
          </button>
        </div>
      </div>
    </section>
  );
}
