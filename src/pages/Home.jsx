import React from 'react';
import ProductSearch from '../components/ProductSearch';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f2fdf5]">
      {/* Top Menu Bar */}
      <div className="w-full bg-white shadow-sm px-4 py-3 sticky top-0 z-10">
        <div className="text-lg font-semibold text-gray-800">EcoRank</div>
      </div>

      {/* Page Content */}
      <div className="max-w-3xl mx-auto px-4 py-6">
        <h1 className="text-xl font-bold mb-4 text-gray-800">Search Products</h1>
        <ProductSearch />
      </div>
    </div>
  );
}
