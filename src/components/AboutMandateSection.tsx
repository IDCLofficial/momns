import Image from 'next/image';
import AnimatedSection from './AnimatedSection';
import Link from 'next/link';

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
    <section className={`relative w-full p-8 px-4 py-20 bg-[url('/images/gradient.png')] bg-no-repeat bg-cover shadow-lg overflow-hidden`}>
      
      <div className="w-[94%] mx-auto">

        {/* top section */}
        <div className="px-3 py-2 mb-3 bg-white text-gray-900 animate-bounce rounded-full font-semibold text-sm shadow-lg w-fit">
          {label}
        </div>
        <div className="mb-16  mx-auto flex flex-col lg:flex-row justify-between gap-10 items-start">
          {/* Left Side */}
          <div className="flex-1 flex flex-col">
            <h2 className=" text-2xl sm:text-3xl lg:text-5xl font-extrabold text-white leading-tight mb-2 lg:mb-8">
              {title}<br />
              {subheading}
            </h2>
          </div>
          {/* Right Side */}
          <div className="flex-1 flex flex-col justify-between h-full gap-12 items-start mt-2 sm:mt-4 lg:mt-8">
            <p className="text-white text-base lg:text-lg mb-6 leading-6">
              {description}
            </p>
            <Link href="/about" passHref>
              <button className="px-4 sm:px-6 py-2 animate-pulse bg-white text-gray-900 rounded font-semibold shadow hover:bg-gray-200 transition w-32 sm:w-36 min-w-[120px] h-10 text-sm sm:text-base text-center flex items-center justify-center whitespace-nowrap">
                {buttonText}
              </button>
            </Link>
          </div>
        </div>
        {/* BOTTOM SECTION */}
        <AnimatedSection delay={0.3} yOffset={100}>
        <div className="flex flex-wrap gap-4 pb-2">
            <div className="relative w-[90vw] sm:w-[220px] md:w-[340px] lg:w-[680px] h-[180px] sm:h-[200px] md:h-[220px] lg:h-[260px] rounded-lg overflow-hidden transition-transform duration-300 group hover:scale-105 hover:shadow-2xl">
              
              <Image
                src={image1}
                alt="Mandate Image 1"
                fill
                className="object-cover"
                priority
              />
               <span className="text-white text-xl font-semibold opacity-0 group-hover:opacity-100 transition duration-700 drop-shadow-md animate-fadeIn"></span>
              <div className="absolute inset-0 bg-black/60   flex items-end justify-center">
                <span className="text-gray-200 md:tracking-wide lg:tracking-[.75rem] text-[10px] md:text-xl font-semibold w-full px-1 md:px-4 pb-4">
                Industrial Development & Expansion

                </span>
              </div>
            </div>
            <div className="relative w-[90vw] sm:w-[140px] md:w-[220px] lg:w-[340px] h-[180px] sm:h-[200px] md:h-[220px] lg:h-[260px] rounded-lg overflow-hidden transition-transform duration-300 group hover:scale-105 hover:shadow-2xl">
              <Image
                src={image2}
                alt="Mandate Image 2"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black/60 flex items-end justify-center">
              <span className="text-gray-200 tracking-wide lg:tracking-[.75rem] text-[10px] md:text-xl font-semibold w-full px-4 pb-4">
              Responsible Mining & Resource Governance
              </span>
              </div>
            </div>
            <div className="relative w-[90vw] sm:w-[140px] md:w-[220px] lg:w-[340px] h-[180px] sm:h-[200px] md:h-[220px] lg:h-[260px] rounded-lg overflow-hidden transition-transform duration-300 group hover:scale-105 hover:shadow-2xl">
              <Image
                src={image3}
                alt="Mandate Image 2"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black/60 flex items-end justify-center">
              <span className="text-gray-200 tracking-wide lg:tracking-[.75rem] text-[10px] md:text-xl font-semibold w-full px-4 pb-4">
              Sustainable Resource Utilization
              </span>
              </div>
            </div>
            
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
