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

export default function LocationCard({ loc }: { loc: Location }) {
  const slug = SLUG[loc.name] ?? loc.slug?.current;
  const instagram = INSTAGRAM[loc.name];
  const isDallasMonday = loc.name === "GLT Dallas";

  return (
    <div className="bg-navy-800 rounded-2xl p-6 border border-navy-700 hover:border-gold-500/50 transition-colors flex flex-col">
      <h3 className="text-xl font-bold text-white mb-1">{loc.name}</h3>
      <p className="text-gold-400 text-sm font-medium mb-4">
        {loc.city}{loc.stateProvince ? `, ${loc.stateProvince}` : ""}
        {loc.country && loc.country !== "USA" && loc.country !== "US" ? ` · ${loc.country}` : ""}
      </p>

      <div className="space-y-3 text-sm text-gray-300">
        <div className="flex gap-2">
          <MapPin size={15} className="text-gold-500 shrink-0 mt-0.5" />
          <span>{loc.address}</span>
        </div>
        {loc.phone && (
          <div className="flex gap-2">
            <Phone size={15} className="text-gold-500 shrink-0 mt-0.5" />
            <a href={`tel:${loc.phone}`} className="hover:text-gold-400 transition-colors">{loc.phone}</a>
          </div>
        )}
      </div>

      <div className="mt-5 pt-5 border-t border-navy-700">
        <div className="flex items-center gap-2 mb-3">
          <Clock size={14} className="text-gold-500" />
          <span className="text-xs font-semibold text-gold-400 uppercase tracking-wider">Service Times</span>
        </div>
        <ul className="space-y-2 text-sm">
          {loc.sundayTime && (
            <li className="flex justify-between items-center">
              <span className="text-gray-400">Sunday</span>
              <span className="text-white font-medium">{loc.sundayTime}</span>
            </li>
          )}
          {loc.mondayTime && (
            <li className="flex justify-between items-start gap-2">
              <span className="text-gray-400 shrink-0">Monday Prayer</span>
              <div className="text-right">
                <span className="text-white font-medium block">{loc.mondayTime}</span>
                {isDallasMonday && (
                  <span className="inline-flex items-center gap-1 text-xs text-blue-400 mt-0.5">
                    <Video size={10} /> Online via Zoom
                  </span>
                )}
              </div>
            </li>
          )}
          {loc.wednesdayTime && (
            <li className="flex justify-between items-center">
              <span className="text-gray-400">Wednesday Bible Study</span>
              <span className="text-white font-medium">{loc.wednesdayTime}</span>
            </li>
          )}
        </ul>
      </div>

      <div className="mt-5 pt-5 border-t border-navy-700 flex flex-col gap-2 mt-auto">
        {instagram && (
          <a
            href={instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-2 rounded-lg bg-gradient-to-r from-purple-900/30 to-pink-900/20 border border-purple-700/30 hover:border-pink-500/50 text-pink-400 hover:text-pink-300 text-sm font-medium transition-colors"
          >
            <Instagram size={14} />
            Follow on Instagram
          </a>
        )}
        {slug && (
          <Link
            href={`/locations/${slug}`}
            className="block text-center text-sm font-medium text-gold-400 hover:text-gold-300 transition-colors border border-gold-500/30 hover:border-gold-400 rounded-lg py-2"
          >
            View Campus Page →
          </Link>
        )}
        {loc.mapUrl && (
          <a
            href={loc.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center text-sm text-gray-500 hover:text-gray-400 transition-colors py-1"
          >
            Get Directions ↗
          </a>
        )}
      </div>
    </div>
  );
}
