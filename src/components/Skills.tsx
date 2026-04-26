import React from 'react';
import Section from './layout/Section';
import Card from './ui/Card';
import type { Skills as SkillsData } from '@/data/skills';

interface SkillsProps {
  skills: SkillsData;
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <Section title="보유 스킬">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.entries(skills).map(([category, items]) => (
          <Card key={category}>
            <h3 className="text-xl font-semibold mb-4 capitalize dark:text-white">
              {category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {items.map((item) => (
                <span
                  key={item}
                  className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 px-3 py-1 rounded text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
