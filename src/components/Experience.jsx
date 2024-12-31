// components/Experience.jsx
import React from 'react';
import Section from './layout/Section';

const Experience = ({ experience }) => {
  return (
    <Section title="회사 경력">
      <div className="grid gap-6">
        {experience.map((exp, index) => (
          <div key={index} 
               className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold dark:text-white">
              {exp.company}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">{exp.position}</p>
            <p className="text-gray-500 dark:text-gray-400">{exp.period}</p>
            <ul className="mt-4 space-y-2">
              {exp.achievements.map((achievement, i) => (
                <li key={i} 
                    className="flex items-start text-gray-700 dark:text-gray-300">
                  <span className="mr-2">•</span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;