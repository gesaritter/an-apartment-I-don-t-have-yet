/* ============================================================
   app.js — renders the finds board from the data in data.js
   You shouldn't need to edit this file to add new finds —
   see data.js for that. This file just handles rendering,
   search, and filtering.
   ============================================================ */

(function () {
  const state = {
    query: "",
    source: "All",
    tag: null,
  };

  const gridEl = document.getElementById("grid");
  const emptyEl = document.getElementById("empty-state");
  const searchEl = document.getElementById("search");
  const sourcePillsEl = document.getElementById("source-pills");
  const tagChipsEl = document.getElementById("tag-chips");
  const statNumberEl = document.getElementById("stat-number");

  // ---- header content from SITE_CONFIG (data.js) ----
  function applySiteConfig() {
    const cfg = (typeof SITE_CONFIG !== "undefined" && SITE_CONFIG) || {};

    if (cfg.eyebrow) document.getElementById("eyebrow").textContent = cfg.eyebrow.toUpperCase();

    const title = cfg.title || "Finds Archive";
    document.title = title;
    // Let the headline wrap naturally across the full width — forcing one word
    // per line falls apart as soon as the title is more than a couple of words.
    document.getElementById("site-title").textContent = title;

    if (cfg.tagline) document.getElementById("site-tagline").textContent = cfg.tagline;
    if (cfg.curatedBy) document.getElementById("curated-by").textContent = cfg.curatedBy;
    if (cfg.curatedFor) document.getElementById("curated-for").textContent = cfg.curatedFor;
    if (cfg.category) document.getElementById("header-category").textContent = cfg.category.toUpperCase();

    // ghost background text — first word of the title, repeated, faint
    const ghostWord = (title.split(" ")[0] || "FINDS").toUpperCase();
    const ghostEl = document.getElementById("ghost-text");
    ghostEl.innerHTML = `<span class="title-line">${escapeHTML(ghostWord)}</span><span class="title-line">${escapeHTML(ghostWord)}</span>`;
  }

  // ---- headline sizing ----
  // Font metrics differ wildly between typefaces, so rather than hard-coding a
  // size we measure the rendered headline and binary-search the largest size
  // that still (a) keeps every word on the line and (b) stays within a sensible
  // number of lines. Long titles fill the width; short ones stay in proportion.
  const TITLE_LINE_HEIGHT = 1.06;

  function fitTitle() {
    const el = document.getElementById("site-title");
    if (!el || !el.textContent.trim()) return;

    const vw = window.innerWidth;
    const maxLines = vw >= 1000 ? 3 : vw >= 620 ? 4 : 5;
    const cap = Math.min(vw * 0.17, 190);
    const floor = 26;

    el.style.lineHeight = String(TITLE_LINE_HEIGHT);

    let lo = floor;
    let hi = Math.max(cap, floor + 1);
    let best = floor;

    for (let i = 0; i < 24 && hi - lo > 0.5; i++) {
      const mid = (lo + hi) / 2;
      el.style.fontSize = mid + "px";

      const noOverflow = el.scrollWidth <= el.clientWidth + 1;
      const lines = Math.round(el.getBoundingClientRect().height / (mid * TITLE_LINE_HEIGHT));

      if (noOverflow && lines <= maxLines) {
        best = mid;
        lo = mid;
      } else {
        hi = mid;
      }
    }

    el.style.fontSize = Math.floor(best) + "px";
  }

  let resizeTimer = null;
  window.addEventListener("resize", function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(fitTitle, 120);
  });

  function badgeClass(source) {
    const s = (source || "").toLowerCase();
    if (s.includes("ebay")) return "ebay";
    if (s.includes("vinted")) return "vinted";
    return "other";
  }

  function formatDate(dateStr) {
    if (!dateStr) return "";
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return dateStr;
    return d.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
  }

  function cardHTML(find) {
    const tagsHTML = (find.tags || [])
      .map((t) => `<span class="tag">${escapeHTML(t)}</span>`)
      .join("");

    const mediaHTML = find.image
      ? `<div class="card-media">
           <span class="badge ${badgeClass(find.source)}">${escapeHTML(find.source || "find")}</span>
           <img src="${escapeAttr(find.image)}" alt="${escapeAttr(find.title || "")}"
                onerror="this.parentElement.classList.add('placeholder'); this.parentElement.insertAdjacentHTML('beforeend', '🪴'); this.remove();" />
         </div>`
      : `<div class="card-media placeholder">
           <span class="badge ${badgeClass(find.source)}">${escapeHTML(find.source || "find")}</span>
           🪴
         </div>`;

    return `
      <article class="card">
        ${mediaHTML}
        <div class="card-body">
          <h3 class="card-title">${escapeHTML(find.title || "untitled find")}</h3>
          ${find.price ? `<div class="card-price">${escapeHTML(find.price)}</div>` : ""}
          ${find.note ? `<p class="card-note">${escapeHTML(find.note)}</p>` : ""}
          ${tagsHTML ? `<div class="card-tags">${tagsHTML}</div>` : ""}
          <div class="card-footer">
            <span class="card-date">${formatDate(find.dateAdded)}</span>
            ${
              find.link
                ? `<a class="card-link" href="${escapeAttr(find.link)}" target="_blank" rel="noopener noreferrer">View ↗</a>`
                : ""
            }
          </div>
        </div>
      </article>
    `;
  }

  function escapeHTML(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }
  function escapeAttr(str) {
    return String(str).replace(/"/g, "&quot;");
  }

  function getAllTags(finds) {
    const set = new Set();
    finds.forEach((f) => (f.tags || []).forEach((t) => set.add(t)));
    return Array.from(set).sort();
  }

  function getAllSources(finds) {
    const set = new Set();
    finds.forEach((f) => f.source && set.add(f.source));
    return Array.from(set).sort();
  }

  function renderControls(finds) {
    const sources = ["All", ...getAllSources(finds)];
    sourcePillsEl.innerHTML = sources
      .map(
        (s) =>
          `<button class="pill ${s === state.source ? "active" : ""}" data-source="${escapeAttr(s)}">${escapeHTML(s)}</button>`
      )
      .join("");

    const tags = getAllTags(finds);
    tagChipsEl.innerHTML = tags
      .map(
        (t) =>
          `<button class="chip ${t === state.tag ? "active" : ""}" data-tag="${escapeAttr(t)}">#${escapeHTML(t)}</button>`
      )
      .join("");

    sourcePillsEl.querySelectorAll(".pill").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.source = btn.dataset.source;
        render();
      });
    });

    tagChipsEl.querySelectorAll(".chip").forEach((btn) => {
      btn.addEventListener("click", () => {
        const t = btn.dataset.tag;
        state.tag = state.tag === t ? null : t;
        render();
      });
    });
  }

  function matches(find) {
    const q = state.query.trim().toLowerCase();
    if (q) {
      const haystack = [find.title, find.note, find.source, ...(find.tags || [])]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();
      if (!haystack.includes(q)) return false;
    }
    if (state.source !== "All" && find.source !== state.source) return false;
    if (state.tag && !(find.tags || []).includes(state.tag)) return false;
    return true;
  }

  function render() {
    const finds = (typeof FINDS !== "undefined" && Array.isArray(FINDS) ? FINDS : []).slice();

    // newest first
    finds.sort((a, b) => new Date(b.dateAdded || 0) - new Date(a.dateAdded || 0));

    renderControls(finds);

    const filtered = finds.filter(matches);

    statNumberEl.textContent = finds.length;

    if (!filtered.length) {
      gridEl.innerHTML = "";
      emptyEl.hidden = false;
      return;
    }
    emptyEl.hidden = true;
    gridEl.innerHTML = filtered.map(cardHTML).join("");
  }

  searchEl.addEventListener("input", (e) => {
    state.query = e.target.value;
    render();
  });

  const yearNow = new Date().getFullYear();
  document.getElementById("year").textContent = yearNow;
  document.getElementById("footer-year").textContent = yearNow;

  applySiteConfig();
  render();

  fitTitle();
  // re-measure once the display font has actually loaded, since its metrics
  // are what the sizing depends on
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(fitTitle).catch(function () {});
  }
})();
