import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';

export default function ScorePieChart({ score = 0, hazards = [] }) {
  const data = [
    { name: 'Health', value: hazards.includes('Health') ? 1 : 0, color: '#ef4444' },      // Red
    { name: 'Environment', value: hazards.includes('Environmental') ? 1 : 0, color: '#f97316' }, // Orange
    { name: 'Handling', value: hazards.includes('Handling') ? 1 : 0, color: '#22c55e' },  // Green
  ];

  return (
    <div className="my-2">
      <PieChart width={80} height={80}>
        <Pie
          data={data}
          cx={40}
          cy={40}
          innerRadius={24}
          outerRadius={32}
          paddingAngle={3}
          dataKey="value"
          isAnimationActive={false}
        >
          {data.map((entry, i) => (
            <Cell key={`cell-${i}`} fill={entry.color} />
          ))}
        </Pie>
        <text x={40} y={44} textAnchor="middle" dominantBaseline="middle" className="text-sm fill-gray-800 font-bold">
          {score.toFixed(1)}
        </text>
      </PieChart>
    </div>
  );
}
