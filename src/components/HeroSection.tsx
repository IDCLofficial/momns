import Image from 'next/image';

interface HeroSectionProps {
  overlayText: string;
  heading: string;
  subheading: string;
  description: string;
  backgroundImage: string; 
}

export default function HeroSection({
  overlayText,
  heading,
  subheading,
  description,
  backgroundImage,
}: HeroSectionProps) {
  return (
    <section className="relative w-full h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Dynamic Background image */}
      <Image
        src={backgroundImage}
        alt="Hero background"
        fill
        className="object-cover object-center z-0"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Content */}
      <div className="relative z-20 w-[94%] mx-auto px-6 flex flex-col items-start">
        <div
          style={{ paddingLeft: '1rem', paddingRight: '1rem' }}
          className="px-20 flex justify-center text-2xl items-center bg-white text-gray-900 rounded-full font-semibold shadow-lg min-h-12"
        >
          {overlayText}
        </div>

        <h1
          style={{ marginBottom: '1rem', marginTop: '1rem' }}
          className="text-[62px] md:text-5xl font-extrabold text-white leading-tight"
        >
          {heading}<br />
          {subheading}
        </h1>

        <p className="text-white text-[20px] md:text-xl font-medium max-w-xl">
          {description}
        </p>
      </div>
    </section>
  );
}
