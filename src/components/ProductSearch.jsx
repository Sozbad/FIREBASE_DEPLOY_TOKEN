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
    <div>
      <input
        type="text"
        className="w-full p-3 border border-gray-300 rounded-lg mb-4"
        placeholder="Search for a product..."
        value={queryText}
        onChange={(e) => setQueryText(e.target.value)}
      />

      {loading && <p className="text-sm text-gray-500">Loading results...</p>}

      {!loading && results.length === 0 && queryText && (
        <p className="text-sm text-gray-500">No results found.</p>
      )}

      <div className="space-y-4">
        {results.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
