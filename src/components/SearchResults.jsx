import React from 'react';
import ProductCard from '../components/ProductCard';

export default function SearchResults({ results }) {
  if (!results || results.length === 0) {
    return (
      <div className="text-sm text-gray-500 text-center py-10">
        No products found. Try searching for terms like <strong>degreaser</strong>, <strong>lubricant</strong>, or <strong>paint</strong>.
      </div>
    );
  }

  return (
    <div className="py-6 px-4 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {results.map((product) => (
        <ProductCard key={product.id || product.name} {...product} />
      ))}
    </div>
  );
}
