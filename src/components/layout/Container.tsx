// components/layout/Container.tsx
import React, { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className = '' }) => {
  return (
    <div className={`container mx-auto px-4 md:px-6 ${className}`}>
      {children}
    </div>
  );
};

export default Container;