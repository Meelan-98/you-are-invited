"use client";

import Image from "next/image";

export function ImageBG() {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <Image
        src={"photos/bg_high.webp"}
        alt={"Rasuni and Senesh"}
        fill
        priority
      />
    </div>
  );
}
