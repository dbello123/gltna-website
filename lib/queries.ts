import { client } from "./sanity";

export interface Location {
  _id: string;
  name: string;
  address: string;
  city: string;
  stateProvince: string;
  country: string;
  phone: string;
  email?: string;
  sundayTime: string;
  mondayTime: string;
  wednesdayTime: string;
  mapUrl?: string;
  slug: { current: string };
}

export interface Sermon {
  _id: string;
  title: string;
  slug: { current: string };
  speaker: string;
  series?: string;
  date: string;
  description?: string;
  videoUrl?: string;
  audioUrl?: string;
  thumbnail?: { asset: { _ref: string } };
  location?: { name: string };
}

export interface Event {
  _id: string;
  title: string;
  slug: { current: string };
  description?: string;
  startDate: string;
  endDate?: string;
  venue?: string;
  city?: string;
  stateProvince?: string;
  registrationUrl?: string;
  image?: { asset: { _ref: string } };
  featured: boolean;
}

export interface SiteSettings {
  siteTitle: string;
  tagline: string;
  heroHeading?: string;
  heroSubheading?: string;
  aboutSummary?: string;
  youtubeChannelUrl?: string;
  donationUrl?: string;
  facebookUrl?: string;
  instagramUrl?: string;
  mixlrUrl?: string;
  parentChurchUrl?: string;
}

export async function getLocations(): Promise<Location[]> {
  return client.fetch(
    `*[_type == "location"] | order(order asc) {
      _id, name, slug, address, city, stateProvince, country,
      phone, email, sundayTime, mondayTime, wednesdayTime, mapUrl
    }`
  );
}

export async function getRecentSermons(limit = 6): Promise<Sermon[]> {
  return client.fetch(
    `*[_type == "sermon"] | order(date desc) [0...$limit] {
      _id, title, slug, speaker, series, date, description,
      videoUrl, audioUrl, thumbnail, "location": location->{ name }
    }`,
    { limit }
  );
}

export async function getUpcomingEvents(limit = 6): Promise<Event[]> {
  const now = new Date().toISOString();
  return client.fetch(
    `*[_type == "event" && startDate > $now] | order(startDate asc) [0...$limit] {
      _id, title, slug, description, startDate, endDate,
      venue, city, stateProvince, registrationUrl, image, featured
    }`,
    { now, limit }
  );
}

export async function getSiteSettings(): Promise<SiteSettings | null> {
  return client.fetch(`*[_type == "siteSettings"][0]`);
}
