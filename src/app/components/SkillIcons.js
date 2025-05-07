'use client';

import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaJava,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaServer,
  FaGitAlt,
  FaGithubAlt,
  FaVscode,
  FaIntellij
} from 'react-icons/fa';
import { SiNextdotjs } from 'react-icons/si';

const skillIcons = {
  'HTML5': FaHtml5,
  'CSS3': FaCss3Alt,
  'JavaScript': FaJs,
  'Java': FaJava,
  'ReactJS': FaReact,
  'Next.js': SiNextdotjs,
  'Tailwind CSS': FaCss3Alt,
  'ExpressJS': FaServer,
  'Node.js': FaNodeJs,
  'MongoDB (NoSQL)': FaDatabase,
  'Oracle SQL': FaDatabase,
  'Git': FaGitAlt,
  'GitHub': FaGithubAlt,
  'VS Code': FaVscode,
  'IntelliJ IDEA': FaIntellij
};

export { skillIcons }; 