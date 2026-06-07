import type { Metadata } from "next";
import ExtensionPage from "@/components/ExtensionPage";

export const metadata: Metadata = {
  title: "GLT Calgary",
  description: "GLT Calgary — 2221 41 Ave NE Bay 16, Calgary AB. Sunday 9:00 AM. Part of GLT North America.",
};

const ZOOM_URL = "https://bit.ly/gltyycbs";
const ZOOM_NOTE = "Also via Zoom";

export default function CalgaryPage() {
  return (
    <ExtensionPage
      name="GLT Calgary"
      city="Calgary"
      stateProvince="AB"
      country="Canada"
      address="2221 41 Ave NE Bay 16"
      phone="(825) 488-2564"
      mapUrl="https://maps.google.com/?q=2221+41+Ave+NE+Bay+16+Calgary+AB"
      heroImage="/campus-dallas2.png"
      heroAlt="GLT Calgary congregation"
      about="GLT Calgary is the Canadian extension of God's Love Tabernacle International, serving the greater Calgary area. Our community is passionate about the Word, prayer, and building believers who live in the fullness of their New Creation identity."
      services={[
        { day: "Sunday Service", time: "9:00 AM" },
        { day: "Monday – Intercessory Prayer", time: "7:00 PM", note: ZOOM_NOTE, zoomUrl: ZOOM_URL },
        { day: "Wednesday Bible Study", time: "7:00 PM", note: ZOOM_NOTE, zoomUrl: ZOOM_URL },
      ]}
      instagramUrl="https://www.instagram.com/gltcalgary"
      instagramHandle="@gltcalgary"
    />
  );
}
