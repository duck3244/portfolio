// components/layout/Section.tsx
import React, { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  title?: string;
}

const Section: React.FC<SectionProps> = ({ children, className = '', title }) => {
  return (
    <section className={`mb-16 ${className}`}>
      {title && (
        <h2 className="text-2xl md:text-3xl font-bold mb-6 dark:text-white">
          {title}
        </h2>
      )}
      {children}
    </section>
  );
};

export default Section;