import React from 'react';
import HazardIcons from './HazardIcons';
import ScorePieChart from './ScorePieChart';

export default function ProductCard({ product, swap }) {
  const score = product.score || 0;

  const getScoreColor = () => {
    if (score >= 9) return 'bg-green-500';
    if (score >= 7) return 'bg-yellow-400';
    if (score >= 4) return 'bg-orange-400';
    return 'bg-red-500';
  };

  return (
    <div className="bg-white border rounded-2xl shadow-md p-4 space-y-4 transition hover:shadow-lg">
      {/* IMAGE + HEADER */}
      <div className="flex items-start gap-4">
        <img
          src={product.image || '/icons/placeholder.svg'}
          alt={product.name}
          className="w-16 h-16 rounded-xl object-cover bg-gray-100 border"
        />
        <div className="flex-1">
          <div className="flex justify-between items-center mb-1">
            <h2 className="text-base font-semibold text-gray-900 leading-tight">
              {product.name}
            </h2>
            <div
              className={`text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center ${getScoreColor()}`}
              title={`EcoRank Score: ${score}/10`}
            >
              {score}
            </div>
          </div>
          <p className="text-sm text-gray-600">{product.function || product.description}</p>
        </div>
      </div>

      {/* PIE CHART */}
      <ScorePieChart
        healthScore={product.health || 0}
        envScore={product.environment || 0}
        disposalScore={product.disposal || 0}
      />

      {/* HAZARDS */}
      {product.hazards && product.hazards.length > 0 && (
        <HazardIcons hazards={product.hazards} />
      )}

      {/* SDS LINK */}
      {product.sds_url && (
        <a
          href={product.sds_url}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-sm text-blue-600 hover:underline"
        >
          View SDS
        </a>
      )}

      {/* WHY RECOMMENDED */}
      {product.recommended && (
        <div className="text-sm text-green-700 bg-green-50 p-2 rounded-lg">
          ✅ This product is recommended based on a high score and lower risk profile.
        </div>
      )}

      {/* AFFILIATE LINK */}
      {product.affiliate?.enabled && (
        <a
          href={product.affiliate.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-2 text-white text-center bg-green-600 hover:bg-green-700 py-2 rounded-lg text-sm font-medium"
        >
          Buy on {product.affiliate.partner}
          {product.affiliate.discountCode && (
            <span className="ml-1 text-xs bg-white text-green-700 px-2 py-0.5 rounded">
              {product.affiliate.discountCode}
            </span>
          )}
        </a>
      )}

      {/* SWAP */}
      {swap && (
        <div className="mt-4 border-t pt-3">
          <p className="text-xs text-gray-500 mb-1">Looking for a better alternative?</p>
          <ProductCard product={swap} />
        </div>
      )}
    </div>
  );
}
