import React from 'react';

const hazardMap = {
  Health: { emoji: '🧬', color: 'text-red-600 bg-red-100' },
  Environmental: { emoji: '🌿', color: 'text-orange-600 bg-orange-100' },
  Handling: { emoji: '🧤', color: 'text-green-600 bg-green-100' },
};

export default function HazardIcons({ hazards }) {
  return (
    <>
      {hazards.map((h, i) => {
        const config = hazardMap[h] || { emoji: '⚠️', color: 'text-gray-600 bg-gray-100' };
        return (
          <span
            key={i}
            className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${config.color}`}
          >
            {config.emoji} {h}
          </span>
        );
      })}
    </>
  );
}
