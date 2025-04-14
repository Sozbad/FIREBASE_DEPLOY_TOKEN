import React from 'react';
import HazardIcons from './HazardIcons';

export default function ProductCard({ product }) {
  const score = product.score || 0;

  const getScoreColor = () => {
    if (score >= 9) return 'bg-green-500';
    if (score >= 7) return 'bg-yellow-400';
    if (score >= 4) return 'bg-orange-400';
    return 'bg-red-500';
  };

  return (
    <div className="p-4 rounded-2xl shadow-md border border-gray-100 bg-white transition hover:shadow-lg">
      <div className="flex justify-between items-start mb-3">
        <h2 className="text-lg font-semibold text-gray-900 leading-snug">{product.name}</h2>
        <div
          className={`text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${getScoreColor()}`}
          title={`EcoRank Score: ${score}/10`}
        >
          {score}
        </div>
      </div>

      {product.description && (
        <p className="text-sm text-gray-600 mb-3">{product.description}</p>
      )}

      {product.hazards && product.hazards.length > 0 && (
        <HazardIcons hazards={product.hazards} />
      )}
    </div>
  );
}
