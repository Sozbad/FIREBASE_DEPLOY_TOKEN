import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import SearchResults from './SearchResults';

export default function ProductSearch() {
  const [query, setQuery] = useState('');
  const [filtered, setFiltered] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const snapshot = await getDocs(collection(db, 'products'));
      const data = snapshot.docs.map((doc) => doc.data());
      setAllProducts(data);
      setLoading(false);
    };

    fetchProducts();
  }, []);

  const handleSearch = (e) => {
    const q = e.target.value.toLowerCase();
    setQuery(q);

    if (q.trim() === '') {
      setFiltered([]);
      return;
    }

    const results = allProducts.filter((item) =>
      item.name.toLowerCase().includes(q)
    );

    setFiltered(results);

    // Save recent search
    const saved = JSON.parse(localStorage.getItem('recentSearches')) || [];
    const updated = [q, ...saved.filter((s) => s !== q)].slice(0, 10);
    localStorage.setItem('recentSearches', JSON.stringify(updated));
  };

  return (
    <div className="space-y-4">
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search for a product..."
        className="w-full px-4 py-3 border rounded-xl shadow-sm text-sm bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
      />

      {loading ? (
        <p className="text-center text-sm text-gray-500 py-10">Loading products...</p>
      ) : (
        <SearchResults results={filtered} />
      )}
    </div>
  );
}
