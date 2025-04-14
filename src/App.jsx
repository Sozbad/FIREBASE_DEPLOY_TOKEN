import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pagimport React, { useEffect, useState } from 'react';
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
    <div className="min-h-screen pb-28 bg-white">
      <div className="px-6 pt-8 pb-4 bg-gradient-to-br from-yellow-100 to-white rounded-b-3xl shadow-sm">
        <h1 className="text-2xl font-bold text-gray-900">Search History</h1>
        <p className="text-sm text-gray-600 mt-1">Your recently searched products</p>
      </div>

      <div className="px-6 py-6">
        {items.length === 0 ? (
          <p className="text-sm text-gray-600">No recent searches found.</p>
        ) : (
          <>
            <div className="space-y-3">
              {items.map((term, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between bg-gray-50 border px-4 py-3 rounded-xl shadow-sm"
                >
                  <div className="flex items-center gap-2 text-sm text-gray-800">
                    <Clock className="w-4 h-4 text-gray-500" />
                    {term}
                  </div>
                  <button
                    onClick={() => window.location.href = `/?q=${encodeURIComponent(term)}`}
                    className="text-xs text-blue-600 font-medium hover:underline"
                  >
                    Search again
                  </button>
                </div>
              ))}
            </div>

            <button
              onClick={clearHistory}
              className="mt-6 text-sm text-red-600 hover:underline flex items-center gap-1"
            >
              <Trash2 className="w-4 h-4" />
              Clear all history
            </button>
          </>
        )}
      </div>
    </div>
  );
}
es/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import AdminImport from './pages/AdminImport';
import NavTabs from './components/NavTabs';

export default function App() {
  return (
    <Router>
      <NavTabs />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/admin-import' element={<AdminImport />} />
      </Routes>
    </Router>
  );
}
