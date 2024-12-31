// src/components/Certifications.tsx
'use client';

import React from 'react';
import { Award, FileText, Lightbulb } from 'lucide-react';
import Section from './layout/Section';
import { Certification } from '@/data/certifications';

interface CertificationsProps {
    certifications?: Certification[];
  }

  const Certifications: React.FC<CertificationsProps> = ({ certifications = [] }) => {
    const getIcon = (type: Certification['type']) => {
      switch (type) {
        case 'certificate':
          return <Award className="w-5 h-5" />;
        case 'copyright':
          return <FileText className="w-5 h-5" />;
        case 'patent':
          return <Lightbulb className="w-5 h-5" />;
      }
    };

  const getTypeLabel = (type: Certification['type']) => {
    switch (type) {
      case 'certificate':
        return '자격증';
      case 'copyright':
        return '저작권';
      case 'patent':
        return '특허';
    }
  };

  return (
    <Section title="특허 및 저작권, 자격증">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certifications?.map((cert) => ( 
          <div 
            key={cert.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 
                     hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start gap-4">
              <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                {getIcon(cert.type)}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-sm px-2 py-1 bg-gray-100 dark:bg-gray-700 
                                 rounded-full text-gray-600 dark:text-gray-300">
                    {getTypeLabel(cert.type)}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400 text-sm">
                    {cert.date}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-2">
                  {cert.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mt-1">
                  {cert.issuer}
                </p>
                {cert.number && (
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                    등록번호: {cert.number}
                  </p>
                )}
                {cert.status && (
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                    상태: {cert.status}
                  </p>
                )}
                {cert.description && (
                  <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm">
                    {cert.description}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Certifications;
