import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about GLT North America — our founders, vision, and what defines us as a church.",
};

const onions = [
  { num: "01", title: "The Word", desc: "We are a Word-driven church. Everything we do is grounded in the scripture and the revelation of God's truth — taught with simplicity and clarity." },
  { num: "02", title: "Strong Love Walk", desc: "We are a people of love, forgiveness, and genuine care for one another. Our love for God is expressed through how we love people." },
  { num: "03", title: "Worship", desc: "Our worship is rooted in biblical revelation — expressive, joyful, and Spirit-led. We celebrate God for who He is and what He has done." },
  { num: "04", title: "Flows of the Spirit", desc: "We create an atmosphere for the Holy Spirit to move freely in every service. We honour and welcome His presence and manifestation." },
  { num: "05", title: "All Kinds of Prayer", desc: "We are a praying church. Our operations are sustained and empowered by consistent, fervent prayer in all its forms." },
  { num: "06", title: "Attacking Evangelism", desc: "We are aggressive about soul-winning and taking the gospel beyond our walls — to our cities, nations, and the ends of the earth." },
  { num: "07", title: "Mentoring & Counselling", desc: "We invest in the personal development of every member through intentional mentoring, discipleship, and biblical counselling." },
  { num: "08", title: "Excellence", desc: "We pursue excellence in everything we do — in our services, our operations, and our conduct — as an act of worship unto the Lord." },
  { num: "09", title: "Honor", desc: "We cultivate a culture of honour — honouring God, honouring leadership, and honouring one another as a core value of our community." },
  { num: "10", title: "Followership", desc: "We are a church of committed followers who are planted, faithful, and fruitful. We understand that loyalty is the seedbed of promotion." },
  { num: "11", title: "Cheerful & Sacrificial Giving", desc: "We understand and practise the principle of kingdom stewardship — giving generously, cheerfully, and sacrificially as unto the Lord." },
];

export default function AboutPage() {
  return (
    <>
      {/* Page header — dark anchor */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-navy-950 text-center">
        <p className="text-gold-500 text-sm font-semibold uppercase tracking-wider mb-4">Who We Are</p>
        <h1 className="text-4xl sm:text-5xl font-bold text-white max-w-3xl mx-auto leading-tight">
          About GLT North America
        </h1>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
          Teaching New Creation Realities in Christ Jesus with all simplicity and clarity.
        </p>
      </section>

      {/* Meet the Founders */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-brand-500 text-sm font-semibold uppercase tracking-wider mb-2">Leadership</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Meet the Founders &amp; Global Senior Pastors</h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Photo */}
            <div className="lg:w-2/5 w-full shrink-0">
              <div className="relative rounded-3xl overflow-hidden border-4 border-brand-200 shadow-2xl">
                <Image
                  src="/founders.jpg"
                  alt="Apostle Segun Obadje and Pastor Funke Obadje"
                  width={680}
                  height={949}
                  className="w-full h-auto object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                  <p className="text-gold-400 font-semibold text-sm uppercase tracking-widest">Apostle Segun &amp; Pastor Funke Obadje</p>
                </div>
              </div>
            </div>

            {/* Bios */}
            <div className="lg:w-3/5 space-y-8">
              <div className="bg-white rounded-2xl p-7 border border-gray-200 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-brand-50 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-brand-600 font-bold text-sm">SO</span>
                  </div>
                  <div>
                    <h3 className="text-gray-900 font-bold text-lg">Apostle Segun Obadje</h3>
                    <p className="text-brand-500 text-sm">Founder · Global Senior Pastor</p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm">
                  With over three decades of active ministry, Apostle Segun Obadje carries an uncommon teaching grace accompanied by a strong prophetic cutting edge. He is dedicated to teaching New Creation Realities — helping believers walk in the full knowledge of who they are in Christ Jesus.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-7 border border-gray-200 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-brand-50 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-brand-600 font-bold text-sm">FO</span>
                  </div>
                  <div>
                    <h3 className="text-gray-900 font-bold text-lg">Pastor Funke Obadje</h3>
                    <p className="text-brand-500 text-sm">Founder · Global Senior Pastor</p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Pastor Funke Obadje is a dynamic minister of God's Word and a prophetic gift to this generation. Her ministry is marked by powerful expressions of revelation gifts and miraculous signs. She serves alongside the Apostle with a heart for worship, prayer, and raising women and families in the kingdom.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.youtube.com/@ApostleSegunObadje"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-gold-500 hover:bg-gold-400 text-white font-semibold rounded-full text-sm transition-colors"
                >
                  Watch Apostle's Messages
                </a>
                <a
                  href="https://www.youtube.com/@GLTChurchWorldwide"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 border border-brand-200 hover:border-brand-400 text-brand-600 font-semibold rounded-full text-sm transition-colors"
                >
                  GLT Church Worldwide
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-brand-500 text-sm font-semibold uppercase tracking-wider mb-4">Our Mission</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Raising New Creation Believers</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            GLT North America is an extension of God's Love Tabernacle International — a global ministry headquartered in Nigeria. Our mandate is to raise a generation of Word-driven, Spirit-filled believers who know who they are in Christ and walk in the fullness of that identity in every area of life, with extensions in <strong className="text-gray-900">Houston, TX</strong>, <strong className="text-gray-900">Dallas, TX</strong>, and <strong className="text-gray-900">Calgary, AB</strong>.
          </p>
        </div>
      </section>

      {/* Onions of GLT */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-brand-500 text-sm font-semibold uppercase tracking-wider mb-2">Our DNA</p>

            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">The Onions of GLT</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              Eleven defining traits that shape who we are, how we worship, and how we relate to God and one another.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {onions.map((item) => (
              <div
                key={item.num}
                className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-brand-300 hover:shadow-md transition-all"
              >
                <div className="flex items-start gap-4">
                  <span className="text-brand-500 font-bold text-lg shrink-0 leading-none mt-0.5">{item.num}</span>
                  <div>
                    <h3 className="text-gray-900 font-bold text-base mb-2">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
