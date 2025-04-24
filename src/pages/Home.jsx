// src/pages/Home.jsx
import React from "react";
import ProductCard from "../components/ProductCard";
import ScoreBreakdownPie from "../components/ScoreBreakdownPie";

const mockProducts = [
  {
    name: "CleanMax Degreaser",
    image: "/images/sample1.jpg",
    health: 8,
    environment: 5,
    handling: 9,
    hazards: ["corrosive", "health_hazard"],
  },
  {
    name: "GreenSafe Floor Polish",
    image: "/images/sample2.jpg",
    health: 9,
    environment: 9,
    handling: 10,
    hazards: ["environment"],
  },
];

const Home = () => {
  return (
    <div className="bg-[#e6f4e8] min-h-screen">
      {/* Top Nav */}
      <header className="bg-[#2e7d32] text-white px-6 py-4 shadow-md sticky top-0 z-50">
        <nav className="flex justify-between items-center max-w-6xl mx-auto">
          <h1 className="text-xl font-bold">EcoRank</h1>
          <ul className="flex space-x-6 text-sm font-medium">
            <li><a href="/search" className="hover:underline">Search</a></li>
            <li><a href="/blog" className="hover:underline">Blog</a></li>
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/history" className="hover:underline">History</a></li>
            <li><a href="/adminimport" className="hover:underline">Dev Upload Tools</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center py-12 px-6">
        <h2 className="text-3xl font-bold mb-3 text-[#1b5e20]">
          Find Greener and Safer Product Swaps
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Scan or search products to see their safety rating and find eco-friendly alternatives
        </p>
      </section>

      {/* How it Works Section */}
      <section className="py-10 bg-[#dcf2e3] text-center px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="text-5xl mb-2">🔍</div>
            <h3 className="text-lg font-semibold">Search Products</h3>
            <p className="text-sm text-gray-600">Search or scan any product to begin</p>
          </div>
          <div>
            <div className="text-5xl mb-2">📊</div>
            <h3 className="text-lg font-semibold">View Rating</h3>
            <p className="text-sm text-gray-600">See health, environmental, and handling safety</p>
          </div>
          <div>
            <div className="text-5xl mb-2">♻️</div>
            <h3 className="text-lg font-semibold">Find Alternatives</h3>
            <p className="text-sm text-gray-600">Get better-rated product suggestions</p>
          </div>
        </div>
      </section>

      {/* Popular Products */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h3 className="text-xl font-bold mb-6 text-[#2e7d32]">Popular Products</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {mockProducts.map((product, idx) => (
            <ProductCard key={idx} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
