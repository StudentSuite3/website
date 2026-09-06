# Architecture

StudentSuite's website is a Next.js 16 static-export site: every page is pre-rendered at build time and served as plain HTML/CSS/JS with no server runtime.

## Folder layout

```
src/
├── app/                   App Router pages
│   ├── layout.tsx         Root layout (fonts, analytics, dark-mode script)
│   ├── page.tsx           Homepage (Hero, Products, Mission, Contribute, Updates)
│   ├── globals.css        Tailwind v4 theme tokens, graph-paper motif, kicker
│   ├── sitemap.ts         Static sitemap
│   ├── opengraph-image.tsx  Generated OG image
│   ├── tools/             /tools page
│   ├── updates/           /updates page
│   ├── mission/           /mission page
│   ├── contribute/        /contribute page
│   └── docs/              Documentation hub (ported from StudyMap)
│       ├── page.tsx        Docs index with list/grid toggle
│       └── (article)/      Route group for article pages
│           ├── layout.tsx  Shared article chrome (sidebar, pager, CTA)
│           └── <slug>/     19 individual doc pages
├── components/
│   ├── Header.tsx         Site header with nav and theme toggle
│   ├── Footer.tsx         Site footer
│   ├── Hero.tsx           Homepage hero with dot-pattern + ambient glow
│   ├── Products.tsx       Tools grid (id-based lookup)
│   ├── Updates.tsx        Recent activity feed
│   ├── Mission.tsx        Mission section
│   ├── MobileNav.tsx      Full-screen mobile nav
│   ├── Contribute.tsx     Contributing section
│   ├── ui/                shadcn/ui primitives (badge, button, card, input, sheet)
│   ├── layout/            Page layout helpers (PageContainer)
│   ├── competitions/      Shared components (ViewToggle)
│   ├── docs/              ~17 docs-specific components
│   └── mdx-content.tsx    ReactMarkdown component map
├── lib/
│   ├── utils.ts           cn() helper
│   ├── site.ts            Site metadata constants
│   ├── docs-nav.ts        Single source of truth for all /docs routes
│   ├── docs-meta.ts       Build-time generated dates and read times
│   ├── awesome-list.ts    GitHub README fetcher and parser
│   ├── changelog.ts       CHANGELOG.md parser
│   └── highlight.ts       Shiki syntax highlighting (server-only)
└── data/
    ├── products.ts        Tool definitions
    └── updates.ts         Update feed entries
```

## Key patterns

- **Static export**: `output: 'export'` in next.config. No ISR, no server functions. All data fetching happens at build time.
- **Tailwind v4**: CSS-first config via `@theme inline` in globals.css. No tailwind.config file.
- **Dark mode**: `html.dark` class toggled by a blocking `<script>` in the root layout, stored in localStorage.
- **Docs system**: Ported from StudyMap. Uses `docs-nav.ts` as the single source of truth for routes, titles, descriptions, icons, and grouping. The sidebar, index, pager, and page headers all read from it.
- **Awesome lists**: Fetched from GitHub raw at build time, parsed into sections, rendered with a search/filter browser component.
- **Code highlighting**: Shiki runs server-side (RSC) with dual light/dark themes via CSS variables.

## Build pipeline

1. `prebuild` (npm lifecycle): `scripts/build-docs-meta.mjs` generates `src/lib/docs-meta.generated.json` with per-page dates (from git history) and read-time estimates.
2. `next build`: Static export of all pages.
