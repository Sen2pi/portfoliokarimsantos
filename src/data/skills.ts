import type { Skill } from '../types/index';

export const skills: Skill[] = [
  // Frontend
  { name: 'React', level: 95, category: 'frontend', icon: 'react' },
  { name: 'React Native', level: 90, category: 'mobile', icon: 'react' },
  { name: 'JavaScript', level: 95, category: 'frontend', icon: 'javascript' },
  { name: 'TypeScript', level: 85, category: 'frontend', icon: 'typescript' },
  { name: 'HTML5', level: 95, category: 'frontend', icon: 'html5' },
  { name: 'CSS3', level: 90, category: 'frontend', icon: 'css3' },

  // Backend
  { name: 'Python', level: 90, category: 'backend', icon: 'python' },
  { name: 'Django', level: 85, category: 'backend', icon: 'django' },
  { name: 'Java', level: 80, category: 'backend', icon: 'java' },
  { name: 'Node.js', level: 75, category: 'backend', icon: 'nodejs' },

  // Mobile
  { name: 'Kotlin', level: 80, category: 'mobile', icon: 'kotlin' },
  { name: 'Android', level: 85, category: 'mobile', icon: 'android' },

  // Database
  { name: 'MySQL', level: 85, category: 'database', icon: 'mysql' },
  { name: 'PostgreSQL', level: 80, category: 'database', icon: 'postgresql' },

  // Tools
  { name: 'Linux', level: 90, category: 'tools', icon: 'linux' },
  { name: 'Git', level: 85, category: 'tools', icon: 'git' },
  { name: 'Docker', level: 75, category: 'tools', icon: 'docker' },
  { name: 'NGINX', level: 80, category: 'tools', icon: 'nginx' },
];
