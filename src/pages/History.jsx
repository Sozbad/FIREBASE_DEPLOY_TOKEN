import React, { useEffect, useState } from 'react';
import { Clock, Trash2 } from 'lucide-react';

export default function History() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('recentSearches')) || [];
    setItems(saved);
  }, []);

  const clearHistory = () => {
    localStorage.removeItem('recentSearches');
    setItems([]);
  };

  return (
    <div className="min-h-screen bg-white px-6 py-10 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold text-[#2e7d32] mb-4">Search History</h1>
      <p className="text-sm text-gray-600 mb-6">Your recently searched product terms.</p>

      {items.length === 0 ? (
        <p className="text-sm text-gray-500">No recent searches found.</p>
      ) : (
        <div className="space-y-4">
          {items.map((term, i) => (
            <div key={i} className="flex justify-between items-center bg-gray-50 border px-4 py-3 rounded-xl shadow-sm">
              <div className="flex items-center gap-2 text-sm text-gray-800">
                <Clock className="w-4 h-4 text-gray-500" />
                {term}
              </div>
              <button
                onClick={() => (window.location.href = `/?q=${encodeURIComponent(term)}`)}
                className="text-xs text-blue-600 hover:underline"
              >
                Search again
              </button>
            </div>
          ))}
          <button
            onClick={clearHistory}
            className="text-sm text-red-600 hover:underline mt-6 flex items-center gap-1"
          >
            <Trash2 className="w-4 h-4" />
            Clear all history
          </button>
        </div>
      )}
    </div>
  );
}
