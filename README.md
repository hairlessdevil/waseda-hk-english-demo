# Waseda HK Capital — English version

An English reproduction of https://waseda-hk.co.jp/, based on the public site inspected on November 13, 2026.

Demo: https://hairlessdevil.github.io/waseda-hk-english-demo/

This repository hosts an English demonstration of the source website. It is not the official company website.

Open `index.html` in a browser, or serve this folder with any static web server. No installation or build step is required. All images, fonts, styles and scripts are included locally.

The layout, colors, imagery and order of the remaining sections follow the source site. The Directors section is intentionally omitted from this demo. Visible page text, navigation, image descriptions and metadata are translated into English. English line lengths and spacing are adapted for desktop and mobile. Original Japanese lettering within the emblem and map graphic is preserved as branding.

Navigation, mobile menu, section links and email links work. The “Contact us” links scroll to the Contact panel; the panel and email address links open an email app. This static version does not include a form or WordPress content management system. News entries reflect the source site at the inspection date.

`asset-sources.json` lists the original image URLs. The original branding and media remain the property of their respective owners. Mulish is bundled under the SIL Open Font License in `assets/OFL.txt`.

The demo includes `noindex, nofollow` to discourage search-engine indexing. The demo itself and this repository are public.

## Publishing updates

GitHub Pages serves the root of the `main` branch. Commit and push changes to `main`; GitHub will rebuild the demo automatically. `.nojekyll` tells Pages to serve these files as a plain static site. All asset paths are relative so the site works under its repository URL.
