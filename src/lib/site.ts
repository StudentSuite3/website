export const site = {
  name: "StudentSuite",
  tagline: "Open-source tools that help students plan less and learn more.",
  description:
    "Free, open tools built around one idea: students deserve better software.",
  // The one place the base URL is spelled. The apex host 308s to www, so www
  // is the default; NEXT_PUBLIC_SITE_URL overrides it for previews.
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://www.thestudentsuite.com").replace(/\/$/, ""),
  repo: "https://github.com/StudentSuite",
} as const;
