import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "GLT North America",
    template: "%s | GLT North America",
  },
  description:
    "God's Love Tabernacle North America — Teaching New Creation Realities in Christ Jesus. Locations in Houston TX, Dallas TX, and Calgary AB.",
  openGraph: {
    siteName: "GLT North America",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="pt-16 min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
