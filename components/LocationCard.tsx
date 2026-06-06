import { MapPin, Phone, Clock } from "lucide-react";
import type { Location } from "@/lib/queries";

export default function LocationCard({ loc }: { loc: Location }) {
  return (
    <div className="bg-navy-800 rounded-2xl p-6 border border-navy-700 hover:border-gold-500/50 transition-colors">
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
        <ul className="space-y-1.5 text-sm">
          {loc.sundayTime && (
            <li className="flex justify-between">
              <span className="text-gray-400">Sunday</span>
              <span className="text-white font-medium">{loc.sundayTime}</span>
            </li>
          )}
          {loc.mondayTime && (
            <li className="flex justify-between">
              <span className="text-gray-400">Monday Prayer</span>
              <span className="text-white font-medium">{loc.mondayTime}</span>
            </li>
          )}
          {loc.wednesdayTime && (
            <li className="flex justify-between">
              <span className="text-gray-400">Wednesday Bible Study</span>
              <span className="text-white font-medium">{loc.wednesdayTime}</span>
            </li>
          )}
        </ul>
      </div>

      {loc.mapUrl && (
        <a
          href={loc.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 block text-center text-sm font-medium text-gold-400 hover:text-gold-300 transition-colors border border-gold-500/30 hover:border-gold-400 rounded-lg py-2"
        >
          Get Directions →
        </a>
      )}
    </div>
  );
}
