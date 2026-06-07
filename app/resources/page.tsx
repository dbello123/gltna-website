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
        icon: "▶",
      },
      {
        title: "Apostle Segun Obadje",
        desc: "Morning Dew devotionals and personal messages from Apostle Segun Obadje.",
        url: "https://www.youtube.com/@ApostleSegunObadje",
        label: "YouTube Channel",
        icon: "▶",
      },
      {
        title: "GLT Live on Mixlr",
        desc: "Stream GLT services and special meetings live in audio on Mixlr.",
        url: "https://pastor-segun-obadje.mixlr.com/",
        label: "Listen on Mixlr",
        icon: "🎙",
      },
    ],
  },
  {
    category: "GLT International",
    items: [
      {
        title: "GLT Nigeria — International HQ",
        desc: "The global headquarters of God's Love Tabernacle International. Resources, news, and events from HQ.",
        url: "https://www.glt.church/",
        label: "Visit glt.church",
        icon: "🌍",
      },
      {
        title: "GLT North America",
        desc: "Main GLTNA site with all campus information, sermons, and events.",
        url: "https://gltna.church",
        label: "Visit gltna.church",
        icon: "🏛",
      },
    ],
  },
  {
    category: "Follow Our Campuses",
    items: [
      {
        title: "GLT Houston on Instagram",
        desc: "Updates, events, and community moments from GLT Houston.",
        url: "https://www.instagram.com/glthouston",
        label: "@glthouston",
        icon: "📷",
      },
      {
        title: "GLT Dallas on Instagram",
        desc: "Updates, events, and community moments from GLT Dallas.",
        url: "https://www.instagram.com/gltdallas",
        label: "@gltdallas",
        icon: "📷",
      },
      {
        title: "GLT Calgary on Instagram",
        desc: "Updates, events, and community moments from GLT Calgary.",
        url: "https://www.instagram.com/gltcalgary",
        label: "@gltcalgary",
        icon: "📷",
      },
      {
        title: "GLT Houston on Facebook",
        desc: "Connect with the GLT Houston community on Facebook.",
        url: "https://www.facebook.com/glthouston",
        label: "Facebook Page",
        icon: "👥",
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
          Everything you need to stay connected — watch, listen, and follow your campus.
        </p>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-16 bg-white">
        {resources.map((group) => (
          <div key={group.category}>
            <h2 className="text-sm font-bold text-brand-500 uppercase tracking-widest mb-6 border-b border-gray-200 pb-3">
              {group.category}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {group.items.map((item) => (
                <a
                  key={item.title}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-brand-300 hover:shadow-md transition-all group flex flex-col"
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{item.icon}</span>
                      <h3 className="text-gray-900 font-bold text-sm group-hover:text-brand-600 transition-colors leading-snug">
                        {item.title}
                      </h3>
                    </div>
                    <ExternalLink size={14} className="text-gray-400 group-hover:text-brand-500 shrink-0 mt-0.5 transition-colors" />
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-4">{item.desc}</p>
                  <span className="text-brand-500 text-xs font-semibold uppercase tracking-wider">
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
