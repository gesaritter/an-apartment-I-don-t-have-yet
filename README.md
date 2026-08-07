# my finds

A tiny, cute website for collecting links to eBay Kleinanzeigen and Vinted finds you love — no cost, no login, no backend. It's just a few files that live in this folder.

## What's in here

- `index.html` — the page structure. You shouldn't need to touch this.
- `style.css` — all the colors, fonts, and layout. Tweak this if you want to change the look.
- `app.js` — the logic that turns your data into cards on the page. You shouldn't need to touch this either.
- `data.js` — **this is the only file you'll edit regularly.** It's where you add new finds and change the site's title/tagline.
- `add.html` — **the easy way to add finds.** A form that writes the code for you, so you never have to worry about commas or quote marks.
- `bookmarklet.html` — setup page for two bookmarks-bar buttons: one for a single listing, one that grabs your whole favourites page at once.
- `bookmarklet.js` / `bulk-grabber.js` — readable sources for those two buttons. Not used by the site itself.
- `api/listing.js` — optional Vercel helper that lets the form fill itself in from just a pasted link. Ignored entirely on GitHub Pages.

## Adding a new find (the easy way)

Open `add.html` in your browser — double-click it locally, or go to `yoursite.com/add.html` once it's published. There's also a "+ add a find" link in the footer of your site.

1. Fill in the form: title and link are the only required bits, everything else is optional.
2. Paste a photo URL if you have one and the form will tell you straight away whether that photo actually loads — no more guessing whether an image will show up.
3. Click **+ Add to list**. The form clears and you can add the next one right away.
4. Your list is saved in your browser as you go, so you can close the tab and come back to it later.
5. When you're done, click **Copy all for data.js**, open `data.js`, and paste everything just above the closing `];`. Save.

That's it. The form writes the code for you, so there are no commas or quote marks to get wrong.

### Bringing over your whole favourites list

This is the big shortcut. Open `bookmarklet.html` and drag **both** buttons onto your bookmarks bar.

Then: open your Merkliste (`kleinanzeigen.de/m-merkliste.html`) or Vinted favourites (`vinted.de/member/items/favourite_list`), **scroll all the way to the bottom** so every item loads, and click **⛏ Grab whole list**. A box appears with everything it found — title, photo, price, and link for each saved item. Copy it, then paste it into the **"Import a whole list"** box on `add.html` to load them all in at once and add your notes and tags. (Or paste it straight into `data.js` if you don't want notes.)

The scrolling matters: both sites only load items as you scroll, and the grabber can only see what's actually on the page.

### Adding one listing at a time

The second button, **✛ Add to Finds**, works on an individual listing page. Paste your published site's address into `bookmarklet.html` first so it knows where to send you, then clicking it on any listing opens your add form with everything filled in except the note and tags.

### Starting from just a link

On `add.html` there's a **"Start from a link"** box: paste a listing URL, hit fetch, and a small helper (`api/listing.js`) tries to read the details for you.

Two caveats worth knowing. It only runs on Vercel — GitHub Pages has no server side, and it won't work when you open `add.html` as a local file either. And Kleinanzeigen and Vinted both actively turn away automated lookups coming from servers, so it will sometimes come back empty. When that happens the form tells you and drops the link in for you. The bookmarklets don't have this problem, because they read the page from inside your own browser where you're already logged in — that's why they're the more reliable route for these two sites.

## Adding a new find (by hand)

If you'd rather just type it out, or you're fixing an existing entry:

1. Open `data.js` in any plain text editor (Notepad, TextEdit, VS Code, Notion, whatever you have).
2. Near the bottom of the `FINDS` list, there's a commented-out template block that starts with `// {` and ends with `// },`.
3. Copy that block, paste it just above the closing `];`, and remove the `//` at the start of each line so it becomes active code.
4. Fill in the fields:
   - `title` — what the piece is
   - `source` — `"eBay Kleinanzeigen"` or `"Vinted"`
   - `link` — the URL of the listing
   - `price` — e.g. `"45 €"` (or leave as `""` to hide it)
   - `image` — paste the photo URL from the listing if you can grab one (right-click the image on the listing → "Copy image address"). If it doesn't load once you preview the site, just leave it as `""` — a cute placeholder will show instead.
   - `note` — a little note to yourself about why you like it
   - `tags` — e.g. `["living room", "boho"]` — used for the filter buttons at the top
   - `dateAdded` — today's date as `"YYYY-MM-DD"`. Finds are sorted newest-first automatically.
5. Save the file. That's it — no need to touch anything else.

Don't forget commas between entries — if the site looks blank after an edit, that's almost always a missing comma or quotation mark in `data.js`. (This is exactly what the form in `add.html` saves you from.)

## Previewing it

Just double-click `index.html` and it'll open in your browser. Since everything is loaded as plain script files (not fetched over a server), this works even without an internet connection — the only thing that needs internet is the Google Fonts and the demo placeholder images.

## Publishing it for free with Vercel

Vercel is the better fit here, because it's the only one of the two that can run `api/listing.js` (the paste-a-link helper). Everything else works the same either way.

1. Put your files in a GitHub repo first (steps below).
2. Go to [vercel.com](https://vercel.com) and sign up with "Continue with GitHub".
3. Click **Add New → Project**, find your repo, click **Import**.
4. Leave everything on its defaults — framework preset "Other", build command and output directory both empty. There's no build step.
5. Click **Deploy**. You'll get a link like `my-finds.vercel.app`.

From then on, every time you commit a change to `data.js`, Vercel redeploys automatically and your live site updates within a minute.

## Publishing it for free with GitHub Pages

This turns your folder into a real website with its own link, for free, hosted by GitHub.

1. **Create a GitHub account** at [github.com](https://github.com) if you don't have one already (it's free).
2. **Create a new repository**:
   - Click the "+" in the top right → "New repository"
   - Name it something like `my-finds` (this becomes part of your URL)
   - Set it to **Public** (required for free GitHub Pages)
   - Don't add a README/gitignore — click "Create repository"
3. **Upload your files**:
   - On the new repo's page, click "uploading an existing file"
   - Drag in every file in this folder, and the `api` folder along with it
   - Scroll down and click "Commit changes"
4. **Turn on GitHub Pages**:
   - Go to the repo's **Settings** tab → **Pages** (in the left sidebar)
   - Under "Build and deployment" → "Source", choose **Deploy from a branch**
   - Branch: `main`, folder: `/ (root)` → **Save**
   - GitHub will show you a link like `https://yourusername.github.io/my-finds/` — give it a minute or two to go live.

From then on, whenever you want to add a new find:
1. Edit `data.js` locally (or directly on GitHub — click the file, then the pencil/edit icon)
2. Commit the change
3. GitHub Pages automatically rebuilds — refresh your live link in a minute and it's there.

## Making it your own

- Change the palette, fonts, or card shapes in `style.css` — the colors are all defined as variables at the very top of the file (`--blue`, `--cream`, `--ink`, etc.) so you can experiment without hunting through the whole file.
- Change the site name/tagline in `SITE_CONFIG` at the top of `data.js`.
- Want categories by room instead of (or alongside) the current tag filters? The `tags` field already supports that — just tag things consistently (e.g. `"living room"`, `"bedroom"`, `"kitchen"`) and they'll show up as filter chips automatically.
