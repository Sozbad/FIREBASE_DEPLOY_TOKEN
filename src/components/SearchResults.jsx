import React from 'react';
import ProductCard from './ProductCard';

export default function SearchResults({ results }) {
  if (!results || results.length === 0) {
    return (
      <div className="text-sm text-gray-500 text-center py-10">
        No products found. Try searching for things like <strong>degreaser</strong>, <strong>lubricant</strong>, or <strong>paint</strong>.
      </div>
    );
  }

  return (
    <div className="px-4 pt-2 pb-28 space-y-4">
      {results.map((product, i) => (
        <ProductCard key={i} product={product} />
      ))}
    </div>
  );
}
