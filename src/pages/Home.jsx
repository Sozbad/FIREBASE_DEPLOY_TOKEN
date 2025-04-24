import React from "react";
import ProductCard from "/components/ProductCard";
import ScoreBreakdownPie from "/components/ScoreBreakdownPie";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#e6f4e8]">
      {/* Top nav */}
      <header className="bg-[#2e7d32] text-white p-4 sticky top-0 z-50 shadow-md">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <h1 className="text-lg font-bold tracking-wide">EcoRank</h1>
          <nav className="space-x-4 text-sm">
            <a href="/search" className="hover:underline">Search</a>
            <a href="/blog" className="hover:underline">Blog</a>
            <a href="/about" className="hover:underline">About</a>
            <a href="/history" className="hover:underline">History</a>
            <a href="/admin" className="hover:underline">Dev Upload Tools</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="text-center py-10 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-[#2e7d32] mb-4">
          Find greener and safer product swaps
        </h2>
        <p className="text-sm text-gray-700 max-w-xl mx-auto">
          Scan or search for a product to see its environmental impact, health hazards, and safer alternatives.
        </p>
      </section>

      {/* How it works */}
      <section className="bg-white rounded-xl shadow-md mx-4 p-6 max-w-3xl mx-auto">
        <h3 className="text-lg font-semibold mb-4 text-gray-800">How it works</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-4xl mb-2">🔍</div>
            <p className="text-sm">Search for a product or scan its barcode</p>
          </div>
          <div>
            <div className="text-4xl mb-2">🧪</div>
            <p className="text-sm">View safety rating and hazard breakdown</p>
          </div>
          <div>
            <div className="text-4xl mb-2">♻️</div>
            <p className="text-sm">Get better alternatives with higher scores</p>
          </div>
        </div>
      </section>

      {/* Popular products (sample cards) */}
      <section className="mt-10 px-4 max-w-5xl mx-auto">
        <h3 className="text-lg font-semibold mb-4 text-gray-800">Popular Products</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <ProductCard
            name="CleanMax Multi-Surface"
            imageUrl="/images/sample1.jpg"
            score={7.8}
            health={8}
            environment={6}
            handling={9}
            hazards={["GHS07", "GHS09"]}
          />
          <ProductCard
            name="UltraShine Glass Cleaner"
            imageUrl="/images/sample2.jpg"
            score={5.2}
            health={4}
            environment={5}
            handling={6.5}
            hazards={["GHS05"]}
          />
          <ProductCard
            name="EcoWipe Floor Wash"
            imageUrl="/images/sample3.jpg"
            score={9.1}
            health={9}
            environment={9}
            handling={9.5}
            hazards={[]}
          />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
