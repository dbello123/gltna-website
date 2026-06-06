import { defineField, defineType } from "sanity";

export const location = defineType({
  name: "location",
  title: "Location",
  type: "document",
  fields: [
    defineField({ name: "name", title: "City / Campus Name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", type: "slug", options: { source: "name" }, validation: (r) => r.required() }),
    defineField({ name: "address", type: "string", validation: (r) => r.required() }),
    defineField({ name: "city", type: "string" }),
    defineField({ name: "stateProvince", title: "State / Province", type: "string" }),
    defineField({ name: "country", type: "string" }),
    defineField({ name: "phone", type: "string" }),
    defineField({ name: "email", type: "string" }),
    defineField({ name: "sundayTime", title: "Sunday Service Time", type: "string", placeholder: "9:30 AM" }),
    defineField({ name: "mondayTime", title: "Monday Prayer Time", type: "string", placeholder: "7:30 PM" }),
    defineField({ name: "wednesdayTime", title: "Wednesday Bible Study Time", type: "string", placeholder: "7:30 PM" }),
    defineField({ name: "mapUrl", title: "Google Maps URL", type: "url" }),
    defineField({ name: "order", title: "Display Order", type: "number" }),
  ],
  orderings: [{ title: "Display Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
  preview: { select: { title: "name", subtitle: "city" } },
});
