import Image from "next/image";
import { Play, Headphones, Calendar } from "lucide-react";
import { urlFor } from "@/lib/sanity";
import type { Sermon } from "@/lib/queries";

export default function SermonCard({ sermon }: { sermon: Sermon }) {
  const date = new Date(sermon.date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-brand-400/60 hover:shadow-md transition-all group">
      <div className="relative h-44 bg-gray-100 flex items-center justify-center">
        {sermon.thumbnail ? (
          <Image
            src={urlFor(sermon.thumbnail).width(400).height(220).url()}
            alt={sermon.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-12 h-12 bg-brand-50 rounded-full flex items-center justify-center">
            <Play size={24} className="text-brand-500 ml-1" />
          </div>
        )}
        {sermon.thumbnail && (
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
        )}
      </div>

      <div className="p-5">
        {sermon.series && (
          <p className="text-brand-500 text-xs font-semibold uppercase tracking-wider mb-1">{sermon.series}</p>
        )}
        <h3 className="text-gray-900 font-semibold text-base leading-snug mb-1 line-clamp-2">{sermon.title}</h3>
        <p className="text-gray-500 text-sm mb-3">{sermon.speaker}</p>

        <div className="flex items-center gap-1 text-gray-400 text-xs mb-4">
          <Calendar size={12} />
          <span>{date}</span>
          {sermon.location && <span className="ml-2 text-brand-400">· {sermon.location.name}</span>}
        </div>

        <div className="flex gap-2">
          {sermon.videoUrl && (
            <a
              href={sermon.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-gold-500 hover:bg-gold-400 text-white text-xs font-semibold rounded-lg transition-colors"
            >
              <Play size={13} /> Watch
            </a>
          )}
          {sermon.audioUrl && (
            <a
              href={sermon.audioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 border border-brand-200 hover:border-brand-400 text-brand-600 hover:text-brand-700 text-xs font-semibold rounded-lg transition-colors"
            >
              <Headphones size={13} /> Listen
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
