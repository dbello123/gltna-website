import type { Metadata } from "next";
import { Heart, Globe, Users, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Give",
  description: "Partner with GLT North America through your giving. Support the preaching of the gospel.",
};

const impacts = [
  { icon: BookOpen, title: "Teaching the Word", desc: "Funding sermon recordings, media production, and outreach materials." },
  { icon: Globe, title: "Global Evangelism", desc: "Supporting mission work in Africa and beyond through the GLT network." },
  { icon: Users, title: "Community Care", desc: "Feeding programs, counselling, and support for families in need." },
  { icon: Heart, title: "Campus Growth", desc: "Building and sustaining our campuses in Houston, Dallas, and Calgary." },
];

export default function GivePage() {
  return (
    <>
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-navy-950 text-center">
        <p className="text-gold-500 text-sm font-semibold uppercase tracking-wider mb-4">Partner With Us</p>
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Give</h1>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed mb-4">
          "Give, and it will be given to you — a good measure, pressed down, shaken together,
          and running over." — Luke 6:38
        </p>
        <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
          As a member of the diaspora community, your giving carries a global impact. Every gift you sow
          into GLT North America helps us preach the Word in our cities, equip believers to walk in their
          New Creation identity, and support the advancement of God's kingdom across the nations.
          You are not just giving to a church — you are partnering with a global mission.
        </p>
      </section>

      {/* Giving options */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">Ways to Give</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          {[
            {
              title: "Online Giving",
              desc: "Give securely online anytime through our giving portal.",
              cta: "Give Online",
              href: "https://gltna.church/give",
              primary: true,
            },
            {
              title: "Houston Campus",
              desc: "Drop your offering envelope at the Houston location.",
              cta: "(832) 617-1222",
              href: "tel:8326171222",
              primary: false,
            },
            {
              title: "Dallas Campus",
              desc: "Drop your offering envelope at the Dallas location.",
              cta: "(469) 215-7389",
              href: "tel:4692157389",
              primary: false,
            },
          ].map((option) => (
            <div key={option.title} className="bg-navy-800 rounded-2xl p-6 border border-navy-700 flex flex-col">
              <h3 className="text-white font-bold mb-2">{option.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-1">{option.desc}</p>
              <a
                href={option.href}
                target={option.href.startsWith("http") ? "_blank" : undefined}
                rel={option.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`block text-center py-2.5 rounded-full text-sm font-semibold transition-colors ${
                  option.primary
                    ? "bg-gold-500 hover:bg-gold-400 text-navy-900"
                    : "border border-gold-500/40 hover:border-gold-400 text-gold-400"
                }`}
              >
                {option.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Calgary */}
        <div className="bg-navy-800 rounded-xl p-5 border border-navy-700 text-center mb-16">
          <p className="text-gray-400 text-sm">
            <strong className="text-white">Calgary Campus:</strong> Contact us at{" "}
            <a href="tel:8254882564" className="text-gold-400 hover:text-gold-300">(825) 488-2564</a> for giving options.
          </p>
        </div>

        {/* Impact */}
        <h2 className="text-2xl font-bold text-white mb-8 text-center">Your Giving Makes an Impact</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {impacts.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex gap-4 bg-navy-800 rounded-xl p-5 border border-navy-700">
              <div className="w-10 h-10 bg-gold-500/10 rounded-full flex items-center justify-center shrink-0">
                <Icon size={18} className="text-gold-400" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
