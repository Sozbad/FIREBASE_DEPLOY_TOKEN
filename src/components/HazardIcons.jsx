import React from 'react';

const hazardIconMap = {
  Flammable: 'flammable.svg',
  Corrosive: 'corrosive.svg',
  Environment: 'environment.svg',
  Toxic: 'toxic.svg',
  Explosive: 'explosive.svg',
  'Health Hazard': 'health_hazard.svg',
  'Gas Cylinder': 'gas_cylinder.svg',
  Oxidizing: 'oxidizing.svg',
  'Skull & Crossbones': 'skull.svg'
};

export default function HazardIcons({ hazards = [] }) {
  return (
    <div className="flex flex-wrap gap-2 mt-2">
      {hazards.map((hazard, i) => {
        const icon = hazardIconMap[hazard] || null;
        return (
          <div key={i} className="w-10 h-10" title={hazard}>
            {icon ? (
              <img
                src={`/icons/${icon}`}
                alt={hazard}
                className="w-full h-full object-contain border border-gray-200 rounded-lg bg-white shadow-sm"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-xs text-gray-500 border rounded">
                {hazard}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
