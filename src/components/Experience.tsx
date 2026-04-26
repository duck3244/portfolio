import React from 'react';
import Section from './layout/Section';
import Card from './ui/Card';
import type { ExperienceItem } from '@/data/experience';

interface ExperienceProps {
  experience: ExperienceItem[];
}

const Experience: React.FC<ExperienceProps> = ({ experience }) => {
  return (
    <Section title="회사 경력">
      <div className="grid gap-6">
        {experience.map((exp) => (
          <Card key={`${exp.company}-${exp.period}`}>
            <h3 className="text-xl font-semibold dark:text-white">{exp.company}</h3>
            <p className="text-gray-600 dark:text-gray-300">{exp.position}</p>
            <p className="text-gray-500 dark:text-gray-400">{exp.period}</p>
            <ul className="mt-4 space-y-2">
              {exp.achievements.map((achievement) => (
                <li
                  key={achievement}
                  className="flex items-start text-gray-700 dark:text-gray-300"
                >
                  <span className="mr-2" aria-hidden="true">
                    •
                  </span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default Experience;
