// src/components/Projects.tsx
'use client';

import React from 'react';
import { Github, ExternalLink, FileText } from 'lucide-react';
import Section from './layout/Section';
import { Project } from '@/data/projects';

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <Section title="프로젝트 경력">
      <div className="space-y-10">
        {projects.map((project) => (
          <div 
            key={project.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-all hover:shadow-lg"
          >
            <div className="flex justify-between items-start flex-wrap gap-4">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mt-1">
                  {project.period}
                </p>
              </div>
              {/* 링크 부분 수정 */}
              <div className="flex gap-3">
                {project.links?.github && (
                  <a 
                    href={project.links.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                )}
                {project.links?.demo && (
                  <a 
                    href={project.links.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                )}
                {project.links?.paper && (
                  <a 
                    href={project.links.paper} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  >
                    <FileText className="w-5 h-5" />
                  </a>
                )}
                {project.links?.news && (
                  <a 
                    href={project.links.news} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  >
                    <FileText className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>

            {/* 나머지 부분은 동일 */}
            <div className="mt-4">
              <p className="text-gray-700 dark:text-gray-300">
                {project.description}
              </p>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                <span className="font-semibold">역할:</span> {project.role}
              </p>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                <span className="font-semibold">소속:</span> {project.company}
              </p>
            </div>

            <div className="mt-4">
              <h4 className="font-semibold text-gray-900 dark:text-white">주요 업무</h4>
              <ul className="mt-2 list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                {project.tasks.map((task, index) => (
                  <li key={index}>{task}</li>
                ))}
              </ul>
            </div>

            <div className="mt-4">
              <h4 className="font-semibold text-gray-900 dark:text-white">성과</h4>
              <ul className="mt-2 list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                {project.achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;