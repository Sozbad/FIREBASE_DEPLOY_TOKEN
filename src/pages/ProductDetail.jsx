import React from 'react';
import { useLocation } from 'react-router-dom';
import ScorePieChart from '../components/ScorePieChart';
import HazardIcons from '../components/HazardIcons';
import SwapSuggestion from '../components/SwapSuggestion';
import { BadgeCheck } from 'lucide-react';

export default function ProductDetail() {
  const { state: product } = useLocation();

  if (!product) {
    return <div className="p-6">No product data found.</div>;
  }

  return (
    <div className="min-h-screen bg-white pb-28">
      <div className="px-6 pt-8 pb-4 bg-gradient-to-br from-blue-100 to-white rounded-b-3xl shadow-sm">
        <h1 className="text-xl font-bold text-gray-900">{product.name}</h1>
        <p className="text-sm text-gray-600 mt-1">{product.function}</p>
      </div>

      {/* Image + Score */}
      <div className="px-6 pt-6">
        <div className="flex items-center gap-4">
          <img
            src={product.image || '/icons/placeholder.svg'}
            alt={product.name}
            className="w-20 h-20 rounded-xl object-cover bg-gray-100 border"
          />
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600">{product.score}</div>
            <p className="text-sm text-gray-600">EcoRank Score</p>
          </div>
        </div>
      </div>

      {/* Score Breakdown */}
      <div className="px-6 pt-6">
        <ScorePieChart
          healthScore={product.health || 0}
          envScore={product.environment || 0}
          disposalScore={product.disposal || 0}
        />
      </div>

      {/* Hazards */}
      {product.hazards?.length > 0 && (
        <div className="px-6 pt-6">
          <h2 className="text-sm font-bold mb-2">Hazards</h2>
          <HazardIcons hazards={product.hazards} />
        </div>
      )}

      {/* SDS Link */}
      {product.sds_url && (
        <div className="px-6 pt-6">
          <a
            href={product.sds_url}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-sm text-blue-600 hover:underline"
          >
            View full SDS →
          </a>
        </div>
      )}

      {/* Affiliate Link */}
      {product.affiliate?.enabled && (
        <div className="px-6 pt-6">
          <a
            href={product.affiliate.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-2 text-white text-center bg-green-600 hover:bg-green-700 py-2 rounded-lg text-sm font-medium"
          >
            Buy on {product.affiliate.partner}
            {product.affiliate.discountCode && (
              <span className="ml-2 text-xs bg-white text-green-700 px-2 py-0.5 rounded">
                {product.affiliate.discountCode}
              </span>
            )}
          </a>
        </div>
      )}

      {/* Recommendation */}
      {product.recommended && (
        <div className="px-6 py-6">
          <div className="flex items-center gap-2 bg-green-50 p-4 rounded-xl border">
            <BadgeCheck className="text-green-600" />
            <p className="text-sm text-green-800 font-medium">
              This product is recommended based on safety and environmental score.
            </p>
          </div>
        </div>
      )}

      {/* Suggested Swap */}
      {product.swap && <SwapSuggestion swap={product.swap} />}
    </div>
  );
}
