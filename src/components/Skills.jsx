// components/Skills.jsx
import React from 'react';
import Section from './layout/Section';

const Skills = ({ skills }) => {
  return (
    <Section title="보유 스킬">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} 
               className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 capitalize dark:text-white">
              {category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {items.map((item, index) => (
                <span key={index} 
                      className="bg-blue-100 dark:bg-blue-900 text-blue-800 
                               dark:text-blue-100 px-3 py-1 rounded text-sm">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;