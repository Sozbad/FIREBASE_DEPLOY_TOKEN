import React from 'react';
import { useNavigate } from 'react-router-dom';
import HazardIcons from './HazardIcons';
import ScorePieChart from './ScorePieChart';

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
      className="p-4 rounded-2xl shadow-md border bg-white cursor-pointer hover:shadow-lg transition"
      onClick={() => navigate('/detail', { state: product })}
    >
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-semibold text-gray-900 truncate w-5/6">{product.name}</h2>
        <div
          className={`text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center ${getScoreColor()}`}
        >
          {score}
        </div>
      </div>

      {product.description && (
        <p className="text-sm text-gray-600 mb-2 line-clamp-2">{product.description}</p>
      )}

      {product.hazards && product.hazards.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-2">
          <HazardIcons hazards={product.hazards} />
        </div>
      )}

      <div className="mt-4">
        <ScorePieChart
          healthScore={product.health || 0}
          envScore={product.environment || 0}
          disposalScore={product.disposal || 0}
        />
      </div>
    </div>
  );
}
