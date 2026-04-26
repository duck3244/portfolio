'use client';

import React, { useEffect } from 'react';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
      <div className="max-w-md text-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          문제가 발생했습니다
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          페이지를 표시하는 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.
        </p>
        <button
          type="button"
          onClick={reset}
          className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
        >
          다시 시도
        </button>
      </div>
    </main>
  );
}
