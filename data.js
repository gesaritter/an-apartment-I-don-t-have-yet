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
  eyebrow: "Finds Archive",
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
  {
    title: "✨SMEG Mixer 50ˋs Creme",
    source: "eBay Kleinanzeigen",
    link: "https://www.kleinanzeigen.de/s-anzeige/-smeg-mixer-50-s-creme/3476132370-86-16362",
    price: "",
    image: "https://img.kleinanzeigen.de/api/v1/prod-ads/images/da/da00c7da-dd87-4fa0-b15b-af341ae3879d?rule=$_59.JPG",
    note: "",
    tags: [],
    dateAdded: "2026-08-07",
  },
  {
    title: "2x Original Molteni&amp;C Clipper Sessel – Design MDT",
    source: "eBay Kleinanzeigen",
    link: "https://www.kleinanzeigen.de/s-anzeige/2x-original-molteni-c-clipper-sessel-design-mdt/3448168098-88-6457",
    price: "",
    image: "https://img.kleinanzeigen.de/api/v1/prod-ads/images/f7/f7f230f6-dfa9-46b8-8d78-a7e7b8cc18b9?rule=$_59.JPG",
    note: "",
    tags: [],
    dateAdded: "2026-08-07",
  },
  {
    title: "SMEG Kühlschrank",
    source: "eBay Kleinanzeigen",
    link: "https://www.kleinanzeigen.de/s-anzeige/smeg-kuehlschrank/3451586619-176-16385",
    price: "",
    image: "https://img.kleinanzeigen.de/api/v1/prod-ads/images/7d/7d56c9e9-b1da-49d0-9d44-c08671b8e63e?rule=$_59.JPG",
    note: "",
    tags: [],
    dateAdded: "2026-08-07",
  },
  {
    title: "2 Kerzenständer, Metall, silberfarben, Depot",
    source: "eBay Kleinanzeigen",
    link: "https://www.kleinanzeigen.de/s-anzeige/2-kerzenstaender-metall-silberfarben-depot/3437381353-246-6426",
    price: "",
    image: "https://img.kleinanzeigen.de/api/v1/prod-ads/images/aa/aa264c0a-195b-4fcf-82c6-042e060f320f?rule=$_59.JPG",
    note: "",
    tags: [],
    dateAdded: "2026-08-07",
  },
  {
    title: "2 x iittala Alvar Aalto 5,5 cm , grau 1 iittala Teelicht grau",
    source: "eBay Kleinanzeigen",
    link: "https://www.kleinanzeigen.de/s-anzeige/2-x-iittala-alvar-aalto-5-5-cm-grau-1-iittala-teelicht-grau/3253592158-246-6426?sim_cid=e21f5439-fc37-46df-8b1c-ad1aa1fcc1da",
    price: "",
    image: "https://img.kleinanzeigen.de/api/v1/prod-ads/images/90/9060cfa2-6361-4f42-a0d5-6976c643ed82?rule=$_59.JPG",
    note: "",
    tags: [],
    dateAdded: "2026-08-07",
  },
  {
    title: "Geschirrset weiß-blau Royal Hotelgeschirr",
    source: "eBay Kleinanzeigen",
    link: "https://www.kleinanzeigen.de/s-anzeige/geschirrset-weiss-blau-royal-hotelgeschirr/3439244334-86-16346",
    price: "",
    image: "https://img.kleinanzeigen.de/api/v1/prod-ads/images/8f/8f16f618-d081-4bfd-ad2b-bbf0dea4a736?rule=$_59.JPG",
    note: "",
    tags: [],
    dateAdded: "2026-08-07",
  },
  {
    title: "SMEG Toaster - Beige",
    source: "eBay Kleinanzeigen",
    link: "https://www.kleinanzeigen.de/s-anzeige/smeg-toaster-beige/3477270120-86-6449",
    price: "",
    image: "https://img.kleinanzeigen.de/api/v1/prod-ads/images/3e/3ec987da-f1ec-46a1-8937-25a509abe8d3?rule=$_59.JPG",
    note: "",
    tags: [],
    dateAdded: "2026-08-07",
  },
  {
    title: "Mid-Century Esszimmertisch",
    source: "eBay Kleinanzeigen",
    link: "https://www.kleinanzeigen.de/s-anzeige/mid-century-esszimmertisch/3478224530-86-16346",
    price: "",
    image: "https://img.kleinanzeigen.de/api/v1/prod-ads/images/6a/6a97ca53-fdc0-4c51-ba1d-dec1a0807fa0?rule=$_59.JPG",
    note: "",
    tags: [],
    dateAdded: "2026-08-07",
  },
  {
    title: "Smeg Küchenmaschine creme mit 2 Edelstahl-Rührschüssel",
    source: "eBay Kleinanzeigen",
    link: "https://www.kleinanzeigen.de/s-anzeige/smeg-kuechenmaschine-creme-mit-2-edelstahl-ruehrschuessel/3451388921-86-6465",
    price: "",
    image: "https://img.kleinanzeigen.de/api/v1/prod-ads/images/95/95405b74-320e-48fb-9f88-3a90f217acd4?rule=$_59.JPG",
    note: "",
    tags: [],
    dateAdded: "2026-08-07",
  },
  {
    title: "Runder Esstisch in Weiß mit Tulpenfuß | Ø 110 cm",
    source: "eBay Kleinanzeigen",
    link: "https://www.kleinanzeigen.de/s-anzeige/runder-esstisch-in-weiss-mit-tulpenfuss-110-cm/3478043636-86-9616",
    price: "",
    image: "https://img.kleinanzeigen.de/api/v1/prod-ads/images/9f/9f777e54-190d-4d9a-a569-1e8c157d324a?rule=$_59.JPG",
    note: "",
    tags: [],
    dateAdded: "2026-08-07",
  },
  {
    title: "3 Freischwingerstühle - Weiss",
    source: "eBay Kleinanzeigen",
    link: "https://www.kleinanzeigen.de/s-anzeige/3-freischwingerstuehle-weiss/3475198471-86-16351",
    price: "",
    image: "https://img.kleinanzeigen.de/api/v1/prod-ads/images/d2/d2709586-eee0-4a23-bd0c-9dc1de3dff11?rule=$_59.JPG",
    note: "",
    tags: [],
    dateAdded: "2026-08-07",
  },
  {
    title: "Stuhl / Küchenstuhl / Esszimmerstuhl – guter Zustand",
    source: "eBay Kleinanzeigen",
    link: "https://www.kleinanzeigen.de/s-anzeige/stuhl-kuechenstuhl-esszimmerstuhl-guter-zustand/3447186874-86-6457?sim_cid=ec0ef6f7-dcca-4f6f-a16f-a2a2c38d9362",
    price: "",
    image: "https://img.kleinanzeigen.de/api/v1/prod-ads/images/fc/fc9fd747-1f55-4c11-a036-584e1ab74535?rule=$_59.JPG",
    note: "",
    tags: [],
    dateAdded: "2026-08-07",
  },
  {
    title: "3 Vintage Stühle Teak samt",
    source: "eBay Kleinanzeigen",
    link: "https://www.kleinanzeigen.de/s-anzeige/3-vintage-stuehle-teak-samt/3434975970-86-26408?sim_cid=e97c7c3d-53d0-4d12-b304-b87d3c8a868a",
    price: "",
    image: "https://img.kleinanzeigen.de/api/v1/prod-ads/images/7e/7eb0733d-4766-42e8-a875-3ace43f4be18?rule=$_59.JPG",
    note: "",
    tags: [],
    dateAdded: "2026-08-07",
  },
];
