import React, { useState, useEffect } from "react";
import ProductDisplay from "../components/ProductDisplay";
import ReviewSection from "../components/ReviewSection";
import RelatedProducts from "../components/RelatedProducts";
import './ProductPage.css';

interface Review {
  text: string;
}

const ProductPage = ({ darkMode }: { darkMode: boolean }) => {
  const [reviews, setReviews] = useState<Review[]>([]);

  const addToCart = (product: any) => {
    console.log("Added to cart:", product);
  };

  const submitReview = (review: Review) => {
    setReviews([...reviews, review]);
  };

  return (
    <div className={`product-page ${darkMode ? 'dark' : ''}`}>
      <ProductDisplay 
        addToCart={addToCart} 
        products={[]} // Replace with actual data
        darkMode={darkMode} // Pass darkMode prop
      />
      <ReviewSection reviews={reviews} submitReview={submitReview} darkMode={darkMode} /> {/* Pass darkMode */}
      <RelatedProducts 
        products={[]} // Replace with actual data
        currentCategory="" // Replace with actual category
        addToCart={addToCart}
        darkMode={darkMode} // Pass darkMode prop
      />
    </div>
  );
};

export default ProductPage;
