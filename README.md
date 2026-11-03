# Skon Flexipack website

A phone-first, single page demo website for Skon Flexipack Pvt. Ltd. and Patidar Chemicals, a flexible packaging maker at MIDC Waluj, Chh. Sambhajinagar.

The page lists products (milk pouches, film rolls, lamination, ice cream and oil packing), explains how to order, and has call, WhatsApp, email and map links. It has a light and dark theme and works without any build step.

## Files

- `index.html`: the page and its CSS
- `site.js`: the small script (theme, menu, filters). It lives in its own file so the security policy can block any script that is not from this site.
- `images/`: product photos, gallery photos and the logo (WebP, plus a PNG icon). Files ending in `-sm.webp` are half size copies that small screens load instead.
- `robots.txt` and `sitemap.xml`: for search engines once the site goes public

## Preview on your computer

1. Open a terminal in this folder.
2. Run `python3 -m http.server 8000`
3. Open http://localhost:8000 in your browser.

You can also just double click `index.html`, but a local server is closer to how GitHub Pages serves it.

## Publish

The site is hosted with GitHub Pages from the `main` branch (root folder). Push your changes and Pages updates in a minute or two.

The page has `noindex` set, so search engines will not list it while it is a demo. Remove the `robots` meta tag in `index.html` when it should go public.

Notes for later:

- Search engines only read `robots.txt` at the root of a site. On `falakpat3l.github.io/skon-flexipack/` this copy is ignored, so submit `sitemap.xml` in Google Search Console instead. It starts working by itself on a custom domain.
- A missing page shows the GitHub Pages 404 for the whole `falakpat3l.github.io` site, so there is no 404 page in this repo.
- The security policy (the `Content-Security-Policy` line at the top of `index.html`) only allows this site, Google Fonts and images from this site. If you add a script, font or image from another website, add it there too, or it will not load.
- If you add a product photo, make a half size copy named `name-sm.webp` and list both in its `srcset`, like the others.
