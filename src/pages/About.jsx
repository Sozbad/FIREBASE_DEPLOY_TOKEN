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

        <div className="flex
