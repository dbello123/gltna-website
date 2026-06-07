import type { Metadata } from "next";
import ExtensionPage from "@/components/ExtensionPage";

export const metadata: Metadata = {
  title: "GLT Houston",
  description: "GLT Houston — 14435 Longview St, Houston TX. Sunday 9:30 AM. Part of GLT North America.",
};

const ZOOM_URL = "https://us02web.zoom.us/j/7769107007";
const ZOOM_NOTE = "Also via Zoom · ID: 776 910 7007";

export default function HoustonPage() {
  return (
    <ExtensionPage
      name="GLT Houston"
      city="Houston"
      stateProvince="TX"
      country="USA"
      address="14435 Longview St"
      phone="(832) 617-1222"
      mapUrl="https://maps.google.com/?q=14435+Longview+St+Houston+TX"
      heroImage="/campus-dallas-photo.jpg"
      heroAlt="GLT Houston congregation"
      about="GLT Houston is the founding North American extension of God's Love Tabernacle International. Located in Houston, Texas, our extension is a vibrant community of believers committed to the Word of God, expressive worship, and transforming lives through the message of New Creation Realities."
      services={[
        { day: "Sunday Service", time: "9:30 AM", note: ZOOM_NOTE, zoomUrl: ZOOM_URL },
        { day: "Monday Prayer Meeting", time: "7:30 PM", note: ZOOM_NOTE, zoomUrl: ZOOM_URL },
        { day: "Wednesday Bible Study", time: "7:30 PM", note: ZOOM_NOTE, zoomUrl: ZOOM_URL },
      ]}
      instagramUrl="https://www.instagram.com/glthouston"
      instagramHandle="@glthouston"
      facebookUrl="https://www.facebook.com/glthouston"
    />
  );
}
