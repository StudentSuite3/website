export interface Product {
  id: string;
  name: string;
  emoji: string;
  status: 'Live' | 'Curated';
  pitch: string;
  description: string;
  githubUrl: string;
  liveUrl?: string;
  cta: string;
}

export const products: Product[] = [
  {
    id: 'studymap',
    name: 'StudyMap',
    emoji: '🗺️',
    status: 'Live',
    pitch: 'The places every student should know, on one map.',
    description:
      'Study spots, exam centres, libraries, and resources that actually matter: vetted, organized, and growing as the community adds to it. Now with a docs hub for curated lists, optional sign-in for saved places, and self-hosting for any city.',
    githubUrl: 'https://github.com/StudentSuite/StudyMap',
    liveUrl: 'https://studyymap.com',
    cta: 'Open the map',
  },
  {
    id: 'pepiros',
    name: 'Pepiros',
    emoji: '🔬',
    status: 'Live',
    pitch: 'Every claim in a paper, bound to the quote that actually supports it.',
    description:
      'Turn a research PDF into a knowledge graph where every generated claim stays bound to a located quote, not a vector-similarity guess, and hand that grounding to Claude as a callable MCP service.',
    githubUrl: 'https://github.com/StudentSuite/pepiros',
    liveUrl: 'https://pepiros.vercel.app',
    cta: 'Explore Pepiros',
  },
  {
    id: 'skills-plugins',
    name: 'Skills & Plugins for Students',
    emoji: '🧩',
    status: 'Curated',
    pitch: 'AI-tooling setups that just work.',
    description:
      'Community-curated skills, plugins, and configs for Claude Code, Cursor, Copilot, and more, organized by what you are trying to do. Copy a folder, drop it into your editor, done.',
    githubUrl: 'https://github.com/StudentSuite/awesome-skills-plugins-for-students',
    liveUrl: 'https://studyymap.com/docs/awesome-skills-plugins',
    cta: 'Browse the collection',
  },
  {
    id: 'awesome-resources',
    name: 'Awesome Student Resources',
    emoji: '📚',
    status: 'Curated',
    pitch: 'The best tools and resources, labelled honestly.',
    description:
      'Software, textbooks, channels, and tools organized by subject and by what you need to get done. Free, freemium, paid, and open-source picks, each labelled so you know before you click.',
    githubUrl: 'https://github.com/StudentSuite/awesome-student-resources',
    liveUrl: 'https://studyymap.com/docs/awesome-student-resources',
    cta: 'Browse the list',
  },
  {
    id: 'awesome-study-resources',
    name: 'Awesome Study Resources',
    emoji: '🎓',
    status: 'Curated',
    pitch: 'Exam prep and subject-study resources, sorted by what you are studying for.',
    description:
      'Curated exam prep, subject-study, and learning-tool resources: split out from Awesome Student Resources to keep both lists focused. Free, freemium, and paid picks, each labelled.',
    githubUrl: 'https://github.com/StudentSuite/awesome-study-resources',
    liveUrl: 'https://studyymap.com/docs/awesome-study-resources',
    cta: 'Browse the list',
  },
];

export const orgUrl = 'https://github.com/StudentSuite';
