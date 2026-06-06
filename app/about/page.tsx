import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about GLT North America — our leadership, vision, and what defines us as a church.",
};

const onions = [
  { title: "God's Word", desc: "We are a Word-driven church. Everything we do is grounded in scripture and the revelation of God's truth." },
  { title: "Warm Community", desc: "We are a people of love, forgiveness, and genuine care for one another." },
  { title: "Expressive Worship", desc: "Our worship is rooted in biblical revelation — joyful, demonstrative, and Spirit-led." },
  { title: "Holy Spirit Manifestation", desc: "We create an atmosphere for the Holy Spirit to move freely in every service." },
  { title: "Prayer", desc: "We are a praying church. Our operations are sustained and empowered by consistent, fervent prayer." },
  { title: "Evangelism", desc: "We are aggressive about soul-winning and taking the gospel beyond our walls." },
  { title: "Mentoring", desc: "We invest in personal development and the raising of the next generation of leaders." },
  { title: "Excellence", desc: "We pursue excellence in everything we do as unto the Lord." },
  { title: "Culture of Honor", desc: "We honor God, leadership, and one another as a core value of our community." },
  { title: "Committed Followership", desc: "We are a church of committed followers who are planted, faithful, and fruitful." },
  { title: "Sacrificial Giving", desc: "We understand and practice the principle of kingdom stewardship and generous giving." },
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-navy-950 text-center">
        <p className="text-gold-500 text-sm font-semibold uppercase tracking-wider mb-4">Who We Are</p>
        <h1 className="text-4xl sm:text-5xl font-bold text-white max-w-3xl mx-auto">
          About GLT North America
        </h1>
      </section>

      {/* Mission */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-6">Our Mission</h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          God's Love Tabernacle North America exists to teach and preach <strong className="text-gold-400">New Creation Realities in Christ Jesus</strong> with all simplicity and clarity.
          We are a North American extension of God's Love Tabernacle International, headquartered in Nigeria,
          under the global ministry of Apostle Segun Obadje.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed">
          Our vision is to raise a generation of Word-driven, Spirit-filled believers who know who they are in
          Christ and walk in the fullness of that identity — in every area of life.
        </p>
      </section>

      {/* Leadership */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-navy-950">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-gold-500 text-sm font-semibold uppercase tracking-wider mb-2">Spiritual Oversight</p>
            <h2 className="text-3xl font-bold text-white">Our Leadership</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {[
              { name: "Apostle Segun Obadje", role: "Founder & Lead Apostle", desc: "Apostle Segun Obadje leads GLT International with a mandate to preach the unadulterated Word of God and raise new creation believers across the nations." },
              { name: "Pastor Funke Obadje", role: "Co-Founder & Pastor", desc: "Pastor Funke Obadje serves alongside the apostle with a heart for worship, prayer, and discipling women and families in the kingdom." },
            ].map((leader) => (
              <div key={leader.name} className="bg-navy-800 rounded-2xl p-8 border border-navy-700">
                <div className="w-16 h-16 bg-gold-500/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-gold-400 font-bold text-xl">
                    {leader.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                  </span>
                </div>
                <h3 className="text-white font-bold text-lg mb-1">{leader.name}</h3>
                <p className="text-gold-400 text-sm font-medium mb-3">{leader.role}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{leader.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Onions of GLT */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-gold-500 text-sm font-semibold uppercase tracking-wider mb-2">Our DNA</p>
          <h2 className="text-3xl font-bold text-white">The 11 Defining Values of GLT</h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            These eleven traits — sometimes called the "Onions of GLT" — define who we are and how we operate.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {onions.map((item, i) => (
            <div key={item.title} className="bg-navy-800 rounded-xl p-6 border border-navy-700">
              <div className="flex items-start gap-3">
                <span className="text-gold-500 font-bold text-sm mt-0.5 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
