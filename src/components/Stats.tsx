'use client'

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  { value: 120, suffix: "", desc: "Industries Supported Across Imo State" },
  { value: 35, suffix: "", desc: "Mining Licenses Issued" },
  { value: 8000, suffix: "+", desc: "Jobs Created in Mining & Industry" },
  { value: 50, suffix: "M+", desc: "Investment Attracted (₦)" },
];

export default function Stats() {
  const [ref, inView] = useInView({
    triggerOnce: true, // only animate once
    threshold: 0.3, // 30% of the section must be visible
  });

  return (
    <section ref={ref} className="w-full bg-[#232323] p-8 py-20">
      <div className="w-full mx-auto flex flex-col md:flex-row justify-between items-center divide-y md:divide-y-0 md:divide-x divide-gray-500">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="flex-1 flex flex-col items-center justify-center py-6 md:py-0"
          >
            <span className="text-white text-3xl md:text-4xl font-bold mb-2">
              {inView ? (
                <CountUp end={stat.value} duration={3} separator="," />
              ) : (
                "0"
              )}
              {stat.suffix}
            </span>
            <span className="text-gray-200 text-sm md:text-base text-center leading-tight">
              {stat.desc}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
