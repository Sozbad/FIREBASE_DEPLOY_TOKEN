import React from 'react';
import { Link } from 'react-router-dom';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[#e6f4e8] text-gray-800 font-sans">
      <header className="bg-[#2e7d32] text-white py-4 shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          {/* ✅ Clickable logo */}
          <Link to="/" className="text-lg font-bold tracking-wide hover:underline">
            EcoRank
          </Link>

          <nav className="space-x-4 text-sm">
            <Link to="/blog" className="hover:underline">Blog</Link>
            <Link to="/about" className="hover:underline">About</Link>
            <Link to="/history" className="hover:underline">History</Link>
            <Link to="/adminimport" className="hover:underline">Dev Tools</Link>
          </nav>
        </div>
      </header>
      <main className="max-w-5xl mx-auto px-4 py-10">{children}</main>
    </div>
  );
}
