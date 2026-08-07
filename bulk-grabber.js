/* ============================================================
   bulk-grabber.js — readable source for the "Grab whole list"
   bookmarklet.

   Run it while you're ON your saved-items page:
     - eBay Kleinanzeigen: kleinanzeigen.de/m-merkliste.html
     - Vinted: vinted.de/member/items/favourite_list

   It reads every listing visible in the page and shows them all
   in an overlay, formatted and ready to paste into data.js (or
   into the import box on add.html).

   IMPORTANT: both sites load items lazily as you scroll, so
   scroll to the bottom of your list first — this can only see
   what's actually been loaded into the page.

   This file isn't loaded by the website; the draggable button on
   bookmarklet.html contains a minified copy of this logic.
   ============================================================ */

(function () {
  // ---------- helpers ----------
  function clean(str) {
    return String(str || "").replace(/\s+/g, " ").trim();
  }

  function escapeForJS(str) {
    return String(str || "").replace(/\\/g, "\\\\").replace(/"/g, '\\"');
  }

  function normalizeURL(href) {
    try {
      var u = new URL(href, location.href);
      u.hash = "";
      u.search = "";
      return u.href;
    } catch (e) {
      return href;
    }
  }

  function detectSource(hostname) {
    if (hostname.indexOf("vinted") > -1) return "Vinted";
    if (hostname.indexOf("kleinanzeigen") > -1) return "eBay Kleinanzeigen";
    return hostname.replace(/^www\./, "");
  }

  // ---------- find the listing links on this page ----------
  function listingAnchors() {
    var host = location.hostname;
    var selector = null;

    if (host.indexOf("kleinanzeigen") > -1) selector = 'a[href*="/s-anzeige/"]';
    else if (host.indexOf("vinted") > -1) selector = 'a[href*="/items/"]';

    if (selector) return Array.prototype.slice.call(document.querySelectorAll(selector));

    // Generic fallback: any link that wraps or sits near an image
    return Array.prototype.slice
      .call(document.querySelectorAll("a[href]"))
      .filter(function (a) {
        return a.querySelector("img");
      });
  }

  // Climb up from the link looking for the "card" for this listing.
  // On some layouts the photo sits in one link and the title/price in a
  // sibling block, so we prefer the nearest ancestor holding BOTH a photo
  // and something price-shaped, and only fall back to photo-only.
  function cardFor(anchor) {
    var el = anchor;
    var imgOnly = null;
    for (var i = 0; i < 7 && el; i++) {
      var hasImg = !!el.querySelector("img");
      var hasPrice = /€|EUR|verschenken|gratis|free/i.test(el.innerText || el.textContent || "");
      if (hasImg && hasPrice) return el;
      if (hasImg && !imgOnly) imgOnly = el;
      el = el.parentElement;
    }
    return imgOnly || anchor.parentElement || anchor;
  }

  function pickImage(card) {
    var imgs = Array.prototype.slice.call(card.querySelectorAll("img"));
    for (var i = 0; i < imgs.length; i++) {
      var img = imgs[i];
      var src =
        img.currentSrc ||
        img.getAttribute("src") ||
        img.getAttribute("data-src") ||
        img.getAttribute("data-imgsrc") ||
        "";
      if (!src && img.getAttribute("srcset")) {
        src = img.getAttribute("srcset").split(",")[0].trim().split(" ")[0];
      }
      // skip inline placeholders and tracking pixels
      if (!src || src.indexOf("data:") === 0) continue;
      if (img.naturalWidth && img.naturalWidth < 40) continue;
      try {
        return new URL(src, location.href).href;
      } catch (e) {
        return src;
      }
    }
    return "";
  }

  // Titles sometimes arrive with the price glued on ("Kissen creme, 12,00 €").
  function stripTrailingPrice(str) {
    return clean(
      String(str || "").replace(/[,·|–-]?\s*\d{1,3}(?:[.\s]\d{3})*(?:,\d{2})?\s?(?:€|EUR)\s*$/i, "")
    );
  }

  function pickTitle(anchor, card) {
    var img = card.querySelector("img[alt]");
    var heading = card.querySelector("h1,h2,h3,h4,[class*='title' i],[class*='Title']");
    var candidates = [
      anchor.getAttribute("aria-label"),
      img ? img.getAttribute("alt") : "",
      heading ? heading.textContent : "",
      anchor.getAttribute("title"),
      anchor.textContent,
    ];
    for (var i = 0; i < candidates.length; i++) {
      var c = stripTrailingPrice(candidates[i]);
      // ignore junk like "Foto", numbers only, or absurdly long blobs
      if (c && c.length > 2 && c.length < 160 && !/^\d+$/.test(c)) return c;
    }
    return "Untitled find";
  }

  function pickPrice(card) {
    var text = clean(card.innerText || card.textContent || "");
    var m = text.match(/(\d{1,3}(?:[.\s]\d{3})*(?:,\d{2})?|\d+(?:[.,]\d{2})?)\s?(?:€|EUR)/i);
    if (m) return clean(m[1]) + " €";
    if (/zu verschenken|verschenken|gratis/i.test(text)) return "Zu verschenken";
    return "";
  }

  // ---------- collect ----------
  var seen = {};
  var finds = [];
  var source = detectSource(location.hostname);
  var today = new Date().toISOString().slice(0, 10);

  listingAnchors().forEach(function (anchor) {
    var href = anchor.getAttribute("href");
    if (!href) return;
    var link = normalizeURL(href);
    if (seen[link]) return;
    seen[link] = true;

    var card = cardFor(anchor);
    finds.push({
      title: pickTitle(anchor, card),
      source: source,
      link: link,
      price: pickPrice(card),
      image: pickImage(card),
      note: "",
      tags: [],
      dateAdded: today,
    });
  });

  // ---------- format ----------
  function entryFor(f) {
    return (
      "  {\n" +
      '    title: "' + escapeForJS(f.title) + '",\n' +
      '    source: "' + escapeForJS(f.source) + '",\n' +
      '    link: "' + escapeForJS(f.link) + '",\n' +
      '    price: "' + escapeForJS(f.price) + '",\n' +
      '    image: "' + escapeForJS(f.image) + '",\n' +
      '    note: "",\n' +
      "    tags: [],\n" +
      '    dateAdded: "' + escapeForJS(f.dateAdded) + '",\n' +
      "  },"
    );
  }

  var output = finds.map(entryFor).join("\n");

  // ---------- overlay ----------
  var existing = document.getElementById("__finds_grabber__");
  if (existing) existing.remove();

  var wrap = document.createElement("div");
  wrap.id = "__finds_grabber__";
  wrap.setAttribute(
    "style",
    [
      "position:fixed",
      "inset:0",
      "z-index:2147483647",
      "background:rgba(5,11,102,0.72)",
      "display:flex",
      "align-items:center",
      "justify-content:center",
      "padding:24px",
      "font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif",
    ].join(";")
  );

  var panel = document.createElement("div");
  panel.setAttribute(
    "style",
    [
      "background:#FCF2EC",
      "color:#10163A",
      "border-radius:16px",
      "max-width:720px",
      "width:100%",
      "max-height:80vh",
      "display:flex",
      "flex-direction:column",
      "padding:24px",
      "box-shadow:0 24px 60px rgba(0,0,0,0.4)",
    ].join(";")
  );

  var heading = document.createElement("div");
  heading.setAttribute("style", "font-size:20px;font-weight:800;margin-bottom:6px");
  heading.textContent = finds.length
    ? "Found " + finds.length + " listing" + (finds.length === 1 ? "" : "s")
    : "Couldn't find any listings on this page";

  var sub = document.createElement("div");
  sub.setAttribute("style", "font-size:13px;line-height:1.5;color:#5B6591;margin-bottom:14px");
  sub.textContent = finds.length
    ? "Copy this, then paste it into data.js above the closing ]; — or into the import box on your add page. Scrolled to the bottom of your list first? Anything not loaded yet won't be here."
    : "Make sure you're on your saved-items page (Merkliste or favourites) and that you've scrolled far enough for the items to load.";

  var area = document.createElement("textarea");
  area.readOnly = true;
  area.value = output || "";
  area.setAttribute(
    "style",
    [
      "width:100%",
      "flex:1",
      "min-height:220px",
      "font-family:ui-monospace,Menlo,Consolas,monospace",
      "font-size:12px",
      "line-height:1.5",
      "padding:12px",
      "border:2px solid #E9D5CB",
      "border-radius:10px",
      "background:#fff",
      "color:#10163A",
      "resize:vertical",
      "white-space:pre",
    ].join(";")
  );

  var row = document.createElement("div");
  row.setAttribute("style", "display:flex;gap:10px;margin-top:14px;flex-wrap:wrap");

  function makeBtn(label, bg, color, border) {
    var b = document.createElement("button");
    b.textContent = label;
    b.setAttribute(
      "style",
      [
        "font-family:inherit",
        "font-size:13px",
        "font-weight:800",
        "letter-spacing:0.04em",
        "text-transform:uppercase",
        "padding:11px 18px",
        "border-radius:9px",
        "cursor:pointer",
        "background:" + bg,
        "color:" + color,
        "border:2px solid " + border,
      ].join(";")
    );
    return b;
  }

  var copyBtn = makeBtn("Copy all", "#050B66", "#F7E1DA", "#050B66");
  var closeBtn = makeBtn("Close", "transparent", "#050B66", "#050B66");

  copyBtn.addEventListener("click", function () {
    area.removeAttribute("readonly");
    area.select();
    area.setSelectionRange(0, area.value.length);
    var ok = false;
    try { ok = document.execCommand("copy"); } catch (e) { ok = false; }
    area.setAttribute("readonly", "readonly");
    if (!ok && navigator.clipboard) {
      navigator.clipboard.writeText(area.value).then(
        function () { copyBtn.textContent = "Copied!"; },
        function () { copyBtn.textContent = "Copy failed — select manually"; }
      );
      return;
    }
    copyBtn.textContent = ok ? "Copied!" : "Copy failed — select manually";
  });

  closeBtn.addEventListener("click", function () { wrap.remove(); });
  wrap.addEventListener("click", function (e) { if (e.target === wrap) wrap.remove(); });

  row.appendChild(copyBtn);
  row.appendChild(closeBtn);
  panel.appendChild(heading);
  panel.appendChild(sub);
  if (finds.length) panel.appendChild(area);
  panel.appendChild(row);
  wrap.appendChild(panel);
  document.body.appendChild(wrap);

  if (finds.length) area.focus();
})();
