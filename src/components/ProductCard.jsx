import React from "react";
import ScoreBreakdownPie from "./ScoreBreakdownPie";
import HazardIcons from "./HazardIcons";

const ProductCard = ({ name, imageUrl, score, health, environment, handling, hazards }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 flex flex-col items-center text-center">
      <img
        src={imageUrl || "/images/placeholder.jpg"}
        alt={name}
        className="w-20 h-20 object-contain mb-2"
      />
      <h4 className="text-sm font-semibold mb-1 text-gray-800 line-clamp-2">{name}</h4>
      <ScoreBreakdownPie health={health} environment={environment} handling={handling} />
      <div className="mt-2">
<HazardIcons codes={hazards || []} />
      </div>
    </div>
  );
};

export default ProductCard;
