import React from "react";
import Image from "next/image";

const ContactImageSection = () => (
  <div className="w-full flex justify-center py-8">
    <div className="w-full h-[450px] relative rounded overflow-hidden">
      <Image
        src="/images/stock5.jpg"
        alt="Contact support"
        fill
        className="object-cover rounded"
        priority
      />
    </div>
  </div>
);

export default ContactImageSection; 