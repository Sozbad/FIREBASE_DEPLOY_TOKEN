import React from 'react';

export default function Blog() {
  return (
    <div className="min-h-screen bg-white pb-28 flex flex-col items-center justify-center text-center px-6">
      <img
        src="/illustrations/blog-placeholder.svg"
        alt="Blog coming soon"
        className="w-48 mb-6"
      />
      <h1 className="text-2xl font-bold mb-2">Coming Soon</h1>
      <p className="text-gray-600 text-sm">
        Our blog will include guides, tips, and breakdowns of eco-friendly alternatives.
      </p>
    </div>
  );
}
