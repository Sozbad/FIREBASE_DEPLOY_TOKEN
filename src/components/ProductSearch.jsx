import React, { useEffect, useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase';

export default function ProductSearch() {
  const [queryText, setQueryText] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    if (!queryText.trim()) return setResults([]);

    const q = query(
      collection(db, 'products'),
      where('name', '>=', queryText),
      where('name', '<=', queryText + '\uf8ff')
    );

    const snapshot = await getDocs(q);
    const matches = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setResults(matches);
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
        className="w-full p-2 border rounded mb-4"
        placeholder="Search for a product..."
        value={queryText}
        onChange={(e) => setQueryText(e.target.value)}
      />

      {results.length > 0 ? (
        <ul className="space-y-2">
          {results.map((product) => (
            <li key={product.id} className="p-2 bg-gray-100 rounded">
              {product.name}
            </li>
          ))}
        </ul>
      ) : (
        queryText && <p className="text-sm text-gray-500">No results found.</p>
      )}
    </div>
  );
}
