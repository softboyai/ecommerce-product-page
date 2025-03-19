import React from "react";
import RatingStars from "./RatingStars";

interface ReviewCardProps {
  user: string;
  comment: string;
  rating: number;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ user, comment, rating }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md bg-white">
      <p className="font-bold">{user}</p>
      <RatingStars rating={rating} />
      <p className="text-gray-600 mt-1">{comment}</p>
    </div>
  );
};

export default ReviewCard;
