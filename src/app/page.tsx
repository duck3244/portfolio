// src/app/page.tsx
'use client';

import React from 'react';
import Header from '@/components/Header';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Footer from '@/components/Footer';
import Container from '@/components/layout/Container';
import Projects from '@/components/Projects';
import Certifications from '@/components/Certifications';

import { personalInfo } from '@/data/personalInfo';
import { education } from '@/data/education';
import { skills } from '@/data/skills';
import { experience } from '@/data/experience';
import { projects } from '@/data/projects';
import { certifications } from '@/data/certifications';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <Header personalInfo={personalInfo} />
      
      <main className="py-12">
        <Container>
          <Education education={education} />
          <Skills skills={skills} />
          <Experience experience={experience} />
          <Projects projects={projects} />
          <Certifications certifications={certifications} />
        </Container>
      </main>

      <Footer name={personalInfo.name} />
    </div>
  );
}