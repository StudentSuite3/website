export interface Product {
  id: string;
  name: string;
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
    status: 'Live',
    pitch: 'A map of study spots and exam centres.',
    description:
      'Find libraries, quiet places to study, and exam centres near you. Entries are reviewed before they go live, and the city data can be self-hosted.',
    githubUrl: 'https://github.com/StudentSuite/StudyMap',
    liveUrl: 'https://studyymap.com',
    cta: 'Open the map',
  },
  {
    id: 'skills-plugins',
    name: 'Skills & Plugins for Students',
    status: 'Curated',
    pitch: 'Skills and plugins for AI coding assistants.',
    description:
      'Skills, plugins, and configs for Claude Code, Cursor, and Copilot, grouped by the task you are trying to do. Copy a folder into your editor and you are set.',
    githubUrl: 'https://github.com/StudentSuite/awesome-skills-plugins-for-students',
    liveUrl: 'https://studyymap.com/docs/awesome-skills-plugins',
    cta: 'Browse the collection',
  },
  {
    id: 'awesome-resources',
    name: 'Awesome Student Resources',
    status: 'Curated',
    pitch: 'A labelled index of study tools.',
    description:
      'Software, textbooks, and channels by subject. Every entry says whether it is free, freemium, paid, or open source.',
    githubUrl: 'https://github.com/StudentSuite/awesome-student-resources',
    liveUrl: 'https://studyymap.com/docs/awesome-student-resources',
    cta: 'Browse the list',
  },
  {
    id: 'awesome-study-resources',
    name: 'Awesome Study Resources',
    status: 'Curated',
    pitch: 'Exam prep and subject guides, kept separate.',
    description:
      'Revision material and learning tools split out from the general list, so exam-prep resources are easier to find. Every entry is labelled by price.',
    githubUrl: 'https://github.com/StudentSuite/awesome-study-resources',
    liveUrl: 'https://studyymap.com/docs/awesome-study-resources',
    cta: 'Browse the list',
  },
  {
    id: 'awesome-sat-resources',
    name: 'Awesome SAT Resources',
    status: 'Curated',
    pitch: 'Free SAT prep, in one place.',
    description:
      'Practice tests, formula sheets, video lessons, vocab lists, and study communities for the digital SAT. Every entry is free.',
    githubUrl: 'https://github.com/StudentSuite/awesome-sat-resources',
    liveUrl: 'https://studyymap.com/docs/awesome-sat-resources',
    cta: 'Browse the list',
  },
];

export const orgUrl = 'https://github.com/StudentSuite';
