/* ============================================================
   data.js — THIS is the file you edit to add new finds.
   No coding knowledge needed — just copy the template block
   at the bottom, paste it above the closing "];", and fill
   in your own details.

   Everything in here is plain text, so open it in any text
   editor (Notepad, TextEdit, VS Code, etc.) to make changes.
   ============================================================ */

// ---------------------------------------------------------------
// SITE_CONFIG — the little bits of text at the top of the page.
// Change these whenever you like.
// ---------------------------------------------------------------
const SITE_CONFIG = {
  eyebrow: "a little collection",
  title: "Finds Archive",
  tagline:
    "ebay kleinanzeigen & vinted finds i keep thinking about — an apartment i don't have, filled with things i found.",
  curatedBy: "Gesa",
  curatedFor: "an apartment i don't have yet",
  category: "Interior Design Finds",
};

// ---------------------------------------------------------------
// FINDS — one object per item. Newest dateAdded shows up first
// automatically, so you don't need to worry about order.
//
// Fields:
//   title      (required) — what the piece is
//   source     (required) — "eBay Kleinanzeigen" or "Vinted" (or anything else)
//   link       (required) — the URL to the listing
//   price      (optional) — e.g. "45 €" — leave as "" to hide
//   image      (optional) — paste the listing photo URL here.
//              Leave as "" and a cute placeholder will show instead.
//              Note: some listing photos are protected and won't
//              load on other sites — if an image looks broken,
//              just leave this field empty.
//   note       (optional) — your own thoughts on why you love it
//   tags       (optional) — array of short labels, e.g. ["living room", "boho"]
//              used for the filter chips at the top of the page
//   dateAdded  (required) — "YYYY-MM-DD", controls sort order
// ---------------------------------------------------------------

const FINDS = [
  {
    title: "Rattan armchair with cushion",
    source: "eBay Kleinanzeigen",
    link: "https://www.ebay-kleinanzeigen.de/",
    price: "45 €",
    image: "https://picsum.photos/seed/rattan-chair/600/750",
    note: "Would look so good tucked into a corner with a chunky knit throw. Still thinking about this one.",
    tags: ["living room", "boho", "seating"],
    dateAdded: "2026-08-05",
  },
  {
    title: "Fluted glass vase, small",
    source: "Vinted",
    link: "https://www.vinted.de/",
    price: "8 €",
    image: "https://picsum.photos/seed/fluted-vase/600/500",
    note: "The fluting catches the light so nicely — perfect for one dried stem.",
    tags: ["decor", "glassware"],
    dateAdded: "2026-08-03",
  },
  {
    title: "Vintage brass floor lamp",
    source: "eBay Kleinanzeigen",
    link: "https://www.ebay-kleinanzeigen.de/",
    price: "70 €",
    image: "https://picsum.photos/seed/brass-lamp/600/800",
    note: "Warm brass + a linen shade. Dreaming of the light this would throw in the evening.",
    tags: ["lighting", "living room"],
    dateAdded: "2026-07-29",
  },
  {
    title: "Boucle throw pillow, cream",
    source: "Vinted",
    link: "https://www.vinted.de/",
    price: "12 €",
    image: "",
    note: "So soft in the photos. Would be the first thing on a reading chair.",
    tags: ["textiles", "living room"],
    dateAdded: "2026-07-20",
  },

  // ---------------------------------------------------------------
    {
    title: "SPIEGEL sehr gross 170x300 cm",
    source: "eBay Kleinanzeigen",
    link: "https://www.kleinanzeigen.de/s-anzeige/spiegel-sehr-gross-170x300-cm/3477771784-246-26408",
    price: "",
    image: "https://img.kleinanzeigen.de/api/v1/prod-ads/images/46/460b6239-7bfd-4d45-98f9-e69d55b53b59?rule=$_59.JPG",
    note: "",
    tags: [],
    dateAdded: "2026-08-07",
  },
  {
    title: "Quadratischer Tisch mit Holzplatte und Chromfuß Metall",
    source: "eBay Kleinanzeigen",
    link: "https://www.kleinanzeigen.de/s-anzeige/quadratischer-tisch-mit-holzplatte-und-chromfuss-metall/3452300829-88-6444",
    price: "",
    image: "https://img.kleinanzeigen.de/api/v1/prod-ads/images/3b/3b95a6a4-7d1f-4a5e-ba6c-8161d1741d50?rule=$_59.JPG",
    note: "",
    tags: [],
    dateAdded: "2026-08-07",
  },
  {
    title: "USM Haller Sideboard Lowboard TV-Board Regal offen rosa ⚾",
    source: "eBay Kleinanzeigen",
    link: "https://www.kleinanzeigen.de/s-anzeige/usm-haller-sideboard-lowboard-tv-board-regal-offen-rosa-/3355489095-88-16390",
    price: "",
    image: "https://img.kleinanzeigen.de/api/v1/prod-ads/images/5c/5c3c1d59-0222-4780-81b6-68b142a54b88?rule=$_59.JPG",
    note: "",
    tags: [],
    dateAdded: "2026-08-07",
  },
  {
    title: "Ligne Roset Togo Modulares Set, Vintage, 1970er Jahre",
    source: "eBay Kleinanzeigen",
    link: "https://www.kleinanzeigen.de/s-anzeige/ligne-roset-togo-modulares-set-vintage-1970er-jahre/3461155788-88-6443",
    price: "",
    image: "https://img.kleinanzeigen.de/api/v1/prod-ads/images/f5/f536a960-555b-4bd9-a415-eb7908a7893a?rule=$_59.JPG",
    note: "",
    tags: [],
    dateAdded: "2026-08-07",
  },
  {
    title: "Regal zum Abholen in der Maxvorstadt",
    source: "eBay Kleinanzeigen",
    link: "https://www.kleinanzeigen.de/s-anzeige/regal-zum-abholen-in-der-maxvorstadt/3455439881-88-6454",
    price: "",
    image: "https://img.kleinanzeigen.de/api/v1/prod-ads/images/e0/e0b29d1e-3362-4ff2-b279-4fadd4311eed?rule=$_59.JPG",
    note: "",
    tags: [],
    dateAdded: "2026-08-07",
  },
];
