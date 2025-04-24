import React from "react";
import { Link } from "react-router-dom";
import ScoreBreakdownPie from "./ScoreBreakdownPie";
import HazardIcons from "./HazardIcons";

const ProductCard = ({ id, name, imageUrl, health, environment, handling, hazards = [] }) => {
  return (
    <Link to={`/product/${id}`} className="block transition transform hover:scale-105 hover:shadow-lg">
      <div className="bg-white rounded-2xl shadow-md p-4 flex flex-col items-center text-center">
        <img
          src={imageUrl || "/images/placeholder.jpg"}
          alt={name}
          className="w-24 h-24 object-contain mb-3"
        />
        <h4 className="text-base font-semibold mb-2 text-gray-800 line-clamp-2">{name}</h4>
        <ScoreBreakdownPie health={health} environment={environment} handling={handling} />
        {hazards.length > 0 && (
          <div className="mt-3">
            <HazardIcons codes={hazards} />
          </div>
        )}
      </div>
    </Link>
  );
};

export default ProductCard;
