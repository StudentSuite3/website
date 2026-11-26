# Changelog

All notable changes to StudentSuite's website are documented here.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).
This project hasn't tagged a release yet; everything so far lives under Unreleased.

## [Unreleased]

### Added

- `sitemap.xml` and a generated Open Graph image.
- A dedicated `/updates` page aggregating recent activity across the
  StudentSuite org.
- A full-screen mobile nav (portalled, focus-trapped, closes on Escape),
  replacing the inline dropdown menu.
- Awesome SAT Resources in the tools list, docs, and updates feed.

### Changed

- Hero and product cards rebuilt as flat, typographic sections. Removed the
  spotlight, shimmer button, dot-pattern field, ambient glow drift, dock
  magnification, marquees, pinging status dot, and scroll-reveal staggers.
- Header is now permanently solid (`--nav-bg` tracks `--background` at full
  opacity) instead of transparent-until-scroll. The transparent state
  caused low-contrast nav text on `/mission`, whose hero section sits
  directly under the header with a solid indigo background and no
  scroll-based opacity to rescue it.
- Contact link switched from a plain `mailto:` to a Gmail compose URL, and
  the contact email updated to `studentsuite3@gmail.com`.
- Canonical domain pointed at `thestudentsuite.com`.
- Vercel Web Analytics is installed and active.
- Retired Awesome AI Prompts from the tools grid and the updates feed. The
  products grid is now four cards in two even rows rather than a six-card bento
  with hand-placed spans.
- Products render directly from the data array, so reordering or removing an
  entry cannot shift a card onto the wrong product.
- Landing-page copy rewritten around specific claims, and repeated taglines
  and generic CTAs removed.

### Fixed

- `/updates` was missing from the sitemap.
- Added the ESLint flat config the repo had been missing since ESLint 9, so
  `npm run lint` runs instead of erroring out.
- Regenerated Open Graph images from the new hero and bumped Next.js for
  CVEs.
