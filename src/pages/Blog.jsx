import React from 'react';
import { Leaf, AlertTriangle, Search, CheckCircle } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen pb-28 bg-white text-gray-900">
      {/* Header */}
      <div className="px-6 pt-8 pb-4 bg-gradient-to-br from-green-100 to-green-50 rounded-b-3xl shadow-sm">
        <h1 className="text-2xl font-bold">About EcoRank</h1>
        <p className="text-sm text-gray-700 mt-1">
          Learn how we score, rank and recommend safer products for people and the planet.
        </p>
      </div>

      {/* How It Works */}
      <section className="px-6 py-6 space-y-6">
        <div className="flex items-start gap-4">
          <Search className="text-green-600 w-6 h-6 mt-1" />
          <div>
            <h2 className="font-semibold text-base">1. Product Search</h2>
            <p className="text-sm text-gray-600">
              Scan or search for any chemical-based product — cleaners, lubricants, sealants and more.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <AlertTriangle className="text-yellow-500 w-6 h-6 mt-1" />
          <div>
            <h2 className="font-semibold text-base">2. Hazard Analysis</h2>
            <p className="text-sm text-gray-600">
              We analyze Safety Data Sheets (SDS) to identify health, environmental, and handling risks.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <CheckCircle className="text-green-700 w-6 h-6 mt-1" />
          <div>
            <h2 className="font-semibold text-base">3. EcoRank Score</h2>
            <p className="text-sm text-gray-600">
              Products are scored out of 10 based on total impact. The higher the score, the safer it is.
            </p>
          </div>
        </div>
      </section>

      {/* Scoring System */}
      <section className="px-6 py-6 bg-gray-50 border-t space-y-4">
        <h2 className="text-lg font-bold">How We Score Products</h2>
        <p className="text-sm text-gray-700">
          The EcoRank score is based on:
        </p>
        <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
          <li>⚠️ GHS hazard classifications</li>
          <li>🧬 Health risks (e.g. carcinogenicity, toxicity)</li>
          <li>🌿 Environmental impact (e.g. aquatic toxicity)</li>
          <li>🧺 Handling & disposal safety</li>
        </ul>
        <p className="text-xs text-gray-500">
          Products with external certifications (like <strong>EcoLabel</strong> or <strong>SaferChoice</strong>) may also be highlighted.
        </p>
      </section>

      {/* Mission */}
      <section className="px-6 py-6 space-y-3">
        <h2 className="text-lg font-bold">Our Mission</h2>
        <p className="text-sm text-gray-700">
          EcoRank was built to help households, professionals, and businesses choose safer, more responsible products — without greenwashing or corporate influence.
        </p>
        <p className="text-xs text-gray-500">
          No affiliate links influence score. Green always wins.
        </p>
      </section>
    </div>
  );
}
