import Image from 'next/image';

interface AboutMandateSectionProps {
  label: string;
  title: string;
  subheading: string;
  description: string;
  buttonText: string;
  image1: string;
  image2: string;
  image3: string;
}

export default function AboutMandateSection({
  label,
  title,
  subheading,
  description,
  buttonText,
  image1,
  image2,
  image3,
}: AboutMandateSectionProps) {
  return (
    <section className="w-full bg-gradient-to-r from-green-900/60  via-black to-black py-16 h-[80vh] flex items-center justify-center">
      <div className="w-[94%]">
        {/* top section */}
        <div style={{ padding: '0.8rem', marginBottom: '0.8rem' }} className=" bg-white text-gray-900 rounded-full font-semibold text-sm shadow-lg w-fit">
          {label}
        </div>
        <div style={{ marginBottom: '4rem' }} className="w-[94%] mx-auto flex flex-col md:flex-row justify-between gap-10 items-start">
          {/* Left Side */}
          <div className="flex-1 flex flex-col">
            <h2 className="text-5xl font-extrabold text-white leading-tight mb-8">
              {title}<br />
              {subheading}
            </h2>

          </div>

          {/* Right Side */}
          <div className="flex-1 flex flex-col justify-between h-full gap-12 items-start mt-8 md:mt-0">
            <p className="text-white text-base md:text-lg mb-6 leading-6">
              {description}
            </p>
            <button className="px-6 py-2 bg-white text-gray-900 rounded font-semibold shadow hover:bg-gray-200 transition w-36 h-10">
              {buttonText}
            </button>
          </div>
        </div>
        {/* BOTTOM SECTION */}

        <div className="flex gap-4">
          <div className="relative w-[340px] h-[260px] rounded-lg overflow-hidden">
            <Image
              src={image1}
              alt="Mandate Image 1"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative w-[340px] h-[260px] rounded-lg overflow-hidden">
            <Image
              src={image2}
              alt="Mandate Image 2"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="relative w-[340px] h-[260px] rounded-lg overflow-hidden">
            <Image
              src={image3}
              alt="Mandate Image 3"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
