import { defineSiteConfig } from "astro-theme-university/types";
import { slopBranding } from "astro-theme-slop";

// The underlying collection and URL remain `sessions`; these labels are the
// language students see.
export const sessionLabels = {
  singular: "Studio",
  plural: "Studios",
} as const;

export const graphCollections = ["sessions", "assessments", "lectures", "people"];

export const courseApiCollections = [
  ...graphCollections.map((key) => ({ key })),
  { key: "policies", dir: "pages/policies" },
];

export const siteConfig = defineSiteConfig({
  ...slopBranding,
  name: "Slop University",

  links: [
    { text: "Lectures", href: "/lectures/" },
    { text: sessionLabels.plural, href: "/sessions/" },
    { text: "Assessment", href: "/assessments/" },
    { text: "People", href: "/people/" },
    { text: "Policies", href: "/policies/" },
  ],

  // This riff (see CLAUDE.md) reverses the shipped prototype's deliberate
  // image-free design: hero banners and the per-person "photo" fields now
  // carry public-domain ink paintings by Shitao (石涛, 1642 – c. 1707) — the
  // course's own namesake and the source of its closing treatise line — not
  // generic stock photography. Sourced from the Metropolitan Museum of Art's
  // Open Access collection and Wikimedia Commons; both are in the public
  // domain (the artist died in 1707), so no licence beyond attribution
  // applies. Credited below via `meta`.
  licence: "CC-BY-NC-SA-4.0",
  meta: [
    "Hero and portrait imagery: ink paintings by Shitao (石涛, 1642 – c. 1707), " +
      "via the Metropolitan Museum of Art (Open Access) and Wikimedia Commons. Public domain.",
  ],
});
