import React from 'react';
import ProductSearch from '../components/ProductSearch';

export default function Home() {
  return (
    <div className="min-h-screen pb-28 bg-white text-gray-900">
      <header className="px-4 pt-6 pb-3">
        <h1 className="text-2xl font-bold">Search</h1>
      </header>

      <ProductSearch />
    </div>
  );
}
