"use client";

import { useState } from "react";
import Image from "next/image";

export function ImageBG() {
  const [isHighResLoaded, setIsHighResLoaded] = useState(false);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <Image
        src={"photos/bg_low.webp"}
        alt={"Rasuni and Senesh"}
        fill
        priority
        className={`absolute inset-0 object-cover blur-lg scale-105 transition-opacity duration-700 ease-in-out ${
          isHighResLoaded ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* High-resolution layer */}
      <Image
        src={"photos/bg_high.webp"}
        alt={"Rasuni and Senesh"}
        fill
        priority
        onLoad={() => setIsHighResLoaded(true)}
        className={`absolute inset-0 object-cover transition-opacity duration-700 ease-in-out ${
          isHighResLoaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}
