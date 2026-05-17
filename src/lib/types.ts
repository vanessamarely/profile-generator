export type SectionType = 
  | 'header'
  | 'about'
  | 'skills'
  | 'stats'
  | 'badges'
  | 'socials';

export interface Section {
  id: string;
  type: SectionType;
  data: Record<string, any>;
}

export interface ProfileData {
  sections: Section[];
}

export const sectionTemplates = {
  header: {
    name: 'Header',
    description: 'Name, title, and banner',
    defaultData: {
      name: '',
      tagline: '',
      bannerUrl: '',
    }
  },
  about: {
    name: 'About Me',
    description: 'Bio and introduction',
    defaultData: {
      content: '',
    }
  },
  skills: {
    name: 'Skills',
    description: 'Technology stack',
    defaultData: {
      skills: [] as string[],
    }
  },
  stats: {
    name: 'GitHub Stats',
    description: 'Stats and streaks',
    defaultData: {
      username: '',
      showStats: true,
      showStreak: true,
      showLanguages: true,
      theme: 'radical',
    }
  },
  badges: {
    name: 'Badges',
    description: 'Tech badges',
    defaultData: {
      badges: [] as string[],
    }
  },
  socials: {
    name: 'Social Links',
    description: 'Contact and profiles',
    defaultData: {
      links: [] as { platform: string; url: string }[],
    }
  },
};