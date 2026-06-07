import type { Metadata } from "next";
import Image from "next/image";
import { getLocations, type Location } from "@/lib/queries";
import LocationCard from "@/components/LocationCard";

export const metadata: Metadata = {
  title: "Locations",
  description: "Find a GLT North America campus near you — GLT Houston TX, GLT Dallas TX, and GLT Calgary AB.",
};

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
    mapUrl: "https://maps.google.com/?q=14435+Longview+St+Houston+TX",
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
    mondayTime: "6:30 PM on Zoom",
    wednesdayTime: "6:30 PM",
    slug: { current: "dallas" },
    mapUrl: "https://maps.google.com/?q=777+Central+Expy+Suite+7T+Dallas+TX",
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
    mapUrl: "https://maps.google.com/?q=2221+41+Ave+NE+Bay+16+Calgary+AB",
  },
];

export default async function LocationsPage() {
  let locations: Location[] = [];
  try {
    const fetched = await getLocations();
    locations = fetched.length > 0 ? fetched : FALLBACK_LOCATIONS;
  } catch {
    locations = FALLBACK_LOCATIONS;
  }

  return (
    <>
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-navy-950 text-center">
        <p className="text-gold-500 text-sm font-semibold uppercase tracking-wider mb-4">Find Us</p>
        <h1 className="text-4xl sm:text-5xl font-bold text-white">Our Locations</h1>
        <p className="text-gray-400 mt-4 max-w-xl mx-auto">
          Three campuses across North America. Come worship with us!
        </p>
      </section>

      {/* Extension photos */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto bg-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div className="relative h-56 rounded-2xl overflow-hidden shadow-md">
            <Image src="/campus-dallas-photo.jpg" alt="GLT Dallas" fill className="object-cover" />
            <div className="absolute inset-0 bg-navy-950/40" />
            <p className="absolute bottom-4 left-4 text-white font-bold text-lg drop-shadow">GLT Dallas</p>
          </div>
          <div className="relative h-56 rounded-2xl overflow-hidden shadow-md">
            <Image src="/campus-dallas2.png" alt="GLT Calgary" fill className="object-cover" />
            <div className="absolute inset-0 bg-navy-950/40" />
            <p className="absolute bottom-4 left-4 text-white font-bold text-lg drop-shadow">GLT Calgary</p>
          </div>
        </div>
      </section>

      {/* Location cards */}
      <section className="py-8 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto bg-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {locations.map((loc) => (
            <LocationCard key={loc._id} loc={loc} />
          ))}
        </div>

        <div className="bg-brand-50 rounded-2xl p-8 border border-brand-100 text-center max-w-2xl mx-auto">
          <h3 className="text-gray-900 font-bold text-xl mb-3">Join Us Online</h3>
          <p className="text-gray-600 mb-6">
            Can't make it in person? Watch our services live or catch up on recent messages on YouTube.
          </p>
          <a
            href="https://www.youtube.com/@GLTChurchWorldwide"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-brand-500 hover:bg-brand-600 text-white font-semibold rounded-full transition-colors"
          >
            Watch on YouTube
          </a>
        </div>
      </section>
    </>
  );
}
