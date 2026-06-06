import type { Metadata } from "next";
import { getRecentSermons } from "@/lib/queries";
import SermonCard from "@/components/SermonCard";
import VideoCard from "@/components/VideoCard";

export const metadata: Metadata = {
  title: "Sermons",
  description: "Watch and listen to messages from GLT North America — Apostle Segun Obadje and guest speakers.",
};

const ARCHIVE_VIDEOS = [
  { id: "3ofhRmGcDMo", title: "GGCNA 2026 — Grand Finale", subtitle: "Great Grace Conference NA 2026" },
  { id: "QRjV22t5Zuw", title: "GGCNA 2026 — Day 2 Evening", subtitle: "Great Grace Conference NA 2026" },
  { id: "r0euQM08hNg", title: "GGCNA 2026 — Day 2 Morning", subtitle: "Great Grace Conference NA 2026" },
  { id: "LKPwcCMy0sk", title: "GGCNA 2026 — Day 1", subtitle: "Great Grace Conference NA 2026" },
  { id: "VCb5BIkweYk", title: "Calgary Apostolic Visit — Day 2", subtitle: "May 2025" },
  { id: "-w-AUTV6Vc0", title: "Calgary Apostolic Visit — Day 3", subtitle: "May 2025" },
  { id: "cpzJVJuypIs", title: "GGC Opening Session", subtitle: "April 2025" },
  { id: "UPFohJb5VIg", title: "GGC Day 2 Session", subtitle: "April 2025" },
  { id: "Sr2cYI9mMb0", title: "GGC Day 2 Evening", subtitle: "April 2025" },
  { id: "t_hcfsjuGMs", title: "GGC Thanksgiving Service", subtitle: "April 2025" },
  { id: "2Is29W5NV18", title: "GGCNA 2024 — Opening Session", subtitle: "Great Grace Conference NA 2024" },
  { id: "A0tLiec9e2E", title: "GGCNA 2024 — Day 2 Morning", subtitle: "Great Grace Conference NA 2024" },
  { id: "EtAZVqGj4WY", title: "GGCNA 2024 — Day 2 Evening", subtitle: "Great Grace Conference NA 2024" },
  { id: "U5Adj8mjIgI", title: "GGCNA 2024 — Grand Finale", subtitle: "Great Grace Conference NA 2024" },
];

export default async function SermonsPage() {
  let sermons: Awaited<ReturnType<typeof getRecentSermons>> = [];
  try {
    sermons = await getRecentSermons(24);
  } catch {
    // CMS not configured yet
  }

  return (
    <>
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-navy-950 text-center">
        <p className="text-gold-500 text-sm font-semibold uppercase tracking-wider mb-4">The Word</p>
        <h1 className="text-4xl sm:text-5xl font-bold text-white">Sermons & Messages</h1>
        <p className="text-gray-400 mt-4 max-w-xl mx-auto">
          Faith comes by hearing. Watch or listen to messages from Apostle Segun Obadje and our guest ministers.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <a
            href="https://www.youtube.com/@GLTChurchWorldwide"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-gold-500 hover:bg-gold-400 text-navy-900 font-semibold rounded-full text-sm transition-colors"
          >
            GLT Church Worldwide
          </a>
          <a
            href="https://www.youtube.com/@ApostleSegunObadje"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 border border-gold-500/40 hover:border-gold-400 text-gold-400 font-semibold rounded-full text-sm transition-colors"
          >
            Apostle Segun Obadje
          </a>
        </div>
      </section>

      {/* CMS-managed sermons (when added via /studio) */}
      {sermons.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">Latest Messages</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sermons.map((sermon) => (
              <SermonCard key={sermon._id} sermon={sermon} />
            ))}
          </div>
        </section>
      )}

      {/* Video archive from YouTube */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-navy-800">
        <h2 className="text-2xl font-bold text-white mb-2">Video Archive</h2>
        <p className="text-gray-500 text-sm mb-8">Click any video to watch directly on this page.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {ARCHIVE_VIDEOS.map((v) => (
            <VideoCard key={v.id} videoId={v.id} title={v.title} subtitle={v.subtitle} />
          ))}
        </div>
      </section>
    </>
  );
}
