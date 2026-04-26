import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
      <div className="max-w-md text-center">
        <p className="text-blue-500 dark:text-blue-400 font-semibold">404</p>
        <h1 className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">
          페이지를 찾을 수 없습니다
        </h1>
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
        </p>
        <Link
          href="/"
          className="mt-8 inline-block px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
        >
          홈으로 돌아가기
        </Link>
      </div>
    </main>
  );
}
