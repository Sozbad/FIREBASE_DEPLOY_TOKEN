import React from 'react';

export default function ProductCard({ product }) {
  const score = product.score || 0;

  const getScoreColor = () => {
    if (score >= 9) return 'bg-green-500';
    if (score >= 7) return 'bg-yellow-400';
    if (score >= 4) return 'bg-orange-400';
    return 'bg-red-500';
  };

  return (
    <div className="border rounded-xl p-4 shadow-sm bg-white">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-medium">{product.name}</h2>
        <div
          className={`text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center ${getScoreColor()}`}
        >
          {score}
        </div>
      </div>

      <p className="text-sm text-gray-600 mb-2">
        {product.description || 'No description provided.'}
      </p>

      {product.hazards && product.hazards.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-2">
          {product.hazards.map((hazard, index) => (
            <span key={index} className="bg-gray-100 px-2 py-1 rounded text-xs">
              {hazard}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
