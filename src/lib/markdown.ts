import { Section } from './types';

export function generateMarkdown(sections: Section[]): string {
  return sections.map(section => {
    switch (section.type) {
      case 'header':
        return generateHeader(section.data);
      case 'about':
        return generateAbout(section.data);
      case 'skills':
        return generateSkills(section.data);
      case 'stats':
        return generateStats(section.data);
      case 'badges':
        return generateBadges(section.data);
      case 'socials':
        return generateSocials(section.data);
      default:
        return '';
    }
  }).filter(Boolean).join('\n\n');
}

function generateHeader(data: any): string {
  let md = '';
  
  if (data.bannerUrl) {
    md += `![Banner](${data.bannerUrl})\n\n`;
  }
  
  if (data.name) {
    md += `# ${data.name}\n\n`;
  }
  
  if (data.tagline) {
    md += `### ${data.tagline}\n`;
  }
  
  return md;
}

function generateAbout(data: any): string {
  if (!data.content) return '';
  return `## About Me\n\n${data.content}`;
}

function generateSkills(data: any): string {
  if (!data.skills || data.skills.length === 0) return '';
  
  const skillBadges = data.skills.map((skill: string) => 
    `![${skill}](https://img.shields.io/badge/-${encodeURIComponent(skill)}-blueviolet?style=flat-square)`
  ).join(' ');
  
  return `## Skills\n\n${skillBadges}`;
}

function generateStats(data: any): string {
  if (!data.username) return '';
  
  const theme = data.theme || 'radical';
  let md = '## GitHub Stats\n\n';
  
  if (data.showStats) {
    md += `![GitHub Stats](https://github-readme-stats.vercel.app/api?username=${data.username}&show_icons=true&theme=${theme})\n\n`;
  }
  
  if (data.showStreak) {
    md += `![GitHub Streak](https://github-readme-streak-stats.herokuapp.com/?user=${data.username}&theme=${theme})\n\n`;
  }
  
  if (data.showLanguages) {
    md += `![Top Languages](https://github-readme-stats.vercel.app/api/top-langs/?username=${data.username}&layout=compact&theme=${theme})\n`;
  }
  
  return md;
}

function generateBadges(data: any): string {
  if (!data.badges || data.badges.length === 0) return '';
  
  const badgeUrls = data.badges.map((badge: string) => {
    const normalized = badge.toLowerCase().replace(/\s+/g, '-');
    return `![${badge}](https://img.shields.io/badge/${encodeURIComponent(badge)}-000000?style=for-the-badge&logo=${normalized}&logoColor=white)`;
  }).join(' ');
  
  return `## Tech Stack\n\n${badgeUrls}`;
}

function generateSocials(data: any): string {
  if (!data.links || data.links.length === 0) return '';
  
  const linkList = data.links.map((link: { platform: string; url: string }) => 
    `- [${link.platform}](${link.url})`
  ).join('\n');
  
  return `## Connect With Me\n\n${linkList}`;
}