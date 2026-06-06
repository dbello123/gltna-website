import type { Metadata } from "next";
import { getRecentSermons } from "@/lib/queries";
import SermonCard from "@/components/SermonCard";

export const metadata: Metadata = {
  title: "Sermons",
  description: "Watch and listen to messages from GLT North America — Apostle Segun Obadje and guest speakers.",
};

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
        <h1 className="text-4xl sm:text-5xl font-bold text-white">Sermons</h1>
        <p className="text-gray-400 mt-4 max-w-xl mx-auto">
          Faith comes by hearing. Dive into our sermon archive — watch on YouTube or listen to the audio.
        </p>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {sermons.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sermons.map((sermon) => (
              <SermonCard key={sermon._id} sermon={sermon} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-500 mb-6">Sermons will appear here once added to the CMS.</p>
            <a
              href="https://www.youtube.com/@gltna"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-gold-500 hover:bg-gold-400 text-navy-900 font-semibold rounded-full transition-colors"
            >
              Watch on YouTube →
            </a>
          </div>
        )}
      </section>
    </>
  );
}
