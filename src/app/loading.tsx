import React from 'react';

export default function Loading() {
  return (
    <main
      className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900"
      aria-busy="true"
      aria-live="polite"
    >
      <div
        className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"
        role="status"
        aria-label="로딩 중"
      />
    </main>
  );
}
