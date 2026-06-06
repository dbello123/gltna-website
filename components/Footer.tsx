import Link from "next/link";

const locations = [
  { city: "Houston, TX", address: "14435 Longview St", phone: "(832) 617-1222" },
  { city: "Dallas, TX", address: "777 Central Expy Suite 7T", phone: "(469) 215-7389" },
  { city: "Calgary, AB", address: "2221 41 Ave NE Bay 16", phone: "(825) 488-2564" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gold-500 rounded-full flex items-center justify-center text-navy-900 font-bold text-sm">
                G
              </div>
              <span className="text-white font-semibold">
                GLT <span className="text-gold-400">North America</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              Teaching New Creation Realities in Christ Jesus with all simplicity and clarity.
            </p>
            <div className="mt-6 flex gap-4">
              <a href="https://www.youtube.com/@gltna" target="_blank" rel="noopener noreferrer" className="hover:text-gold-400 transition-colors text-sm">YouTube</a>
              <a href="#" className="hover:text-gold-400 transition-colors text-sm">Facebook</a>
              <a href="#" className="hover:text-gold-400 transition-colors text-sm">Instagram</a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/about", label: "About Us" },
                { href: "/sermons", label: "Sermons" },
                { href: "/events", label: "Events" },
                { href: "/locations", label: "Locations" },
                { href: "/give", label: "Give" },
                { href: "/studio", label: "Staff Login (CMS)" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-gold-400 transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Our Locations</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {locations.map((loc) => (
                <div key={loc.city}>
                  <p className="text-gold-400 font-medium text-sm mb-1">{loc.city}</p>
                  <p className="text-xs leading-relaxed">{loc.address}</p>
                  <p className="text-xs mt-1">{loc.phone}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-navy-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <p>© {new Date().getFullYear()} God's Love Tabernacle International. All rights reserved.</p>
          <a href="https://gltng.org" target="_blank" rel="noopener noreferrer" className="hover:text-gold-400 transition-colors">
            GLT Nigeria (International HQ)
          </a>
        </div>
      </div>
    </footer>
  );
}
