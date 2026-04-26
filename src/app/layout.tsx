import type { Metadata, Viewport } from 'next';
import { ThemeProvider } from '@/contexts/ThemeContext';
import ThemeScript from '@/components/ThemeScript';
import { personalInfo } from '@/data/personalInfo';
import '@/styles/globals.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://duck3244.github.io/portfolio';
const description = `${personalInfo.name}의 포트폴리오 - ML/DL 엔지니어, 데이터 사이언티스트의 프로젝트와 경력 소개`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${personalInfo.name} | ${personalInfo.title}`,
    template: `%s | ${personalInfo.name}`,
  },
  description,
  keywords: [
    personalInfo.name,
    'Portfolio',
    'Data Scientist',
    'Machine Learning',
    'Deep Learning',
    'Backend Developer',
    'Python',
    'TensorFlow',
    'PyTorch',
  ],
  authors: [{ name: personalInfo.name }],
  creator: personalInfo.name,
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: siteUrl,
    siteName: `${personalInfo.name} Portfolio`,
    title: `${personalInfo.name} | ${personalInfo.title}`,
    description,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${personalInfo.name} | ${personalInfo.title}`,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#3b82f6' },
    { media: '(prefers-color-scheme: dark)', color: '#111827' },
  ],
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body suppressHydrationWarning>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
