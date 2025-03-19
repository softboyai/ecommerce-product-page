import React from "react";
import Button from "./Button";
import RatingStars from "./RatingStars";

interface ProductCardProps {
  title: string;
  price: string;
  image: string;
  rating: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, price, image, rating }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md bg-white">
      <img src={image} alt={title} className="w-full h-40 object-cover rounded" />
      <h3 className="text-lg font-bold mt-2">{title}</h3>
      <RatingStars rating={rating} />
      <p className="text-blue-600 font-semibold mt-1">{price}</p>
      <Button label="Add to Cart" />
    </div>
  );
};

export default ProductCard;
