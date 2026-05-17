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
      case 'trophy':
        return generateTrophy(section.data);
      case 'contributions':
        return generateContributions(section.data);
      case 'certifications':
        return generateCertifications(section.data);
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
  
  if (data.showGithubProfile && data.githubUsername) {
    md += '<div align="center">\n\n';
    md += `[![GitHub Profile](https://github.com/${encodeURIComponent(data.githubUsername)}.png?size=150)](https://github.com/${encodeURIComponent(data.githubUsername)})\n\n`;
    if (data.name) {
      md += `# ${data.name}\n\n`;
    }
    if (data.tagline) {
      md += `### ${data.tagline}\n\n`;
    }
    md += `[@${data.githubUsername}](https://github.com/${encodeURIComponent(data.githubUsername)})\n\n`;
    md += '</div>';
  } else {
    if (data.name) {
      md += `# ${data.name}\n\n`;
    }
    if (data.tagline) {
      md += `### ${data.tagline}\n`;
    }
  }
  
  return md;
}

function generateAbout(data: any): string {
  if (!data.content && !data.showGithubProfile) return '';
  
  let md = '## About Me\n\n';
  
  if (data.showGithubProfile && data.githubUsername) {
    md += '<div align="left">\n\n';
    md += `<img align="right" src="https://github.com/${encodeURIComponent(data.githubUsername)}.png?size=150" alt="${data.githubUsername}" width="150" style="border-radius: 50%;" />\n\n`;
    if (data.content) {
      md += `${data.content}\n\n`;
    }
    md += `**GitHub:** [@${data.githubUsername}](https://github.com/${encodeURIComponent(data.githubUsername)})\n\n`;
    md += '</div>\n\n';
    md += '<br clear="right"/>';
  } else if (data.content) {
    md += data.content;
  }
  
  return md;
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
  
  const images: string[] = [];
  
  if (data.showStats) {
    const statsUrl = `https://github-readme-stats.vercel.app/api?username=${encodeURIComponent(data.username)}&show_icons=true&theme=${encodeURIComponent(theme)}&hide_border=false&count_private=true`;
    images.push(`![GitHub Stats](${statsUrl})`);
  }
  
  if (data.showStreak) {
    const streakUrl = `https://github-readme-streak-stats.herokuapp.com/?user=${encodeURIComponent(data.username)}&theme=${encodeURIComponent(theme)}&hide_border=false`;
    images.push(`![GitHub Streak](${streakUrl})`);
  }
  
  if (data.showLanguages) {
    const langsUrl = `https://github-readme-stats.vercel.app/api/top-langs/?username=${encodeURIComponent(data.username)}&layout=compact&theme=${encodeURIComponent(theme)}&hide_border=false`;
    images.push(`![Top Languages](${langsUrl})`);
  }
  
  if (images.length > 0) {
    md += '<div align="center">\n\n';
    md += images.join('\n\n');
    md += '\n\n</div>';
  }
  
  return md;
}

function generateBadges(data: any): string {
  if (!data.badges || data.badges.length === 0) return '';
  
  const badgeUrls = data.badges.map((badge: any) => {
    let badgeUrl = '';
    
    if (badge.type === 'simple') {
      const normalized = badge.label.toLowerCase().replace(/\s+/g, '-');
      badgeUrl = `https://img.shields.io/badge/${encodeURIComponent(badge.label)}-000000?style=for-the-badge&logo=${normalized}&logoColor=white`;
    } else {
      const params = new URLSearchParams();
      const style = badge.style || 'for-the-badge';
      
      if (badge.message) {
        badgeUrl = `https://img.shields.io/badge/${encodeURIComponent(badge.label)}-${encodeURIComponent(badge.message)}-${badge.color || '000000'}`;
      } else {
        badgeUrl = `https://img.shields.io/badge/${encodeURIComponent(badge.label)}-${badge.color || '000000'}`;
      }
      
      badgeUrl += `?style=${style}`;
      
      if (badge.logo) {
        badgeUrl += `&logo=${encodeURIComponent(badge.logo)}`;
      }
      if (badge.logoColor) {
        badgeUrl += `&logoColor=${encodeURIComponent(badge.logoColor)}`;
      }
      if (badge.labelColor) {
        badgeUrl += `&labelColor=${encodeURIComponent(badge.labelColor)}`;
      }
    }
    
    const badgeMarkdown = `![${badge.label}](${badgeUrl})`;
    
    if (badge.link) {
      return `[${badgeMarkdown}](${badge.link})`;
    }
    
    return badgeMarkdown;
  }).join(' ');
  
  return `## Tech Stack\n\n${badgeUrls}`;
}

function generateSocials(data: any): string {
  if (!data.links || data.links.length === 0) return '';
  
  const platformConfig: Record<string, { badge: string; color: string; logo?: string }> = {
    'Twitter': { badge: 'Twitter', color: '1DA1F2', logo: 'twitter' },
    'LinkedIn': { badge: 'LinkedIn', color: '0077B5', logo: 'linkedin' },
    'GitHub': { badge: 'GitHub', color: '181717', logo: 'github' },
    'Medium': { badge: 'Medium', color: '12100E', logo: 'medium' },
    'Dev.to': { badge: 'Dev.to', color: '0A0A0A', logo: 'devdotto' },
    'YouTube': { badge: 'YouTube', color: 'FF0000', logo: 'youtube' },
    'Twitch': { badge: 'Twitch', color: '9146FF', logo: 'twitch' },
    'Instagram': { badge: 'Instagram', color: 'E4405F', logo: 'instagram' },
    'Facebook': { badge: 'Facebook', color: '1877F2', logo: 'facebook' },
    'Discord': { badge: 'Discord', color: '5865F2', logo: 'discord' },
    'Website': { badge: 'Website', color: '4A90E2', logo: 'googlechrome' },
    'Blog': { badge: 'Blog', color: 'FF5722', logo: 'blogger' },
    'Portfolio': { badge: 'Portfolio', color: '000000', logo: 'aboutdotme' },
    'Email': { badge: 'Email', color: 'D14836', logo: 'gmail' },
  };
  
  const linkList = data.links.map((link: { platform: string; url: string; username?: string }) => {
    const config = platformConfig[link.platform] || { badge: link.platform, color: '000000' };
    const label = link.username ? `@${link.username}` : config.badge;
    const badgeUrl = config.logo 
      ? `https://img.shields.io/badge/${encodeURIComponent(label)}-${config.color}?style=for-the-badge&logo=${config.logo}&logoColor=white`
      : `https://img.shields.io/badge/${encodeURIComponent(label)}-${config.color}?style=for-the-badge`;
    
    return `[![${link.platform}](${badgeUrl})](${link.url})`;
  }).join('\n');
  
  return `## 📫 Connect With Me\n\n${linkList}`;
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
  if ((!data.channels || data.channels.length === 0) && (!data.videos || data.videos.length === 0)) {
    return '';
  }

  let md = '## 📺 Video & Streaming\n\n';

  if (data.channels && data.channels.length > 0) {
    md += '### Channels\n\n';
    data.channels.forEach((channel: { platform: string; url: string; username: string }) => {
      if (channel.platform === 'YouTube') {
        md += `[![YouTube](https://img.shields.io/youtube/channel/subscribers/${channel.username}?label=${encodeURIComponent(channel.platform)}&style=social)](${channel.url})\n`;
      } else if (channel.platform === 'Twitch') {
        md += `[![Twitch Status](https://img.shields.io/twitch/status/${channel.username}?style=social&label=${encodeURIComponent(channel.platform)})](${channel.url})\n`;
      } else {
        md += `[![${channel.platform}](https://img.shields.io/badge/${encodeURIComponent(channel.platform)}-${encodeURIComponent(channel.username)}-red?style=social)](${channel.url})\n`;
      }
    });
    md += '\n';
  }

  if (data.videos && data.videos.length > 0) {
    md += '### Latest Videos\n\n';
    data.videos.forEach((video: { title: string; url: string; videoId: string }) => {
      const thumbnailUrl = `https://img.youtube.com/vi/${video.videoId}/mqdefault.jpg`;
      md += `[![${video.title}](${thumbnailUrl})](${video.url})\n`;
    });
  }

  return md.trim();
}

function generateTrophy(data: any): string {
  if (!data.username) return '';

  const params = new URLSearchParams();
  params.append('username', data.username);
  params.append('theme', data.theme || 'radical');
  params.append('column', data.columns?.toString() || '8');
  params.append('margin-w', data.marginWidth?.toString() || '5');
  params.append('margin-h', data.marginHeight?.toString() || '5');
  
  if (data.noFrame) params.append('no-frame', 'true');
  if (data.noBackground) params.append('no-bg', 'true');

  const url = `https://github-profile-trophy.vercel.app/?${params.toString()}`;
  
  return `## 🏆 GitHub Trophies\n\n![Trophies](${url})`;
}

function generateContributions(data: any): string {
  if (!data.username) return '';

  const params = new URLSearchParams();
  params.append('user', data.username);
  params.append('theme', data.theme || 'radical');
  
  if (data.hideTitle) params.append('hide_title', 'true');

  const url = `https://github-readme-activity-graph.vercel.app/graph?${params.toString()}`;
  
  return `## 📊 Contribution Graph\n\n![Contributions](${url})`;
}

function generateCertifications(data: any): string {
  if (!data.certifications || data.certifications.length === 0) return '';

  let md = '## 🏅 Certifications & Achievements\n\n';

  data.certifications.forEach((cert: any) => {
    const label = encodeURIComponent(cert.name);
    const message = encodeURIComponent(cert.issuer);
    const color = cert.color || '0066CC';
    const logo = cert.icon || 'certificate';
    
    const badgeUrl = `https://img.shields.io/badge/${label}-${message}-${color}?style=for-the-badge&logo=${logo}&logoColor=white`;
    const badgeMarkdown = `![${cert.name}](${badgeUrl})`;
    
    if (cert.credentialUrl) {
      md += `[${badgeMarkdown}](${cert.credentialUrl})`;
    } else {
      md += badgeMarkdown;
    }
    
    if (cert.date || cert.credentialId || cert.description) {
      md += '\n';
      if (cert.date) md += `  \n📅 ${cert.date}`;
      if (cert.credentialId) md += `  \n🔖 ID: ${cert.credentialId}`;
      if (cert.description) md += `  \n📝 ${cert.description}`;
      md += '\n';
    }
    
    md += '\n';
  });

  return md.trim();
}