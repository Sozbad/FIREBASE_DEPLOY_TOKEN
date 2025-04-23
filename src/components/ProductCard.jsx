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
      onClick={() => navigate('/detail', { state: product })}
      className="bg-white rounded-xl shadow-md border hover:shadow-lg transition cursor-pointer overflow-hidden"
    >
      <div className="flex flex-col items-center p-4">
        <img
          src={product.image || '/icons/placeholder.svg'}
          alt={product.name}
          className="w-20 h-20 object-contain mb-2"
        />

        <div className="w-full">
          <div className="flex justify-between items-center mb-1">
            <h2 className="text-sm font-medium text-gray-800">{product.name}</h2>
            <div
              className={`text-white text-xs px-2 py-1 rounded-full font-bold ${getScoreColor()}`}
            >
              {score}/10
            </div>
          </div>

          {product.function && (
            <div className="text-xs text-gray-500 mb-1">{product.function}</div>
          )}

          {product.hazards?.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {product.hazards.slice(0, 3).map((hazard, i) => (
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
    </div>
  );
}
