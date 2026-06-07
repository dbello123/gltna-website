import Image from "next/image";
import { Calendar, MapPin, ExternalLink } from "lucide-react";
import { urlFor } from "@/lib/sanity";
import type { Event } from "@/lib/queries";

export default function EventCard({ event }: { event: Event }) {
  const start = new Date(event.startDate);
  const month = start.toLocaleDateString("en-US", { month: "short" }).toUpperCase();
  const day = start.getDate();
  const fullDate = start.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" });
  const time = start.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });

  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-brand-400/60 hover:shadow-md transition-all flex flex-col sm:flex-row">
      {event.image && (
        <div className="relative h-40 sm:h-auto sm:w-36 shrink-0 bg-gray-100">
          <Image
            src={urlFor(event.image).width(300).height(200).url()}
            alt={event.title}
            fill
            className="object-cover"
          />
        </div>
      )}

      <div className="flex gap-4 p-5 flex-1 min-w-0">
        <div className="shrink-0 w-12 text-center">
          <p className="text-brand-500 text-xs font-bold">{month}</p>
          <p className="text-gray-900 text-2xl font-bold leading-none">{day}</p>
        </div>

        <div className="min-w-0">
          {event.featured && (
            <span className="inline-block text-xs font-semibold text-brand-600 bg-brand-50 border border-brand-200 rounded-full px-2 py-0.5 mb-2">
              Featured
            </span>
          )}
          <h3 className="text-gray-900 font-semibold text-base leading-snug line-clamp-2 mb-1">{event.title}</h3>
          <p className="text-gray-500 text-xs mb-2">{fullDate} · {time}</p>

          {(event.venue || event.city) && (
            <div className="flex items-center gap-1 text-gray-400 text-xs mb-3">
              <MapPin size={12} className="shrink-0" />
              <span className="truncate">
                {[event.venue, event.city, event.stateProvince].filter(Boolean).join(", ")}
              </span>
            </div>
          )}

          {event.description && (
            <p className="text-gray-600 text-sm line-clamp-2 mb-3">{event.description}</p>
          )}

          {event.registrationUrl && (
            <a
              href={event.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-brand-600 hover:text-brand-700 text-sm font-medium transition-colors"
            >
              Register / Learn More <ExternalLink size={13} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
