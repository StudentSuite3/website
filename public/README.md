# StudentSuite brand assets (`public/`)

Drop downloaded assets here. This folder is the asset home for the future Next.js site.
Generate everything once in Claude design (see export prompt), keep the masters, never recreate ad hoc.

## Brand tokens
- Indigo (primary): `#4F46E5`
- Indigo (dark-mode contrast): `#818CF8`
- Teal (accent / tassel): `#14B8A6`
- Ink (wordmark on light): `#1A1A2E`
- Background: `#ffffff`

## The logo
- **`logo.svg` is THE logo** (icon mark). Use it wherever a single mark fits.
- `logo-lockup.svg` = horizontal (icon + wordmark) for headers / wide spaces, light backgrounds.
- `logo-lockup-dark.svg` = same for dark backgrounds (lightened indigo + white text).
- `logo-white.svg` / `logo-mono-black.svg` = single-color on dark / print.
- `logo-stacked.svg` / `logo-stacked-dark.svg` = vertical lockup.

## Expected files
| File | Purpose | Source |
|------|---------|--------|
| logo.svg | primary mark | design export |
| logo-white.svg | mark on dark/color | design export |
| logo-mono-black.svg | single-color / print | design export |
| logo-lockup.svg | header (light) | design export |
| logo-lockup-dark.svg | header (dark) | design export |
| logo-stacked.svg | vertical lockup (light) | design export |
| logo-stacked-dark.svg | vertical lockup (dark) | design export |
| favicon.svg | browser tab | design export |
| favicon-96x96.png | browser tab (png) | design export |
| favicon.ico | legacy tab | generated from favicon.svg |
| apple-touch-icon.png | iOS home screen (180, on white) | design export |
| web-app-manifest-192x192.png | PWA / Android (maskable) | design export |
| web-app-manifest-512x512.png | PWA / Android (maskable) | design export |
| og-image.png | social share card (1200x630, light) | design export |
| og-image-dark.png | social share card (1200x630, dark) | design export |
| avatar-512.png | GitHub org avatar / social pfp | design export |
| app-icon-1024.png | master app icon | design export |
| site.webmanifest | PWA manifest | authored (this repo) |
| robots.txt | crawler rules | authored (this repo) |

## favicon.ico
Design tools don't emit a clean multi-size `.ico`. Generate it from `favicon.svg` at
https://realfavicongenerator.net (or via ImageMagick from the PNGs) and drop it here.

## Where these also get used
- `logo.svg`, `logo-lockup.svg`, `logo-lockup-dark.svg` are also copied into the org
  `.github` repo (`profile/`) so the org profile README renders.
- `avatar-512.png` is uploaded in **Org Settings > Profile** (not referenced by code).
- `og-image.png` is set as each repo's **Social Preview** (Settings > General). The site's
  own `<meta og:image>`/Twitter card no longer reads this file - `src/app/opengraph-image.tsx`
  generates that one at build time so it can't drift from the current hero. `og-image.png`
  here is still the GitHub Social Preview upload (that surface needs an actual file, not a
  route), and it still shows the pre-2026-07 hero - due for a re-export from the design tool
  next time brand assets get refreshed.

## Site `<head>` wiring (for the future Next.js build)

Favicons:

```html
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="icon" href="/favicon-96x96.png" sizes="96x96">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
```

OG / Twitter card:

```html
<meta property="og:image" content="/og-image.png">
<meta name="twitter:image" content="/og-image.png">
<meta name="twitter:card" content="summary_large_image">
```

Manifest icons already live in `site.webmanifest`. Note: `purpose` there is
`"any maskable"` (superset of plain `"maskable"`) so the icons also work as
standard non-maskable icons. Leave as is.

## Not brand assets
Do not add Next.js starter clip-art (`next.svg`, `window.svg`, `globe.svg`, `file.svg`).
