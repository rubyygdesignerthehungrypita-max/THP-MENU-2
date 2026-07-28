# The Hungry Pita — QR Menu

A single mobile-first page for your table/counter QR code: **Menu first, Bundles second**, built with your Lapland fonts and real product photos from your menu boards.

## What's inside
```
index.html              the whole page
assets/css/style.css    all styling
assets/js/main.js       scroll-reveal + active nav highlight
assets/fonts/           Lapland Bold & ExtraBold (woff2 + ttf fallback)
assets/img/             cropped product photos, bundle photos, and logo
```

## Put it on GitHub Pages
1. Create a new GitHub repo (e.g. `hungry-pita-menu`).
2. Upload everything in this folder to the repo root (keep the `assets` folder structure as-is).
3. In the repo: **Settings → Pages → Source → Deploy from a branch → `main` / `root`** → Save.
4. GitHub gives you a URL like `https://yourusername.github.io/hungry-pita-menu/` — that's your live menu.
   - If you'd rather have it at your own domain (e.g. `menu.thehungrypitaph.com`), add a `CNAME` file with that domain in the repo root, and point a CNAME DNS record at `yourusername.github.io`.

## Point the QR code at it
Generate your QR code (Google's "QR Code Generator" in Chrome, or any free QR tool) with the GitHub Pages URL from step 4 as the destination. No redirect page needed — the QR just needs to encode that link directly.

## Updating prices or items later
- Prices/items live directly in `index.html` inside the `#menu` and `#bundles` sections — search for the item name and edit the number next to `₱`.
- Add-ons list is near the bottom of the `#menu` section.
- To swap a photo, drop a new image into `assets/img/` with the same filename (or update the `src=` path).
