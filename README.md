# StudentSuite website

The site at [thestudentsuite.com](https://www.thestudentsuite.com): what StudentSuite is, the tools it builds, project updates, and a docs hub that also browses the three StudentSuite awesome lists.

It is a Next.js 16 static export styled with Tailwind CSS v4. Every page is pre-rendered at build time and served as plain files, with no server runtime. [ARCHITECTURE.md](ARCHITECTURE.md) has the folder layout and how the pieces fit.

## Run it locally

You need Node.js 24 or newer (the tests run TypeScript directly).

```bash
npm install
npm run dev      # http://localhost:3000
```

## Commands

| Command | What it does |
| --- | --- |
| `npm run dev` | Development server with hot reload. |
| `npm run build` | Static export into `out/`. Runs `scripts/build-docs-meta.mjs` first, which reads each doc's last commit date from `git log`. |
| `npm run lint` | ESLint. CI fails on any error. |
| `npm test` | Unit tests in `src/lib/*.test.ts` (Node's built-in test runner). |

The build fetches each awesome list's `README.md` from GitHub, so it needs network access. A failed fetch is retried three times, then fails the build.

## Configuration

| Variable | Default | Used for |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | `https://www.thestudentsuite.com` | Canonical URLs, the sitemap, `robots.txt`, and Open Graph URLs. Set it for preview deploys on another host. |

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). Changes to StudyMap or the awesome lists belong in [their own repositories](https://github.com/StudentSuite).
