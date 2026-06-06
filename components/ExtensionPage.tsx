import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Clock, Video, Instagram, Facebook, ArrowLeft, ExternalLink } from "lucide-react";

interface ServiceTime {
  day: string;
  time: string;
  note?: string;
  zoomUrl?: string;
}

interface ExtensionProps {
  name: string;
  city: string;
  stateProvince: string;
  country: string;
  address: string;
  phone: string;
  mapUrl: string;
  services: ServiceTime[];
  instagramUrl: string;
  instagramHandle: string;
  facebookUrl?: string;
  heroImage: string;
  heroAlt: string;
  about: string;
}

export default function ExtensionPage({
  name, city, stateProvince, country, address, phone, mapUrl,
  services, instagramUrl, instagramHandle, facebookUrl,
  heroImage, heroAlt, about,
}: ExtensionProps) {
  return (
    <>
      {/* Hero */}
      <section className="relative h-72 sm:h-96 bg-navy-950 overflow-hidden">
        <Image src={heroImage} alt={heroAlt} fill className="object-cover opacity-50" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-8 pb-8 max-w-5xl mx-auto">
          <Link href="/locations" className="inline-flex items-center gap-1 text-gray-400 hover:text-gold-400 text-sm mb-4 transition-colors">
            <ArrowLeft size={14} /> All Locations
          </Link>
          <h1 className="text-3xl sm:text-5xl font-bold text-white">{name}</h1>
          <p className="text-gold-400 font-medium mt-1">{city}, {stateProvince} · {country}</p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-8 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">

        {/* Left — details */}
        <div className="lg:col-span-2 space-y-10">

          {/* About */}
          <div>
            <h2 className="text-xl font-bold text-white mb-3">About {name}</h2>
            <p className="text-gray-300 leading-relaxed">{about}</p>
          </div>

          {/* Service Times */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Clock size={18} className="text-gold-500" />
              <h2 className="text-xl font-bold text-white">Service Times</h2>
            </div>
            <div className="bg-navy-800 rounded-2xl border border-navy-700 divide-y divide-navy-700">
              {services.map((s) => (
                <div key={s.day} className="flex items-center justify-between px-5 py-4 gap-4">
                  <div>
                    <p className="text-white font-semibold text-sm">{s.day}</p>
                    {s.note && (
                      <p className="text-gray-500 text-xs mt-0.5">{s.note}</p>
                    )}
                  </div>
                  <div className="text-right">
                    <p className="text-gold-400 font-bold text-sm">{s.time}</p>
                    {s.zoomUrl && (
                      <a
                        href={s.zoomUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-blue-400 hover:text-blue-300 mt-1 transition-colors"
                      >
                        <Video size={11} /> Join on Zoom
                      </a>
                    )}
                    {!s.zoomUrl && s.note?.toLowerCase().includes("zoom") && (
                      <span className="inline-flex items-center gap-1 text-xs text-blue-400 mt-1">
                        <Video size={11} /> Online via Zoom
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Location */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <MapPin size={18} className="text-gold-500" />
              <h2 className="text-xl font-bold text-white">Location</h2>
            </div>
            <div className="bg-navy-800 rounded-2xl border border-navy-700 p-5 space-y-3">
              <p className="text-gray-300">{address}</p>
              <p className="text-gray-300">{city}, {stateProvince}</p>
              <a
                href={`tel:${phone.replace(/\D/g, "")}`}
                className="flex items-center gap-2 text-gold-400 hover:text-gold-300 text-sm transition-colors"
              >
                <Phone size={14} /> {phone}
              </a>
              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 mt-2 px-4 py-2 border border-gold-500/40 hover:border-gold-400 text-gold-400 text-sm font-semibold rounded-full transition-colors"
              >
                <MapPin size={13} /> Get Directions
              </a>
            </div>
          </div>
        </div>

        {/* Right — social + connect */}
        <div className="space-y-6">
          {/* Instagram */}
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 bg-gradient-to-br from-purple-900/40 to-pink-900/30 border border-purple-700/40 hover:border-pink-500/60 rounded-2xl p-6 text-center transition-colors group"
          >
            <Instagram size={32} className="text-pink-400 group-hover:text-pink-300 transition-colors" />
            <div>
              <p className="text-white font-bold">Follow on Instagram</p>
              <p className="text-pink-400 text-sm font-medium">{instagramHandle}</p>
            </div>
            <span className="text-xs text-gray-500 group-hover:text-gray-400 flex items-center gap-1 transition-colors">
              View profile <ExternalLink size={11} />
            </span>
          </a>

          {/* Facebook */}
          {facebookUrl && (
            <a
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 bg-blue-950/40 border border-blue-800/40 hover:border-blue-500/60 rounded-2xl p-6 text-center transition-colors group"
            >
              <Facebook size={32} className="text-blue-400 group-hover:text-blue-300 transition-colors" />
              <div>
                <p className="text-white font-bold">Follow on Facebook</p>
                <p className="text-blue-400 text-sm font-medium">GLT Houston</p>
              </div>
              <span className="text-xs text-gray-500 group-hover:text-gray-400 flex items-center gap-1 transition-colors">
                View page <ExternalLink size={11} />
              </span>
            </a>
          )}

          {/* Plan your visit */}
          <div className="bg-navy-800 border border-navy-700 rounded-2xl p-6 text-center">
            <h3 className="text-white font-bold mb-2">Plan Your Visit</h3>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              First time? We'd love to welcome you. Come as you are — Sunday service is the best place to start.
            </p>
            <Link
              href="/about"
              className="inline-block px-5 py-2.5 bg-gold-500 hover:bg-gold-400 text-navy-900 font-semibold rounded-full text-sm transition-colors"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
