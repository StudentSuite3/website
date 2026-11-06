export const site = {
  name: "StudentSuite",
  tagline: "Open-source tools that help students plan less and learn more.",
  description:
    "Free, open tools built around one idea: students deserve better software.",
  // The one place the base URL is spelled. The apex host 308s to www, so www
  // is the default; NEXT_PUBLIC_SITE_URL overrides it for previews.
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://www.thestudentsuite.com").replace(/\/$/, ""),
  repo: "https://github.com/StudentSuite",
  // The docs pages ported from StudyMap describe StudyMap, so their issue,
  // LICENSE, and self-hosting links point at its repo, not the org (#5).
  studymapRepo: "https://github.com/StudentSuite/StudyMap",
} as const;
