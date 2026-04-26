import React from 'react';

interface FooterProps {
  name: string;
}

const Footer: React.FC<FooterProps> = ({ name }) => {
  return (
    <footer className="bg-gray-800 dark:bg-gray-900 text-white py-8 mt-12">
      <div className="container mx-auto px-4 text-center">
        <p>
          © {new Date().getFullYear()} {name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
