import { ReactNode, useRef, useEffect, useState } from "react";

interface InfiniteCarouselProps {
  children: ReactNode;
  speed?: number;
  pauseOnHover?: boolean;
}

export function InfiniteCarousel({ 
  children, 
  speed = 30,
  pauseOnHover = true 
}: InfiniteCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div 
      className="relative overflow-hidden"
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      <div
        ref={containerRef}
        className="flex gap-4"
        style={{
          animation: `infinite-scroll ${speed}s linear infinite`,
          animationPlayState: isPaused ? "paused" : "running",
        }}
      >
        {/* Original items */}
        {children}
        {/* Duplicated items for seamless loop */}
        {children}
      </div>
    </div>
  );
}
