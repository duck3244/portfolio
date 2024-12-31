// components/Header.jsx
import React from 'react';
import { Github, Linkedin, Mail, Moon, Sun } from 'lucide-react';
import Container from './layout/Container';
import { useTheme } from '../contexts/ThemeContext';

const Header = ({ personalInfo }) => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <header className="bg-gradient-to-r from-blue-500 to-blue-400 dark:from-gray-800 dark:to-gray-900 text-white py-12 md:py-20">
      <Container>
        <div className="flex justify-end mb-4">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-700/20"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
          </button>
        </div>
        
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {personalInfo.name}
          </h1>
          <h2 className="text-xl md:text-2xl mb-6 text-blue-100 dark:text-gray-300">
            {personalInfo.title}
          </h2>
          <div className="flex flex-col md:flex-row gap-4">
            <a href={`mailto:${personalInfo.email}`} 
               className="flex items-center hover:text-blue-200 transition-colors">
              <Mail className="w-5 h-5 mr-2" />
              {personalInfo.email}
            </a>
            {/* <a href={personalInfo.github} 
               className="flex items-center hover:text-blue-200 transition-colors">
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </a>
            <a href={personalInfo.linkedin} 
               className="flex items-center hover:text-blue-200 transition-colors">
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </a> */}
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;