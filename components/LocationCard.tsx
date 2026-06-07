import Link from "next/link";
import { MapPin, Phone, Clock, Video, Instagram } from "lucide-react";
import type { Location } from "@/lib/queries";

const INSTAGRAM: Record<string, string> = {
  "GLT Houston": "https://www.instagram.com/glthouston",
  "GLT Dallas": "https://www.instagram.com/gltdallas",
  "GLT Calgary": "https://www.instagram.com/gltcalgary",
};

const SLUG: Record<string, string> = {
  "GLT Houston": "houston",
  "GLT Dallas": "dallas",
  "GLT Calgary": "calgary",
};

/* Which services are on Zoom per extension */
const ZOOM: Record<string, { sunday?: boolean; monday?: boolean; wednesday?: boolean }> = {
  "GLT Houston": { sunday: true, monday: true, wednesday: true },
  "GLT Dallas": { monday: true, wednesday: true },
  "GLT Calgary": { monday: true, wednesday: true },
};

export default function LocationCard({ loc }: { loc: Location }) {
  const slug = SLUG[loc.name] ?? loc.slug?.current;
  const instagram = INSTAGRAM[loc.name];
  const zoom = ZOOM[loc.name] ?? {};

  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-brand-400/60 hover:shadow-md transition-all flex flex-col">
      <h3 className="text-xl font-bold text-gray-900 mb-1">{loc.name}</h3>
      <p className="text-brand-500 text-sm font-medium mb-4">
        {loc.city}{loc.stateProvince ? `, ${loc.stateProvince}` : ""}
        {loc.country && loc.country !== "USA" && loc.country !== "US" ? ` · ${loc.country}` : ""}
      </p>

      <div className="space-y-3 text-sm text-gray-600">
        <div className="flex gap-2">
          <MapPin size={15} className="text-brand-500 shrink-0 mt-0.5" />
          <span>{loc.address}</span>
        </div>
        {loc.phone && (
          <div className="flex gap-2">
            <Phone size={15} className="text-brand-500 shrink-0 mt-0.5" />
            <a href={`tel:${loc.phone}`} className="hover:text-brand-500 transition-colors">{loc.phone}</a>
          </div>
        )}
      </div>

      <div className="mt-5 pt-5 border-t border-gray-100">
        <div className="flex items-center gap-2 mb-3">
          <Clock size={14} className="text-gold-500" />
          <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Service Times</span>
        </div>
        <ul className="space-y-2 text-sm">
          {loc.sundayTime && (
            <li className="flex justify-between items-start gap-2">
              <span className="text-gray-500 shrink-0">Sunday</span>
              <div className="text-right">
                <span className="text-gray-900 font-semibold block">{loc.sundayTime}</span>
                {zoom.sunday && (
                  <span className="inline-flex items-center gap-1 text-xs text-blue-600 mt-0.5">
                    <Video size={10} /> Also on Zoom
                  </span>
                )}
              </div>
            </li>
          )}
          {loc.mondayTime && (
            <li className="flex justify-between items-start gap-2">
              <span className="text-gray-500 shrink-0">Monday Prayer</span>
              <div className="text-right">
                <span className="text-gray-900 font-semibold block">{loc.mondayTime}</span>
                {zoom.monday && (
                  <span className="inline-flex items-center gap-1 text-xs text-blue-600 mt-0.5">
                    <Video size={10} /> Also on Zoom
                  </span>
                )}
              </div>
            </li>
          )}
          {loc.wednesdayTime && (
            <li className="flex justify-between items-start gap-2">
              <span className="text-gray-500 shrink-0">Wednesday Bible Study</span>
              <div className="text-right">
                <span className="text-gray-900 font-semibold block">{loc.wednesdayTime}</span>
                {zoom.wednesday && (
                  <span className="inline-flex items-center gap-1 text-xs text-blue-600 mt-0.5">
                    <Video size={10} /> Also on Zoom
                  </span>
                )}
              </div>
            </li>
          )}
        </ul>
      </div>

      <div className="mt-5 pt-5 border-t border-gray-100 flex flex-col gap-2 mt-auto">
        {instagram && (
          <a
            href={instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-2 rounded-lg bg-gradient-to-r from-purple-50 to-pink-50 border border-pink-200 hover:border-pink-400 text-pink-600 hover:text-pink-700 text-sm font-medium transition-colors"
          >
            <Instagram size={14} />
            Follow on Instagram
          </a>
        )}
        {slug && (
          <Link
            href={`/locations/${slug}`}
            className="block text-center text-sm font-medium text-brand-600 hover:text-brand-700 transition-colors border border-brand-200 hover:border-brand-400 rounded-lg py-2"
          >
            View Extension Page →
          </Link>
        )}
        {loc.mapUrl && (
          <a
            href={loc.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center text-sm text-gray-400 hover:text-gray-600 transition-colors py-1"
          >
            Get Directions ↗
          </a>
        )}
      </div>
    </div>
  );
}
