import React from 'react';
import { Github, ExternalLink, FileText, Newspaper } from 'lucide-react';
import Section from './layout/Section';
import Card from './ui/Card';
import { Project } from '@/data/projects';

interface ProjectsProps {
  projects: Project[];
}

interface ProjectLinkProps {
  href: string;
  label: string;
  icon: React.ReactNode;
}

const linkClass =
  'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white';

const ProjectLink: React.FC<ProjectLinkProps> = ({ href, label, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={linkClass}
    aria-label={label}
  >
    {icon}
  </a>
);

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <Section title="프로젝트 경력">
      <div className="space-y-10">
        {projects.map((project) => (
          <Card key={project.id} hoverable>
            <div className="flex justify-between items-start flex-wrap gap-4">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mt-1">{project.period}</p>
              </div>
              <div className="flex gap-3">
                {project.links?.github && (
                  <ProjectLink
                    href={project.links.github}
                    label={`${project.title} GitHub 저장소`}
                    icon={<Github className="w-5 h-5" aria-hidden="true" />}
                  />
                )}
                {project.links?.demo && (
                  <ProjectLink
                    href={project.links.demo}
                    label={`${project.title} 데모`}
                    icon={<ExternalLink className="w-5 h-5" aria-hidden="true" />}
                  />
                )}
                {project.links?.paper && (
                  <ProjectLink
                    href={project.links.paper}
                    label={`${project.title} 논문`}
                    icon={<FileText className="w-5 h-5" aria-hidden="true" />}
                  />
                )}
                {project.links?.news && (
                  <ProjectLink
                    href={project.links.news}
                    label={`${project.title} 관련 기사`}
                    icon={<Newspaper className="w-5 h-5" aria-hidden="true" />}
                  />
                )}
              </div>
            </div>

            <div className="mt-4">
              <p className="text-gray-700 dark:text-gray-300">{project.description}</p>
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
                {project.tasks.map((task) => (
                  <li key={task}>{task}</li>
                ))}
              </ul>
            </div>

            <div className="mt-4">
              <h4 className="font-semibold text-gray-900 dark:text-white">성과</h4>
              <ul className="mt-2 list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                {project.achievements.map((achievement) => (
                  <li key={achievement}>{achievement}</li>
                ))}
              </ul>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
