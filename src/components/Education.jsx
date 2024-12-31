// components/Education.jsx
import React from 'react';
import Section from './layout/Section';

const Education = ({ education }) => {
  return (
    <Section title="학력">
      <div className="grid gap-6">
        {education.map((edu, index) => (
          <div key={index} 
               className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md 
                        hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold dark:text-white">
              {edu.school}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">{edu.degree}</p>
            <p className="text-gray-500 dark:text-gray-400">{edu.period}</p>
            <p className="mt-2 dark:text-gray-300">{edu.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Education;