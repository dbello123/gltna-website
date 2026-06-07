import type { Metadata } from "next";
import { getUpcomingEvents } from "@/lib/queries";
import EventCard from "@/components/EventCard";

export const metadata: Metadata = {
  title: "Events",
  description: "Upcoming events at GLT North America — conferences, services, and special meetings.",
};

const FEATURED_EVENT = {
  _id: "great-grace-2026",
  title: "Great Grace Conference North America 2026",
  slug: { current: "great-grace-2026" },
  description:
    "The annual Great Grace Conference is a Spirit-filled gathering of believers from across North America for teaching, worship, and encounter with God.",
  startDate: "2026-08-01T09:00:00Z",
  venue: "Houston Convention Center",
  city: "Houston",
  stateProvince: "TX",
  registrationUrl: "https://gltna.church",
  featured: true,
};

export default async function EventsPage() {
  let events: Awaited<ReturnType<typeof getUpcomingEvents>> = [];
  try {
    events = await getUpcomingEvents(20);
  } catch {
    events = [FEATURED_EVENT as any];
  }

  if (events.length === 0) {
    events = [FEATURED_EVENT as any];
  }

  return (
    <>
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-navy-950 text-center">
        <p className="text-gold-500 text-sm font-semibold uppercase tracking-wider mb-4">What's Happening</p>
        <h1 className="text-4xl sm:text-5xl font-bold text-white">Events</h1>
        <p className="text-gray-400 mt-4 max-w-xl mx-auto">
          Conferences, special services, and gatherings across our North American campuses.
        </p>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto bg-white">
        <div className="flex flex-col gap-5">
          {events.map((event) => (
            <EventCard key={event._id} event={event} />
          ))}
        </div>
      </section>
    </>
  );
}
