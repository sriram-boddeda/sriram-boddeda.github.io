"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center flex-col gap-4 text-center p-8">
      <h1 className="text-3xl font-semibold">404 – Page not found</h1>
      <p className="text-gray-600 dark:text-gray-300">
        The page you’re looking for doesn’t exist.
      </p>
      <Link
        href="/"
        className="mt-2 inline-block px-4 py-2 rounded border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-neutral-800"
      >
        Go home
      </Link>
    </main>
  );
}

