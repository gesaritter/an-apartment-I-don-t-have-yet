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
  title: "Things I don't have space in my apartment for but I wish I did",
  tagline:
    "ebay kleinanzeigen & vinted finds i keep thinking about and either don't have the space or money for :(",
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
