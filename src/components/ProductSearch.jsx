import React, { useEffect, useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase';
import ProductCard from './ProductCard';

export default function ProductSearch() {
  const [queryText, setQueryText] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!queryText.trim()) return setResults([]);

    setLoading(true);

    const q = query(
      collection(db, 'products'),
      where('name', '>=', queryText),
      where('name', '<=', queryText + '\uf8ff')
    );

    const snapshot = await getDocs(q);
    const matches = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setResults(matches);
    setLoading(false);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      handleSearch();
    }, 300);
    return () => clearTimeout(timeout);
  }, [queryText]);

  return (
    <div className="px-4 pt-6 pb-28">
      <div className="relative mb-4">
        <input
          type="text"
          className="w-full px-4 py-3 text-sm border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 shadow-sm"
          placeholder="Search for a product…"
          value={queryText}
          onChange={(e) => setQueryText(e.target.value)}
        />
        {loading && (
          <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
            <svg className="animate-spin h-5 w-5 text-green-500" viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
          </div>
        )}
      </div>

      {!loading && results.length === 0 && queryText && (
        <div className="text-center text-sm text-gray-500 mt-8">
          <p>😕 No results found for "<strong>{queryText}</strong>"</p>
        </div>
      )}

      <div className="space-y-4">
        {results.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
