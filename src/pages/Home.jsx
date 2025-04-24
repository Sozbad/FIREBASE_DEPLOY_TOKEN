import React, { useEffect, useState } from 'react';
import ProductSearch from '../components/ProductSearch';
import ProductCard from '../components/ProductCard';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    import('../data/mockProducts.json')
      .then((module) => setProducts(module.default))
      .catch((err) => console.error('❌ Failed to load mockProducts.json', err));
  }, []);

  return (
    <div className="min-h-screen bg-[#f2fdf5] text-gray-800">
      {/* Top Navigation Bar */}
      <header className="bg-[#d4ecd7] py-3 shadow-sm sticky top-0 z-20">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          <h1 className="font-bold text-lg">EcoRank</h1>
          <nav className="flex gap-4 text-sm font-medium">
            <a href="/" className="hover:underline">About</a>
            <a href="/" className="hover:underline">Blog</a>
            <a href="/" className="hover:underline">History</a>
            <a href="/" className="hover:underline">Admin upload</a>
          </nav>
        </div>
      </header>

      {/* How it works panel */}
      <div className="max-w-xl mx-auto text-center bg-white shadow-md rounded-xl p-6 mt-6">
        <h2 className="text-xl font-bold mb-4">How it works</h2>
        <div className="grid grid-cols-3 gap-4 text-sm">
          <div>
            <div className="text-2xl mb-2">🔍</div>
            <p>Search for a product</p>
          </div>
          <div>
            <div className="text-2xl mb-2">🅰️</div>
            <p>View its rating</p>
          </div>
          <div>
            <div className="text-2xl mb-2">➡️</div>
            <p>Find better alternatives</p>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="max-w-2xl mx-auto px-4 mt-8">
        <ProductSearch />
      </div>

      {/* Product Grid */}
      <div className="max-w-6xl mx-auto px-4 mt-12">
        <h3 className="text-lg font-semibold mb-4">Popular:</h3>
        <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
          {products.map((product, i) => (
            <ProductCard key={i} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
