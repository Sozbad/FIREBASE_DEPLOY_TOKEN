import React from 'react';
import ProductSearch from '../components/ProductSearch';

export default function Home() {
  return (
    <div className="p-4 pt-6 pb-16">
      <h1 className="text-xl font-semibold mb-4">Search Products</h1>
      <ProductSearch />
    </div>
  );
}
