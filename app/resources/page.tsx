import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Resources",
  description: "Resources from GLT North America — YouTube channels, Mixlr, GLT Nigeria, and more.",
};

const resources = [
  {
    category: "Watch & Listen",
    items: [
      {
        title: "GLT Church Worldwide",
        desc: "Full services, conferences, and special meetings from GLT International.",
        url: "https://www.youtube.com/@GLTChurchWorldwide",
        label: "YouTube Channel",
      },
      {
        title: "Apostle Segun Obadje",
        desc: "Morning Dew devotionals and personal messages from Apostle Segun Obadje.",
        url: "https://www.youtube.com/@ApostleSegunObadje",
        label: "YouTube Channel",
      },
      {
        title: "GLT Mixlr — Live Audio",
        desc: "Listen live to GLT services and meetings on Mixlr.",
        url: "https://mixlr.com/glt-church",
        label: "Listen on Mixlr",
      },
    ],
  },
  {
    category: "GLT International",
    items: [
      {
        title: "GLT Nigeria (International HQ)",
        desc: "The global headquarters of God's Love Tabernacle International.",
        url: "https://gltng.org",
        label: "Visit Website",
      },
      {
        title: "GLT North America",
        desc: "The main GLT North America website with all campus information.",
        url: "https://gltna.church",
        label: "Visit Website",
      },
    ],
  },
  {
    category: "Study & Growth",
    items: [
      {
        title: "Morning Dew Devotional",
        desc: "Daily devotionals from Apostle Segun Obadje to start your day in the Word.",
        url: "https://www.youtube.com/@ApostleSegunObadje",
        label: "Watch on YouTube",
      },
    ],
  },
];

export default function ResourcesPage() {
  return (
    <>
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-navy-950 text-center">
        <p className="text-gold-500 text-sm font-semibold uppercase tracking-wider mb-4">Explore</p>
        <h1 className="text-4xl sm:text-5xl font-bold text-white">Resources</h1>
        <p className="text-gray-400 mt-4 max-w-xl mx-auto">
          Everything you need to stay connected — watch, listen, study, and grow.
        </p>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-16">
        {resources.map((group) => (
          <div key={group.category}>
            <h2 className="text-xl font-bold text-gold-400 uppercase tracking-wider mb-6 border-b border-navy-700 pb-3">
              {group.category}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {group.items.map((item) => (
                <a
                  key={item.title}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-navy-800 rounded-2xl p-6 border border-navy-700 hover:border-gold-500/50 transition-colors group flex flex-col"
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="text-white font-bold text-base group-hover:text-gold-400 transition-colors">
                      {item.title}
                    </h3>
                    <ExternalLink size={16} className="text-gray-500 group-hover:text-gold-400 shrink-0 mt-0.5 transition-colors" />
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-4">{item.desc}</p>
                  <span className="text-gold-500 text-xs font-semibold uppercase tracking-wider">
                    {item.label} →
                  </span>
                </a>
              ))}
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
