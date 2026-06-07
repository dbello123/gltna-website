import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin, Phone, Clock, Video, Instagram, Facebook,
  ArrowLeft, ExternalLink, Mail, Youtube, Heart,
  Users, BookOpen, Baby, UserCheck,
} from "lucide-react";

interface ServiceTime {
  day: string;
  time: string;
  note?: string;
  zoomUrl?: string;
}

interface Ministry {
  title: string;
  description: string;
  icon?: ReactNode;
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
  email?: string;
  pastorName?: string;
  pastorTitle?: string;
  pastorBio?: string;
  pastorImage?: string;
}

const DEFAULT_MINISTRIES: Ministry[] = [
  {
    title: "Men's Ministry",
    description: "Building men of purpose, integrity, and faith through the Word of God.",
    icon: <Users size={24} />,
  },
  {
    title: "Women's Ministry",
    description: "Empowering women to discover their identity and walk in God's grace.",
    icon: <Heart size={24} />,
  },
  {
    title: "Youth Ministry",
    description: "Raising a generation of young believers grounded in New Creation realities.",
    icon: <BookOpen size={24} />,
  },
  {
    title: "Children's Ministry",
    description: "Planting the Word of God in the hearts of children from an early age.",
    icon: <Baby size={24} />,
  },
];

const BELIEFS = [
  "We believe in the authority and sufficiency of the Holy Scripture.",
  "We believe in the Holy Trinity — Father, Son, and Holy Spirit.",
  "We believe in salvation by grace through faith in Jesus Christ.",
  "We believe in the New Creation reality of every born-again believer.",
  "We believe in the baptism of the Holy Spirit with evidence of speaking in tongues.",
  "We believe in divine healing and the miraculous power of God.",
];

export default function ExtensionPage({
  name, city, stateProvince, country, address, phone, mapUrl,
  services, instagramUrl, instagramHandle, facebookUrl,
  heroImage, heroAlt, about,
  email, pastorName, pastorTitle, pastorBio, pastorImage,
}: ExtensionProps) {
  const zoomServices = services.filter((s) => s.zoomUrl);
  const primaryZoom = zoomServices[0];

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative h-80 sm:h-[26rem] bg-navy-950 overflow-hidden">
        <Image src={heroImage} alt={heroAlt} fill className="object-cover opacity-45" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-8 pb-10 max-w-6xl mx-auto">
          <Link href="/locations" className="inline-flex items-center gap-1 text-gray-300 hover:text-gold-400 text-sm mb-4 transition-colors">
            <ArrowLeft size={14} /> All Extensions
          </Link>
          <h1 className="text-3xl sm:text-5xl font-bold text-white">{name}</h1>
          <p className="text-gold-400 font-medium mt-1 text-lg">{city}, {stateProvince} · {country}</p>
        </div>
      </section>

      {/* ── Service Times Bar ────────────────────────────────── */}
      <div className="bg-brand-500 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 py-4 flex flex-wrap gap-x-8 gap-y-2 justify-center sm:justify-start text-sm font-medium">
          {services.map((s) => (
            <span key={s.day} className="flex items-center gap-2">
              <Clock size={14} className="text-brand-200 shrink-0" />
              <span className="text-brand-100">{s.day}:</span>
              <span>{s.time}</span>
              {s.zoomUrl && <Video size={12} className="text-blue-300" />}
            </span>
          ))}
        </div>
      </div>

      {/* ── Quick Actions ────────────────────────────────────── */}
      <section className="bg-white py-10 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <a
              href="https://www.youtube.com/@GLTChurchWorldwide"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 p-5 bg-brand-50 hover:bg-brand-100 border border-brand-200 rounded-2xl text-center transition-colors group"
            >
              <div className="w-12 h-12 bg-brand-500 rounded-full flex items-center justify-center">
                <Youtube size={22} className="text-white" />
              </div>
              <span className="text-gray-900 font-semibold text-sm">Watch Live</span>
              <span className="text-gray-500 text-xs">YouTube Channel</span>
            </a>

            <Link
              href="/give"
              className="flex flex-col items-center gap-2 p-5 bg-gold-500/10 hover:bg-gold-500/20 border border-gold-400/30 rounded-2xl text-center transition-colors group"
            >
              <div className="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center">
                <Heart size={22} className="text-white" />
              </div>
              <span className="text-gray-900 font-semibold text-sm">Give Online</span>
              <span className="text-gray-500 text-xs">Support the ministry</span>
            </Link>

            {primaryZoom ? (
              <a
                href={primaryZoom.zoomUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 p-5 bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-2xl text-center transition-colors group"
              >
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <Video size={22} className="text-white" />
                </div>
                <span className="text-gray-900 font-semibold text-sm">Join on Zoom</span>
                <span className="text-gray-500 text-xs">Online services</span>
              </a>
            ) : (
              <a
                href={`tel:${phone.replace(/\D/g, "")}`}
                className="flex flex-col items-center gap-2 p-5 bg-purple-50 hover:bg-purple-100 border border-purple-200 rounded-2xl text-center transition-colors group"
              >
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                  <Phone size={22} className="text-white" />
                </div>
                <span className="text-gray-900 font-semibold text-sm">Call Us</span>
                <span className="text-gray-500 text-xs">{phone}</span>
              </a>
            )}

            <a
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 p-5 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-2xl text-center transition-colors group"
            >
              <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
                <MapPin size={22} className="text-white" />
              </div>
              <span className="text-gray-900 font-semibold text-sm">Get Directions</span>
              <span className="text-gray-500 text-xs">{city}, {stateProvince}</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── About + Service Schedule ─────────────────────────── */}
      <section className="py-16 px-4 sm:px-8 bg-brand-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">

          {/* About */}
          <div className="lg:col-span-3 space-y-8">
            <div>
              <p className="text-brand-500 text-xs font-bold uppercase tracking-widest mb-2">About</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Welcome to {name}</h2>
              <p className="text-gray-600 leading-relaxed text-base">{about}</p>
            </div>

            {/* Beliefs */}
            <div>
              <p className="text-brand-500 text-xs font-bold uppercase tracking-widest mb-2">What We Believe</p>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Our Core Beliefs</h2>
              <ul className="space-y-3">
                {BELIEFS.map((b, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600 text-sm">
                    <span className="mt-0.5 w-5 h-5 bg-brand-500 rounded-full flex items-center justify-center shrink-0">
                      <span className="text-white text-[10px] font-bold">✓</span>
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
              <Link href="/about" className="inline-flex items-center gap-1 mt-5 text-brand-600 hover:text-brand-700 text-sm font-semibold transition-colors">
                See all 11 Onions of GLT <ExternalLink size={13} />
              </Link>
            </div>
          </div>

          {/* Service Schedule */}
          <div className="lg:col-span-2">
            <p className="text-brand-500 text-xs font-bold uppercase tracking-widest mb-2">Weekly Schedule</p>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Service Times</h2>
            <div className="bg-white rounded-2xl border border-gray-200 divide-y divide-gray-100 shadow-sm">
              {services.map((s) => (
                <div key={s.day} className="px-5 py-4">
                  <div className="flex justify-between items-start gap-2">
                    <p className="text-gray-900 font-semibold text-sm">{s.day}</p>
                    <p className="text-brand-600 font-bold text-sm shrink-0">{s.time}</p>
                  </div>
                  {s.note && <p className="text-gray-400 text-xs mt-0.5">{s.note}</p>}
                  {s.zoomUrl && (
                    <a
                      href={s.zoomUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-blue-600 hover:text-blue-700 mt-1.5 transition-colors"
                    >
                      <Video size={11} /> Join on Zoom
                    </a>
                  )}
                </div>
              ))}
            </div>

            {/* Location card */}
            <div className="mt-6 bg-white rounded-2xl border border-gray-200 p-5 space-y-3 shadow-sm">
              <p className="text-brand-500 text-xs font-bold uppercase tracking-widest">Location</p>
              <div className="flex items-start gap-2 text-gray-700 text-sm">
                <MapPin size={15} className="text-brand-500 shrink-0 mt-0.5" />
                <div>
                  <p>{address}</p>
                  <p>{city}, {stateProvince}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Phone size={15} className="text-brand-500 shrink-0" />
                <a href={`tel:${phone.replace(/\D/g, "")}`} className="text-gray-700 hover:text-brand-600 transition-colors">{phone}</a>
              </div>
              {email && (
                <div className="flex items-center gap-2 text-sm">
                  <Mail size={15} className="text-brand-500 shrink-0" />
                  <a href={`mailto:${email}`} className="text-gray-700 hover:text-brand-600 transition-colors">{email}</a>
                </div>
              )}
              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 mt-1 px-4 py-2 bg-brand-500 hover:bg-brand-600 text-white text-xs font-semibold rounded-full transition-colors"
              >
                <MapPin size={12} /> Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Meet the Team ────────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-brand-500 text-xs font-bold uppercase tracking-widest mb-2">Leadership</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Meet Our Team</h2>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 justify-center max-w-3xl mx-auto">
            {/* Resident Pastor */}
            <div className="flex-1 bg-brand-50 rounded-2xl p-6 border border-brand-100 text-center">
              <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden bg-brand-200 flex items-center justify-center border-4 border-brand-200">
                {pastorImage ? (
                  <Image src={pastorImage} alt={pastorName ?? "Pastor"} width={96} height={96} className="object-cover w-full h-full" />
                ) : (
                  <UserCheck size={40} className="text-brand-500" />
                )}
              </div>
              <h3 className="text-gray-900 font-bold text-lg">{pastorName ?? "Resident Pastor"}</h3>
              <p className="text-brand-500 text-sm font-medium mb-3">{pastorTitle ?? "Extension Leader"}</p>
              <p className="text-gray-500 text-sm leading-relaxed">
                {pastorBio ?? "Details coming soon. Contact us to learn more about our leadership team."}
              </p>
            </div>

            {/* Senior Pastors */}
            <div className="flex-1 bg-navy-950 rounded-2xl p-6 border border-navy-800 text-center">
              <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden border-4 border-gold-500/30">
                <Image
                  src="/founders.jpg"
                  alt="Apostle Segun & Pastor Funke Obadje"
                  width={96}
                  height={96}
                  className="object-cover object-top w-full h-full"
                />
              </div>
              <h3 className="text-white font-bold text-lg">Apostle Segun & Pastor Funke Obadje</h3>
              <p className="text-gold-400 text-sm font-medium mb-3">Founders · Global Senior Pastors</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Overseeing the global vision of God's Love Tabernacle International from Nigeria.
              </p>
              <Link href="/about" className="inline-block mt-3 text-gold-400 hover:text-gold-300 text-xs font-semibold transition-colors">
                Read their story →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Ministries ───────────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-8 bg-brand-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-brand-500 text-xs font-bold uppercase tracking-widest mb-2">Get Involved</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Our Ministries</h2>
            <p className="text-gray-500 mt-2 max-w-xl mx-auto">There's a place for everyone at {name}. Find your community.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {DEFAULT_MINISTRIES.map((m) => (
              <div key={m.title} className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-brand-300 hover:shadow-md transition-all text-center">
                <div className="w-12 h-12 bg-brand-50 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-500">
                  {m.icon}
                </div>
                <h3 className="text-gray-900 font-bold text-base mb-2">{m.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{m.description}</p>
                <p className="text-brand-400 text-xs mt-4 font-medium">Coming soon</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Connect ──────────────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-8 bg-brand-500">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-brand-100 text-xs font-bold uppercase tracking-widest mb-2">Stay Connected</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Connect With Us</h2>
            <p className="text-brand-100 mt-2">Have a question, prayer request, or just want to say hello?</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {/* Phone */}
            <a
              href={`tel:${phone.replace(/\D/g, "")}`}
              className="flex flex-col items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-2xl p-6 text-center transition-colors"
            >
              <Phone size={28} className="text-white" />
              <div>
                <p className="text-white font-bold text-sm">Call Us</p>
                <p className="text-brand-100 text-sm mt-1">{phone}</p>
              </div>
            </a>

            {/* Instagram */}
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-2xl p-6 text-center transition-colors"
            >
              <Instagram size={28} className="text-white" />
              <div>
                <p className="text-white font-bold text-sm">Instagram</p>
                <p className="text-brand-100 text-sm mt-1">{instagramHandle}</p>
              </div>
            </a>

            {/* Facebook or YouTube */}
            {facebookUrl ? (
              <a
                href={facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-2xl p-6 text-center transition-colors"
              >
                <Facebook size={28} className="text-white" />
                <div>
                  <p className="text-white font-bold text-sm">Facebook</p>
                  <p className="text-brand-100 text-sm mt-1">Follow us</p>
                </div>
              </a>
            ) : (
              <a
                href="https://www.youtube.com/@GLTChurchWorldwide"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-2xl p-6 text-center transition-colors"
              >
                <Youtube size={28} className="text-white" />
                <div>
                  <p className="text-white font-bold text-sm">YouTube</p>
                  <p className="text-brand-100 text-sm mt-1">Watch our services</p>
                </div>
              </a>
            )}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/about"
              className="inline-block px-8 py-3.5 bg-white hover:bg-brand-50 text-brand-600 font-semibold rounded-full transition-colors"
            >
              Plan Your Visit
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
