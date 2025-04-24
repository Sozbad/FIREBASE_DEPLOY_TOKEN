import React from "react";
import { PieChart, Pie, Cell } from "recharts";

const getColor = (score) => {
  if (score >= 7) return "#4CAF50"; // Green
  if (score >= 4) return "#FF9800"; // Orange
  return "#F44336"; // Red
};

const ScoreBreakdownPie = ({ health, environment, handling }) => {
  const data = [
    { name: "Health", value: 1, score: health },
    { name: "Environment", value: 1, score: environment },
    { name: "Handling", value: 1, score: handling },
  ];

  const COLORS = data.map((d) => getColor(d.score));
  const average = Math.round(((health + environment + handling) / 3) * 10) / 10;

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
        {average}
      </div>
    </div>
  );
};

export default ScoreBreakdownPie;
