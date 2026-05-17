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
      case 'techstack':
        return generateTechStack(section.data);
      case 'streaming':
        return generateStreaming(section.data);
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

function generateTechStack(data: any): string {
  if (!data.variableName && data.code.length === 0 && data.tools.length === 0 && data.architecture.length === 0 && data.customFields.length === 0) {
    return '';
  }

  const varName = data.variableName || 'developer';
  let codeContent = `const ${varName} = {\n`;

  if (data.code && data.code.length > 0) {
    const codeArray = data.code.map((item: string) => `"${item}"`).join(', ');
    codeContent += `  code: [${codeArray}],\n`;
  }

  if (data.tools && data.tools.length > 0) {
    const toolsArray = data.tools.map((item: string) => `"${item}"`).join(', ');
    codeContent += `  tools: [${toolsArray}],\n`;
  }

  if (data.architecture && data.architecture.length > 0) {
    const archArray = data.architecture.map((item: string) => `"${item}"`).join(', ');
    codeContent += `  architecture: [${archArray}],\n`;
  }

  if (data.customFields && data.customFields.length > 0) {
    data.customFields.forEach((field: { key: string; value: string }) => {
      codeContent += `  ${field.key}: "${field.value}",\n`;
    });
  }

  codeContent += `}`;

  return `## 💻 Tech Stack\n\n\`\`\`javascript\n${codeContent}\n\`\`\``;
}

function generateStreaming(data: any): string {
  if (!data.channels || data.channels.length === 0) return '';

  let md = '## 📺 Video & Streaming\n\n';

  data.channels.forEach((channel: { platform: string; url: string; username: string }) => {
    if (channel.platform === 'YouTube') {
      md += `[![YouTube](https://img.shields.io/youtube/channel/subscribers/${channel.username}?label=${encodeURIComponent(channel.platform)}&style=social)](${channel.url})\n`;
    } else if (channel.platform === 'Twitch') {
      md += `[![Twitch Status](https://img.shields.io/twitch/status/${channel.username}?style=social&label=${encodeURIComponent(channel.platform)})](${channel.url})\n`;
    } else {
      md += `[![${channel.platform}](https://img.shields.io/badge/${encodeURIComponent(channel.platform)}-${encodeURIComponent(channel.username)}-red?style=social)](${channel.url})\n`;
    }
  });

  return md.trim();
}