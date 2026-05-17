export type SectionType = 
  | 'header'
  | 'about'
  | 'skills'
  | 'stats'
  | 'badges'
  | 'socials'
  | 'techstack'
  | 'streaming'
  | 'trophy'
  | 'contributions';

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
      links: [] as { platform: string; url: string; username?: string }[],
    }
  },
  techstack: {
    name: 'Tech Stack (Code)',
    description: 'Code-style tech overview',
    defaultData: {
      variableName: 'yourname',
      code: [] as string[],
      tools: [] as string[],
      architecture: [] as string[],
      customFields: [] as { key: string; value: string }[],
    }
  },
  streaming: {
    name: 'Video & Streaming',
    description: 'YouTube/Twitch channels',
    defaultData: {
      channels: [] as { platform: string; url: string; username: string }[],
      videos: [] as { title: string; url: string; videoId: string }[],
    }
  },
  trophy: {
    name: 'GitHub Trophies',
    description: 'Achievement showcase',
    defaultData: {
      username: '',
      theme: 'radical',
      columns: 8,
      noFrame: false,
      noBackground: false,
      marginWidth: 5,
      marginHeight: 5,
    }
  },
  contributions: {
    name: 'Contribution Graph',
    description: 'Activity heatmap',
    defaultData: {
      username: '',
      theme: 'radical',
      hideTitle: false,
    }
  },
};