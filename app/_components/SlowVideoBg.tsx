"use client";

import { useEffect, useRef } from "react";

export default function SlowVideoBg({ src, rate = 0.5 }: { src: string; rate?: number }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (ref.current) ref.current.playbackRate = rate;
  }, [rate]);

  return (
    <video
      ref={ref}
      autoPlay
      muted
      loop
      playsInline
      className="pointer-events-none absolute inset-0 h-full w-full object-cover"
      style={{ zIndex: 0 }}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
