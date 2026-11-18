"use client";

import { useState } from "react";
import Image from "next/image";
import { Grid } from "antd";

const { useBreakpoint } = Grid;

export function ImageBG() {
  const screens = useBreakpoint();
  const [isHighResLoaded, setIsHighResLoaded] = useState(false);

  const isMobile = screens.md === false;

  const lowResSrc = isMobile
    ? "photos/bg_portrait_low.webp"
    : "photos/bg_low.webp";
  const highResSrc = isMobile
    ? "photos/bg_portrait_high.webp"
    : "photos/bg_high.webp";

  return (
    <div className="relative w-full h-full overflow-hidden">
      <Image
        src={lowResSrc}
        alt={"Rasuni and Senesh"}
        fill
        priority
        className={`absolute inset-0 object-cover blur-lg scale-105 transition-opacity duration-700 ease-in-out ${
          isHighResLoaded ? "opacity-0" : "opacity-100"
        }`}
      />

      <Image
        src={highResSrc}
        alt={"Rasuni and Senesh"}
        fill
        priority
        onLoad={() => setIsHighResLoaded(true)}
        key={highResSrc} // Forces image reload/re-animation when switching between portrait and landscape
        className={`absolute inset-0 object-cover transition-opacity duration-700 ease-in-out ${
          isHighResLoaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}
