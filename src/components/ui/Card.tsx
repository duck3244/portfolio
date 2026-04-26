import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hoverable?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className = '', hoverable = false }) => {
  return (
    <div
      className={[
        'bg-white dark:bg-gray-800 rounded-lg shadow-md p-6',
        hoverable ? 'transition-shadow hover:shadow-lg' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </div>
  );
};

export default Card;
