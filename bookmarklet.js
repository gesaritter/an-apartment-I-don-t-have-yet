/* ============================================================
   bookmarklet.js — readable source for the "+ Add to Finds"
   bookmarklet. This file isn't loaded by the website; it's kept
   here so the logic is easy to read and edit. The actual
   draggable button is generated on bookmarklet.html, which
   injects your site's address as BASE.

   Behaviour:
   - If BASE is set (you've told bookmarklet.html where your site
     lives), clicking it opens your add.html form with the
     listing's details already filled in.
   - If BASE is empty, it falls back to showing a copy-paste
     snippet for data.js, so it still works before you've
     deployed anything.
   ============================================================ */

(function () {
  var BASE = ""; // replaced by bookmarklet.html

  function getMeta(name) {
    var el =
      document.querySelector('meta[property="' + name + '"]') ||
      document.querySelector('meta[name="' + name + '"]');
    return el ? el.getAttribute("content") : "";
  }

  function guessPrice() {
    var candidate =
      document.querySelector('meta[property="product:price:amount"]') ||
      document.querySelector("[itemprop='price']") ||
      document.querySelector("[data-testid*='price' i]");
    if (candidate) {
      var val =
        candidate.getAttribute("content") ||
        candidate.getAttribute("data-price") ||
        candidate.textContent;
      if (val && val.trim()) return val.trim();
    }
    var text = document.body.innerText || "";
    var match = text.match(/(\d{1,3}(?:[.,]\d{3})*(?:[.,]\d{2})?)\s?(€|EUR)/i);
    return match ? match[1] + " €" : "";
  }

  function guessImage() {
    var og = getMeta("og:image");
    if (og) return og;
    var img = document.querySelector("img");
    return img ? img.src : "";
  }

  function detectSource(hostname) {
    if (hostname.indexOf("vinted") > -1) return "Vinted";
    if (hostname.indexOf("kleinanzeigen") > -1) return "eBay Kleinanzeigen";
    return hostname;
  }

  function escapeForJS(str) {
    return String(str || "").replace(/\\/g, "\\\\").replace(/"/g, '\\"');
  }

  var find = {
    title: getMeta("og:title") || document.title || "",
    source: detectSource(location.hostname),
    link: location.href,
    price: guessPrice(),
    image: guessImage(),
  };

  if (BASE) {
    // Open the add form with everything prefilled
    var qs = Object.keys(find)
      .map(function (k) {
        return k + "=" + encodeURIComponent(find[k]);
      })
      .join("&");
    window.open(BASE.replace(/\/+$/, "") + "/add.html?" + qs, "_blank");
    return;
  }

  // Fallback: hand over a data.js snippet to copy
  var today = new Date().toISOString().slice(0, 10);
  var snippet =
    "  {\n" +
    '    title: "' + escapeForJS(find.title) + '",\n' +
    '    source: "' + escapeForJS(find.source) + '",\n' +
    '    link: "' + escapeForJS(find.link) + '",\n' +
    '    price: "' + escapeForJS(find.price) + '",\n' +
    '    image: "' + escapeForJS(find.image) + '",\n' +
    '    note: "",\n' +
    "    tags: [],\n" +
    '    dateAdded: "' + today + '",\n' +
    "  },";

  window.prompt("Copy this, then paste it into data.js:", snippet);
})();
