import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";
import LocationCard from "@/components/LocationCard";
import SermonCard from "@/components/SermonCard";
import EventCard from "@/components/EventCard";
import VideoCard from "@/components/VideoCard";
import HeroVideo from "@/components/HeroVideo";
import {
  getLocations,
  getRecentSermons,
  getUpcomingEvents,
  type Location,
} from "@/lib/queries";

const FALLBACK_LOCATIONS: Location[] = [
  {
    _id: "houston",
    name: "GLT Houston",
    address: "14435 Longview St",
    city: "Houston",
    stateProvince: "TX",
    country: "USA",
    phone: "(832) 617-1222",
    sundayTime: "9:30 AM",
    mondayTime: "7:30 PM",
    wednesdayTime: "7:30 PM",
    slug: { current: "houston" },
  },
  {
    _id: "dallas",
    name: "GLT Dallas",
    address: "777 Central Expy Suite 7T",
    city: "Dallas",
    stateProvince: "TX",
    country: "USA",
    phone: "(469) 215-7389",
    sundayTime: "9:00 AM",
    mondayTime: "6:30 PM",
    wednesdayTime: "6:30 PM",
    slug: { current: "dallas" },
  },
  {
    _id: "calgary",
    name: "GLT Calgary",
    address: "2221 41 Ave NE Bay 16",
    city: "Calgary",
    stateProvince: "AB",
    country: "Canada",
    phone: "(825) 488-2564",
    sundayTime: "9:00 AM",
    mondayTime: "7:00 PM",
    wednesdayTime: "7:00 PM",
    slug: { current: "calgary" },
  },
];

export default async function HomePage() {
  const [locationsFromCMS, sermons, events] = await Promise.allSettled([
    getLocations(),
    getRecentSermons(3),
    getUpcomingEvents(3),
  ]);

  const locations =
    locationsFromCMS.status === "fulfilled" && locationsFromCMS.value.length > 0
      ? locationsFromCMS.value
      : FALLBACK_LOCATIONS;

  const recentSermons = sermons.status === "fulfilled" ? sermons.value : [];
  const upcomingEvents = events.status === "fulfilled" ? events.value : [];

  return (
    <>
      {/* Hero — dark video section, intentionally not white */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-navy-950 overflow-hidden">
        <HeroVideo />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-navy-950/80" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <Image
            src="/logo.png"
            alt="GLT North America"
            width={200}
            height={55}
            className="h-14 w-auto mx-auto mb-8 brightness-0 invert drop-shadow-xl"
            priority
          />
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            style={{ textShadow: "0 2px 20px rgba(0,0,0,0.7), 0 1px 4px rgba(0,0,0,0.9)" }}
          >
            Teaching{" "}
            <span className="text-gold-400">New Creation</span>{" "}
            Realities in Christ Jesus
          </h1>
          <p
            className="text-gray-200 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
            style={{ textShadow: "0 1px 8px rgba(0,0,0,0.8)" }}
          >
            A warm community of believers committed to God's Word, expressive worship, and transforming lives
            — with extensions in Houston, Dallas, and Calgary.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/locations"
              className="px-8 py-3.5 bg-gold-500 hover:bg-gold-400 text-white font-semibold rounded-full transition-colors"
            >
              Find a Location
            </Link>
            <a
              href="https://www.youtube.com/@GLTChurchWorldwide"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 border border-white/30 hover:border-white/60 text-white font-semibold rounded-full transition-colors flex items-center justify-center gap-2"
            >
              <Play size={16} fill="currentColor" /> Watch on YouTube
            </a>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-brand-50">
        <div className="text-center mb-12">
          <p className="text-brand-500 text-sm font-semibold uppercase tracking-wider mb-2">Join Us</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Our Locations</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {locations.map((loc) => (
            <LocationCard key={loc._id} loc={loc} />
          ))}
        </div>
      </section>


      {/* Upcoming Events */}
      {upcomingEvents.length > 0 && (
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-gray-100 bg-brand-50">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-brand-500 text-sm font-semibold uppercase tracking-wider mb-2">Coming Up</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Upcoming Events</h2>
            </div>
            <Link href="/events" className="hidden sm:flex items-center gap-1 text-brand-600 hover:text-brand-700 text-sm font-medium transition-colors">
              All Events <ArrowRight size={16} />
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            {upcomingEvents.map((event) => (
              <EventCard key={event._id} event={event} />
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Link href="/events" className="text-brand-600 hover:text-brand-700 text-sm font-medium">
              View All Events →
            </Link>
          </div>
        </section>
      )}

      {/* Recent Sermons */}
      {recentSermons.length > 0 && (
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-brand-100 bg-white">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-brand-500 text-sm font-semibold uppercase tracking-wider mb-2">The Word</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Recent Sermons</h2>
            </div>
            <Link href="/sermons" className="hidden sm:flex items-center gap-1 text-brand-600 hover:text-brand-700 text-sm font-medium transition-colors">
              All Sermons <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentSermons.map((sermon) => (
              <SermonCard key={sermon._id} sermon={sermon} />
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Link href="/sermons" className="text-brand-600 hover:text-brand-700 text-sm font-medium">
              View All Sermons →
            </Link>
          </div>
        </section>
      )}

      {/* Recent Videos */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-brand-100">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-brand-500 text-sm font-semibold uppercase tracking-wider mb-2">Watch & Listen</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Recent Videos</h2>
          </div>
          <a
            href="https://www.youtube.com/@GLTChurchWorldwide"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1 text-brand-600 hover:text-brand-700 text-sm font-medium transition-colors"
          >
            YouTube Channel <ArrowRight size={16} />
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <VideoCard videoId="3ofhRmGcDMo" title="GGCNA 2026 — Grand Finale" subtitle="Great Grace Conference NA" />
          <VideoCard videoId="QRjV22t5Zuw" title="GGCNA 2026 — Day 2 Evening" subtitle="Great Grace Conference NA" />
          <VideoCard videoId="r0euQM08hNg" title="GGCNA 2026 — Day 2 Morning" subtitle="Great Grace Conference NA" />
          <VideoCard videoId="LKPwcCMy0sk" title="GGCNA 2026 — Day 1" subtitle="Great Grace Conference NA" />
        </div>
        <div className="mt-10">
          <p className="text-gray-500 text-sm font-semibold uppercase tracking-wider mb-5">Apostolic Visits</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <VideoCard videoId="VCb5BIkweYk" title="Calgary Apostolic Visit — Day 2" subtitle="May 2025" />
            <VideoCard videoId="-w-AUTV6Vc0" title="Calgary Apostolic Visit — Day 3" subtitle="May 2025" />
            <VideoCard videoId="cpzJVJuypIs" title="GGC Opening Session" subtitle="April 2025" />
            <VideoCard videoId="UPFohJb5VIg" title="GGC Day 2 Session" subtitle="April 2025" />
          </div>
        </div>
        <div className="mt-6 text-center sm:hidden">
          <a
            href="https://www.youtube.com/@GLTChurchWorldwide"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:text-brand-700 text-sm font-medium"
          >
            View YouTube Channel →
          </a>
        </div>
      </section>

      {/* About Snippet — brand green accent section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-brand-500">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-brand-100 text-sm font-semibold uppercase tracking-wider mb-4">Who We Are</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            A Church Rooted in God's Word
          </h2>
          <p className="text-brand-100 text-lg leading-relaxed mb-8">
            Led by Apostle Segun Obadje and Pastor Funke Obadje, GLT North America is an extension
            of God's Love Tabernacle International — a ministry committed to raising a generation of
            believers who walk in the fullness of their identity in Christ.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-white hover:bg-brand-50 text-brand-600 font-semibold rounded-full transition-colors"
          >
            Learn About Us <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Give CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-gold-500 to-gold-600 rounded-3xl p-12">
          <h2 className="text-3xl font-bold text-white mb-4">Partner With Us</h2>
          <p className="text-gold-100 mb-8 text-lg">
            Your giving supports the preaching of the gospel and the advancement of God's kingdom.
          </p>
          <Link
            href="/give"
            className="inline-block px-8 py-3.5 bg-white hover:bg-gray-50 text-gray-900 font-semibold rounded-full transition-colors"
          >
            Give Now
          </Link>
        </div>
      </section>
    </>
  );
}
