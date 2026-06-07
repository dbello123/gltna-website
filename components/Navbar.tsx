"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/about", label: "About" },
  { href: "/sermons", label: "Sermons" },
  { href: "/events", label: "Events" },
  { href: "/locations", label: "Locations" },
  { href: "/resources", label: "Resources" },
  { href: "/give", label: "Give" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="GLT North America"
              width={140}
              height={38}
              className="h-9 w-auto"
              priority
            />
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-gray-700 hover:text-brand-500 text-sm font-medium transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <a
              href="https://www.youtube.com/@gltna"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-4 py-2 bg-brand-500 hover:bg-brand-600 text-white font-semibold text-sm rounded-full transition-colors"
            >
              Watch Live
            </a>
          </div>

          <button
            className="md:hidden text-gray-700 hover:text-brand-500 p-1"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-gray-700 hover:text-brand-500 font-medium py-1 transition-colors"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://www.youtube.com/@gltna"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 px-4 py-2 bg-brand-500 text-white font-semibold text-sm rounded-full text-center"
          >
            Watch Live
          </a>
        </div>
      )}
    </nav>
  );
}
