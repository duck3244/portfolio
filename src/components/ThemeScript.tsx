import React from 'react';

const themeScript = `(() => {
  try {
    const stored = window.localStorage.getItem('darkMode');
    const prefers = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = stored === null ? prefers : stored === 'true';
    if (isDark) document.documentElement.classList.add('dark');
  } catch (_) {}
})();`;

const ThemeScript: React.FC = () => (
  <script dangerouslySetInnerHTML={{ __html: themeScript }} />
);

export default ThemeScript;
