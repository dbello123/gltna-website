import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({ name: "siteTitle", type: "string", initialValue: "GLT North America" }),
    defineField({ name: "tagline", type: "string", initialValue: "Teaching New Creation Realities in Christ Jesus" }),
    defineField({ name: "heroHeading", type: "string" }),
    defineField({ name: "heroSubheading", type: "text", rows: 2 }),
    defineField({ name: "heroImage", type: "image", options: { hotspot: true } }),
    defineField({ name: "aboutSummary", title: "About Summary (homepage snippet)", type: "text", rows: 3 }),
    defineField({ name: "youtubeChannelUrl", title: "YouTube Channel URL", type: "url" }),
    defineField({ name: "donationUrl", title: "Online Giving / Donation URL", type: "url" }),
    defineField({ name: "facebookUrl", type: "url" }),
    defineField({ name: "instagramUrl", type: "url" }),
    defineField({ name: "mixlrUrl", title: "MixLR / Live Audio URL", type: "url" }),
    defineField({ name: "parentChurchUrl", title: "GLT Nigeria Website URL", type: "url" }),
  ],
  preview: { prepare: () => ({ title: "Site Settings" }) },
});
