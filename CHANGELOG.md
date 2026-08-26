# Changelog

All notable changes to StudentSuite's website are documented here.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).
This project hasn't tagged a release yet; everything so far lives under Unreleased.

## [Unreleased]

### Added

- `sitemap.xml` and a generated Open Graph image.
- A dedicated `/updates` page aggregating recent activity across the
  StudentSuite org, and a Pepiros entry on the products list.
- A full-screen mobile nav (portalled, focus-trapped, closes on Escape),
  replacing the inline dropdown menu.

### Changed

- Hero background: replaced the animated WebGL mesh-gradient with fluid-
  simulation cursor with a lighter CSS-only dot-pattern and ambient glow
  drift, alongside a refresh of the product cards.
- Header is now permanently solid (`--nav-bg` tracks `--background` at full
  opacity) instead of transparent-until-scroll. The transparent state
  caused low-contrast nav text on `/mission`, whose hero section sits
  directly under the header with a solid indigo background and no
  scroll-based opacity to rescue it.
- Contact link switched from a plain `mailto:` to a Gmail compose URL, and
  the contact email updated to `studentsuite3@gmail.com`.
- Canonical domain pointed at `thestudentsuite.com`.
- Installed, then reverted, Vercel Web Analytics — analytics stays off.

### Fixed

- Regenerated Open Graph images from the new hero and bumped Next.js for
  CVEs.
