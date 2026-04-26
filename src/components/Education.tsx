import React from 'react';
import Section from './layout/Section';
import Card from './ui/Card';
import type { EducationItem } from '@/data/education';

interface EducationProps {
  education: EducationItem[];
}

const Education: React.FC<EducationProps> = ({ education }) => {
  return (
    <Section title="학력">
      <div className="grid gap-6">
        {education.map((edu) => (
          <Card key={`${edu.school}-${edu.period}`} hoverable>
            <h3 className="text-xl font-semibold dark:text-white">{edu.school}</h3>
            <p className="text-gray-600 dark:text-gray-300">{edu.degree}</p>
            <p className="text-gray-500 dark:text-gray-400">{edu.period}</p>
            {edu.description && (
              <p className="mt-2 whitespace-pre-line dark:text-gray-300">{edu.description}</p>
            )}
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default Education;
