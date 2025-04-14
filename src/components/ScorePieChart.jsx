import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const COLORS = ['#34D399', '#60A5FA', '#FBBF24']; // green, blue, yellow

const ScorePieChart = ({ healthScore = 3, envScore = 3, disposalScore = 3 }) => {
  const data = [
    { name: 'Health', value: healthScore },
    { name: 'Environment', value: envScore },
    { name: 'Disposal', value: disposalScore }
  ];

  return (
    <div className="w-full h-40">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={30}
            outerRadius={50}
            paddingAngle={3}
            dataKey="value"
          >
            {data.map((entry, i) => (
              <Cell key={`cell-${i}`} fill={COLORS[i % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="flex justify-around mt-2 text-xs text-gray-600">
        <span>🧬 Health</span>
        <span>🌿 Env</span>
        <span>🧺 Disposal</span>
      </div>
    </div>
  );
};

export default ScorePieChart;
