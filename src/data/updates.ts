export interface UpdateEntry {
  id: string;
  repo: string;
  repoUrl: string;
  date: string;
  title: string;
  description: string;
  changelogUrl: string;
}

/**
 * Hand-curated, not fetched live: sibling repos' CHANGELOG.md files mix
 * dated releases with undated [Unreleased] sections, so a live parser would
 * be fragile for a page that updates infrequently. Update by hand alongside
 * each repo's own changelog.
 */
export const updates: UpdateEntry[] = [
  {
    id: 'website-nav-and-updates',
    repo: 'Website',
    repoUrl: 'https://github.com/StudentSuite/Website',
    date: '2026-08-26',
    title: 'Solid nav and this page shipped',
    description:
      'Fixed a low-contrast header on /mission and stood up this page to track activity across the org.',
    changelogUrl: 'https://github.com/StudentSuite/Website/blob/main/CHANGELOG.md',
  },
  {
    id: 'studymap-docs-overhaul',
    repo: 'StudyMap',
    repoUrl: 'https://github.com/StudentSuite/StudyMap',
    date: '2026-08-08',
    title: 'Docs hub, sitemap, and an auto-updating contributor grid',
    description:
      'Sidebar-navigated docs across 16 pages sourced from one file, shiki-highlighted code blocks, a generated sitemap, and a robots.ts.',
    changelogUrl: 'https://github.com/StudentSuite/StudyMap/blob/main/CHANGELOG.md',
  },
  {
    id: 'asr-cleanup',
    repo: 'Awesome Student Resources',
    repoUrl: 'https://github.com/StudentSuite/awesome-student-resources',
    date: '2026-08-06',
    title: 'Dead links repointed, contributors section added',
    description:
      'Fixed four dead links, added a pricing-correction issue template, and an auto-updating contributors grid in the README.',
    changelogUrl:
      'https://github.com/StudentSuite/awesome-student-resources/blob/main/CHANGELOG.md',
  },
  {
    id: 'assr-cleanup',
    repo: 'Awesome Study Resources',
    repoUrl: 'https://github.com/StudentSuite/awesome-study-resources',
    date: '2026-08-06',
    title: 'New entries, malformed-entry fixes, contributors section',
    description:
      'Added Dopastep, fixed a malformed entry and a clobbered one, and clarified the PR template to one resource per PR.',
    changelogUrl:
      'https://github.com/StudentSuite/awesome-study-resources/blob/main/CHANGELOG.md',
  },
  {
    id: 'askills-cleanup',
    repo: 'Awesome Skills & Plugins',
    repoUrl: 'https://github.com/StudentSuite/awesome-skills-plugins-for-students',
    date: '2026-08-06',
    title: 'Sister-list cross-links and a contributors section',
    description:
      'Added a footer cross-linking the two sibling awesome-lists and a contributors section in the README.',
    changelogUrl:
      'https://github.com/StudentSuite/awesome-skills-plugins-for-students/blob/main/CHANGELOG.md',
  },
];
