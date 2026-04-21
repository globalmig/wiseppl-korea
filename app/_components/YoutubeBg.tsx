"use client";

import { useEffect, useRef, useState } from "react";

export default function YoutubeBg() {
  const [visible, setVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 3000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const update = () => {
      const container = containerRef.current;
      const iframe = iframeRef.current;
      if (!container || !iframe) return;
      const w = container.offsetWidth;
      const h = container.offsetHeight;
      const coverW = Math.max(w, (h * 16) / 9);
      const coverH = coverW * (9 / 16);
      iframe.style.width = `${coverW}px`;
      iframe.style.height = `${coverH}px`;
    };

    const ro = new ResizeObserver(update);
    if (containerRef.current) ro.observe(containerRef.current);
    update();
    return () => ro.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <iframe
        ref={iframeRef}
        src="https://www.youtube.com/embed/gvPw1cDd9V8?autoplay=1&mute=1&loop=1&playlist=gvPw1cDd9V8,nIvRg-kt9Dk,7UUePaENqDg&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&iv_load_policy=3&cc_load_policy=0"
        allow="autoplay; fullscreen; encrypted-media"
        allowFullScreen
        title="background video"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-1000"
        style={{ border: "none", pointerEvents: "none", opacity: visible ? 1 : 0 }}
      />
      <div
        className="absolute inset-0 transition-opacity duration-1000"
        style={{
          background: "linear-gradient(135deg, #0f2b5b 0%, #1a3a7a 60%, #0d2045 100%)",
          opacity: visible ? 0 : 1,
          pointerEvents: "none",
        }}
      />

      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(15,43,91,0.65) 0%, rgba(26,86,219,0.45) 30%, rgba(45, 82, 158, 0.65) 50%)" }} />
    </div>
  );
}
