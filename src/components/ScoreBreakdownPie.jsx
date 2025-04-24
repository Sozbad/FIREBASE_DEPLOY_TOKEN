import React from "react";
import { PieChart, Pie, Cell } from "recharts";

// Get color based on score
const getColor = (score) => {
  if (score >= 7) return "#4CAF50"; // Green
  if (score >= 4) return "#FF9800"; // Orange
  return "#F44336"; // Red
};

const ScoreBreakdownPie = ({ health = 0, environment = 0, handling = 0 }) => {
  // Ensure we never pass undefined
  const safeHealth = Number(health || 0);
  const safeEnv = Number(environment || 0);
  const safeHandling = Number(handling || 0);

  const data = [
    { name: "Health", value: 1, score: safeHealth },
    { name: "Environment", value: 1, score: safeEnv },
    { name: "Handling", value: 1, score: safeHandling },
  ];

  const COLORS = data.map((d) => getColor(d.score));
  const average = ((safeHealth + safeEnv + safeHandling) / 3).toFixed(1);

  return (
    <div className="relative w-20 h-20">
      <PieChart width={80} height={80}>
        <Pie
          data={data}
          innerRadius={24}
          outerRadius={40}
          dataKey="value"
          startAngle={90}
          endAngle={-270}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
      </PieChart>
      <div className="absolute inset-0 flex items-center justify-center text-sm font-bold text-gray-800">
        {isNaN(average) ? "0.0" : average}
      </div>
    </div>
  );
};

export default ScoreBreakdownPie;
