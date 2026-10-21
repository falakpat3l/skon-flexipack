# Skon Flexipack website

A phone-first, single page demo website for Skon Flexipack Pvt. Ltd. and Patidar Chemicals, a flexible packaging maker at MIDC Waluj, Chh. Sambhajinagar.

The page lists products (milk pouches, film rolls, lamination, ice cream and oil packing), explains how to order, and has call, WhatsApp, email and map links. It has a light and dark theme and works without any build step.

## Files

- `index.html`: the whole site (HTML, CSS and a small script)
- `images/`: product photos, gallery photos and the logo (WebP, plus a PNG icon)

## Preview on your computer

1. Open a terminal in this folder.
2. Run `python3 -m http.server 8000`
3. Open http://localhost:8000 in your browser.

You can also just double click `index.html`, but a local server is closer to how GitHub Pages serves it.

## Publish

The site is hosted with GitHub Pages from the `main` branch (root folder). Push your changes and Pages updates in a minute or two.

The page has `noindex` set, so search engines will not list it while it is a demo. Remove the `robots` meta tag in `index.html` when it should go public.
