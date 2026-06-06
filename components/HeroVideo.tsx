"use client";

import Image from "next/image";

interface HeroVideoProps {
  videoId: string;
  fallbackThumb?: string;
}

export default function HeroVideo({ videoId, fallbackThumb }: HeroVideoProps) {
  const thumb = fallbackThumb ?? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Fallback thumbnail shown on mobile (autoplay blocked) or before video loads */}
      <Image
        src={thumb}
        alt="Hero background"
        fill
        className="object-cover md:hidden"
        priority
        unoptimized
      />

      {/* YouTube iframe background — desktop */}
      <div className="hidden md:block absolute inset-0">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&playsinline=1&iv_load_policy=3&disablekb=1&modestbranding=1`}
          allow="autoplay; encrypted-media"
          title="Hero background video"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{
            width: "100vw",
            height: "56.25vw",   /* 16:9 */
            minHeight: "100vh",
            minWidth: "177.78vh", /* 16:9 */
          }}
        />
      </div>

      {/* Dark green overlay */}
      <div className="absolute inset-0 bg-green-950/75" />
    </div>
  );
}
