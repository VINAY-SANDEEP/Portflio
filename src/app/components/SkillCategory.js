'use client';

import { FaCode } from 'react-icons/fa';
import { skillIcons } from './SkillIcons';

const iconColors = {
  'HTML5': 'text-[#E34F26]',
  'CSS3': 'text-[#1572B6]',
  'JavaScript': 'text-[#F7DF1E]',
  'Java': 'text-[#007396]',
  'ReactJS': 'text-[#61DAFB]',
  'Next.js': 'text-[#000000]',
  'Tailwind CSS': 'text-[#06B6D4]',
  'ExpressJS': 'text-[#000000]',
  'Node.js': 'text-[#339933]',
  'MongoDB (NoSQL)': 'text-[#47A248]',
  'Oracle SQL': 'text-[#F80000]',
  'Git': 'text-[#F05032]',
  'GitHub': 'text-[#181717]',
  'VS Code': 'text-[#007ACC]',
  'IntelliJ IDEA': 'text-[#000000]'
};

export default function SkillCategory({ title, skills }) {
  return (
    <div className="bg-tertiary p-6 rounded-lg">
      <div className="flex items-center gap-3 mb-4">
        <h3 className="subheading">{title}</h3>
      </div>
      <ul className="space-y-2">
        {skills.map((skill, index) => {
          const Icon = skillIcons[skill];
          const colorClass = iconColors[skill] || 'text-secondary';
          return (
            <li key={index} className="text-textSecondary flex items-center gap-2">
              {Icon ? <Icon className={colorClass} /> : <FaCode className="text-secondary" />}
              {skill}
            </li>
          );
        })}
      </ul>
    </div>
  );
} 