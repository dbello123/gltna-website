import { defineField, defineType } from "sanity";

export const event = defineType({
  name: "event",
  title: "Event",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", type: "slug", options: { source: "title" }, validation: (r) => r.required() }),
    defineField({ name: "description", type: "text", rows: 4 }),
    defineField({ name: "startDate", title: "Start Date & Time", type: "datetime", validation: (r) => r.required() }),
    defineField({ name: "endDate", title: "End Date & Time", type: "datetime" }),
    defineField({ name: "venue", type: "string" }),
    defineField({ name: "city", type: "string" }),
    defineField({ name: "stateProvince", title: "State / Province", type: "string" }),
    defineField({ name: "registrationUrl", title: "Registration / Info URL", type: "url" }),
    defineField({ name: "image", type: "image", options: { hotspot: true } }),
    defineField({ name: "featured", type: "boolean", initialValue: false }),
    defineField({
      name: "location",
      title: "Campus (if campus-specific)",
      type: "reference",
      to: [{ type: "location" }],
    }),
  ],
  orderings: [{ title: "Date (upcoming)", name: "dateAsc", by: [{ field: "startDate", direction: "asc" }] }],
  preview: {
    select: { title: "title", subtitle: "startDate", media: "image" },
    prepare({ title, subtitle }) {
      return {
        title,
        subtitle: subtitle ? new Date(subtitle).toLocaleDateString() : "",
      };
    },
  },
});
