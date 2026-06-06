import type { Metadata } from "next";
import ExtensionPage from "@/components/ExtensionPage";

export const metadata: Metadata = {
  title: "GLT Dallas",
  description: "GLT Dallas — 777 Central Expy Suite 7T, Dallas TX. Sunday 9:00 AM. Part of GLT North America.",
};

export default function DallasPage() {
  return (
    <ExtensionPage
      name="GLT Dallas"
      city="Dallas"
      stateProvince="TX"
      country="USA"
      address="777 Central Expy Suite 7T"
      phone="(469) 215-7389"
      mapUrl="https://maps.google.com/?q=777+Central+Expy+Suite+7T+Dallas+TX"
      heroImage="/campus-dallas-photo.jpg"
      heroAlt="GLT Dallas congregation"
      about="GLT Dallas is a growing extension of God's Love Tabernacle International in the Dallas-Fort Worth metroplex. We are a Word-centred, Spirit-filled community dedicated to raising New Creation believers who walk confidently in their identity in Christ."
      services={[
        { day: "Sunday Service", time: "9:00 AM" },
        {
          day: "Monday Prayer Meeting",
          time: "6:30 PM",
          note: "Held online via Zoom",
          zoomUrl: "https://zoom.us",
        },
        { day: "Wednesday Bible Study", time: "6:30 PM" },
      ]}
      instagramUrl="https://www.instagram.com/gltdallas"
      instagramHandle="@gltdallas"
    />
  );
}
