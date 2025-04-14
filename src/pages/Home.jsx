import React, { useEffect, useState } from 'react';
import ProductSearch from '../components/ProductSearch';
import { db } from '../firebase';
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore';

export default function Home() {
  const [highScorers, setHighScorers] = useState([]);
  const [recent, setRecent] = useState([]);

  useEffect(() => {
    // Get products with score ≥9
    const fetchTopProducts = async () => {
      const q = query(collection(db, 'products'), orderBy('score', 'desc'), limit(4));
      const snapshot = await getDocs(q);
      const results = snapshot.docs
        .map((doc) => doc.data())
        .filter((p) => p.score >= 9);
      setHighScorers(results);
    };

    // Load from localStorage (client side)
    const recentItems = JSON.parse(localStorage.getItem('recentSearches')) || [];
    setRecent(recentItems);

    fetchTopProducts();
  }, []);

  return (
    <div className="min-h-screen bg-white pb-28">
      {/* Hero Header */}
      <div className="bg-gradient-to-br from-green-100 to-white px-6 pt-8 pb-6 rounded-b-3xl shadow-sm">
        <h1 className="text-2xl font-bold text-gray-900">EcoRank</h1>
        <p className="text-sm text-gray-600 mt-1">Discover safer, greener alternatives in seconds.</p>
      </div>

      {/* Search */}
      <div className="px-6 py-4">
        <ProductSearch />
      </div>

      {/* Recently Viewed */}
      {recent.length > 0 && (
        <div className="px-6 py-4">
          <h2 className="text-lg font-bold mb-2">Recently Viewed</h2>
          <div className="space-y-2">
            {recent.map((item, i) => (
              <div key={i} className="text-sm text-gray-700 bg-gray-100 p-3 rounded-lg shadow-sm">
                {item}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* High Scoring Products */}
      {highScorers.length > 0 && (
        <div className="px-6 py-4">
          <h2 className="text-lg font-bold mb-2">Top Rated Products</h2>
          <div className="grid grid-cols-1 gap-4">
            {highScorers.map((product, i) => (
              <div key={i} className="border p-3 rounded-xl bg-green-50 shadow-sm">
                <p className="text-sm font-medium">{product.name}</p>
                <p className="text-xs text-gray-600">{product.function}</p>
                <span className="inline-block mt-2 text-xs bg-green-600 text-white px-2 py-0.5 rounded-full">
                  {product.score}/10
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Eco Tips */}
      <div className="px-6 py-8 bg-gray-50 mt-6 border-t">
        <h2 className="text-lg font-bold mb-2">Eco Tip 💡</h2>
        <p className="text-sm text-gray-600">
          Always check for products with <strong>low hazard icons</strong> and look for certifications like <em>SaferChoice</em>.
        </p>
      </div>
    </div>
  );
}
