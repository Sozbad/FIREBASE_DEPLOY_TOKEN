import React, { useEffect, useState } from 'react';
import ProductSearch from '../components/ProductSearch';
import ProductCard from '../components/ProductCard';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const querySnapshot = await getDocs(collection(db, 'products'));
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push({ id: doc.id, ...doc.data() });
      });
      setProducts(items);
    };
    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-[#f2fdf5] text-gray-800">
      {/* Top Navigation Bar */}
      <header className="bg-[#c6e5cc] py-3 shadow-sm sticky top-0 z-20">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          <h1 className="font-bold text-lg">EcoRank</h1>
          <nav className="flex gap-4 text-sm font-medium">
            <a href="/" className="hover:underline">About</a>
            <a href="/" className="hover:underline">Blog</a>
            <a href="/" className="hover:underline">History</a>
            <a href="/" className="hover:underline">Admin Upload</a>
            <a href="/" className="hover:underline">Dev Upload Tools</a>
          </nav>
        </div>
      </header>

      {/* Intro Panel */}
      <div className="max-w-xl mx-auto text-center bg-[#f2fdf5] mt-6 px-4">
        <h2 className="text-xl font-bold mb-4">Find greener and safer product swaps</h2>
        <div className="grid grid-cols-3 gap-4 text-sm">
          <div className="flex flex-col items-center">
            <img src="/icons/search.svg" alt="Search" className="w-8 h-8 mb-1" />
            <p>Scan or search for a product</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/icons/chart.svg" alt="Score" className="w-8 h-8 mb-1" />
            <p>See its hazard rating</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/icons/swap.svg" alt="Swap" className="w-8 h-8 mb-1" />
            <p>Get safer alternatives</p>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="max-w-2xl mx-auto px-4 mt-10">
        <ProductSearch />
      </div>

      {/* Popular Products Grid */}
      <div className="max-w-6xl mx-auto px-4 mt-12">
        <h3 className="text-lg font-semibold mb-4">Popular:</h3>
        <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
