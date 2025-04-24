import React from 'react';
import Layout from '../components/Layout';

export default function About() {
  return (
    <Layout>
      <h1 className="text-2xl font-bold text-[#2e7d32] mb-4">About EcoRank</h1>
      <p className="text-sm text-gray-700 leading-relaxed mb-4">
        EcoRank helps you make smarter, greener choices by showing the safety and environmental impact of everyday products.
      </p>
      <p className="text-sm text-gray-700">
        We analyze real Safety Data Sheets (SDS) to break down health hazards, eco concerns, and proper disposal. All products are scored for transparency and comparison.
      </p>
    </Layout>
  );
}
