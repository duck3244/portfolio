// src/app/layout.tsx
import { Metadata } from 'next';
import { ThemeProvider } from '@/contexts/ThemeContext';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'ML/DL Developer Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}