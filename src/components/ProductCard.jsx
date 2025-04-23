import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProductCard({ product }) {
  const navigate = useNavigate();
  const score = product.score || 0;

  const getScoreColor = () => {
    if (score >= 9) return 'bg-green-500';
    if (score >= 7) return 'bg-yellow-400';
    if (score >= 4) return 'bg-orange-400';
    return 'bg-red-500';
  };

  return (
    <div
      className="flex gap-4 items-start p-4 rounded-xl shadow-md border border-gray-200 bg-white hover:shadow-lg transition cursor-pointer"
      onClick={() => navigate('/detail', { state: product })}
    >
      {/* Image */}
      <img
        src={product.image || '/icons/placeholder.svg'}
        alt={product.name}
        className="w-16 h-16 rounded-lg object-cover border bg-gray-50"
      />

      {/* Main content */}
      <div className="flex-1 space-y-1">
        <div className="flex justify-between items-center">
          <h2 className="text-sm font-semibold text-gray-900">{product.name}</h2>
          <span className={`text-white text-xs font-bold px-2 py-1 rounded-full ${getScoreColor()}`}>
            {score}/10
          </span>
        </div>

        {product.function && (
          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
            {product.function}
          </span>
        )}

        {product.description && (
          <p className="text-xs text-gray-600">{product.description}</p>
        )}

        {product.hazards && product.hazards.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-1">
            {product.hazards.map((hazard, i) => (
              <span
                key={i}
                className="text-[10px] bg-red-100 text-red-700 px-2 py-0.5 rounded-full"
              >
                ⚠️ {hazard}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
