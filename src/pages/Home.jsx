import React from "react";
import ProductCard from "../components/ProductCard";

const mockProducts = [
  {
    id: "1",
    name: "CleanMax Degreaser",
    imageUrl: "/images/sample1.jpg",
    score: 7.8,
    health: 8,
    environment: 6,
    handling: 9,
    hazards: ["Corrosive", "Health"],
  },
  {
    id: "2",
    name: "GreenSafe Floor Polish",
    imageUrl: "/images/sample2.jpg",
    score: 9.1,
    health: 9,
    environment: 9,
    handling: 9.2,
    hazards: ["Environment"],
  },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-[#e6f4e8]">
      {/* Top nav */}
      <header className="bg-[#2e7d32] text-white py-4 shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <h1 className="text-lg font-bold tracking-wide">EcoRank</h1>
          <nav className="space-x-4 text-sm">
            <a href="/search" className="hover:underline">Search</a>
            <a href="/blog" className="hover:underline">Blog</a>
            <a href="/about" className="hover:underline">About</a>
            <a href="/history" className="hover:underline">History</a>
            <a href="/adminimport" className="hover:underline">Dev Tools</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="text-center py-12 px-6">
        <h2 className="text-3xl font-bold mb-3 text-[#1b5e20]">
          Find Greener and Safer Product Swaps
        </h2>
        <p className="text-gray-700 max-w-xl mx-auto text-sm">
          Search or scan any product to reveal its safety rating, eco impact, and safer swaps.
        </p>
      </section>

      {/* How it works */}
      <section className="bg-white mx-4 rounded-2xl shadow-lg py-8 px-6 max-w-4xl mx-auto">
        <h3 className="text-lg font-semibold mb-6 text-gray-800 text-center">How it works</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-5xl mb-2">🔍</div>
            <p className="text-sm text-gray-700">Search for a product or scan its barcode</p>
          </div>
          <div>
            <div className="text-5xl mb-2">📊</div>
            <p className="text-sm text-gray-700">See detailed safety and hazard breakdown</p>
          </div>
          <div>
            <div className="text-5xl mb-2">♻️</div>
            <p className="text-sm text-gray-700">Explore safer product alternatives instantly</p>
          </div>
        </div>
      </section>

      {/* Popular Products */}
      <section className="py-12 px-4 max-w-6xl mx-auto">
        <h3 className="text-xl font-bold mb-6 text-[#2e7d32]">Popular Products</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {mockProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
