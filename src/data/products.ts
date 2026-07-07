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
      'Study spots, exam centres, libraries, and resources that actually matter: vetted, organized, and growing as the community adds to it. Spend less time searching, more time studying.',
    githubUrl: 'https://github.com/StudentSuite/StudyMap',
    liveUrl: 'https://studymapp.vercel.app',
    cta: 'Open the map',
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
    cta: 'Browse the list',
  },
];

export const orgUrl = 'https://github.com/StudentSuite';
