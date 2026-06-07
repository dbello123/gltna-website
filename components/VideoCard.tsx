"use client";

import Image from "next/image";
import { useState } from "react";
import { Play, X } from "lucide-react";

interface VideoCardProps {
  videoId: string;
  title: string;
  subtitle?: string;
}

export default function VideoCard({ videoId, title, subtitle }: VideoCardProps) {
  const [playing, setPlaying] = useState(false);
  const thumb = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <>
      <button
        onClick={() => setPlaying(true)}
        className="group relative w-full rounded-2xl overflow-hidden bg-white border border-gray-200 hover:border-brand-400/60 hover:shadow-md transition-all text-left"
      >
        <div className="relative h-44 bg-gray-100">
          <Image
            src={thumb}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            unoptimized
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-14 h-14 bg-gold-500/90 group-hover:bg-gold-400 rounded-full flex items-center justify-center shadow-lg transition-colors">
              <Play size={22} className="text-white ml-1" fill="currentColor" />
            </div>
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-gray-900 font-semibold text-sm leading-snug line-clamp-2">{title}</h3>
          {subtitle && <p className="text-gray-500 text-xs mt-1">{subtitle}</p>}
        </div>
      </button>

      {playing && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setPlaying(false)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gold-400 transition-colors"
            onClick={() => setPlaying(false)}
          >
            <X size={32} />
          </button>
          <div
            className="w-full max-w-4xl aspect-video rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      )}
    </>
  );
}
