import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';

export default function ScorePieChart({ healthScore, envScore, disposalScore }) {
  const data = [
    { name: 'Health', value: healthScore },
    { name: 'Environment', value: envScore },
    { name: 'Disposal', value: disposalScore }
  ];

  const COLORS = ['#f87171', '#34d399', '#60a5fa'];

  return (
    <div className="flex flex-col items-center">
      <PieChart width={120} height={120}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={50}
          innerRadius={30}
          paddingAngle={4}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
      <div className="text-xs text-gray-500 mt-2">Health • Env • Disposal</div>
    </div>
  );
}
