import React from 'react';

const iconMap = {
  Flammable: '/icons/flame.svg',
  Corrosive: '/icons/corrosive.svg',
  Toxic: '/icons/toxic.svg',
  Environment: '/icons/environment.svg',
  Explosive: '/icons/explosive.svg',
  Gas: '/icons/gas.svg',
  Health: '/icons/health.svg',
  Irritant: '/icons/exclamation.svg',
  Oxidizer: '/icons/oxidizer.svg'
};

export default function HazardIcons({ hazards }) {
  return (
    <div className="flex flex-wrap gap-2 mt-2">
      {hazards.map((hazard, i) => (
        <div
          key={i}
          className="flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 shadow-sm text-gray-800 text-xs font-medium"
        >
          <img
            src={iconMap[hazard] || '/icons/warning.svg'}
            alt={hazard}
            className="w-4 h-4"
          />
          <span>{hazard}</span>
        </div>
      ))}
    </div>
  );
}
