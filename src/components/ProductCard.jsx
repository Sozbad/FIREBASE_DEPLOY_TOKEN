import React from 'react';
import ScorePieChart from './ScorePieChart';
import HazardIcons from './HazardIcons';

export default function ProductCard({ product }) {
  const {
    name,
    description,
    function: purpose,
    hazards = [],
    image,
    score = 0,
  } = product;

  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition p-4 flex flex-col items-center justify-between">
      <img
        src={image || '/icons/placeholder.svg'}
        alt={name}
        className="w-20 h-20 object-contain mb-2"
      />

      <h2 className="text-sm font-semibold text-center text-gray-900">{name}</h2>

      {purpose && (
        <div className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full mt-1 mb-1">
          {purpose}
        </div>
      )}

      {description && (
        <p className="text-xs text-gray-600 text-center mb-2">{description}</p>
      )}

      <ScorePieChart score={score} hazards={hazards} />

      {hazards.length > 0 && (
        <div className="flex flex-wrap justify-center gap-1 mt-2">
          <HazardIcons hazards={hazards} />
        </div>
      )}
    </div>
  );
}
