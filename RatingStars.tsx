import React from "react";
// import { FaStar, FaRegStar } from "react-icons/fa";

interface RatingProps {
  rating: number; // From 1 to 5
}

const RatingStar: React.FC<RatingProps> = ({ rating }) => {
  return (
    <div className="flex">
      {Array.from({ length: 5 }, (_, i) => (
        // i < rating ? <FaStar key={i} className="text-yellow-500" /> : <FaRegStar key={i} className="text-gray-400" />
        <span key={i} className={i < rating ? "text-yellow-500" : "text-gray-400"}>★</span>
      ))}
    </div>
  );
};

export default RatingStar;
